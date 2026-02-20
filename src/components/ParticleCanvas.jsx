import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    mouse.current = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    class Particle {
      constructor() {
        this.x = mouse.current.x;
        this.y = mouse.current.y;
        this.size = 4 + Math.random() * 11;
        this.speed = 0.045 + (Math.random() / 12) * 2;
        this.entropy = Math.random() - 0.5;
      }

      update() {
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const theta = -Math.atan2(dx, dy) - Math.PI / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);

        this.x += Math.cos(theta + this.entropy) * distance * this.speed;
        this.y += Math.sin(theta + this.entropy) * distance * this.speed;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    particles.current = Array.from({ length: 40 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.65;

      particles.current.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
