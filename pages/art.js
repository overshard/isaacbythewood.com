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
        <span>001</span> Mandelbrot
      </Subheading>
      <Paragraph>Fractals generated using Mandelbrot sets.</Paragraph>
      <ArtContainer>
        <Mandelbrot />
      </ArtContainer>
      <Link
        href="https://github.com/overshard/isaacbythewood.com/blob/master/components/mandelbrot.js"
        rel="noopener noreferrer"
        target="_blank"
      >
        See the Code
      </Link>
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
    @media (${props => props.theme.breakpoints.tablet}) {
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
    ${props => props.theme.colors.blue} 0,
    ${props => props.theme.colors.purple} 100%
  );
  transform: scale(1);
  transition-duration: 250ms;
  transition-property: transform;
  &:hover {
    transform: scale(1.2);
  }
`;
