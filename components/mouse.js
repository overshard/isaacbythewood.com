import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Mouse = () => {
  const pageCursorRef = useRef(null);
  const pageCursorCircleRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      pageCursorRef.current.style.transform = `matrix(1, 0, 0, 1, ${e.clientX}, ${e.clientY})`;
      pageCursorCircleRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0px)`;
    });
    document.addEventListener("mouseover", (e) => {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
        pageCursorCircleRef.current.classList.add("activated");
      } else {
        pageCursorCircleRef.current.classList.remove("activated");
      }
    });
    document.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("mouse-activate")) {
        pageCursorCircleRef.current.classList.add("activated");
      }
    });
  }, []);

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

  &.activated {
    margin: -35px 0 0 -36px;
    width: 70px;
    height: 70px;
    background-color: #ff2d2d;
    opacity: 0.3;
  }
`;
