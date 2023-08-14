import React, { PropsWithChildren } from 'react';

import { Platform } from 'react-native';
import { styled } from 'styled-components/native';

const IS_WEB = Platform.OS === "web";

//#region  styled-components
const Container = styled.View`
  width: 100%;
  align-items: center;
  height: ${() => IS_WEB ? "100vh" : "auto"};
`
const Content = styled.View`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  display: flex;;
`
//#endregion

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
    )
}

export default Layout;