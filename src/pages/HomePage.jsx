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
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
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

  const rooms = [
    { id: 1, name: "Luxury Suite", price: "$299/night", rating: 4.8 },
    { id: 2, name: "Ocean View", price: "$399/night", rating: 4.9 },
    { id: 3, name: "Presidential Suite", price: "$599/night", rating: 5.0 },
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
                { name: "Home", href: "#" },
                { name: "Rooms", href: "/Rooms" },
                { name: "Experience", href: "#" },
                { name: "Gallery", href: "#" },
                { name: "Contact", href: "#" }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  initial={{ color: 'rgb(255, 255, 255)' }}
                  whileHover={{ color: "rgb(79, 70, 229)", scale: 1.1 }}
                  style={{
                    color: "rgb(255, 255, 255)",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  href={item.href}
                  onClick={(e) => {
                    if (item.name === "Rooms") {
                      e.preventDefault();
                      console.log("Navigating to Rooms page");
                      
                      // In a real app with routing, you might use:
                      // history.push('/rooms');
                      // or
                      // navigate('/rooms');
                      
                      // For demonstration, we'll show an alert:
                      alert("Navigating to Rooms page");
                    }
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
              >
                Search Rooms
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "#2D3748",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              right: "24px",
              backgroundColor: "rgb(26, 27, 30)",
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

      {/* Featured Rooms Section remains the same */}
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
              }}
            >
              <div style={{
                height: "200px",
                backgroundColor: "#2D3748",
              }}/>
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
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#9CA3AF",
                }}>
                  <Star size={16} style={{ color: "rgb(79, 70, 229)", marginRight: "8px" }} />
                  {room.rating} Rating
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;