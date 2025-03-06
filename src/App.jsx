import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RoomsPage from './pages/Rooms';
import ExperiencePage from './pages/espir';
import BookNow from './pages/BookNowPage';
import GalleryPage from './pages/GalleryPage';  // Added import
import ContactPage from './pages/ContactPage';

const App = () => {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(() => {
    return localStorage.getItem('hasSeenOnboarding') === 'true';
  });

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setHasSeenOnboarding(true);
  };

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
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/Rooms" element={<RoomsPage/>}/>
        <Route path="/Experience" element={<ExperiencePage/>}/>  
        <Route path="/Gallery" element={<GalleryPage/>}/>  {/* Added route */}
        <Route path="/BookNowPage" element={<BookNow/>}/>
        <Route path="/Contact" element={<ContactPage/>} /> {/* Added placeholder */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;