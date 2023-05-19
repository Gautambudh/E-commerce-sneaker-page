import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, IconButton, Divider, Typography, Button, Tab, Avatar, Badge  } from '@mui/material';
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

const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
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
          <Box sx={{ display: { xs: 'none', sm: 'block' }, typography: "body1", ml:2 }}>
            <TabContext value={value} >
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
              <TabList
                onChange={handleChange}
                textColor="black"
                TabIndicatorProps={{
                  sx: { backgroundColor: "orange", height: 3, width:50 }
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
            <Badge badgeContent={4} sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "hsl(26, 100%, 55%)",
                px:1.2,
                fontWeight:'bold',
              }
            }}>
              <ShoppingCartOutlinedIcon sx={{color:'black', mt:0.5}}/>
            </Badge>
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