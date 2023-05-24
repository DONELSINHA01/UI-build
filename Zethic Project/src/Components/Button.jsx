import React from 'react';

function Button(props) {

    const btnStyle={
        
        height:`${props.height}`,
        width:`${props.width}`,
        color:'white',
        
        backgroundColor:'orangered',
        border:'none',
        borderRadius:`${props.radius}`
    }
    return (
        <div>
           <button style={btnStyle} type="submit">{props.text}</button> 
        </div>
    );
}

export default Button;