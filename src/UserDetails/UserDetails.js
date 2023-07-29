import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPIResponse } from '../actions';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import UserNavbar from '../Navbar/Navbar';
import './UserDetails.css';
import PopupCard from './popUp';
import ChatPopup from './ChatPopup/ChatPopup';

const UserDetails = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const apiResponse = useSelector((state) => state.apiResponse);
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation('/profile');
    const currentRoute = location.pathname.split('/').pop();

    useEffect(() => {
        // Fetch the API response when the component mounts
        dispatch(fetchAPIResponse());
    }, [dispatch]);

    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        if (apiResponse && userId) {
            const userDetails = apiResponse.users.find((user) => user.id === Number(userId));

            if (userDetails) {
                setUser(userDetails);
            }
        }

    }, [apiResponse, userId])


    if (!apiResponse) {
        return <div>Loading...</div>;
    }
    return (
        <div className='userDetail-container'>
            <div className='navbar'>
                <UserNavbar id={user.id} />
            </div>
            <div className="nav-container">
                <div className='profile-header'>
                    <p style={{ fontSize: '30px', fontWeight: '600' }}>{currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}</p>
                    <div className='user-avatar' onClick={handleTogglePopup}>
                        <img src={user.profilepicture} alt={user.name} />
                        <p style={{ fontSize: '20px' }}>{user.name}</p>
                    </div>
                </div>
                <PopupCard show={showPopup} user={user} allUser={apiResponse} />
                <div>
                    <Outlet context={user} />
                </div>
            </div>
            <ChatPopup users={apiResponse.users} />

        </div>
    )
}

export default UserDetails