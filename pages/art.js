import React, { useState } from "react";
import styles from "./art.module.css";
import Image from "next/image";

import Page from "../components/page";
import Constellations from "../components/constellations";
import RetroStars from "../components/retrostars";
import ParticleFlow from "../components/particleflow";

const Art = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);
  const [activeArt, setActiveArt] = useState("constellations"); // Default to constellations playing

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflowY = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxLoaded(false);
    history.replaceState(null, null, " ");
    document.body.style.overflowY = "scroll";
  };

  const handleArtToggle = (artName) => {
    setActiveArt(activeArt === artName ? null : artName);
  };

  return (
    <Page title="Art" description="Some of my art... what even is art...">
      <div className={styles.background} />
      <h1 className={styles.heading}>Acrylic Pours</h1>
      <p className={styles.paragraph}>
        A bit more traditional than my usual art, acrylics mixed with water,
        glue, and silicone on canvas and hit with a heat gun.
      </p>
      <div className={styles.artGrid}>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/006.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/006.webp"
              alt="Molten Copper"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Molten Copper <span>006</span>
          </h2>
        </div>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/005.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/005.webp"
              alt="Nebulas in Triangulum"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Nebulas in Triangulum <span>005</span>
          </h2>
        </div>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/004.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/004.webp"
              alt="Metal on Mars"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Metal on Mars <span>004</span>
          </h2>
        </div>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/003.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/003.webp"
              alt="Water on Jupiter"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Water on Jupiter <span>003</span>
          </h2>
        </div>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/002.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/002.webp"
              alt="Cracks in Clay"
              width={640}
              height={360}
              className="mouse-activate"
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Cracks in Clay <span>002</span>
          </h2>
        </div>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/001.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/001.webp"
              alt="Reef Drop-off"
              width={640}
              height={360}
              className="mouse-activate"
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Reef Drop-off <span>001</span>
          </h2>
        </div>
        <div
          className={styles.artItem}
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/000.webp")
          }
        >
          <span className={styles.cardImage}>
            <Image
              src="/static/images/art/acrylic-pours/000.webp"
              alt="Blood in Waves"
              width={640}
              height={360}
              className="mouse-activate"
            />
          </span>
          <h2 className={styles.artItemHeader}>
            Blood in Waves <span>000</span>
          </h2>
        </div>
      </div>
      <h1 className={styles.heading}>Emergent Generative Art</h1>
      <p className={styles.paragraph}>
        Autonomously generated entities that are observed to have qualities in a
        group that they do not have on their own.
      </p>
      <h2 className={styles.subheading}>
        <span>000</span> Constellations
      </h2>
      <p className={styles.paragraph}>
        Moving stars, circles, on a canvas that attach to nearby stars, with a
        line, to generate constellations. Line opacity is based on star
        distance.
      </p>
      <div className={styles.artContainer}>
        <Constellations
          options={{ numStars: 50, isActive: activeArt === "constellations" }}
        />
        <button
          className={styles.playButton}
          onClick={() => handleArtToggle("constellations")}
          data-active={activeArt === "constellations"}
        >
          {activeArt === "constellations" ? "⏸" : "▶"}
        </button>
      </div>
      <a
        className={styles.artItemButton}
        href="https://github.com/overshard/isaacbythewood.com/blob/master/components/constellations.js"
        rel="noopener noreferrer"
        target="_blank"
      >
        See the Code
      </a>
      <h2 className={styles.subheading}>
        <span>001</span> Retro Stars
      </h2>
      <p className={styles.paragraph}>
        Multiple parallax planes of stars that shift based on cursor position.
        Inspired by the retro art style of Celeste.
      </p>
      <div className={styles.artContainer}>
        <RetroStars
          options={{ numStars: 50, isActive: activeArt === "retrostars" }}
        />
        <button
          className={styles.playButton}
          onClick={() => handleArtToggle("retrostars")}
          data-active={activeArt === "retrostars"}
        >
          {activeArt === "retrostars" ? "⏸" : "▶"}
        </button>
      </div>
      <a
        className={styles.artItemButton}
        href="https://github.com/overshard/isaacbythewood.com/blob/master/components/retrostars.js"
        rel="noopener noreferrer"
        target="_blank"
      >
        See the Code
      </a>
      <h2 className={styles.subheading}>
        <span>002</span> Particle Flow
      </h2>
      <p className={styles.paragraph}>
        Colorful particles flowing through an invisible force field, creating
        organic, flowing patterns with trailing effects. Each particle follows
        the field while leaving a colorful trail that slowly fades.
      </p>
      <div className={styles.artContainer}>
        <ParticleFlow
          options={{ numParticles: 80, isActive: activeArt === "particleflow" }}
        />
        <button
          className={styles.playButton}
          onClick={() => handleArtToggle("particleflow")}
          data-active={activeArt === "particleflow"}
        >
          {activeArt === "particleflow" ? "⏸" : "▶"}
        </button>
      </div>
      <a
        className={styles.artItemButton}
        href="https://github.com/overshard/isaacbythewood.com/blob/master/components/particleflow.js"
        rel="noopener noreferrer"
        target="_blank"
      >
        See the Code
      </a>
      {lightboxImage !== null && (
        <div className={styles.lightboxOverlay} onClick={() => closeLightbox()}>
          <div
            className={
              styles.lightboxLoading + (lightboxLoaded ? " " + styles.hide : "")
            }
          >
            Loading...
          </div>
          <span className={styles.lightboxImageWrapper}>
            <Image
              className={
                styles.lightboxImage + (lightboxLoaded ? " " + styles.show : "")
              }
              src={lightboxImage}
              alt="Lightbox"
              layout="fill"
              sizes="90vw"
              objectFit="contain"
              onLoad={() => setLightboxLoaded(true)}
            />
          </span>
        </div>
      )}
    </Page>
  );
};

export default Art;
