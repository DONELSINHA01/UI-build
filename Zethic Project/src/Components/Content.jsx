import React from 'react';
import image1 from '../Images/Rectangle1.png'
import star1 from '../Images/Star 1.png';
import Button from './Button';
function Content(props) {
    return (
        <>
            <div className="rect1">
                <div className="rect1-img">
                    <img src={image1} width='900px' />
                </div>
                <div className="rect1-content">
                    <h1> Discover Your Perfect</h1>
                    <h1>Plot of Land</h1>
                    <h2 style={{ fontWeight: 'lighter', color: 'gray' }}>Starting at</h2>
                    <h1 style={{ color: 'orangered' }}>₹3999<span style={{ color: 'black' }}>per.sqft</span></h1>
                    <img src={star1} />
                    <div className='searchBar'>
                        <input type="text" name="" id="" placeholder='Search area or location'/>
                        <div className="two-btns">
                        <div class="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:'white',border:'none',color:'black'}}>
                            ₹ Budget
                            </button>
                            
                        </div>
                        <Button text = 'Search' width='170px' height= "50px" radius = '10px'/>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Content;