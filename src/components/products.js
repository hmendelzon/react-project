// import { useState } from "react";
// import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/actions/actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Products(props) {
    const products = useSelector(state => state.productReducer.products);
    const dispatch = useDispatch();
    const addToBuscket = (p) => dispatch(actions.addProductToCustomer(p));


    return (
        <>
           
           <div className="row">
                {products && products instanceof Array && products.map((p, i) => {
                    return (
                    <Card style={{ width: '18rem' }} key={i}>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>
                            price:   {p.price}
    </Card.Text>
                    <Button variant="primary" onClick={() => addToBuscket(p)}>add to buscket</Button>
                </Card.Body>
            </Card>
                    
                 
                    )
                })
                    }
          
                    </div>

        </>
    )
}