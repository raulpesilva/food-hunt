import { colors } from './colors';
export { GlobalStyle } from './global';
export const theme = {
  colors,
} as const;

export type ThemeInterface = typeof theme;
export * from './colors';
