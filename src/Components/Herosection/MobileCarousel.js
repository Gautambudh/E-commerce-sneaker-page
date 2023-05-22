import React from "react";
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const image = [ img1, img2, img3, img4 ];

const MobileCarousel = (props) => {

  return (
    <>
    <Box id="carousel" className="carousel slide" sx={{p:{md:0, sm:1, xs:0}}}>
    <Box className="carousel-inner" sx={{position:'relative',}}>
    {image.map((item, index) => {
      return (
        <>
        <Box className={index === 0 ? "carousel-item active" : "carousel-item"} 
        sx={{height:{sm:420, xs:320}, width:'100%'  }}>
          <Box component='img' src={item} className="d-block" alt="img-1" 
          sx={{height:'100%', width:'100%', opacity: 1, objectFit:{sm:'fill'}, mt:{xs:5.5, sm:0}}}/>
        </Box>
        </>
      )
    })}
    </Box>

    <IconButton size="medium" className="carousel-control-prev"  data-bs-target="#carousel" data-bs-slide="prev"
      sx={{backgroundColor:'white', position:'absolute', top:'50%', left:{sm:8, xs:0},
      ":hover":{backgroundColor:'white'}}}>
        <ArrowBackIosNewIcon sx={{color:'black', ":hover":{color:'orange'}}}/>
      </IconButton>
    <IconButton size="medium" className="carousel-control-next" data-bs-target="#carousel" data-bs-slide="next"
      sx={{backgroundColor:'white',  position:'absolute', top:'50%', right:{sm:8, xs:0},
      ":hover":{backgroundColor:'white'}}} >
      <ArrowForwardIosIcon sx={{color:'black', ":hover":{color:'orange'}}}/>
    </IconButton>
  </Box>
  </>
  )
}

export default MobileCarousel