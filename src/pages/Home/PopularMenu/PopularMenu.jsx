import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/Menuitem/MenuItem'
import useMenu from '../../../hooks/useMenu'

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item =>  item.category === "Popular" )
// const [menu,setMenu] = useState([])
//     useEffect(()=>{
//         fetch("/menu.json")
//         .then(res=> res.json())
//         .then(data=>{
//             console.log('data item',data);
            
//             const popularItems = data.filter(item => item.category )
//             setMenu(popularItems)})
        
//     },[])
  return (
    <section>
        <SectionTitle 
         heading="from Our Menu"
         subHeading="Popular Items">

        </SectionTitle>

    
    </section>
  )
}

export default PopularMenu