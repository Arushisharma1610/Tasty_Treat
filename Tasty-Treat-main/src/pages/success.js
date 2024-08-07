// import { useState, CSSProperties } from "react";
// import BounceLoader from "react-spinners/BounceLoader";
// import '../styles/success.css'



// function App() {
//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");

//   return (
//     <div className="sweet-loading">
//       <BounceLoader color="#e30f0f" />
//     </div>
//   );

// }


// export default App;







import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import '../styles/success.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Set a timeout to navigate after 2 seconds
    const timer = setTimeout(() => {
      navigate('/order'); // Navigate to the /order route
    }, 2000);

    // Cleanup function to clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]); // Dependency array includes navigate

  return (
    <div className="sweet-loading">
      <BounceLoader color="#e30f0f" />
    </div>
  );
}

export default App;


