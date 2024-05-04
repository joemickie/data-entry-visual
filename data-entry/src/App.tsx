import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DataEntryForm from './pages/page';
import './index.css'
import Overview from './pages/OverviewDashboard';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DataEntryForm/>} />
        <Route path="/dashboard" element={<Overview/>} />
      </Routes>
    </>
  );
};

export default App;