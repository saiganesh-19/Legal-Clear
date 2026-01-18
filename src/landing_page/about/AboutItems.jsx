import React from 'react';
function AboutItems({Logo,Name,Description }) {
    return ( 
        <div className=" h-50 w-140 bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-5  border border-white/10 basis-auto transition-transform hover:scale-105 hover:border-[#F4A261]/30 ">
            <div className="flex items-start gap-4">
                <h1>{Logo}</h1>
                <h3 className='mb-3 font-bold text-lg'>{Name}</h3>
            </div>
             <div className='flex flex-col'>
                     <p>{Description}</p>
                </div>
        </div>
        
     );
}

export default AboutItems;