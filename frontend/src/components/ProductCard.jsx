import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/product-details/${product.id}`)} variant="contained" color="secondary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
