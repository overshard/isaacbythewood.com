import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = props => {
  return (
    <>
      <GridLines>
        {Array(6)
          .fill()
          .map((_, i) => {
            const column = i + 1;
            return <GridLine key={column} column={column} />;
          })}
      </GridLines>
      <GridArea>{props.children}</GridArea>
    </>
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Grid;

const GridArea = styled.div`
  display: grid;
  grid-template-columns: 60px 15% 1fr 1fr 15% 60px;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    ". . .    .    . ."
    ". . main main . ."
    ". . .    .    . .";
  min-height: 100vh;
  width: 100%;
  @media (${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 20px 10% 1fr 1fr 10% 20px;
  }
`;

const GridLines = styled(GridArea)`
  position: fixed;
  pointer-events: none;
  @media (${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const GridLine = styled.div`
  border-right: 1px solid rgba(125, 125, 125, 0.2);
  grid-row: 1 / -1;
  grid-column: ${props => props.column};
`;
