import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from "../components/page";

const Index = () => {
  const words = ["Developer", "SysAdmin", "DevOps", "Consultant"];
  const [currentWords, setCurrentWord] = useState([words[0]]);
  const currentWordsRef = useRef(currentWords);
  currentWordsRef.current = currentWords;
  const [canvasSize, setCanvasSize] = useState({
    width: 1280,
    height: 800
  });
  const canvasSizeRef = useRef(canvasSize);
  canvasSizeRef.current = canvasSize;
  const canvas = useRef(null);

  useEffect(() => {
    // Swap words interval
    const wordsInterval = setInterval(() => {
      let nextWordIndex = words.indexOf(currentWordsRef.current[0]) + 1;
      if (nextWordIndex < words.length) setCurrentWord([words[nextWordIndex]]);
      else setCurrentWord([words[0]]);
    }, 2000);

    // Set canvas on resize
    const resizeCanvas = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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

    return () => {
      // Clear words interval
      clearInterval(wordsInterval);
      // Clear window resizeing canvas
      window.removeEventListener("resize", resizeCanvas);
      // Cancel star drawing animation frame rendering
      window.cancelAnimationFrame(starsAnimationFrame);
    };
  }, []);

  return (
    <Page title="Full-Stack Developer located in Morganton, NC">
      <Background
        src="/static/images/astronomy-beautiful-clouds-355465.jpg"
        alt="Picture of the night's sky with stars."
      />
      <Canvas ref={canvas} {...canvasSize} />
      <TransitionGroup component={Words}>
        {currentWords.map(word => {
          return (
            <CSSTransition key={word} timeout={1000} classNames="transition">
              <Word>{word}</Word>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <Description>Full-Stack Developer located in Morganton, NC</Description>
      <Name>Isaac</Name>
      <Name style={{ animationDelay: "100ms" }}>Bythewood</Name>
    </Page>
  );
};

export default Index;

const FadeStart = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideStart = keyframes`
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -3;
  object-fit: cover;
`;

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

const Words = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  mix-blend-mode: darken;
  background: rgba(0, 0, 0, 0.6);
`;

const Word = styled.h3`
  opacity: 0.2;
  font-size: 14vw;
  text-transform: uppercase;
  margin: 0;
  position: absolute;

  &.transition-appear,
  &.transition-enter {
    opacity: 0;
    transform: translateY(-200px);
  }
  &.transition-appear-active,
  &.transition-enter-active {
    opacity: 0.2;
    transform: translateY(0);
    transition-duration: 1000ms;
    transition-property: opacity, transform;
  }
  &.transition-appear-done,
  &.transition-enter-done {
    opacity: 0.2;
  }
  &.transition-exit {
    transform: translateY(0);
    opacity: 0.2;
  }
  &.transition-exit-active {
    opacity: 0;
    transform: translateY(200px);
    transition-duration: 1000ms;
    transition-property: opacity, transform;
  }
`;

const Description = styled.h1`
  font-size: 3.5em;
  font-weight: bolder;
  &::before {
    content: "";
    display: block;
    width: 75px;
    height: 5px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.blue};
  }
  opacity: 0;
  animation-name: ${FadeStart};
  animation-duration: 1500ms;
  animation-fill-mode: forwards;
  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 2em;
  }
`;

const Name = styled.h2`
  font-size: 2.5em;
  text-transform: uppercase;
  padding: 5px;
  margin: 0 0 2px 0;
  float: left;
  clear: left;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.blue} 0,
    ${props => props.theme.colors.purple} 100%
  );
  transform: translateX(-100vw);
  animation-name: ${SlideStart};
  animation-duration: 750ms;
  animation-fill-mode: forwards;
  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5em;
  }
`;
