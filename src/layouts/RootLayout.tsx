import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import { AppHeader } from '../components';

export function RootLayout() {
  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}
