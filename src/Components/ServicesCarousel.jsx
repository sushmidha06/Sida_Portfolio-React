import React, { useRef, useEffect } from "react";
import {
  Laptop2,
  Bot,
  Brush,
  Database,
  Code2,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Web & App Development",
    desc: "We build high-performance, scalable websites and mobile applications using the latest technologies.",
    icon: <Laptop2 className="icon8" />,
  },
  {
    title: "AI/ML-Powered Solutions",
    desc: "Leverage AI and machine learning to automate processes and enhance decision-making.",
    icon: <Bot className="icon8" />,
  },
  {
    title: "UI/UX Design",
    desc: "We create visually appealing, user-friendly designs that enhance customer engagement.",
    icon: <Brush className="icon8" />,
  },
  {
    title: "Data Visualization",
    desc: "Transform raw data into interactive dashboards and reports for meaningful insights.",
    icon: <Database className="icon8" />,
  },
  {
    title: "End-to-End Development",
    desc: "From concept to deployment, we provide full-cycle development services.",
    icon: <Code2 className="icon8" />,
  },
  {
    title: "Custom Tech Solutions",
    desc: "We deliver tailored solutions that align with your business needs.",
    icon: <Settings className="icon8" />,
  },
  {
    title: "Blockchain Security",
    desc: "Build trust with secure blockchain-based authentication solutions.",
    icon: <Database className="icon8" />,
  },
  {
    title: "Cloud Migration",
    desc: "Seamlessly move your services to the cloud with zero downtime.",
    icon: <Laptop2 className="icon8" />,
  },
  {
    title: "IoT Integration",
    desc: "Connect and manage your smart devices effortlessly with our IoT solutions.",
    icon: <Bot className="icon8" />,
  },
  {
    title: "AR/VR Experiences",
    desc: "Deliver immersive customer experiences using AR and VR technology.",
    icon: <Brush className="icon8" />,
  },
];

const ServicesCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="services-carousel-section">
      <h2 className="carousel-title">Explore Our Services</h2>
      <div className="carousel-wrapper">
        <button onClick={() => scroll("left")} className="scroll-btn">←</button>
        <div className="carousel-container" ref={scrollRef}>
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="scroll-btn">→</button>
      </div>
    </section>
  );
};

export default ServicesCarousel;
