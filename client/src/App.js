import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/LoginPage';
import Header from './components/Header'
import Footer from './components/Footer'
import PatchingPage from './pages/PatchingPage';

function App() {
  return (
   
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route  path='/' element={<LoginPage />} />
              <Route  path='/patch' element={<PatchingPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
  
  );
}

export default App;
