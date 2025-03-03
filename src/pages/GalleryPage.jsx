import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Star, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Users,
  Settings,
  User,
  LogOut,
  Bell,
  CreditCard,
  HelpCircle,
  Filter,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'dining', name: 'Dining' },
    { id: 'exterior', name: 'Exterior' }
  ];
  
  // Gallery images data
  // In a real application, these would have actual image URLs
  const galleryImages = [
    { 
      id: 1, 
      category: 'rooms', 
      title: 'Luxury Suite', 
      description: 'Experience unmatched comfort in our premium suites',
      color: '#264653' // placeholder color for demo
    },
    { 
      id: 2, 
      category: 'rooms', 
      title: 'Ocean View Room', 
      description: 'Wake up to breathtaking ocean views',
      color: '#2a9d8f' 
    },
    { 
      id: 3, 
      category: 'amenities', 
      title: 'Infinity Pool', 
      description: 'Relax in our stunning infinity pool overlooking the ocean',
      color: '#e9c46a' 
    },
    { 
      id: 4, 
      category: 'amenities', 
      title: 'Spa Treatment Room', 
      description: 'Rejuvenate your senses in our luxury spa',
      color: '#f4a261' 
    },
    { 
      id: 5, 
      category: 'dining', 
      title: 'Seaside Restaurant', 
      description: 'Fine dining with a perfect view',
      color: '#e76f51' 
    },
    { 
      id: 6, 
      category: 'dining', 
      title: 'Rooftop Bar', 
      description: 'Enjoy exotic cocktails under the stars',
      color: '#bc6c25' 
    },
    { 
      id: 7, 
      category: 'exterior', 
      title: 'Hotel Entrance', 
      description: 'Grand entrance with water features',
      color: '#283618' 
    },
    { 
      id: 8, 
      category: 'exterior', 
      title: 'Beach Access', 
      description: 'Private pathway to the beach',
      color: '#606c38' 
    },
    { 
      id: 9, 
      category: 'rooms', 
      title: 'Presidential Suite', 
      description: 'Our most exclusive accommodation',
      color: '#023047' 
    },
    { 
      id: 10, 
      category: 'amenities', 
      title: 'Fitness Center', 
      description: 'State-of-the-art equipment for your workout needs',
      color: '#219ebc' 
    },
    { 
      id: 11, 
      category: 'dining', 
      title: 'Wine Cellar', 
      description: 'Extensive collection of fine wines',
      color: '#8ecae6' 
    },
    { 
      id: 12, 
      category: 'exterior', 
      title: 'Garden View', 
      description: 'Lush tropical gardens surrounding the property',
      color: '#fb8500' 
    }
  ];
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const menuItems = [
    { icon: <User size={20} />, label: 'Profile', action: () => console.log('Profile clicked') },
    { icon: <Settings size={20} />, label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: <Bell size={20} />, label: 'Notifications', action: () => console.log('Notifications clicked') },
    { icon: <CreditCard size={20} />, label: 'Billing', action: () => console.log('Billing clicked') },
    { icon: <HelpCircle size={20} />, label: 'Help', action: () => console.log('Help clicked') },
    { icon: <LogOut size={20} />, label: 'Logout', action: () => console.log('Logout clicked') },
  ];

  // Open image modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // In a real app, we would prevent body scrolling here
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

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

  // Image Modal Component
  const ImageModal = () => (
    <AnimatePresence>
      {isModalOpen && selectedImage && (
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
            padding: '20px',
          }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* In a real app, this would be an actual image */}
            <div style={{
              backgroundColor: selectedImage.color,
              width: '80vw',
              height: '60vh',
              maxWidth: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
            }}>
              {selectedImage.title}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
              }}
              onClick={closeModal}
            >
              <X size={24} />
            </motion.button>
            
            <div style={{
              padding: '16px',
              backgroundColor: '#1a1b1e',
              color: 'white',
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{selectedImage.title}</h3>
              <p style={{ color: '#9CA3AF' }}>{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div style={{ backgroundColor: "#1a202c", minHeight: "100vh", overflow: "hidden" }}>
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
            style={{ color: "rgb(79, 70, 229)", fontSize: "28px", fontWeight: "bold" }}
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
                { name: "Home", href: "/" },
                { name: "Rooms", href: "/Rooms" },
                { name: "Experience", href: "#" },
                { name: "Gallery", href: "/Gallery" },
                { name: "Contact", href: "#" }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  initial={{ color: 'rgb(255, 255, 255)' }}
                  whileHover={{ color: "rgb(79, 70, 229)", scale: 1.1 }}
                  style={{
                    color: item.name === "Gallery" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  href={item.href}
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

      {/* Page Title Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          padding: "60px 24px 40px",
          textAlign: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: "48px",
            marginBottom: "16px",
            fontWeight: "bold",
          }}
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#9CA3AF",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Explore our luxurious hotel through captivating images of our rooms, amenities, dining options, and more.
        </motion.p>
      </motion.section>

      {/* Filter Tabs */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          padding: "0 24px 40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "40px",
        }}>
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              style={{
                backgroundColor: activeCategory === category.id ? "rgb(79, 70, 229)" : "transparent",
                color: activeCategory === category.id ? "rgb(255, 255, 255)" : "#9CA3AF",
                border: activeCategory === category.id ? "none" : "1px solid rgb(79, 70, 229)",
                borderRadius: "24px",
                padding: "12px 24px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "16px",
                transition: "all 0.2s ease",
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section style={{
        padding: "0 24px 80px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence>
            {filteredImages.map(image => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.3)" 
                }}
                style={{
                  backgroundColor: "#1a1b1e",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgb(79, 70, 229)",
                  cursor: "pointer",
                }}
                onClick={() => openModal(image)}
              >
                {/* In a real app, this would be an actual image */}
                <div style={{
                  height: "220px",
                  backgroundColor: image.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}>
                  {image.title}
                </div>
                <div style={{ padding: "16px" }}>
                  <h3 style={{ 
                    color: "rgb(255, 255, 255)", 
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}>
                    {image.title}
                  </h3>
                  <p style={{ 
                    color: "#9CA3AF",
                    fontSize: "14px",
                    lineHeight: "1.4",
                  }}>
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Image Modal */}
      <ImageModal />

    </div>
  );
};

export default GalleryPage;