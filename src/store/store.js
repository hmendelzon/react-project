import { combineReducers,createStore} from 'redux';
import productReducer from './reducers/productReducer';

const reducer=combineReducers({productReducer});

const store = createStore(reducer);


window.store = store;
export default store;