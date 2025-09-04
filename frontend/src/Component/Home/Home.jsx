import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./Hero";
import About from "./About";
import Services from "./Service";
import Video from "./Video";
import GetInTouch from "../GetInTouch";
import Article from "./Article";
import CTA from "../Cta";
import GoogleReviews from "../GoogleReview";

const HOME = () => {
  return (
    <div>
      <Helmet>
        <title> Dr. Pushkar Anand Singh | Laser & Laparoscopic Surgeon</title>
        <meta
          name="description"
          content=" Consult Dr. Pushkar Anand Singh, a trusted Laser, laparoscopic and general surgeon in Delhi NCR. Get advanced, safe, and patient-focused treatment for gallbladder, hernia, appendix, and more."
        />
        <meta
          name="keywords"
          content="
          Gallbladder Surgery,
          Hernia Surgery,
          Appendix Surgery,
          Piles Treatment,
          Fissure Treatment,
          Fistula Surgery,
          Pilonidal Sinus,
          Circumcision Surgery,
          Hysterectomy,
          Ovarian Cyst,
          General Surgeon,
          Laparoscopic Surgeon,
          Laser Surgeon,
          Noida Surgeon,
          Greater Noida Surgeon,
          Minimally Invasive Surgery,
          Keyhole Surgery,
          Laser Treatment,
          Best Surgeon,
          Surgery Specialist
        "
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.drpushkaranandsingh.com/"
        />
        <meta
          property="og:title"
          content="Dr. Pushkar Anand Singh | Best Laparoscopic Surgeon in Noida"
        />
        <meta
          property="og:description"
          content="Renowned laparoscopic and laser surgeon in Noida with 16+ years of experience. Specialized in gallbladder stones, hernia, piles, and fissure treatment."
        />
        <meta
          property="og:image"
          content="https://www.drpushkaranandsingh.com/images/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.drpushkaranandsingh.com/"
        />
        <meta
          property="twitter:title"
          content="Dr. Pushkar Anand Singh | Best Laparoscopic Surgeon in Noida"
        />
        <meta
          property="twitter:description"
          content="Renowned laparoscopic and laser surgeon in Noida with 16+ years of experience. Specialized in gallbladder stones, hernia, piles, and fissure treatment."
        />
        <meta
          property="twitter:image"
          content="https://www.drpushkaranandsingh.com/images/twitter-image.jpg"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.drpushkaranandsingh.com/" />
      </Helmet>

      <HeroSection />
      <Services />
      <About />
      <Video />
      <Article />
      <GoogleReviews />
      <GetInTouch />
      <CTA />
    </div>
  );
};

export default HOME;
