import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from "../components/page";

const Index = () => {
  const words = ["Developer", "SysAdmin", "DevOps", "Consultant"];
  const [currentWords, setCurrentWord] = useState([words[0]]);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextWordIndex = words.indexOf(currentWords[0]) + 1;
      if (nextWordIndex < words.length) setCurrentWord([words[nextWordIndex]]);
      else setCurrentWord([words[0]]);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Page title="Full-Stack Developer located in Morganton, NC">
      <Background
        src="/static/images/night-sky.jpg"
        alt="Picture of the night's sky with stars."
      />
      <TransitionGroup component={Words}>
        {currentWords.map(word => {
          return (
            <CSSTransition key={word} timeout={1000} classNames="transition">
              <Word>{word}</Word>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <Description>Full-Stack Developer located in Morganton, NC</Description>
      <Name>Isaac</Name>
      <Name style={{ animationDelay: "1100ms" }}>Bythewood</Name>
    </Page>
  );
};

export default Index;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  object-fit: cover;
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
  &::before {
    content: "";
    display: block;
    width: 75px;
    height: 5px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.blue};
  }
  opacity: 0;
  animation: fade-start 750ms 1000ms forwards;
  @keyframes fade-start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  animation: slide-start 750ms 1000ms forwards;
  @keyframes slide-start {
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5em;
  }
`;
