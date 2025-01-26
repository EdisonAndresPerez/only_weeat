import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";

export default function HorizontalScrollList({ items }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 200; // Ajusta la distancia
      }
    },
    onSwipedRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 200; // Ajusta la distancia
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      ref={containerRef}
      className={`flex flex-row gap-4 overflow-x-auto scrollbar-hide ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-black rounded-full py-2 px-4 cursor-pointer hover:bg-detalles transition-all mt-2"
        >
          <p className="text-nowrap whitespace-nowrap">{item}</p>
        </div>
      ))}
    </div>
  );
}

HorizontalScrollList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};