import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './Profile.css';
import ProfileValue from './ProfileValue';

const Profile = () => {
    const user = useOutletContext();

    const userData = {
        'Username': user.name,
        'e-mail': user.email,
        'Phone': user.phone,
        'Website': user.website
    }
    const companyData = {
        'Name': user.company?.name,
        'catchPhrase': user.company?.catchPhrase,
        'bs': user.company?.bs
    }
    const addressData = {
        'Street': user.address?.street,
        'Suite': user.address?.suite,
        'City': user.address?.city,
        'Zipcode': user.address?.zipcode,
    }

    return (
        <div>
            <div className='profile-details'>
                <div className='profile-basic-details'>

                    <img src={user.profilepicture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <div><ProfileValue data={userData} /></div>

                    <h2 style={{ color: 'gray' }}>Company</h2>
                    <ProfileValue data={companyData} />
                </div>
                <div className='profile-adress'>
                    <h2 style={{ color: 'gray' }}>Address:</h2>
                    <ProfileValue data={addressData} />
                    <img src="/map.png" alt="map" />
                    <div className='profile-adress-details'>
                        <p><strong>Lat:</strong>{user.address?.geo?.lat}</p>
                        <p><strong>Lang:</strong>{user.address?.geo?.lng}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile