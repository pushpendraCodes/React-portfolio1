import React from "react";
import chat from '../assets/chat1.png'
const Contact = () => {

  const year = new Date().getFullYear()
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mb-8">
          <p className="text-4xl font-bold inline border-b-4  text-gray-300 border-pink-600">
            Contact Us
          </p>
          {/* <p className="py-6">// Check out some of my recent work</p> */}
        </div>

        <div className="">
          <div className=" w-full bg-violet-700  sm:flex justify-between items-center p-5 rounded-lg text-white ">
            <div className=" p-4 w-">
              <h1 className="text-3xl font-semibold ">Work Enquiry</h1>
              <p className="my-1 font-thin">
                Let's work together and i'll help you by all my best,

              </p>
              <p className="my-1 font-thin">
              I am always open to discuss your project,

              </p>
            </div>
            <div className="  relative  ">

            <p className="text-xl mb-1 font-semibold ">Just say hi.
</p>
              <a
                href="https://api.whatsapp.com/send?phone=8516064332&text=Hello pushpendra."
                target="blank"
              >
                <button
                  style={{ width: "120px" }}
                  class="rounded-md flex    bg-sky-500 p-2 gap-2 chat "
                >

                  Lets Chat <img src={chat} className="w-6 h-6" alt="" />{" "}
                </button>
              </a>
            </div>


            <br />

          </div>

          <div className="text-center my-5 contact-bg">
              <h1 className="text-2xl font-semibold">Stay Connected</h1>
              <p>Rewa MP (INDIA)</p>
              <br />
              <p className="text-gray-400 font-thin">Email at</p>

              <h2 className="text-xl font-semibold">
                pushpendrapatel8055@gmail.com
              </h2>
            </div>
          {/* <form  className='flex flex-col max-w-[600px] w-full'>

<input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
<input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
<textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
<button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
</form> */}
        </div>
      </div>

          <div  className="copyright p-4 bg-violet-700 ">
          <p  className="text-center">
            Copyright ©{year} &nbsp; PushpendraCodes. All rights reserved{" "}
          </p>
        </div>
    </div>
  );
};

export default Contact;
