export const colors = {
  white: '#ffffff',
  light: '#DDFFBC',
  dark: '#333333',
  primary: '#5CAC0E',
  secondary: '#FEA150',
  accent1: '#DDFFBC',
  accent2: '#FFBC82',
} as const;

export type Colors = typeof colors;
export type Color = keyof Colors;
export interface ColorsProp {
  color: Color;
}
