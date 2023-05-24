import React from 'react';
import '../Styles/Content2.css';
import image1 from '../Images/Rectangle 128.png'
import image2 from '../Images/Rectangle 129.png'
import image3 from '../Images/allLogos.png'

function Content2(props) {
    return (<>
        <div className='content2'>
            <div className="container">
                <div className="box box1"></div>
                <div className="box box2">
                    <h1>340k+</h1>
                    <p>Landmark near chennai</p>
                </div>
                <div className="box box3"></div>
                <div className="box box4">
                    <h1>437k+</h1>
                    <p>Happy Customers</p>
                </div>
                <div className="box box5"></div>
                <div className="box box6">
                    <h1>4.3m+</h1>
                    <p>Sq. feet Developed</p>
                </div>
                
            </div>
            <h5 style={{position:'absolute',bottom:'50%',left:'150px',color:'gainsboro',width:'700px'}}><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla reprehenderit alias.</i></h5>
            <h3 style={{textAlign:'right',fontWeight:'lighter',position:'absolute',right:'100px'}}>...Trending Projects</h3>
            <div className="content2-imgs">
                
            <img src={image1} width='180px' height='300px'/>
            <img src={image2} width='180px' height='300px'/>
            </div>
        </div>
        <div className='screenShot' >
            <img src={image3} width='1300px' alt="" />
        </div>
        </>
    );
}

export default Content2;