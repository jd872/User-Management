// src/components/PopupCard.js
import React from 'react';
import './PopupCard.css';
import { Link, useNavigate } from 'react-router-dom';

const PopupCard = ({ show, user, allUser }) => {
    const navigate = useNavigate();
    if (!show) {
        return null;
    }
    const getRandomRecommendedUsers = (user, allUser) => {
        const filteredUsers = allUser.filter(item => user.id !== item.id);
        const recommendedUsers = filteredUsers.sort(() => 0.5 - Math.random()).slice(0, 2);
        return recommendedUsers;
    };

    const recommendedUsers = getRandomRecommendedUsers(user, allUser.users);


    return (
        <div className="popup-card">
            <div className="user-info">
                <img src={user.profilepicture} alt={user.name} />
                <h3>{user.name}</h3>
                <h4 style={{ marginTop: '-5px' }}>{user.email}</h4>
            </div>
            <hr />
            <ul className="recommended-users">
                {recommendedUsers.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}/profile`}>
                            <img src={user.profilepicture} alt={user.name} />
                            <span>{user.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="signout-btn" onClick={() => navigate('/')}>Sign Out</button>
        </div>
    );
};

export default PopupCard;
