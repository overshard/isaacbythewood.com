import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Mandelbrot = () => {
  const canvas = useRef(null);

  const drawMandelbrot = () => {
    // Get our canvas and draw stars
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    // Mandelbrot set options
    let mag = 4700;
    const panX = 1.55;
    const panY = 0.105;
    const max = 100;

    // Check if coords are in mandelbrot set
    function checkCoord(x, y) {
      let r = x;
      let i = y;
      for (var itr = 0; itr < max; itr++) {
        const tr = r * r - i * i + x;
        const ti = 2 * r * i + y;
        r = tr;
        i = ti;

        // Return a number as a percentage if not in set for use in coloring
        if (r * i > 5) return (itr / max) * 100;
      }
      return 0; // Return zero if in set
    }

    // Add pixels to canvas
    for (let x = 0; x < cvs.width; x++) {
      for (let y = 0; y < cvs.height; y++) {
        const coordValue = checkCoord(x / mag - panX, y / mag - panY);
        ctx.fillStyle = `hsl(${coordValue * 3}, 100%, ${coordValue}%)`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  };

  useEffect(() => {
    // Get the canvas for resizing
    const cvs = canvas.current;

    // Size canvas to the parent, increase DPI
    cvs.width = cvs.offsetWidth * 2;
    cvs.height = cvs.offsetHeight * 2;

    // Add new event listener for resize the canvas on window resize
    const resizeCanvas = () => {
      cvs.width = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
      drawMandelbrot();
    };
    window.addEventListener("resize", resizeCanvas);

    // Clean up event listener when dismounting the component
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    drawMandelbrot();
  }, []);

  return <Canvas ref={canvas} />;
};

export default Mandelbrot;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
