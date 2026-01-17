import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./landing_page/Navbar"
import Footer from "./landing_page/Footer"
import HomePage from "./landing_page/home/HomePage"
import ScanPage from "./landing_page/scan_document/ScanPage"
import AboutPage from "./landing_page/about/AboutPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/scan_document" element={<ScanPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
