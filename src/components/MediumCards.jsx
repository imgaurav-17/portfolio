import React from 'react'

function MediumCards({ icon, title, subtitle, urlTxt, url }) {
  return (
    <div className='flex flex-col items-center justify-center gap-1 shadow-lg rounded-lg w-[18rem] h-[10rem]'>
      <div><i className={`bx ${icon} text-3xl`}></i></div>
      <div className='font-bold'>{title}</div>
      <div className='text-slate-500'>{subtitle}</div>
      <a className="text-slate-500 flex items-center justify-center cursor-pointer hover:text-black" href={url} target='_blank'>
        {urlTxt}
        <i className="bx bx-right-arrow-alt ml-1 mt-1"></i>
      </a>


    </div>
  )
}

export default MediumCards