import React from 'react'

export default function Home() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='sm:pt-12 pb-12 sm:px-24 px-4' id='home'>
      <div className='flex  gap-12 items-center justify-center h-screen'>
        <div className='hidden md:flex flex-col items-center space-y-5 '>
          <a href="https://github.com/imgaurav-17" target='_blank'><box-icon type='logo' size='md' name='github'></box-icon></a>
          <a href="https://www.linkedin.com/in/gaurav-gohel" target='_blank'><box-icon type='logo' size='md' name='linkedin'></box-icon></a>
          <a href="https://www.instagram.com/gauravgohel.me" target='_blank'><box-icon type='logo' size='md' name='instagram'></box-icon></a>
        </div>
        {/* paragraph and main image */}
        <div className='flex flex-wrap-reverse sm:justify-between justify-center items-center sm:flex-nowrap gap-16'>
          <div className='flex flex-col gap-y-2 items-center w-2/3 sm:items-start'>
            <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>Gaurav Gohel</h1>
            <h3 className='text-xl sm:text-2xl md:text-3xl'>Front-end Developer</h3>
            <p className='text-md sm:text-base md:text-lg shadow-md rounded-md p-3 mt-4 w-80 sm:w-auto sm:pr-0'>👋 Hi, I'm Gaurav Gohel, a dedicated web development enthusiast from Veraval, Gir Somnath. Currently, I am in my final year of pursuing a Bachelor of Computer Applications (BCA)., want to learn with experienced peers and grow more.</p>
            <button onClick={() => openInNewTab("https://www.linkedin.com/in/gaurav-gohel")} className='hover:animate-pulse bg-black w-28 h-10 text-white rounded-xl mt-2 hover:bg-gray-500'>Say Hello</button>
          </div>
          <div><img src="./assets/profile.jpg" alt="profile" className='rounded-2xl sm:w-96 w-64 blob ' /></div>
        </div>


      </div>
    </div>
  )
}
