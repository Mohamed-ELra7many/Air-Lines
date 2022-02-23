import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
            <div className="container-fluid ">
                <div className="links d-flex">
                    <Link to="/" className="nav-link fs-3">AIR LINES</Link>      {/*To go to the home page */}
                    <Link to="/compains" className="nav-link">COMPANIES</Link>   {/*Go to the companies page */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar