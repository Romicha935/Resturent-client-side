import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../providers/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import SocialLogin from '../../Components/SocialLogin/SocialLogin'



const SignUp = () => {
  const axiosPublic = useAxiosPublic()
    const {register,handleSubmit,reset ,formState: { errors },} = useForm()
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=> {
          const user = result.user;
          console.log(user);
          updateUserProfile(data.name,data.photoURL)
          .then(()=> {
            // console.log('user profile updated');
            //create user entry in the database
                 const userInfo = {
                    name: data.name,
                    email: data.email
                 }
                 axiosPublic.post('/users',userInfo)
                 .then(res=> {
                  if(res.data.insertedId){
                    reset()
                    Swal.fire({
                      position:'top-end',
                      icon:'success',
                      title:'User created succesfully',
                      showConfirmButton: false,
                      timer:1500
                    })
                    navigate('/')
                  }
                 })
     
          })
          .catch((error)=> {
            console.log(error);
            
          })
        })
    }
  return (
   <>
      <Helmet>
      <title>Bite & Sip | Signup</title>
      </Helmet>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" name='name' {...register("name",{required:true})}  className="input" placeholder="Name" />
            {errors.name && <span className='text-red-500'>Name  is required</span>}
            <label className="fieldset-label">Photo URl</label>
            <input type="text" name='photoURL' {...register("photoURL",{required:true})}  className="input" placeholder="Name" />
            {errors.photoURL && <span className='text-red-500'>Photo URL  is required</span>}

            <label className="fieldset-label">Email</label>
            <input type="email" name='email' {...register("email",{required:true})} className="input" placeholder="Email" />
            {errors.email && <span className='text-red-500'>Email is required</span>}
            <label className="fieldset-label">Password</label>
            <input type="password" name='password' {...register("password",{required:true, minLength:6,maxLength:20,
                pattern:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            })}  className="input" placeholder="Password" />
            {errors.password?.type === 'required' && <p className='text-red-500'>Password  is required</p>}
            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
            {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less then 20 characters</p>}
            {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one uppercase & ine lowercase , one number and one special characters </p>}
            <div><a className="link link-hover">Forgot password?</a></div>
 
            <input className='btn btn-primary' type="submit" value="Sign up" />
          </fieldset>
        </form>
        <Link to="/login" className='mx-8'>Login</Link> 
        <SocialLogin/>
      </div>
    </div>
  </div>
  </>
  )
}

export default SignUp