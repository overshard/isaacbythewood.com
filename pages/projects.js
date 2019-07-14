import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "isomorphic-unfetch";

import Page from "../components/page";

const Projects = ({ timeliteCommits, timestrapCommits }) => {
  let timeliteLatest,
    timestrapLatest = null;

  try {
    const timeliteLatest = `{
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

    const timestrapLatest = `{
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
    <Page title="Projects">
      <Background />
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
            maintain state across all active clients.
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

Projects.getInitialProps = async () => {
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

Projects.propTypes = {
  timeliteCommits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  timestrapCommits: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Projects;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: -2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";
`;

const GridColumn = styled.div`
  opacity: 0;
  transform: translateY(-100px);
  padding-right: 20px;
  animation: slide-up 500ms normal forwards;

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(100px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GridLeft = styled(GridColumn)`
  grid-area: left;
`;

const GridRight = styled(GridColumn)`
  grid-area: right;
  animation-delay: 250ms;
`;

const ProjectHeading = styled.h1`
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: black;
  &::before {
    content: "";
    display: block;
    width: 75px;
    height: 5px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.blue};
  }
`;

const ProjectParagraph = styled.p`
  font-size: 1.6em;
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
  white-space: pre-wrap;
  font-family: monospace;
  background: black;
  color: #00ff00;
  padding: 20px;
`;
