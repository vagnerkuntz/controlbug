import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const HomeScreen: React.FC = () => {
  const netInfo = useNetInfo();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <StatusBar
        backgroundColor="#fff"
        translucent={true}
        barStyle="dark-content"
      />
      <View>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate({key: 'ErrorScreen', name: 'ErrorScreen'})
          }>
          <Text style={styles.text}>Click para testar</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={[
            styles.button,
            {backgroundColor: netInfo.isInternetReachable ? 'green' : 'gray'},
          ]}
          disabled={!netInfo.isInternetReachable}
          onPress={() => console.log('on press')}>
          <Text style={styles.text}>
            {netInfo.isInternetReachable ? 'Internet OK!' : 'Sem conexão'}
          </Text>
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
    backgroundColor: '#f0f',
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
