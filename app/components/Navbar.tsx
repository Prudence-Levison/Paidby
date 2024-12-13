import Image from 'next/image'
import logo from '../public/paidby-logo.avif'
 export const Navbar = () => {
  return (
    
       <div className=" flex justify-center sticky top-0 z-10 bg-[#E7FAF9] ">
        {/* The entire code below contains the navbar */}
        <div className='size-28 pt-8'> 
        <Image src={logo}
         alt='logo'    />
        </div>

        <div className=" flex font-medium px-2 pt-5">
        <p className="  pt-4"> About Us</p>
        <p className=" px-2 pt-4 "> Use Case</p>
        <p className=" px-2 pt-4"> FAQ</p>
        <p className=" px-2 pt-4 "> Pricing</p>
        </div>

        {/* The form which handles the input field ie the contract ID which the user should input onces a contract is signed */}
        <form className='pt-6'>
        <input
            className="mb-4 border-2 text-left  border-black rounded-lg px-20 py-3"
            type=""
            placeholder='Enter your Contract ID'
          />
        </form>
        {/* Login and create account button */}
         <div className='pt-6'>
            <button className='bg-[#2EF6F6] px-10 py-3 ml-10 mr-4 rounded-lg '>Login</button>
            <button  className='bg-[#191235] px-10 py-3 text-[#2EF6F6] rounded-lg '>Create Free Account </button>
         </div>

       
    </div>
  )
}

export default Navbar
