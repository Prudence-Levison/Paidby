import Image from 'next/image'
import logo from '../public/paidby-logo.avif'
import { useState } from 'react';
 export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    
       <div className=" flex justify-around lg:justify-center sticky top-0 z-10 bg-[#E7FAF9] ">
        {/* The entire code below contains the navbar */}
        <div className='size-28 pt-8'> 
        <Image src={logo}
         alt='logo'    />
        </div>

        <nav className="hidden lg:flex font-medium px-2 pt-5 ">
        
        <p className="  pt-4"> About Us</p>
        <p className=" px-2 pt-4 "> Use Case</p>
        <p className=" px-2 pt-4"> FAQ</p>
        <p className=" px-2 pt-4 "> Pricing</p>
        <p className=" px-2 pt-4 flex  lg:hidden "> Login</p>
        </nav>

        <div className="flex pl-44 lg:hidden">
        <button 
         className="mobile-menu-button" 
         onClick={handleMenuToggle}
         >
      <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
            
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
         <div className=' hidden lg:flex items-center  space-x-4 pb-2'>
            <button className='  bg-[#2EF6F6] px-12  text-lg py-3 ml-10  rounded-lg '>Login</button>
            <button  className=' bg-[#191235] px-10 py-3 text-lg text-[#2EF6F6] rounded-lg '>Create Free Account </button>
         </div>

         {isMenuOpen && (
        <div className="lg:hidden bg-[#E7FAF9] shadow-lg py-4 absolute top-28 left-18 w-full">
          <nav className="flex flex-col items-center space-y-4">
            <p className="pt-4">About Us</p>
            <p className="px-2 pt-4">Use Case</p>
            <p className="px-2 pt-4">FAQ</p>
            <p className="px-2 pt-4">Pricing</p>
            <p className="px-2 pt-4">Login</p>
            
            <button className="bg-[#191235] px-10 py-3 text-[#2EF6F6] rounded-lg">
              Register
            </button>
          </nav>
        </div>
      )}
       
    </div>
  )
}

export default Navbar
