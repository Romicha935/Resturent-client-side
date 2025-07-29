import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/bannerImg/slide1.jpeg'
import slide2 from '../../../assets/bannerImg/slide2.jpeg'
import slide3 from '../../../assets/bannerImg/slide3.jpeg'
import slide4 from '../../../assets/bannerImg/slide4.jpg'
import slide5 from '../../../assets/bannerImg/slide5.jpeg'
import slide6 from '../../../assets/bannerImg/slide6.jpeg'
import slide7 from '../../../assets/bannerImg/slide7.jpg'
import slide8 from '../../../assets/bannerImg/slide8.jpeg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
  return (
   <section>
    <SectionTitle     
    subHeading={"From 11.00am to 10.00pm"}
    heading={"Order Online"}>
    
    </SectionTitle>
     <Swiper 
       slidesPerView={4}
       spaceBetween={30}
    //    centeredSlides={true}
       pagination={{
        clickable:true,
       }}
       modules={[Pagination]}
       className='mySwiper mb-24'
    >
        <SwiperSlide>
            <img className='w-full h-[250px] reounded-lg object-cover object-[center_top]' src={slide1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Pizzas</h3>
            </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide2} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Burgur</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide3} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide4} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide5} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Fruts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide6} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide7} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-44 text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[250px] reounded-lg object-cover' src={slide8} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-28 text-white'>Salads</h3>
        </SwiperSlide>
    </Swiper>
   </section>
  )
}

export default Category