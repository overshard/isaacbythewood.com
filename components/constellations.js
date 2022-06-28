import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Constellations = ({ options }) => {
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
    // Get our canvas and draw stars
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    // Generate all stars
    let stars = [];
    let numStars = 0;
    const maxNumStars = options.numStars;
    while (numStars < maxNumStars) {
      const randomPoint = [
        cvs.width * Math.random(),
        cvs.height * Math.random(),
      ];
      stars.push({
        loc: randomPoint,
        dir: [Math.random() > 0.5 ? "+" : "-", Math.random() > 0.5 ? "+" : "-"],
      });
      numStars++;
    }

    // Create draw for use in animation frame rerendering
    let starsAnimationFrame = null;
    const starDistance = 150;
    const drawStars = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // Draw the canvas
      stars.map((star) => {
        // Generate stars
        ctx.beginPath();
        ctx.arc(...star.loc, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.closePath();
        // Generate lines to close stars
        const closeStars = stars.filter((closeStar) => {
          return (
            Math.hypot(
              star.loc[0] - closeStar.loc[0],
              star.loc[1] - closeStar.loc[1]
            ) < starDistance
          );
        });
        closeStars.map((closeStar) => {
          ctx.beginPath();
          ctx.moveTo(...star.loc);
          ctx.lineTo(...closeStar.loc);
          ctx.strokeStyle = `rgba(255, 255, 255, ${
            (starDistance -
              Math.hypot(
                star.loc[0] - closeStar.loc[0],
                star.loc[1] - closeStar.loc[1]
              )) /
            starDistance
          })`;
          ctx.stroke();
          ctx.closePath();
        });
      });

      // Update star locations
      stars = stars.map((star) => {
        // Change star direction when hitting the side of the canvas
        if (star.loc[0] < 0) star.dir[0] = "+";
        else if (star.loc[0] > cvs.width) star.dir[0] = "-";
        if (star.loc[1] < 0) star.dir[1] = "+";
        else if (star.loc[1] > cvs.height) star.dir[1] = "-";

        // Set new star location with direction added to it
        star.loc[0] += parseFloat(`${star.dir[0]}0.5`);
        star.loc[1] += parseFloat(`${star.dir[1]}0.5`);

        // Return star to back to array with new dir and loc
        return star;
      });

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

Constellations.propTypes = {
  options: PropTypes.object,
};

export default Constellations;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
