import React from 'react'
import SmallCard from './SmallCard';

export default function About() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='sm:px-24 px-4 pt-40 sm:pt-4 pb-2' id='about'>
      {/* heading */}
      <span className='text-center'>
        <h1 className='text-4xl font-semibold'>About Me</h1>
        <p className='text-gray-500 font-semibold'>My introduction</p>
      </span>
      {/* main content */}
      <div className='flex items-center sm:justify-between justify-center gap-16 sm:pt-12 pt-12 sm:flex-nowrap flex-wrap mb-24'>
        {/* about image */}
        <div>
          <img src="./assets/profile.jpg" alt="profile" className='rounded-2xl sm:w-[25rem]' />
        </div>
        {/* about text and cards */}

        <div className='flex-col items-center sm:shadow-lg sm:p-4 sm:rounded-lg'>
          <div className=' flex gap-4 justify-center px-6'>
            <SmallCard icon='briefcase-alt-2' title='Location' subtitle='Gir Somnath' />
            <SmallCard icon='briefcase-alt-2' title='Education' subtitle='BCA' />
            <SmallCard icon='briefcase-alt-2' title='Experience' subtitle='Fresher' />
          </div>
          <div className='pt-6 px-6 flex justify-center items-center flex-col' >
            <p className='text-sm sm:text-base shadow rounded-md p-5 w-80 sm:w-[26rem]'>👋 Hi, I'm Gaurav Gohel, a dedicated web development enthusiast from Veraval, Gir Somnath. Currently, I am in my final year of pursuing a Bachelor of Computer Applications (BCA). Throughout my academic journey, I have developed a strong proficiency in HTML, CSS, JavaScript, Tailwind CSS, ReactJS, Git, GitHub, and Node.js. </p>
            <div className='flex justify-center pt-5 gap-x-5'><button onClick={() => openInNewTab("https://drive.google.com/file/d/141Xz8fTSpEKLqfTmbvLlD2vXxRjm8m7l/view?usp=drive_link")} className='bg-black w-32 sm:w-40 h-14 text-white rounded-xl hover:bg-gray-500'>Download CV</button><button onClick={() => openInNewTab("https://github.com/imgaurav-17")} className='bg-black w-32 sm:w-40 h-14 text-white rounded-xl hover:bg-gray-500'>Github</button></div>
          </div>

        </div>

      </div>
    </div>
  )
}
