import React from "react";
import styled, { keyframes } from "styled-components";

import Page from "../components/page";
import Constellations from "../components/constellations";
import Mandelbrot from "../components/mandelbrot";

const Art = () => {
  return (
    <Page title="Art" description="Some of my art... what even is art...">
      <Background />
      <Heading>Emergent Generative Art</Heading>
      <Paragraph>
        Autonomously generated entities that are observed to have qualities in a
        group that they do not have on their own.
      </Paragraph>
      <Subheading>Constellations</Subheading>
      <Paragraph>
        Moving stars, circles, on a canvas that attach to nearby stars, with a
        line, to generate constellations. Line opacity is based on star
        distance.
      </Paragraph>
      <ArtContainer>
        <Constellations options={{ numStars: 50 }} />
      </ArtContainer>
      <Subheading>Mandelbrot</Subheading>
      <Paragraph>Fractals generated using Mandelbrot sets.</Paragraph>
      <ArtContainer>
        <Mandelbrot />
      </ArtContainer>
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
    background-color: ${props => props.theme.colors.blue};
  }
`;

const Subheading = styled.h2`
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 2em;
  color: black;
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
`;
