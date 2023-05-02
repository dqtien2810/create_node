import React, { useState } from "react";
import LineShape from "./LineShape";
import "../App.css";

function ShapeDrawer() {
  const [shapes, setShapes] = useState([]);
  const [prevShape, setPrevShape] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    const shapeName = window.prompt("Enter the name of the shape:");
    if (shapeName !== null && shapeName !== "") {
      setShapes([...shapes, shapeName]);
      setPrevShape(shapes[shapes.length - 1]);
    }
  };

  const shapeStyle = {
    square: {
      width: "100px",
      height: "100px",
      backgroundColor: "blue",
      //   marginRight: "50px",
    },
    circle: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: "red",
      //   marginRight: "50px",
    },
    ellipse: {
      width: "150px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: "green",
      //   marginRight: "50px",
    },
    diamond: {
      width: "100px",
      height: "100px",
      background: "purple",
      transform: "rotate(-45deg)",
      marginRight: "25px",
      marginLeft: "25px",
    },
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <div className="view_right-click">
        <h4>Right click here to draw a shape</h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div className="view-shape">
          {shapes.map((shape, index) => (
            <>
              <div key={index} style={shapeStyle[shape]}></div>
              {index === shapes.length - 1 ? (
                ""
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "2px",
                    backgroundColor: "black",
                  }}
                ></div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShapeDrawer;
