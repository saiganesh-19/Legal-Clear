import React from 'react';
function AboutItem({ icon, Pname, Pdesc }) {
  return (
    <div className="w-full md:w-1/3  px-4 box-border size-65 border-4  text-left ">
      <div className='text-4xl'>{icon}</div>
      <h1 className='text-2xl font-bold pb-4'>{Pname}</h1>
      <p className='text-base'>{Pdesc}</p>
    </div>
  )
}
export default  AboutItem;