import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Constellations = () => {
  const [canvasSize, setCanvasSize] = useState({
    width: 1280,
    height: 800
  });
  const canvasSizeRef = useRef(canvasSize);
  canvasSizeRef.current = canvasSize;
  const canvas = useRef(null);

  useEffect(() => {
    // Set canvas on resize
    const resizeCanvas = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    // Stop listening for resizes when dismounting component
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    // Get our canvas and draw stars
    const ctx = canvas.current.getContext("2d");

    // Generate all stars
    let stars = [];
    let numStars = 0;
    const maxNumStars = 150;
    while (numStars < maxNumStars) {
      const randomPoint = [
        window.innerWidth * Math.random(),
        window.innerHeight * Math.random()
      ];
      stars.push({
        loc: randomPoint,
        dir: [Math.random() > 0.5 ? "+" : "-", Math.random() > 0.5 ? "+" : "-"]
      });
      numStars++;
    }

    // Create draw for use in animation frame rerendering
    let starsAnimationFrame = null;
    const drawStars = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw the canvas
      stars.map(star => {
        // Generate stars
        ctx.beginPath();
        ctx.arc(...star.loc, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.closePath();
        // Generate lines to close stars
        const closeStars = stars.filter(closeStar => {
          return (
            Math.hypot(
              star.loc[0] - closeStar.loc[0],
              star.loc[1] - closeStar.loc[1]
            ) < 100
          );
        });
        closeStars.map(closeStar => {
          ctx.beginPath();
          ctx.moveTo(...star.loc);
          ctx.lineTo(...closeStar.loc);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(100 -
            Math.hypot(
              star.loc[0] - closeStar.loc[0],
              star.loc[1] - closeStar.loc[1]
            )) /
            100})`;
          ctx.stroke();
          ctx.closePath();
        });
      });

      // Update star locations
      stars = stars.map(star => {
        // Change star direction when hitting the side of the canvas
        if (star.loc[0] < 0) star.dir[0] = "+";
        else if (star.loc[0] > window.innerWidth) star.dir[0] = "-";
        if (star.loc[1] < 0) star.dir[1] = "+";
        else if (star.loc[1] > window.innerHeight) star.dir[1] = "-";

        // Set new star location with direction added to it
        star.loc[0] += parseFloat(`${star.dir[0]}0.5`);
        star.loc[1] += parseFloat(`${star.dir[1]}0.5`);

        // Return star to back to array with new dir and loc
        return star;
      });

      starsAnimationFrame = window.requestAnimationFrame(drawStars);
    };

    starsAnimationFrame = window.requestAnimationFrame(drawStars);

    // Cancel star drawing animation frame rendering when dismounting component
    return () => {
      window.cancelAnimationFrame(starsAnimationFrame);
    };
  }, []);

  return <Canvas ref={canvas} {...canvasSize} />;
};

export default Constellations;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
`;
