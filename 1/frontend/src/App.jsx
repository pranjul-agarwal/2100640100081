
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../src/components/ProductList';
import ProductDetails from '../src/components/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={ProductList} />
        <Route path="/categories/:categoryName/products/:productId" component={ProductDetails} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;