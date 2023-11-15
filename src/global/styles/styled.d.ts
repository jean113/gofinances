import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  //estou criando um tipo novo a partir do theme que eu criei. Esse ThemeType eu que inventei
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}