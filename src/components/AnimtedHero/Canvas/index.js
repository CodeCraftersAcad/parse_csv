// import React, { useEffect, useRef, useState, useCallback } from 'react'
// import Circle from '../Circle';
// export default function Canvas(props) {
//     const canvasRef = useRef(null);
//     let animationId;
//     const [circles, setCircles] = useState([]);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     const draw = useCallback(() => {
//         let canvas = canvasRef.current
//         const c = canvas.getContext('2d');
//         // c.fillRect(0, 0, window.innerWidth, window.innerHeight / 2);
//         c.clearRect(0, 0, window.innerWidth, window.innerHeight / 2);
//         createCircles(c);
//         animationId = requestAnimationFrame(draw);
//     })
//     useEffect(() => {
//         // let animationId, frameCount = 0;
//         // const canvas = canvasRef.current
//         // canvas.width = window.innerWidth
//         // canvas.height = window.innerHeight / 2;
//         // const c = canvas.getContext('2d');
//         // createCircles(c);
//         // const render = () => {
//         //     frameCount++
//         //     draw(c, frameCount)
//         //     window.requestAnimationFrame(render)
//         // }
//         // render()
//         // window.cancelAnimationFrame(canvas);
//         // canvasRef.current = requestAnimationFrame(draw)
//         draw();
//         return () => {
//             cancelAnimationFrame(animationId);
//         }
//     }, [draw])
//     const circleArray = [];
//     const createCircles = (ctx) => {
//         for (let i = 0; i < 40; i++) {
//             let radius = Math.random() * 10 - 5 + 20;
//             let x = Math.floor(Math.random() * (window.innerWidth - radius * 2)) + radius;
//             let y = Math.floor(Math.random() * (window.innerHeight - radius * 2)) + radius;
//             let dx = (Math.random() - .5) * 4;
//             let dy = (Math.random() - .5) * 4;
//             circleArray.push(new Circle(x, y, dx, dy, radius, ctx));
//         }
//         setCircles(circleArray)
//     }
//     // const showCircles = circles.map(c => <Circle key={`${c.y}${c.x}`} x={c.x} y={c.y} dx={c.dx} dy={c.dy} ctx={c.ctx} r={c.radius} color={"#f37726"} />)

//     return (
//         <canvas {...props} ref={canvasRef} width={window.innerWidth} height={window.innerHeight}>{circles.map(item => item.update())}</canvas>
//         // <canvas {...props} ref={canvasRef}>{circles.map(item => item.update())}</canvas>
//     )
// }

import React from 'react'

export default function Canvas() {
    return (
        <div>index</div>
    )
}

