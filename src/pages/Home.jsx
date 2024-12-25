import React from 'react';
import aditya from '../assets/aditya1.jpg';

const Home = () => {
  return (
    <div className='bg-[#F1F0E8] flex flex-wrap mt-20' style={{height:'calc(100vh - 5rem)'}}>
      <div className='md:w-2/5 sm:w-full  flex justify-center items-center'>
        <img className='border-[10px] border-zinc-50 rounded-[50%] w-96 h-96' src={aditya} alt="image" />
      </div>
      <div className='md:w-3/5 sm:w-full pt-[10%] pr-24'>
             <h2 className='font-semibold text-center text-4xl'>Hello, I'm </h2>
             <h1 className='font-bold text-center text-5xl pt-2'>Aditya Narayan Maurya</h1>
             <p className='font-normal  text-3xl text-wrap text-center pt-2 leading-9'>A dedicated <span className='italic text-[#89A8B2]'> Full Stack Web Developer </span>.
             I specialize in creating dynamic and user-friendly web applications.
             Let's collaborate to turn ideas into impactful digital solutions.
             </p>
             <br />
            <div className='flex flex-wrap justify-center'>
            <a href="" className='transform hover:scale-110 transition duration-200 text-2xl m-3 mt-5 bg-[#89A8B2] text-slate-100 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-black hover:bg-[#F1F0E8]'>Contact me here <i className="fa-solid fa-arrow-right"></i></a>
            <a href="" className='transform hover:scale-110 transition duration-200 text-2xl m-3 mt-5 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-slate-100 hover:bg-[#89A8B2]'>Download CV <i className="fa-solid fa-arrow-down-long"></i></a>
            <a href="" className='transform hover:scale-110 transition duration-200 text-2xl m-1 mt-5 py-1 px-1 my-3 rounded-[50px] '><i className="fa-brands fa-linkedin"></i></a>
            <a href="" className='transform hover:scale-110 transition duration-200 text-2xl m-1 mt-5 py-1 px-1 my-3 rounded-[50px] '><i className="fa-brands fa-github"></i></a>
            </div>
            

      </div>
    </div>
  )
}

export default Home;
