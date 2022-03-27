import React, {useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from "react-scroll"

import Logo from "../assets/logo.png"




const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200 border-b border-[#00ff00] z-50'>
     <div>
        <img src={Logo} alt='Logo' style={{ width: '55px' }} />
      </div>
    {/* Menu */}

    <ul className='hidden md:flex '>
    <li className=' hover:border-b-2 border-[#00ff00]' >
    <Link  to="home" smooth={true} duration={500} >
          Home
        </Link>  
    </li>      
    <li className=' hover:border-b-2 border-[#00ff00] '>
      <Link  to="about" smooth={true} duration={500} >
          About
        </Link> </li>      
    <li className=' hover:border-b-2 border-[#00ff00] '>
    <Link  to="skills" smooth={true} duration={500} >
          Skills
        </Link> 
      </li>      
    <li className=' hover:border-b-2 border-[#00ff00]  '>
    <Link  to="work" smooth={true} duration={500} >
          Work
        </Link> 
      </li>      
    <li className=' hover:border-b-2 border-[#00ff00]  '>
    <Link  to="contact" smooth={true} duration={500} >
          Contact
        </Link> 
      </li>      
    </ul>  

    {/* Hamburger  */}
    <div onClick={handleClick} className='md:hidden z-10 cursor-pointer ' >
    {!nav ? <FaBars/> : <FaTimes /> }
    </div>
    {/* Mobile Menu */}
    
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

    <li  className='py-6 text-4xl hover:border-b-2 border-[#00ff00]'><Link onClick={handleClick}  to="home" smooth={true} duration={500} >
          Home
        </Link > </li>      
    <li className='py-6 text-4xl hover:border-b-2 border-[#00ff00]'>
    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link></li>      
    <li className='py-6 text-4xl hover:border-b-2 border-[#00ff00]'>
    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link> </li>      
    <li className='py-6 text-4xl hover:border-b-2 border-[#00ff00]'>
    <Link onClick={handleClick}  to="work" smooth={true} duration={500} >
          Portfolio
        </Link> 
      </li>      
    <li className='py-6 text-4xl hover:border-b-2 border-[#00ff00]'>
    <Link onClick={handleClick}  to="contact" smooth={true} duration={500} >
          Contact
        </Link> 
      </li>      
    </ul>  


    {/* Social Icons  */}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-[0]">
    <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
        <a className='flex justify-between items-center w-full text-gray-300' 
        href="https://www.linkedin.com/in/alin-rudareanu-664738207/" target="_blank" rel="noreferrer">Linkedin <FaLinkedin size={30} />
        </a></li>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-300' 
        href="https://github.com/R-Alin-Gabriel " target="_blank" rel="noreferrer">GitHub <FaGithub size={30} />
        </a></li>
        <Link to='contact' smooth={true} duration={500}>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
        <button  className='flex justify-between items-center w-full text-gray-300' 
        >Contact <BsFillPersonLinesFill size={30} />
        </button></li></Link>
    </ul>
    </div>

    </div>
  )
}

export default Navbar