import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom'

function Navigation() {
 
 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Телеком СП
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            <Typography><NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }} >Организации</NavLink></Typography>
            <Typography><NavLink to="/contract" style={{ color: 'inherit', textDecoration: 'none' }}>Договора</NavLink></Typography>
            <Typography><NavLink to="/order" style={{ color: 'inherit', textDecoration: 'none' }}>Заказы</NavLink></Typography>
            <Typography><NavLink to="/maps" style={{ color: 'inherit', textDecoration: 'none' }}>Карта</NavLink></Typography>
            <Typography><NavLink to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Войти</NavLink></Typography>
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;

