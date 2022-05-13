import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import PreloadScreen from '../Screens/PreloadScreen';

const MainStack = createNativeStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      initialRouteName="Preload"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name="Preload"
        component={PreloadScreen}
        options={{statusBarHidden: true}}
      />
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
