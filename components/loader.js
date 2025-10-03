import React from "react";
import styles from "@styles/components/loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.grid}>
        {Array(6)
          .fill()
          .map((_, i) => {
            const column = i + 1;
            return (
              <div
                key={column}
                className={styles.gridColumn}
                style={{
                  gridColumn: column,
                  ["--delay"]: `${column * 100}ms`,
                }}
              />
            );
          })}
      </div>
    </>
  );
};

export default Loader;
