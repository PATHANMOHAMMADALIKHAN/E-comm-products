import React from 'react';
import { Link } from 'react-router-dom'; 
import { painting } from '../Data';

export default function Painting() {
    return (
        <>
            <p className='cat-main' id='Painting'>Paintings</p>

            <div className='container'>
                {
                    painting.map((item) => (
                        <div className='container-main' key={item.id}>

                            <span className='discount'>Discount Available!</span>
                            
                            <img src={item.image} alt={item.brand} />
                            <div className='printer-details'>
                                <h2 className='brand'>{item.brand} {item.model}</h2>
                                <pre>Price: ${item.price} <strike>${10000}</strike></pre>
                                <p className='desc'>{item.description}</p>

                                <p className={`stock-status ${item.stock ? 'in-stock' : 'out-of-stock'}`}>
                                    {item.stock ? "In Stock" : "Out of Stock"}
                                </p>

                                <p>
                                {item.price > 200 && 
                                <p className='free-shipping'>Free Shipping</p>}
                                </p>
                                
                                {item.stock < 5 && item.stock > 0 && (
                                    <p className='low-stock-warning'>Hurry, only {item.stock} items left!</p>
                                )}
                                
                                
                                <Link to={`/product/${item.id}`}>
                                    <a className='buy-now'>BUY NOW</a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
