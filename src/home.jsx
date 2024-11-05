import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './add-listing/components/ui/button'
import Header from "./add-listing/components/Header"; // Adjust path according to your structure
import Hero from './add-listing/components/Hero';
import Category from './add-listing/components/Category';
import MostSearchedCar from './add-listing/components/MostSearchedCar'; // Adjusted import path
import InfoSection from './add-listing/components/InfoSection';
import Footer from './add-listing/components/Footer';


function Home() {
  return (
    <div>
    {/* Header */}
    <Header />
    {/* Hero Section */}
    <Hero/>
    {/* Category */}
    <Category/>
    {/* MostSearchedCar */}
    <MostSearchedCar/>
    {/* InfoSection */}
    <InfoSection/>
    {/* Footer */}
    <Footer/>
    </div>
    
  );

}

export default Home