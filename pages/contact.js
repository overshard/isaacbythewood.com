import React from "react";
import styled from "styled-components";

import Page from "../components/page";

const Contact = () => {
  return (
    <Page title="Contact">
      <Background />
      <Grid>
        <GridLeft>
          <Heading>Contact Me</Heading>
          <ShoutOut>I love chatting</ShoutOut>
          <ShoutOut>with other developers!</ShoutOut>
        </GridLeft>
        <GridRight>
          <ContactList>
            <ContactKey>Email</ContactKey>
            <ContactValue>
              <ContactLink>isaac@bythewood.com</ContactLink>
            </ContactValue>
            <ContactKey>Discord</ContactKey>
            <ContactValue>
              <ContactLink>Overshard#4907</ContactLink>
            </ContactValue>
            <ContactKey>GitHub</ContactKey>
            <ContactValue>
              <ContactLink>/overshard</ContactLink>
            </ContactValue>
          </ContactList>
        </GridRight>
      </Grid>
    </Page>
  );
};

export default Contact;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  background: repeating-linear-gradient(
      -45deg,
      transparent 0,
      transparent 25%,
      dodgerblue 0,
      dodgerblue 50%
    ),
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 25%,
      tomato 0,
      tomato 50%
    ),
    repeating-linear-gradient(transparent 0, transparent 25%, gold 0, gold 50%),
    tomato;
  background-blend-mode: multiply;
  background-size: 100px 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  transform: translateX(-100vw);
  animation: slide-over 750ms 500ms forwards;
  @keyframes slide-over {
    from {
      transform: translateX(-100vw);
    }
    50% {
      transform: translateX(10vw);
    }
    70% {
      transform: translateX(-5vw);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    margin-top: 80px;
  }
`;

const GridColumn = styled.div`
  padding: 25px 35px;
`;

const GridLeft = styled(GridColumn)`
  grid-area: left;
  @media (${props => props.theme.breakpoints.tablet}) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const GridRight = styled(GridColumn)`
  grid-area: right;
  @media (${props => props.theme.breakpoints.tablet}) {
    grid-column: 1;
    grid-row: 2;
  }
`;

const Heading = styled.h1`
  font-size: 3em;
  margin-top: 0;
  margin-bottom: 70px;
  @media (${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 20px;
  }
`;

const ShoutOut = styled.h2`
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
  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1em;
  }
`;

const ContactList = styled.dl``;

const ContactKey = styled.dt`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 700;
  opacity: 0.7;
`;

const ContactValue = styled.dd`
  font-size: 1.5em;
  margin-left: 0;
  margin-bottom: 30px;
`;

const ContactLink = styled.a`
  text-decoration: none;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: rgba(255, 255, 255, 1);
    transform-origin: left;
    animation: transform-left 300ms normal forwards;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
  }
  &:hover {
    &::before {
      animation: transform-right 300ms normal forwards;
    }
  }
  @keyframes transform-right {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  @keyframes transform-left {
    from {
      transform: scaleX(1);
    }

    to {
      transform: scaleX(0);
    }
  }
`;
