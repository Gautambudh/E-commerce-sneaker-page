import React from "react";
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const image = [ img1, img2, img3, img4 ];

const CarouselComponent = (props) => {

  const { carouselImgIndex } = props;

  return (
    <>
    <div id="carousel" className="carousel slide">
    <Box className="carousel-inner" sx={{height:{lg:500, md:420}, width:{lg:500, md:420}, position:'relative'}}>
    {image.map((item, index) => {
      return (
        <>
        <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
          <img src={item} className="d-block " alt="img-1" />
        </div>
        </>
      )
    })}
    </Box>

    <IconButton size="medium" className="carousel-control-prev"  data-bs-target="#carousel" data-bs-slide="prev"
      sx={{backgroundColor:'white', textAlign:'center',position:'absolute', top:{md:'45%', xs:'50%'}, left:{md:'-24px', xs:0},
      ":hover":{backgroundColor:'white'}}}>
        <ArrowBackIosNewIcon sx={{color:'black', ":hover":{color:'orange'}}}/>
      </IconButton>
    <IconButton size="medium" className="carousel-control-next" data-bs-target="#carousel" data-bs-slide="next"
      sx={{backgroundColor:'white', textAlign:'center', position:'absolute', top:{md:'45%', xs:'50%'}, right:{md:'-24px', xs:0},
      ":hover":{backgroundColor:'white'}}} >
      <ArrowForwardIosIcon sx={{color:'black', ":hover":{color:'orange'}}}/>
    </IconButton>
</div>
</>
  )
}

export default CarouselComponent