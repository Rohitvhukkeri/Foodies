import React, { useState,useContext,useEffect} from 'react'
import { AppBar, Toolbar, styled, Typography, Box,Tooltip,IconButton,Avatar, TextField, ListItemButton, Drawer, List, ListItem, Button, MenuItem } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { StyledToolbar, MenuBox, MenuItems } from '../../style/navbar'
import bg33 from '../../Image/bg33.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { Menu } from "@mui/material";
import {GlobalContext} from '../../GlobalContext'
import { NavLink } from "react-router-dom";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const context = useContext(GlobalContext);


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //  const navigate = useNavigate();
  // const [isLogged,setIsLogged] = context.authApi;
  // debugger
  // const [isAdmin,setIsAdmin] = context.authApi.isAdmin;
  // console.log("rohi",isAdmin);

  //  const [isUser,setIsUser] = context.authApi.isUser;
  // console.log("rohi",isUser);


  // const logoutUser = async () => {
  //   if(window.confirm(`Are u sure to logout`)){
  //     await axios.get('/api/v1/auth/logout');
  //   localStorage.clear();
  //   if(isAdmin){
  //     setIsAdmin(false);
  //   }
  //   if(isUser){
  //     setIsUser(false);
  //   }
  //   setIsLogged(false);
  //   toast.success("logout success")
  //   navigate('/');
  //   window.location.reload();
  //   }else {
  //     toast.warning("logout terminated")
  //   }
  // }


  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const commonRoute = () =>{
//     <>
//     <Button
//     id="basic-button"
//     aria-controls={open ? 'basic-menu' : undefined}
//     aria-haspopup="true"
//     aria-expanded={open ? 'true' : undefined}
//     onClick={handleClick}
//     >
//       <NavLink to='#'>
//         Account
//       </NavLink>
//       </Button>

// <Menu
// id="basic-menu"
// anchorEl={anchorEl}
// open={open}
// onClose={handleClose}
// MenuListProps={{
//   'aria-labelledby': 'basic-button',
// }}
// >  

// <MenuItem onClick={handleClose}><NavLink to={'/profile'} >Profiles</NavLink></MenuItem>

// <MenuItem onClick={handleClose}>
//   {
//     isUser ? <NavLink to={`/user/dashboard`} >User dashboard</NavLink> : null
//   }
//   {
//     isAdmin ? <NavLink to={`/admin/dashboard`} >Admin dashboard</NavLink> : null
//   }
// </MenuItem>
// <MenuItem onClick={handleClose}><NavLink to={`/orders`} >Orders</NavLink></MenuItem>


// <MenuItem onClick={handleClose}>
//               <NavLink to={`/`} onClick={logoutUser} >Logout</NavLink>
//             </MenuItem>
//   </Menu>
// </>

// }
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
          {MenuItems.map((item) => (
            <Button key={item.Verify} variant="body1"  ><Link to={`/${item.Verify}`} style={{ textDecoration: "none", color: 'white', fontFamily: 'Kalam, cursive' }}>{item.Verify}</Link></Button>

          ))}
        </MenuBox>

{/* <Typography >
            <Button><NavLink to={"/"} >
              
            </NavLink></Button>
            <Button><NavLink to={"/home"} >
              Home
            </NavLink></Button>
            <Button><NavLink to={"/menu"} >
              Menu
            </NavLink></Button>
            <Button><NavLink to={"/about"} >
              About
            </NavLink></Button>

            <Button><NavLink to={"/login"} >
              Login
            </NavLink></Button>
            <Button><NavLink to={"/sign"} >
              Register
            </NavLink></Button>

           
          </Typography> */}
        <Box flex={1}>
          <TextField
            sx={{ display: { xs: "none", md: "flex", color: "white",width:'250px'} }}
            label='Search Here!'
            color='warning'
            variant="standard"
            />
        </Box>

        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        <ShoppingCartIcon fontSize='large'/>
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
               {MenuItems.map((item) => (
              <ListItemButton key={item.Name} varient="body2" ><Link to={`/${item.Verify}`} style={{ textDecoration: "none", color: 'white', fontFamily: 'Kalam, cursive' }} >{item.Verify}</Link></ListItemButton>))}
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