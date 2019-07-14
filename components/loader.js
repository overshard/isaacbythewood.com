import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <>
      <Grid>
        {Array(6)
          .fill()
          .map((_, i) => {
            const column = i + 1;
            return <GridColumn key={column} column={column} />;
          })}
      </Grid>
    </>
  );
};

export default Loader;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 15% 1fr 1fr 15% 60px;
  grid-template-rows: 1fr;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 9999;
  pointer-events: none;
`;

const GridColumn = styled.div`
  grid-column: ${props => props.column};
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.primary};
    animation: fold-up 1000ms normal forwards;
    animation-delay: ${props => props.column * 100}ms;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    background-color: white;
    border-right: 1px solid white;
    animation: fold-up 1000ms normal forwards;
    animation-delay: ${props => props.column * 100}ms;
  }
  @keyframes fold-up {
    from {
      height: 100vh;
    }

    to {
      height: 0;
    }
  }
`;
