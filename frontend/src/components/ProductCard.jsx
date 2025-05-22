import { Card, CardMedia, CardContent, Typography, Button, CardActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const getStockLabel = () => {
    if (product.stock > 10) return { label: 'In Stock', color: 'success' };
    if (product.stock > 0) return { label: 'Limited Stock', color: 'warning' };
    return { label: 'Out of Stock', color: 'error' };
  };

  const stockStatus = getStockLabel();

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
        <Chip label={stockStatus.label} color={stockStatus.color} size="small" sx={{ mt: 1 }} />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/product-details/${product._id}`)} // 🔧 fixed path
          variant="contained"
          color="secondary"
          disabled={product.stock === 0}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
