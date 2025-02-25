import React, { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("User logged in with:", formData);
      navigate("/HomePage");
    }, 1500);
  };

  const handleSignupClick = () => {
    navigate("/signup");
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

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "#1a202c",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "400px",
          minWidth: "280px",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "16px",
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "12px",
          }}
        >
          Welcome Back!
        </h2>
        <p style={{ fontSize: "16px", color: "#666", marginBottom: "24px" }}>
          Log in to access <strong>Naflet Hotel Adama</strong>.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div style={{ marginBottom: "16px", textAlign: "left" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              style={inputStyles}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "16px", textAlign: "left" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                style={{
                  ...inputStyles,
                  paddingRight: "40px",
                }}
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

          {/* Login Button */}
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
              cursor: "pointer",
              transition: "background 0.3s ease",
              marginBottom: "16px",
            }}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Login
                <LogIn size={20} style={{ marginLeft: "8px" }} />
              </>
            )}
          </motion.button>

          {/* Forgot Password & Signup Links */}
          <div style={{ textAlign: "center", fontSize: "14px" }}>
            <button 
              type="button" 
              style={{ 
                color: "#4F46E5", 
                background: "none", 
                border: "none", 
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Forgot password?
            </button>
            <span style={{ margin: "0 8px", color: "#666" }}>|</span>
            <button 
              type="button" 
              onClick={handleSignupClick}
              style={{ 
                color: "#4F46E5", 
                background: "none", 
                border: "none", 
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Create an account
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;