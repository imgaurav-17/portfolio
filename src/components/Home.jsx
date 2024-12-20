import React from 'react'

export default function Home() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
  const yourName = import.meta.env.VITE_YOUR_NAME;
  const yourRole = import.meta.env.VITE_YOUR_ROLE;
  const yourBio = import.meta.env.VITE_YOUR_BIO;
  const yourImage = import.meta.env.VITE_YOUR_IMAGE || './assets/profile.jpg';

  return (
    <div className='pt-12 pb-12 sm:px-24 px-4' id='home'>
      <div className='flex  gap-12 items-center justify-center h-screen'>
        <div className='hidden md:flex flex-col items-center space-y-5 '>
          <a href={githubUrl} target='_blank'><box-icon type='logo' size='md' name='github'></box-icon></a>
          <a href={linkedinUrl} target='_blank'><box-icon type='logo' size='md' name='linkedin'></box-icon></a>
          <a href={instagramUrl} target='_blank'><box-icon type='logo' size='md' name='instagram'></box-icon></a>
        </div>
        {/* paragraph and main image */}
        <div className='flex flex-wrap-reverse sm:justify-between justify-center items-center sm:flex-nowrap gap-16'>
          <div className='flex flex-col gap-y-2 items-center w-2/3 sm:items-start'>
            <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>{yourName}</h1>
            <h3 className='text-xl sm:text-2xl md:text-3xl'>{yourRole}</h3>
            <p className='text-md sm:text-base md:text-lg shadow-md rounded-md p-3 mt-4 w-80 sm:w-auto sm:pr-0'>{yourBio}</p>
            <button onClick={() => openInNewTab({linkedinUrl})} className='hover:animate-pulse bg-black w-28 h-10 text-white rounded-xl mt-2 hover:bg-gray-500'>Say Hello</button>
          </div>
          <div><img src={yourImage} alt="profile" className='rounded-2xl sm:w-96 w-64 blob ' /></div>
        </div>


      </div>
    </div>
  )
}
