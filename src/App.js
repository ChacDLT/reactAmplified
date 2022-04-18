import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<>Page Not Found</>} />

        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
