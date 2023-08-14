import { Text, View } from 'react-native';

import React from 'react';
import { Stack } from 'expo-router';

const home: React.FC = () => {
    return (
      <>
        <Stack.Screen
          options={{
            title: 'asda a',
          }}
        />
        <View><Text>component</Text></View>
      </>
    )
}

export default home;