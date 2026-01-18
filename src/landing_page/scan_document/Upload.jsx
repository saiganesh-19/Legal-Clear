import React from 'react';
function Upload() {
    return ( 
        <div className="flex flex-row my-20 text-center ">
            <div className=" max-w-7xl basis-1/2 flex flex-col items-center justify-center border-4 border-dashed border-white ml-25 mr-18 px-10 py-5">
            <div className="text-5xl "><i class="fa-solid fa-upload"></i></div>
            <h1 className='font-bold text-xl py-4'> Drag & drop your document</h1>
            <p>or click to browse (PFG or Image) </p>
            </div>
             <div className="h-36 basis-1/2 flex flex-col items-center justify-center  ml-20  mr-30 px-20 py-10 mt-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-5xl  "><i class="fa-solid fa-expand"></i></div>
            <h1 className='text-xl pt-4'>Upload a document to see the extracted text here</h1>
            </div>
        </div>
     );
}

export default Upload;