import React, { PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { TitleContainer } from './TitleStyled';

interface IProps {
  variant?: 'default' | 'uppercase';
  style?: StyleProp<TextStyle>;
}

const Title: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { variant = 'default', children, style } = props;
  return (
    <TitleContainer variant={variant} style={style}>
      {children}
    </TitleContainer>
  );
};

export default Title;
