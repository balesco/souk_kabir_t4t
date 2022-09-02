import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import http from '../constant/http';
import { slugify } from '../constant/textFormatting';

export default function Home() {
    const [products, setProducts] = useState([]);

    function getProducts() {
        http.get('products/')
            .then(res => {
                console.log(res.data);
                if (res.status === 200)
                    setProducts(res.data ?? [])
            })
            .catch(err => {
                console.error("on getting products", err.message);
            })
    }

    useEffect(() => {
        getProducts();

        return () => {
            return null;
        }
    }, [])

    return (
        <div>
            <div className='content'>
                <h1>Les articles</h1>
                <div className="row w-100 px-5">
                    {
                        products.map(product => (
                            <div className="border mx-auto col-6 col-md-4 col-lg-3 d-block" key={'product-' + product.id}>
                                <a href={`/detail/${product.id}/${slugify(product.name)}`}>
                                    <img className='img-fluid' width={200} src={product.image} alt={product.name} />
                                    <h3 className='text-body'>{product.name}</h3>
                                    <h4 className='small'>{product.price} XAF</h4>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
