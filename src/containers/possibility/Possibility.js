import React from 'react';
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={PossibilityImage} alt='possibility-img' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilites are beyound your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam laborum quas, quo ab omnis, incidunt soluta laboriosam velit voluptas beatae dignissimos possimus nulla quae. Quisquam itaque nemo fugiat dolorem!</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility