import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DepartmentContainer from './components/DepartmentContainer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<DepartmentContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
