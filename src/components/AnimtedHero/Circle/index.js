// import React, { useEffect, useRef, useState } from 'react'
// export default function Circle({ x, y, dx, dy, r, ctx, color }) {
//     let ref = useRef();

//     // const draw = (ctx) => {
//     //     ctx.beginPath()
//     //     ctx.arc(x, y, r, 0, Math.PI * 2, false);
//     //     ctx.fillStyle = `${color}`;
//     //     ctx.fill();
//     // }
//     // useEffect(() => {
//     //     draw(ctx);
//     // }, [draw]);
//     return (

//     );
// }
class Circle {
    constructor(x, y, dx, dy, radius, ctx) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.ctx = ctx;
    }
    draw() {
        this.ctx.beginPath();
        // (x, y, radius, startAngle float, endAngle Float, drawCountClockWise)
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "#a20021";
        this.ctx.fill();
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.draw();
    }
}

export default Circle;