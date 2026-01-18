import React from 'react';
import PeopleItem from './PeopleItem';
function People() {
    return ( 
        <div  className="text-center mt-12">
            <h1 className='text-4xl font-bold mb-3'>Our Team</h1>
            <h2 className='mb-5 px-40 mx-40 text-xl'>A dedicated group of professionals working together to make legal documents accessible to everyone</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                <PeopleItem Logo={<i class="fa-solid fa-user-group fa-2x"></i>} Name="Legal Experts"
                Description="Experienced attorneys who ensure accuracy and completeness"/>
                <PeopleItem Logo={<i class="fa-solid fa-user-group fa-2x"></i>} Name="Technology Team"
                Description="Engineers building cutting-edge document analysis tools"/>
                <PeopleItem Logo={<i class="fa-solid fa-user-group fa-2x"></i>} Name="Ux Designers"
                Description="Crafting intuitive experiences that make legal text accessible"/>
            </div>
        </div>
     );

}

export default People;