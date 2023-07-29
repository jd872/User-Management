import axios from 'axios';

export const setAPIResponse = (data) => ({
    type: 'SET_API_RESPONSE',
    payload: data,
});

export const fetchAPIResponse = () => {
    return (dispatch) => {
        axios.get('https://panorbit.in/api/users.json')
            .then((response) => {
                dispatch(setAPIResponse(response.data));
            })
            .catch((error) => {
                console.error('Error fetching API response:', error);
            });
    };
};