import React, { useState } from 'react'
import OrdercoverImg from '../../../assets/bannerImg/orderImg.jpeg'
import Cover from '../../Shared/Cover/Cover'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import useMenu from '../../../hooks/useMenu'
import FoodCard from '../../../Components/FoodCard/FoodCard'
import OrderTab from '../OrderTab/OrderTab'
import { useParams } from 'react-router-dom'

const Order = () => {
    const categories = ['salad','pizza', 'burger','dessert','soup']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
  
    console.log(category);
    
    const desserts = menu.filter(item=> item.category === "Dessert")
    const soup = menu.filter(item=> item.category === "Soup")
    const salad = menu.filter(item=> item.category === "Salad")
    const pizza = menu.filter(item=> item.category === "Pizza")
    const burger = menu.filter(item=> item.category === "Burger")
  return (
    <div>
        <Cover img={OrdercoverImg} title="Order food" />
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList className="flex justify-center gap-4 p-4">
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Burger</Tab>
      <Tab>Dessert</Tab>
      <Tab>Soup</Tab>
 

    </TabList>

    <TabPanel>
         <OrderTab items={salad} />
    </TabPanel>
    <TabPanel>
    <OrderTab items={pizza} />
    </TabPanel>
    <TabPanel>
    <OrderTab items={burger} />
    </TabPanel>
    <TabPanel>
    <OrderTab items={desserts} />
    </TabPanel>
    <TabPanel>
    <OrderTab items={soup} />
    </TabPanel>

  </Tabs>
    </div>
  )
}

export default Order