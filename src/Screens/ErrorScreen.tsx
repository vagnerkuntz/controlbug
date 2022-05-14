import React, {useState, useRef, useCallback, useEffect} from 'react';
import {Text, Image} from 'react-native';

import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';

import { sendEmail } from '../utils/send-email';

const ErrorScreen: React.FC = () => {
  const viewShotRef = useRef();
  const [source, setSource] = useState<any>(null);

  const onCapture = useCallback(() => {
    viewShotRef?.current?.capture().then(async (uri: any) => {
      const data = await RNFS.readFile(uri, 'base64');
      setSource({ uri: 'data:image/png;base64,' + data });
    });
  }, []);

  useEffect(() => {
    try {
      console.log(window.device.version);
    } catch (error: any) {
      onCapture()
    }
  }, [])

  useEffect(() => {
    if (source?.uri) {
      console.log('gerou uma foto no banco')
      // database()
      //   .ref(`/error/${uuid.v4()}`)
      //   .set({
      //     errorMessage: 'Erro de teste',
      //     errorCaptureScreen: 'Teste',
      //     imageBase64: source?.uri
      //   })
      //   .then(() => console.log('Data set.'));
    }
  }, [source])
  

  return (
    <>
      {source?.uri ? <Image source={{ uri: source?.uri }} style={{width: 500, height: 500, resizeMode: 'contain', borderWidth: 1, borderColor: 'red'}} /> : (
        <>
          <Text>sem imagem</Text>
        </>
      )}

      <ViewShot ref={viewShotRef}>
        <Text>---------------------</Text>
        <Text>Tela de erro</Text>
        <Text>---------------------</Text>
        <Text>Tela de erro</Text>
      </ViewShot>
    </>
  );
};

export default ErrorScreen;
