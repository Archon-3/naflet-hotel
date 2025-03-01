import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Rooms from './pages/Rooms';
import ExperiencePage from './pages/espir';     // Added import
import BookNow from './pages/BookNowPage';      // Added import

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
        <Route path="/Rooms" element={<Rooms/>}/>
        <Route path="/espir" element={<ExperiencePage/>}/>
        <Route path="/BookNowPage" element={<BookNow/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;