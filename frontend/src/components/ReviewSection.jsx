import { Typography, Box, Divider } from '@mui/material';

const ReviewSection = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h6" gutterBottom>
        Customer Reviews
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        ⭐⭐⭐⭐ - "Great product! Worth the price."
      </Typography>
      <Typography variant="body1" gutterBottom>
        ⭐⭐⭐ - "Good, but expected better quality."
      </Typography>
    </Box>
  );
};

export default ReviewSection;
