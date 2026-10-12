import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { logoSvg } from '../../assets';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Visit', href: '#visit' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled
            ? 'rgba(26, 18, 8, 0.95)'
            : 'rgba(26, 18, 8, 0.82)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(146, 135, 123, 0.35)' : 'divider',
          transition: 'all 0.3s ease',
          height: 'var(--nav-height, 72px)',
          justifyContent: 'center',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: 'var(--nav-height, 72px)',
            }}
          >
            {/* Logo */}
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              <Box
                component="img"
                src={logoSvg}
                alt="The Mango Tree Logo"
                sx={{
                  width: { xs: 44, sm: 54 },
                  height: { xs: 44, sm: 54 },
                  objectFit: 'contain',
                  filter:
                    'brightness(0) saturate(100%) invert(68%) sepia(42%) saturate(1142%) hue-rotate(345deg) brightness(97%) contrast(93%)',
                  flexShrink: 0,
                  transition: 'transform 0.25s ease',
                  '&:hover': {
                    transform: 'scale(1.08)',
                  },
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: { xs: '1.45rem', sm: '1.65rem' },
                  fontStyle: 'normal',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'text.primary',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                The Mango{' '}
                <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>
                  Tree
                </Box>
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              component="ul"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 3.5, lg: 5 },
                listStyle: 'none',
                m: 0,
                p: 0,
              }}
            >
              {navItems.map((item) => (
                <Box component="li" key={item.label}>
                  <Box
                    component="a"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    sx={{
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      py: 1,
                      position: 'relative',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'text.primary',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '0%',
                        height: '1px',
                        backgroundColor: 'secondary.main',
                        transition: 'width 0.25s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Desktop Reserve Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNavClick('#visit')}
                sx={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.14em',
                  fontWeight: 600,
                  py: 1.1,
                  px: 2.8,
                  backgroundColor: 'primary.main',
                  color: '#1a1a1a',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Reserve a Table
              </Button>
            </Box>

            {/* Mobile Hamburger Button */}
            <IconButton
              color="inherit"
              aria-label={mobileOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
              edge="end"
              onClick={(e) => {
                e.currentTarget.blur();
                handleDrawerToggle();
              }}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'text.primary',
                p: 1,
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          disableRestoreFocus: true,
        }}
        slotProps={{
          paper: {
            sx: {
              top: 'var(--nav-height, 72px) !important',
              backgroundColor: 'rgba(26, 18, 8, 0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid',
              borderColor: 'divider',
              px: 3,
              py: 3,
              maxHeight: 'calc(100vh - 72px)',
            },
          },
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        <List sx={{ pt: 1, pb: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleNavClick(item.href)}
                sx={{
                  py: 1.5,
                  px: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(232, 146, 74, 0.08)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: '1.05rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'text.primary',
                        fontWeight: 400,
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleNavClick('#visit')}
              sx={{
                py: 1.5,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                fontWeight: 600,
              }}
            >
              Reserve a Table
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
