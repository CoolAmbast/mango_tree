import { Box, Container, Typography, Grid } from '@mui/material';
import { diningRoomImage, sommelierImage, dessertImage } from '../../assets';

interface Pillar {
  number: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Indian and Chinese cuisine',
    description:
      'Curated by our master chefs, we bring the best of Indian and Chinese culinary traditions to your plate. Each dish is prepared with the freshest ingredients and a touch of authentic spice and flavour.',
  },
  {
    number: '02',
    title: 'A room designed for conversation',
    description:
      'Tables are spaced at generous intervals. Acoustic panels, low lighting, and unhurried service create a room that invites stillness.',
  },
  {
    number: '03',
    title: 'Private dining for up to twenty',
    description:
      'The Banyan Room accommodates private events with a bespoke menu developed in consultation with Chef Osei, available from October 2026.',
  },
];

export const Experience = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, sm: 11, md: 15 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ maxWidth: '52ch', mb: { xs: 6, md: 8 } }}>
          <Typography
            component="span"
            sx={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              mb: 1.5,
            }}
          >
            The Evening
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
              color: 'text.primary',
              fontStyle: 'italic',
              lineHeight: 1.15,
            }}
          >
            Beyond the plate, a complete sensory composition
          </Typography>
        </Box>

        {/* Content Layout */}
        <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: 'flex-start' }}>
          {/* Image Stack Gallery */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1.5,
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                },
              }}
            >
              {/* Main Image */}
              <Box
                sx={{
                  gridColumn: '1 / 3',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={diningRoomImage}
                  alt="Intimate restaurant dining room, candlelit tables, low hanging tropical foliage, sophisticated atmosphere"
                />
              </Box>

              {/* Small Image 1 */}
              <Box
                sx={{
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={sommelierImage}
                  alt="Sommelier pouring aged red wine at an elegantly set dinner table"
                />
              </Box>

              {/* Small Image 2 */}
              <Box
                sx={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={dessertImage}
                  alt="Close-up of a beautifully plated tropical dessert with edible flowers and gold leaf"
                />
              </Box>
            </Box>
          </Grid>

          {/* Pillars Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
              {pillars.map((pillar) => (
                <Box
                  key={pillar.number}
                  sx={{
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                    pl: 3,
                    transition: 'border-color 0.25s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'text.secondary',
                      mb: 1,
                      fontVariantNumeric: 'tabular-nums',
                      fontWeight: 500,
                    }}
                  >
                    {pillar.number}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.25rem', sm: '1.45rem' },
                      color: 'text.primary',
                      fontStyle: 'italic',
                      fontWeight: 400,
                      mb: 1.25,
                    }}
                  >
                    {pillar.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9375rem',
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {pillar.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
