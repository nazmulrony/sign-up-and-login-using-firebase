import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const navigateToLogin = useNavigate()
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { navigateToLogin('/login') })
            .catch(() => { });
    }

    return (
        <div>



            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">devUI</Link>
                <div className='flex gap-4 w-full '>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to="/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
                    <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                    <Link to="/login" className="btn btn-ghost normal-case text-xl">Log In</Link>
                    <div className='flex justify-end gap-3 w-full pr-10'>
                        <button className="btn btn-outline btn-accent"> currecnt user: {user?.email}</button>
                        {
                            user && <button onClick={handleLogOut} className="btn btn-outline btn-error">Sign Out</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;