// import React, { useEffect, useState } from 'react'
// import { assets } from '../../admin_assets/assets'
// import './Add.css'

// const Add = () => {

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name:"",
//         description: "",
//         price: "",
//         category: "Salad"
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.vale;
//         setData(data => ({...data, [name]:value}))
//     }

//     useEffect(()=>{
//         console.log(data);
//     },[data])

//   return (
//     <div className='add'>
//     <form className='flex-col'>
//         <div className='add-img-upload flex-col'>
//             <p>Upload Image</p>
//             <label htmlFor='image'>
//                     <img src={image?URL.createObjectURL(image): assets.upload_area} alt='' />
//             </label>
//             <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
//         </div>
//         <div className='add-product-name flex-col' >
//             <p>Product Name</p>
//             <input onChange={onChangeHandler} value={data.name} type='text'  name='name' placeholder='Type here' />
//         </div>
//         <div className='add-product-description flex-col'>
//             <p>Product Description</p>
//             <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required ></textarea>
//         </div>
//         <div className='add-category-price'>
//         <div className='add-category flex-col'>
//             <p>Product category</p>
//             <select onChange={onChangeHandler} name='category'>
//             <option value="Salad">Salad</option>
//             <option value="Rolls">Rolls</option>
//             <option value="Deserts">Deserts</option>
//             <option value="Sandwich">Sandwich</option>
//             <option value="Cake">Cake</option>
//             <option value="Pure Veg">Pure Veg</option>
//             <option value="Pasta">Pasta</option>
//             <option value="Noodles">Noodles</option>
//             </select>
//         </div>
//             <div className='add-rpice flex-col'>
//                 <p>Product price</p>
//                 <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20' />
//             </div>
//         </div>

//         <button type='submit' className='add-btn' >ADD</button>
//     </form>
//     </div>
//   )
// }

// export default Add


// import React, { useState } from 'react';
// import { assets } from '../../admin_assets/assets';
// import './Add.css';
// import axios from 'axios';

// const Add = () => {
//   const url = "http://localhost:5001";

//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

   

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
    
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("image", image);

   
//     try {
//       const response = await axios.post(`${url}/api/dishes`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Response:', response.data);
//       // Handle success (e.g., show a success message, reset the form, etc.)
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <div className='add'>
//       <form className='flex-col' onSubmit={onSubmitHandler}>
//         <div className='add-img-upload flex-col'>
//           <p>Upload Image</p>
//           <label htmlFor='image'>
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt='Upload Area'
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type='file'
//             id='image'
//             hidden
//             required
//           />
//         </div>
//         <div className='add-product-name flex-col'>
//           <p>Product Name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type='text'
//             name='name'
//             placeholder='Type here'
//           />
//         </div>
//         <div className='add-product-description flex-col'>
//           <p>Product Description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name='description'
//             rows='6'
//             placeholder='Write content here'
//             required
//           ></textarea>
//         </div>
//         <div className='add-category-price'>
//           <div className='add-category flex-col'>
//             <p>Product Category</p>
//             <select onChange={onChangeHandler} name='category' value={data.category}>
//               <option value="Salad">Salad</option>
//               <option value="Rolls">Rolls</option>
//               <option value="Deserts">Deserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Cake">Cake</option>
//               <option value="Pure Veg">Pure Veg</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Noodles">Noodles</option>
//             </select>
//           </div>
//           <div className='add-price flex-col'>
//             <p>Product Price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type='number'
//               name='price'
//               placeholder='$20'
//             />
//           </div>
//         </div>
//         <button type='submit' className='add-btn'>
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;



// import React, { useState } from 'react';
// import { assets } from '../../admin_assets/assets';
// import './Add.css';
// import axios from 'axios';

// const Add = () => {
//   const url = "http://localhost:5001";

//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
    
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("image", image);

//     try {
//       const response = await axios.post(`${url}/api/dishes`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Response:', response.data);

//       // Clear the form data and image preview
//       setData({
//         name: "",
//         description: "",
//         price: "",
//         category: "Salad",
//       });
//       setImage(null);

//       // Optionally show a success message or redirect
//     } catch (error) {
//       console.error('Error:', error.response || error.message);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   return (
//     <div className='add'>
//       <form className='flex-col' onSubmit={onSubmitHandler}>
//         <div className='add-img-upload flex-col'>
//           <p>Upload Image</p>
//           <label htmlFor='image'>
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt='Upload Area'
//             />
//           </label>
//           <input
//             onChange={onImageChange}
//             type='file'
//             id='image'
//             hidden
//             required
//           />
//         </div>
//         <div className='add-product-name flex-col'>
//           <p>Product Name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type='text'
//             name='name'
//             placeholder='Type here'
//             required
//           />
//         </div>
//         <div className='add-product-description flex-col'>
//           <p>Product Description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name='description'
//             rows='6'
//             placeholder='Write content here'
//             required
//           ></textarea>
//         </div>
//         <div className='add-category-price'>
//           <div className='add-category flex-col'>
//             <p>Product Category</p>
//             <select onChange={onChangeHandler} name='category' value={data.category}>
//               <option value="Salad">Salad</option>
//               <option value="Rolls">Rolls</option>
//               <option value="Deserts">Deserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Cake">Cake</option>
//               <option value="Pure Veg">Pure Veg</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Noodles">Noodles</option>
//             </select>
//           </div>
//           <div className='add-price flex-col'>
//             <p>Product Price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type='number'
//               name='price'
//               placeholder='$20'
//               required
//             />
//           </div>
//         </div>
//         <button type='submit' className='add-btn'>
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;



import React, { useState } from 'react';
import { assets } from '../../admin_assets/assets';
import './Add.css';
import axios from 'axios';
import { toast } from 'react-toastify';


const Add = ({url}) => {
  // const url = "http://localhost:5001";

  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("dish_name", data.name); // Ensure this matches backend field
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    // formData.append("portion_size", data.category); 
    // formData.append("status", "Available"); 
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/dishes`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);

      // Clear the form data and image preview
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(null);
      toast.success('Dish added successfully!');

      // Optionally show a success message or redirect
    } catch (error) {
      console.error('Error:', error.response || error.message);
      // Handle error (e.g., show an error message)
      toast.error("Error Occured, Item is not added!");
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt='Upload Area'
            />
          </label>
          <input
            onChange={onImageChange}
            type='file'
            id='image'
            hidden
            required
          />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='Type here'
            required
          />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name='description'
            rows='6'
            placeholder='Write content here'
            required
          ></textarea>
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            {/* <p>Product Category</p> */}
            {/* <select onChange={onChangeHandler} name='category' value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select> */}
          </div>
          <div className='add-price flex-col'>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type='number'
              name='price'
              placeholder='$20'
              required
            />
          </div>
        </div>
        <button type='submit' className='add-btn'>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
