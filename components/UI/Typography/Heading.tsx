import React, { PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { HeadingContainer } from './HeadingStyled';

interface IProps {
  variant?: 'default' | 'large' | 'medium' | 'small' | 'pagetitle';
  color?: 'default' | 'subtext' | 'highlight' | 'contrast';
  style?: StyleProp<TextStyle>;
}

const Heading: React.FC<PropsWithChildren<IProps>> = (props) => {
  const { variant = 'default', children, color = 'default', style } = props;
  return (
    <HeadingContainer variant={variant} color={color} style={style}>
      {children}
    </HeadingContainer>
  );
};

export default Heading;
