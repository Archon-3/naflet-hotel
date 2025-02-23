import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import slide1 from '../assets/caption.jpg';
import slide2 from '../assets/room-4.jpg';
import slide3 from '../assets/room-2-3.jpg';
import slide4 from '../assets/pinterest-blog-img-4-1.jpg';

const OnboardingPage = ({ onComplete }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Cards content for the onboarding page with logs
  const cards = [
    { 
      id: 1, 
      title: "Welcome to Naflet Hotel",
      text: "Welcome to a world of luxury and comfort! Our hotel offers an exceptional experience, blending elegance, tranquility, and first-class hospitality to ensure your stay is nothing short of perfection", 
      image: slide1,
      log: "User viewed Welcome card"
    },
    { 
      id: 2, 
      title: "Comfortable Rooms",
      text: "Relax in our elegantly designed bedrooms, where comfort meets sophistication. Each room is thoughtfully furnished to provide a serene and cozy retreat, ensuring a restful and rejuvenating stay.", 
      image: slide2,
      log: "User viewed Rooms card"
    },
    { 
      id: 3, 
      title: "VIP Suites",
      text: "Indulge in the ultimate luxury with our exclusive VIP suites. Featuring breathtaking views, lavish interiors, and personalized services, these rooms redefine elegance and offer an unforgettable stay tailored just for you.", 
      image: slide3,
      log: "User viewed VIP Suites card"
    },
    { 
      id: 4, 
      title: "Fine Dining",
      text: "Savor exquisite flavors at our fine dining restaurant, where culinary artistry meets world-class service. From gourmet dishes to local delicacies, every bite is a journey of taste and refinement.", 
      image: slide4,
      log: "User viewed Dining card"
    }
  ];

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem("onboardingCompleted");
    if (hasCompletedOnboarding) {
      console.log("User has previously completed onboarding");
      navigate("/login");
    } else {
      console.log("Starting onboarding experience");
    }
  }, [navigate]);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const newIndex = activeIndex + direction;
      if (newIndex >= 0 && newIndex < cards.length) {
        setActiveIndex(newIndex);
        console.log(cards[newIndex].log);
        const container = containerRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollTo({
          left: newIndex * scrollAmount,
          behavior: "smooth"
        });
      }
    }
  };

  const handleComplete = () => {
    console.log("User completed onboarding");
    localStorage.setItem("onboardingCompleted", "true");
    onComplete();
  };

  // Log initial card view
  useEffect(() => {
    console.log(cards[activeIndex].log);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      backgroundColor: "#1a202c"
    }}>
      <h1 style={{
        fontSize: "28px",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: "32px"
      }}>
        Welcome to Naflet Hotel Adama!
      </h1>

      <div style={{ position: "relative", width: "100%", maxWidth: "1000px" }}>
        {activeIndex > 0 && (
          <button
            onClick={() => handleScroll(-1)}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              padding: "12px",
              borderRadius: "50%",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
              zIndex: 10
            }}
          >
            <ChevronLeft size={28} color="black" />
          </button>
        )}

        <div 
          ref={containerRef}
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            width: "100%",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                flex: "0 0 100%",
                scrollSnapAlign: "center"
              }}
            >
              <div style={{
                maxWidth: "800px",
                margin: "auto",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
                marginBottom: "20px"
              }}>
                <div style={{ position: "relative", height: "300px" }}>
                  <img 
                    src={card.image}
                    alt={`Slide ${card.id}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)"
                  }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h2 style={{ 
                    fontSize: "24px", 
                    fontWeight: "bold", 
                    color: "#333",
                    marginBottom: "12px"
                  }}>
                    {card.title}
                  </h2>
                  <p style={{ fontSize: "18px", color: "#666" }}>{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeIndex < cards.length - 1 && (
          <button
            onClick={() => handleScroll(1)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              padding: "12px",
              borderRadius: "50%",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
              zIndex: 10
            }}
          >
            <ChevronRight size={28} color="black" />
          </button>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              console.log(cards[index].log);
              const container = containerRef.current;
              const scrollAmount = container.offsetWidth;
              container.scrollTo({
                left: index * scrollAmount,
                behavior: "smooth"
              });
            }}
            style={{
              width: activeIndex === index ? "18px" : "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
              margin: "0 5px",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>

      <button 
        onClick={handleComplete}
        style={{
          marginTop: "24px",
          backgroundColor: "white",
          color: "#4F46E5",
          padding: "14px 24px",
          borderRadius: "28px",
          fontSize: "18px",
          fontWeight: "bold",
          display: "flex",
          
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          cursor: "pointer"
        }}
      >
        Sign Up Now <ArrowRight size={22} style={{ marginLeft: "8px" }} />
      </button>
    </div>
  );
};

export default OnboardingPage;