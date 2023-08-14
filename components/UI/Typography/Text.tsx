import React, { PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { TextContainer, TextRequired } from './TextStyled';

interface IProps {
  variant?: 'default' | 'small' | 'large' | 'link-style' | 'caption' | 'label';
  color?:
    | 'default'
    | 'subtext'
    | 'highlight'
    | 'contrast'
    | 'danger'
    | 'error'
    | 'errorContrast';
  style?: StyleProp<TextStyle>;
  isBold?: boolean;
  isItalic?: boolean;
  numberOfLines?: number;
  isRequired?: boolean;
}

const Text: React.FC<PropsWithChildren<IProps>> = (props) => {
  const {
    variant = 'default',
    children,
    color = 'default',
    style,
    isBold,
    isItalic,
    isRequired,
    numberOfLines,
  } = props;
  return (
    <TextContainer
      variant={variant}
      color={color}
      style={style}
      isBold={isBold}
      isItalic={isItalic}
      numberOfLines={numberOfLines}
    >
      {children}
      {isRequired && <TextRequired> *</TextRequired>}
    </TextContainer>
  );
};

export default Text;
