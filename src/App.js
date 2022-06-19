import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './componentes/Blog/Blog';
import Contact from './componentes/Contact/Contact';
import Header from './componentes/Header/Header';
import Home from './componentes/Home/Home';
import Portfolio from './componentes/Portfolio/Portfolio';
import Project from './componentes/Project/Project';
function App() {
  const routes= (
    <Routes>
      <Route path='/blog' element={<Blog />} />
      <Route path='/' element={<Home />} />
      <Route path='/portfoli' element={<Portfolio />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/project' element={<Project />} />
    </Routes>
  );
  return (
    <div>
      <Header></Header>
      {/* <Blog></Blog>
      <Home></Home> */}
      {routes}
    </div>
  )
}


export default App;
