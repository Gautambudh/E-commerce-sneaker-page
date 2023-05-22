import React from "react";
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const image = [ img1, img2, img3, img4 ];

const DialogCarousel = (props) => {

  const { carouselImgIndex } = props;

  return (
    <>
    <Box id="dialog-carousel" className="carousel slide" >
    <Box className="carousel-inner" sx={{position:'relative', height:{lg:500, md:420}, width:{lg:500, md:420}}}>
    {image.map((item, index) => {
      return (
        <>
        <Box className={index === 0 ? "carousel-item active" : "carousel-item"} 
        sx={{height:{lg:500, md:420}, width:{lg:500, md:420}}}>
          <Box component='img' src={item} className="d-block" alt="img-1" 
          sx={{height:'100%', width:'100%', borderRadius:2, opacity: 1}}/>
        </Box>
        </>
      )
    })}
    </Box>

    <IconButton size="medium" className="carousel-control-prev"  data-bs-target="#dialog-carousel" data-bs-slide="prev"
      sx={{backgroundColor:'white', textAlign:'center',position:'absolute', top:'45%', left:'-24px',
      ":hover":{backgroundColor:'white'}}}>
        <ArrowBackIosNewIcon sx={{color:'black', ":hover":{color:'orange'}}}/>
      </IconButton>
    <IconButton size="medium" className="carousel-control-next" data-bs-target="#dialog-carousel" data-bs-slide="next"
      sx={{backgroundColor:'white', textAlign:'center', position:'absolute', top:'45%', right:'-24px',
      ":hover":{backgroundColor:'white'}}} >
      <ArrowForwardIosIcon sx={{color:'black', ":hover":{color:'orange'}}}/>
    </IconButton>
  </Box>
  </>
  )
}

export default DialogCarousel