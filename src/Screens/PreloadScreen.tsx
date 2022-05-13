import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import LottieView from 'lottie-react-native';

const Preload: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <LottieView
      source={require('../assets/bug.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() =>
        navigation.navigate({
          key: 'Home',
          name: 'Home',
        })
      }
    />
  );
};

export default Preload;
