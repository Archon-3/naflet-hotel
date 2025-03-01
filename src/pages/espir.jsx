import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Users, Clock, Coffee, Wifi, Dumbbell, Waves, Utensils } from 'lucide-react';

const ExperiencePage = () => {
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

  return (
    <div style={{ backgroundColor: "#1a202c", minHeight: "100vh", color: "white" }}>
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