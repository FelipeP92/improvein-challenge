import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to = '/'>Log In</Link>
                    <div>
                    <Link className="navbar-brand" to = '/bands'>Music Bands</Link>               
                    <Link className="navbar-brand" to = '/albums'>Albums</Link>               
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar;