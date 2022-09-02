import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import http from '../constant/http';
import { addItem, removeItem } from '../redux/actions/cart';

export default function Show() {
    const params = useParams();
    console.log("params", params);
    const [product, setProduct] = useState({})
    const { cart = [] } = useSelector(state => state);
    const { id } = params;
    const dispatch = useDispatch();
    const [inCart, setInCart] = useState(cart.findIndex(el => el.id === product.id) !== -1)
    console.log("the cart", cart, inCart, cart.findIndex(el => el.id === product.id) !== -1);

    function getDetails() {
        http.get(`products/${id}`)
            .then(res => {
                console.log("on details product", res.data);
                if (res.status === 200)
                    setProduct(res.data ?? {})
            })
            .catch(err => console.error("on getting details", err.message))
    }

    const handleClick = () => {
        console.log("on handle add click");
        if (!inCart)
            dispatch(addItem(product))
        else
            dispatch(removeItem(product));
        setInCart(!inCart)
    }

    useEffect(() => {
        getDetails();
        setInCart(cart.findIndex(el => el.id === product.id) !== -1)

        return () => {
            return null
        }
    }, [])

    return (
        <div className='container'>
            <img className='img-fluid' width={'40%'} src={product.image} alt={product.name} />
            <h3>Nom : {product.name ?? 'Not defined'}</h3>
            <h5>Prix : {product.price ?? 'Not defined'} XAF</h5>
            <button onClick={handleClick} className={`btn btn-${!inCart ? 'primary' : 'danger'}`}>{!inCart ? 'Ajouter au panier' : 'Retirer du panier'}</button>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolor voluptates obcaecati magni similique fugit autem inventore quisquam illo mollitia? Repellendus veritatis voluptas est nesciunt!
            </p>
        </div>
    )
}