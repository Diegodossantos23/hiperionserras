import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo/hiperion-logo.svg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null); // Corrigindo o tipo de estado

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setAnchorEl(document.getElementById('servicesButton'));
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = ['Inicio', 'Sobre', 'Produtos e Serviços', 'Blog', 'Contato'];
  const servicesSubItems = ['Serras circulares', 'Lâminas serra fita', 'Máquinas e equipamentos', 'Produtos e serviços'];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#222" }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4, md: 8 } }}> {/* Ajuste do paddingX */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleMenu}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '80px' }} /> {/* Ajuste da altura da logo */}
        </Typography>
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={closeMenu}
          sx={{ '& .MuiDrawer-paper': { width: '240px' } }}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={closeMenu}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item, index) => (
            <div key={index} onMouseEnter={item === 'Produtos e Serviços' ? handleMenuClick : undefined}>
              <Button color="inherit" id={item === 'Produtos e Serviços' ? 'servicesButton' : undefined} sx={{ textTransform: 'capitalize', fontSize: '16px' }}>{item}</Button> {/* Ajuste do tamanho da fonte */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && item === 'Produtos e Serviços'}
                onClose={handleMenuClose}
              >
                {servicesSubItems.map((subItem, subIndex) => (
                  <MenuItem key={subIndex} onClick={handleMenuClose}>{subItem}</MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
