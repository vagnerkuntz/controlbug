import React from 'react';
import {View, Button, SafeAreaView, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const App: React.FC = () => {
  const netInfo = useNetInfo();

  return (
    <SafeAreaView>
      <Text>...</Text>
      <View>
        <Button title="internet?" disabled={!netInfo.isInternetReachable} />
      </View>
    </SafeAreaView>
  );
};

export default App;
