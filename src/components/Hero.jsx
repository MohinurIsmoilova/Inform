import React from 'react';
import Mohinur from "../assets/Mohinur.jpg";

const Hero = () => {
    return (
        <div name="home" className='min-h-screen w-full pt-20 md:pt-40 bg-black'>
            <div className='max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center md:flex-row'>
                <div className='flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>FULL STACK DEVELOPER</h2>
                    <p className='text-gray-500 py-4 max-w-md mx-auto md:mx-0'>I am a full-stack developer with a strong foundation in building modern and responsive web applications. With a background in HTML5, CSS3, Bootstrap5, Tailwind CSS, and popular UI frameworks like Material UI and Ant Design, I craft engaging and user-friendly interfaces.

                        Skills & Expertise:

                        - Frontend Development: Proficient in HTML5, CSS3, JavaScript, TypeScript, ReactJS, and Redux.
                        - Backend Development: Experience with NextJS for server-side rendering and static site generation.
                        - Version Control: Skilled in Git, GitHub, and GitLab for effective project management and collaboration.

                        Graduated from Najot Talim with comprehensive training as a full-stack developer. I’m committed to delivering high-quality solutions and maintaining open communication throughout the project lifecycle. Let’s connect and bring your web development projects to life.
                        </p>
                        <div className='w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to black'>
                            <a href="/rezume.pdf" download={true}>Resume</a>
                        </div>
                </div>
                <div className='flex justify-center items-center md:mt-0'>
                    <img src={Mohinur} className='rounded-2xl mx-auto w-2/3 md:w-full' alt="Mohinur" />
                </div>
            </div>
        </div>
    )
}

export default Hero
