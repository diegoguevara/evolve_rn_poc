import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { ButtonContainer, ButtonText } from './ButtonStyled';
import React, { PropsWithChildren, useEffect } from 'react';

import { ColorScheme } from '../Colors/ColorScheme';

interface IProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  noOverlay?: boolean;
  iconRight?: JSX.Element;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  variant?: 'dark' | 'outline' | 'outline_dark' | 'no-border' | undefined;
}

const Button: React.FC<PropsWithChildren<IProps>> = (props) => {
  const {
    isDisabled,
    isLoading,
    noOverlay,
    iconRight,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    style,
    variant,
  } = props;

  return (
    <ButtonContainer
      disabled={isDisabled}
      isDisabled={isDisabled}
      variant={variant}
      activeOpacity={0.8}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      style={style}
    >
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={
            variant === 'outline_dark'
              ? ColorScheme.secondaryActionColor
              : '#ddf0f2'
          }
        />
      )}
      {!isLoading && (
        <ButtonText variant={props.variant} disabled={isDisabled}>
          {props.children}
        </ButtonText>
      )}
      {iconRight}
    </ButtonContainer>
  );
};

Button.displayName = 'Button';

export default Button;
