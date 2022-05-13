import React from 'react';
import {Button} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import PreloadScreen from '../Screens/PreloadScreen';
import ErrorScreen from '../Screens/ErrorScreen';
import {ParamListBase, useNavigation} from '@react-navigation/native';

const MainStack = createNativeStackNavigator();

export default () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <MainStack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <MainStack.Screen
        name="Preload"
        component={PreloadScreen}
        options={{statusBarHidden: true}}
      />
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="ErrorScreen"
        component={ErrorScreen}
        options={{
          headerShown: true,
          title: 'Error Screen',
          headerTitleAlign: 'center',
          gestureEnabled: false,
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Voltar"
              color="#000"
            />
          ),
        }}
      />
    </MainStack.Navigator>
  );
};
