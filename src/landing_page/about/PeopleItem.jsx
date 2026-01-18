import React from 'react';
function PeopleItem({Logo,Name,Description}) {
    return ( 
        <div className="  h-50 w-80 bg-gradient-to-r from-[#F4A261]/5 to-blue-700/4  backdrop-blur-sm rounded-2xl p-8 mb-5  border border-white/10 basis-auto transition-transform hover:scale-105 hover:border-[#F4A261]/30 ">
            <div className="flex flex-col flex items-center justify-center">
               <span className="bg-gradient-to-r from-[#F4A261]/5 to-pink-900/50  backdrop-blur-sm  inline-flex items-center justify-center w-17 h-17 rounded-full ">{Logo}</span>
                <h3 className='mb-3 font-bold text-lg'>{Name}</h3>
                     <p>{Description}</p>
                </div>
        </div>
     );
}

export default PeopleItem;