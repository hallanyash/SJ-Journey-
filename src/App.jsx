import { useState } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import SignatureRoutes from "./components/SignatureRoutes";
import PhotoGallery from "./components/PhotoGallery";
import CulturalEscape from "./components/CulturalEscape";
import CabinsSection from "./components/CabinsSection";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

export default function App() {
  const [selectedTour, setSelectedTour] = useState("");

  return (
    <>
      <TopBar />
      <Navbar setSelectedTour={setSelectedTour} />
      <main>
        <Hero />
        <Welcome />
        <SignatureRoutes />
        <PhotoGallery />
        <CulturalEscape />
        <CabinsSection />
        <BookingForm selectedTour={selectedTour} />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
