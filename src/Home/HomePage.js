import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPIResponse } from '../actions';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const apiResponse = useSelector((state) => state.apiResponse);

    useEffect(() => {
        // Fetch the API response when the component mounts
        dispatch(fetchAPIResponse());
    }, [dispatch]);

    const moveToUserDetails = (user) => {
        navigate(`user/${user.id}/profile`);
    }

    return (
        <div>
            <div style={{ height: '35vh', width: '100vw', top: '0', position: 'absolute', backgroundColor: 'rgb(0, 153, 255)', zIndex: '1' }}>
                <svg style={{ position: 'absolute', top: '32vh' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,80C672,64,768,96,864,112C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="landing-page-container">
                <div className="center-box">
                    <div className='list-title'>
                        <p>Select an account</p>
                    </div>
                    <div className="scrollable-list">

                        {apiResponse && apiResponse.users.map((user) => (
                            <div key={user.id} className="user-item" onClick={() => moveToUserDetails(user)}>
                                <img src={user.profilepicture} alt={user.name} />
                                <h4>{user.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;