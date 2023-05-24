import React from 'react';
import '../Styles/Content3.css';
import image1 from '../Images/Rectangle 131.png';
import image2 from '../Images/Rectangle 133.png';
import image3 from '../Images/Rectangle 134.png';
function Content3(props) {
    return (
        <>
        <div className="cards">
            <div className="card card1">
                <h1 style={{color:'#FE6D3F'}}>Explore Our Collections</h1>

            </div>
            <div className="card card2">
                <img src={image1} alt="" />
            </div>
            <div className="card card3">
                <img src={image2} alt="" />
            </div>
            <div className="card card4">
                <img src={image3} alt="" />
            </div>
        </div>
        <h5 style={{textAlign:'right',fontWeight:'lighter',position:'absolute',right:'100px',paddingBottom:'100px'}}>Explore More ...</h5>
        </>
    );
}

export default Content3;