// src/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  apiResponse: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_RESPONSE':
      return { ...state, apiResponse: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;