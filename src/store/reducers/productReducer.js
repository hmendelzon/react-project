import produce from 'immer';
import createReducer from './reducerUtil';
import bread from '../../images/bread.jpg'
import milk from '../../images/milk.jpg'
import sugar from '../../images/sugar.jpg'
const initialState = {
    products:
        [
            {
                name: "bread",
                price: 7,
                image: bread
            },
            {
                name: "milk",
                price: 5,
                image: milk
            },
            {
                name: "sugar",
                price: 3,
                image: sugar
            }
        ]
    ,
    selectedProducts: []

};

const products = {
    addProductToCustomer(state, action) {
        let pro = state.selectedProducts.find(p => p.product.name === action.payload.name);
        if (!pro) {
            let product=action.payload
            state.selectedProducts.push({product,amount:1})
        }
        else
            pro.amount++;
    },
    oneLessProduct(state, action) {
        let pro = state.selectedProducts.find(p => p.product.name === action.payload.name);
        if (pro.amount===1) {
            let product=action.payload
            state.selectedProducts=state.selectedProducts.filter({product,amount:1})
        }
        else
            pro.amount--;
    },
    removeProductToCustomer(state, action) {
        state.selectedProducts= state.selectedProducts.filter(p => p.product.name !== action.payload.name)
    },
    getProducts(state, action) {
    },

}
export default produce(
    (state, action) => createReducer(state, action, products)
    , initialState);
