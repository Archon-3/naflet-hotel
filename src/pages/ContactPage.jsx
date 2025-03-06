import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Menu, Settings, User, LogOut, Bell, CreditCard, 
  HelpCircle, X, Send, Clock, Instagram, Facebook, Twitter, Linkedin, Check,
  ExternalLink
} from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate the form data
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s-()]{8,20}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      try {
        // In a real app, you would send the form data to your backend here
        console.log('Form submitted:', formData);
        setIsSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after a while
        setTimeout(() => {
          setIsSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('There was an error submitting your message. Please try again.');
        setIsSubmitting(false);
      }
    }, 1500);
  };
  
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
                    color: item.name === "Contact" ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    display: window.innerWidth < 768 && item.name !== "Home" && item.name !== "Contact" ? "none" : "block"
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
          height: "40vh",
          backgroundColor: "#1a1b1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
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
            Contact Us
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
            We'd love to hear from you. Reach out with any questions about your stay or special requests.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 24px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "48px",
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              backgroundColor: "#1a1b1e",
              borderRadius: "16px",
              border: "1px solid rgb(45, 55, 72)",
              padding: "32px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{
              fontSize: "28px",
              marginBottom: "24px",
              color: "white",
            }}>
              Send us a Message
            </h2>
            
            {/* Success message */}
            {isSubmitSuccess && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  backgroundColor: 'rgba(79, 70, 229, 0.2)',
                  border: '1px solid rgb(79, 70, 229)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{
                  backgroundColor: 'rgb(79, 70, 229)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Check size={16} color="white" />
                </div>
                <div>
                  Your message has been sent successfully! We'll get back to you shortly.
                </div>
              </motion.div>
            )}
            
            {/* Error message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  backgroundColor: 'rgba(220, 38, 38, 0.2)',
                  border: '1px solid rgb(220, 38, 38)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{
                  backgroundColor: 'rgb(220, 38, 38)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <X size={16} color="white" />
                </div>
                <div>{submitError}</div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#9CA3AF',
                  fontSize: '14px' 
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#2D3748',
                    border: formErrors.name ? '1px solid rgb(220, 38, 38)' : '1px solid rgb(79, 70, 229)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px'
                  }}
                />
                {formErrors.name && (
                  <div style={{ color: 'rgb(220, 38, 38)', fontSize: '14px', marginTop: '4px' }}>
                    {formErrors.name}
                  </div>
                )}
              </div>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
                marginBottom: '24px'
              }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#9CA3AF',
                    fontSize: '14px' 
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#2D3748',
                      border: formErrors.email ? '1px solid rgb(220, 38, 38)' : '1px solid rgb(79, 70, 229)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '16px'
                    }}
                  />
                  {formErrors.email && (
                    <div style={{ color: 'rgb(220, 38, 38)', fontSize: '14px', marginTop: '4px' }}>
                      {formErrors.email}
                    </div>
                  )}
                </div>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: '#9CA3AF',
                    fontSize: '14px' 
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+251 91 234 5678"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#2D3748',
                      border: formErrors.phone ? '1px solid rgb(220, 38, 38)' : '1px solid rgb(79, 70, 229)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '16px'
                    }}
                  />
                  {formErrors.phone && (
                    <div style={{ color: 'rgb(220, 38, 38)', fontSize: '14px', marginTop: '4px' }}>
                      {formErrors.phone}
                    </div>
                  )}
                </div>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#9CA3AF',
                  fontSize: '14px' 
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What can we help you with?"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#2D3748',
                    border: formErrors.subject ? '1px solid rgb(220, 38, 38)' : '1px solid rgb(79, 70, 229)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px'
                  }}
                />
                {formErrors.subject && (
                  <div style={{ color: 'rgb(220, 38, 38)', fontSize: '14px', marginTop: '4px' }}>
                    {formErrors.subject}
                  </div>
                )}
              </div>
              
              <div style={{ marginBottom: '32px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  color: '#9CA3AF',
                  fontSize: '14px' 
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please provide details about your inquiry..."
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#2D3748',
                    border: formErrors.message ? '1px solid rgb(220, 38, 38)' : '1px solid rgb(79, 70, 229)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
                {formErrors.message && (
                  <div style={{ color: 'rgb(220, 38, 38)', fontSize: '14px', marginTop: '4px' }}>
                    {formErrors.message}
                  </div>
                )}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: 'rgb(79, 70, 229)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '3px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }} />
                    <style>{`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}</style>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 style={{
              fontSize: "28px",
              marginBottom: "32px",
              color: "white",
            }}>
              Get in Touch
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  color: 'rgb(79, 70, 229)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Address</h3>
                  <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                    Adama, Dembela Sub-City<br />
                    Wonji Mazoria<br />
                    Ethiopia
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  color: 'rgb(79, 70, 229)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Phone</h3>
                  <p style={{ color: '#9CA3AF', lineHeight: '1.6', marginBottom: '4px' }}>
                    +251 222 113 301
                  </p>
                  <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                    +251 906 444 400
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  color: 'rgb(79, 70, 229)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Email</h3>
                  <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                    info@naflethotels.com
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(79, 70, 229, 0.1)',
                  color: 'rgb(79, 70, 229)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Business Hours</h3>
                  <p style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
                    Monday - Sunday: 24 hours<br />
                    Check-in: After 2:00 PM<br />
                    Check-out: By 11:00 AM
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '16px'
              }}>
                Connect With Us
              </h3>
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    color: 'rgb(79, 70, 229)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    color: 'rgb(79, 70, 229)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    color: 'rgb(79, 70, 229)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(79, 70, 229, 0.1)',
                    color: 'rgb(79, 70, 229)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        padding: "0 24px 80px",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}>
          <h2 style={{
            fontSize: "28px",
            marginBottom: "32px",
            textAlign: "center",
          }}>
            Find Us Here
          </h2>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#2D3748',
          }}>
            {/* Static map for Naflet Hotel */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62879.66796391061!2d39.237116149999995!3d8.5508694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c449a489%3A0xca3347887b2e62ed!2sAdama%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1713892789407!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{
                border: 0,
                borderRadius: '16px',
              }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Naflet Hotel Location Map"
            ></iframe>
            
            {/* View on Google Maps button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://goo.gl/maps/qyB1LDuT3SdoNHG77"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: 'rgb(79, 70, 229)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ExternalLink size={16} />
              View on Google Maps
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer style={{
        backgroundColor: "#1a1b1e",
        borderTop: "1px solid rgba(79, 70, 229, 0.3)",
        padding: "24px",
        textAlign: "center",
        color: "#9CA3AF",
      }}>
        <p>© Copyright Naflet Hotel 2023. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;