import React from "react";
import styled from "styled-components";

import Page from "../components/page";

const About = () => {
  const words = [
    "DevOps",
    "Social Media",
    "SEO",
    "Cloud",
    "Security",
    "HIPPA & PCI",
    "Developer",
    "SysAdmin",
    "Full-Stack"
  ];

  return (
    <Page title="About">
      <Background />
      <Words>
        {words.map(word => {
          return <Word key={word}>{word}</Word>;
        })}
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
  overflow: hidden;
`;

const Paragraph = styled.p`
  font-size: 1.8em;
  font-weight: 300;
  color: black;
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
  animation: fade-in 750ms normal forwards;
  color: rgba(0, 0, 0, 0);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    left: -100vw;
    z-index: 1;
    animation: slide-left 750ms normal forwards;
  }

  @keyframes slide-left {
    from {
      left: -100vw;
    }

    40% {
      left: 0;
    }

    60% {
      left: 0;
    }

    to {
      left: 100vw;
    }
  }

  @keyframes fade-in {
    from {
      color: rgba(0, 0, 0, 0);
    }

    49% {
      color: rgba(0, 0, 0, 0);
    }

    50% {
      color: rgba(0, 0, 0, 1);
    }

    to {
      color: rgba(0, 0, 0, 1);
    }
  }
`;
