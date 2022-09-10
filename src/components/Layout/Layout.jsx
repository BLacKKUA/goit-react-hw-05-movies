import { Outlet } from 'react-router-dom';
import { Appbar } from '../AppBar/Appbar';
import { Box } from '../Box/Box';

export const Layout = () => {
  return (
    <Box p={2} display="flex" flexDirection="column">
      <Box width={1}>
        <Appbar />
      </Box>
      <Outlet />
    </Box>
  );
};
