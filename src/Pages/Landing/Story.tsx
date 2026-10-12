import { Box, Container, Typography, Grid } from '@mui/material';
import { chefStoryImage } from '../../assets';

export const Story = () => {
  return (
    <Box
      component="section"
      id="story"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, sm: 11, md: 15 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
        <Grid container spacing={{ xs: 6, md: 8, lg: 12 }} sx={{ alignItems: 'center' }}>
          {/* Image Column */}
          <Grid size={{ xs: 12, md: 5.5, lg: 5 }}>
            <Box sx={{ position: 'relative' }}>
              {/* Outer decorative border frame */}
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: { xs: '16/10', sm: '4/5' },
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: { xs: '-0.75rem', md: '-1.25rem' },
                    left: { xs: '-0.75rem', md: '-1.25rem' },
                    width: 'calc(100% - 1.5rem)',
                    height: 'calc(100% - 1.5rem)',
                    border: '1px solid',
                    borderColor: 'secondary.main',
                    zIndex: -1,
                    opacity: 0.45,
                    display: { xs: 'none', sm: 'block' },
                  },
                }}
              >
                <img
                  src={chefStoryImage}
                  alt="Executive chef plating a delicate mango-glazed sea bass dish with expert craftsmanship"
                />
              </Box>

              {/* 12 Years Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 12, sm: -24 },
                  right: { xs: 12, sm: -24 },
                  width: { xs: '5.5rem', sm: '7rem' },
                  height: { xs: '5.5rem', sm: '7rem' },
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  zIndex: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: { xs: '1.75rem', sm: '2.4rem' },
                    fontWeight: 600,
                    color: '#1a1a1a',
                    lineHeight: 1,
                  }}
                >
                  test
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#1a1a1a',
                    fontWeight: 600,
                    opacity: 0.9,
                  }}
                >
                  Years
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Text Content Column */}
          <Grid size={{ xs: 12, md: 6.5, lg: 7 }}>
            <Box sx={{ maxWidth: '58ch' }}>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'secondary.main',
                  mb: 2,
                }}
              >
                The Philosophy
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
                  color: 'text.primary',
                  lineHeight: 1.15,
                  mb: 3.5,
                  fontStyle: 'italic',
                }}
              >
                Rooted in craft, alive with the tropics
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  color: 'text.secondary',
                  lineHeight: 1.85,
                  mb: 3,
                }}
              >
                The Mango Tree was born from a single conviction: that tropical cuisine deserves the same reverence as any great culinary tradition. Chef spent years tracing rare spice routes from Southeast Asia to West Africa, distilling those journeys into a menu that honours both heritage and invention.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  color: 'text.secondary',
                  lineHeight: 1.85,
                  mb: 5,
                }}
              >
                Every dish is composed with restraint — never decorated, always deliberate. We source from a curated network of small-scale growers, and our kitchen changes with the seasons rather than despite them.
              </Typography>

              {/* Chef Signature */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 1,
                    backgroundColor: 'primary.main',
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.35rem',
                      fontStyle: 'italic',
                      fontWeight: 500,
                      color: 'primary.main',
                      lineHeight: 1.2,
                    }}
                  >
                    Chef sample
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'text.secondary',
                      mt: 0.5,
                    }}
                  >
                    Executive Chef
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Story;
