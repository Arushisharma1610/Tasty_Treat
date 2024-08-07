// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const List = () => {

//   const url = "http://localhost:5001"
//   const [list,setList] = useState([]);

//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/dishes`);
//     console.log(response.data);
//     if(response.data.success){
//       setList(response.data.data);
//     }
//     else{
//       toast.error("Error");
//     }
//   }
//   useEffect(()=>{
//     fetchList();
//   },[])

//   return (
//     <div>

//     </div>
//   )
// }

// export default List

// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const List = () => {
//   const url = "http://localhost:5001";
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/dishes`);
//       console.log(response.data);

//       // Assuming response.data.data contains the dishes list
//       if (response.data && response.data.data) {
//         setList(response.data.data);
//       } else {
//         toast.error("Unexpected response structure");
//       }
//     } catch (error) {
//       // Handling errors, e.g., network errors
//       console.error('Error fetching data:', error);
//       toast.error("Error fetching dishes");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div>
//       {/* Render the list here */}
//     </div>
//   );
// };

// export default List;


import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import './List.css'

const List = ({url}) => {
  // const url = "http://localhost:5001";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/dishes`);
      // console.log('Response:', response.data);

      // Check if the response is an array or object with a data field
      if (Array.isArray(response.data)) {
        setList(response.data);
      } else if (response.data && response.data.data) {
        setList(response.data.data);
      } else {
        toast.error("Unexpected response structure");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("Error fetching dishes");
    }
  };

  // const removeFood = async(dish_id) => {
  //   // console.log(dish_id);
  //   const response = await axios.post(`${url}/api/dishes/${dish_id}`);
  //   await fetchList();
  // }

  const removeFood = async(dish_id) => {
    try {
        // Send DELETE request to the server with dish_id in the URL
        await axios.delete(`${url}/api/dishes/${dish_id}`);
        
        // Fetch the updated list of dishes
        await fetchList();
        
        // Optionally show a success message
        toast.success('Dish removed successfully');
    } catch (error) {
        console.error('Error removing dish:', error);
        toast.error('Failed to remove dish');
    }
};


  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index)=>{
          return(
            <div key={index} className='list-table-format'>
            <img src={`${url}/uploads/${item.image}`} alt={item.dish_name} />
              <p>{item.dish_name}</p>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item.dish_id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;

// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import './List.css';

// const List = () => {
//   const url = "http://localhost:5001";
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/dishes`);
//       // console.log('Response:', response.data);

//       // Check if the response is an array or object with a data field
//       if (Array.isArray(response.data)) {
//         setList(response.data);
//       } else if (response.data && response.data.data) {
//         setList(response.data.data);
//       } else {
//         toast.error("Unexpected response structure");
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error.response ? error.response.data : error.message);
//       toast.error("Error fetching dishes");
//     }
//   };

//   const removeFood = async (dish_id) => {
//     try {
//       // Send DELETE request to the server with dish_id in the URL
//       await axios.delete(`${url}/api/dishes/${dish_id}`);
      
//       // Fetch the updated list of dishes
//       await fetchList();
      
//       // Show a success message
//       toast.success('Dish removed successfully');
//     } catch (error) {
//       console.error('Error removing dish:', error.response ? error.response.data : error.message);
//       toast.error('Failed to remove dish');
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div className='list add flex-col'>
//       <p>All Foods List</p>
//       <div className='list-table'>
//         <div className='list-table-format title'>
//           <b>Image</b>
//           <b>Name</b>
//           <b>Description</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.map((item) => (
//           <div key={item.dish_id} className='list-table-format'>
//             <img src={`${url}/uploads/${item.image}`} alt={item.dish_name} />
//             <p>{item.dish_name}</p>
//             <p>{item.description}</p>
//             <p>${item.price}</p>
//             <p onClick={() => removeFood(item.dish_id)} className='cursor'>X</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;

