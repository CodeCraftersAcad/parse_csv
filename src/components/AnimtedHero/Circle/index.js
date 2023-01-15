import React, { useEffect, useRef, useState } from 'react'
export default function Circle({ x, y, dx, dy, r, ctx, color }) {
    let ref = useRef();
    // const [arc, setArc] = useState({
    //     thisX: 0,
    //     thisY: 0,
    //     thisDX: 0,
    //     thisDY: 0,
    //     thisR: 0,
    //     thisCTX: null,
    //     thisColor: null,
    // })
    const draw = (ctx) => {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.fillStyle = `${color}`;
        ctx.fill();
    }
    useEffect(() => {
        draw(ctx);
    }, [draw]);
    return (
        <canvas
            ref={ref}
            style={{ width: '100px', height: '100px' }}
        />
    );
}
