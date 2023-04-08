import { PropsWithChildren, useMemo, useState } from 'react';

import { PaletteMode } from '@mui/material';
import { green, yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ColorModeContext } from './context';

export type AppThemeProviderProps = PropsWithChildren;

const paletteModes: PaletteMode[] = ['light', 'dark'];

const COLOR_MODE_KEY = 'colorMode';

const getDefaultMode = (): PaletteMode => {
  const colorMode = localStorage.getItem(COLOR_MODE_KEY);

  if (colorMode && paletteModes.includes(colorMode as PaletteMode)) {
    return colorMode as PaletteMode;
  }

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  return prefersDarkMode ? 'dark' : 'light';
};

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>(getDefaultMode());

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const nextMode = prevMode === 'light' ? 'dark' : 'light';

          localStorage.setItem(COLOR_MODE_KEY, nextMode);

          return nextMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: green[700],
          },
          secondary: {
            main: yellow[700],
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
