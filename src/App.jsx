import React, { useState, useRef } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"; 
import { Mail, Phone, Menu, X } from "lucide-react";
import { FaLaptop } from "react-icons/fa"; 
import { Laptop2, Bot, Brush, Database, Code2, Settings } from "lucide-react";// Import icons
import image1 from "./assets/4.png";
import image2 from "./assets/5.png";
import image3 from "./assets/6.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

import "./App.css";


const services = [
  { title: "Web & App Development", desc: "We build high-performance, scalable websites and mobile applications using the latest technologies." , icon: <Laptop2 className="icon8" />,},
  { title: "AI/ML-Powered Solutions", desc: "Leverage AI and machine learning to automate processes and enhance decision-making.",icon: <Bot className="icon8"/>, },
  { title: "UI/UX Design", desc: "We create visually appealing, user-friendly designs that enhance customer engagement.",icon: <Brush className="icon8" />, },
  { title: "Data Visualization", desc: "Transform raw data into interactive dashboards and reports for meaningful insights.",icon: <Database className="icon8"/>, },
  { title: "End-to-End Development", desc: "From concept to deployment, we provide full-cycle development services." ,icon: <Code2 className="icon8"/>,},
  { title: "Custom Tech Solutions", desc: "We deliver tailored solutions that align with your business needs.",icon: <Settings className="icon8" />, }
];
const cardsData = [
  {
    id: 1,
    category: "App Development",
    title: "Study Sync",
    description: "StudySync is a Flutter-based mobile app built for students and faculty of the College.",
    image: image1,
  },
  {
    id: 2,
    category: "App Development",
    title: "HR Management Portal",
    description: "It allows HR managers to post jobs, track applicants through different stages of the hiring pipeline, and manage resumes efficiently.",
    image: image2,
  },
  {
    id: 3,
    category: "App Development",
    title: "Blood donation app",
    description: "This Flutter-based app connects donors, hospitals, and NGOs to streamline the blood donation process.",
    image: image3,
  },
   {
    id: 4,
    category: "App Development",
    title: "TPMS Integrated App ",
    description: "This project focuses on enhancing safety, efficiency, and cost reduction in the mining industry, particularly for dump trucks.",
    image: image3,
  },
];
const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={card.image} className="card__image" alt="Project" />
      <div className={`card__overlay ${expanded ? "active" : ""}`}>
        <span className="card__category">{card.category}</span>
        <p className="card__title">{card.title}</p>
        <p className="card__description">{card.description}</p>
        <a href="#" className="card__button">
          🔗 Explore More
        </a>
      </div>
    </div>
  );
  
};



