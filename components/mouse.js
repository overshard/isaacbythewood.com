import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Mouse = () => {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Track interactive hover state
  const isInteractiveRef = useRef(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      const target = e.target;
      isInteractiveRef.current =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList?.contains("mouse-activate");
      if (circleRef.current) {
        circleRef.current.classList.toggle("activated", isInteractiveRef.current);
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    let animationFrameId;

    const animate = () => {
      const { x, y } = mousePos.current;

      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (circleRef.current) circleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // start the loop

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <PageCursor ref={cursorRef}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#ff2d2d" fillOpacity="0.9" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" />
        </svg>
      </PageCursor>
      <PageCursorCircle ref={circleRef} />
    </>
  );
};

export default Mouse;

const PageCursor = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  pointer-events: none;
  will-change: transform;
  backface-visibility: hidden;

  @media (${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const PageCursorCircle = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  pointer-events: none;
  margin: -25px 0 0 -26px;
  width: 50px;
  height: 50px;
  border: 1px solid #ff2d2d;
  opacity: 0.7;
  border-radius: 50%;
  transform-origin: center center;
  transition: width 0.4s ease, height 0.4s ease, transform 0.4s ease, opacity 0.4s ease;
  will-change: transform, width, height, opacity;
  backface-visibility: hidden;

  &.activated {
    margin: -35px 0 0 -36px;
    width: 70px;
    height: 70px;
    background-color: #ff2d2d;
    opacity: 0.3;
  }

  @media (${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
