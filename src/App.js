import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import 'react-loading-skeleton/dist/skeleton.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

