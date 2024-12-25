import React from 'react';
import Card from '../components/Card';

const Projects = () => {
  return (
    <>
    <h1 className='text-center text-4xl font-bold py-3 underline'>Projects</h1>
    <div className='flex flex-wrap justify-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  )
}

export default Projects;
