import React from 'react'
import { chocolate } from '../Data'
import { Link } from 'react-router-dom'; 


export default function Chocolate() {
    return (
        <>
            <p className='cat-main' id='Chocolate'>Chocolates</p>

            <div className='container'>

                {
                    chocolate.map((item) => (
                        <div className='container-main'>
                            <span className='discount'>Discount Available</span>
                            <img src={item.image} alt={item.brand} />
                            <div className='printer-details'>
                                <h2 className='brand' >{item.brand} {item.model}</h2>
                                <pre>Price: ${item.price} <strike>${1000}</strike></pre>
                                <p className='desc'>{item.description}</p>

                                <p className={`stock-status ${item.stock ? 'in-stock' : 'out-of-stock'}`}>
                                     {item.stock ? "In Stock" : "Out of Stock"}
                                </p>

                                {item.stock < 5 && item.stock > 0 && (
                                    <p className='low-stock-warning'>Hurry, only {item.stock} items left!</p>
                                )}

                                <Link to={`/product/${item.id}`}>
                                    <a className='buy-now'>BUY NOW</a>
                                </Link>
                            </div>
                        </div>)
                    )
                }
            </div>
        </>
    )
}
