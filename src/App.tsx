import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import { Navbar } from './components/navbar';
import { Landing } from './Pages/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar />
        <Landing />
      </Box>
    </ThemeProvider>
  );
}

export default App;
