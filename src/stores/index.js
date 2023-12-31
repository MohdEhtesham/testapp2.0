import { createStore } from 'redux';
import cartReducer from './reducers';

// Create the Redux store
const store = createStore(cartReducer);

export default store;
