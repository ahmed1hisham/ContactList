import {createStore} from 'redux';
import AppReducer from '../reducers/AppReducer';

let store = createStore(AppReducer);

export default store;
