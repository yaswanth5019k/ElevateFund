import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StartProject from './components/StartProject/StartProject'
import Donate from './components/Donate/Donate'
import './App.css'
// import LoginPage from './components/auth/LoginPage'
import Login from './components/Login/Login'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Search from './components/Search/Search'
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop'
import Profile from './components/Profile/Profile'

function App() {
  const location = useLocation();
  const hideFooterPaths = ['/profile'];
  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="app"> 
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/startproject" element={<StartProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </div>
  )
}

export default App
