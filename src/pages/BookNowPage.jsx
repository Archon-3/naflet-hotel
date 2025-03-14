import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  CreditCard, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  Star,
  User,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Shield,
  Smartphone,
  Wallet
} from 'lucide-react';

const BookNowPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  // Form values
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  
  // Chappa payment fields
  const [chappaPhoneNumber, setChappaPhoneNumber] = useState('');
  
  // Form validation
  const [errors, setErrors] = useState({});

  // Get today's date for date picker min attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate tomorrow's date for checkout min
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
  };

  const rooms = [
    { 
      id: 1,
      type: 'Family Room',
      price: 220,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      description: 'Spacious air-conditioned room with separate sitting room incorporating king size bed, Jacuzzi, sunrise and sunset view',
      amenities: ['Free WiFi', 'Smart TV', 'Mini Bar', 'Coffee Maker', 'Bathtub', 'Pool Access', 'Air Conditioner'],
      size: '250m²',
      capacity: 4,
      rating: 4.9,
      popular: true
    },
    { 
      id: 2,
      type: 'Executive Room',
      price: 160,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Spacious air-conditioned room with separate sitting room incorporating king size bed, Jacuzzi, sunrise and sunset view',
      amenities: ['Free WiFi', 'Mini Bar', 'Work Desk', 'Premium Toiletries', 'Bathtub', 'Air Conditioner'],
      size: '200m²',
      capacity: 2,
      rating: 4.8,
      popular: true
    },
    { 
      id: 3,
      type: 'Royal Room',
      price: 110,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Spacious air-conditioned room incorporating king size bed, sunrise and sunset view, dressing table, 42" smart TV',
      amenities: ['Free WiFi', 'Smart TV', 'Coffee Maker', 'Premium Toiletries', 'Air Conditioner'],
      size: '190m²',
      capacity: 2,
      rating: 4.7,
      popular: false
    },
    { 
      id: 4,
      type: 'Deluxe Room',
      price: 90,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Spacious air-conditioned room incorporating king size bed, comfortable working table with two chairs, dressing table',
      amenities: ['Free WiFi', 'Smart TV', 'Coffee Maker', 'Work Desk'],
      size: '50m²',
      capacity: 2,
      rating: 4.6,
      popular: false
    }
  ];

  // Payment methods with icons - Added Chappa payment method
  const paymentMethods = [
    { name: 'Credit Card', icon: <CreditCard size={24} /> },
    { name: 'Chappa', icon: <Wallet size={24} /> },
    { name: 'Telebirr', icon: <Smartphone size={24} /> },
    { name: 'Commercial Bank of Ethiopia', icon: <Wallet size={24} />, shortName: 'CBE' }
  ];

  useEffect(() => {
    // Reset errors when step changes
    setErrors({});
  }, [step]);

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!selectedRoom) newErrors.room = "Please select a room";
      if (!checkInDate) newErrors.checkIn = "Please select a check-in date";
      if (!checkOutDate) newErrors.checkOut = "Please select a check-out date";
      if (checkInDate && checkOutDate && new Date(checkInDate) >= new Date(checkOutDate)) {
        newErrors.checkOut = "Check-out date must be after check-in date";
      }
    } else if (step === 2) {
      if (!name.trim()) newErrors.name = "Name is required";
      if (!email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
      if (!phone.trim()) newErrors.phone = "Phone is required";
    } else if (step === 3) {
      if (!paymentMethod) newErrors.payment = "Please select a payment method";
      if (paymentMethod === 'Credit Card') {
        if (!cardNumber.trim()) newErrors.cardNumber = "Card number is required";
        if (!cardExpiry.trim()) newErrors.cardExpiry = "Expiry date is required";
        if (!cardCvc.trim()) newErrors.cardCvc = "CVC is required";
      }
      if (paymentMethod === 'Chappa' || paymentMethod === 'Telebirr') {
        if (!chappaPhoneNumber.trim()) newErrors.chappaPhoneNumber = "Phone number is required";
        else if (!/^\+251\d{9}$/.test(chappaPhoneNumber) && !/^0\d{9}$/.test(chappaPhoneNumber)) {
          newErrors.chappaPhoneNumber = "Please enter a valid Ethiopian phone number";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  const handlePaymentMethodSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleCompleteBooking = () => {
    if (validateStep()) {
      setIsBookingComplete(true);
      setTimeout(() => {
        setStep(5);
      }, 2000);
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Format card expiry date
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  // Format Ethiopian phone number
  const formatEthiopianPhone = (value) => {
    let v = value.replace(/\s+/g, '').replace(/[^0-9+]/gi, '');
    
    // If it starts with 0, replace with +251
    if (v.startsWith('0') && v.length > 1) {
      v = '+251' + v.substring(1);
    }
    
    // If it doesn't start with +, add it
    if (!v.startsWith('+') && v.length > 0 && !v.startsWith('0')) {
      v = '+' + v;
    }
    
    return v;
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
    <AnimatePresence mode="sync">
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

  // Progress bar
  const Progress = () => {
    const steps = [
      { number: 1, title: "Choose Room" },
      { number: 2, title: "Guest Details" },
      { number: 3, title: "Payment" },
      { number: 4, title: "Confirmation" }
    ];

    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px',
        overflowX: 'auto',
        padding: '0 10px'
      }}>
        {steps.map((s, index) => (
          <div key={s.number} style={{ 
            display: 'flex', 
            alignItems: 'center',
            minWidth: 'fit-content'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: step >= s.number ? 'rgb(79, 70, 229)' : '#2D3748',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                marginBottom: '8px',
                transition: 'background-color 0.3s ease'
              }}>
                {step > s.number ? <Check size={20} /> : s.number}
              </div>
              <div style={{ 
                color: step >= s.number ? 'white' : '#9CA3AF',
                fontSize: '14px',
                fontWeight: step === s.number ? 'bold' : 'normal',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap'
              }}>
                {s.title}
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div style={{
                height: '2px',
                width: '60px',
                backgroundColor: step > s.number ? 'rgb(79, 70, 229)' : '#2D3748',
                margin: '0 8px',
                marginBottom: '16px',
                transition: 'background-color 0.3s ease'
              }} />
            )}
          </div>
        ))}
      </div>
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
                    color: "rgb(255, 255, 255)",
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
      <div style={{ padding: "48px 24px" }}>
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#1a1b1e",
          borderRadius: "16px",
          border: "1px solid rgb(45, 55, 72)",
          overflow: "hidden",
        }}>
          <div style={{ padding: "32px" }}>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "40px",
              textAlign: "center",
              color: "white"
            }}>Book Your Stay</h1>
            
            {/* Progress bar */}
            {step < 5 && <Progress />}
            
            {/* Step 1: Room Selection */}
            <AnimatePresence mode="sync">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 style={{ 
                    fontSize: "24px",
                    marginBottom: "24px",
                    color: "white"
                  }}>Select Your Room</h2>
                  
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '24px',
                      marginBottom: '24px'
                    }}>
                      {rooms.map((room) => (
                        <motion.div
                          key={room.id}
                          whileHover={{ y: -8 }}
                          style={{
                            backgroundColor: selectedRoom && selectedRoom.id === room.id ? 'rgba(79, 70, 229, 0.1)' : '#2D3748',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: selectedRoom && selectedRoom.id === room.id ? '2px solid rgb(79, 70, 229)' : '1px solid #2D3748',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleRoomSelection(room)}
                        >
                          <div style={{
                            height: '180px',
                            backgroundImage: `url(${room.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                          }}>
                            {room.popular && (
                              <div style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                backgroundColor: 'rgb(79, 70, 229)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                              }}>
                                Popular
                              </div>
                            )}
                          </div>
                          <div style={{ padding: '16px' }}>
                            <div style={{ 
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '8px'
                            }}>
                              <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{room.type}</h3>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Star size={16} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                                <span>{room.rating}</span>
                              </div>
                            </div>
                            <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '12px' }}>
                              {room.size} • Up to {room.capacity} guests
                            </p>
                            <div style={{ 
                              fontSize: '20px',
                              fontWeight: 'bold',
                              marginBottom: '12px'
                            }}>
                              ${room.price} <span style={{ fontSize: '14px', fontWeight: 'normal', color: '#9CA3AF' }}>/night</span>
                            </div>
                            <div style={{ 
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '4px',
                              marginBottom: '12px'
                            }}>
                              {room.amenities.slice(0, 3).map((amenity, i) => (
                                <span key={i} style={{ 
                                  fontSize: '12px',
                                  color: '#9CA3AF',
                                  backgroundColor: '#1a1b1e',
                                  padding: '2px 8px',
                                  borderRadius: '4px'
                                }}>
                                  {amenity}
                                </span>
                              ))}
                              {room.amenities.length > 3 && (
                                <span style={{ 
                                  fontSize: '12px',
                                  color: '#9CA3AF'
                                }}>
                                  +{room.amenities.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    {errors.room && <div style={{ color: '#EF4444', fontSize: '14px', marginBottom: '16px' }}>{errors.room}</div>}
                  </div>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '16px',
                    marginBottom: '32px'
                  }}>
                    <div>
                      <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                        <Calendar size={16} style={{ display: 'inline', marginRight: '8px' }}/>
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        min={today}
                        style={{
                          width: '100%',
                          padding: '12px',
                          backgroundColor: '#2D3748',
                          border: errors.checkIn ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px'
                        }}
                      />
                      {errors.checkIn && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.checkIn}</div>}
                    </div>
                    <div>
                      <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                        <Calendar size={16} style={{ display: 'inline', marginRight: '8px' }}/>
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        min={checkInDate || tomorrowFormatted}
                        style={{
                          width: '100%',
                          padding: '12px',
                          backgroundColor: '#2D3748',
                          border: errors.checkOut ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px'
                        }}
                      />
                      {errors.checkOut && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.checkOut}</div>}
                    </div>
                    <div>
                      <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                        <Users size={16} style={{ display: 'inline', marginRight: '8px' }}/>
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        style={{
                          width: '100%',
                          padding: '12px',
                          backgroundColor: '#2D3748',
                          border: '1px solid rgb(79, 70, 229)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px'
                        }}
                      >
                        {[1, 2, 3, 4].map(num => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextStep}
                      style={{
                        backgroundColor: 'rgb(79, 70, 229)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Continue <ChevronRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Guest Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 style={{ 
                    fontSize: "24px",
                    marginBottom: "24px",
                    color: "white"
                  }}>Guest Details</h2>
                  
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '16px',
                      marginBottom: '24px'
                    }}>
                      <div>
                        <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#2D3748',
                            border: errors.name ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '16px'
                          }}
                        />
                        {errors.name && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.name}</div>}
                      </div>
                      <div>
                        <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#2D3748',
                            border: errors.email ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '16px'
                          }}
                        />
                        {errors.email && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.email}</div>}
                      </div>
                      <div>
                        <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(formatEthiopianPhone(e.target.value))}
                          placeholder="+251 91 234 5678"
                          style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#2D3748',
                            border: errors.phone ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '16px'
                          }}
                        />
                        {errors.phone && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.phone}</div>}
                      </div>
                    </div>
                    
                    <div>
                      <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                        Special Requests (Optional)
                      </label>
                      <textarea
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="Let us know if you have any special requests..."
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '12px',
                          backgroundColor: '#2D3748',
                          border: '1px solid rgb(79, 70, 229)',
                          borderRadius: '8px',
                          color: 'white',
                          fontSize: '16px',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#2D3748',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '32px'
                  }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Booking Summary</h3>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}>
                      <div>{selectedRoom?.type}</div>
                      <div>${selectedRoom?.price} / night</div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}>
                      <div>Dates</div>
                      <div>{checkInDate} to {checkOutDate}</div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}>
                      <div>Guests</div>
                      <div>{guests}</div>
                    </div>
                    {checkInDate && checkOutDate && (
                      <div style={{ 
                        borderTop: '1px solid #4B5563',
                        marginTop: '16px',
                        paddingTop: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'bold',
                        fontSize: '18px'
                      }}>
                        <div>Total</div>
                        <div>
                          ${selectedRoom?.price * Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000*60*60*24)))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevStep}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: '1px solid rgb(79, 70, 229)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <ChevronLeft size={20} /> Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextStep}
                      style={{
                        backgroundColor: 'rgb(79, 70, 229)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Continue <ChevronRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 style={{ 
                    fontSize: "24px",
                    marginBottom: "24px",
                    color: "white"
                  }}>Payment Method</h2>
                  
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                      marginBottom: '24px'
                    }}>
                      {paymentMethods.map((method) => (
                        <motion.div
                          key={method.name}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handlePaymentMethodSelection(method.name)}
                          style={{
                            backgroundColor: paymentMethod === method.name ? 'rgba(79, 70, 229, 0.1)' : '#2D3748',
                            borderRadius: '12px',
                            padding: '16px',
                            border: paymentMethod === method.name ? '2px solid rgb(79, 70, 229)' : '1px solid #2D3748',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <div style={{ color: 'rgb(79, 70, 229)' }}>
                            {method.icon}
                          </div>
                          <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
                            {method.shortName || method.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    {errors.payment && <div style={{ color: '#EF4444', fontSize: '14px', marginBottom: '16px' }}>{errors.payment}</div>}
                  </div>
                  
                  <AnimatePresence mode="sync">
                    {paymentMethod === 'Credit Card' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ marginBottom: '32px' }}
                      >
                        <div style={{ 
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                          gap: '16px',
                          marginBottom: '16px'
                        }}>
                          <div>
                            <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                              Card Number
                            </label>
                            <input
                              type="text"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: '#2D3748',
                                border: errors.cardNumber ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                                borderRadius: '8px',
                                color: 'white',
                                fontSize: '16px'
                              }}
                            />
                            {errors.cardNumber && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.cardNumber}</div>}
                          </div>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '16px'
                          }}>
                            <div>
                              <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                value={cardExpiry}
                                onChange={(e) => setCardExpiry(formatExpiryDate(e.target.value))}
                                placeholder="MM/YY"
                                maxLength={5}
                                style={{
                                  width: '100%',
                                  padding: '12px',
                                  backgroundColor: '#2D3748',
                                  border: errors.cardExpiry ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                                  borderRadius: '8px',
                                  color: 'white',
                                  fontSize: '16px'
                                }}
                              />
                              {errors.cardExpiry && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.cardExpiry}</div>}
                            </div>
                            <div>
                              <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                                CVC
                              </label>
                              <input
                                type="text"
                                value={cardCvc}
                                onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, '').substring(0, 3))}
                                placeholder="123"
                                maxLength={3}
                                style={{
                                  width: '100%',
                                  padding: '12px',
                                  backgroundColor: '#2D3748',
                                  border: errors.cardCvc ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                                  borderRadius: '8px',
                                  color: 'white',
                                  fontSize: '16px'
                                }}
                              />
                              {errors.cardCvc && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.cardCvc}</div>}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Chappa or Telebirr payment forms */}
                    {(paymentMethod === 'Chappa' || paymentMethod === 'Telebirr') && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ marginBottom: '32px' }}
                      >
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{ 
                            backgroundColor: '#1a1b1e',
                            border: '1px solid rgb(79, 70, 229)',
                            borderRadius: '8px',
                            padding: '16px',
                            marginBottom: '16px',
                          }}>
                            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '12px' }}>
                              {paymentMethod === 'Chappa' ? 
                                'Chappa is a secure Ethiopian payment gateway that supports various payment methods including mobile wallets and bank cards.' :
                                'Telebirr is Ethiopia\'s mobile money solution provided by Ethio Telecom.'}
                            </p>
                            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '12px' }}>
                              Enter your phone number below. You'll receive a payment request to complete your booking.
                            </p>
                          </div>
                          
                          <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={chappaPhoneNumber}
                            onChange={(e) => setChappaPhoneNumber(formatEthiopianPhone(e.target.value))}
                            placeholder="+251 91 234 5678"
                            style={{
                              width: '100%',
                              padding: '12px',
                              backgroundColor: '#2D3748',
                              border: errors.chappaPhoneNumber ? '1px solid #EF4444' : '1px solid rgb(79, 70, 229)',
                              borderRadius: '8px',
                              color: 'white',
                              fontSize: '16px'
                            }}
                          />
                          {errors.chappaPhoneNumber && <div style={{ color: '#EF4444', fontSize: '14px', marginTop: '4px' }}>{errors.chappaPhoneNumber}</div>}
                        </div>
                      </motion.div>
                    )}

                    {/* CBE payment form */}
                    {paymentMethod === 'Commercial Bank of Ethiopia' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ marginBottom: '32px' }}
                      >
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{ 
                            backgroundColor: '#1a1b1e',
                            border: '1px solid rgb(79, 70, 229)',
                            borderRadius: '8px',
                            padding: '16px',
                            marginBottom: '16px',
                          }}>
                            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '12px' }}>
                              Commercial Bank of Ethiopia (CBE) is Ethiopia's largest state-owned commercial bank.
                            </p>
                            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '12px' }}>
                              You will be redirected to the CBE payment page to complete your transaction securely.
                            </p>
                            <div style={{ 
                              backgroundColor: '#0f172a',
                              border: '1px solid #334155',
                              borderRadius: '8px',
                              padding: '12px',
                              marginTop: '16px'
                            }}>
                              <p style={{ color: '#f59e0b', fontSize: '14px', marginBottom: '0' }}>
                                <strong>Note:</strong> Please have your CBE account details and mobile phone ready.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div style={{ 
                    backgroundColor: '#2D3748',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '32px'
                  }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Booking Summary</h3>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}>
                      <div>{selectedRoom?.type}</div>
                      <div>${selectedRoom?.price} / night</div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}>
                      <div>Dates</div>
                      <div>{checkInDate} to {checkOutDate}</div>
                    </div>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                      fontSize: '16px'
                    }}>
                      <div>Guests</div>
                      <div>{guests}</div>
                    </div>
                    {checkInDate && checkOutDate && (
                      <div style={{ 
                        borderTop: '1px solid #4B5563',
                        marginTop: '16px',
                        paddingTop: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'bold',
                        fontSize: '18px'
                      }}>
                        <div>Total</div>
                        <div>
                          ${selectedRoom?.price * Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000*60*60*24)))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevStep}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: '1px solid rgb(79, 70, 229)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <ChevronLeft size={20} /> Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextStep}
                      style={{
                        backgroundColor: 'rgb(79, 70, 229)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Continue <ChevronRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 style={{ 
                    fontSize: "24px",
                    marginBottom: "24px",
                    color: "white"
                  }}>Confirm Your Booking</h2>
                  
                  <div style={{ 
                    backgroundColor: '#2D3748',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '32px'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      gap: '24px',
                      marginBottom: '24px',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ 
                        width: '200px',
                        height: '140px',
                        backgroundImage: `url(${selectedRoom?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                        flexShrink: 0
                      }}></div>
                      <div>
                        <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{selectedRoom?.type}</h3>
                        <div style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '8px' }}>
                          {selectedRoom?.size} • Up to {selectedRoom?.capacity} guests
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                          <Star size={16} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                          <span>{selectedRoom?.rating}</span>
                        </div>
                        <div style={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '4px',
                        }}>
                          {selectedRoom?.amenities.slice(0, 3).map((amenity, i) => (
                            <span key={i} style={{ 
                              fontSize: '12px',
                              color: '#9CA3AF',
                              backgroundColor: '#1a1b1e',
                              padding: '2px 8px',
                              borderRadius: '4px'
                            }}>
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '18px', marginBottom: '16px' }}>Booking Details</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        <div>
                          <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Check-in</div>
                          <div>{checkInDate}</div>
                        </div>
                        <div>
                          <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Check-out</div>
                          <div>{checkOutDate}</div>
                        </div>
                        <div>
                          <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Guests</div>
                          <div>{guests}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '18px', marginBottom: '16px' }}>Guest Information</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        <div>
                          <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Name</div>
                          <div>{name}</div>
                        </div>
                        <div>
                          <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Email</div>
                          <div>{email}</div>
                        </div>
                        <div>
                          <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Phone</div>
                          <div>{phone}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '18px', marginBottom: '16px' }}>Payment</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ color: 'rgb(79, 70, 229)' }}>
                          {paymentMethods.find(m => m.name === paymentMethod)?.icon}
                        </div>
                        <div>{paymentMethod}</div>
                        {paymentMethod === 'Chappa' && chappaPhoneNumber && (
                          <div style={{ marginLeft: '8px', color: '#9CA3AF' }}>({chappaPhoneNumber})</div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '16px' }}>Price Breakdown</h4>
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                        fontSize: '16px'
                      }}>
                        <div>
                          ${selectedRoom?.price} x {Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000*60*60*24)))} nights
                        </div>
                        <div>
                          ${selectedRoom?.price * Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000*60*60*24)))}
                        </div>
                      </div>
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                        fontSize: '16px'
                      }}>
                        <div>Taxes & fees</div>
                        <div>
                          ${Math.round(selectedRoom?.price * Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000*60*60*24))) * 0.1)}
                        </div>
                      </div>
                      <div style={{ 
                        borderTop: '1px solid #4B5563',
                        marginTop: '16px',
                        paddingTop: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontWeight: 'bold',
                        fontSize: '18px'
                      }}>
                        <div>Total</div>
                        <div>
                          ${Math.round(selectedRoom?.price * Math.max(1, Math.floor((new Date(checkOutDate) - new Date(checkInDate)) / (1000*60*60*24))) * 1.1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevStep}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: '1px solid rgb(79, 70, 229)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <ChevronLeft size={20} /> Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCompleteBooking}
                      style={{
                        backgroundColor: 'rgb(79, 70, 229)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      Complete Booking
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 5: Success */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '32px 0'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.3
                    }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: 'rgb(79, 70, 229)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '24px'
                    }}
                  >
                    <Check size={40} />
                  </motion.div>
                  
                  <h2 style={{ 
                    fontSize: "32px",
                    marginBottom: "16px",
                    color: "white"
                  }}>Booking Confirmed!</h2>
                  
                  <p style={{ 
                    fontSize: "18px",
                    color: "#9CA3AF",
                    marginBottom: "32px",
                    maxWidth: "600px"
                  }}>
                    Thank you for your booking. A confirmation has been sent to your email. We look forward to welcoming you to Naflet Hotel!
                  </p>
                  
                  <div style={{ 
                    backgroundColor: '#2D3748',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '32px',
                    maxWidth: '400px',
                    width: '100%'
                  }}>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Booking Reference</div>
                      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>NHB-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</div>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Check-in</div>
                      <div>{checkInDate}</div>
                    </div>
                    <div>
                      <div style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '4px' }}>Check-out</div>
                      <div>{checkOutDate}</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation("/HomePage", "Home")}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: '1px solid rgb(79, 70, 229)',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}
                    >
                      Return to Home
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
              
            {/* Booking Completion Animation */}
            <AnimatePresence mode="sync">
              {isBookingComplete && step === 4 && (
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{
                      width: '120px',
                      height: '120px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor: 'rgb(79, 70, 229)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                      >
                        <Check size={60} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowPage;