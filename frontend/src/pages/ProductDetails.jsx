import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../components/SimilarProducts';
import ReviewSection from '../components/ReviewSection';

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    id,
    title: `Product ${id}`,
    description:
      'Detailed product description with all specifications and details to help you decide.',
    price: (Math.random() * 100).toFixed(2),
    image: `https://picsum.photos/seed/phone${id}/800/800`,
    availability: Math.random() > 0.3 ? 'In Stock' : 'Out of Stock'
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
                objectFit: 'cover',
                height: { xs: 300, md: 500 }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              ${product.price}
            </Typography>

            <Chip
              label={product.availability}
              color={product.availability === 'In Stock' ? 'success' : 'error'}
              sx={{ mb: 2 }}
            />

            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
              disabled={product.availability !== 'In Stock'}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <SimilarProducts />
        </Box>

        <Box sx={{ mt: 6 }}>
          <ReviewSection />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
