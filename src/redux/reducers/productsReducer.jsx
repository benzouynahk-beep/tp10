
const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  selectedCategory: "all",
  maxPrice: 0,
};

function getCategoryName(p) {
  return typeof p.category === "string" ? p.category : p.category?.name;
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case "ADD_PRODUCT":
      const newProducts = [...state.products, action.payload];
      return {
        ...state,
        products: newProducts,
        filteredProducts: newProducts.filter(p =>
          (state.selectedCategory === "all" || getCategoryName(p) === state.selectedCategory) &&
          (state.maxPrice === 0 || p.price <= state.maxPrice)
        ),
      };

    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts: state.products.filter(p =>
          (action.payload === "all" || getCategoryName(p) === action.payload) &&
          (state.maxPrice === 0 || p.price <= state.maxPrice)
        ),
      };

    case "SET_PRICE_FILTER":
      return {
        ...state,
        maxPrice: action.payload,
        filteredProducts: state.products.filter(p =>
          (state.selectedCategory === "all" || getCategoryName(p) === state.selectedCategory) &&
          (action.payload === 0 || p.price <= action.payload)
        ),
      };



      case "SET_FILTER_CATEGORY":
  return {
    ...state,
    selectedCategory: action.payload,
    filteredProducts: state.products.filter(p =>
      (action.payload === "all" || getCategoryName(p) === action.payload) &&
      (state.maxPrice === 0 || p.price <= state.maxPrice)
    ),
  };

case "SET_FILTER_PRICE":
  return {
    ...state,
    maxPrice: action.payload,
    filteredProducts: state.products.filter(p =>
      (state.selectedCategory === "all" || getCategoryName(p) === state.selectedCategory) &&
      (action.payload === 0 || p.price <= action.payload)
    ),
  };

    default:
      return state;
  }
}


