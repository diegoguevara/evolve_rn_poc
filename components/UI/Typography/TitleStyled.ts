import { ColorScheme } from '../Colors/ColorScheme';
import styled from 'styled-components/native';

const TitleContainer = styled.Text<{ variant: string }>`
  ${(props) => {
    switch (props.variant) {
      case 'uppercase':
        return `
          color: ${ColorScheme.highlightTextColor};
          font-family: 'Nunito_700Bold';
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 22px;
        `;
      default:
        return `
          color: ${ColorScheme.textColor};
          font-family: 'Nunito_700Bold';
          font-size: 14px;
          letter-spacing: 1.5px;
        `;
    }
  }}
`;
export { TitleContainer };
