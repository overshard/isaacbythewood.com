import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from "../components/page";

const About = () => {
  const [words, setWords] = useState([
    "DevOps",
    "Social Media",
    "SEO",
    "Cloud",
    "Security",
    "HIPPA & PCI",
    "Developer",
    "SysAdmin",
    "Full-Stack"
  ]);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    const getRandomWordIndex = () => {
      return Math.floor(Math.random() * wordsRef.current.length);
    };

    const wordsInterval = setInterval(() => {
      let firstWordIndex = getRandomWordIndex();
      let secondWordIndex = getRandomWordIndex();
      while (firstWordIndex === secondWordIndex) {
        firstWordIndex = getRandomWordIndex();
        secondWordIndex = getRandomWordIndex();
      }
      const firstWord = wordsRef.current[firstWordIndex];
      const secondWord = wordsRef.current[secondWordIndex];
      setWords(
        wordsRef.current.filter((word, index) => {
          return index != firstWordIndex && index != secondWordIndex;
        })
      );
      setTimeout(() => {
        let newWords = [...wordsRef.current];
        newWords.splice(secondWordIndex, 0, firstWord);
        newWords.splice(firstWordIndex, 0, secondWord);
        setWords(newWords);
      }, 1000);
    }, 4000);

    return () => {
      clearInterval(wordsInterval);
    };
  }, []);

  return (
    <Page title="About" description="A brief professional history of myself.">
      <Background />
      <Words>
        <TransitionGroup component={null}>
          {words.map(word => {
            return (
              <CSSTransition
                key={word}
                timeout={1000}
                appear
                classNames="transition"
              >
                <Word>
                  <WordText>{word}</WordText>
                </Word>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </Words>
      <Paragraph>
        I am a <Strong>full-stack developer</Strong> meaning I spend way too
        much time working. I enjoy developing everything from linux kernel
        modules to website front-ends. My first job was{" "}
        <Strong>modifying kernel modules</Strong> for Digium Telephony Cards to
        work on CentOS. My current employer is{" "}
        <Strong>VanNoppen Marketing</Strong> doing some of everything — chiefly
        creating <Strong>custom software</Strong> on a variety of platforms. I
        have done consulting for many companies on SEO, Online Advertising,
        Social Media, Cloud Services, Security, HIPPA &amp; PCI Compliance, and
        myriad other topics.
      </Paragraph>
    </Page>
  );
};

export default About;

const SlideLeft = keyframes`
  0% {
    left: -100%;
  }

  40% {
    left: 0;
  }

  60% {
    left: 0;
  }

  100% {
    left: 100%;
  }
`;

const QuickFadeIn = keyframes`
  0% {
    color: rgba(0, 0, 0, 0);
  }

  49% {
    color: rgba(0, 0, 0, 0);
  }

  50% {
    color: rgba(0, 0, 0, 1);
  }

  100% {
    color: rgba(0, 0, 0, 1);
  }
`;

const FadeIn = keyframes`
  0% {
    color: rgba(0, 0, 0, 0);
  }

  100% {
    color: rgba(0, 0, 0, 1);
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: -2;
`;

const Words = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 60px;
  opacity: 0.05;
  font-size: 5vh;
  line-height: 11vh;
  color: black;
  text-transform: uppercase;
  height: 100vh;
  overflow-y: hidden;
`;

const Word = styled.h2`
  margin: 0;

  &.transition-appear-active,
  &.transition-enter-active {
    & > span {
      animation-name: ${QuickFadeIn};
      animation-duration: 1000ms;
      &::before {
        animation-name: ${SlideLeft};
        animation-duration: 1000ms;
      }
    }
  }
  &.transition-exit-active {
    & > span {
      animation-name: ${QuickFadeIn};
      animation-duration: 1000ms;
      animation-direction: reverse;
      &::before {
        animation-name: ${SlideLeft};
        animation-duration: 1000ms;
        animation-direction: reverse;
      }
    }
  }
  &.transition-appear-done,
  &.transition-enter-done {
    & > span {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

const WordText = styled.span`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  color: rgba(0, 0, 0, 0);
  display: inline-block;
  vertical-align: top;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    left: -100%;
    z-index: 1;
  }
`;

const Paragraph = styled.p`
  font-size: 1.8em;
  font-weight: 300;
  color: black;
  position: relative;
  color: rgba(0, 0, 0, 0);
  animation-name: ${FadeIn};
  animation-delay: 1500ms;
  animation-duration: 1000ms;
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
    font-size: 1.2em;
  }
`;

const Strong = styled.strong`
  font-weight: 700;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  animation: ${QuickFadeIn} 1250ms normal forwards;
  color: rgba(0, 0, 0, 0);
  display: inline-block;
  vertical-align: top;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    left: -100%;
    z-index: 1;
    animation: ${SlideLeft} 1250ms normal forwards;
  }
`;
