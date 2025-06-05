import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection.jsx';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background 3D animation */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black animate-pulse">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 overflow-hidden">
            <div className="w-[200%] h-[200%] animate-spin-slow bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1%,transparent_1%)] bg-[length:20px_20px]" />
          </div>
        </div>
      </div>

      <Navbar />

      <main className="flex-grow flex justify-center items-center text-white px-4 py-60">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-300">Crafting beautiful and functional web experiences. <br /> We are not Create Websites Only, We create Bonds </p>
          
        </div>
      </main>
    
      <AboutSection/>
      <Footer />
    </div>
  )
}

export default Home;
