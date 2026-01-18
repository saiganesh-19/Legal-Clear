import React from 'react';
function Hero() {
    return ( 
        <div className="flex flex-col items-center  text-white mt-25 mx-50 px-40">
         <div className="text-6xl w-25 h-25 rounded-full border-2 border-[#F4A261] flex items-center justify-center text-[#F4A261] py-5"><i class="fa-regular fa-file"></i></div>
             <h1 className='text-5xl font-bold py-5'>Scan Your Document</h1>
             <p className='text-xl text-center'>Upload an image or PDF of your legal document and we'll extract and simplify the content for you</p>
        </div>
     );
}

export default Hero;