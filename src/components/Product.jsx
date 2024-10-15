import React from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import { painting, shuttle, chocolate, clock } from '../Data'; 

const ProductDetails = () => {
    const { id } = useParams(); 
    let product = null; 

    product = painting.find(item => item.id === parseInt(id)) || 
              shuttle.find(item => item.id === parseInt(id)) || 
              chocolate.find(item => item.id === parseInt(id)) || 
              clock.find(item => item.id === parseInt(id)); 

   

    return (
        <div className="product-details">
            <h2>{product.brand} {product.model}</h2>
            <img src={product.image} alt={product.brand} />
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p className={`stock-status ${product.stock ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock ? "In Stock" : "Out of Stock"}
            </p>
            {product.price > 5000 && <p className='free-shipping'>Free Shipping</p>}
            {product.stock < 5 && product.stock > 0 && (
                <p className='low-stock-warning'>Hurry, only {product.stock} items left!</p>
            )}
            <button className="buy-now">Add to Cart</button> 
        </div>
    );
};

export default ProductDetails;
