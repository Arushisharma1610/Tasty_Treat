// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const loginNameRef = useRef();
//   const loginPasswordRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };



//   return (
//     <Helmet title="Login">
//       <CommonSection title="Login" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={loginNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={loginPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Login
//                 </button>
//               </form>
//               <Link to="/register">
//                 Don't have an account? Create an account
//               </Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Login;


// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify"; // Make sure react-toastify is installed

// const Login = () => {
//   const loginEmailRef = useRef();
//   const loginPasswordRef = useRef();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const email = loginEmailRef.current.value;
//     const password = loginPasswordRef.current.value;

//     try {
//       const response = await axios.post("http://localhost:5001/api/auth/login", {
//         email,
//         password,
//       });

//       // Save the token to localStorage or a state management solution
//       localStorage.setItem('token', response.data.token);

//       toast.success("Login successful");
//       // Redirect or handle login success as needed
//     } catch (error) {
//       toast.error("Error logging in");
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <Helmet title="Login">
//       <CommonSection title="Login" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={loginEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={loginPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Login
//                 </button>
//               </form>
//               <Link to="/register">
//                 Don't have an account? Create an account
//               </Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Login;


// **************************************correct code*************************************************


// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify"; // Ensure react-toastify is installed

// const Login = () => {
//   const loginEmailRef = useRef();
//   const loginPasswordRef = useRef();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const email = loginEmailRef.current.value;
//     const password = loginPasswordRef.current.value;

//     console.log('Submitting login with', { email, password });

//     try {
//       const response = await axios.post("http://localhost:5001/api/auth/login", {
//         email,
//         password,
//       });

//       console.log('Login response:', response);

//       localStorage.setItem('token', response.data.token);

//       toast.success("Login successful");
//       // Redirect or handle login success as needed
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("Error logging in");
//     }
//   };

//   return (
//     <Helmet title="Login">
//       <CommonSection title="Login" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={loginEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={loginPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Login
//                 </button>
//               </form>
//               <Link to="/register">
//                 Don't have an account? Create an account
//               </Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Login;

import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Ensure react-toastify is installed

const Login = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    console.log('Submitting login with', { email, password });

    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      console.log('Login response:', response);

      localStorage.setItem('token', response.data.token);

      toast.success("Login successful");

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Error logging in");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

