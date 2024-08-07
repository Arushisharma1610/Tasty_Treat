// import React, { useState } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";

// import { Container, Row, Col } from "reactstrap";

// import products from "../assets/fake-data/products";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import ReactPaginate from "react-paginate";

// import "../styles/all-foods.css";
// import "../styles/pagination.css";

// const AllFoods = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const [pageNumber, setPageNumber] = useState(0);

//   const searchedProduct = products.filter((item) => {
//     if (searchTerm.value === "") {
//       return item;
//     }
//     if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return item;
//     } else {
//       return console.log("not found");
//     }
//   });

//   const productPerPage = 12;
//   const visitedPage = pageNumber * productPerPage;
//   const displayPage = searchedProduct.slice(
//     visitedPage,
//     visitedPage + productPerPage
//   );

//   const pageCount = Math.ceil(searchedProduct.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <Helmet title="All-Foods">
//       <CommonSection title="All Foods" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6" xs="12">
//               <div className="search__widget d-flex align-items-center justify-content-between ">
//                 <input
//                   type="text"
//                   placeholder="I'm looking for...."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <span>
//                   <i class="ri-search-line"></i>
//                 </span>
//               </div>
//             </Col>
//             <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
//               <div className="sorting__widget text-end">
//                 <select className="w-50">
//                   <option>Default</option>
//                   <option value="ascending">Alphabetically, A-Z</option>
//                   <option value="descending">Alphabetically, Z-A</option>
//                   <option value="high-price">High Price</option>
//                   <option value="low-price">Low Price</option>
//                 </select>
//               </div>
//             </Col>

//             {displayPage.map((item) => (
//               <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
//                 <ProductCard item={item} />
//               </Col>
//             ))}

//             <div>
//               <ReactPaginate
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 previousLabel={"Prev"}
//                 nextLabel={"Next"}
//                 containerClassName=" paginationBttns "
//               />
//             </div>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default AllFoods;


// import React, { useState, useEffect } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";

// import { Container, Row, Col } from "reactstrap";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import ReactPaginate from "react-paginate";

// import "../styles/all-foods.css";
// import "../styles/pagination.css";

// const AllFoods = () => {
//   const [foods, setFoods] = useState([]); // State to store food items
//   const [searchTerm, setSearchTerm] = useState("");
//   const [pageNumber, setPageNumber] = useState(0);

//   // Fetch food items from the API
//   useEffect(() => {
//     fetch("http://localhost:5001/api/dishes")
//       .then((response) => response.json())
//       .then((data) => setFoods(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Filter foods based on the search term
//   const searchedFood = foods.filter((item) => {
//     if (searchTerm === "") {
//       return item;
//     }
//     if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return item;
//     }
//     return false;
//   });

//   const productPerPage = 12;
//   const visitedPage = pageNumber * productPerPage;
//   const displayPage = searchedFood.slice(
//     visitedPage,
//     visitedPage + productPerPage
//   );

//   const pageCount = Math.ceil(searchedFood.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <Helmet title="All-Foods">
//       <CommonSection title="All Foods" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6" xs="12">
//               <div className="search__widget d-flex align-items-center justify-content-between ">
//                 <input
//                   type="text"
//                   placeholder="I'm looking for...."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </Col>
//             <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
//               <div className="sorting__widget text-end">
//                 <select className="w-50">
//                   <option>Default</option>
//                   <option value="ascending">Alphabetically, A-Z</option>
//                   <option value="descending">Alphabetically, Z-A</option>
//                   <option value="high-price">High Price</option>
//                   <option value="low-price">Low Price</option>
//                 </select>
//               </div>
//             </Col>

//             {displayPage.map((item) => (
//               <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
//                 <ProductCard item={item} />
//               </Col>
//             ))}

//             <div>
//               <ReactPaginate
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 previousLabel={"Prev"}
//                 nextLabel={"Next"}
//                 containerClassName=" paginationBttns "
//               />
//             </div>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default AllFoods;




// import React, { useState, useEffect } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";

// import { Container, Row, Col } from "reactstrap";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import ReactPaginate from "react-paginate";

// import "../styles/all-foods.css";
// import "../styles/pagination.css";

// const AllFoods = () => {
//   const [foods, setFoods] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [pageNumber, setPageNumber] = useState(0);

//   useEffect(() => {
//     fetch("http://localhost:5001/api/dishes")
//       .then((response) => response.json())
//       .then((data) => setFoods(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const searchedFood = foods.filter((item) => {
//     if (searchTerm === "") {
//       return item;
//     }
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const productPerPage = 12;
//   const visitedPage = pageNumber * productPerPage;
//   const displayPage = searchedFood.slice(
//     visitedPage,
//     visitedPage + productPerPage
//   );

//   const pageCount = Math.ceil(searchedFood.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <Helmet title="All-Foods">
//       <CommonSection title="All Foods" />

//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="6" xs="12">
//               <div className="search__widget d-flex align-items-center justify-content-between ">
//                 <input
//                   type="text"
//                   placeholder="I'm looking for...."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </Col>
//             <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
//               <div className="sorting__widget text-end">
//                 <select className="w-50">
//                   <option>Default</option>
//                   <option value="ascending">Alphabetically, A-Z</option>
//                   <option value="descending">Alphabetically, Z-A</option>
//                   <option value="high-price">High Price</option>
//                   <option value="low-price">Low Price</option>
//                 </select>
//               </div>
//             </Col>

//             {displayPage.map((item) => (
//               <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
//                 <ProductCard item={item} />
//               </Col>
//             ))}

//             <div>
//               <ReactPaginate
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 previousLabel={"Prev"}
//                 nextLabel={"Next"}
//                 containerClassName="paginationBttns"
//               />
//             </div>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default AllFoods;




import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice"; // Adjust path as needed

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5001/api/dishes")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchedFood = foods.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    return item.dish_name.toLowerCase().includes(searchTerm.toLowerCase()); // Adjusted for API data
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedFood.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedFood.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const addToCart = (item) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.dish_name, // Updated property name
        image: item.image,
        price: item.price,
      })
    );
  };

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} addToCart={() => addToCart(item)} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
