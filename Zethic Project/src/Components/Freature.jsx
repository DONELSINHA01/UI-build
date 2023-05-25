import React from 'react';
import Button from './Button';
import '../Styles/Feature.css';
import image1 from '../Images/Rectangle 143.png';
import image2 from '../Images/Rectangle 144.png';
import image3 from '../Images/Rectangle 145.png';
import image4 from '../Images/Rectangle 147.png';
function Freature(props) {
    return (
        <div style={{paddingTop:'100px'}}>
            <h1 style={{color:'#FE6D3F'}}>Feature Projects</h1>
            <div className="feature-btns">
            <Button text = 'Egmore' radius='50px' height='40px' width='150px'/>&nbsp;
            <Button text = 'Koyambedu' radius='50px' height='40px' width='150px'/>&nbsp;
            <Button text = 'Sholinganallur' radius='50px' height='40px' width='150px'/>&nbsp;
            <Button text = 'Choolaimedu' radius='50px' height='40px' width='150px'/>&nbsp;
            <Button text = 'Greams Road' radius='50px' height='40px' width='150px'/>&nbsp;
            <Button text = 'Royapettah' radius='50px' height='40px' width='150px'/>&nbsp;
            </div>
            <br /><br /><br /><br />
            <div className="Feature-cards">
                <div className="f-card">
                    <img src={image1} alt="" />
                    <p style={{color:'gray'}}>Lorem, ipsum dolor sit  dummy text fill the</p>
                    <br />
                    <div className="prsq" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h3 style={{color:'#FE6D3F'}}><b>$16,471 </b></h3>
                        <h3 style={{color:'gray'}}> | 2088 sqft</h3>
                    </div>
                </div>
                <div className="f-card">
                    <img src={image2} alt="" />
                    <p style={{color:'gray'}}>Lorem, ipsum dolor sit dummy text fill the</p>
                    <br />
                    <div className="prsq" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h3 style={{color:'#FE6D3F'}}><b>$16,471 </b></h3>
                        <h3 style={{color:'gray'}}> | 2088 sqft</h3>
                    </div>
                </div>
                <div className="f-card">
                    <img src={image3} alt="" />
                    <p style={{color:'gray'}}>Lorem, ipsum dolor sit  dummy text fill the</p>
                    <br />
                    <div className="prsq" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h3 style={{color:'#FE6D3F'}}><b>$16,471 </b></h3>
                        <h3 style={{color:'gray'}}> | 2088 sqft</h3>
                    </div>
                </div>
                <div className="f-card">
                    <img src={image4} alt="" />
                    <p style={{color:'gray'}}>Lorem, ipsum dolor sit  dummy text fill the</p>
                    <br />
                    <div className="prsq" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h3 style={{color:'#FE6D3F'}}><b>$16,471 </b></h3>
                        <h3 style={{color:'gray'}}> | 2088 sqft</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


export default Freature;