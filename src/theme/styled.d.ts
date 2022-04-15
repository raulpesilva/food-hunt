import { ThemeInterface } from './index';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
