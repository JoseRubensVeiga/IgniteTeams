import 'styled-components';
import theme from 'src/theme';

declare module 'styled-components' {
    type TeamType = typeof theme;

    export interface DefaultTheme extends TeamType { }
}
