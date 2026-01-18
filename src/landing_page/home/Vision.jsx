import React from "react";
import { Link } from "react-router-dom";
function Vision() {
  return (
    <div className=" px-0 m-10">
      <div className="text-center  bg-white/10 backdrop-blur-md border border-white/10 rounded-xl ">
        <h1 className="text-5xl font-bold pb-6 mt-13">
          How the Platform Helps You
        </h1>
        <p className="text-xl">
          Our intelligent document scanner analyzes legal text and provides you
          with:
        </p>

        <div className="max-w-4xl mx-auto rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F4A261]"></span>
              <p>Clear explanations of complex terms</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F4A261]"></span>
              <p>Highlighted key clauses and obligations</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F4A261]"></span>
              <p>Warning flags for potential issues</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F4A261]"></span>
              <p>Plain language summaries</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F4A261]"></span>
              <p>Section-by-section breakdowns</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#F4A261]"></span>
              <p>Actionable insights and recommendations</p>
            </div>
          </div>
        </div>
           <Link to="/scan_document"  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4A261]/20 hover:bg-[#F4A261]/50 text-white font-semibold rounded-lg  my-10" href="">Get Starteed Now</Link>
      </div>
    </div>
  );
}

export default Vision;
