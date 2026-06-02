import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <div
      className="fixed top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none z-0 transition-all duration-200"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    ></div>

  );
}

export default CursorGlow;