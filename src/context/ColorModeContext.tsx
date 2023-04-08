import { createContext, useContext } from 'react';

export const ColorModeContext = createContext({
  toggleColorMode: () => {
    return;
  },
});

export const useColorMode = () => useContext(ColorModeContext);
