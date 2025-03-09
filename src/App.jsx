import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RoomsPage from './pages/Rooms';
import ExperiencePage from './pages/espir';
import BookNow from './pages/BookNowPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import NotificationPage from './pages/NotificationPage';
const App = () => {
  // Safe localStorage access with fallback for environments like Poe Canvas
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(() => {
    try {
      return localStorage.getItem('hasSeenOnboarding') === 'true';
    } catch (error) {
      console.warn('localStorage not available:', error);
      return false; // Default to showing onboarding if storage isn't available
    }
  });

  const handleOnboardingComplete = () => {
    try {
      localStorage.setItem('hasSeenOnboarding', 'true');
      setHasSeenOnboarding(true);
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
      setHasSeenOnboarding(true); // Still update state even if storage fails
    }
  };

  // For Poe Canvas, you might want to conditionally render without Router
  // This is a check you could use to detect if you're in the Poe Canvas environment
  const isPoeCanvas = () => {
    return typeof window !== 'undefined' && window.Poe;
  };

  // If in Poe Canvas, render just the ProfilePage component directly
  if (isPoeCanvas()) {
    return <ProfilePage />;
  }

  // Normal router-based rendering for standard React apps
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            hasSeenOnboarding ? (
              <Navigate to="/login" replace />
            ) : (
              <OnboardingPage onComplete={handleOnboardingComplete} />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Rooms" element={<RoomsPage />} />
        <Route path="/Experience" element={<ExperiencePage />} />  
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/BookNowPage" element={<BookNow />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        
        {/* Fallback route for 404 - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;