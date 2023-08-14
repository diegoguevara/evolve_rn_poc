import { Heading, Text } from '../UI';
import React, { PropsWithChildren } from 'react';

import { ColorScheme } from '../UI/Colors/ColorScheme';
import { Linking } from 'react-native';
import { PageContent } from '../Layout';
import styled from 'styled-components/native';

//#region  styled-components
const Container = styled.View`
  background-color: ${ColorScheme.backgroundAccentAlt};
  padding-top: 24px;
  padding-bottom: 16px;
`;
const TextContainer = styled.View`
  padding-top: 8px;
`;
//#endregion

interface IProps extends PropsWithChildren {
  title?: string | React.ReactNode;
  titleVariant?: 'default' | 'large' | 'medium' | 'small';
  linkText?: string;
  linkUrl?: string;
  loading?: boolean;
}

const PageHeader: React.FC<IProps> = (props) => {
  const { title, children, titleVariant, linkText, linkUrl, loading } = props;
  return (
    <Container>
      <PageContent>
        {title &&
          (typeof title === 'string' ? (
            <Heading color="contrast" variant={titleVariant || 'default'}>
              {title}
            </Heading>
          ) : (
            title
          ))}
        {children && (
          <TextContainer>
            <Text color="contrast" style={{ marginBottom: 11 }}>
              {children}
            </Text>
          </TextContainer>
        )}
      </PageContent>
    </Container>
  );
};

export default PageHeader;
