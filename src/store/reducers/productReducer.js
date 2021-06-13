import produce from 'immer';
import createReducer from './reducerUtil';
const initialState = {
    products: null
    // [
    // {
    //     name: "bread",
    //     price: 7,
    // },
    // {
    //     name: "milk",
    //     price: 7,
    // },
    // {
    //     name: "sugar",
    //     price: 7,
    // }
    // ]
    ,
    selectedProducts: []

};

const products = {
    initProducts(state, action) {
        state.products = action.payload;
    },
    addProductToCustomer(state, action) {
        state.selectedProducts.push(action.payload)
    },
    oneMoreProduct(state, action) {
        let p = Array.find(state.selectedProducts(p => p.name = action.payload.name));
        p.amount++;
    },
    oneLessProduct(state, action) {
        let p = Array.find(state.selectedProducts(p => p.name = action.payload.name));
        if (p.amount === 1) {
            let pos = state.selectedProducts.indexOf(p);
            state.selectedProducts.splice(pos, 1)
        }
        else
            p.amount--
    },
    removeProductToCustomer(state, action) {
        state.selectedProducts.filter(p => p.name !== action.payload)
    },
    getProducts(state, action) {
    },
    patchProduct(state, action) {
        //fetch


        
        const url=`http://localhost:3002/setName/${action.payload.id}`
        
        
        fetch(url,
            {
                method: "PATCH",
                headers: { "Authorization": "eyJhbGciOiJIUzI1NiJ9.bXkgZmlyc3QgZnVsbHN0YWsgcHJvamVjdCBpbiByZWFjdA.uCYy-Mfr3mzANnnDxtZLzHuInC_vbL_TBT5cOI8GKnA",
                    "Content-Type": "application/json"},
                body: JSON.stringify({ name: action.payload.name }),
            })
            .then(data=>console.log(data))
            .catch(err => alert(err));

        //axios
        // axios.get(`http://localhost:3002/getAllProducts`)
        //     .then(res => res.data)
        //     .then(res => dispatch(actions.initProducts(res)))
        //     .catch(err => alert(err));

    },
}
export default produce(
    (state, action) => createReducer(state, action, products)
    , initialState);
