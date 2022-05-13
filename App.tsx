import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
