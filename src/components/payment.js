import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/actions/actions";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";


export default function Payment() {
    const products = useSelector(state => state.productReducer.selectedProducts);
    const dispatch = useDispatch();
    const addToBuscket = (p) => dispatch(actions.addProductToCustomer(p));
    const lessToBuscket = (p) => dispatch(actions.oneLessProduct(p));
    const removeFromBuscket = (p) => dispatch(actions.removeProductToCustomer(p));
    const history = useHistory()
    let end;

    useEffect(() => {
        return function () {
            if (end) {
                end = window.confirm("you want continue to payment?")
                if (!end)
                    history.push('/payment');
            }
        }
    }, [])

    return (
        <>
            <div className="row"></div>
            <label>{(products && products[0]) ? 'your products:' : 'no products'}</label>
            <ul>
                {products && products.map((p, i) => {
                    return (<li key={i}>product: {p.product.name} price:{p.product.price}
                     amount:{p.amount}
                        <Button onClick={() => addToBuscket(p.product)}>+</Button>
                        <Button onClick={() => lessToBuscket(p.product)}>-</Button>
                        <Button onClick={() => removeFromBuscket(p.product)}>remove</Button>
                    </li>)
                })}
            </ul>
            <button onClick={() => end = true}>
                <Link to="/end" className="col-3">to pay</Link>
            </button>
        </>
    )
}