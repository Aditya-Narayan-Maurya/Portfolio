import React from 'react';


const SkillLogo = ({name,image}) => {
  return (
    <div className='md:w-32 md:h-32 m-8 '>
      <img src={image} alt="spring" className='w-full h-24 rounded-lg ' />
      <h3 className='pt-3 text-center text-xl font-medium text-slate-950'>{name}</h3>
    </div>
  )
}

export default SkillLogo;
