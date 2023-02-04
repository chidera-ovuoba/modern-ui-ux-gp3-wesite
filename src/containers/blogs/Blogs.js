import React from 'react';
import './blogs.css';
import { Article } from '../../components';
import { articleData } from '../../constants';

const Blogs = () => {
  return (
    <div className='gpt3__blogs section__padding' id='blog'>
      <div className="gpt3__blogs-heading">
      <h1 className='gradient__text'>A lot is happening, We are blogging about it</h1>
      </div>
      <div className='gpt3__blogs-container'>
        {articleData.map(({ img },i) => (
          <Article img={img} key={i} />
      ))}
      </div>
    </div>
  )
}

export default Blogs