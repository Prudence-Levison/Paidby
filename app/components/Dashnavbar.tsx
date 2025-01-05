import Image from "next/image";
import logo from "../public/paidby-logo.avif";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../Store/userSlice'
import { logout } from "../Store/userSlice";


export const Dashnavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user)

  if (!user || !user.user) {
    return <div>Loading...</div>;
  }

  const { first_name, last_name, email } = user.user;

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };


  return (
    <div className="flex justify-around lg:justify-between px-20 sticky top-0 z-10 bg-[#E7FAF9]">
      {/* The entire code below contains the navbar */}
      <div className="pl-2 lg:pl-0 pt-12 size-32 lg:size-28 lg:pt-10">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex pl-44 lg:hidden">
        <button className="mobile-menu-button" onClick={handleMenuToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* The form which handles the input field ie the contract ID which the user should input onces a contract is signed */}
      <form className="pt-6">
        <input className="hidden lg:block mb-4 border-2 text-lg border-black bg-white rounded-lg px-20 py-3" type="" placeholder="Enter your Contract ID" />
      </form>
      {/* Login and create account button */}
      <div>
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
      </div>
      {/* <div><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></div> */}
      <div></div>
      <div className="hidden lg:flex items-center space-x-4 pb-2">
        <h1>Welcome, {first_name} {last_name}!</h1>
      
        <button 
        onClick={handleLogout}
        className="bg-[#2EF6F6] px-12 text-lg py-3 ml-7 rounded-lg">Logout</button>
    
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-[#E7FAF9] shadow-lg py-4 absolute top-28 left-18 w-full">
          <nav className="flex flex-col items-center space-y-4">
            <p className="pt-4">About Us</p>
            <p className="px-2 pt-4">Use Case</p>
            <p className="px-2 pt-4">FAQ</p>
            <p className="px-2 pt-4">Pricing</p>
            <p className="px-2 pt-4">Login</p>
            <button className="bg-[#191235] px-10 py-3 text-[#2EF6F6] rounded-lg">Register</button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Dashnavbar;
