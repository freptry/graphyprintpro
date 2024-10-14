import React, { useState } from "react";

const Content = ({ dataAr }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const toggleActive = (id) => {
    setActiveItemId(id === activeItemId ? null : id);
  };

  return (
    <div id="images">
      {dataAr.map((item) => (
        <div
          key={item.id}
          className={`img-item ${item.id === activeItemId ? "active" : ""}`}
          onClick={() => toggleActive(item.id)}
        >
          <img
            src={item.imagePath}
            alt={item.title}
            className={`${item.id === activeItemId ? "" : "images"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
