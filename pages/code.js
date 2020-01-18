import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import "isomorphic-unfetch";

import Page from "../components/page";

const Code = ({ timeliteCommits, timestrapCommits }) => {
  let timeliteLatest,
    timestrapLatest = null;

  try {
    timeliteLatest = `{
  "sha": "${timeliteCommits[0].sha}",
  "commit": {
    "message": "${timeliteCommits[0].commit.message}",
    "date": "${timeliteCommits[0].commit.author.date}"
  },
  "author": {
    "login": "${timestrapCommits[0].author.login}",
    "html_url": "${timestrapCommits[0].author.html_url}"
  }
}`;

    timestrapLatest = `{
  "sha": "${timestrapCommits[0].sha}",
  "commit": {
    "message": "${timestrapCommits[0].commit.message}",
    "date": "${timestrapCommits[0].commit.author.date}"
  },
  "author": {
    "login": "${timestrapCommits[0].author.login}",
    "html_url": "${timestrapCommits[0].author.html_url}"
  }
}`;
  } catch (err) {
    console.log(err);
  }

  return (
    <Page title="Code" description="Some of my most recent coding projects.">
      <Background />
      <Heading>Code</Heading>
      <Paragraph>
        A probably not entirely up-to-date list of my current side projects...
        There is plenty more to see on{" "}
        <a
          href="https://github.com/overshard"
          rel="noopener noreferrer"
          target="_blank"
        >
          my GitHub account
        </a>{" "}
        and generally around the internet if you are interested.
      </Paragraph>
      <Grid>
        <GridLeft>
          <ProjectHeading>Timelite</ProjectHeading>
          <ProjectParagraph>
            A simple time tracking progressive web app. Uses local storage and
            service workers to remain accessible offline. Sometimes you just
            need the essentials when you are busy.
          </ProjectParagraph>
          {timeliteLatest && <ProjectCommit>{timeliteLatest}</ProjectCommit>}
          <ProjectButton
            href="https://www.github.com/overshard/timelite"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </GridLeft>
        <GridRight>
          <ProjectHeading>Timestrap</ProjectHeading>
          <ProjectParagraph>
            A full feature time tracking web app. Supports multiple users and
            exporting reports in multiple formats. Makes use of websockets to
            maintain state across clients.
          </ProjectParagraph>
          {timestrapLatest && <ProjectCommit>{timestrapLatest}</ProjectCommit>}
          <ProjectButton
            href="https://www.github.com/overshard/timestrap"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </GridRight>
      </Grid>
    </Page>
  );
};

Code.getInitialProps = async () => {
  const timestrapCommitsFetch = await fetch(
    "https://api.github.com/repos/overshard/timestrap/commits"
  );
  const timestrapCommits = await timestrapCommitsFetch.json();
  const timeliteCommitsFetch = await fetch(
    "https://api.github.com/repos/overshard/timelite/commits"
  );
  const timeliteCommits = await timeliteCommitsFetch.json();
  return {
    timeliteCommits: timeliteCommits,
    timestrapCommits: timestrapCommits
  };
};

Code.propTypes = {
  timeliteCommits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  timestrapCommits: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Code;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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

const Paragraph = styled.p`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 300;
  color: black;

  a {
    color: black;
    text-decoration: none;
    position: relative;
    white-space: nowrap;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      background: rgba(0, 0, 0, 1);
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
      background: rgba(0, 0, 0, 0.2);
    }

    &:hover {
      &::before {
        animation: ${TransformRight} 300ms normal forwards;
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";

  @media (${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const GridColumn = styled.div`
  opacity: 0;
  padding-right: 20px;
  animation-fill-mode: forwards;
  animation-name: ${FadeIn};
  animation-duration: 1000ms;
`;

const GridLeft = styled(GridColumn)`
  grid-area: left;
  min-width: 0;

  @media (${props => props.theme.breakpoints.tablet}) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const GridRight = styled(GridColumn)`
  grid-area: right;
  animation-delay: 250ms;
  min-width: 0;

  @media (${props => props.theme.breakpoints.tablet}) {
    grid-column: 1;
    grid-row: 2;
  }
`;

const ProjectHeading = styled.h1`
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 2em;
  color: black;
`;

const ProjectParagraph = styled.p`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 300;
  color: black;
`;

const ProjectButton = styled.a`
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

const ProjectCommit = styled.pre`
  font-family: monospace;
  background: black;
  color: #00ff00;
  padding: 20px;
  overflow-x: hidden;
  max-width: 100%;
  text-overflow: ellipsis;

  @media (${props => props.theme.breakpoints.mobile}) {
  }
`;
