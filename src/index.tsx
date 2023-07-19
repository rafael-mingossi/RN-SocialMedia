import React, {FC} from 'react';
import Navigator from './config/Navigator';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App: FC = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
};

export default App;
