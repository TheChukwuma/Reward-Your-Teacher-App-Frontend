import React from 'react';
import { StepsStyles } from './StepsStyles';
import Frame from '../../assets/Frame.svg';

const Steps = ({ step, header, text }) => {
  return (
    <StepsStyles>
        <div className='frame'>
            <img src={Frame} alt="Horizontal frame" />
        </div>
        <div className='side-text'>
            <p id='first-paragraph'>{step}</p>
            <h3>{header}</h3>
            <p id='second-paragraph'>{text}</p>
        </div>
    </StepsStyles>
  )
}

export default Steps