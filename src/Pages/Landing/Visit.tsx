import { Box, Container, Typography, Grid, Link, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsIcon from '@mui/icons-material/Directions';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const Visit = () => {
  const mapsSearchUrl =
    'https://www.google.com/maps/search/?api=1&query=The+mango+tree+Apsara+Mangal+Bhawan+Purnia-Katihar+Rd+Belauri+Bihar+854326';
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=The+mango+tree+Apsara+Mangal+Bhawan+Purnia-Katihar+Rd+Belauri+Bihar+854326';
  const mapsEmbedUrl =
    'https://maps.google.com/maps?q=The+mango+tree,+Apsara+Mangal+Bhawan,+Purnia-Katihar+Rd,+Belauri,+Bihar+854326&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <Box
      component="section"
      id="visit"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, sm: 11, md: 15 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
        <Grid container spacing={{ xs: 6, lg: 10 }} sx={{ alignItems: 'flex-start' }}>
          {/* Visit Info & Map Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
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
                Find Us
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  color: 'text.primary',
                  fontStyle: 'italic',
                  mb: 5,
                }}
              >
                Plan your evening with us
              </Typography>

              {/* Detail Rows */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5, mb: 4.5 }}>
                {/* Address Row */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '5.5rem 1fr', sm: '6.5rem 1fr' },
                    gap: 2,
                    pb: 3,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'secondary.main',
                      fontWeight: 600,
                      pt: 0.3,
                    }}
                  >
                    Address
                  </Typography>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                      The Mango Tree
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Apsara Mangal Bhawan, Purnia-Katihar Rd,
                      <br />
                      Belauri, Bihar 854326
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.8125rem',
                        color: 'secondary.main',
                        letterSpacing: '0.04em',
                        mt: 0.5,
                      }}
                    >
                      Plus Code: QG57+J68 Belauri
                    </Typography>
                  </Box>
                </Box>

                {/* Hours Row */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '5.5rem 1fr', sm: '6.5rem 1fr' },
                    gap: 2,
                    pb: 3,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'secondary.main',
                      fontWeight: 600,
                      pt: 0.3,
                    }}
                  >
                    Hours
                  </Typography>
                  <Box>
                    <Typography sx={{ color: 'text.primary', fontSize: '1rem', mb: 0.5 }}>
                      Monday – Sunday
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Opens daily from 11:00 am — last seating 10:30 pm
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Lunch &amp; Dinner service available
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Interactive Google Maps Embed Container */}
              <Box
                sx={{
                  position: 'relative',
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.paper',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(232, 146, 74, 0.4)',
                  },
                }}
              >
                {/* Map Header Toolbar */}
                <Box
                  sx={{
                    px: { xs: 2, sm: 2.5 },
                    py: 1.5,
                    display: 'flex',
                    alignItems: { xs: 'stretch', sm: 'center' },
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'rgba(26, 18, 8, 0.75)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'text.primary',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'secondary.main', display: 'inline-block' }} />
                    Location Map
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      width: { xs: '100%', sm: 'auto' },
                    }}
                  >
                    <Button
                      component="a"
                      href={mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      variant="outlined"
                      startIcon={<DirectionsIcon fontSize="small" />}
                      sx={{
                        flex: { xs: 1, sm: 'initial' },
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '0.75rem', sm: '0.75rem' },
                        py: { xs: 0.6, sm: 0.4 },
                        px: { xs: 1.25, sm: 1.5 },
                        minWidth: 0,
                        borderColor: 'rgba(146, 135, 123, 0.35)',
                        color: 'text.primary',
                        justifyContent: 'center',
                        '&:hover': {
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                          backgroundColor: 'rgba(232, 146, 74, 0.08)',
                        },
                      }}
                    >
                      Directions
                    </Button>
                    <Button
                      component="a"
                      href={mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      variant="contained"
                      color="primary"
                      endIcon={<OpenInNewIcon sx={{ fontSize: '0.9rem !important' }} />}
                      sx={{
                        flex: { xs: 1, sm: 'initial' },
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '0.75rem', sm: '0.75rem' },
                        py: { xs: 0.6, sm: 0.4 },
                        px: { xs: 1.25, sm: 1.5 },
                        minWidth: 0,
                        backgroundColor: 'primary.main',
                        color: '#1a1a1a',
                        fontWeight: 600,
                        justifyContent: 'center',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                        },
                      }}
                    >
                      View in Maps
                    </Button>
                  </Box>
                </Box>

                {/* Google Maps iFrame */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '320px', sm: '380px' },
                    position: 'relative',
                    '& iframe': {
                      width: '100%',
                      height: '100%',
                      border: 0,
                      display: 'block',
                    },
                  }}
                >
                  <iframe
                    title="The Mango Tree Google Maps Location"
                    src={mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Reservation Panel Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                p: { xs: 3.5, sm: 5, md: 6 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.65rem', sm: '1.9rem' },
                  color: 'text.primary',
                  fontStyle: 'italic',
                  mb: 1.5,
                  fontWeight: 400,
                }}
              >
                Make a reservation
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.9375rem',
                  color: 'text.secondary',
                  lineHeight: 1.65,
                  mb: 4.5,
                }}
              >
                Tables book out quickly. We recommend reserving ahead for weekend dining, family gatherings, and private celebrations.
              </Typography>

              {/* Reservation Methods */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Phone Method */}
                <Box
                  component="a"
                  href="tel:+919560187436"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2.25,
                    border: '1px solid',
                    borderColor: 'divider',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s ease, background-color 0.25s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(232, 146, 74, 0.04)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor: 'rgba(232, 146, 74, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'secondary.main',
                    }}
                  >
                    <PhoneIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        mb: 0.3,
                      }}
                    >
                      By Telephone
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: 'text.primary',
                        fontWeight: 600,
                      }}
                    >
                      +91-95601 87436
                    </Typography>
                  </Box>
                </Box>

                {/* Email Method */}
                <Box
                  component="a"
                  href="mailto:themangotree@gmail.com"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2.25,
                    border: '1px solid',
                    borderColor: 'divider',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s ease, background-color 0.25s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(232, 146, 74, 0.04)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      backgroundColor: 'rgba(232, 146, 74, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'secondary.main',
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </Box>
                  <Box sx={{ overflow: 'hidden' }}>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'text.secondary',
                        mb: 0.3,
                      }}
                    >
                      By Email
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        color: 'text.primary',
                        fontWeight: 600,
                        wordBreak: 'break-all',
                      }}
                    >
                      themangotree@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography
                sx={{
                  mt: 4,
                  fontSize: '0.8125rem',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                For private dining enquiries, banquet celebrations, and parties of ten or more, please contact our team directly at{' '}
                <Link
                  href="mailto:events.themangotree@gmail.com"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  events.themangotree@gmail.com
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Visit;
