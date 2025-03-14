import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Settings, Bell, CreditCard, HelpCircle, LogOut, Menu, 
  ChevronLeft, ChevronRight, Edit, Calendar, Phone, Mail, MapPin,
  Shield, Bookmark, Star, Upload, Trash2, Plus, Facebook, Instagram,
  Twitter, ExternalLink, MessageCircle, Check, X, Save
} from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');

  // Form state
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+251 91 123 4567',
    address: 'Adama, Dembela Sub-City',
    city: 'Adama',
    country: 'Ethiopia',
    bio: 'Frequent traveler and business professional with a preference for luxury accommodations.'
  });

  // Toggle states for preferences
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    specialOffers: true,
    newsletter: true
  });

  // Recent bookings data
  const bookings = [
    {
      id: 'NHB-284956',
      room: 'Executive Room',
      checkIn: 'Sept 15, 2023',
      checkOut: 'Sept 18, 2023',
      status: 'Completed'
    },
    {
      id: 'NHB-576231',
      room: 'Family Room',
      checkIn: 'Dec 23, 2023',
      checkOut: 'Dec 29, 2023',
      status: 'Upcoming'
    },
    {
      id: 'NHB-693847',
      room: 'Deluxe Room',
      checkIn: 'Jan 05, 2024',
      checkOut: 'Jan 07, 2024',
      status: 'Cancelled'
    }
  ];

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };

  // Form change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Toggle preference handler
  const togglePreference = (preference) => {
    setPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving profile data:', formData);
    console.log('Saving preferences:', preferences);
    // Show success message or handle API call here
  };

  const menuItems = [
    { icon: <User size={20} />, label: 'Profile', action: () => setActiveTab('personal') },
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

  // Sidebar navigation items
  const sidebarItems = [
    { id: 'personal', icon: <User size={20} />, label: 'Personal Information' },
    { id: 'security', icon: <Shield size={20} />, label: 'Password & Security' },
    { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications' },
    { id: 'payment', icon: <CreditCard size={20} />, label: 'Payment Methods' },
    { id: 'bookings', icon: <Bookmark size={20} />, label: 'Bookings' },
    { id: 'reviews', icon: <Star size={20} />, label: 'Reviews' },
    { id: 'preferences', icon: <Settings size={20} />, label: 'Preferences' },
  ];
  
  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor = '';
    let textColor = '';
    
    switch(status) {
      case 'Completed':
        bgColor = 'rgba(16, 185, 129, 0.2)';
        textColor = 'rgb(16, 185, 129)';
        break;
      case 'Upcoming':
        bgColor = 'rgba(59, 130, 246, 0.2)';
        textColor = 'rgb(59, 130, 246)';
        break;
      case 'Cancelled':
        bgColor = 'rgba(156, 163, 175, 0.2)';
        textColor = 'rgb(156, 163, 175)';
        break;
      default:
        bgColor = 'rgba(156, 163, 175, 0.2)';
        textColor = 'rgb(156, 163, 175)';
    }
    
    return (
      <span style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '4px 8px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '500'
      }}>
        {status}
      </span>
    );
  };

  // Toggle switch component
  const ToggleSwitch = ({ isOn, onToggle }) => (
    <div 
      onClick={onToggle}
      style={{
        position: 'relative',
        width: '44px',
        height: '24px',
        backgroundColor: isOn ? 'rgb(79, 70, 229)' : '#4B5563',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '2px',
          left: isOn ? '22px' : '2px',
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transition: 'left 0.3s ease'
        }}
      />
    </div>
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
                    color: item.name === "Profile" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
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

      {/* Main Content */}
      <div style={{ 
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px 24px"
      }}>
        <div style={{
          marginBottom: "32px"
        }}>
          <h1 style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "8px"
          }}>Profile Settings</h1>
          <p style={{
            color: "#9CA3AF"
          }}>Manage your account information and preferences</p>
        </div>

        <div style={{
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          gap: "32px"
        }}>
          {/* Sidebar */}
          <div style={{
            width: window.innerWidth < 768 ? "100%" : "280px",
            flexShrink: 0
          }}>
            {/* Sidebar navigation */}
            <div style={{
              backgroundColor: "#1a1b1e",
              borderRadius: "12px",
              border: "1px solid #2D3748",
              overflow: "hidden",
              marginBottom: "24px"
            }}>
              {sidebarItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                  style={{
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    borderLeft: item.id === activeTab ? "3px solid rgb(79, 70, 229)" : "3px solid transparent",
                    backgroundColor: item.id === activeTab ? "rgba(79, 70, 229, 0.1)" : "transparent"
                  }}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div style={{
                    color: item.id === activeTab ? "rgb(79, 70, 229)" : "#9CA3AF"
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontWeight: item.id === activeTab ? "500" : "normal",
                    color: item.id === activeTab ? "white" : "#9CA3AF"
                  }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Help box */}
            <div style={{
              backgroundColor: "#1a1b1e",
              borderRadius: "12px",
              border: "1px solid #2D3748",
              padding: "24px",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px"
              }}>
                <MessageCircle size={20} style={{ color: "rgb(79, 70, 229)" }} />
                <h3 style={{ fontWeight: "500" }}>Need help?</h3>
              </div>
              <p style={{
                color: "#9CA3AF",
                fontSize: "14px",
                marginBottom: "16px"
              }}>
                Our support team is here to assist you with any questions or issues.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid rgb(79, 70, 229)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: "500"
                }}
              >
                <MessageCircle size={16} />
                Contact Support
              </motion.button>
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ flex: 1 }}>
            {/* Personal Information Section */}
            {activeTab === 'personal' && (
              <div style={{
                backgroundColor: "#1a1b1e",
                borderRadius: "12px",
                border: "1px solid #2D3748",
                overflow: "hidden",
              }}>
                <div style={{
                  padding: "24px",
                  borderBottom: "1px solid #2D3748"
                }}>
                  <h2 style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "24px"
                  }}>Personal Information</h2>

                  {/* Profile photo */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "32px"
                  }}>
                    <div style={{
                      width: "96px",
                      height: "96px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(79, 70, 229)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginRight: "24px"
                    }}>
                      JD
                    </div>
                    <div>
                      <div style={{
                        display: "flex",
                        gap: "12px",
                        marginBottom: "8px"
                      }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: "8px 16px",
                            backgroundColor: "transparent",
                            color: "white",
                            border: "1px solid rgb(79, 70, 229)",
                            borderRadius: "8px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14px"
                          }}
                        >
                          <Upload size={14} />
                          Upload Photo
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: "8px 16px",
                            backgroundColor: "transparent",
                            color: "#9CA3AF",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "14px"
                          }}
                        >
                          <Trash2 size={14} />
                          Remove
                        </motion.button>
                      </div>
                      <p style={{
                        color: "#9CA3AF",
                        fontSize: "12px"
                      }}>
                        JPEG, PNG or GIF. Maximum size 2MB.
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
                      gap: "16px",
                      marginBottom: "24px"
                    }}>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      </div>
                      <div style={{ gridColumn: window.innerWidth < 768 ? "auto" : "span 2" }}>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        />
                      </div>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px"
                          }}
                        >
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                      <div style={{ gridColumn: window.innerWidth < 768 ? "auto" : "span 2" }}>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#9CA3AF",
                          fontSize: "14px"
                        }}>
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows="4"
                          style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#2D3748",
                            border: "1px solid #4B5563",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "16px",
                            resize: "vertical"
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Preferences Section */}
                <div style={{
                  padding: "24px",
                  borderBottom: "1px solid #2D3748"
                }}>
                  <h2 style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "24px"
                  }}>Preferences</h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <div>
                        <h3 style={{ fontWeight: "500", marginBottom: "4px" }}>Email Notifications</h3>
                        <p style={{ color: "#9CA3AF", fontSize: "14px" }}>Receive booking confirmations and updates</p>
                      </div>
                      <ToggleSwitch 
                        isOn={preferences.emailNotifications} 
                        onToggle={() => togglePreference('emailNotifications')} 
                      />
                    </div>

                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <div>
                        <h3 style={{ fontWeight: "500", marginBottom: "4px" }}>SMS Notifications</h3>
                        <p style={{ color: "#9CA3AF", fontSize: "14px" }}>Receive text messages for booking updates</p>
                      </div>
                      <ToggleSwitch 
                        isOn={preferences.smsNotifications} 
                        onToggle={() => togglePreference('smsNotifications')} 
                      />
                    </div>

                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <div>
                        <h3 style={{ fontWeight: "500", marginBottom: "4px" }}>Special Offers</h3>
                        <p style={{ color: "#9CA3AF", fontSize: "14px" }}>Receive promotional offers and deals</p>
                      </div>
                      <ToggleSwitch 
                        isOn={preferences.specialOffers} 
                        onToggle={() => togglePreference('specialOffers')} 
                      />
                    </div>

                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <div>
                        <h3 style={{ fontWeight: "500", marginBottom: "4px" }}>Newsletter</h3>
                        <p style={{ color: "#9CA3AF", fontSize: "14px" }}>Monthly newsletter with travel tips</p>
                      </div>
                      <ToggleSwitch 
                        isOn={preferences.newsletter} 
                        onToggle={() => togglePreference('newsletter')} 
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div style={{
                  padding: "24px",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "16px"
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "10px 16px",
                      backgroundColor: "transparent",
                      color: "#9CA3AF",
                      border: "1px solid #4B5563",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "10px 24px",
                      backgroundColor: "rgb(79, 70, 229)",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                    onClick={handleSubmit}
                  >
                    <Save size={16} />
                    Save Changes
                  </motion.button>
                </div>
              </div>
            )}

            {/* Recent Bookings Section */}
            <div style={{
              backgroundColor: "#1a1b1e",
              borderRadius: "12px",
              border: "1px solid #2D3748",
              overflow: "hidden",
              marginTop: "32px"
            }}>
              <div style={{
                padding: "24px",
                borderBottom: "1px solid #2D3748"
              }}>
                <h2 style={{
                  fontSize: "20px",
                  fontWeight: "600"
                }}>Recent Bookings</h2>
              </div>

              <div style={{
                padding: "24px",
                overflowX: "auto"
              }}>
                <table style={{
                  width: "100%",
                  borderCollapse: "collapse"
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: "500",
                        borderBottom: "1px solid #4B5563"
                      }}>
                        Booking ID
                      </th>
                      <th style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: "500",
                        borderBottom: "1px solid #4B5563"
                      }}>
                        Room
                      </th>
                      <th style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: "500",
                        borderBottom: "1px solid #4B5563"
                      }}>
                        Check-in
                      </th>
                      <th style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: "500",
                        borderBottom: "1px solid #4B5563"
                      }}>
                        Check-out
                      </th>
                      <th style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: "500",
                        borderBottom: "1px solid #4B5563"
                      }}>
                        Status
                      </th>
                      <th style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: "500",
                        borderBottom: "1px solid #4B5563"
                      }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr key={booking.id}>
                        <td style={{
                          padding: "16px",
                          borderBottom: index < bookings.length - 1 ? "1px solid #4B5563" : "none",
                          fontSize: "14px"
                        }}>
                          {booking.id}
                        </td>
                        <td style={{
                          padding: "16px",
                          borderBottom: index < bookings.length - 1 ? "1px solid #4B5563" : "none",
                          fontSize: "14px"
                        }}>
                          {booking.room}
                        </td>
                        <td style={{
                          padding: "16px",
                          borderBottom: index < bookings.length - 1 ? "1px solid #4B5563" : "none",
                          fontSize: "14px"
                        }}>
                          {booking.checkIn}
                        </td>
                        <td style={{
                          padding: "16px",
                          borderBottom: index < bookings.length - 1 ? "1px solid #4B5563" : "none",
                          fontSize: "14px"
                        }}>
                          {booking.checkOut}
                        </td>
                        <td style={{
                          padding: "16px",
                          borderBottom: index < bookings.length - 1 ? "1px solid #4B5563" : "none",
                          fontSize: "14px"
                        }}>
                          <StatusBadge status={booking.status} />
                        </td>
                        <td style={{
                          padding: "16px",
                          borderBottom: index < bookings.length - 1 ? "1px solid #4B5563" : "none",
                          fontSize: "14px"
                        }}>
                          <button style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "rgb(79, 70, 229)",
                            cursor: "pointer",
                            padding: "0",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "14px"
                          }}>
                            View Details
                            <ExternalLink size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{
                  marginTop: "24px",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "transparent",
                      color: "white",
                      border: "1px solid rgb(79, 70, 229)",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                  >
                    View All Bookings
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#1a1b1e",
        borderTop: "1px solid #2D3748",
        padding: "48px 24px",
        marginTop: "64px"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "repeat(4, 1fr)",
          gap: "32px"
        }}>
          <div>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "rgb(79, 70, 229)"
            }}>Naflet Hotel</h3>
            <p style={{
              color: "#9CA3AF",
              marginBottom: "16px",
              fontSize: "14px",
              lineHeight: "1.6"
            }}>
              Experience unmatched elegance and service at Naflet Hotel, ideally situated at the center of Adama City.
            </p>
            <div style={{
              display: "flex",
              gap: "16px"
            }}>
              <a href="#" style={{ color: "#9CA3AF" }}>
                <Facebook size={20} />
              </a>
              <a href="#" style={{ color: "#9CA3AF" }}>
                <Instagram size={20} />
              </a>
              <a href="#" style={{ color: "#9CA3AF" }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px"
            }}>Quick Links</h3>
            <ul style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
              <li>
                <a href="#" style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "14px"
                }}>Home</a>
              </li>
              <li>
                <a href="#" style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "14px"
                }}>Rooms</a>
              </li>
              <li>
                <a href="#" style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "14px"
                }}>Experience</a>
              </li>
              <li>
                <a href="#" style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "14px"
                }}>Gallery</a>
              </li>
              <li>
                <a href="#" style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "14px"
                }}>Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px"
            }}>Contact</h3>
            <address style={{
              fontStyle: "normal",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
              <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
                <MapPin size={14} style={{ display: "inline", marginRight: "8px" }} />
                Adama, Dembela Sub-City, Wonji Mazoria
              </p>
              <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
                <Phone size={14} style={{ display: "inline", marginRight: "8px" }} />
                +251 222 113 301
              </p>
              <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
                <Mail size={14} style={{ display: "inline", marginRight: "8px" }} />
                info@naflethotel.com
              </p>
            </address>
          </div>

          <div>
            <h3 style={{
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "16px"
            }}>Newsletter</h3>
            <p style={{
              color: "#9CA3AF",
              marginBottom: "16px",
              fontSize: "14px"
            }}>
              Subscribe to receive special offers and updates.
            </p>
            <div style={{
              display: "flex"
            }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: "1",
                  padding: "10px 12px",
                  backgroundColor: "#2D3748",
                  border: "1px solid #4B5563",
                  borderRight: "none",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  color: "white",
                  fontSize: "14px"
                }}
              />
              <motion.button
                whileHover={{ backgroundColor: "rgb(67, 56, 202)" }}
                style={{
                  padding: "10px 16px",
                  backgroundColor: "rgb(79, 70, 229)",
                  color: "white",
                  border: "none",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          borderTop: "1px solid #2D3748",
          marginTop: "48px",
          paddingTop: "24px",
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          justifyContent: "space-between",
          alignItems: window.innerWidth < 768 ? "center" : "flex-start",
          gap: "16px"
        }}>
          <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
            © 2024 Naflet Hotel. All rights reserved.
          </p>
          <div style={{
            display: "flex",
            gap: "24px"
          }}>
            <a href="#" style={{ color: "#9CA3AF", fontSize: "14px", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "#9CA3AF", fontSize: "14px", textDecoration: "none" }}>
              Terms of Service
            </a>
            <a href="#" style={{ color: "#9CA3AF", fontSize: "14px", textDecoration: "none" }}>
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;