import React, { useState, RefObject } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo/hiperion-logo.svg";
import { useNavigate } from "react-router-dom";
import { useTheme, Theme } from "@mui/material/styles";

type HeaderProps = {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  refs: {
    [key: string]: RefObject<HTMLDivElement>;
  };
};

const Header: React.FC<HeaderProps> = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const theme = useTheme<Theme>();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setAnchorEl(document.getElementById("servicesButton"));
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string, refKey: string) => {
    if (window.location.pathname !== "/") {
      navigate(path);
      setTimeout(() => {
        scrollToSection(refs[refKey]);
      }, 300); // Small delay to ensure page navigation is complete
    } else {
      scrollToSection(refs[refKey]);
    }
  };

  const navItems = ["Inicio", "Sobre", "Produtos & Serviços", "Contato"];
  const servicesSubItems = [
    { text: "Serras circulares", path: "/serras-circulares" },
    { text: "Serra fita", path: "/serra-fita" },
    { text: "Serviço de Afiação", path: "/servicos-afiação" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "rgba(60, 60, 60, 0.7)", boxShadow: "none" }}
    >
      <Toolbar sx={theme.customStyles.header.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleMenu}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          fontFamily="National 2 Condensed, Arial, sans-serif"
          variant="h6"
          component="div"
          sx={theme.customStyles.header.logo}
        >
          <img src={logo} alt="Logo" style={{ height: "100px" }} />
        </Typography>
        <Drawer
          anchor="left"
          open={menuOpen}
          onClose={closeMenu}
          sx={{ "& .MuiDrawer-paper": theme.customStyles.header.drawerPaper }}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  closeMenu();
                  handleNavigation("/", item);
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
          {navItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={
                item === "Produtos & Serviços" ? handleMenuClick : undefined
              }
            >
              <Button
                color="inherit"
                id={
                  item === "Produtos & Serviços" ? "servicesButton" : undefined
                }
                onClick={() =>
                  item !== "Produtos & Serviços"
                    ? handleNavigation("/", item)
                    : undefined
                }
                sx={{ textTransform: "capitalize", fontSize: "1.2rem" }}
              >
                {item}
              </Button>
              {item === "Produtos & Serviços" && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {servicesSubItems.map((subItem, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      onClick={() => {
                        handleMenuClose();
                        navigate(subItem.path);
                      }}
                    >
                      {subItem.text}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
