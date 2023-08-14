import { ColorScheme } from '../Colors/ColorScheme';
import styled from 'styled-components/native';

const TextContainer = styled.Text<{
  variant: string;
  color: string;
  isBold?: boolean;
  isItalic?: boolean;
}>`
  font-family: Montserrat_400Regular;
  ${(props) => {
    switch (props.color) {
      case 'subtext':
        return `color: ${ColorScheme.subTextColor};`;
      case 'highlight':
        return `color: ${ColorScheme.highlightTextColor};`;
      case 'contrast':
        return `color: ${ColorScheme.contrastTextColor};`;
      case 'error':
        return `color: ${ColorScheme.error};`;
      case 'errorContrast':
        return `color: ${ColorScheme.errorContrast};`;
      case 'danger':
        return `color: ${ColorScheme.brandDanger};`;
      default:
        return `color: ${ColorScheme.textColor};`;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case 'small':
        return `
          color: ${ColorScheme.subTextColor};
          font-size: 12px;
        `;
      case 'label':
        return `
          color: ${ColorScheme.highlightTextColor};
          font-size: 14px;
          padding: 16px 0 8px 0;
        `;
      case 'large':
        return `
          font-size: 16px;
          line-height: 24px;
        `;
      case 'link-style':
        return `
          font-family: Montserrat_600SemiBold;
          font-size: 16px;
          line-height: 22px;
        `;
      case 'caption':
        return `
          font-size: 12px;
          line-height: 20px;
        `;
      default:
        return `
          font-size: 14px;
          line-height: 22px;
        `;
    }
  }}

  ${(props) => {
    if (props.variant === 'default') {
      if (props.isBold) return `fontFamily: Montserrat_600SemiBold;`;
      if (props.isItalic) return 'fontFamily: Montserrat_400Regular_Italic;';
    }
  }}
`;

const TextRequired = styled.Text`
  color: ${ColorScheme.primaryActionColor};
`;
export { TextContainer, TextRequired };
