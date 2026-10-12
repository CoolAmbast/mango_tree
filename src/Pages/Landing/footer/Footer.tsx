import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { logoSvg } from '../../../assets';

export const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#e8924a',
        color: '#1a1008',
        pt: { xs: 6, sm: 8, md: 10 },
        pb: 4,
        borderTop: '1px solid rgba(26, 16, 8, 0.15)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ pb: { xs: 4, md: 6 }, borderBottom: '1px solid rgba(26, 16, 8, 0.15)' }}>
          {/* Brand Column with Logo */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: '#1a1008',
                mb: 1.5,
                '&:hover': { opacity: 0.9 },
              }}
            >
              <Box
                component="img"
                src={logoSvg}
                alt="The Mango Tree Logo"
                sx={{
                  width: { xs: 44, sm: 52 },
                  height: { xs: 44, sm: 52 },
                  objectFit: 'contain',
                  filter: 'brightness(0) saturate(100%)', // Crisp dark silhouette on warm orange background
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: { xs: '1.75rem', sm: '2rem' },
                  fontStyle: 'italic',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: '#1a1008',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                The Mango{' '}
                <Box component="span" sx={{ color: '#1a1008' }}>
                  Tree
                </Box>
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(26, 16, 8, 0.75)',
                lineHeight: 1.7,
                maxWidth: '34ch',
                fontSize: '0.9375rem',
              }}
            >
              Fine dining rooted in culinary heritage. Apsara Mangal Bhawan, Purnia-Katihar Rd, Belauri, Bihar 854326.
            </Typography>
          </Grid>

          {/* Explore Column */}
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(26, 16, 8, 0.9)',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Explore
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {[
                { label: 'Our Story', href: '#story' },
                { label: 'The Menu', href: '#menu' },
                { label: 'The Experience', href: '#experience' },
                { label: 'Visit Us', href: '#visit' },
              ].map((item) => (
                <Box component="li" key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(26, 16, 8, 0.72)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#1a1008',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Column */}
          <Grid size={{ xs: 6, md: 4, lg: 4 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(26, 16, 8, 0.9)',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              <Box component="li">
                <Link
                  href="tel:+919560187436"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'rgba(26, 16, 8, 0.72)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontWeight: 500,
                    '&:hover': { color: '#1a1008' },
                  }}
                >
                  +91-95601 87436
                </Link>
              </Box>
              <Box component="li">
                <Link
                  href="mailto:themangotree@gmail.com"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'rgba(26, 16, 8, 0.72)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    wordBreak: 'break-all',
                    '&:hover': { color: '#1a1008' },
                  }}
                >
                  themangotree@gmail.com
                </Link>
              </Box>
              <Box component="li">
                <Link
                  href="mailto:events.themangotree@gmail.com"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'rgba(26, 16, 8, 0.72)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    wordBreak: 'break-all',
                    '&:hover': { color: '#1a1008' },
                  }}
                >
                  events.themangotree@gmail.com
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            pt: 3.5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '0.8125rem',
              color: 'rgba(26, 16, 8, 0.7)',
              letterSpacing: '0.02em',
            }}
          >
            © 2026 The Mango Tree. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/the.mango_tree/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow The Mango Tree on Instagram"
              size="small"
              sx={{
                color: 'rgba(26, 16, 8, 0.65)',
                '&:hover': { color: '#1a1008', backgroundColor: 'rgba(26, 16, 8, 0.08)' },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/people/The-Mango-Tree/61588902141947/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow The Mango Tree on Facebook"
              size="small"
              sx={{
                color: 'rgba(26, 16, 8, 0.65)',
                '&:hover': { color: '#1a1008', backgroundColor: 'rgba(26, 16, 8, 0.08)' },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
