import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Star, MapPin, Users, Clock, Coffee, Wifi, Dumbbell, Waves, Utensils,
  Menu, Settings, User, LogOut, Bell, CreditCard, HelpCircle, X, ChevronLeft, ChevronRight,
  Calendar, Phone, Mail, Info, Tv, Home, Bath, Sunrise, Umbrella, Music
} from 'lucide-react';

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [counters, setCounters] = useState({
    rooms: 0,
    guests: 0,
    experience: 0,
    satisfaction: 0
  });
  
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
  
  // Animation for statistics counters
  useEffect(() => {
    if (statsInView) {
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = { ...prev };
          
          if (newCounters.rooms < 50) newCounters.rooms += 1;
          if (newCounters.guests < 1000) newCounters.guests += 20;
          if (newCounters.experience < 5) newCounters.experience += 0.1;
          if (newCounters.satisfaction < 98) newCounters.satisfaction += 2;
          
          if (newCounters.rooms >= 50 && 
              newCounters.guests >= 1000 && 
              newCounters.experience >= 5 && 
              newCounters.satisfaction >= 98) {
            clearInterval(interval);
          }
          
          return newCounters;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [statsInView]);
  
  // Testimonial auto-rotation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTestimonialIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };

  const experiences = [
    {
      title: "Fine Dining",
      description: "Experience culinary excellence with our international breakfast",
      icon: <Utensils size={24} />,
      details: "7AM - 11AM",
      fullDescription: "Indulge in exquisite culinary creations at our restaurant. Start your day with our extensive international breakfast buffet featuring a wide selection of international and local dishes. From freshly baked pastries and bread to made-to-order omelets and traditional Ethiopian dishes, our breakfast offers something for every palate.",
      images: [
        "https://www.google.com/imgres?q=fine%20and%20dine&imgurl=https%3A%2F%2Fd2w1ef2ao9g8r9.cloudfront.net%2Fimages%2F_1600x1167_crop_center-center_82_line%2Ffinedining_1-75nb439xd_190614_130109.png&imgrefurl=https%3A%2F%2Fpos.toasttab.com%2Fresources%2Ffine-dining&docid=DjFvDGFpiF2JCM&tbnid=RD8xYxfyHit9hM&vet=12ahUKEwigiMq_sYeMAxWUVaQEHQnMKAEQM3oECBwQAA..i&w=1600&h=1167&hcb=2&ved=2ahUKEwigiMq_sYeMAxWUVaQEHQnMKAEQM3oECBwQAA",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ]
    },
    {
      title: "Weddings & Events",
      description: "Premier waterfront wedding destination in Adama",
      icon: <Music size={24} />,
      details: "Custom Packages",
      fullDescription: "The Big Day is made even more special when you host it at the most unique wedding venues in Downtown Adama. Naflet Hotel is pleased to offer the premier waterfront wedding destination in Adama. We've experienced hosting family celebrations like birthdays, confirmations, graduations, engagement parties, anniversaries, vow renewals, reunions, and more.",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ]
    },
    {
      title: "Comfortable Environment",
      description: "Reconnect with nature in the heart of Adama city",
      icon: <Umbrella size={24} />,
      details: "24/7 Access",
      fullDescription: "Imagine a place where you can reconnect with your inner self and rejuvenate your mind, body and spirit surrounded by nature. Ideally situated at the center of Adama City, Naflet Hotel's prestigious address continues to define elegance with unmatched service and an ever-evolving modern sensibility. Everything including the cuisine, the service style, the environment and the architecture are designed to support and enhance your wellness experience.",
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ]
    },
    {
      title: "Sunrise & Sunset Views",
      description: "Experience breathtaking natural views from your room",
      icon: <Sunrise size={24} />,
      details: "Daily",
      fullDescription: "Many of our rooms offer stunning views of the sunrise and sunset over Adama. Our Executive and Family rooms incorporate special view areas so you can enjoy the natural beauty of Ethiopia from the comfort of your accommodation. The rooms are carefully positioned to make the most of the natural light and scenery.",
      images: [
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1544877052-526be1ebebe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ]
    },
    {
      title: "Premium Amenities",
      description: "Smart TVs, Jacuzzis, and modern comforts",
      icon: <Bath size={24} />,
      details: "In-Room",
      fullDescription: "Our rooms feature 42-inch smart TVs, comfortable working tables, dressing areas, and spacious wardrobes. Executive and Family rooms include separate sitting areas and luxurious Jacuzzis. All rooms are air-conditioned and designed with your comfort in mind. We offer complimentary toiletries and high-quality linens to ensure a relaxing stay.",
      images: [
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ]
    },
  ];

  const testimonials = [
    {
      name: "Nex Flame",
      role: "Business Traveler",
      comment: "My stay at Naflet Hotel exceeded all expectations. The sunrise view from my Executive Room was breathtaking, and the staff were incredibly attentive.",
      rating: 5,
      avatar: "https://i.imgur.com/8Km9tLL.jpg"
    },
    {
      name: "Michael Chen",
      role: "Vacation Guest",
      comment: "The international breakfast buffet was exceptional with a great mix of Ethiopian and Western dishes. The central location in Adama made exploring the city very convenient.",
      rating: 5,
      avatar: "https://i.imgur.com/bxMWZ5H.jpg"
    },
    {
      name: "Emma Williams",
      role: "Honeymoon Stay",
      comment: "We held our wedding reception at Naflet Hotel and stayed in the Family Room afterward. Everything was perfect from the catering to the accommodation.",
      rating: 4.8,
      avatar: "https://i.imgur.com/NuElMTm.jpg"
    },
    {
      name: "Robert Garcia",
      role: "Family Vacation",
      comment: "The Family Room was spacious enough for all of us, and the kids loved the environment. The Jacuzzi was a big hit with everyone after a day of sightseeing.",
      rating: 4.9,
      avatar: "https://i.imgur.com/7rA36Ji.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Solo Traveler",
      comment: "As a solo traveler, I felt very safe and comfortable at Naflet Hotel. The central location in Adama was perfect, and the staff went above and beyond to help me plan daily excursions.",
      rating: 5,
      avatar: "https://i.imgur.com/IPkYyQv.jpg"
    },
  ];
  
  const menuItems = [
    { icon: <User size={20} />, label: 'Profile', action: () => console.log('Profile clicked') },
    { icon: <Settings size={20} />, label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: <Bell size={20} />, label: 'Notifications', action: () => console.log('Notifications clicked') },
    { icon: <CreditCard size={20} />, label: 'Billing', action: () => console.log('Billing clicked') },
    { icon: <HelpCircle size={20} />, label: 'Help', action: () => console.log('Help clicked') },
    { icon: <LogOut size={20} />, label: 'Logout', action: () => console.log('Logout clicked') },
  ];

  // Profile Menu Component
  const ProfileMenu = () => (
    <AnimatePresence>
      {isProfileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'absolute',
            top: '80px',
            right: '24px',
            backgroundColor: '#1a1b1e',
            border: '1px solid rgb(79, 70, 229)',
            borderRadius: '12px',
            padding: '8px',
            width: '250px',
            zIndex: 100,
          }}
        >
          <div style={{
            padding: '16px',
            borderBottom: '1px solid #2D3748',
          }}>
            <div style={{ color: 'rgb(255, 255, 255)', fontWeight: 'bold' }}>John Doe</div>
            <div style={{ color: '#9CA3AF', fontSize: '14px' }}>john.doe@example.com</div>
          </div>
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ backgroundColor: 'transparent' }}
              whileHover={{ backgroundColor: 'rgb(45, 55, 72)' }}
              style={{
                width: '100%',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: 'transparent',
                border: 'none',
                color: index === menuItems.length - 1 ? 'rgb(239, 68, 68)' : 'rgb(255, 255, 255)',
                cursor: 'pointer',
                borderRadius: '8px',
              }}
              onClick={item.action}
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
  
  // Experience detail modal
  const ExperienceDetailModal = () => {
    if (!selectedExperience) return null;
    
    const experience = experiences[selectedExperience];
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
          }}
          onClick={() => setSelectedExperience(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            style={{
              backgroundColor: '#1a1b1e',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '0',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
              onClick={() => setSelectedExperience(null)}
            >
              <X size={24} />
            </button>
            
            {/* Image gallery */}
            <div
              style={{
                position: 'relative',
                height: '300px',
                overflow: 'hidden',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            >
              {experience.images.map((image, idx) => (
                <motion.img
                  key={idx}
                  src={image}
                  alt={experience.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === activeImageIndex ? 1 : 0 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ))}
              
              {experience.images.length > 1 && (
                <>
                  <button
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(prev => 
                        prev === 0 ? experience.images.length - 1 : prev - 1
                      );
                    }}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(prev => 
                        prev === experience.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '8px',
                    }}
                  >
                    {experience.images.map((_, idx) => (
                      <button
                        key={idx}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: idx === activeImageIndex ? 'rgb(79, 70, 229)' : 'rgba(255, 255, 255, 0.5)',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div style={{ padding: '32px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    color: 'rgb(79, 70, 229)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {experience.icon}
                </div>
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    margin: 0,
                  }}
                >
                  {experience.title}
                </h2>
              </div>
              
              <div
                style={{
                  color: 'rgb(79, 70, 229)',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '24px',
                }}
              >
                <Clock size={16} />
                {experience.details}
              </div>
              
              <p
                style={{
                  color: '#9CA3AF',
                  lineHeight: '1.8',
                  marginBottom: '32px',
                }}
              >
                {experience.fullDescription}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: 'rgb(79, 70, 229)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onClick={() => {
                  setSelectedExperience(null);
                  handleNavigation("/BookNowPage", "Book Now");
                }}
              >
                Book This Experience
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div style={{ backgroundColor: "#1a202c", minHeight: "100vh", color: "white" }}>
      {/* Header */}
      <header style={{
        backgroundColor: "#1a1b1e",
        borderBottom: "1px solid rgb(79, 70, 229)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ 
              color: "rgb(79, 70, 229)", 
              fontSize: "28px", 
              fontWeight: "bold",
              cursor: "pointer" 
            }}
            onClick={() => handleNavigation("/HomePage", "Home")}
          >
            Naflet Hotel
          </motion.div>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}>
            <nav style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}>
              {[
                { name: "Home", path: "/HomePage" },
                { name: "Rooms", path: "/Rooms" },
                { name: "Experience", path: "/Experience" },
                { name: "Gallery", path: "/Gallery" },
                { name: "Contact", path: "/Contact" }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  initial={{ color: 'rgb(255, 255, 255)' }}
                  whileHover={{ color: "rgb(79, 70, 229)", scale: 1.1 }}
                  style={{
                    color: item.name === "Experience" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    display: window.innerWidth < 768 && item.name !== "Home" && item.name !== "Rooms" ? "none" : "block"
                  }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path, item.name);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "rgb(79, 70, 229)",
                color: "rgb(255, 255, 255)",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => handleNavigation("/BookNowPage", "Book Now")}
            >
              Book Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgb(79, 70, 229)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'rgb(255, 255, 255)',
              }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
        <ProfileMenu />
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          height: "60vh",
          backgroundColor: "#1a1b1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        />
        <div style={{ 
          maxWidth: "800px", 
          position: "relative", 
          zIndex: 1 
        }}>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "48px",
              marginBottom: "24px",
              fontWeight: "bold",
            }}
          >
            An Unforgettable Stay in Adama
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "20px",
              color: "#9CA3AF",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            Imagine a place where you can reconnect with your inner self and rejuvenate your mind, body and spirit surrounded by nature. Ideally situated at the center of Adama City.
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "rgb(79, 70, 229)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "16px 32px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px",
            }}
            onClick={() => handleNavigation("/BookNowPage", "Book Now")}
          >
            Book Your Stay
          </motion.button>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <section style={{
        backgroundColor: "#1a1b1e",
        padding: "80px 24px",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          alignItems: "center",
          gap: "48px",
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
            }}
          >
            <h2 style={{
              fontSize: "36px",
              marginBottom: "24px",
            }}>
              Naflet Hotel in Adama
            </h2>
            <p style={{
              color: "#9CA3AF",
              lineHeight: "1.8",
              marginBottom: "24px",
            }}>
              Naflet Hotel's prestigious address continues to define elegance with unmatched service and an ever-evolving modern sensibility. Everything we do and we have including the cuisine, the service style, the environment and even the architecture are designed to support and enhance the wellness and overall experience of our guests and make their stay unforgettable.
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "rgb(79, 70, 229)",
            }}>
              <MapPin size={20} />
              <span>Adama, Dembela Sub-City Wonji Mazoria</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              borderRadius: "16px",
              overflow: "hidden",
              height: "400px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Naflet Hotel"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={statsRef}
        style={{
          backgroundColor: "#1a1b1e",
          padding: "80px 24px",
          borderBottom: "1px solid rgba(79, 70, 229, 0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          <div>
            <motion.h3
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              style={{
                color: "rgb(79, 70, 229)",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {Math.round(counters.rooms)}+
            </motion.h3>
            <p style={{ color: "#9CA3AF" }}>Luxury Rooms</p>
          </div>
          <div>
            <motion.h3
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
              style={{
                color: "rgb(79, 70, 229)",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {Math.round(counters.guests)}+
            </motion.h3>
            <p style={{ color: "#9CA3AF" }}>Satisfied Guests</p>
          </div>
          <div>
            <motion.h3
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              style={{
                color: "rgb(79, 70, 229)",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {counters.experience.toFixed(1)}
            </motion.h3>
            <p style={{ color: "#9CA3AF" }}>Years of Excellence</p>
          </div>
          <div>
            <motion.h3
              initial={{ scale: 0 }}
              animate={statsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
              style={{
                color: "rgb(79, 70, 229)",
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {Math.round(counters.satisfaction)}%
            </motion.h3>
            <p style={{ color: "#9CA3AF" }}>Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 24px",
      }}>
        <h2 style={{
          fontSize: "36px",
          marginBottom: "48px",
          textAlign: "center",
        }}>
          Naflet Hotel B'n'B Amenities
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(79, 70, 229, 0.2)", 
              }}
              style={{
                backgroundColor: "#1a1b1e",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid rgba(79, 70, 229, 1)",
                cursor: "pointer",
              }}
              onClick={() => setSelectedExperience(index)}
            >
              <div style={{
                color: "rgba(79, 70, 229, 1)",
                marginBottom: "16px",
              }}>
                {experience.icon}
              </div>
              <h3 style={{
                fontSize: "24px",
                marginBottom: "12px",
              }}>
                {experience.title}
              </h3>
              <p style={{
                color: "#9CA3AF",
                marginBottom: "12px",
              }}>
                {experience.description}
              </p>
              <div style={{
                color: "rgba(79, 70, 229, 1)",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <Clock size={16} />
                {experience.details}
              </div>
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "rgba(79, 70, 229, 1)",
                    fontSize: "14px",
                  }}
                >
                  <span>View Details</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Modified to be more compact */}
      <section style={{
        backgroundColor: "#1a1b1e",
        padding: "80px 24px",
      }}>
        <div style={{
          maxWidth: "1000px", // Reduced from 1400px
          margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "36px",
            marginBottom: "32px", // Reduced from 48px
            textAlign: "center",
          }}>
            Guest Experiences
          </h2>
          
          <div
            style={{
              position: "relative",
              padding: "0 24px", // Reduced from 48px
              maxWidth: "800px", // Added max-width
              margin: "0 auto",  // Center align the testimonial box
              height: "280px",   // Reduced from 320px
              backgroundColor: "#1a1b1e",
              borderRadius: "16px",
              border: "1px solid rgba(79, 70, 229, 1)",
              boxShadow: "0 8px 30px rgba(79, 70, 229, 0.2)",
            }}
          >
            <button
              style={{
                position: "absolute",
                left: "-12px", // Moved to outside the box
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#1a1b1e",
                color: "rgb(79, 70, 229)",
                border: "2px solid rgb(79, 70, 229)",
                borderRadius: "50%",
                width: "36px", // Reduced from 40px
                height: "36px", // Reduced from 40px
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 5,
              }}
              onClick={() => 
                setActiveTestimonialIndex(prev => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
            >
              <ChevronLeft size={20} /> {/* Reduced from 24px */}
            </button>
            
            <div
              style={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
                padding: "24px",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: index === activeTestimonialIndex ? 1 : 0,
                    scale: index === activeTestimonialIndex ? 1 : 0.8,
                    x: `${(index - activeTestimonialIndex) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "24px",
                  }}
                >
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: "70px", // Reduced from 80px
                      height: "70px", // Reduced from 80px
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "12px", // Reduced from 16px
                      border: "3px solid rgb(79, 70, 229)",
                    }}
                  />
                  
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px", // Reduced from 8px
                    marginBottom: "12px", // Reduced from 16px
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14} // Reduced from 16px
                        style={{
                          color: i < testimonial.rating ? "rgba(79, 70, 229, 1)" : "#4A5568",
                        }}
                      />
                    ))}
                  </div>
                  
                  <p style={{
                    color: "#9CA3AF",
                    marginBottom: "12px", // Reduced from 16px
                    fontSize: "16px", // Reduced from 18px
                    lineHeight: "1.5", // Reduced from 1.6
                    maxWidth: "640px",
                    fontStyle: "italic",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    "{testimonial.comment}"
                  </p>
                  
                  <div>
                    <div style={{ fontWeight: "bold" }}>{testimonial.name}</div>
                    <div style={{ color: "#9CA3AF", fontSize: "14px" }}>{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button
              style={{
                position: "absolute",
                right: "-12px", // Moved to outside the box
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#1a1b1e",
                color: "rgb(79, 70, 229)",
                border: "2px solid rgb(79, 70, 229)",
                borderRadius: "50%",
                width: "36px", // Reduced from 40px
                height: "36px", // Reduced from 40px
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 5,
              }}
              onClick={() => 
                setActiveTestimonialIndex(prev => 
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
            >
              <ChevronRight size={20} /> {/* Reduced from 24px */}
            </button>
            
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px", // Reduced from 8px
                position: "absolute",
                bottom: "12px", // Added position at bottom
                left: "0",
                right: "0",
              }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  style={{
                    width: "8px", // Reduced from 12px
                    height: "8px", // Reduced from 12px
                    borderRadius: "50%",
                    backgroundColor: index === activeTestimonialIndex ? "rgb(79, 70, 229)" : "#4A5568",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveTestimonialIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section style={{
        backgroundColor: "#1a1b1e",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "36px",
              marginBottom: "24px",
            }}
          >
            Ready to Experience Naflet Hotel?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              color: "#9CA3AF",
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            Book your stay now and indulge in the ultimate luxury experience in the heart of Adama, Ethiopia. Check-in is anytime after 2PM and check out by 11AM.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "rgb(79, 70, 229)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "16px 32px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={() => handleNavigation("/BookNowPage", "Book Now")}
            >
              Book Your Stay
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+251222113301"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid rgb(79, 70, 229)",
                borderRadius: "8px",
                padding: "16px 32px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "18px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Phone size={20} />
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* Modals */}
      <ExperienceDetailModal />
    </div>
  );
};

export default ExperiencePage;