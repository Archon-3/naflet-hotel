import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, Bath, Coffee, Tv, Users, MapPin, Star, ChevronDown, Filter, 
  BedDouble, ParkingSquare, Wine, Waves, Menu, Settings, User, 
  LogOut, Bell, CreditCard, HelpCircle
} from 'lucide-react';

const RoomsPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };

  const amenities = [
    { icon: <Wifi size={20} />, label: 'Free WiFi' },
    { icon: <Bath size={20} />, label: 'Bathtub' },
    { icon: <Coffee size={20} />, label: 'Coffee Maker' },
    { icon: <Tv size={20} />, label: 'Smart TV' },
    { icon: <ParkingSquare size={20} />, label: 'Free Parking' },
    { icon: <Wine size={20} />, label: 'Mini Bar' },
    { icon: <Waves size={20} />, label: 'Pool Access' },
  ];

  const rooms = [
    {
      id: 1,
      name: "Family Room",
      type: "family",
      price: 299,
      size: "45m²",
      capacity: 4,
      rating: 4.7,
      description: "Spacious room perfect for families with two double beds and modern amenities",
      amenities: amenities.slice(0, 6),
      images: ["family-1", "family-2"],
      popular: true
    },
    {
      id: 2,
      name: "Executive Room",
      type: "executive",
      price: 259,
      size: "35m²",
      capacity: 2,
      rating: 4.8,
      description: "Elegant room designed for business travelers with work desk and premium features",
      amenities: amenities,
      images: ["executive-1", "executive-2"],
      popular: true
    },
    {
      id: 3,
      name: "Classic Twin",
      type: "classic",
      price: 199,
      size: "30m²",
      capacity: 2,
      rating: 4.5,
      description: "Comfortable room with twin beds, perfect for friends or business colleagues",
      amenities: amenities.slice(0, 4),
      images: ["twin-1", "twin-2"]
    },
    {
      id: 4,
      name: "Classic Room",
      type: "classic",
      price: 189,
      size: "28m²",
      capacity: 2,
      rating: 4.6,
      description: "Cozy room with a queen bed and essential amenities for a pleasant stay",
      amenities: amenities.slice(0, 5),
      images: ["classic-1", "classic-2"]
    }
  ];

  const filters = ['all', 'classic', 'executive', 'family'];

  const filteredRooms = selectedFilter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type === selectedFilter);

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
                    color: item.name === "Rooms" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
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

      {/* Main Content */}
      <div style={{ padding: "32px" }}>
        {/* Header Section */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          marginBottom: "48px",
        }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "white"
          }}>Our Rooms</h1>
          <p style={{
            fontSize: "18px",
            color: "#9CA3AF"
          }}>
            Discover our collection of thoughtfully designed rooms and suites
          </p>
        </div>

        {/* Filters Section */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          marginBottom: "32px",
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgb(79, 70, 229)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Filter size={20} />
              Filters
              <ChevronDown size={16} />
            </motion.button>

            <div style={{ display: "flex", gap: "12px" }}>
              {filters.map(filter => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: selectedFilter === filter ? "rgb(79, 70, 229)" : "#2D3748",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                style={{
                  backgroundColor: "#2D3748",
                  borderRadius: "12px",
                  padding: "24px",
                  marginBottom: "32px",
                  overflow: "hidden"
                }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "24px",
                }}>
                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}>Price Range</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      style={{ width: "100%" }}
                    />
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      color: "#9CA3AF"
                    }}>
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}>Amenities</label>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "8px",
                    }}>
                      {amenities.slice(0, 4).map((amenity, index) => (
                        <label key={index} style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "14px",
                        }}>
                          <input type="checkbox" style={{
                            borderRadius: "4px",
                            backgroundColor: "#4B5563",
                          }} />
                          {amenity.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}>Room Size</label>
                    <select style={{
                      width: "100%",
                      backgroundColor: "#4B5563",
                      borderRadius: "8px",
                      padding: "8px",
                      color: "white",
                      border: "none",
                    }}>
                      <option>Any Size</option>
                      <option>25-30m²</option>
                      <option>30-40m²</option>
                      <option>40m²+</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rooms Grid */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "32px",
        }}>
          {filteredRooms.map((room) => (
            <motion.div
              key={room.id}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: "#2D3748",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Room Image */}
              <div style={{
                position: "relative",
                height: "256px",
                backgroundColor: "#4B5563",
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
                  }}>
                    Popular
                  </div>
                )}
              </div>

              {/* Room Details */}
              <div style={{ padding: "24px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}>
                  <div>
                    <h3 style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "4px",
                    }}>{room.name}</h3>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#9CA3AF",
                    }}>
                      <BedDouble size={16} />
                      <span>{room.size}</span>
                      <span>•</span>
                      <Users size={16} />
                      <span>Up to {room.capacity}</span>
                    </div>
                  </div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}>
                    <Star size={16} style={{ color: "#FBBF24", fill: "#FBBF24" }} />
                    <span style={{ fontWeight: "500" }}>{room.rating}</span>
                  </div>
                </div>

                <p style={{
                  color: "#9CA3AF",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}>
                  {room.description}
                </p>

                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "24px",
                }}>
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <div key={index} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "14px",
                      color: "#9CA3AF",
                    }}>
                      {amenity.icon}
                    </div>
                  ))}
                  {room.amenities.length > 4 && (
                    <span style={{ fontSize: "14px", color: "#9CA3AF" }}>
                      +{room.amenities.length - 4} more
                    </span>
                  )}
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div>
                    <span style={{ fontSize: "24px", fontWeight: "bold" }}>${room.price}</span>
                    <span style={{ color: "#9CA3AF" }}>/night</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: "rgb(79, 70, 229)",
                      color: "white",
                      padding: "8px 24px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                    onClick={() => handleNavigation("/BookNowPage", "Book Now")}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;