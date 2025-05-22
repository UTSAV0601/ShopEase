import { Box, Typography } from '@mui/material';

const NotFound = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" color="error">404 - Page Not Found</Typography>
    <Typography variant="body1">The page you're looking for doesn't exist.</Typography>
  </Box>
);

export default NotFound;
