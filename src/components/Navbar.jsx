import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='nav'>
            <nav className="navbar">
                <Link to='./'>
                    <img src="a.png" alt="" />
                </Link>
                <ul>
                   <li><Link to='./'>All Products</Link></li>
                   <li><Link to='./Painting'>Painting</Link></li>
                   <li><Link to='./Chocolate'>Chocolate</Link></li>
                   <li><Link to='./Clock'>Clock</Link></li>
                   <li><Link to='./Shuttle'>Shuttle</Link></li>
                </ul>
            </nav>

        </div>
    )
}
