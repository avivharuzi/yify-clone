import { PropsWithChildren } from 'react';

import { green, yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[700],
    },
    secondary: {
      main: yellow[700],
    },
  },
});

export type AppThemeProviderProps = PropsWithChildren;

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
