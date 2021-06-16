import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
        <Link to="/about" className="col-3">about</Link>
        <Link to="/products" className="col-3">products</Link>
        <Link to="/payment" className="col-3">payment</Link>
        
        </>
    )
}