import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './app/redux/store';
import AppNavigator from './app/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PersistGate} from 'redux-persist/integration/react';

const App = (props) => {
  useEffect(() => {
    Icon.loadFont();
    //persistor.purge();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
