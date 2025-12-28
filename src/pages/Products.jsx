// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchProducts,
//   setFilterCategory,
//   setFilterPrice
// } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const dispatch = useDispatch();

//   const {
//     products,
//     selectedCategory,
//     maxPrice
//   } = useSelector(state => state.products);

//   useEffect(() => {
//     if (products.length === 0) {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, products.length]);


//   const getCategoryName = p =>
//     typeof p.category === "string"
//       ? p.category
//       : p.category?.name;


//   const filteredProducts = products.filter(p => {
//     const matchCategory =
//       selectedCategory === "all" ||
//       getCategoryName(p) === selectedCategory;

//     const matchPrice =
//       maxPrice === 0 || p.price <= maxPrice;

//     return matchCategory && matchPrice;
//   });

//   const categories = [
//     "all",
//     ...new Set(products.map(p => getCategoryName(p)))
//   ];

//   return (
//     <div className="products-page">
//       <div className="header">
//         <h1>
//           Liste des produits ({filteredProducts.length})
//         </h1>

//         <Link to="/addproduct">
//           <button className="btn-add">
//             Creer un produit
//           </button>
//         </Link>
//       </div>

//       <div className="filters">
//         <select
//           value={selectedCategory}
//           onChange={e =>
//             dispatch(setFilterCategory(e.target.value))
//           }
//         >
//           {categories.map(cat => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="number"
//           placeholder="Prix maximum"
//           value={maxPrice === 0 ? "" : maxPrice}
//           onChange={e =>
//             dispatch(
//               setFilterPrice(
//                 e.target.value === ""
//                   ? 0
//                   : Number(e.target.value)
//               )
//             )
//           }
//         />
//       </div>

    
//       <div className="products-container">
//         {filteredProducts.length === 0 ? (
//           <p className="no-products">
//             chargement...
//           </p>
//         ) : (
//           filteredProducts.map(p => (
//             <div key={p.id} className="product-card">

//                 <img
//                 src={
//                   Array.isArray(p.images)
//                     ? p.images[0]
//                     : ""
//                 }
//                 alt={p.title}
//                 onError={e => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "/images/placeholder.png";
//                 }}
//               />

//               <strong>{p.title}</strong>

//               <span className="category">
//                 {getCategoryName(p)}
//               </span>

//               <span className="price">
//                 {p.price} DH
//               </span>

//               <button
//                 onClick={() => dispatch(addToCart(p))}
//               >
//                 Ajouter au panier
//               </button>

//               <Link to={`/products/${p.id}`}>
//                 <button className="details-btn">
//                   Details
//                 </button>
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;
// ;;;;;;;;;;;;
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchProducts,
//   setFilterCategory,
//   setFilterPrice
// } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "./Products.css";

// function Products() {
//   const dispatch = useDispatch();

//   const {
//     products,
//     selectedCategory,
//     maxPrice
//   } = useSelector(state => state.products);

//   useEffect(() => {
//     if (products.length === 0) {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, products.length]);


//   const getCategoryName = p =>
//     typeof p.category === "string"
//       ? p.category
//       : p.category?.name;


//   const filteredProducts = products.filter(p => {
//     const matchCategory =
//       selectedCategory === "all" ||
//       getCategoryName(p) === selectedCategory;

//     const matchPrice =
//       maxPrice === 0 || p.price <= maxPrice;

//     return matchCategory && matchPrice;
//   });

//   const categories = [
//     "all",
//     ...new Set(products.map(p => getCategoryName(p)))
//   ];

//   return (
//     <div className="products-page">
//       <div className="header">
//         <h1>
//           Liste des produits ({filteredProducts.length})
//         </h1>

//         <Link to="/addproduct">
//           <button className="btn-add">
//             Creer un produit
//           </button>
//         </Link>
//       </div>

//       <div className="filters">
//         <select
//           value={selectedCategory}
//           onChange={e =>
//             dispatch(setFilterCategory(e.target.value))
//           }
//         >
//           {categories.map(cat => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>

//         <input
//           type="number"
//           placeholder="Prix maximum"
//           value={maxPrice === 0 ? "" : maxPrice}
//           onChange={e =>
//             dispatch(
//               setFilterPrice(
//                 e.target.value === ""
//                   ? 0
//                   : Number(e.target.value)
//               )
//             )
//           }
//         />
//       </div>

    
//       <div className="products-container">
//         {filteredProducts.length === 0 ? (
//           <p className="no-products">
//             chargement...
//           </p>
//         ) : (
//           filteredProducts.map(p => (
//             <div key={p.id} className="product-card">

//                <img
//   src={
//     Array.isArray(p.images) && p.images.length > 0 && p.images[0]
//       ? p.images[0]
//       : "/images/placeholder.png"
//   }
//   alt={p.title || "Produit"}
//   onError={e => {
//     e.target.onerror = null;
//     e.target.src = "/images/placeholder.png";
//   }}
// />

//               <strong>{p.title}</strong>

//               <span className="category">
//                 {getCategoryName(p)}
//               </span>

//               <span className="price">
//                 {p.price} DH
//               </span>

//               <button
//                 onClick={() => dispatch(addToCart(p))}
//               >
//                 Ajouter au panier
//               </button>

//               <Link to={`/products/${p.id}`}>
//                 <button className="details-btn">
//                   Details
//                 </button>
//               </Link>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;
// ::::::::::::::::::::
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  setFilterCategory,
  setFilterPrice
} from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();

  const {
    products,
    selectedCategory,
    maxPrice
  } = useSelector(state => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);


  const getCategoryName = p =>
    typeof p.category === "string"
      ? p.category
      : p.category?.name;


  const filteredProducts = products.filter(p => {
    const matchCategory =
      selectedCategory === "all" ||
      getCategoryName(p) === selectedCategory;

    const matchPrice =
      maxPrice === 0 || p.price <= maxPrice;

    return matchCategory && matchPrice;
  });

  const categories = [
    "all",
    ...new Set(products.map(p => getCategoryName(p)))
  ];

  return (
    <div className="products-page">
      <div className="header">
        <h1>
          Liste des produits 
        </h1>

        <Link to="/addproduct">
          <button className="btn-add">
            Creer un produit
          </button>
        </Link>
      </div>

      <div className="filters">
        <select
          value={selectedCategory}
          onChange={e =>
            dispatch(setFilterCategory(e.target.value))
          }
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Prix maximum"
          value={maxPrice === 0 ? "" : maxPrice}
          onChange={e =>
            dispatch(
              setFilterPrice(
                e.target.value === ""
                  ? 0
                  : Number(e.target.value)
              )
            )
          }
        />({filteredProducts.length})
      </div>

    
      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <p className="no-products">
            chargement...
          </p>
        ) : (
          filteredProducts.map(p => (
            <div key={p.id} className="product-card">

            <img
  src={
    Array.isArray(p.images) && p.images.length > 0 && p.images[0]
      ? p.images[0]
      : "https://via.placeholder.com/150"
  }
  alt={p.title || "Produit"}
  onError={e => {
    e.target.onerror = null; 
    e.target.src = "https://via.placeholder.com/150"; 
  }}
/>

              <strong>{p.title}</strong>

              <span className="category">
                {getCategoryName(p)}
              </span>

              <span className="price">
                {p.price} DH
              </span>

              <button
                onClick={() => dispatch(addToCart(p))}
              >
                Ajouter au panier
              </button>

              <Link to={`/products/${p.id}`}>
                <button className="details-btn">
                  Details
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;




