const App = () => {
  const [content, setContent] = useState("Our Story");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const whoWeAreRef = useRef(null);
  const whatWeOfferRef = useRef(null);
  const ourWorkRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToWhoWeAre = (e) => {
    e.preventDefault();
    whoWeAreRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileNavOpen(false);
  };

  const scrollToWhatWeOffer = (e) => {
    e.preventDefault();
    whatWeOfferRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileNavOpen(false);
  };

  const scrollToOurWork = (e) => {
    e.preventDefault();
    ourWorkRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileNavOpen(false);
  };
  const scrollToSection = (ref) => (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileNavOpen(false);
  };
  const scrollToGetInTouch = (e) => {
    e.preventDefault();
    document.querySelector(".contact-section")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileNavOpen(false);
  };
  
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <div className="container">
      
      <nav className="navbar">
        <img src="image1.jpg" alt="SIDA" className="logo" />
        <ul className="nav-links">
          <li><a href="#" onClick={scrollToWhoWeAre}>About Us</a></li>
          <li><a href="#" onClick={scrollToWhatWeOffer}>Services</a></li>
          <li><a href="#" onClick={scrollToOurWork}>Projects</a></li>
          <li><a href="#" onClick={scrollToSection(contactRef)}>Contact</a></li>
        </ul>
        <button className="nav-btn" onClick={toggleMobileNav}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
        <button className="close-nav" onClick={closeMobileNav}>
          <X size={24} />
        </button>
        <ul className="mobile-nav-links">
          <li><a href="#" onClick={scrollToWhoWeAre}>About Us</a></li>
          <li><a href="#" onClick={scrollToWhatWeOffer}>Services</a></li>
          <li><a href="#" onClick={scrollToOurWork}>Projects</a></li>
          <li><a href="#" onClick={scrollToSection(contactRef)}>Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay">
        </div>
        <h1 className="hero-title">
          Unleash The Innovation Of <br />
          <span>App Development</span>
        </h1>
        <p className="hero-subtitle">
          We build innovative, user-focused apps that turn ideas into powerful digital solutions,
          helping businesses grow and engage their audience effectively.
        </p>
        <button className="explore-btn" onClick={scrollToWhoWeAre}>Explore Us</button>
      </header>

      <section className="who-we-are" ref={whoWeAreRef}>
        <h3 className="section-subtitle">WHO WE ARE</h3>
        <h2 className="section-title">
          Innovation, Expertise, And Leadership <br /> All In One Place.
        </h2>

        <div className="who-we-are-content">
          <div className="left-section">
            {["Our Story", "Why SIDA?", "Meet the Leaders"].map((item) => (
              <button key={item} onClick={() => setContent(item)} className={content === item ? "active-btn" : "default-btn"}>{item}</button>
            ))}
          </div>

        
          {content !== "Meet the Leaders" && (
            <div className="center-image">
              <img src="image3.png" alt="Tech Innovation" />
            </div>
            
          )}

          <div className="right-section">
            {content === "Our Story" && (
              <div>
                <p>SIDA was founded with a vision to bridge the gap between cutting-edge technology and real-world applications.</p>
                <p>We started as a small team of passionate developers and designers, driven by the mission to create seamless digital experiences.</p>
                <p>Today, we have grown into a full-scale technology solutions provider, helping businesses scale with AI, web development, and data-driven insights.</p>
                <p>From startups to enterprises, we empower brands with innovative solutions, ensuring a future-proof digital transformation.</p>
              </div>
            )}

            {content === "Why SIDA?" && (
              <div>
                <p>At SIDA, we don't just build solutions - we craft experiences.</p>
                <p>Our expertise spans across AI/ML-powered automation, intuitive UI/UX design, and scalable web and mobile applications.</p>
                <p><b>What sets us apart?</b></p>
                <ul>
                  <li>Tailor-Made Solutions: We understand that every business is unique.</li>
                  <li>Cutting-Edge Technology: AI-driven analytics and immersive interfaces.</li>
                  <li>End-to-End Development: From MVPs to enterprise platforms.</li>
                  <li>Customer-Centric Approach: Your vision is our priority.</li>
                </ul>
              </div>
            )}

            {content === "Meet the Leaders" && (
              <div className="leaders-container">
              <div className="leader-card">
                <img src="sara2.jpeg" alt="Sarathy" className="leader-photo" />
                <div className="leader-info">
                  <h4>Sarathy</h4>
                  <p>CEO</p>
                </div>
              </div>
          
              <div className="leader-card">
                <img src="dhinesh.jpeg" alt="Dhinesh Gandhi" className="leader-photo" />
                <div className="leader-info">
                  <h4>Dhinesh Gandhi</h4>
                  <p>COO</p>
                </div>
              </div>
          
              <div className="leader-card">
                <img src="sushmidha.jpg" alt="Sushmidha Mouraly" className="leader-photo" />
                <div className="leader-info">
                  <h4>Sushmidha Mouraly</h4>
                  <p>CFO</p>
                  <p></p>
                </div>
              </div>
          
              <div className="leader-card">
                <img src="arjun.jpg" alt="Arjun Damodaran" className="leader-photo" />
                <div className="leader-info">
                  <h4>Arjun Damodaran</h4>
                  <p>CTO</p>
                  <p></p>
                </div>
              </div>
          
              <div className="leader-card">
                <img src="mordheesh.jpeg" alt="Mordheesh" className="leader-photo" />
                <div className="leader-info">
                  <h4>Mordheesh Balagourou</h4>
                  <p>CMO</p>
                  <p></p>
                </div>
              </div>
          
              <div className="leader-card">
                <img src="vaithy.jpeg" alt="Vaitheeshvar Satyaprakash" className="leader-photo" />
                <div className="leader-info">
                  <h4>Vaitheeshvar Satyaprakash</h4>
                  <p>CDO</p>
                  <p></p>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>


      
  
    <section className="gold">
      <h4></h4>
      <motion.img
        src="Skills.png"
        alt="Tech Innovation"
        className="goods"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeOut" }}



        whileHover={{ rotate: 0, scale: 1.0 }}
        whileTap={{ scale: 0.9 }}
      />
     

    </section>
  






   
      <section className="what-we-offer" ref={whatWeOfferRef}>
        <h3 className="section-subtitle">WHAT WE OFFER</h3>
        <h2 className="section-title2">Transforming Ideas Into Reality With</h2>
        <h2 className="section-title3">Cutting-Edge Technology</h2>

        <div className="services-grid">
  {services.map((service, index) => (
    <div className="service-card" key={index}>
      <div className="service-icon">
        
        <div className="circle-icon">{service.icon}</div>
      </div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </div>
  ))}
</div>

      </section>
      {
   (
    <section className="our-work" ref={ourWorkRef}>
      <h3 className="section-subtitle4">OUR WORK IN ACTION</h3>
      <h2 className="section-title7">Discover Our Latest Projects</h2>

      <div className="cards">
        {cardsData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}

     





     
      








      <section className="contact-section" ref={contactRef}>
      <div className="contact-header">
        <h3>GET IN TOUCH WITH US</h3>
        <h1>
          We’re Here To Bring Your Ideas To Life.
          <br /> Let’s Start The Conversation!
        </h1>
      </div>

      <div className="contact-container">
        
        <div className="contact-info">
         
          <div className="contact-item">
            <div className="icon">
            <Mail className="neon-icon" size={30} />
            </div>
            <div className="text">
              <h4>EMAIL</h4>
              <p>sidatech2025@gmail.com</p>
            </div>
          </div>

          
          <div className="contact-item">
            <div className="icon">
            <Phone className="neon-icon" size={30} />
            </div>
            <div className="text">
              <h4>PHONE</h4>
              <p>+91 9687459756</p>
            </div>
          </div>

          
          <div className="contact-item">
            <div className="icon">
            <Phone className="neon-icon" size={30} />
            </div>
            <div className="text">
              <h4>PHONE</h4>
              <p>+91 6784589345</p>
            </div>
          </div>
        </div>



        <div className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </div>
      </div>


      
      
    </section>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="image1.jpg" alt="" />
          <div className="social-icons3">
           <a href="#"><FaFacebookF /></a>
           <a 
        href="https://www.instagram.com/sida.technologies?igsh=MWd1Y21tbHV2enFyYQ==" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
             <a href="#"><FaXTwitter /></a>
               </div>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
          <li><a href="#" onClick={scrollToWhoWeAre}>About</a></li>
         <li><a href="#" onClick={scrollToWhatWeOffer}>Services</a></li>
         <li><a href="#" onClick={scrollToOurWork}>Projects</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
          <li><a href="#" onClick={scrollToGetInTouch}>Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/sida-technologies-716626358/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
    
    </div>
    
  );
};
export default App;

