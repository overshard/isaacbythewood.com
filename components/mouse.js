import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const Mouse = () => {
  const pageCursorRef = useRef(null);
  const pageCursorCircleRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  // Throttled animation using requestAnimationFrame
  const updateCursorPosition = useCallback(() => {
    if (pageCursorRef.current && pageCursorCircleRef.current) {
      const { x, y } = mousePositionRef.current;

      // Use transform3d for better GPU acceleration
      pageCursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      pageCursorCircleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }, []);

  // Optimized mousemove handler with requestAnimationFrame throttling
  const handleMouseMove = useCallback(
    (e) => {
      // Early return if refs are not ready
      if (!pageCursorRef.current || !pageCursorCircleRef.current) return;

      mousePositionRef.current = { x: e.clientX, y: e.clientY };

      // Cancel previous frame if it hasn't executed yet
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Schedule update for next frame
      animationFrameRef.current = requestAnimationFrame(updateCursorPosition);
    },
    [updateCursorPosition]
  );

  // Combined mouseover handler for better performance
  const handleMouseOver = useCallback((e) => {
    // Safety check for both refs and event target
    if (!pageCursorCircleRef.current || !e.target) return;

    const isInteractive =
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "A" ||
      (e.target.classList && e.target.classList.contains("mouse-activate"));

    if (isInteractive) {
      pageCursorCircleRef.current.classList.add("activated");
    } else {
      pageCursorCircleRef.current.classList.remove("activated");
    }
  }, []);

  useEffect(() => {
    // Add event listeners with passive option for better performance
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Cleanup function to remove event listeners and cancel animation frames
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <>
      <PageCursor ref={pageCursorRef}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="#ff2d2d"
          fillOpacity="0.9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </PageCursor>
      <PageCursorCircle ref={pageCursorCircleRef} />
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
  border-radius: 110%;
  transform-origin: 100% 100%;
  transition: width 0.4s ease, height 0.4s ease, transform 0.4s ease,
    opacity 0.4s ease;
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
