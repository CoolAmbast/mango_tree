import { Box } from '@mui/material';
import Hero from './Hero';
import Story from './Story';
import MenuSection from './MenuSection';
import Experience from './Experience';
import Press from './Press';
import Visit from './Visit';
import Footer from './footer/Footer';

export const Landing = () => {
  return (
    <Box component="main" sx={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <Story />
      <MenuSection />
      <Experience />
      <Press />
      <Visit />
      <Footer />
    </Box>
  );
};

export default Landing;
