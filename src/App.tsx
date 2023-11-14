import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  );
}

export default App;
