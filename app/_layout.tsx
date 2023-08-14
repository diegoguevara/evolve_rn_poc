import {
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { Platform, Text, View } from 'react-native';
import { Stack, Tabs } from 'expo-router';

import ButtonNav from '../components/ButtonNav/ButtonNav';
import React from 'react';
import { useFonts } from 'expo-font';

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <></>;
  }

  // return (
  //   <Stack />
  // );

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
      }}
      tabBar={(props) =>
        <ButtonNav />
      }
    >
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          // tabBarIcon: ({ color }) => (
          //   <View><Text>!!!</Text></View>
          // ),
        }}
      />
      <Tabs.Screen
        name="listings"
        options={{
          href: {
            pathname: "/listings",
          },
          // tabBarIcon: ({ color }) => (
          //   <View>222</View>
          // ),
        }}
      />
    </Tabs>
  );
}
