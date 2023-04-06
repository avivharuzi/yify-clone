import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { AppHeader } from '../components';

export function RootLayout() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <Box py={4}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
