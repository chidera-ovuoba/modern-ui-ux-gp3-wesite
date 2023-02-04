import React from 'react'
import './footer.css';
import logo from '../../assets/logo.svg';
import { footerLinks } from '../../constants';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
         <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
            <div>
            <img src={logo} alt='gpt3-logo' />
            
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved.</p>
            </div>
        </div>
        <div className='gpt3__footer-links-container'>
          {
            footerLinks.map(({name,links}) => (
              <div className='gpt3__footer-links_div' key={name}>
                <h4>{name}</h4>
              {links.map((link) => (<p key={link}>{link}</p>))}
              </div>
            ))
        }
        </div>
      </div>
       <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer