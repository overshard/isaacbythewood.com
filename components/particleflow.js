import React, { useEffect, useRef } from "react";
import styles from "@styles/components/canvas.module.css";
import PropTypes from "prop-types";

const ParticleFlow = ({ options }) => {
  const isActive = options.isActive !== undefined ? options.isActive : true;
  const canvas = useRef(null);

  useEffect(() => {
    const cvs = canvas.current;

    cvs.width = cvs.offsetWidth;
    cvs.height = cvs.offsetHeight;

    const resizeCanvas = () => {
      cvs.width = cvs.offsetWidth;
      cvs.height = cvs.offsetHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");

    const cols = Math.floor(cvs.width / 20);
    const rows = Math.floor(cvs.height / 20);
    let time = 0;

    const noise = (x, y, z) => {
      return Math.sin(x * 0.01 + z) * Math.cos(y * 0.01 + z) * 0.5 + 0.5;
    };

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
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x > cvs.width) this.x = 0;
        if (this.x < 0) this.x = cvs.width;
        if (this.y > cvs.height) this.y = 0;
        if (this.y < 0) this.y = cvs.height;

        this.hue += 0.5;
        if (this.hue > 360) this.hue = 0;
      }

      draw(ctx) {
        for (let i = 0; i < this.trail.length; i++) {
          const alpha = (i / this.trail.length) * this.alpha;
          const size = (i / this.trail.length) * 3;

          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${alpha})`;
          ctx.fill();
          ctx.closePath();
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    const particles = [];
    const numParticles = options.numParticles || 100;
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    let animationFrame = null;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      const flowField = generateFlowField();

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

    if (isActive) {
      animationFrame = window.requestAnimationFrame(animate);
    }

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
