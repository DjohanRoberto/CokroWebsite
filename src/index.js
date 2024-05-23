import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/home'
import Gallery from './pages/Gallery/gallery'
import Classes from './pages/Classes/classes'
import Contact from './pages/Contact/contact'
import About from './pages/About/about'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin/admin';

export default function App() {
  return (
    <BrowserRouter>
     <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/classes' element={<Classes/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin' element={<Admin/>}/>
     </Routes> 
    </BrowserRouter> 
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
