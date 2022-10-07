import React from 'react'
import { useState } from 'react'
const State = () => {
    const [color, setColor] = useState('steelblue')
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const backColor = {
        backgroundColor: color
    }
    return (
        <div style={backColor}>
            <button onMouseOver={() => setColor(getRandomColor())}>Hover me to change the color</button>
        </div>
    )
}

export default State
