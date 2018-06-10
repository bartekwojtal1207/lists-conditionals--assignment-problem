import React, { Component } from 'react';


const  ValidationComponent = (props) => {
   const text =  props.children <= 5 ? <span>text to short</span> : <span>text to long</span>;

    return ( <div>
        <p>{text}</p>
    </div> )
};

export default ValidationComponent;