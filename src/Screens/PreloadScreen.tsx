import React from 'react';
import {
  ParamListBase,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
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
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Home'}],
          }),
        )
      }
    />
  );
};

export default Preload;
