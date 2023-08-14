import { Image, SafeAreaView, Text, View } from 'react-native';
import { Link, Navigator, Stack, useNavigation } from 'expo-router';

import { CalendarFooter } from '../components/CalendarFooter';
import Header from '../components/Header/Header';
import { Layout } from '../components/Layout';
import { LinkButton } from '../components/UI';
import { NavigatorProps } from 'expo-router/build/views/Navigator';
import { PageHeader } from '../components/PageHeader';
import { styled } from 'styled-components/native';

export default function Home() {
  const nav = useNavigation<any>();
  return (
    <SafeAreaView>
      <Layout>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Header />
        <PageHeader title="Bookings">
          View all of your Guest bookings and Owner blocks in the calendar
          below.
        </PageHeader>

        <CalendarFooter />
        {/* <LinkButton
            variant="button"
            justify="center"
            onPress={() => nav.navigate("listings")}
          >
            LISTINGS
          </LinkButton> */}
      </Layout>
    </SafeAreaView>
  );
}