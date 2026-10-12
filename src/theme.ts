import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bdb846', // Olive Gold
      light: '#d4cf3a',
      dark: '#9a952d',
      contrastText: '#1a1a1a',
    },
    secondary: {
      main: '#e8924a', // Warm Mango Amber
      light: '#f5aa6e',
      dark: '#c4732f',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#1a1208', // Deep Warm Earth
      paper: '#2a1e0e',   // Warm Charcoal Brown
    },
    text: {
      primary: '#f2e8d9',   // Cream White
      secondary: '#92877b', // Warm Stone / Muted
    },
    divider: 'rgba(146, 135, 123, 0.25)',
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', acumin-pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', adobe-caslon-pro, 'Caslon', Georgia, serif",
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: "'Cormorant Garamond', adobe-caslon-pro, 'Caslon', Georgia, serif",
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: "'Cormorant Garamond', adobe-caslon-pro, 'Caslon', Georgia, serif",
      fontWeight: 400,
      fontStyle: 'italic',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Cormorant Garamond', adobe-caslon-pro, 'Caslon', Georgia, serif",
      fontWeight: 400,
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', acumin-pro, sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', acumin-pro, sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      letterSpacing: '0.02em',
    },
    body1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '0.75rem 1.8rem',
          transition: 'all 0.25s ease',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
