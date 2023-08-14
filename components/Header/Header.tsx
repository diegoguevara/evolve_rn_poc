import { Platform, View } from 'react-native';

import EvolveLogo from './EvolveLogo';
import LeftArrow from './LeftArrow';
import { Link } from 'expo-router';
import { PageContent } from '../Layout';
import React from 'react';
import { Text } from '../UI';
import { styled } from 'styled-components/native';

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  height: 56px;
  justify-content: flex-start;
  width: 100%;
`;

const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: flex-start;
  height: 56px;
  width: 100%;
`;

const NavSection = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 32px;
`;

const NavLink = styled(Link)`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

const BackLink = styled(Link)`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;
const IconButton = styled.View`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const UserSection = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
`;

const UserAvatar = styled.Image`
  border-radius: 50px;
  height: 32px;
  width: 32px;
`;

const UserName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;

interface IProps {
  showBackButton?: boolean;
}

const Header: React.FC<IProps> = ({ showBackButton }) => {
return (
    <Container>
      <PageContent>
        <Content>
          {(Platform.OS !== 'web' && showBackButton)  && <BackLink href={{ pathname: '' }}>
            <IconButton>
              <LeftArrow />
            </IconButton>
          </BackLink>}
          <EvolveLogo />
          {Platform.OS === 'web'  && <NavSection>
            <NavLink href={{ pathname: '' }}>HOME</NavLink>
            <NavLink href={{ pathname: 'listings' }}>LISTINGS</NavLink>
          </NavSection>
          }
          {Platform.OS === 'web'  && <UserSection>
            <UserAvatar source={{ uri: 'https://i.pravatar.cc/32?img=4'}} />
              <UserName>Diego</UserName>
            </UserSection>
          }
        </Content>
      </PageContent>
    </Container>
  );
};

export default Header;
