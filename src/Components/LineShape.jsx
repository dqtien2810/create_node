import React from "react";
import "./Shape.css";

function LineShape(props) {
  const { shapes } = props;

  const lines = [];
  for (let i = 0; i < shapes.length - 1; i++) {
    const shape1 = shapes[i];
    const shape2 = shapes[i + 1];
    lines.push(
      <div
        key={i}
        className="seam"
        style={{
          position: "absolute",
          left: shape1.left,
          top: shape1.top,
          //   width: shape2.left - shape1.left,
          //   height: shape2.top - shape1.top,
          width: "50px",
          height: "2px",
          backgroundColor: "red",
        }}
      />
    );
  }

  return <div>{lines}</div>;
}

export default LineShape;
