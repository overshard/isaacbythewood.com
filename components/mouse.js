import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Mouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    window.onmousemove = event => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
        active: event.target.tagName === "A" ? true : false
      });
    };
  }, []);

  return (
    <Cursor>
      <Pointer style={{ top: position.y, left: position.x }} />
      <Follower
        className={position.active ? "active" : null}
        style={{ top: position.y, left: position.x }}
      />
    </Cursor>
  );
};

export default Mouse;

const cursorSize = 10;

const Cursor = styled.div`
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  @media (pointer: none) {
    display: none;
  }
`;

const Pointer = styled.div`
  width: ${cursorSize}px;
  height: ${cursorSize}px;
  border-radius: ${cursorSize}px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.7);
  position: absolute;
`;

const Follower = styled.div`
  width: ${cursorSize * 4}px;
  height: ${cursorSize * 4}px;
  border-radius: ${cursorSize * 4}px;
  transform: translate(-50%, -50%);
  border-width: 1px;
  border-style: solid;
  background-color: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.7);
  position: absolute;
  box-sizing: border-box;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  &.active {
    width: ${cursorSize * 6}px;
    height: ${cursorSize * 6}px;
    border-radius: ${cursorSize * 6}px;
  }
`;
