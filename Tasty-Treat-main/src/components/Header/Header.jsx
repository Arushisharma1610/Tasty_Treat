// import React, { useRef, useEffect } from "react";

// import { Container } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";
// import { NavLink, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// import "../../styles/header.css";

// const nav__links = [
//   {
//     display: "Home",
//     path: "/home",
//   },
//   {
//     display: "Foods",
//     path: "/foods",
//   },
//   {
//     display: "Cart",
//     path: "/cart",
//   },
//   {
//     display: "Contact",
//     path: "/contact",
//   },
// ];

// const Header = () => {
//   const menuRef = useRef(null);
//   const headerRef = useRef(null);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   const dispatch = useDispatch();

//   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

//   const toggleCart = () => {
//     dispatch(cartUiActions.toggle());
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("header__shrink");
//       } else {
//         headerRef.current.classList.remove("header__shrink");
//       }
//     });

//     return () => window.removeEventListener("scroll");
//   }, []);

//   return (
//     <header className="header" ref={headerRef}>
//       <Container>
//         <div className="nav__wrapper d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//             <h5>Tasty Treat</h5>
//           </div>

//           {/* ======= menu ======= */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <div className="menu d-flex align-items-center gap-5">
//               {nav__links.map((item, index) => (
//                 <NavLink
//                   to={item.path}
//                   key={index}
//                   className={(navClass) =>
//                     navClass.isActive ? "active__menu" : ""
//                   }
//                 >
//                   {item.display}
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           {/* ======== nav right icons ========= */}
//           <div className="nav__right d-flex align-items-center gap-4">
//             <span className="cart__icon" onClick={toggleCart}>
//               <i class="ri-shopping-basket-line"></i>
//               <span className="cart__badge">{totalQuantity}</span>
//             </span>

//             <span className="user">
//               <Link to="/login">
//                 <i class="ri-user-line"></i>
//               </Link>
//             </span>

//             <span className="mobile__menu" onClick={toggleMenu}>
//               <i class="ri-menu-line"></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;

import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import "../../styles/header.css";
import { LuShoppingBag } from "react-icons/lu";
import { cartActions } from "../../store/shopping-cart/cartSlice"


const nav__links = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const toggleUserMenu = () => setIsUserMenuOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsUserMenuOpen(false);
    navigate('/login');


    dispatch(cartActions.clearCart());

    // Clear local storage
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalAmount");
    localStorage.removeItem("totalQuantity");

  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              {token ? (
                <div className="user__menu">
                  <FaUserCircle onClick={toggleUserMenu} className="user-icon" />
                  {isUserMenuOpen && (
                    <div className="user__menu__options">
                      <button onClick={() => navigate('/Cart')}>
                      <LuShoppingBag />
                        Orders
                      </button>
                      <button onClick={handleLogout}>
                        <MdLogout /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <i className="ri-user-line"></i>
                </Link>
              )}
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;







// import React, { useRef, useState, useEffect } from "react";
// import { Container } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
// import { FaUserCircle } from "react-icons/fa";
// import { MdLogout } from "react-icons/md";
// import "../../styles/header.css";
// import { toast } from "react-toastify";

// const nav__links = [
//   { display: "Home", path: "/home" },
//   { display: "Foods", path: "/foods" },
//   { display: "Cart", path: "/cart" },
//   { display: "Contact", path: "/contact" },
// ];

// const Header = () => {
//   const menuRef = useRef(null);
//   const headerRef = useRef(null);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

//   const toggleCart = () => {
//     dispatch(cartUiActions.toggle());
//   };

//   const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     toast.success("Logged out successfully");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("header__shrink");
//       } else {
//         headerRef.current.classList.remove("header__shrink");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="header" ref={headerRef}>
//       <Container>
//         <div className="nav__wrapper d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//             <h5>Tasty Treat</h5>
//           </div>

//           {/* ======= menu ======= */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <div className="menu d-flex align-items-center gap-5">
//               {nav__links.map((item, index) => (
//                 <NavLink
//                   to={item.path}
//                   key={index}
//                   className={(navClass) =>
//                     navClass.isActive ? "active__menu" : ""
//                   }
//                 >
//                   {item.display}
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           {/* ======== nav right icons ========= */}
//           <div className="nav__right d-flex align-items-center gap-4">
//             <span className="cart__icon" onClick={toggleCart}>
//               <i className="ri-shopping-basket-line"></i>
//               <span className="cart__badge">{totalQuantity}</span>
//             </span>

//             <div className="user__menu">
//               <span className="user" onClick={toggleUserMenu}>
//                 <FaUserCircle size={24} />
//               </span>
//               {userMenuOpen && (
//                 <div className="user__menu__options">
//                   <button onClick={() => navigate("/orders")}>
//                     <i className="ri-shopping-cart-line"></i> Orders
//                   </button>
//                   <button onClick={handleLogout}>
//                     <MdLogout size={20} /> Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             <span className="mobile__menu" onClick={toggleMenu}>
//               <i className="ri-menu-line"></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;




// import React, { useRef, useState, useEffect } from "react";
// import { Container } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
// import { FaUserCircle } from "react-icons/fa";
// import { MdLogout } from "react-icons/md";
// import "../../styles/header.css";
// import { toast } from "react-toastify";

// const nav__links = [
//   { display: "Home", path: "/home" },
//   { display: "Foods", path: "/foods" },
//   { display: "Cart", path: "/cart" },
//   { display: "Contact", path: "/contact" },
// ];

// const Header = () => {
//   const menuRef = useRef(null);
//   const headerRef = useRef(null);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

//   const toggleCart = () => {
//     dispatch(cartUiActions.toggle());
//   };

//   const toggleUserMenu = () => setUserMenuOpen((prev) => !prev);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     toast.success("Logged out successfully");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("header__shrink");
//       } else {
//         headerRef.current.classList.remove("header__shrink");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="header" ref={headerRef}>
//       <Container>
//         <div className="nav__wrapper d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <img src={logo} alt="logo" />
//             <h5>Tasty Treat</h5>
//           </div>

//           {/* ======= menu ======= */}
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <div className="menu d-flex align-items-center gap-5">
//               {nav__links.map((item, index) => (
//                 <NavLink
//                   to={item.path}
//                   key={index}
//                   className={(navClass) =>
//                     navClass.isActive ? "active__menu" : ""
//                   }
//                 >
//                   {item.display}
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           {/* ======== nav right icons ========= */}
//           <div className="nav__right d-flex align-items-center gap-4">
//             <span className="cart__icon" onClick={toggleCart}>
//               <i className="ri-shopping-basket-line"></i>
//               <span className="cart__badge">{totalQuantity}</span>
//             </span>

//             <div className="user" onClick={toggleUserMenu}>
//               <FaUserCircle size={24} />
//               {userMenuOpen && (
//                 <div className="user__menu__options">
//                   <button onClick={() => navigate("/orders")}>
//                     <i className="ri-shopping-cart-line"></i> Orders
//                   </button>
//                   <button onClick={handleLogout}>
//                     <MdLogout size={20} /> Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             <span className="mobile__menu" onClick={toggleMenu}>
//               <i className="ri-menu-line"></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;

