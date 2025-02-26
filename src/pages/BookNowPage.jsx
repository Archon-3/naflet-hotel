import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookNowPage = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmed, setPasswordConfirmed] = useState('');
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setStep(2); // Move to payment method selection
  };

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    setStep(3); // Move to password confirmation
  };

  const handlePasswordSubmit = () => {
    if (password === passwordConfirmed) {
      setStep(4); // Move to booking confirmation
    } else {
      alert('Passwords do not match!');
    }
  };

  const handleConfirmBooking = () => {
    alert('Your booking is confirmed!');
    setIsBookingComplete(true);
    setStep(5); // Complete the booking process
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 200,
      }}
    >
      <motion.div
        style={{
          backgroundColor: '#1a1b1e',
          padding: '32px',
          borderRadius: '16px',
          width: '400px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '24px' }}>
          {step === 1 && 'Choose Your Room'}
          {step === 2 && 'Select Payment Method'}
          {step === 3 && 'Confirm Your Password'}
          {step === 4 && 'Confirm Booking'}
          {step === 5 && 'Booking Complete'}
        </h2>

        {step === 1 && (
          <div>
            <div>
              <button
                onClick={() => handleRoomSelection('Single Room')}
                style={buttonStyle}
              >
                Single Room
              </button>
            </div>
            <div>
              <button
                onClick={() => handleRoomSelection('Double Room')}
                style={buttonStyle}
              >
                Double Room
              </button>
            </div>
            <div>
              <button
                onClick={() => handleRoomSelection('Suite')}
                style={buttonStyle}
              >
                Suite
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div>
              <button
                onClick={() => handlePaymentSelection('Credit Card')}
                style={buttonStyle}
              >
                Credit Card
              </button>
            </div>
            <div>
              <button
                onClick={() => handlePaymentSelection('PayPal')}
                style={buttonStyle}
              >
                PayPal
              </button>
            </div>
            <div>
              <button
                onClick={() => handlePaymentSelection('Bank Transfer')}
                style={buttonStyle}
              >
                Bank Transfer
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                Enter Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: '#9CA3AF', display: 'block', marginBottom: '8px' }}>
                Confirm Password
              </label>
              <input
                type="password"
                value={passwordConfirmed}
                onChange={(e) => setPasswordConfirmed(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
            <motion.button
              onClick={handlePasswordSubmit}
              whileHover={{ scale: 1.05 }}
              style={buttonStyle}
            >
              Confirm Password
            </motion.button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 style={{ color: '#E5E7EB', textAlign: 'center', marginBottom: '16px' }}>
              Room: {selectedRoom}
            </h3>
            <h3 style={{ color: '#E5E7EB', textAlign: 'center', marginBottom: '16px' }}>
              Payment Method: {paymentMethod}
            </h3>
            <motion.button
              onClick={handleConfirmBooking}
              whileHover={{ scale: 1.05 }}
              style={buttonStyle}
            >
              Confirm Booking
            </motion.button>
          </div>
        )}

        {step === 5 && !isBookingComplete && (
          <div>
            <h3 style={{ color: '#E5E7EB', textAlign: 'center' }}>
              Thank you! Your booking is confirmed.
            </h3>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              style={buttonStyle}
            >
              Close
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const buttonStyle = {
  width: '100%',
  padding: '12px 24px',
  backgroundColor: '#4F46E5',
  color: 'white',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#2D3748',
  border: '1px solid #4F46E5',
  borderRadius: '8px',
  color: 'white',
};

export default BookNowPage;
