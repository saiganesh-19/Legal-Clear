import React from "react"
import { Link } from "react-router-dom"

function Hero() {
  return (
         <div className="text-center text-xs bg-gradient-to-br from-[#0D1B2A] via-purple-1000/20 to-[#0D1B2A] text-white p-8  mx-auto px-4 sm:px-25 lg:px-50  text-center align-center px-5 mt-2">
      <div className="mx-auto px-4 py-2 rounded-full bg-[#F4A261]/10 border border-[#F4A261]/30 w-64 text-center">
      <span className="text-base">
        Making Legal Document Clear
        </span>
        </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Demystifying the
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-purple-400">
          Legal Document
        </span>
      </h1>

      <p className="!text-white text-2xl">
        Simplifying complex legal language for everyone. Transform confusing
        contracts and agreements into clear, understandable text.
      </p>
        <Link to="/scan_document"  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4A261] hover:bg-[#F4A261]/90 text-[#0D1B2A] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#F4A261]/50 mt-10" href="">Trey Document SCanner</Link>
    </div>
  )
}

export default Hero
