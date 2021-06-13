// import { useState } from "react";
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/actions/actions';


export default function Products(props) {
    const products = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();
    const nameRef = useRef('');
    const numRef = useRef('');

    // function getUsers(){
    //     fetch(`https://swapi.dev/api/people`,{method:"GET"}).
    //     then(res=>res.json())
    //     .then(res=>{setUsers((res.results));console.log(res.results)})
    //     .catch(err=>alert(users));
    // }

    const getAllProducts = () => dispatch(actions.getProducts());
    const changeProductName = () => dispatch(actions.patchProduct({id:numRef.current.value,name:nameRef.current.value}));



    return (
        <>
            <h1>call to server</h1>
            <button onClick={getAllProducts}>get products</button><br />
            <label>{products ? 'there are products' : 'no products'}</label>
            <ul>
                {products && products.map((p, i) => {
                    return (<li key={p._id}>product: {p.name} id:{p._id}
                    </li>)
                })}
            </ul>
                        <input ref={nameRef}></input>
                        <input ref={numRef}></input>
                        <button onClick={()=>changeProductName()}>change name</button>
        </>
    )
}