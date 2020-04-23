import React from 'react';
import logo from './logo.svg';
import WelcomeComponent from './components/leaveTracker/WelcomeComponent'
import HeaderComponent from './components/leaveTracker/HeaderComponent.jsx'
import FooterComponent from './components/leaveTracker/FooterComponent.jsx'
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <WelcomeComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
