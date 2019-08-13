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

    // Get center of the canvas
    const ctr = [cvs.width / 2, cvs.height / 2];

    // Background
    const grd = ctx.createLinearGradient(0, 0, 0, cvs.height);
    grd.addColorStop(0, "#110f33");
    grd.addColorStop(1, "#040103");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    // Generate all stars
    let stars = [];
    let numStars = 0;
    const maxNumStars = 150;
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

    // Draw horizontal lines
    let currentLine = 0;
    let maxLines = 15;
    let start = cvs.height;
    let offset = 30;
    let quotient = 0.9;
    ctx.strokeStyle = "#dd299c";
    while (currentLine < maxLines) {
      start = start - offset;
      ctx.beginPath();
      ctx.moveTo(0, start);
      ctx.lineTo(cvs.width, start);
      ctx.stroke();
      offset = offset * quotient;
      currentLine++;
    }
    currentLine = 0;
    start = cvs.height;
    offset = 30;
    ctx.filter = "blur(3px)";
    while (currentLine < maxLines) {
      start = start - offset;
      ctx.beginPath();
      ctx.moveTo(0, start);
      ctx.lineTo(cvs.width, start);
      ctx.stroke();
      offset = offset * quotient;
      currentLine++;
    }
    ctx.filter = "none";

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(ctr[0], ctr[1] - 100);
    ctx.lineTo(ctr[0] + 100, ctr[1] + 75);
    ctx.lineTo(ctr[0] - 100, ctr[1] + 75);
    ctx.closePath();
    ctx.fillStyle = "#f28b42";
    ctx.fill();

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(ctr[0], ctr[1] - 25);
    ctx.lineTo(ctr[0] + 50, ctr[1] + 75);
    ctx.lineTo(ctr[0] - 50, ctr[1] + 75);
    ctx.closePath();
    ctx.fillStyle = "#fdf84f";
    ctx.fill();
  }, []);

  return <Canvas ref={canvas} />;
};

export default Planets;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
