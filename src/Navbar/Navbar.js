import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const UserNavbar = ({ id }) => {
    const location = useLocation('/profile');
    const currentRoute = location.pathname.split('/').pop();

    var isProfile = false;
    var isPosts = false;
    var isGallery = false;
    var isTodos = false;

    if (currentRoute === 'profile') {
        isProfile = true;
    }
    else if (currentRoute === 'posts') {
        isPosts = true;
    }
    else if (currentRoute === 'gallery') {
        isGallery = true;
    }
    else if (currentRoute === 'todo') {
        isTodos = true;
    }


    return (
        <div className='navbar-container'>
            <div className="user-navbar" >
                <div className='nav-item'>
                    <Link to={`/user/${id}/profile`} className={isProfile ? 'active' : ''}>Profile</Link>
                </div>
                <div className='nav-item'>
                    <Link to={`/user/${id}/posts`} className={isPosts ? 'active' : ''}>Posts</Link>
                </div>
                <div className='nav-item'>
                    <Link to={`/user/${id}/gallery`} className={isGallery ? 'active' : ''}>Gallery</Link>
                </div>
                <div className='nav-item'>
                    <Link to={`/user/${id}/todo`} className={isTodos ? 'active' : ''}>ToDos</Link>
                </div>
            </div>
        </div>
    );
};

export default UserNavbar;