import React from 'react';
import './Header.css';
import img2 from '../images/image-2.jpg';
import img3 from '../images/image-3.jpg';
import img4 from '../images/image-4.jpg';
import img5 from '../images/nikahm.png';
export function Header(){
    return(
        <div className='header-section'>
            <div className='all-images'>
                <img src={img2} alt='img2'/>
                <img src={img3} alt='img3'/>
                <img src={img4} alt='img4'/>
                <img src={img5} alt='img5'/>
            </div>
        </div>
    );
}