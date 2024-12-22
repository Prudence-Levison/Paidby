import Image from 'next/image'
import logo from '../public/paidby-logo.avif'
import { useState } from 'react';
 export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    
       <div className=" flex justify-center sticky top-0 z-10 bg-[#E7FAF9] ">
        {/* The entire code below contains the navbar */}
        <div className='size-28 pt-8'> 
        <Image src={logo}
         alt='logo'    />
        </div>

        <div className={`block lg:flex font-medium px-2 pt-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* <ul className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}></ul> */}
        <p className="  pt-4"> About Us</p>
        <p className=" px-2 pt-4 "> Use Case</p>
        <p className=" px-2 pt-4"> FAQ</p>
        <p className=" px-2 pt-4 "> Pricing</p>
        <p className=" px-2 pt-4 flex  lg:hidden "> Login</p>
        <button  className=' flex lg:hidden bg-[#191235] px-10 py-3 text-[#2EF6F6] rounded-lg '>Create Free Account </button>
        </div>
        <div className="md:hidden flex items-center">
    <button className="mobile-menu-button" onClick={handleMenuToggle}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

        {/* The form which handles the input field ie the contract ID which the user should input onces a contract is signed */}
        <form className='pt-6'>
        <input
            className=" hidden lg:block mb-4 border-2 text-left  border-black rounded-lg px-20 py-3"
            type=""
            placeholder='Enter your Contract ID'
          />
        </form>
        {/* Login and create account button */}
         <div className='pt-6'>
            <button className='  bg-[#2EF6F6] px-10 py-3 ml-10 mr-4 rounded-lg '>Login</button>
            <button  className=' bg-[#191235] px-10 py-3 text-[#2EF6F6] rounded-lg '>Create Free Account </button>
         </div>

       
    </div>
  )
}

export default Navbar
