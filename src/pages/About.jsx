import React from 'react';

const About = () => {
  return (
    <div className='lg:w-full sm:w-full lg:px-[17%] bg-[#F1F0E8] pb-24'>
      <h1 className='text-center text-4xl font-bold py-3'>About Me</h1>
      <br />
      <br />
      <br />
      <h2 className='text-2xl font-medium pl-1'>Hi, I'm Aditya Maurya!</h2>
      <p className='text-xl pl-2 leading-9 tracking-wide'>I’m a Computer Science student specializing in
         <span className='italic text-xl font-medium'>Java Full Stack Web Development</span> with experience in 
       <span className='italic text-xl font-medium'>HTML, CSS, JavaScript, React JS, Java and spring boot.</span>  
      Currently pursuing my <span>B.Tech</span>, I’m also honing my skills at Jspiders to deepen my expertise.
      <br />
      Passionate about solving problems, I enjoy creating responsive and functional web applications. My core stack is React,
       and I’m always eager to learn and explore new technologies.
       <br />
         Beyond coding, I love <span className='italic text-xl font-medium'>listening songs, playing video games, watching movies,</span>
          and learning new skills. My aim is to secure a 
         <span className='italic text-xl font-medium'>full-time software developer role</span> and contribute effectively to impactful projects.
         </p>
    </div>
  )
}

export default About;
