"use client"
import { useEffect, useRef, useState } from 'react';

const MouseCursorTwo = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);
  
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setTargetPosition({
          x: event.clientX,
          y: event.clientY
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    useEffect(() => {
      const moveCursor = () => {
        setPosition((prevPosition) => {
          const xDiff = targetPosition.x - prevPosition.x;
          const yDiff = targetPosition.y - prevPosition.y;
          const speed = 0.2; // Adjust speed (0.1 = slow, 1 = fast)
  
          return {
            x: prevPosition.x + xDiff * speed,
            y: prevPosition.y + yDiff * speed,
          };
        });
        requestRef.current = requestAnimationFrame(moveCursor);
      };
  
      requestRef.current = requestAnimationFrame(moveCursor);
  
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }, [targetPosition]);
  
  return (
    <div
      className="custom-cursor-two"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default MouseCursorTwo;