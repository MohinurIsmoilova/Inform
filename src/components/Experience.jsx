import React from 'react';
import python from "../assets/photo.jpg"

const Experience = () => {

    const technology = [
        {
            id:1,
            icon:python,
            title:'Python'
        },
        {
            id:2,
            icon:python,
            title:'C#'
        },
        {
            id:3,
            icon:python,
            title:'GitHub'
        },
        {
            id:4,
            icon:python,
            title:'React'
        },
        {
            id:5,
            icon:python,
            title:'JavaScript'
        },
    ]

  return (
    <div name="experience" className='w-full md:min-h-screen bg-black'>
      <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
        <div className='pb-8'>
            <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>Experience</h2>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
           
           {technology.map(({id, icon, title})=>(
           <div key={id} className='shadow-md hover:scale-100 duration-200 py-4 rounded-lg shadow-yellow-500'>
           <img src={icon} alt="img" className='mx-auto' />
           <p className='text-2xl mt-4 text-white'>{title}</p>
           </div>
           ))}
           
        </div>
      </div>
    </div>
  )
}

export default Experience
