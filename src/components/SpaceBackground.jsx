import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for subtle parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Star generator
    const starCount = Math.min(Math.floor((width * height) / 4000), 220);
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: Math.random() > 0.3 ? '#ffffff' : Math.random() > 0.5 ? '#8eb6fd' : '#00d2ff',
        depth: Math.random() * 0.8 + 0.2
      });
    }

    // Shooting stars (meteors)
    const meteors = [];
    const createMeteor = () => {
      meteors.push({
        x: Math.random() * width * 1.2,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 10 + 7,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), // ~45 deg
        opacity: 1,
        fadeSpeed: Math.random() * 0.015 + 0.01,
        color: Math.random() > 0.5 ? '#2c67ed' : '#00d2ff'
      });
    };

    let meteorTimer = 0;

    // Nebula dust particles
    const nebulaClouds = [
      { x: width * 0.2, y: height * 0.3, radius: 350, color: 'rgba(44, 103, 237, 0.08)' },
      { x: width * 0.8, y: height * 0.6, radius: 450, color: 'rgba(121, 40, 202, 0.07)' },
      { x: width * 0.5, y: height * 0.85, radius: 400, color: 'rgba(0, 210, 255, 0.06)' }
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      const offsetX = (mouse.x - width / 2) * 0.03;
      const offsetY = (mouse.y - height / 2) * 0.03;

      // Draw cosmic background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#02040a');
      bgGrad.addColorStop(0.5, '#050c1e');
      bgGrad.addColorStop(1, '#030712');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Nebula Clouds
      nebulaClouds.forEach((cloud) => {
        const grad = ctx.createRadialGradient(
          cloud.x - offsetX * 0.5,
          cloud.y - offsetY * 0.5,
          0,
          cloud.x - offsetX * 0.5,
          cloud.y - offsetY * 0.5,
          cloud.radius
        );
        grad.addColorStop(0, cloud.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cloud.x - offsetX * 0.5, cloud.y - offsetY * 0.5, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        const px = star.x - offsetX * star.depth;
        const py = star.y - offsetY * star.depth;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional star glow for brighter stars
        if (star.size > 1.4 && star.alpha > 0.7) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(px - star.size * 2, py);
          ctx.lineTo(px + star.size * 2, py);
          ctx.moveTo(px, py - star.size * 2);
          ctx.lineTo(px, py + star.size * 2);
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1.0;

      // Handle Meteors
      meteorTimer++;
      if (meteorTimer > 120 && Math.random() < 0.04) {
        createMeteor();
        meteorTimer = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= m.fadeSpeed;

        if (m.opacity <= 0 || m.x < 0 || m.x > width + 200 || m.y > height + 200) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        meteorGrad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity})`);
        meteorGrad.addColorStop(0.3, m.color === '#2c67ed' ? `rgba(44, 103, 237, ${m.opacity * 0.8})` : `rgba(0, 210, 255, ${m.opacity * 0.8})`);
        meteorGrad.addColorStop(1, 'transparent');

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Meteor head spark
        ctx.fillStyle = `rgba(255, 255, 255, ${m.opacity})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#02040a' }}
    />
  );
}
