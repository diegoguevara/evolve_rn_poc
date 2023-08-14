import { ColorScheme } from '../Colors/ColorScheme';
import styled from 'styled-components/native';

const LinkTouchable = styled.TouchableOpacity<{ justify?: string }>`
  flex-direction: row;
  align-items: center;
  padding: 5px;
  ${(props) => {
    switch (props.justify) {
      case 'center':
        return `
          justify-content: center;
        `;
      case 'right':
        return `
          justify-content: flex-end;
        `;
      // default left
      default:
        return `
          justify-content: flex-start;
        `;
    }
  }}
`;
const LinkContainer = styled.Text<{ variant: string }>`
  font-size: 16px;
  padding-right: 8px;
  font-family: 'Montserrat_600SemiBold';
  flex-direction: row;
  ${(props) => {
    switch (props.variant) {
      case 'button':
        return `
          color: ${ColorScheme.primaryActionColor};
        `;
      case 'button-dark':
        return `
          color: ${ColorScheme.linkColor};
        `;
      case 'button-dark-secondary':
        return `
          color: ${ColorScheme.secondaryActionColor};
        `;
      case 'light':
        return `color: ${ColorScheme.backgroundInput};`;
      default:
        return `
          text-decoration-line: underline;
          color: ${ColorScheme.linkColor};
        `;
    }
  }}
`;

export { LinkContainer, LinkTouchable };
