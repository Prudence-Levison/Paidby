"use client";
import Image from 'next/image'
import  loginmodel from '../public/login-model-paidby.avif'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Store/userSlice';


 export const Login = () => {
  
  const dispatch = useDispatch(); 
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('')
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setEmail(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setPassword(e.target.value)
  }

  return (
    
    <div className="grid grid-cols-2  gap-x-11 ">

        {/* This div contains the entire login asides the image  */}
        <div className=' pl-44' > 
          <h3 className='font-bold text-4xl pt-20 '>Login</h3>
          <p className='py-6 text-gray-600 text-xl'>Sign-in to your Paidby account</p>

          <form className='block' onSubmit={handleSubmit}>
            <div className='py-4'>
          <input
            className=" pl-6 text-left
             py-4  border-2 rounded-lg block w-full border-gray-300  "
            type="text"
            placeholder='Email'
            value={email}
            onChange={handleEmail}
          />
          </div> 

          <div className='py-4'>
            <input
            className=" pl-6 text-left
             py-4  border-2 rounded-lg block w-full border-gray-300"
            type="Password"
            placeholder='Password'
            value={password}
            onChange={handlePassword}
          />
          </div>
          </form>

          <div className='grid grid-cols-2 pt-6'>
          <div >
            <button className='bg-[#2EF6F6] px-14 py-3  rounded-lg ' type="submit">Login</button>
         </div>
         <div className='pl-24 pt-4'>
            <p>Forgot Password?</p>
         </div>
         </div>

         <p className='pt-10 text-sm pb-5'>Don't have an account? <span className='font-bold'>Register</span></p>
        </div>

        {/* The image on the Login page which is hidden for mobile screens */}
        <div className='size-9/12 pt-6'>
        <Image src={loginmodel}
         alt='Model'    />
    
        </div>
      
    </div>
  )
}

export default Login
