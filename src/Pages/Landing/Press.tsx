import {
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  Avatar,
  Button,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface CustomerReview {
  name: string;
  avatarText: string;
  role: string;
  timeAgo: string;
  rating: number;
  review: string;
  highlightDish?: string;
}

const topReviews: CustomerReview[] = [
  {
    name: 'Rahul Sharma',
    avatarText: 'RS',
    role: 'Local Guide · Dine-in',
    timeAgo: '2 weeks ago',
    rating: 5,
    review:
      'Absolutely outstanding dining experience! The ambiance feels like a luxury fine-dining lounge in a metro city. The Indian gravies, garlic naan, and crispy starters were top-notch. Exceptional hospitality and warm lighting for families.',
    highlightDish: 'Paneer Butter Masala & Crispy Corn',
  },
  {
    name: 'Ananya Verma',
    avatarText: 'AV',
    role: 'Verified Diner',
    timeAgo: '3 weeks ago',
    rating: 5,
    review:
      'A true gem on the Purnia-Katihar road. The interior with the glowing mango tree motif creates such a tranquil, elevated vibe. Both the Chinese and North Indian dishes were freshly prepared with authentic flavours.',
    highlightDish: 'Chilli Garlic Noodles & Mocktails',
  },
  {
    name: 'Dr. Alok Kumar',
    avatarText: 'AK',
    role: 'Local Guide · Family Dining',
    timeAgo: '1 month ago',
    rating: 5,
    review:
      'Best fine dining venue near Belauri. The seating is spacious, staff is very polite, and the food quality is consistent. Perfect spot for celebrating birthdays and special family dinners away from city congestion.',
    highlightDish: 'Special Biryani & Sizzlers',
  },
];

export const Press = () => {
  const googleMapsReviewsUrl =
    'https://www.google.com/maps/search/?api=1&query=The+mango+tree+Apsara+Mangal+Bhawan+Purnia-Katihar+Rd+Belauri+Bihar+854326';

  return (
    <Box
      component="section"
      id="reviews"
      sx={{
        backgroundColor: '#e8924a',
        color: '#1a1008',
        py: { xs: 8, sm: 10, md: 12 },
        borderTop: '1px solid rgba(26, 16, 8, 0.15)',
        borderBottom: '1px solid rgba(26, 16, 8, 0.15)',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
        {/* Header Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 3,
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              {/* Google G logo mini indicator */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  backgroundColor: 'rgba(26, 16, 8, 0.08)',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '20px',
                }}
              >
                <Box
                  component="svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  sx={{ display: 'block' }}
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#1a1008"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#1a1008"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#1a1008"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#1a1008"
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#1a1008',
                    fontWeight: 700,
                  }}
                >
                  Google Maps Reviews
                </Typography>
              </Box>

              <Rating
                value={5}
                readOnly
                size="small"
                emptyIcon={<StarIcon style={{ opacity: 0.35 }} fontSize="inherit" />}
                sx={{
                  color: '#1a1008',
                  fontSize: '1.1rem',
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                color: '#1a1008',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              What our guests are saying
            </Typography>
          </Box>

          <Button
            component="a"
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            endIcon={<OpenInNewIcon sx={{ fontSize: '0.9rem !important' }} />}
            sx={{
              borderColor: 'rgba(26, 16, 8, 0.35)',
              color: '#1a1008',
              fontWeight: 600,
              fontSize: '0.8rem',
              py: 1,
              px: 2.5,
              '&:hover': {
                borderColor: '#1a1008',
                backgroundColor: 'rgba(26, 16, 8, 0.08)',
              },
            }}
          >
            Read All Reviews
          </Button>
        </Box>

        {/* Top 3 Highest Rated Reviews Grid */}
        <Grid container spacing={{ xs: 3, md: 3, lg: 4 }}>
          {topReviews.map((item, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                sx={{
                  backgroundColor: 'rgba(26, 16, 8, 0.07)',
                  p: { xs: 3.5, sm: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(26, 16, 8, 0.12)',
                  transition: 'background-color 0.25s ease, transform 0.25s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 16, 8, 0.12)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {/* Reviewer Header */}
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        sx={{
                          width: 42,
                          height: 42,
                          backgroundColor: '#1a1008',
                          color: '#f2e8d9',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          border: '1px solid rgba(26, 16, 8, 0.2)',
                        }}
                      >
                        {item.avatarText}
                      </Avatar>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.9375rem',
                            fontWeight: 700,
                            color: '#1a1008',
                            lineHeight: 1.2,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            color: 'rgba(26, 16, 8, 0.7)',
                            mt: 0.25,
                          }}
                        >
                          {item.role}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        color: 'rgba(26, 16, 8, 0.65)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.timeAgo}
                    </Typography>
                  </Box>

                  {/* Stars */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                    <Rating
                      value={item.rating}
                      readOnly
                      size="small"
                      sx={{
                        color: '#1a1008',
                        fontSize: '1rem',
                      }}
                    />
                  </Box>

                  {/* Review Text */}
                  <Typography
                    component="blockquote"
                    sx={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      color: '#1a1008',
                      fontStyle: 'normal',
                      mb: 3,
                    }}
                  >
                    "{item.review}"
                  </Typography>
                </Box>

                {/* Highlight / Tag Footer */}
                {item.highlightDish && (
                  <Box
                    sx={{
                      pt: 2,
                      borderTop: '1px solid rgba(26, 16, 8, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        color: 'rgba(26, 16, 8, 0.85)',
                      }}
                    >
                      Recommended: {item.highlightDish}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const Reviews = Press;
export default Press;
