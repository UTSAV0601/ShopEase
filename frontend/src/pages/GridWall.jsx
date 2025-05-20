import { Box, Container, Typography, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';

const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  image: `https://picsum.photos/seed/phone${i}/400/400`
}));

const GridWall = () => (
  <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
    <Header />
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Sidebar */}
        <Box sx={{ flex: '0 0 250px' }}>
          <FilterSidebar />
        </Box>

        {/* Products Section */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Explore Products
          </Typography>
          <Grid container spacing={3}>
            {dummyProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default GridWall;
