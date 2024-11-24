import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactList from './components/ContactList';
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
