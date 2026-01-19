import React from 'react';
import AboutItems from './AboutItems'
function About() {
    return ( 
        <div>
            <h1 className='text-4xl font-bold mb-12 text-center'>What Drives Us</h1>
              <div className="flex flex-wrap justify-center align-center gap-x-20">
            <AboutItems Logo="SAI" Name="Our mission" 
            Description="To bridge the gap between complex legal language and everyday understanding, empowering individuals to make informed decisions about their legal commitments." />
             <AboutItems logo="" Name="Why We Care"
             Description="Legal documents affect everyone, yet they remain unnecessarily complicated. We believe access to clear information is a fundamental right, not a privilege."/> 
              <AboutItems Logo="" Name="Who We Serve"
              Description="From individuals reviewing rental agreements to small business owners examining contracts, we help anyone who needs to understand legal documents."/>
             <AboutItems Logo="" Name="Our Commitment"
             Description="We are dedicated to accuracy, clarity, and accessibility. Every document we process is handled with the utmost care to provide you with reliable insights."/> 
              </div>
        </div>
     );
}

export default About;

