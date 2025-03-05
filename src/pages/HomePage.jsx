import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Updated rooms data to match the RoomsPage
  const rooms = [
    { 
      id: 1,
      name: "Family Room",
      price: "$220/night",
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      description: 'Spacious air-conditioned room with separate sitting room incorporating king size bed',
      rating: 4.9,
      popular: true
    },
    { 
      id: 2,
      name: "Executive Room",
      price: "$160/night",
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Elegant room designed for business travelers with work desk and premium features',
      rating: 4.8,
      popular: true
    },
    { 
      id: 3,
      name: "Royal Room",
      price: "$110/night",
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Spacious room incorporating king size bed, sunrise and sunset view',
      rating: 4.7
    }
  ];

  const menuItems = [
    { icon: <User size={20} />, label: 'Profile', action: () => console.log('Profile clicked') },
    { icon: <Settings size={20} />, label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: <Bell size={20} />, label: 'Notifications', action: () => console.log('Notifications clicked') },
    { icon: <CreditCard size={20} />, label: 'Billing', action: () => console.log('Billing clicked') },
    { icon: <HelpCircle size={20} />, label: 'Help', action: () => console.log('Help clicked') },
    { icon: <LogOut size={20} />, label: 'Logout', action: () => console.log('Logout clicked') },
  ];

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
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
                    color: item.name === "Home" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
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
          position: "relative",
          height: "80vh",
          backgroundColor: "#1a1b1e",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ maxWidth: "600px" }}
          >
            <h1 style={{
              fontSize: "64px",
              color: "rgb(255, 255, 255)",
              marginBottom: "24px",
              lineHeight: "1.1",
              fontWeight: "bold",
            }}>
              Experience Luxury Like Never Before
            </h1>
            <p style={{
              fontSize: "20px",
              color: "#9CA3AF",
              marginBottom: "32px",
              lineHeight: "1.6",
            }}>
              Discover the perfect blend of comfort, elegance, and world-class service at Naflet Hotel.
            </p>
            
            {/* Search Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: "#1a1b1e",
                border: "1px solid rgb(79, 70, 229)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ color: "#9CA3AF", display: "block", marginBottom: "8px" }}>
                  <Calendar size={16} style={{ display: "inline", marginRight: "8px" }}/>
                  Check In Date
                </label>
                <input
                  type="date"
                  defaultValue={formatDate(currentDate)}
                  min={formatDate(currentDate)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    backgroundColor: "#2D3748",
                    border: "1px solid rgb(79, 70, 229)",
                    borderRadius: "8px",
                    color: "rgb(255, 255, 255)",
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <label style={{ color: "#9CA3AF", display: "block", marginBottom: "8px" }}>
                  <Users size={16} style={{ display: "inline", marginRight: "8px" }}/>
                  Guests
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "8px",
                    backgroundColor: "#2D3748",
                    border: "1px solid rgb(79, 70, 229)",
                    borderRadius: "8px",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "rgb(79, 70, 229)",
                  color: "rgb(255, 255, 255)",
                  padding: "12px 32px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                }}
                onClick={() => handleNavigation("/Rooms", "Rooms")}
              >
                Search Rooms
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero image - Updated with a beautiful hotel image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)"
            }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipMKmxytkBoSFdtDHHtLr62rYhszKjWsCGjwIoNd=s1360-w1360-h1020')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              right: "24px",
              backgroundColor: "rgba(26, 27, 30, 0.8)",
              padding: "16px",
              borderRadius: "12px",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{ color: "rgb(255, 255, 255)", fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
                Virtual Tour Available
              </div>
              <div style={{ color: "#9CA3AF" }}>
                Experience our hotel in 360° view
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Rooms Section - Updated with real images */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 24px",
      }}>
        <h2 style={{
          fontSize: "36px",
          color: "rgb(255, 255, 255)",
          marginBottom: "48px",
          textAlign: "center",
        }}>
          Featured Rooms
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "#1a1b1e",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgb(79, 70, 229)",
                cursor: "pointer",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              onClick={() => handleNavigation("/Rooms", "Rooms")}
            >
              <div style={{
                height: "200px",
                backgroundImage: `url(${room.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}>
                {room.popular && (
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    backgroundColor: "rgb(79, 70, 229)",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "white",
                  }}>
                    Popular
                  </div>
                )}
              </div>
              <div style={{ padding: "24px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}>
                  <h3 style={{ color: "rgb(255, 255, 255)", fontSize: "24px" }}>{room.name}</h3>
                  <div style={{ color: "rgb(79, 70, 229)", fontSize: "20px", fontWeight: "bold" }}>
                    {room.price}
                  </div>
                </div>
                <p style={{ 
                  color: "#9CA3AF", 
                  marginBottom: "12px", 
                  fontSize: "14px", 
                  minHeight: "42px" 
                }}>
                  {room.description}
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#9CA3AF",
                }}>
                  <Star size={16} style={{ color: "#F59E0B", fill: "#F59E0B", marginRight: "8px" }} />
                  {room.rating} Rating
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginTop: "48px" 
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "rgb(255, 255, 255)",
              border: "1px solid rgb(79, 70, 229)",
              padding: "12px 24px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => handleNavigation("/Rooms", "Rooms")}
          >
            View All Rooms <ChevronRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* New Section: Hotel Amenities */}
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
            color: "rgb(255, 255, 255)",
            marginBottom: "48px",
            textAlign: "center",
          }}>
            Exceptional Amenities
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
          }}>
            {[
              { 
                icon: "🍽️", 
                title: "Fine Dining", 
                description: "Experience culinary excellence with our world-class restaurants offering local and international cuisine." 
              },
              { 
                icon: "🏊", 
                title: "Infinity Pool", 
                description: "Relax in our stunning infinity pool with panoramic views of the surrounding landscape." 
              },
              { 
                icon: "💆", 
                title: "Luxury Spa", 
                description: "Rejuvenate your body and mind with our premium spa treatments and wellness services." 
              },
              { 
                icon: "🏋️", 
                title: "Fitness Center", 
                description: "Stay active in our state-of-the-art fitness center featuring the latest equipment." 
              },
            ].map((amenity, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: "#2D3748",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <div style={{ 
                  fontSize: "48px", 
                  marginBottom: "16px" 
                }}>
                  {amenity.icon}
                </div>
                <h3 style={{ 
                  color: "rgb(255, 255, 255)", 
                  fontSize: "24px", 
                  marginBottom: "16px" 
                }}>
                  {amenity.title}
                </h3>
                <p style={{ color: "#9CA3AF" }}>
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#0f172a",
        padding: "80px 24px 40px",
        borderTop: "1px solid #2D3748",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
          }}>
            <div>
              <div style={{ 
                color: "rgb(79, 70, 229)", 
                fontSize: "28px", 
                fontWeight: "bold",
                marginBottom: "16px",
              }}>
                Naflet Hotel
              </div>
              <p style={{ color: "#9CA3AF", lineHeight: "1.6" }}>
                Providing exceptional hospitality and unforgettable experiences for our guests.
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                color: "rgb(255, 255, 255)", 
                fontSize: "18px", 
                marginBottom: "16px",
                fontWeight: "bold",
              }}>Quick Links</h4>
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}>
                {["Home", "Rooms", "Experience", "Gallery", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      style={{ 
                        color: "#9CA3AF", 
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseOver={(e) => e.target.style.color = "rgb(79, 70, 229)"}
                      onMouseOut={(e) => e.target.style.color = "#9CA3AF"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(`/${item}Page`, item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{ 
                color: "rgb(255, 255, 255)", 
                fontSize: "18px", 
                marginBottom: "16px",
                fontWeight: "bold",
              }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ color: "#9CA3AF" }}>
                  <MapPin size={16} style={{ display: "inline", marginRight: "8px" }}/>
                  123 Luxury Avenue, Addis Ababa, Ethiopia
                </div>
                <div style={{ color: "#9CA3AF" }}>
                  📞 +251 123 456 789
                </div>
                <div style={{ color: "#9CA3AF" }}>
                  ✉️ info@naflethotel.com
                </div>
              </div>
            </div>
            
            <div>
              <h4 style={{ 
                color: "rgb(255, 255, 255)", 
                fontSize: "18px", 
                marginBottom: "16px",
                fontWeight: "bold",
              }}>Newsletter</h4>
              <p style={{ color: "#9CA3AF", marginBottom: "16px" }}>
                Subscribe to our newsletter for special deals and updates.
              </p>
              <div style={{ display: "flex" }}>
                <input 
                  type="email" 
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    padding: "12px",
                    backgroundColor: "#2D3748",
                    border: "none",
                    borderRadius: "8px 0 0 8px",
                    color: "white",
                  }}
                />
                <button style={{
                  backgroundColor: "rgb(79, 70, 229)",
                  color: "white",
                  border: "none",
                  padding: "0 16px",
                  borderRadius: "0 8px 8px 0",
                  cursor: "pointer",
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: "1px solid #2D3748",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <div style={{ color: "#9CA3AF" }}>
              © 2023 Naflet Hotel. All rights reserved.
            </div>
            <div style={{ 
              display: "flex", 
              gap: "24px",
              color: "#9CA3AF",
            }}>
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "none" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;