import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import Page from "../components/page";
import Constellations from "../components/constellations";
import RetroStars from "../components/retrostars";

const Art = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

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

  const aiArtTag = () => {
    return (
      <a
        href="https://github.com/overshard/ai-art"
        target="_blank"
        rel="noopener noreferrer"
      >
        on GitHub
      </a>
    );
  };

  return (
    <Page title="Art" description="Some of my art... what even is art...">
      <Background />
      <Heading>AI Generated</Heading>
      <Paragraph>
        Using a variety of generative adversarial networks, algorithms, and
        inputs. You can see some of my code for this {aiArtTag()} to try it
        yourself.
      </Paragraph>
      <AICards>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/009.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>009</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/008.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>008</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/007.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>007</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/006.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>006</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/005.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>005</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/004.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>004</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/003.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>003</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/002.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>002</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/001.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>001</AICardHeading>
        </AICard>
        <AICard>
          <AICardImage>
            <Image
              src="/static/images/art/ai-generated/000.webp"
              width={256}
              height={256}
              priority={true}
            />
          </AICardImage>
          <AICardHeading>000</AICardHeading>
        </AICard>
      </AICards>
      <Heading>Acrylic Pours</Heading>
      <Paragraph>
        A bit more traditional than my usual art, acrylics mixed with water,
        glue, and silicone on canvas and hit with a heat gun.
      </Paragraph>
      <Cards>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/006.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/006.webp"
              alt="Molten Copper"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </CardImage>
          <CardHeading>
            Molten Copper <span>006</span>
          </CardHeading>
        </Card>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/005.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/005.webp"
              alt="Nebulas in Triangulum"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </CardImage>
          <CardHeading>
            Nebulas in Triangulum <span>005</span>
          </CardHeading>
        </Card>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/004.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/004.webp"
              alt="Metal on Mars"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </CardImage>
          <CardHeading>
            Metal on Mars <span>004</span>
          </CardHeading>
        </Card>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/003.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/003.webp"
              alt="Water on Jupiter"
              width={640}
              height={360}
              className="mouse-activate"
              priority={true}
            />
          </CardImage>
          <CardHeading>
            Water on Jupiter <span>003</span>
          </CardHeading>
        </Card>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/002.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/002.webp"
              alt="Cracks in Clay"
              width={640}
              height={360}
              className="mouse-activate"
            />
          </CardImage>
          <CardHeading>
            Cracks in Clay <span>002</span>
          </CardHeading>
        </Card>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/001.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/001.webp"
              alt="Reef Drop-off"
              width={640}
              height={360}
              className="mouse-activate"
            />
          </CardImage>
          <CardHeading>
            Reef Drop-off <span>001</span>
          </CardHeading>
        </Card>
        <Card
          onClick={() =>
            openLightbox("/static/images/art/acrylic-pours/000.webp")
          }
        >
          <CardImage>
            <Image
              src="/static/images/art/acrylic-pours/000.webp"
              alt="Blood in Waves"
              width={640}
              height={360}
              className="mouse-activate"
            />
          </CardImage>
          <CardHeading>
            Blood in Waves <span>000</span>
          </CardHeading>
        </Card>
      </Cards>
      <Heading>Emergent Generative Art</Heading>
      <Paragraph>
        Autonomously generated entities that are observed to have qualities in a
        group that they do not have on their own.
      </Paragraph>
      <Subheading>
        <span>000</span> Constellations
      </Subheading>
      <Paragraph>
        Moving stars, circles, on a canvas that attach to nearby stars, with a
        line, to generate constellations. Line opacity is based on star
        distance.
      </Paragraph>
      <ArtContainer>
        <Constellations options={{ numStars: 50 }} />
      </ArtContainer>
      <Link
        href="https://github.com/overshard/isaacbythewood.com/blob/master/components/constellations.js"
        rel="noopener noreferrer"
        target="_blank"
      >
        See the Code
      </Link>
      <Subheading>
        <span>001</span> Retro Stars
      </Subheading>
      <Paragraph>
        Multiple parallax planes of stars that shift based on cursor position.
        Inspired by the retro art style of Celeste.
      </Paragraph>
      <ArtContainer>
        <RetroStars options={{ numStars: 50 }} />
      </ArtContainer>
      <Link
        href="https://github.com/overshard/isaacbythewood.com/blob/master/components/retrostars.js"
        rel="noopener noreferrer"
        target="_blank"
      >
        See the Code
      </Link>
      {lightboxImage !== null && (
        <Lightbox onClick={() => closeLightbox()}>
          <LightboxLoading className={lightboxLoaded && "hide"}>
            Loading...
          </LightboxLoading>
          <LightboxImage
            src={lightboxImage}
            className={lightboxLoaded && "show"}
            onLoad={() => setLightboxLoaded(true)}
          />
        </Lightbox>
      )}
    </Page>
  );
};

export default Art;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: -2;
`;

const Heading = styled.h1`
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: black;

  &::before {
    content: "";
    display: block;
    width: 50px;
    height: 5px;
    margin-bottom: 20px;
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

const Subheading = styled.h2`
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 2em;
  color: black;
  position: relative;

  & > span {
    font-family: monospace;
    font-size: 0.8em;
    padding: 3px 9px;
    background-color: black;
    color: white;
    position: absolute;
    right: 100%;
    margin-right: 10px;
    top: 20%;

    @media (${(props) => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 300;
  color: black;
`;

const ArtContainer = styled.div`
  width: 100%;
  height: 500px;
  max-height: 100vh;
  background: black;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;

const Link = styled.a`
  padding: 10px 15px;
  font-size: 1.2em;
  text-decoration: none;
  background-color: black;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 2px;
  color: white;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.blue} 0,
    ${(props) => props.theme.colors.purple} 100%
  );
  transform: scale(1);
  transition-duration: 250ms;
  transition-property: transform;

  &:hover {
    transform: scale(1.2);
  }
`;

const AICards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const AICard = styled.div`
  background-color: black;
  color: white;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0);
  transition-duration: 200ms;
  transition-property: box-shadow, transform;
  transition-timing-function: ease-in;
  width: calc(256px);
  display: flex;
  flex-direction: column;
  position: relative;
  // change perspective to tilt the card slightly
  transform: perspective(600px) rotateX(5deg) rotateY(5deg);
  z-index: 10;

  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
    transform: perspective(600px) rotateX(0deg) rotateY(0deg) scale(1.3);
    z-index: 20;
  }
`;

const AICardHeading = styled.h2`
  color: black;
  font-family: monospace;
  font-weight: 100;
  font-size: 1.2em;
  background-color: white;
  padding: 3px 7px;
  position: absolute;
  top: -7px;
  right: -10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const AICardImage = styled.span`
  width: 256px;
  height: 256px;

  & img {
    object-fit: cover;
    object-position: center;
    width: 256px;
    height: 256px;
  }
`;

const Cards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: black;
  color: white;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0);
  transition-duration: 200ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in;
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const CardHeading = styled.h2`
  margin: 0;
  margin-top: -5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;

  & > span {
    color: black;
    font-family: monospace;
    font-weight: 100;
    font-size: 0.9em;
    background-color: white;
    padding: 3px 7px;
  }
`;

const CardImage = styled.span`
  & img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 360px;
  }
`;

const Lightbox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightboxImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  padding: 5vw;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 250ms;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

const LightboxLoading = styled.div`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  color: white;
  font-family: monospace;
  font-size: 3em;
  visibility: visible;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 250ms;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }
`;
