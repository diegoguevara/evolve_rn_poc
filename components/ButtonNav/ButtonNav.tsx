import { Platform, SafeAreaView, Text, View } from 'react-native';

import { Link } from 'expo-router';
import React from 'react';
import { styled } from 'styled-components/native';

const Conteiner = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-around;
`;

const NavLink = styled.View`
  height: 56px;
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 16px;
`;

const TabNav: React.FC = () => {
  if (Platform.OS === 'web') {
    return <></>
  }

  return (
    <SafeAreaView>
    <Conteiner>
      <Link href={{ pathname: '' }} >
        <NavLink>
          <Text>HOME</Text>
        </NavLink>
      </Link>
      <Link href={{ pathname: 'listings' }} >
        <NavLink>
          <Text>LISTINGS</Text>
        </NavLink>
      </Link>
    </Conteiner>
    </SafeAreaView>
  );
};

export default TabNav;
