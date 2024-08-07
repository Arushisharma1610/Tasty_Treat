// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const signupNameRef = useRef();
//   const signupPasswordRef = useRef();
//   const signupEmailRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Helmet title="Signup">
//       <CommonSection title="Signup" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     required
//                     ref={signupNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={signupEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={signupPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Sign Up
//                 </button>
//               </form>
//               <Link to="/login">Already have an account? Login</Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Register;


// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify"; // Make sure react-toastify is installed
// import {useNavigate } from 'react-router-dom';

// const Register = () => {
//   const signupNameRef = useRef();
//   const signupPasswordRef = useRef();
//   const signupEmailRef = useRef();
//   const navigate = useNavigate();


//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const name = signupNameRef.current.value;
//     const email = signupEmailRef.current.value;
//     const password = signupPasswordRef.current.value;

//     try {
//       const response = await axios.post("http://localhost:5001/api/auth/signup", {
//         name,
//         email,
//         password,
//       });
//       toast.success("Registration successful");
//       navigate('/login');
      
//       // toast.success("Registration successful");
//       // Redirect or clear form as needed
//     } catch (error) {
//       toast.error("Error registering user");
//       console.error("Registration error:", error);
//     }
//   };

//   return (
//     <Helmet title="Signup">
//       <CommonSection title="Signup" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     required
//                     ref={signupNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={signupEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={signupPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Sign Up
//                 </button>
//               </form>
//               <Link to="/login">Already have an account? Login</Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Register;













import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    try {
      const response = await axios.post("http://localhost:5001/api/auth/signup", {
        name,
        email,
        password,
      });

      toast.success("Registration successful");
      navigate('/login');
      
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("User already exists");
        } else {
          toast.error(error.response.data.message || "Error registering user");
        }
      } else {
        toast.error("Error registering user");
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar 
        closeOnClick 
        pauseOnHover 
        draggable 
        pauseOnFocusLoss 
        theme="colored"
        style={{ fontSize: "0.9rem", width: "auto" }} // Custom styles
      />
    </Helmet>
  );
};

export default Register;
