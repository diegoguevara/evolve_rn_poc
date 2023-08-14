import React, { PropsWithChildren } from 'react';

import { styled } from 'styled-components/native';

//#region  styled-components
const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 0 24px;
`
const TextItem = styled.Text``
//#endregion

const PageContent: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

export default PageContent;