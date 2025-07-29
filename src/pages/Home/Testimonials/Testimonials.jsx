import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules'
import Rating from 'react-rating'
import { FaRegStar, FaStar } from 'react-icons/fa'
// import '@react-rating/style.css'

const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
  return (
<section className='my-20'>
    <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
 
 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
  
    {
        reviews.map(review=> <SwiperSlide key={review._id}>
            <div className='flex flex-col items-center mx-24 my-16'>
            <Rating initialRating={review.rating}
             emptySymbol={<FaRegStar className="text-gray-400 text-2xl" />} 
             fullSymbol={<FaStar className="text-yellow-500 text-2xl" />} 
            readonly />
                <p className='py-8'>{review.details}</p>
                <h3 className='text-2xl text-orange-500'>{review.name}</h3>
            
            </div>
        </SwiperSlide>)
    }
 </Swiper>
   
</section>
  )
}

export default Testimonials