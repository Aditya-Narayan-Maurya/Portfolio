import React from 'react';
import logo from '../assets/logo2.png';

const Navbar = () => {
  return (
    <div className='h-20 w-full z-50 flex flex-wrap justify-between bg-[#E5E1DA] fixed top-0'>
      <aside className='w-2/6 h-full'>
       <img className='h-16 w-40 pl-10 pt-3 m-1 ' src={logo} alt="Logo"/>
      </aside>  
        <ul className='w-2/4 py-0.5 flex flex-wrap list-none justify-around text-2xl font-semibold'>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                <li className="relative">Home</li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                <li className="relative">About</li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                <li className="relative">Projects</li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                <li className="relative">Skills</li>
             </button>
             <button className='border border-[#B3C8CF] py-1 px-4 my-3 rounded-[50px] hover:text-slate-100 relative overflow-hidden group '>
                <span className='absolute  inset-0 bg-[#89A8B2] text-slate-100 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'></span>
                <li className="relative">Contact</li>
             </button>
             
        </ul>

        {/* <button className="relative overflow-hidden bg-transparent text-white py-2 px-4 border border-white rounded-md group">
  <span className="absolute inset-0 bg-red-500 translate-y-full transition-transform duration-1000 ease-in-out group-hover:translate-y-0"></span>
  <span className="relative">Hover Me</span>
</button> */}

    </div>
  )
}

export default Navbar;
