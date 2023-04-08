import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { AppHeader } from '../components';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function RootLayout() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <Box py={4}>
          <Outlet />
        </Box>
      </Container>
      <ScrollToTop />
    </>
  );
}
