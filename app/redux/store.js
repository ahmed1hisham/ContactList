import {createStore} from 'redux';
import AppReducer from '../reducers/AppReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
