import { ColorScheme } from '../Colors/ColorScheme';
import styled from 'styled-components/native';

const ALPHA = '77';

const ButtonContainer = styled.TouchableOpacity<{
  variant: string | undefined;
  isDisabled?: boolean;
}>`
  ${(props) => {
    switch (props.variant) {
      case 'dark':
        return `
          background-color: ${ColorScheme.secondaryActionColor}
        `;
      case 'outline':
        return `
          background-color: ${ColorScheme.contrastTextColor};
          border: 2px solid ${ColorScheme.primaryActionColor};
        `;
      case 'no-border':
        return `
          background-color: ${ColorScheme.contrastTextColor};
        `;
      case 'outline_dark':
        return `
          background-color: ${ColorScheme.contrastTextColor};
          border: 2px solid ${ColorScheme.secondaryActionColor};
        `;
      default:
        return `background-color: ${ColorScheme.primaryActionColor};`;
    }
  }}

  ${(props) => {
    if (props.isDisabled) {
      if (props.variant === 'dark') {
        return `background-color: ${ColorScheme.secondaryActionColor}${ALPHA}`;
      }

      return 'opacity: 0.5;';
    }
  }}
  align-items: center;
  border-radius: 5px;
  height: 44px;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;
const ButtonText = styled.Text<{
  variant: string | undefined;
  disabled?: boolean;
}>`
  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return `color: ${ColorScheme.primaryActionColor};`;
      case 'outline_dark':
        return `color: ${ColorScheme.secondaryActionColor};`;
      case 'no-border':
        return `color: ${ColorScheme.secondaryActionColor};`;
      default:
        return `color: ${ColorScheme.contrastTextColor};`;
    }
  }}

  ${(props) => {
    if (props.variant === 'dark') {
      return `color: ${ColorScheme.contrastTextColor};`;
    }
  }}

  font-family: 'Montserrat_600SemiBold';
  font-size: 16px;
  text-transform: uppercase;
`;

export { ButtonContainer, ButtonText };
