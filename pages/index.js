import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Image from "next/image";

import Page from "../components/page";
import Dots from "../components/dots";

const Index = () => {
  const words = ["Developer", "SysAdmin", "DevOps", "Consultant"];
  const [currentWords, setCurrentWord] = useState([words[0]]);
  const currentWordsRef = useRef(currentWords);
  currentWordsRef.current = currentWords;

  useEffect(() => {
    // Swap words interval
    const wordsInterval = setInterval(() => {
      let nextWordIndex = words.indexOf(currentWordsRef.current[0]) + 1;
      if (nextWordIndex < words.length) setCurrentWord([words[nextWordIndex]]);
      else setCurrentWord([words[0]]);
    }, 2000);
    // Clear words interval and constellation resize on component dismount
    return () => {
      clearInterval(wordsInterval);
    };
  }, []);

  return (
    <Page title="Full-Stack Developer located in Morganton, NC">
      <ImageWrapper>
        <Image
          src="/static/images/art/005.jpg"
          alt="#005 Nebulas in Triangulum"
          loading="eager"
          layout="fill"
          priority={true}
        />
      </ImageWrapper>
      <Dots />
      <TransitionGroup component={Words}>
        {currentWords.map((word) => {
          return (
            <CSSTransition key={word} timeout={1000} classNames="transition">
              <Word>{word}</Word>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <Description>Full-Stack Developer located in Morganton, NC</Description>
      <Name>Isaac</Name>
      <Name style={{ animationDelay: "100ms" }}>Bythewood</Name>
    </Page>
  );
};

export default Index;

const FadeStart = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideStart = keyframes`
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
`;

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 60px;

  @media (${props => props.theme.breakpoints.mobile}) {
    left: 0;
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 100vh;
  }
`;

const Words = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  mix-blend-mode: darken;
  background: rgba(0, 0, 0, 0.6);
`;

const Word = styled.h3`
  opacity: 0.2;
  font-size: 14vw;
  text-transform: uppercase;
  margin: 0;
  position: absolute;

  &.transition-appear,
  &.transition-enter {
    opacity: 0;
    transform: translateY(-200px);
  }
  &.transition-appear-active,
  &.transition-enter-active {
    opacity: 0.2;
    transform: translateY(0);
    transition-duration: 1000ms;
    transition-property: opacity, transform;
  }
  &.transition-appear-done,
  &.transition-enter-done {
    opacity: 0.2;
  }
  &.transition-exit {
    transform: translateY(0);
    opacity: 0.2;
  }
  &.transition-exit-active {
    opacity: 0;
    transform: translateY(200px);
    transition-duration: 1000ms;
    transition-property: opacity, transform;
  }
`;

const Description = styled.h1`
  font-size: 3.5em;
  font-weight: bolder;
  opacity: 0;
  animation-name: ${FadeStart};
  animation-duration: 1500ms;
  animation-fill-mode: forwards;

  &::before {
    content: "";
    display: block;
    width: 75px;
    height: 5px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.blue};
  }

  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 2em;
  }
`;

const Name = styled.h2`
  font-size: 2.5em;
  text-transform: uppercase;
  padding: 5px;
  margin: 0 0 2px 0;
  float: left;
  clear: left;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.blue} 0,
    ${props => props.theme.colors.purple} 100%
  );
  transform: translateX(-100vw);
  animation-name: ${SlideStart};
  animation-duration: 750ms;
  animation-fill-mode: forwards;

  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5em;
  }
`;
