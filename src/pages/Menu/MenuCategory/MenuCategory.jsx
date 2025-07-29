import React from 'react'
import MenuItem from '../../Shared/Menuitem/MenuItem'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom'

const MenuCategory = ({items,title,img}) => {
  return (
    <div className='pt-8'>
        {title && <Cover img={img} title={title}></Cover>}
      
            <div className='grid grid-cols-2 gap-4'>
            {
                items.map(item=> <MenuItem 
                    key={item.id} item={item}>

                    </MenuItem>)
            }
            <Link to={`/order/${title}`} > <button className='btn btn-outline border-0 border-b-4 mt-4  flex my-5 ml-48 items-center justify-center mx-auto'>View Ful Menu</button></Link>
        </div>
    </div>
  )
}

export default MenuCategory