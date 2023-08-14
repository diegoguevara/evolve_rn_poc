import { ColorScheme } from '../Colors/ColorScheme';
import styled from 'styled-components/native';

const HeadingContainer = styled.Text<{ variant: string; color: string }>`
  font-family: 'Nunito_700Bold';

  ${(props) => {
    switch (props.variant) {
      case 'large':
        return `
          font-size: 26px;
          line-height: 32px;
          letter-spacing: 0.1px;
        `;
      case 'medium':
        return `
          font-size: 20px;
          letter-spacing: 0.1px;
          line-height: 27px;
        `;
      case 'small':
        return `
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
        `;
      case 'pagetitle':
        return `
          font-family: 'Nunito_500Medium';
          font-size: 24px;
        `;
      default:
        return `
          font-size: 26px;
          letter-spacing: 0.1px;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'subtext':
        return `color: ${ColorScheme.subTextColor};`;
      case 'highlight':
        return `color: ${ColorScheme.highlightTextColor};`;
      case 'contrast':
        return `color: ${ColorScheme.contrastTextColor};`;
      default:
        return `color: ${ColorScheme.textColor};`;
    }
  }}
`;
export { HeadingContainer };
