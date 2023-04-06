import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';

export function AppHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box width="100%" display="flex" justifyContent="center">
            <Typography variant="h6" component="h2" fontWeight={500}>
              YIFY Clone
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
