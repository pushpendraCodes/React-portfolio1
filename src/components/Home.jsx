import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import resume from "../assets/resume.pushpendra.updated.pdf"
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#51087e]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>
          PUSHPENDRA KUMAR
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Hey! My name is Pushpendra patel and and i am full stack developer I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Tailwindcss ,material ui , Advance Javascript, React.Js And Redux apart from Front-End, I have good knowledge in Back-End using node js , express js & mongo db and MySQL as well and continuously engage in trying to extend my skills with new technology.
        </p>
        <div>
          <a target='blank' href={resume} className='text-white group border-2  w-48 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
