import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, MapPin, Users, Clock, Coffee, Wifi, Dumbbell, Waves, Utensils,
  Menu, Settings, User, LogOut, Bell, CreditCard, HelpCircle
} from 'lucide-react';

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };

  const experiences = [
    {
      title: "Fine Dining",
      description: "Experience culinary excellence with our world-class chefs",
      icon: <Utensils size={24} />,
      details: "Open 24/7",
    },
    {
      title: "Infinity Pool",
      description: "Swim with a breathtaking view of the city skyline",
      icon: <Waves size={24} />,
      details: "6 AM - 10 PM",
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal trainers",
      icon: <Dumbbell size={24} />,
      details: "24/7 Access",
    },
    {
      title: "Premium WiFi",
      description: "High-speed internet throughout the property",
      icon: <Wifi size={24} />,
      details: "Complimentary",
    },
    {
      title: "Breakfast Buffet",
      description: "International cuisine with fresh local ingredients",
      icon: <Coffee size={24} />,
      details: "6:30 AM - 10:30 AM",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      comment: "The service and amenities exceeded all my expectations. A truly luxurious experience.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Vacation Guest",
      comment: "The infinity pool and spa facilities are world-class. Will definitely return!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Honeymoon Stay",
      comment: "Perfect blend of luxury and comfort. The staff made our stay memorable.",
      rating: 4.8,
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
        }}
      >
        <div style={{ maxWidth: "800px" }}>
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
            Experience Luxury at Its Finest
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "20px",
              color: "#9CA3AF",
              lineHeight: "1.6",
            }}
          >
            Immerse yourself in a world of exceptional amenities and personalized services designed to make your stay unforgettable.
          </motion.p>
        </div>
      </motion.section>

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
          Premium Amenities
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
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "#1a1b1e",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid rgba(79, 70, 229, 1)",
              }}
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        backgroundColor: "#1a1b1e",
        padding: "80px 24px",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "36px",
            marginBottom: "48px",
            textAlign: "center",
          }}>
            Guest Experiences
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                style={{
                  backgroundColor: "#1a1b1e",
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid rgba(79, 70, 229, 1)",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      style={{
                        color: i < testimonial.rating ? "rgba(79, 70, 229, 1)" : "#4A5568",
                      }}
                    />
                  ))}
                </div>
                <p style={{
                  color: "#9CA3AF",
                  marginBottom: "16px",
                  fontSize: "16px",
                  lineHeight: "1.6",
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
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;