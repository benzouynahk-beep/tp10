
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import productsReducer from "./reducers/productsReducer";
import cartReducer  from './reducers/cartReducer';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;