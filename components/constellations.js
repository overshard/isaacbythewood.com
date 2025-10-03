import React, { useEffect, useRef } from "react";
import styles from "@styles/components/canvas.module.css";
import PropTypes from "prop-types";

const Constellations = ({ options }) => {
  const isActive = options.isActive !== undefined ? options.isActive : true;
  const canvas = useRef(null);

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
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

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

    let starsAnimationFrame = null;
    const starDistance = 150;
    const drawStars = () => {
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      stars.map((star) => {
        ctx.beginPath();
        ctx.arc(...star.loc, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
        ctx.closePath();
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

      stars = stars.map((star) => {
        if (star.loc[0] < 0) star.dir[0] = "+";
        else if (star.loc[0] > cvs.width) star.dir[0] = "-";
        if (star.loc[1] < 0) star.dir[1] = "+";
        else if (star.loc[1] > cvs.height) star.dir[1] = "-";

        star.loc[0] += parseFloat(`${star.dir[0]}0.5`);
        star.loc[1] += parseFloat(`${star.dir[1]}0.5`);

        return star;
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

Constellations.propTypes = {
  options: PropTypes.object,
};

export default Constellations;
