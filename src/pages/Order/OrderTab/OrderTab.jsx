import React from 'react'
import FoodCard from '../../../Components/FoodCard/FoodCard'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


const OrderTab = ({items}) => {
  const pagination = {
    clickable:true,
    renderBullet: function (index,className){
      return '<span class="' + className + '" >' +  (index + 1) + "</span>"
    }
  }
  return (
         <div>
          <Swiper
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
     <div  className='grid grid-cols-3 gap-10'>
     {
            items.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
            }
     </div>
        </SwiperSlide>
     
   
      </Swiper>
       
         </div>
  )
}

export default OrderTab