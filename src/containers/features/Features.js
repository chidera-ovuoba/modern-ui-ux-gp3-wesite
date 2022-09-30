import React from 'react';
import './features.css';
import { featuresData } from '../../constants';
import { Feature } from '../../components';
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into The Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((feature) => < Feature {...feature} key={feature.title} />)}
      </div>
    </div>
  )
}

export default Features