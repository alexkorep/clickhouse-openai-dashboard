import React, { useState, useEffect } from "react";

const DashboardGrid = ({ children, width }) => {
  const [numColumns, setNumColumns] = useState(0);

  useEffect(() => {
    const calculateColumns = () => {
      const screenWidth = window.innerWidth;
      const newNumColumns = Math.floor(screenWidth / width);
      setNumColumns(newNumColumns);
    };
    calculateColumns();
    window.addEventListener("resize", calculateColumns);
    return () => {
      window.removeEventListener("resize", calculateColumns);
    };
  }, [width]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    gap: "10px",
    padding: "10px"
  };
  return <div style={gridStyle}>{children}</div>;
};

export default DashboardGrid;
