import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MetaContainer from './containers/MetaContainer';
import CustomizePage from './pages/CustomizePage';
import IndexPage from './pages/IndexPage';

const App = () => {
  return (
    <>
      <MetaContainer />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/custom" element={<CustomizePage />} />
      </Routes>
    </>
  );
};

export default App;
