import React, { useEffect, useRef, useState } from "react";
import styles from "@styles/components/canvas.module.css";
import PropTypes from "prop-types";

const RetroStars = ({ options }) => {
  const isActive = options.isActive !== undefined ? options.isActive : true;
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
    const mouseMove = (evt) => {
      setMousePosition({
        x: evt.clientX,
        y: evt.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const cvs = canvas.current;

    cvs.width = cvs.offsetWidth;
    cvs.height = cvs.offsetHeight;

    const resizeCanvas = () => {
      cvs.width = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    let starSizeInterval = null;
    if (isActive) {
      starSizeInterval = setInterval(() => {
        const newStarSize = starSizeRef.current + 1;
        if (newStarSize < 4) {
          setStarSize(newStarSize);
        } else {
          setStarSize(0);
        }
      }, 500);
    }

    return () => {
      if (starSizeInterval) {
        clearInterval(starSizeInterval);
      }
    };
  }, [isActive]);

  useEffect(() => {
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    const colors = ["white", "yellow", "red", "green", "blue"];

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

    let starsAnimationFrame = null;
    const drawStars = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      const smallStarOffset = offsetStar(25);
      const mediumStarOffset = offsetStar(75);
      const largeStarOffset = offsetStar(125);

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

      if (isActive) {
        starsAnimationFrame = window.requestAnimationFrame(drawStars);
      }
    };

    if (isActive) {
      starsAnimationFrame = window.requestAnimationFrame(drawStars);
    }

    return () => {
      window.cancelAnimationFrame(starsAnimationFrame);
    };
  }, [isActive]);

  return <canvas ref={canvas} className={styles.canvas} />;
};

RetroStars.propTypes = {
  options: PropTypes.object,
};

export default RetroStars;
