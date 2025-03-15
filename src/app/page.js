import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import CoreValuesSection from "@/components/CoreValuesSection";
import ServiceCard from "@/components/ServiceCard";
export default function Home() {
  return (
    <>
    <Navbar/>
     <HomeHero/>
    <CoreValuesSection/>
    <ServiceCard/>
    </>
  );
}
