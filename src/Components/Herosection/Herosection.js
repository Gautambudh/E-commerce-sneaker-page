import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import img1 from '../../assets/images/image-product-1.jpg'
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg'
import minusIcon from '../../assets/images/icon-minus.svg'
import plusIcon from '../../assets/images/icon-plus.svg'


const Herosection = () => {

  return (
    <>
    <Container maxWidth='lg' disableGutters >
      <Grid container sx={{flexDirection:{md:'row', xs:'column'}}}>
        <Grid item md={6} sx={{px:{lg:8, md:4}}}>
        <Box sx={{height:{md:410, xs:320}}}>
        <Box component='img' src={img1} alt='thumb-1' height='100%' width='100%' sx={{borderRadius:{md:3}}}/>
        </Box>
        <Box className='thumbnail' sx={{display:{md:'flex', xs:'none'}, justifyContent:'space-between', mt:3, maxHeight:90, width:'100%'}}>
          <Box component='img' src={thumbnail1} alt='thumb-1' sx={{borderRadius:3, maxWidth:90, 
          ":hover":{border:3, borderColor:'hsl(26, 100%, 55%)', cursor:'pointer'}}}/>
          <Box component='img' src={thumbnail2} alt='thumb-1' sx={{borderRadius:3, maxWidth:90, 
          ":hover":{border:3, borderColor:'hsl(26, 100%, 55%)', cursor:'pointer'}}}/>
          <Box component='img' src={thumbnail3} alt='thumb-1' sx={{borderRadius:3, maxWidth:90, 
          ":hover":{border:3, borderColor:'hsl(26, 100%, 55%)', cursor:'pointer'}}}/>
          <Box component='img' src={thumbnail4} alt='thumb-1' sx={{borderRadius:3, maxWidth:90, 
          ":hover":{border:3, borderColor:'hsl(26, 100%, 55%)', cursor:'pointer'}}}/>
        </Box>
        </Grid>

        <Grid item md={6} sx={{mt:{md:0, xs:2}, px:1}}>
          <Typography variant='subtitle2' component='p' 
          sx={{letterSpacing:1, color:'hsl(26, 100%, 55%)', fontWeight:'bold', mt:{md:6}}}>SNEAKER COMPANY</Typography>
          <Typography variant='h3' component='h3' 
          sx={{fontWeight:700, mt:{md:2}}}>Fall Limited Edition Sneakers</Typography>
          <Typography variant='body1' component='p' 
          sx={{mt:{md:4}, maxWidth:{md:440, xs:'100%'}, color:'#676767'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</Typography>
          <Box sx={{mt:2, display:'flex', alignItems:'center'}}>
          <Typography variant='h6' component='span' sx={{fontWeight:'bold', letterSpacing:1}}>$125.00</Typography>
          <Typography variant='body2' component='span' 
          sx={{backgroundColor:'hsl(25, 100%, 94%)', color:'hsl(26, 100%, 55%)',
          px:1, py:0.5, 
          fontWeight:'bold',
          borderRadius:2,
          mx:1}}>50%</Typography>
          <Typography variant='body2' component='div' 
          sx={{textDecoration:'line-through', fontWeight:'bold', display:{xs:'block', sm:'none'}, width:'100%', textAlign:'right'}}>$250.00</Typography>
          </Box>
          <Typography variant='body2' component='div' 
          sx={{textDecoration:'line-through', mt:1, fontWeight:'bold', 
          display:{xs:'none', sm:'block'}}}>$250.00</Typography>

          <Box sx={{display:'flex', alignItems:'center', gap:2, mt:3, mb:1,
          flexDirection:{xs:'column', sm:'row',
          width:'100%'}}}>
          {/* quantitty box */}
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', px:1, py:1.5,
          backgroundColor:'hsl(223, 64%, 98%)', width:{sm:135, xs:'100%'}, borderRadius:2}}>
          <IconButton size="medium" sx={{py:1.5, px:1, ":hover":{backgroundColor:'hsl(25, 100%, 94%)'}}}>
            <img src={minusIcon} alt='minus' />
          </IconButton>
            <Typography variant='body2' component='p' 
            sx={{color:'black', fontWeight:'bold', width:30, textAlign:'center'}}>25</Typography>
          <IconButton size="medium" sx={{px:1, ":hover":{backgroundColor:'hsl(25, 100%, 94%)'}}}>
            <img src={plusIcon} alt='plus' />
          </IconButton>
          </Box>
          <Button variant="contained" size="medium" 
          sx={{px:8, py:1.4, 
          width:{sm:235, xs:'100%'},
          textTransform:'none', 
          backgroundColor:'hsl(26, 100%, 55%)',
          borderRadius:2.5,
          boxShadow: '0px 11px 15px 8px hsl(25, 100%, 94%)',
          ":hover":{backgroundColor:'hsl(27deg 100% 55% / 78%)',
          boxShadow: '0px 11px 9px 6px hsl(25, 100%, 94%)'
          }}}
          startIcon={<ShoppingCartOutlinedIcon />}>
            Add to cart
          </Button>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default Herosection