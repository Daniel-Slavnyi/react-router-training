import React from 'react';
import { Box } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
}
