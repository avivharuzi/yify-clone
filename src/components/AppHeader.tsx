import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';

import { useColorMode } from '../context';

export function AppHeader() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <AppBar enableColorOnDark position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" component="h2" fontWeight={500}>
              YIFY Clone
            </Typography>
            <IconButton onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
