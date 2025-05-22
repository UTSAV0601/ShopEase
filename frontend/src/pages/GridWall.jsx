import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GridWall = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          px: 4,
          mt: 4,
        }}
      >
        {/* Sidebar */}
        <Box sx={{ width: '250px', flexShrink: 0 }}>
          <FilterSidebar />
        </Box>

        {/* Main Product Grid */}
        <Box sx={{ flexGrow: 1, ml: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Explore Products
          </Typography>
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default GridWall;
