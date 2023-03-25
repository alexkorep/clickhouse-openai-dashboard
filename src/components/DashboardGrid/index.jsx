import React from "react";

const ImageGrid = ({ imageSize, numImages }) => {
  const styles = {
    gridContainer: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${imageSize}px, 1fr))`,
      gridGap: "1rem",
      width: "100%",
    },
    image: {
      width: "100%",
      height: "auto",
    },
  };

  const imageUrls = [...Array(numImages)].map(
    (_, i) => `https://picsum.photos/id/${i + 1}/${imageSize}`
  );

  return (
    <div style={styles.gridContainer}>
      {imageUrls.map((url) => (
        <img key={url} style={styles.image} src={url} alt="random image" />
      ))}
    </div>
  );
};

export default ImageGrid;
