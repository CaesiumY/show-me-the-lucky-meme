import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutBlock from './pages/layout/layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutBlock>foo bar</LayoutBlock>} />
      </Routes>
    </>
  );
};

export default App;
