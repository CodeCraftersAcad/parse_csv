import React, { useEffect, useRef, useState } from 'react'
import Circle from '../Circle';
export default function Canvas(props) {
    const canvasRef = useRef(null);
    const [circles, setCircles] = useState([]);
    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight / 2;
        const c = canvas.getContext('2d');
        createCircles(c);
    }, [])

    const circleArray = [];
    const createCircles = (ctx) => {
        for (let i = 0; i < 40; i++) {
            let radius = Math.random() * 10 - 5 + 20;
            let x = Math.floor(Math.random() * (window.innerWidth - radius * 2)) + radius;
            let y = Math.floor(Math.random() * (window.innerHeight - radius * 2)) + radius;
            let dx = (Math.random() - .5) * 4;
            let dy = (Math.random() - .5) * 4;
            circleArray.push({ x, y, dx, dy, radius, ctx });
        }
        setCircles(circleArray)
    }
    const showCircles = circles.map(c => <Circle key={`${c.y}${c.x}`} x={c.x} y={c.y} dx={c.dx} dy={c.dy} ctx={c.ctx} r={c.radius} color={"#f37726"} />)
    return (
        <canvas {...props} ref={canvasRef}>{showCircles}</canvas>
    )
}
