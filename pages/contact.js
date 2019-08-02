import React from "react";
import styled, { keyframes } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from "../components/page";

const Contact = () => {
  const chatMessages = [
    "Hello!",
    "I prefer people reach out to me via email.",
    "If you'd like to get in touch with me about a new project I'm currently only working on open source stuff in my spare time.",
    "If you're trying to contact me about a job opportunity I'm currently employed with VanNoppen Marketing.",
    "If you just want to chat then I'm almost always on Discord!"
  ];

  return (
    <Page
      title="Contact"
      description="How to get in contact with me."
      gridArea="1 / 1 / 4 / 7"
    >
      <Background />
      <Grid>
        <GridLeft>
          <ContactWrapper>
            <Heading>Contact Me</Heading>
            <ShoutOut>I love chatting</ShoutOut>
            <ShoutOut>with other developers!</ShoutOut>
            <ContactList>
              <ContactKey>Email</ContactKey>
              <ContactValue>
                <ContactLink href="mailto:isaac@bythewood.me">
                  isaac@bythewood.com
                </ContactLink>
              </ContactValue>
              <ContactKey>Discord</ContactKey>
              <ContactValue>
                <ContactLink
                  href="https://discordapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Overshard#4907
                </ContactLink>
              </ContactValue>
              <ContactKey>GitHub</ContactKey>
              <ContactValue>
                <ContactLink
                  href="https://github.com/overshard"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  /overshard
                </ContactLink>
              </ContactValue>
            </ContactList>
          </ContactWrapper>
        </GridLeft>
        <GridRight>
          <Chat>
            <TransitionGroup component={null}>
              {chatMessages.map((message, index) => {
                const transitionTimeout = (index + 2) * 2000;
                const transitionDelay = (index + 1) * 2000;
                return (
                  <CSSTransition
                    key={index}
                    appear
                    timeout={{ appear: transitionTimeout }}
                    classNames="fade"
                  >
                    <ChatLine
                      style={{ transitionDelay: `${transitionDelay}ms` }}
                    >
                      <ChatAvatar src="/static/images/avatar.jpg" />
                      <ChatMessage>
                        {message}
                        <span>Isaac</span>
                      </ChatMessage>
                    </ChatLine>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </Chat>
        </GridRight>
      </Grid>
    </Page>
  );
};

export default Contact;

const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TransformRight = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

const TransformLeft = keyframes`
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0);
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: -2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50vw 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  margin-right: 60px;
  transform: translateX(-100vw);
  animation: ${SlideUp} 750ms 500ms forwards;
  @media (${props => props.theme.breakpoints.tablet}) {
    margin-right: 0;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    margin-top: 60px;
  }
`;

const GridColumn = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media (${props => props.theme.breakpoints.tablet}) {
    min-height: auto;
  }
`;

const GridLeft = styled(GridColumn)`
  grid-area: left;
  background-color: rgba(0, 0, 0, 0.9);
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

const ContactWrapper = styled.div`
  padding-left: 60px;
  @media (${props => props.theme.breakpoints.tablet}) {
    min-height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const Heading = styled.h1`
  font-size: 3em;
  margin-top: 10px;
  margin-bottom: 20px;
  &::before {
    content: "";
    display: block;
    width: 75px;
    height: 5px;
    margin-bottom: 10px;
    background-color: ${props => props.theme.colors.blue};
  }
  @media (${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 10px;
  }
`;

const ShoutOut = styled.h2`
  text-transform: uppercase;
  padding: 5px;
  margin: 0 0 2px 0;
  float: left;
  clear: left;
  font-size: 1.4em;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.blue} 0,
    ${props => props.theme.colors.purple} 100%
  );
  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1em;
  }
`;

const ContactList = styled.dl`
  padding-top: 30px;
  clear: both;
`;

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
  color: white;
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
    animation: ${TransformLeft} 300ms normal forwards;
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
      animation: ${TransformRight} 300ms normal forwards;
    }
  }
`;

const Chat = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;

const ChatLine = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  opacity: 0;

  &.fade-appear {
    opacity: 0;
    transform: translateX(-100px);
  }
  &.fade-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition-duration: 250ms;
    transition-property: opacity, transform;
  }
  &.fade-appear-done {
    opacity: 1;
  }
`;

const ChatMessage = styled.div`
  font-size: 1.2em;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 65%;
  @media (${props => props.theme.breakpoints.mobile}) {
    font-size: 1em;
    width: 70%;
  }

  & span {
    display: block;
    font-size: 0.5em;
    text-transform: uppercase;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 1px;
    font-weight: 800;
  }
`;

const ChatAvatar = styled.img`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  @media (${props => props.theme.breakpoints.mobile}) {
    margin-right: 10px;
    width: 40px;
    height: 40px;
  }
`;
