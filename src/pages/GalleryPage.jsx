import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  X,
  Image
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoadError, setImageLoadError] = useState({});
  
  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };
  
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'dining', name: 'Dining' },
    { id: 'exterior', name: 'Exterior' }
  ];
  
  // Gallery images data with fully qualified and reliable URLs from image hosts allowed by CSP
  const galleryImages = [
    { 
      id: 1, 
      category: 'rooms', 
      title: 'Luxury Suite', 
      description: 'Experience unmatched comfort in our premium suites with elegant design and plush bedding',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 2, 
      category: 'rooms', 
      title: 'Executive Room', 
      description: 'Contemporary design with modern wood accents and premium fixtures for the discerning traveler',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 3, 
      category: 'rooms', 
      title: 'Deluxe Room', 
      description: 'Stylish comfort with a king-size bed and elegant décor for a relaxing and enjoyable stay',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 4, 
      category: 'rooms', 
      title: 'Presidential Suite', 
      description: 'Our most exclusive accommodation featuring a spacious layout and premium amenities',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 5, 
      category: 'amenities', 
      title: 'Swimming Pool', 
      description: 'Relax in our stunning pool area with comfortable loungers and attentive service',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 6, 
      category: 'amenities', 
      title: 'Spa Treatment Room', 
      description: 'Rejuvenate your senses in our luxury spa with personalized treatments',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 7, 
      category: 'amenities', 
      title: 'Fitness Center', 
      description: 'State-of-the-art equipment for maintaining your workout routine while traveling',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618539?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 8, 
      category: 'dining', 
      title: 'Main Restaurant', 
      description: 'Elegant dining space offering a diverse menu of international and Ethiopian cuisine',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 9, 
      category: 'dining', 
      title: 'Rooftop Bar', 
      description: 'Enjoy cocktails and breathtaking views of Adama from our stylish rooftop lounge',
      image: 'https://images.unsplash.com/photo-1560624052-3e26e6e19a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 10, 
      category: 'dining', 
      title: 'Private Dining', 
      description: 'Intimate dining spaces for special occasions and business meetings',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 11, 
      category: 'exterior', 
      title: 'Hotel Entrance', 
      description: 'Impressive entrance with elegant architecture welcoming our guests to Naflet Hotel Adama',
      image: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 12, 
      category: 'exterior', 
      title: 'Garden View', 
      description: 'Lush landscaped gardens providing a peaceful retreat within the hotel grounds',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 13, 
      category: 'exterior', 
      title: 'Night View', 
      description: 'Naflet Hotel Adama illuminated at night, creating a magical atmosphere',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 14, 
      category: 'amenities', 
      title: 'Conference Room', 
      description: 'Modern meeting facilities equipped with the latest technology for business events',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 15, 
      category: 'rooms', 
      title: 'Twin Room', 
      description: 'Comfortable accommodation with two separate beds, perfect for friends or colleagues',
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 16, 
      category: 'dining', 
      title: 'Breakfast Buffet', 
      description: 'Start your day with our extensive breakfast selection featuring local and international options',
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    }
  ];
  
  // Handle image loading errors
  const handleImageError = (id) => {
    setImageLoadError(prev => ({...prev, [id]: true}));
  };
  
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
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
              backgroundColor: '#1a1b1e',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              width: '80vw',
              maxWidth: '1200px',
              height: '60vh',
              position: 'relative',
              backgroundColor: '#2D3748',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {imageLoadError[selectedImage.id] ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  textAlign: 'center',
                  color: '#9CA3AF',
                }}>
                  <Image size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                  <p>Image not available</p>
                </div>
              ) : (
                <img 
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  onError={() => handleImageError(selectedImage.id)}
                />
              )}
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
            style={{ color: "rgb(79, 70, 229)", fontSize: "28px", fontWeight: "bold", cursor: 'pointer' }}
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
                    color: item.name === "Gallery" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
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
          Explore Naflet Hotel Adama through captivating images of our rooms, amenities, dining options, and more.
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
                <div style={{
                  height: "220px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#2D3748",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {imageLoadError[image.id] ? (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9CA3AF',
                    }}>
                      <Image size={36} style={{ marginBottom: '8px', opacity: 0.5 }} />
                      <p style={{ fontSize: '14px' }}>Image preview</p>
                    </div>
                  ) : (
                    <img 
                      src={image.image}
                      alt={image.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                      onError={() => handleImageError(image.id)}
                    />
                  )}
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