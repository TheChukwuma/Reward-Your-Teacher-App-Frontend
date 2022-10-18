import React from 'react'
import { PartnersStyles } from './PartnersStyles'
import abeg from '../../assets/abeg.svg';
import accessbank from '../../assets/accessbank.svg';
import bolt from '../../assets/bolt.svg';
import firstbank from '../../assets/firstbank.svg';
import airtel from '../../assets/airtel.svg';

const Partners = () => {
  return (
    <PartnersStyles>
        <h1>Our Partners</h1>
        <div className="partners">
            <img id="abeg" src={abeg} alt="abeg" />
            <img id="access" src={accessbank} alt="access" />
            <img id="bolt" src={bolt} alt="bolt" />
            <img src={firstbank} alt="first bank" />
            <img src={airtel} alt="airtel" />
        </div>
    </PartnersStyles>
  )
}

export default Partners