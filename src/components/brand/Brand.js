import React from 'react'
import './brand.css';
import { brands } from '../../constants';
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      {
        brands.map(({img,alt}) => (
          <div key={alt}>
            <img src={img} alt={alt} />
          </div>
        ))
    }
    </div>
  )
}

export default Brand