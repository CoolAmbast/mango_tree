import { Box, Container, Typography, Button } from '@mui/material';
import { heroImage } from '../../assets';

export const Hero = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: { xs: 'flex-end', md: 'center' },
        pt: 'var(--nav-height, 72px)',
        pb: { xs: 8, md: 0 },
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Cinematic Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            display: 'block',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(180deg, rgba(26, 18, 8, 0.3) 0%, rgba(26, 18, 8, 0.85) 60%, rgba(26, 18, 8, 1) 100%)',
              md: 'linear-gradient(110deg, rgba(26, 18, 8, 0.94) 0%, rgba(26, 18, 8, 0.75) 45%, rgba(26, 18, 8, 0.2) 100%)',
            },
          },
        }}
      >
        <img
          src={heroImage}
          alt="Elegant fine dining restaurant interior at dusk, warm amber lighting over linen-draped tables"
        />
      </Box>

      {/* Hero Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2.5, md: 5, lg: 8 },
        }}
      >
        <Box sx={{ maxWidth: '640px' }}>
          {/* Eyebrow */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 1,
                backgroundColor: 'secondary.main',
              }}
            />
            <Typography
              component="span"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'secondary.main',
              }}
            >
              Fine Dining · Est. 2026
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.4rem', md: '4.25rem' },
              color: 'text.primary',
              lineHeight: 1.08,
              mb: 3,
              fontStyle: 'italic',
            }}
          >
            Dine in{' '}
            <Box
              component="span"
              sx={{
                color: 'secondary.main',
                fontStyle: 'normal',
              }}
            >
              Nature's
            </Box>{' '}
            lap.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: 'text.secondary',
              lineHeight: 1.7,
              maxWidth: '44ch',
              mb: 4.5,
              letterSpacing: '0.01em',
            }}
          >
            A sanctuary of refined Indian and Chinese cuisine, crafted with rare ingredients and unhurried intention. Dinner at The Mango Tree is not a meal — it is a considered event.
          </Typography>

          {/* Actions */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => handleScrollTo('#visit')}
              sx={{
                py: 1.6,
                px: 3.5,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                fontWeight: 600,
                backgroundColor: 'primary.main',
                color: '#1a1a1a',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Reserve Your Evening
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleScrollTo('#menu')}
              sx={{
                py: 1.6,
                px: 3.5,
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                borderColor: 'rgba(146, 135, 123, 0.4)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  backgroundColor: 'rgba(232, 146, 74, 0.05)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Explore the Menu
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '2.5rem',
          left: { xs: '2.5rem', md: '4rem', lg: '5rem' },
          zIndex: 2,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 1.5,
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'text.secondary',
          cursor: 'pointer',
        }}
        onClick={() => handleScrollTo('#story')}
      >
        <Box
          component="svg"
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          sx={{
            animation: 'scrollPulse 2.4s ease-in-out infinite',
            '@keyframes scrollPulse': {
              '0%, 100%': { transform: 'translateY(0)', opacity: 0.5 },
              '50%': { transform: 'translateY(5px)', opacity: 1 },
            },
          }}
        >
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2" />
          <rect x="6" y="4" width="2" height="5" rx="1" fill="currentColor" />
        </Box>
        Scroll
      </Box>
    </Box>
  );
};

export default Hero;
