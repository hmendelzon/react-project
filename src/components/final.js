import { useSelector } from "react-redux";

export default function Final(){
    const products = useSelector(state => state.productReducer.selectedProducts);
    return(
        <>
        <div className="row"></div>
        <label>{(products &&products[0]) ? 'your products to pay:' : 'no products'}</label>
        <ul>
                {products && products.map((p, i) => {
                    return (<li key={i}>product: {p.product.name} price: {p.product.price}  amount: {p.amount}  sum:{p.product.price*p.amount}
                     
                    </li>)
                })}
            </ul>
            <label>sum to pay: {(products &&products[0]) ? products.reduce((sum, current) => sum + current.amount*current.product.price,0):0}</label>
        </>
    )
}