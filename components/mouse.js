import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Mouse = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    window.onmousemove = event => {
      setPosition(event);
    };
  }, []);

  if (position === null) return null;

  return (
    <Cursor>
      <Pointer
        style={{
          top: position.pageY,
          left: position.pageX
        }}
      />
      <Follower
        style={{
          top: position.pageY,
          left: position.pageX
        }}
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
  transform: translate(-${cursorSize / 2}px, -${cursorSize / 2}px);
  background-color: rgba(255, 0, 0, 0.7);
  position: absolute;
`;

const Follower = styled.div`
  width: ${cursorSize * 5}px;
  height: ${cursorSize * 5}px;
  border-radius: ${cursorSize * 5}px;
  transform: translate(-${cursorSize * 2.5}px, -${cursorSize * 2.5}px);
  border-width: 1px;
  border-style: solid;
  background-color: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.7);
  position: absolute;
  box-sizing: border-box;
`;
