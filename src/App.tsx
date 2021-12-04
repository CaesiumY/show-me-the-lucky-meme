import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MetaContainer from './containers/MetaContainer';
import IndexPage from './pages/IndexPage';

const App = () => {
  return (
    <>
      <MetaContainer />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </>
  );
};

export default App;
