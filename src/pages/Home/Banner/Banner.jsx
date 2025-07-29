import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import img1 from '../../../assets/bannerImg/images (1).jpeg'
import img2 from '../../../assets/bannerImg/img2.jpg'
import img3 from '../../../assets/bannerImg/img3.jpg'
import img4 from '../../../assets/bannerImg/images4.jpeg'
import img5 from '../../../assets/bannerImg/img5.jpeg'
import img6 from '../../../assets/bannerImg/img6.jpeg'


const Banner = () => {
  return (
    <Carousel >
       <div className='h-[600px]'>
       <img  src={img1} alt="" />
       </div>
       <div className='h-[600px]'>
       <img  src={img2} alt="" />
       </div>
       <div className='h-[600px]'>
       <img  src={img3} alt="" />
       </div>
       <div className='h-[600px]'>
       <img src={img4} alt="" />
       </div>
       <div className='h-[600px]'>
       <img  src={img5} alt="" />
       </div>
       <div className='h-[600px]'>
       <img  src={img6} alt="" />
       </div>
    </Carousel>
  )
}

export default Banner