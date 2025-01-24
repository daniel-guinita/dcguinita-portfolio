import React, { useEffect, useRef } from 'react';

const RainEffect = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      // Function to resize the canvas
      const resizeCanvas = () => {
        canvas.width = window.innerWidth; // Full width of the viewport
        canvas.height = document.body.scrollHeight; // Full height of the page
      };
  
      // Resize the canvas initially and on window resize
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
  
      // Create raindrops
      const raindrops = [];
      const numRaindrops = 150;
  
      for (let i = 0; i < numRaindrops; i++) {
        raindrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 5 + 2,
          length: Math.random() * 20 + 10,
        });
      }
  
      // Animation loop to draw the rain
      const drawRain = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
  
        raindrops.forEach((drop) => {
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x, drop.y + drop.length);
          ctx.stroke();
  
          drop.y += drop.speed;
          if (drop.y > canvas.height) {
            drop.y = -drop.length; // Reset drop to start at the top
          }
        });
  
        requestAnimationFrame(drawRain);
      };
  
      drawRain();
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    );
  };
  
  export default RainEffect;
  