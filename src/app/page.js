'use client'
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import CoreValuesSection from "@/components/CoreValuesSection";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar/>
      <HomeHero/>
      <CoreValuesSection/>
      <ServiceCard/>
      <Footer/>
    </motion.div>
  );
}
