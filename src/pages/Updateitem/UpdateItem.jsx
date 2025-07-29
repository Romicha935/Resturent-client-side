import React from 'react'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { FaUtensils } from 'react-icons/fa'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {register,handleSubmit,reset} = useForm()
    const {name,category,recipe,price,image,_id} = useLoaderData()
    console.log("Loaded Data:", useLoaderData()); 
    
    const axiospublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
 const onSubmit = async(data) => {
     console.log('form submitted',data);
     //image uploade to imgbb and then get an url
     const formData = new FormData();
     formData.append("image", data.image[0]);
     const res = await axiospublic.post(image_hosting_api,formData,{
       headers: {
         'content-type': 'multipart/form-data'
       }
     })
 
     if(res.data.success){
       //now send the menu item data to the server with the image
       const menuItem = {
         name:data.name,
         category:data.category,
         price: parseFloat(data.price),
         recipe: data.recipe,
         image: res.data.data.display_url
       }
       //
       const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
       console.log(menuRes.data);
       if(menuRes.data.modifiedCount > 0){
         //show success api
        //  reset()
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: `${data.name} is added to the menu`,
           showConfirmButton: false,
           timer: 1500
         });
       }
       
     }
     console.log('with image url',res.data);
     
   }
    
  return (
    <div>
        <SectionTitle heading="update an item" subHeading="refresh info" />
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                      <input defaultValue={name} {...register('Name')} />
                      <div className='form-control w-full my-6 '>
                        <label className='label'>
                          <span className='label-text'>Recipe name *</span>
                        </label>
                        <input type="text" placeholder='recipe name' {...register('name',{required:true})} required className='input input-bordered w-full ' />
                      </div>
          
                      <div className='flex gap-6'>
                        {/*category */}
                        <div className='form-control w-full my-6 '>
                        <label className='label'>
                          <span className='label-text'>category *</span>
                        </label>
                        <select defaultValue={category} {...register('category',{required:true})} className='select select-bordered w-full '>
                      <option disabled value='default'>Select a category</option>
                      <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="soup">Soup</option>
                      <option value="dessert">Dessert</option>
                      <option value="burger">Burger</option>
                      
                      </select>
                      </div>
                      {/* price */}
                      <div className='form-control w-full my-6 '>
                        <label className='label'>
                          <span className='label-text'>Price *</span>
                        </label>
                        <input defaultValue={price} type="text" placeholder='price' {...register('price',{required:true})} className='input input-bordered w-full ' />
                      </div>
                      </div>
          
            
                      {/* recipe details */}
                      <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Details</legend>
            <textarea defaultValue={recipe} {...register('recipe')} className="textarea h-24 w-full" placeholder="bio"></textarea>
              
          </fieldset>
          
                 <div className='form-control w-full my-6'>
                  <input {...register('image',{required:true})} type="file" className='file-input w-full' />
                 </div>
                  
                    <button type='submit' className='btn'>
                      Update Menu Item <FaUtensils className='ml-4'/>
                    </button>
                    </form>
        </div>
    </div>
  )
}

export default UpdateItem