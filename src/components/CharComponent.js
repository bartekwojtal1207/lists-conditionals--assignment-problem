import React, { Component } from 'react';

const CharComponents = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <div style={style} key={props.index} onClick={props.click}>{props.children}</div>
    )
};

export default CharComponents