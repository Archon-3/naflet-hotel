import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Settings, Bell, CreditCard, HelpCircle, LogOut, Menu
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Navigation handler function
  const handleNavigation = (path, pageName) => {
    console.log(`Navigating to ${pageName} page`);
    navigate(path);
    // Close the profile menu after navigation
    setIsProfileMenuOpen(false);
  };

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
          <motion.button
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
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              borderRadius: '8px',
            }}
            onClick={() => handleNavigation("/ProfilePage", "Profile")}
          >
            <User size={20} />
            Profile
          </motion.button>
          <motion.button
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
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              borderRadius: '8px',
            }}
            onClick={() => handleNavigation("/Settings", "Settings")}
          >
            <Settings size={20} />
            Settings
          </motion.button>
          <motion.button
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
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              borderRadius: '8px',
            }}
            onClick={() => handleNavigation("/Notifications", "Notifications")}
          >
            <Bell size={20} />
            Notifications
          </motion.button>
          <motion.button
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
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              borderRadius: '8px',
            }}
            onClick={() => handleNavigation("/Billing", "Billing")}
          >
            <CreditCard size={20} />
            Billing
          </motion.button>
          <motion.button
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
              color: 'rgb(255, 255, 255)',
              cursor: 'pointer',
              borderRadius: '8px',
            }}
            onClick={() => handleNavigation("/Help", "Help")}
          >
            <HelpCircle size={20} />
            Help
          </motion.button>
          <motion.button
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
              color: 'rgb(239, 68, 68)',
              cursor: 'pointer',
              borderRadius: '8px',
            }}
            onClick={() => {
              console.log('Logging out');
              // Add logout logic here
              handleNavigation("/", "Home");
            }}
          >
            <LogOut size={20} />
            Logout
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
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
                  color: window.location.pathname.includes(item.path) ? "rgb(79, 70, 229)" : "rgb(255, 255, 255)",
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
  );
};

export default Navbar;