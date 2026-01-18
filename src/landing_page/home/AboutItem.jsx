import React from 'react';
function AboutItem({ icon, Pname, Pdesc }) {
  return (
    <div className="w-full h-80 md:w-1/3   box-border size-65 border p-8 px-  text-left  bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-transform hover:scale-105 hover:border-[#F4A261]">
      <div className='text-4xl pb-2 backdrop-blur-sm  inline-flex items-center justify-center w-15 h-15 rounded-lg bg-[#F4A261]/10'>{icon}</div>
      <h1 className='text-2xl font-bold pb-4'>{Pname}</h1>
      <p className='text-base'>{Pdesc}</p>
    </div>
  )
}
export default  AboutItem;