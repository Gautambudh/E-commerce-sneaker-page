import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, IconButton, Divider, Typography, Button, Tab, Avatar, Badge, Menu, MenuItem  } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import logo from '../../assets/images/logo.svg'
import avatarimg from '../../assets/images/image-avatar.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { countState, deleteCartValue } from '../Herosection/reduxSlice';
import { useDispatch, useSelector } from 'react-redux';
import img1 from '../../assets/images/image-product-1.jpg';
import delIcon from '../../assets/images/icon-delete.svg';
import CloseIcon from '@mui/icons-material/Close';

const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Navbar() {
  const dispatch = useDispatch();
  const { addToCartClicked, cartValue} = useSelector(countState);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} >
      <IconButton 
      // onClick={() => dispatch(increment())}
      size="large" >
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{color:'black' }}>
              <ListItemText primary={item} primaryTypographyProps={{ style:{color: 'black', fontWeight:'bold'} }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height:{sm:120, md:150} }}>
      <AppBar component="nav" sx={{ backgroundColor:'white', boxShadow:'none'}}>
        <Toolbar sx={{mx:{md:4}, borderBottom: {md:1}, borderColor:{md:"divider"}, 
        display:{md:'flex'}, alignItems:'center', justifyContent:'space-between', mt:1}}>
        {/* menu icon for mobile view */}
        <Box sx={{display:'flex', alignItems:'center',}}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon color='black'/>
          </IconButton>
          {/* Logo box */}
          
          <Box component='img' src={logo} alt='..' sx={{mr:2}}/>

          {/* tabs box */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, typography: "subtitle2", ml:2, color:'#787470' }}>
            <TabContext value={value} >
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
              <TabList
                onChange={handleChange}
                textColor="black"
                sx={{"& button:focus":{ color:'black'}}}
                TabIndicatorProps={{
                  sx: { backgroundColor: "orange", height: 3, width:50, ":active":{color:'black'} }
                }}
              >
              {navItems.map((item, index) => (
                <Tab disableRipple sx={{py:4.2, textTransform:'none'}} label={item} value={index} />
              ))}
              </TabList>
            {/* </Box> */}
            {/* <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel> */}
            </TabContext>
          </Box>
          </Box>

          <Box sx={{display:'flex', alignItems:'center', gap:{md:3, xs:2}, }}>
            <Badge badgeContent={addToCartClicked ? cartValue : 0} sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "hsl(26, 100%, 55%)",
                px:1.2,
                fontWeight:'bold',
              }
            }}>
            <IconButton size='small' sx={{mt:0.5}} onClick={handleClick}>
            <ShoppingCartOutlinedIcon sx={{color:'black', }}/>
            </IconButton>
            </Badge>
            <Menu sx={{"	.MuiMenu-paper":{width: 345, maxWidth: '100%'}, top:15, left:{xs:10.5, sm:-8}}}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Typography variant='body2' component='p' 
            sx={{color:'black', fontWeight:'bold', textAlign:'left', p:1.5}}>
              Cart
            </Typography>
            <Divider />
            {cartValue === 0 ? 
            (<Typography variant='body1' component='div' 
            sx={{height:90, width:'100%', color:'#676767', textAlign:'center', mt:7}}>Your cart is empty</Typography>
            )
            :
            (
              <>
              <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', p:1.5}}>
                <Box component='img' height={45} width={45} src={img1} alt='shoe' sx={{borderRadius:2}}/>
                <Box sx={{ml:2}}>
                  <Typography variant='subtitle2' component='div' 
                  sx={{letterSpacing:1,}}>Fall Limited Edition Sneakers</Typography>
                  <Typography variant='body2' component='span' 
                  sx={{color:'#787470'}}>$125.00 x {cartValue}</Typography>

                  <Typography variant='body2' component='span' 
                    sx={{color:'black', fontWeight:'bold', pl:1}}>
                    {`$${125 * cartValue}.00`}
                  </Typography>
                </Box>
                
                {/* delete button */}
                <IconButton 
                onClick={() => dispatch(deleteCartValue())}
                size="medium" >
                  <img src={delIcon} alt='del' />
                </IconButton>
              </Box>

              <Button variant="contained" size="medium" 
                sx={{px:4, py:1.4, 
                width:'93%',
                ml:1.5,
                textTransform:'none', 
                backgroundColor:'hsl(26, 100%, 55%)',
                borderRadius:2.5,
                boxShadow: '0px 11px 15px 8px hsl(25, 100%, 94%)',
                ":hover":{backgroundColor:'hsl(27deg 100% 55% / 78%)',
                boxShadow: '0px 11px 9px 6px hsl(25, 100%, 94%)'
                }}}
                onClick={handleClose}>
                  Checkout
              </Button>
              </>
            )}
            </Menu>
            <Avatar alt="user" src={avatarimg} 
            sx={{":hover":{border:3, borderColor:'hsl(26, 100%, 55%)', 
            borderRadius:'50%'},
            width: {md:50, xs:30}, 
            height: {md:50, xs:30}}} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Navbar;