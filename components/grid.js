import React from "react";
import styles from "@styles/components/grid.module.css";
import PropTypes from "prop-types";

const Grid = (props) => {
  return (
    <>
      <div className={styles.gridLines}>
        {Array(6)
          .fill()
          .map((_, i) => {
            const column = i + 1;
            return (
              <div
                key={column}
                className={styles.gridLine}
                style={{ gridColumn: column }}
              />
            );
          })}
      </div>
      <div className={styles.gridArea}>{props.children}</div>
    </>
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Grid;

// migrated to CSS Modules
