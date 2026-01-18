import React from 'react';
import AboutItem from './AboutItem';
function About() {
    return (    <div className="text-center text-xs bg-gradient-to-br from-[#0D1B2A] via-purple-1000/20 to-[#0D1B2A] text-white p-8  mx-auto px-4 sm:px-25 lg:px-50 pt-10 text-center align-center px-5">

        <h1 className='md:text-5xl font-bold text-white mb-6 leading-tight'>
            What Does It Mean?
        </h1>
        <p className='md:text-xl pb-8'>Understanding legal documents shouldn't require a law degree</p>
        <div className="flex flex-col md:flex-row gap-8">
            <AboutItem icon={<i className="fa-solid fa-book-open text-[#F4A261]"></i>} 
            Pname="Plain Language Translation" 
            Pdesc="We break down complex legal jargon into simple, everyday language that anyone can understand. No more confusion, just clarity."/>
            <AboutItem icon={<i class="fa-solid fa-shield text-[#F4A261]"></i>} Pname="Protect Your Rights"
            Pdesc="Understanding what you're signing is your right. We help you identify important clauses and potential red flags in any document."/>
            <AboutItem icon={<i class="fa-solid fa-lightbulb text-[#F4A261]"></i>} 
            Pname="Instant Clarity"
            Pdesc="Upload any legal document and get immediate insights. Our platform works with contracts, agreements, terms of service, and more."/>
        </div>
    </div> );
}

export default About;