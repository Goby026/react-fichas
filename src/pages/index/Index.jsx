import { Hero } from "../../shared/hero/Hero";
import { Cta } from "../../shared/cta/Cta";
import { Features } from "../../shared/features/Features";
import { Footer } from "../../shared/footer/Footer";
import { Navbar } from "../../shared/navbar/Navbar";
import { Testimonial } from "../../shared/testimonials/Testimonial";

export const Index = () => {
  return (
    <div className="body-main">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
};
