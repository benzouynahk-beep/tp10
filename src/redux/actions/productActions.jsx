
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      dispatch({ type: "SET_PRODUCTS", payload: data });
    } catch (error) {
      console.error("Erreur fetchProducts:", error);
      
    }
  };
};


export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product
});



export const setFilterCategory = category => ({
  type: "SET_FILTER_CATEGORY",
  payload: category
});

export const setFilterPrice = price => ({
  type: "SET_FILTER_PRICE",
  payload: price
});