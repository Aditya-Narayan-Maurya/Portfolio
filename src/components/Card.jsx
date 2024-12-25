import React from 'react';
import bmi from "../assets/bmi.png";

const Card = () => {
  return (
    <div className='w-[380px] h-[454px] m-4 mx-10 p-2 border border-[#B3C8CF] rounded-lg'>
      <img  src={bmi} alt="Not found" className='w-full h-2/4'/>
      <h1 className='font-semibold text-3xl text-center'>BMI Calculator</h1>
      <p className='font-medium text-lg text-center'>A BMI calculator website created using HTML,CSS and ReactJs that can be used for health insightsbased on their result</p>
      <div className='flex justify-center align-middle'>
      <button className='transform hover:scale-110 transition duration-200 text-2xl m-3 mt-5 bg-[#89A8B2] text-slate-100 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-black hover:bg-[#F1F0E8]'><a href="">Explore</a></button>
      <button className='transform hover:scale-110 transition duration-200 text-2xl m-3 mt-5 border border-[#B3C8CF] py-2 px-4 my-3 rounded-[50px] hover:text-slate-100 hover:bg-[#89A8B2]'><a href="">GitHub</a></button>
      </div>
    </div>
  )
}

export default Card;
