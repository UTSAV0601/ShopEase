import { Box, Container, Grid, Typography, Button, Chip } from '@mui/material';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import SimilarProducts from '../components/SimilarProducts';
import ReviewSection from '../components/ReviewSection';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const getStockLabel = () => {
    if (product.stock > 10) return { label: 'In Stock', color: 'success' };
    if (product.stock > 0) return { label: 'Limited Stock', color: 'warning' };
    return { label: 'Out of Stock', color: 'error' };
  };

  const stockStatus = getStockLabel();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', width: '100%' }}>
      <Header />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ px: 4, mt: 4 }}>
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
                label={stockStatus.label}
                color={stockStatus.color}
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
                disabled={product.stock === 0}
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
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
