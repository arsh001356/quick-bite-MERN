import { React, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import BookTable from "./components/BookTable"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'
import Signup from './components/SignUp'
import Login from './components/Login'
import './components/responsive.css';
import toast, { Toaster } from 'react-hot-toast';
import BookedTablePopUP from './components/BookedTablePopUP'




function App() {

  const [login, setLogin] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("User");
    if (isLoggedIn) {
      setLogin(true);
    }
  }, []);
  console.log(login)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/bookTable" element={login === true ? <BookTable /> : <Login />} />
          <Route exact path="/signUp" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/booking/:id" element={<BookedTablePopUP />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>

    </>
  )
}

export default App