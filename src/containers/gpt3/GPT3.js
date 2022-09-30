import React from 'react';
import { Feature } from '../../components';
import { featuresProps } from '../../constants';
import './gpt3.css'

const GPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature {...featuresProps[0]} />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>the possibilites are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        {featuresProps.slice(1).map((feature) => < Feature {...feature} style={{marginTop:'50px'}} key={feature.title} />)}
      </div>
    </div>
  )
}

export default GPT3
 
