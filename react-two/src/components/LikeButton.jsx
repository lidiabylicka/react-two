import { useState } from "react";

const heart = (
  <svg xmlns="http://www.w3.org/2000/svg" id="heart">
    <path d="M48.6 85.4 15.7 52.8c-1.4-1.3-2.5-2.8-3.5-4.4-5.4-8.9-4-20.3 3.5-27.7C20 16.4 25.8 14 31.9 14c9.6 0 15.6 5.6 18.1 8.8 2.5-3.2 8.5-8.8 18.1-8.8 6.1 0 11.9 2.4 16.2 6.7 7.4 7.4 8.9 18.8 3.5 27.7-1 1.6-2.1 3.1-3.5 4.4L51.4 85.4c-.8.8-2 .8-2.8 0zM31.9 18c-5.1 0-9.8 2-13.4 5.5-6.1 6.1-7.3 15.5-2.9 22.8.8 1.3 1.8 2.6 2.9 3.7L50 81.2 81.5 50c1.1-1.1 2.1-2.3 2.9-3.7 4.4-7.4 3.3-16.8-2.9-22.8C77.9 20 73.1 18 68.1 18c-7.2 0-13.2 3.9-16.4 9.3-.8 1.3-2.7 1.3-3.5 0-3.1-5.4-9.1-9.3-16.3-9.3z"></path>
    <path
      fill="#00F"
      d="M944-370v1684H-840V-370H944m8-8H-848v1700H952V-378z"
    ></path>
  </svg>
);
const heartMouseDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    id="heartMouseDown"
  >
    <path
      d="M48.6 85.4 15.7 52.8c-1.4-1.3-2.5-2.8-3.5-4.4-5.4-8.9-4-20.3 3.5-27.7C20 16.4 25.8 14 31.9 14c9.6 0 15.6 5.6 18.1 8.8 2.5-3.2 8.5-8.8 18.1-8.8 6.1 0 11.9 2.4 16.2 6.7 7.4 7.4 8.9 18.8 3.5 27.7-1 1.6-2.1 3.1-3.5 4.4L51.4 85.4c-.8.8-2 .8-2.8 0zM31.9 18c-5.1 0-9.8 2-13.4 5.5-6.1 6.1-7.3 15.5-2.9 22.8.8 1.3 1.8 2.6 2.9 3.7L50 81.2 81.5 50c1.1-1.1 2.1-2.3 2.9-3.7 4.4-7.4 3.3-16.8-2.9-22.8C77.9 20 73.1 18 68.1 18c-7.2 0-13.2 3.9-16.4 9.3-.8 1.3-2.7 1.3-3.5 0-3.1-5.4-9.1-9.3-16.3-9.3z"
      fill="#fe636d"
      className="color000000 svgShape"
    ></path>
    <path
      fill="#ff0010"
      d="M944-370v1684H-840V-370H944m8-8H-848v1700H952V-378z"
      className="color0000ff svgShape"
    ></path>
  </svg>
);

const LikeButton = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [count, setCount] = useState(0);

  const handleMouseDown = () => {
    setIsMouseDown(true);
    setCount(count + 1);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <button
      className="like-button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {isMouseDown ? heartMouseDown : heart}
      {count} Liked it!
    </button>
  );
};

export default LikeButton;
