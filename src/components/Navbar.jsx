import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/programmer.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#300949]  text-gray-300'>
      <div className='sm:px-5 flex items-center'>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '60px' }} /> */}
        <p className='text-3xl font-serif font-semibold'> pushpendra <span className='text-xl '>Patel</span> </p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li  className='hover:text-pink-800 list active font-semibold hover:ease-in duration-500  '>
          <Link to='home' activeClass='active'
  spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-pink-800 list font-semibold hover:ease-in duration-500 '>
          <Link to='about' smooth={true} duration={500}>
            About me
          </Link>
        </li>
        <li className='hover:text-pink-800 list font-semibold hover:ease-in duration-500 '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-red-900 list font-semibold hover:ease-in duration-500 '>
          <Link to='work' smooth={true} duration={500}>
            My Work
          </Link>
        </li>
        <li className='hover:text-pink-800 list font-semibold hover:ease-in duration-500 '>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/pushpendra-patel-2b2130235/"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.instagram.com/pushpendra_codes/"
              target="blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://api.whatsapp.com/send?phone=8516064332&text=Hello pushpendra."

              target='blank'
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://twitter.com/pushpendrpatel" target='blank'
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/pushpendraCodes" target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto:pushpendrapatel8055@gmail.com"
              target='blank'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
