import React from 'react';
function Hero() {
    return ( 
         <div className="text-center mb-16 ">  
            <span className='20 bg-gradient-to-br from-[#F4A261] to-purple-500 rounded-full mx-auto my-6 flex items-center justify-center rouded-2xl w-18 h-18'><i class="fa-regular fa-heart fa-3x"></i></span>
            <h1 className='text-5xl font-bold mb-6'>About LegalClear</h1>
            <h3 className='mx-65 text-xl leading-7'>Demystifying the Legal Document helps people understand complex legal terms by breaking them into simple, clear language. We bridge the gap between law and people.</h3>
        </div>
     );
}

export default Hero;