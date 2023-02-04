import React from 'react';
import './feature.css';


const Feature = ({title,text,style}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div style={{marginBottom:'1rem'}}/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text' style={style}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature