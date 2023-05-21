import React from "react";
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';
import { Box } from '@mui/material';
import prevIcon from '../../assets/images/icon-previous.svg';
import nextIcon from '../../assets/images/icon-next.svg';

const image = [ img1, img2, img3, img4 ];

const CarouselComponent = () => {
  return (
    <>
    <div id="carousel" className="carousel slide">
    <Box className="carousel-inner" sx={{height:{lg:500, md:420}, width:{lg:500, md:420}}}>
    <div className="carousel-item active">
      <img src={img1} className="d-block " alt="img-1" />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block " alt="img-2" />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block " alt="img-3" />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block" alt="img-4" />
    </div>
    </Box>

  <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <img className="svg" src={prevIcon} alt="prev" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <img className="svg" src={nextIcon} alt="next" />
  </button>
</div>
</>
  )
}

export default CarouselComponent