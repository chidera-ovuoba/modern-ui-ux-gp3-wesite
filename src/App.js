import React from 'react'

import { Navbar, Brand, CTA } from './components';
import { Blogs, Features, Footer, GPT3, Header, Possibility } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg" style={{position:'relative'}}>
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA/>
      <Blogs />
      <Footer/>
    </div>
  )
}

export default App