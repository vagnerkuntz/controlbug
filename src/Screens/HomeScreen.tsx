import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import database from '@react-native-firebase/database';


const HomeScreen: React.FC = () => {
  const netInfo = useNetInfo();

  useEffect(() => {
    // adiciona os dados no banco
    // database()
    //   .ref('/users/123')
    //   .set({
    //     name: 'Ada Lovelace',
    //     age: 31,
    //   })
    //   .then(() => console.log('Data set.'));
    // lendo unico value
    //  database()
    //    .ref('/users/123')
    //    .once('value')
    //    .then(snapshot => {
    //      console.log('User data: ', snapshot.val());
    //    });
    // const remove = async () => {
    //   await database().ref('/users/123').remove();
    // };
    //
    // remove();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor="#fff"
        translucent={true}
        barStyle="dark-content"
      />
      <Text>...</Text>
      <View>
        <Pressable
          style={[
            styles.button,
            {backgroundColor: netInfo.isInternetReachable ? 'green' : 'gray'},
          ]}
          disabled={!netInfo.isInternetReachable}
          onPress={() => console.log('on press')}>
          <Text style={styles.text}>Tem internet?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
