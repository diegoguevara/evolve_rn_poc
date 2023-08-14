import { LinkContainer, LinkTouchable } from './LinkStyled';
import React, { PropsWithChildren } from 'react';

import { ColorScheme } from '../Colors/ColorScheme';
import { GestureResponderEvent } from 'react-native';

interface IProps {
  variant?:
    | 'default'
    | 'button'
    | 'button-dark'
    | 'button-dark-secondary'
    | 'small'
    | 'light';
  justify?: 'left' | 'center' | 'right';
  customIcon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  iconColor?: string;
  textColor?: string;
}
const LinkButton: React.FC<PropsWithChildren<IProps>> = (props) => {
  const {
    variant,
    justify,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    customIcon,
    children,
    iconColor = ColorScheme.primaryActionColor,
  } = props;
  return (
    <LinkTouchable
      justify={justify}
      activeOpacity={0.8}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
    >
      <LinkContainer variant={variant || 'default'}>{children}</LinkContainer>
    </LinkTouchable>
  );
};

export default LinkButton;
