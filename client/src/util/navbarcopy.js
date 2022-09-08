import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, TextField, ListItemButton, Drawer, List, ListItem, Button } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { StyledToolbar, MenuBox, MenuItems } from '../../style/navbar'
import bg33 from '../../Image/bg33.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
       
  return (
    <AppBar  position='fixed' elevation={0}>
      <StyledToolbar>
      <RestaurantIcon
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpenMenu(!openMenu)}
            color="warning"
            fontSize='large'/>
        <Box flex={{ xs: 25, md: 1 }}>
          <Typography href={'/'} sx={{ fontFamily: 'Oleo Script, cursive', textAlign: { xs: 'center', md: 'left' } }} variant="h4" color={'tomato'} >Foodies</Typography>
        </Box>
       
        <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Button key={item.Name} variant="body1"  ><Link to={`/${item.Name}`} style={{ textDecoration: "none", color: 'white', fontFamily: 'Kalam, cursive' }}>{item.Name}</Link></Button>

          ))}
        </MenuBox>
        <Box flex={1}>
          <TextField
            sx={{ display: { xs: "none", md: "flex", color: "white",width:'250px'} }}
            label='Search Here!'
            color='warning'
            variant="standard"
            />
        </Box>
        <ShoppingCartIcon fontSize='large' />
      </StyledToolbar>
      
      <Drawer
        anchor={"top"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
        >
        <List sx={{ backgroundColor:'orange', backgroundSize: 'cover'}}
        >
          <ListItem>
            {MenuItems.map((item) => (
              <ListItemButton key={item.Name} varient="body2" ><Link to={`/${item.Name}`} style={{ textDecoration: "none", color: 'white', fontFamily: 'Kalam, cursive' }} >{item.Name}</Link></ListItemButton>))}
          </ListItem>
        </List>
        <TextField
          sx={{ display: { xs: "flex", md: "none" } }}
          label='Search Here!'
          color='warning'
          variant="outlined" />
      </Drawer>
    </AppBar>     

  );
   }     

   export default Navbar