import {applyMiddleware, combineReducers,createStore} from 'redux';
import productReducer from './reducers/productReducer';
import {getProductsFromServer} from './middlewares/ProductsMiddlewares';

const reducer=combineReducers({productReducer});

const store = createStore(reducer,applyMiddleware(getProductsFromServer));
// const store = createStore(reducer);


window.store = store;
export default store;