import React from 'react';
import Hero from './Hero';
import Purpose from './Purpose';
import About from './About';
import People from './People';
import Vision from './Vision';
function AboutPage() {
    return ( 
        <div className='px-9 mx-9'>
        <Hero/>
        <Purpose/>
        <About/>
        <People/>
        <Vision/>
        </div>
     );
}

export default AboutPage;