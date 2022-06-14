import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage/SignInPage';
import Fundraisings from './components/Fundraisings/Fundraisings';
import NewFundraising from './components/NewFundraising/NewFundraising';
import FundraisingPage from './components/FundraisingPage/FundraisingPage';
import Header from './components/Header/Header';
import './app.scss';

function App() {
  if (!window.walletConnection.isSignedIn()) {
    return (
      <SignInPage />
    );
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="fundraisings" element={<Fundraisings />} />
        <Route path="fundraisings/:fundraisingId" element={<FundraisingPage />} />
        <Route path="newFundraising" element={<NewFundraising />} />
      </Routes>
    </Router>
  );
}

export default App;