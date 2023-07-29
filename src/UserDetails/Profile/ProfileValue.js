import React from 'react';
import './ProfileValue.css';

const ProfileValue = ({ data }) => {
    return (
        <div className='table-container'>
            <table>
                <tbody>
                    {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td style={{ display: 'flex', justifyContent: 'end', color: 'gray', fontWeight: '500' }}>{key}:</td>
                            <td style={{ fontWeight: '600' }}>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProfileValue