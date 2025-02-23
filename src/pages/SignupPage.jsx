import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup attempt with:', formData);
    }, 1500);
  };

  const inputStyles = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #4F46E5",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#1a1b1e",
    color: "white",
    height: "40px",
    boxSizing: "border-box",
  };

  const labelStyles = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      backgroundColor: "#1a202c",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "500px",
          minWidth: "280px",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2 style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "24px",
          textAlign: "center",
        }}>
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyles}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={inputStyles}
                required
              />
            </div>
            <div>
              <label style={labelStyles}>
                Last Name (Optional)
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={inputStyles}
              />
            </div>
          </div>

          <div>
            <label style={labelStyles}>
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={inputStyles}
              required
              placeholder="Choose a unique username"
            />
          </div>

          <div>
            <label style={labelStyles}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyles}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label style={labelStyles}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ ...inputStyles, paddingRight: "40px" }}
                required
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {showPassword ? <EyeOff size={20} color="white" /> : <Eye size={20} color="white" />}
              </button>
            </div>
          </div>

          <div>
            <label style={labelStyles}>
              Confirm Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ ...inputStyles, paddingRight: "40px" }}
                required
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} color="white" /> : <Eye size={20} color="white" />}
              </button>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              backgroundColor: "#4F46E5",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign Up</span>
                <ArrowRight size={20} />
              </>
            )}
          </motion.button>

          <div style={{ 
            textAlign: "center", 
            marginTop: "16px",
            fontSize: "14px",
            color: "#666",
          }}>
            Already have an account?{' '}
            <Link 
              to="/login" 
              style={{
                color: "#4F46E5",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;
