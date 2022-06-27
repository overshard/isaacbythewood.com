import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import "isomorphic-unfetch";

import Page from "../components/page";

const Code = ({ commits }) => {
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
      <Projects>
        <Project>
          <ProjectHeading>Analytics</ProjectHeading>
          <ProjectParagraph>
            A self-hostable analytics service with a straightforward API to
            track events from any source.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.analytics.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/analytics"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>Status</ProjectHeading>
          <ProjectParagraph>
            A self-hosted status monitoring service.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.status.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/status"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>Blog</ProjectHeading>
          <ProjectParagraph>
            A self-hostable blog built on Wagtail targeted towards developers
            with code blocks, syntax highlighting, live search, great SEO, and a
            clean customizable UI.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.blog.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/blog"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>Timelite</ProjectHeading>
          <ProjectParagraph>
            A simple time tracking progressive web app. Uses local storage and
            service workers to remain accessible offline. Sometimes you just
            need the essentials when you are busy.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.timelite.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/timelite"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>Timestrap</ProjectHeading>
          <ProjectParagraph>
            A full feature time tracking web app. Supports multiple users and
            exporting reports in multiple formats. Makes use of websockets to
            maintain state across clients.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.timestrap.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/timestrap"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>isaacbythewood.com</ProjectHeading>
          <ProjectParagraph>
            The personal website of Isaac Bythewood. So this site...
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.isaacbythewood.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/isaacbythewood.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>dockerfiles</ProjectHeading>
          <ProjectParagraph>
            All the Dockerfiles I use for various purposes. More detailed usage
            instructions are at the top of each Dockerfile.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.dockerfiles.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/dockerfiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>alpinefiles</ProjectHeading>
          <ProjectParagraph>
            Some of the files that I use on my Alpine Linux servers.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.alpinefiles.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/alpinefiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>dotfiles</ProjectHeading>
          <ProjectParagraph>
            A variety of config files for setting up new systems.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.dotfiles.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/dotfiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </ProjectButton>
        </Project>
      </Projects>
    </Page>
  );
};

Code.getInitialProps = async () => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://isaacbythewood.com";
  const commits = await fetch(`${baseUrl}/api/code`).then((res) => res.json());
  return {
    commits: commits,
  };
};

Code.propTypes = {
  commits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
    background-color: ${(props) => props.theme.colors.blue};
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

const Projects = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

const Project = styled.div`
  width: calc(50% - 20px);
  display: flex;
  flex-direction: column;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
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
  flex-grow: 1;
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
    ${(props) => props.theme.colors.blue} 0,
    ${(props) => props.theme.colors.purple} 100%
  );
  transform: scale(1);
  transition-duration: 250ms;
  transition-property: transform;
  width: 100px;
  text-align: center;

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
`;
