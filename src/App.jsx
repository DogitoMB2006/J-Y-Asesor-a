import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './pages/home/home';

function App() {
  return (
    <div id="root">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
