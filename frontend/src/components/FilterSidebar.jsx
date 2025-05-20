import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material';

const FilterSidebar = () => {
  return (
    <Box sx={{ p: 2, width: 250, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Filters
      </Typography>

      <Divider sx={{ my: 1 }} />

      <Typography variant="subtitle1">Category</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Phones" />
        <FormControlLabel control={<Checkbox />} label="Laptops" />
        <FormControlLabel control={<Checkbox />} label="Accessories" />
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Price Range</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Under $50" />
        <FormControlLabel control={<Checkbox />} label="$50 - $100" />
        <FormControlLabel control={<Checkbox />} label="Above $100" />
      </FormGroup>
    </Box>
  );
};

export default FilterSidebar;
