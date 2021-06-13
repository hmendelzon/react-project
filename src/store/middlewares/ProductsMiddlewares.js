import axios from "axios";
import { actions } from "../actions/actions";

//fetch
export const getProductsFromServer = ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === "GET_PRODUCTS") {
        fetch(`http://localhost:3002/getAllProducts`, {
            method: "GET",
            headers: { "Authorization": "eyJhbGciOiJIUzI1NiJ9.bXkgZmlyc3QgZnVsbHN0YWsgcHJvamVjdCBpbiByZWFjdA.uCYy-Mfr3mzANnnDxtZLzHuInC_vbL_TBT5cOI8GKnA" }
        }).
            then(res => res.json())
            .then(res => dispatch(actions.initProducts(res)))
            .catch(err => alert(err));
    }

    return next(action);
}

//axios
// export const getProductsFromServer = ({ dispatch, getState }) => (next) => (action) => {
//     if (action.type === "GET_PRODUCTS") {
//         axios.get(`http://localhost:3002/getAllProducts`)
//         .then(res => res.data)
//             .then(res => dispatch(actions.initProducts(res)))
//             .catch(err => alert(err));
//     }

//     return next(action);
// }

