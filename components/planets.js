import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Planets = () => {
  const canvas = useRef(null);

  useEffect(() => {
    // Get the canvas for resizing
    const cvs = canvas.current;

    // Size canvas to the parent
    cvs.width = cvs.offsetWidth;
    cvs.height = cvs.offsetHeight;

    // Add new event listener for resize the canvas on window resize
    const resizeCanvas = () => {
      cvs.width = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    // Clean up event listener when dismounting the component
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    // Get the canvas and context
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    // Background
    const grd = ctx.createLinearGradient(0, 0, 0, cvs.height);
    grd.addColorStop(0, "#110f33");
    grd.addColorStop(1, "#040103");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    // Generate all stars
    let stars = [];
    let numStars = 0;
    const maxNumStars = 100;
    while (numStars < maxNumStars) {
      const randomPoint = [
        cvs.width * Math.random(),
        cvs.height * Math.random()
      ];
      stars.push(randomPoint);
      numStars++;
    }

    // Draw stars
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(...star, 1, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
      ctx.fill();
      ctx.closePath();
    });

    // Draw planet
    ctx.beginPath();
    ctx.arc(cvs.width / 2, cvs.height, cvs.width / 8, 0, 2 * Math.PI);
    ctx.fillStyle = `rgb(147, 72, 56)`;
    ctx.fill();
    ctx.closePath();
  }, []);

  return <Canvas ref={canvas} />;
};

export default Planets;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
