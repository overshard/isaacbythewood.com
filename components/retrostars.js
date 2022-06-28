import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RetroStars = ({ options }) => {
  const canvas = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 640, y: 400 });
  const mousePositionRef = useRef(mousePosition);
  mousePositionRef.current = mousePosition;
  const [starSize, setStarSize] = useState(0);
  const starSizeRef = useRef(starSize);
  starSizeRef.current = starSize;

  const offsetStar = (maxOffset) => {
    return {
      x: -Math.floor(
        (mousePositionRef.current.x / window.innerWidth) * maxOffset
      ),
      y: -Math.floor(
        (mousePositionRef.current.y / window.innerHeight) * maxOffset
      ),
    };
  };

  useEffect(() => {
    // Mouse move event function
    const mouseMove = (evt) => {
      setMousePosition({
        x: evt.clientX,
        y: evt.clientY,
      });
    };

    // Create event listener
    window.addEventListener("mousemove", mouseMove);

    // Clean up event listener when dismounting the component
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

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
    // Setup interval to change star sizes
    const starSizeInterval = setInterval(() => {
      const newStarSize = starSizeRef.current + 1;
      if (newStarSize < 4) {
        setStarSize(newStarSize);
      } else {
        setStarSize(0);
      }
    }, 500);

    // Clean up interval when dismounting the component
    return () => {
      clearInterval(starSizeInterval);
    };
  }, []);

  useEffect(() => {
    // Get our canvas and draw stars
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    // Fill colors
    const colors = ["white", "yellow", "red", "green", "blue"];

    // Generate all stars
    let smallStars = [];
    let mediumStars = [];
    let largeStars = [];
    let numStars = 0;
    const maxNumStars = options.numStars;
    while (numStars < maxNumStars) {
      smallStars.push({
        loc: [cvs.width * Math.random(), cvs.height * Math.random()],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
      if (mediumStars.length < numStars / 4) {
        mediumStars.push({
          loc: [cvs.width * Math.random(), cvs.height * Math.random()],
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      if (largeStars.length < numStars / 8) {
        largeStars.push({
          loc: [cvs.width * Math.random(), cvs.height * Math.random()],
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      numStars++;
    }

    // Create draw for use in animation frame rerendering
    let starsAnimationFrame = null;
    const drawStars = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // Get offsets
      const smallStarOffset = offsetStar(25);
      const mediumStarOffset = offsetStar(75);
      const largeStarOffset = offsetStar(125);

      // Draw the canvas
      smallStars.forEach(({ loc, color }) => {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(
          loc[0] + smallStarOffset.x,
          loc[1] + smallStarOffset.y,
          5,
          5
        );
        ctx.closePath();
      });
      mediumStars.forEach(({ loc, color }) => {
        if (starSizeRef.current === 0 || starSizeRef.current === 2) {
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.fillRect(
            loc[0] + mediumStarOffset.x,
            loc[1] + mediumStarOffset.y,
            5,
            5
          );
          ctx.closePath();
        } else {
          const squares = [
            [loc[0] + mediumStarOffset.x, loc[1] + mediumStarOffset.y],
            [loc[0] - 5 + mediumStarOffset.x, loc[1] + mediumStarOffset.y],
            [loc[0] + mediumStarOffset.x, loc[1] - 5 + mediumStarOffset.y],
            [loc[0] + 5 + mediumStarOffset.x, loc[1] + mediumStarOffset.y],
            [loc[0] + mediumStarOffset.x, loc[1] + 5 + mediumStarOffset.y],
          ];
          squares.forEach((square) => {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(...square, 5, 5);
            ctx.closePath();
          });
        }
      });
      largeStars.forEach(({ loc, color }) => {
        if (starSizeRef.current === 0) {
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.fillRect(
            loc[0] + largeStarOffset.x,
            loc[1] + largeStarOffset.y,
            5,
            5
          );
          ctx.closePath();
        } else if (starSizeRef.current === 1 || starSizeRef.current === 3) {
          const squares = [
            [loc[0] + largeStarOffset.x, loc[1] + largeStarOffset.y],
            [loc[0] - 5 + largeStarOffset.x, loc[1] + largeStarOffset.y],
            [loc[0] + largeStarOffset.x, loc[1] - 5 + largeStarOffset.y],
            [loc[0] + 5 + largeStarOffset.x, loc[1] + largeStarOffset.y],
            [loc[0] + largeStarOffset.x, loc[1] + 5 + largeStarOffset.y],
          ];
          squares.forEach((square) => {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(...square, 5, 5);
            ctx.closePath();
          });
        } else {
          const squares = [
            [loc[0] - 10 + largeStarOffset.x, loc[1] + largeStarOffset.y],
            [loc[0] + largeStarOffset.x, loc[1] - 10 + largeStarOffset.y],
            [loc[0] + 10 + largeStarOffset.x, loc[1] + largeStarOffset.y],
            [loc[0] + largeStarOffset.x, loc[1] + 10 + largeStarOffset.y],
          ];
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.fillRect(
            loc[0] - 5 + largeStarOffset.x,
            loc[1] - 5 + largeStarOffset.y,
            15,
            15
          );
          ctx.closePath();
          squares.forEach((square) => {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(...square, 5, 5);
            ctx.closePath();
          });
          ctx.beginPath();
          ctx.fillStyle = "black";
          ctx.fillRect(
            loc[0] + largeStarOffset.x,
            loc[1] + largeStarOffset.y,
            5,
            5
          );
          ctx.closePath();
        }
      });

      // Draw again
      starsAnimationFrame = window.requestAnimationFrame(drawStars);
    };

    // Start the initial drawing and our recursion will take it from there
    starsAnimationFrame = window.requestAnimationFrame(drawStars);

    // Cancel star drawing animation frame rendering when dismounting component
    return () => {
      window.cancelAnimationFrame(starsAnimationFrame);
    };
  }, []);

  return <Canvas ref={canvas} />;
};

RetroStars.propTypes = {
  options: PropTypes.object,
};

export default RetroStars;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
