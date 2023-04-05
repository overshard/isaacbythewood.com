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
    "HIPAA & PCI",
    "Developer",
    "SysAdmin",
    "Full-Stack",
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
          {words.map((word) => {
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
        I am a <Strong>full-stack developer</Strong>. I enjoy working on
        everything from linux kernel modules to website front-ends. My first job
        was <Strong>modifying kernel modules</Strong> for Digium Telephony Cards
        to work on CentOS. My current employer is{" "}
        <Strong>VanNoppen Marketing</Strong> doing some of everything — chiefly
        creating <Strong>custom software</Strong> on a variety of platforms. I
        have done consulting for many companies on SEO, Online Advertising,
        Social Media, Cloud Services, Security, HIPAA &amp; PCI Compliance, and
        myriad other topics.
        <Resume href="/static/pdfs/resume-isaac-bythewood.pdf">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
            />
          </svg>

          My Resume
        </Resume>
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
  overflow: hidden;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    top: 50px;
    font-size: 4vh;
    line-height: 10vh;
    left: calc(10px + 5%);
  }
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
    background-color: ${(props) => props.theme.colors.blue};
  }
  @media (${(props) => props.theme.breakpoints.mobile}) {
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

const Resume = styled.a`
  display: block;
  text-decoration: none;
  margin-top: 20px;
  font-weight: 700;
  color: black;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 100%;
    width: 100%;
    height: 100%;
    background: rgba(14, 64, 244, 0.3);
    transition: top 250ms;
  }

  &:hover {
    &::before {
      top: 60%;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
