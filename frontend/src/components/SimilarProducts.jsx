import { Typography, Grid, Box } from '@mui/material';
import ProductCard from './ProductCard';

const dummySimilar = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 100,
  title: `Similar Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  image: `https://source.unsplash.com/300x300/?phone,similar${i}`
}));

const SimilarProducts = () => (
  <Box sx={{ mt: 6 }}>
    <Typography variant="h6" gutterBottom>
      Similar Products
    </Typography>
    <Grid container spacing={3}>
      {dummySimilar.map(product => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SimilarProducts;
