import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import featuredImg from '../../../assets/bannerImg/featuredImg.jpg'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured-item text-white bg-fixed  py-8'>
        <SectionTitle subHeading="Check it out" heading="Featured item"/>
        <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center py-20 px-36 pt-12 pb-20'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20 2024</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti eius iusto sequi fugiat ex adipisci quis, necessitatibus consectetur sed minus, nulla consequuntur quo illum odio rem excepturi aut optio sint? Ut amet enim sapiente accusantium? Commodi architecto perferendis animi ea itaque tempore? Dolor ex deleniti culpa et laboriosam similique amet!</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured