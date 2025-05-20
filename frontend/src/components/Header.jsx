import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6" fontWeight="bold">ShopEase</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '40%', bgcolor: 'white', px: 2, borderRadius: 2 }}>
        <SearchIcon color="action" />
        <InputBase placeholder="Search products..." fullWidth sx={{ ml: 1 }} />
      </Box>

      <Box>
        <IconButton color="inherit"><ShoppingCartIcon /></IconButton>
        <IconButton color="inherit"><AccountCircle /></IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
