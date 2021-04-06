import React, { useEffect, useRef } from "react";

import * as THREE from "three";

const Dots = () => {
  const navDotsBoxRef = useRef(null);

  useEffect(() => {
    let navAnimationFrame = null;

    let SEPARATION = 100,
      AMOUNTX = 100,
      AMOUNTY = 70;

    let camera, scene, renderer;

    let particles,
      particle,
      count = 0;

    let mouseX = 85,
      mouseY = -342;

    let windowHalfX = navDotsBoxRef.current.clientWidth / 2;
    let windowHalfY = navDotsBoxRef.current.clientHeight / 2;

    const navDotsSceneInit = () => {
      camera = new THREE.PerspectiveCamera(
        120,
        navDotsBoxRef.current.clientWidth / navDotsBoxRef.current.clientHeight,
        1,
        10000
      );
      camera.position.z = 1000;

      scene = new THREE.Scene();

      particles = new Array();

      let PI2 = Math.PI * 2;
      let material = new THREE.ParticleCanvasMaterial({
        color: 0xa8a9af,
        program: function(context) {
          context.beginPath();
          context.arc(0, 0, 0.6, 0, PI2, true);
          context.fill();
        }
      });

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Particle(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
        }
      }

      renderer = new THREE.CanvasRenderer();
      renderer.setSize(
        navDotsBoxRef.current.clientWidth,
        navDotsBoxRef.current.clientHeight
      );
      navDotsBoxRef.current.appendChild(renderer.domElement);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("touchstart", onDocumentTouchStart, false);
      document.addEventListener("touchmove", onDocumentTouchMove, false);
      window.addEventListener("resize", onWindowResize, false);
    };

    const onWindowResize = () => {
      windowHalfX = navDotsBoxRef.current.clientWidth / 2;
      windowHalfY = navDotsBoxRef.current.clientHeight / 2;
      camera.aspect =
        navDotsBoxRef.current.clientWidth / navDotsBoxRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        navDotsBoxRef.current.clientWidth,
        navDotsBoxRef.current.clientHeight
      );
    };

    const onDocumentMouseMove = event => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onDocumentTouchStart = event => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const onDocumentTouchMove = event => {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    };

    const navDotsRender = () => {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }
      renderer.render(scene, camera);
      count += 0.1;

      navAnimationFrame = window.requestAnimationFrame(navDotsRender);
    };

    navDotsSceneInit();

    navAnimationFrame = window.requestAnimationFrame(navDotsRender);

    return () => {
      window.cancelAnimationFrame(navAnimationFrame);

      document.removeEventListener("mousemove", onDocumentMouseMove, false);
      document.removeEventListener("touchstart", onDocumentTouchStart, false);
      document.removeEventListener("touchmove", onDocumentTouchMove, false);
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  return (
    <div
      className="nav-dots-bg"
      ref={navDotsBoxRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}
    ></div>
  );
};

export default Dots;
