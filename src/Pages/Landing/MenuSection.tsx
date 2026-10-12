import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import IcecreamIcon from '@mui/icons-material/Icecream';

interface Dish {
  name: string;
  description: string;
  price: string;
  cuisine?: 'Indian' | 'Chinese' | 'House Special';
}

interface MenuCategory {
  category: string;
  icon: React.ReactNode;
  dishes: Dish[];
}

const menuData: MenuCategory[] = [
  {
    category: 'Starters',
    icon: <RestaurantMenuIcon sx={{ fontSize: '1.4rem', color: 'secondary.main' }} />,
    dishes: [
      {
        name: 'Paneer Chilli Dry',
        description: 'Crispy cottage cheese cubes tossed with bell peppers, spring onions, and spicy dark soya glaze',
        price: '₹240',
        cuisine: 'Chinese',
      },
      {
        name: 'Crispy Corn Salt & Pepper',
        description: 'Golden fried sweet corn kernels tossed with crushed black pepper, roasted garlic, and scallions',
        price: '₹210',
        cuisine: 'Chinese',
      },
      {
        name: 'Chicken 65',
        description: 'Tender spiced chicken bites deep-fried and tempered with mustard seeds, curry leaves, and green chillies',
        price: '₹290',
        cuisine: 'Indian',
      },
      {
        name: 'Veg Spring Rolls',
        description: 'Crisp golden pastry rolls packed with julienned vegetables and served with hot garlic dip',
        price: '₹190',
        cuisine: 'Chinese',
      },
    ],
  },
  {
    category: 'Main Course',
    icon: <DinnerDiningIcon sx={{ fontSize: '1.4rem', color: 'secondary.main' }} />,
    dishes: [
      {
        name: 'Paneer Butter Masala',
        description: 'Fresh paneer simmered in a rich, buttery tomato and cashew nut gravy flavoured with kasuri methi',
        price: '₹340',
        cuisine: 'Indian',
      },
      {
        name: 'Chicken Tikka Butter Masala',
        description: 'Smoky clay-oven roasted chicken fillets folded into a velvety spiced tomato-makhani gravy',
        price: '₹390',
        cuisine: 'Indian',
      },
      {
        name: 'Veg Hakka Noodles & Manchurian',
        description: 'Wok-tossed noodles with shredded vegetables served with vegetable dumplings in savoury soy gravy',
        price: '₹320',
        cuisine: 'Chinese',
      },
      {
        name: 'Dal Makhani & Butter Naan',
        description: 'Slow-simmered black lentils cooked overnight with cream, butter, and traditional Indian spices',
        price: '₹280',
        cuisine: 'Indian',
      },
    ],
  },
  {
    category: 'Dessert',
    icon: <IcecreamIcon sx={{ fontSize: '1.4rem', color: 'secondary.main' }} />,
    dishes: [
      {
        name: 'Alphonso Mango Kulfi',
        description: 'Artisanal frozen mango kulfi infused with pistachio slivers, saffron strands, and crushed cardamom',
        price: '₹160',
        cuisine: 'House Special',
      },
      {
        name: 'Hot Gulab Jamun with Ice Cream',
        description: 'Melt-in-mouth milk dumplings soaked in rose-cardamom syrup paired with creamy vanilla ice cream',
        price: '₹140',
        cuisine: 'Indian',
      },
      {
        name: 'Honey Darsaan with Vanilla',
        description: 'Crispy fried flat noodles tossed in warm honey glaze, roasted sesame seeds, and a rich vanilla scoop',
        price: '₹180',
        cuisine: 'Chinese',
      },
      {
        name: 'Sizzling Chocolate Brownie',
        description: 'Warm fudge walnut brownie served on a piping hot skillet, drenched in rich molten chocolate syrup',
        price: '₹220',
        cuisine: 'House Special',
      },
    ],
  },
];

export const MenuSection = () => {
  const handleScrollToVisit = () => {
    const el = document.querySelector('#visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      id="menu"
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, sm: 11, md: 15 },
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 5, lg: 8 } }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 3,
            mb: { xs: 6, md: 8 },
          }}
        >
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
              Our Specialties
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
                color: 'text.primary',
                fontStyle: 'italic',
              }}
            >
              A conversation between Indian &amp; Chinese cuisines
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '0.875rem',
              color: 'text.secondary',
              maxWidth: { xs: '100%', md: '34ch' },
              textAlign: { xs: 'left', md: 'right' },
              lineHeight: 1.6,
            }}
          >
            Crafted with fresh ingredients and authentic spices. Jain and customized preparations available on request.
          </Typography>
        </Box>

        {/* Menu Cards Grid */}
        <Grid container spacing={{ xs: 3, lg: 4 }}>
          {menuData.map((category) => (
            <Grid size={{ xs: 12, md: 4 }} key={category.category}>
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  p: { xs: 3.5, sm: 4.5 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(232, 146, 74, 0.4)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Centered Category Header (No grey rectangle) */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    mb: 4,
                    pb: 2,
                    borderBottom: '1px solid rgba(146, 135, 123, 0.2)',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(232, 146, 74, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 0.5,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'secondary.main',
                      fontWeight: 700,
                    }}
                  >
                    {category.category}
                  </Typography>
                </Box>

                {/* Dishes - Left-aligned name & right-aligned price */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                  {category.dishes.map((dish, idx) => (
                    <Box
                      key={dish.name}
                      sx={{
                        pb: idx === category.dishes.length - 1 ? 0 : 3,
                        borderBottom:
                          idx === category.dishes.length - 1
                            ? 'none'
                            : '1px solid rgba(146, 135, 123, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        textAlign: 'left',
                      }}
                    >
                      {/* Dish Name & Price */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'space-between',
                          gap: 2,
                          width: '100%',
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            fontStyle: 'italic',
                            color: 'text.primary',
                            textAlign: 'left',
                            flex: 1,
                          }}
                        >
                          {dish.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.9375rem',
                            fontWeight: 700,
                            color: 'secondary.main',
                            letterSpacing: '0.02em',
                            whiteSpace: 'nowrap',
                            textAlign: 'right',
                          }}
                        >
                          {dish.price}
                        </Typography>
                      </Box>

                      {/* Cuisine Tag */}
                      {dish.cuisine && (
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '0.6875rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'rgba(232, 146, 74, 0.85)',
                            fontWeight: 600,
                            mb: 0.75,
                            textAlign: 'left',
                            display: 'block',
                          }}
                        >
                          {dish.cuisine}
                        </Typography>
                      )}

                      {/* Description */}
                      <Typography
                        sx={{
                          fontSize: '0.875rem',
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          textAlign: 'left',
                          maxWidth: '100%',
                        }}
                      >
                        {dish.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Footer info & CTA */}
        <Box
          sx={{
            mt: 7,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '0.9375rem',
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Family banquet feasts and multi-course platters from ₹499 per person.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToVisit}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '0.85rem',
              letterSpacing: '0.14em',
              fontWeight: 600,
              backgroundColor: 'primary.main',
              color: '#1a1a1a',
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
          >
            Reserve Your Table
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MenuSection;
