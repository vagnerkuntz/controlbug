import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {captureRef, captureScreen} from 'react-native-view-shot';
import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';
import * as Console from 'console';

const ErrorScreen: React.FC = () => {
  const [url, setUrl] = useState<any>();

  const capture = () => {
    captureRef(viewRef, {
      format: "jpg",
      quality: 0.8
    }).then(
      uri => {
        console.log("Image saved to", uri);
        setUrl(uri);
      },
      error => console.error("Oops, snapshot failed", error)
    );

    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      uri => {
        setUrl(uri);
      },
      error => {
        console.error('Oops, snapshot failed', error);
        // errorCaptureScreen = error;
      },
    );

    console.log(url);
  };

  useEffect(() => {
    try {
      console.log(window.device.version);
    } catch (error: any) {
      // const errorMessage = error?.message;
      // let errorCaptureScreen = '';
      console.log('bateu');
      capture();

      // database()
      //   .ref(`/error/${uuid.v4()}`)
      //   .set({
      //     errorMessage,
      //     errorCaptureScreen,
      //   })
      //   .then(() => console.log('Data set.'));
    }
  }, []);

  return (
    <View>
      <Text>Tela de erro</Text>
      <Image
        source={{
          uri: url,
        }}
        style={{width: 350, height: 350}}
      />
      <Text>Tela de erro</Text>
    </View>
  );
};

export default ErrorScreen;
