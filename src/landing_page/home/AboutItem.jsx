import React from 'react';
function AboutItem({ icon, Pname, Pdesc }) {
  return (
    <div className="w-full md:w-1/3  px-4 box-border size-65 border-4  text-left  bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ">
      <div className='text-4xl pb-2'>{icon}</div>
      <h1 className='text-2xl font-bold pb-4'>{Pname}</h1>
      <p className='text-base'>{Pdesc}</p>
    </div>
  )
}
export default  AboutItem;