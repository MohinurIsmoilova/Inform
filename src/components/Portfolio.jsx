import React from 'react';
import photo from "../assets/photo.jpg";
import { FaGithub, FaYoutube } from 'react-icons/fa';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    },
    {
      id: 2,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    }, {
      id: 3,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    }, {
      id: 4,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    },
    {
      id: 5,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    }, {
      id: 6,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    }, {
      id: 7,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    },
    {
      id: 8,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    }, {
      id: 9,
      image: photo,
      github: "https://github.com/MohinurIsmoilova?tab=overview&from=2023-12-01&to=2023-12-31",
      tutorial: ""
    },
  ]
  return (
    <div name="portfolio" className='w-full md:min-h-screen bg-black'>
      <div className='max-w-screen-lg p-4 w-full h-full mx-auto flex flex-col justify-center items-center text-white md:items-start'>
        <div className='pb-8'>
          <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </h2>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>

          {projects.map(({id, image, github, tutorial})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={image} alt="img" />

            <div className='flex items-center justify-evenly p-2'>
            <a href={github} className='hover:scale-110 duration-200'>
                <FaGithub size={30}></FaGithub>
            </a>

            <a href={tutorial} className='hover:scale-110 duration-200'>
                <FaYoutube size={30}></FaYoutube>
            </a>
            </div>
          </div>
          ))}

          
        </div>
      </div>
    </div>
  )
}

export default Portfolio
