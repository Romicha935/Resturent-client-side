import React from 'react'
import Cover from '../Shared/Cover/Cover'
import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/bannerImg/menuImg.jpeg'
import dessertImg from '../../assets/bannerImg/dessertImg.jpeg'
import pizzaimg from '../../assets/bannerImg/pizzaImg.jpeg'
import soupImg from '../../assets/bannerImg/soupImg.jpeg'
import saladImg from '../../assets/bannerImg/saladImg.jpeg'

import PopularMenu from './../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item=> item.category === "Dessert")
  const soup = menu.filter(item=> item.category === "Soup")
  const salad = menu.filter(item=> item.category === "Salad")
  const pizza = menu.filter(item=> item.category === "Pizza")
  const offerd = menu.filter(item=> item.category === "Offer")
  return (
    <div className=''>
      <Helmet>
      <title>Bite & Sip | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
        {/* main cover */}
        <SectionTitle subHeading="Don't miss " heading="todays offer" />
             {/* offerd menu items */}
        <MenuCategory items={offerd}/>
             {/* dessert items */}
             <MenuCategory items={desserts} img={dessertImg} title="Dessert" />
             <MenuCategory items={pizza} img={pizzaimg} title={"Pizza"} />
             <MenuCategory items={soup} img={soupImg} title="Soup" />
             <MenuCategory items={salad} img={saladImg} title={"Salad"} />
    </div>
  )
}

export default Menu