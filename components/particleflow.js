import React, { useEffect, useRef } from "react";
import styles from "./canvas.module.css";
import PropTypes from "prop-types";

const ParticleFlow = ({ options }) => {
  const isActive = options.isActive !== undefined ? options.isActive : true;
  const canvas = useRef(null);

  useEffect(() => {
    // Get the canvas for resizing
    const cvs = canvas.current;

    // Size canvas to the parent
    cvs.width = cvs.offsetWidth;
    cvs.height = cvs.offsetHeight;

    // Add new event listener for resize the canvas on window resize
    const resizeCanvas = () => {
      cvs.width = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    // Clean up event listener when dismounting the component
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    // Get our canvas and context
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    // Flow field configuration
    const cols = Math.floor(cvs.width / 20);
    const rows = Math.floor(cvs.height / 20);
    let time = 0;

    // Simple noise function (Perlin-like)
    const noise = (x, y, z) => {
      return Math.sin(x * 0.01 + z) * Math.cos(y * 0.01 + z) * 0.5 + 0.5;
    };

    // Generate flow field
    const generateFlowField = () => {
      const field = [];
      for (let y = 0; y < rows; y++) {
        field[y] = [];
        for (let x = 0; x < cols; x++) {
          const angle = noise(x, y, time * 0.01) * Math.PI * 2;
          field[y][x] = {
            x: Math.cos(angle),
            y: Math.sin(angle),
          };
        }
      }
      return field;
    };

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * cvs.width;
        this.y = Math.random() * cvs.height;
        this.vx = 0;
        this.vy = 0;
        this.maxSpeed = 2;
        this.maxForce = 0.1;
        this.hue = Math.random() * 360;
        this.alpha = 0.8;
        this.trail = [];
        this.maxTrailLength = 20;
      }

      follow(flowField) {
        const col = Math.floor(this.x / 20);
        const row = Math.floor(this.y / 20);

        if (col >= 0 && col < cols && row >= 0 && row < rows) {
          const desired = flowField[row][col];
          const force = {
            x: desired.x * this.maxSpeed - this.vx,
            y: desired.y * this.maxSpeed - this.vy,
          };

          // Limit force
          const mag = Math.sqrt(force.x * force.x + force.y * force.y);
          if (mag > this.maxForce) {
            force.x = (force.x / mag) * this.maxForce;
            force.y = (force.y / mag) * this.maxForce;
          }

          this.vx += force.x;
          this.vy += force.y;
        }
      }

      update() {
        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x > cvs.width) this.x = 0;
        if (this.x < 0) this.x = cvs.width;
        if (this.y > cvs.height) this.y = 0;
        if (this.y < 0) this.y = cvs.height;

        // Slowly shift hue
        this.hue += 0.5;
        if (this.hue > 360) this.hue = 0;
      }

      draw(ctx) {
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const alpha = (i / this.trail.length) * this.alpha;
          const size = (i / this.trail.length) * 3;

          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${alpha})`;
          ctx.fill();
          ctx.closePath();
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Create particles
    const particles = [];
    const numParticles = options.numParticles || 100;
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrame = null;
    const animate = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      // Generate flow field
      const flowField = generateFlowField();

      // Update and draw particles
      particles.forEach((particle) => {
        particle.follow(flowField);
        particle.update();
        particle.draw(ctx);
      });

      time++;
      if (isActive) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    // Start animation
    if (isActive) {
      animationFrame = window.requestAnimationFrame(animate);
    }

    // Clean up animation frame when dismounting component
    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isActive]);

  return <canvas ref={canvas} className={styles.canvas} />;
};

ParticleFlow.propTypes = {
  options: PropTypes.object,
};

export default ParticleFlow;

// migrated to CSS Modules
