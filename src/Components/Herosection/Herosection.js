import React from 'react';
import { Box, Container, Grid, Typography, Button, IconButton, Dialog, DialogContent } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';
import minusIcon from '../../assets/images/icon-minus.svg';
import plusIcon from '../../assets/images/icon-plus.svg';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, isAddToCartClicked, countState } from './reduxSlice';
import MobileCarouselComponent from './MobileCarousel';
import DialogCarouselComponent from './DialogCarousel';

const image = [ img1, img2, img3, img4 ];
const thumbnailList = [ thumbnail1, thumbnail2, thumbnail3, thumbnail4 ];

const Herosection = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(countState);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  const [activeThumbnail, setActiveThumbnail] = React.useState('');
  const [ imageIndex, setImageIndex ] = React.useState(0);
  const [ newIndex, setNewIndex ] = React.useState(0);
  const [ carouselImgIndex, setCarouselImgIndex ] = React.useState(0);

  const handleClick = (thumbnail) => {
    if (activeThumbnail === thumbnail){
      return ;
    }
    setActiveThumbnail(thumbnail);
  };

  return (
    <>
    <Container maxWidth='lg' disableGutters >
      <Grid container sx={{flexDirection:{md:'row', xs:'column'}}}>
        <Grid item md={6} sx={{px:{lg:9, md:4}}}>

        {/* hero-image box */}
        <Box sx={{height:{md:410}, display:{ xs:'none', md:'block'}}}>
          <Box onClick={handleClickOpen} component='img' src={image[imageIndex]} alt='thumb-1' height='100%' width='100%' 
          sx={{borderRadius:{md:3}, cursor:'pointer'}}/>
        </Box>

        {/* carousel for mobile viewport */}
        <Box sx={{display:{ xs:'block', md:'none'}}}>
          <MobileCarouselComponent />
        </Box>

        {/* thumbnail images under the hero image */}
        <Box className='thumbnail' sx={{display:{md:'flex', xs:'none'}, justifyContent:'space-between', mt:3, maxHeight:90, width:'100%'}}>
          {thumbnailList.map((item, index) => {
            return (
              <Box key={index} className={activeThumbnail === `thumbnail-${index + 1}` ? 'thumbnail-active' : ''}
              onClick={() => {
              handleClick(`thumbnail-${index + 1}`);
              setImageIndex(index);
            }} 
            component='img' src={item} alt={`thumb-${index + 1}`} 
            sx={{borderRadius:3, maxWidth:90}}/>
            )
          })}
        </Box>
        <Dialog
          onClose={handleClose}
          open={open}
          sx={{"& .MuiDialogContent-root": { py:0.5 , px:{lg:3, md:6},  overflowY:'hidden', overflowX:'hidden',
          }, "& .MuiDialog-container":{backgroundColor:'#000000ab'},
          }}
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
              maxHeight:'100%',
            }
          }}
        >
        <Box sx={{textAlign:'right',mt:1, mr:{lg:3, md:6}}}>
        <CloseIcon onClick={handleClose} sx={{cursor:'pointer', color:'white', strokeWidth: 1, stroke:'white',
        ":hover":{color:'hsl(26, 100%, 55%)', strokeWidth: 1, stroke:'hsl(26, 100%, 55%)',}}}/>
        </Box>
          <DialogContent sx={{opacity:1}} >
          <DialogCarouselComponent />

          <Box className='thumbnail' sx={{display:{md:'flex', xs:'none'}, justifyContent:'space-around', mt:2, maxHeight:80, width:'100%'}}>
          {thumbnailList.map((item, index) => {
            return (
              <Box key={index} className={activeThumbnail === `thumbnail-${index + 1}` ? 'thumbnail-active' : ''}
              onClick={() => {
              handleClick(`thumbnail-${index + 1}`);
              setCarouselImgIndex(index);
            }} 
            component='img' src={item} alt={`thumb-${index + 1}`} 
            sx={{borderRadius:3, maxWidth:80}}/>
            )
          })}
        </Box>
          </DialogContent>
        </Dialog>
        </Grid>

        <Grid item md={6} sx={{mt:{md:0, xs:2}, px:{md:3, xs:1}}}>
          <Typography variant='subtitle2' component='p' 
          sx={{letterSpacing:1, color:'hsl(26, 100%, 55%)', fontWeight:'bold', mt:{md:6}}}>SNEAKER COMPANY</Typography>
          <Typography variant='h3' component='h3' 
          sx={{fontWeight:700, mt:{md:2, xs:1}}}>Fall Limited Edition Sneakers</Typography>
          <Typography variant='body1' component='p' 
          sx={{mt:{md:4, xs:2}, maxWidth:{md:440, xs:'100%'}, color:'#676767'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
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
          <IconButton onClick={() => dispatch(decrement())}
          size="medium" sx={{py:1.5, px:1, ":hover":{backgroundColor:'hsl(25, 100%, 94%)'}}}>
            <img src={minusIcon} alt='minus' />
          </IconButton>
            <Typography variant='body2' component='p' 
            sx={{color:'black', fontWeight:'bold', width:30, textAlign:'center'}}>
            {count}
            </Typography>
          <IconButton onClick={() => dispatch(increment())}
          size="medium" sx={{px:1, ":hover":{backgroundColor:'hsl(25, 100%, 94%)'}}}>
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
          startIcon={<ShoppingCartOutlinedIcon />}
          onClick={() => dispatch(isAddToCartClicked({value: true}))}>
            Add to carts
          </Button>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default Herosection
