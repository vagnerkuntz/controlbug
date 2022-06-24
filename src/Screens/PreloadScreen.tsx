import React, {useEffect} from 'react';
import {
  ParamListBase,
  useNavigation,
  CommonActions,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SvgUri} from 'react-native-svg';

const Preload: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(
    () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      ),
    [],
  );

  return (
    <SvgUri
      width="100%"
      height="100%"
      uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
    />
  );
};

export default Preload;
