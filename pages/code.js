import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import Page from "../components/page";

const GitHubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
};

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
          <ProjectHeading>Terminal</ProjectHeading>
          <ProjectParagraph>
            It&apos;s a terminal, nothing to see here, no hidden games or
            anything.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.terminal.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/terminal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </ProjectButton>
        </Project>

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
            <GitHubIcon />
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
            <GitHubIcon />
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
            <GitHubIcon />
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
            <GitHubIcon />
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
            <GitHubIcon />
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
            <GitHubIcon />
            GitHub
          </ProjectButton>
        </Project>
        <Project>
          <ProjectHeading>New Tab</ProjectHeading>
          <ProjectParagraph>
            A clean new tab page extension for Chrome.
          </ProjectParagraph>
          <ProjectCommit>
            {JSON.stringify(commits.newtab.data, null, 2)}
          </ProjectCommit>
          <ProjectButton
            href="https://www.github.com/overshard/newtab"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
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
            <GitHubIcon />
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
            <GitHubIcon />
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
            <GitHubIcon />
            GitHub
          </ProjectButton>
        </Project>
      </Projects>
    </Page>
  );
};

export async function getServerSideProps() {
  // NOTE: We eval the require on purpose so that webpack doesn't bundle it
  const { Sequelize } = eval("require('sequelize')");

  const sequelize = new Sequelize("sqlite://db.sqlite3");

  const Commit = sequelize.define("commit", {
    repo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    data: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  });

  const getCommit = async (repo) => {
    const storedCommit = await Commit.findOne({
      where: {
        repo,
        createdAt: {
          [Sequelize.Op.gte]: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      },
    });
    if (storedCommit) {
      return storedCommit;
    }
    const commitsFetch = await fetch(
      `https://api.github.com/repos/overshard/${repo}/commits`
    );
    const commits = await commitsFetch.json();
    const commit = commits[0];
    const commitData = {
      repo: repo,
      createdAt: new Date(),
      data: {
        sha: commit.sha,
        commit: {
          message: commit.commit.message,
          date: commit.commit.author.date,
        },
        author: {
          name: commit.commit.author.name,
          email: commit.commit.author.email,
        },
      },
    };

    await Commit.create(commitData);
    return commitData;
  };

  const getCommits = async () => {
    const alpinefiles = await getCommit("alpinefiles");
    const analytics = await getCommit("analytics");
    const blog = await getCommit("blog");
    const dockerfiles = await getCommit("dockerfiles");
    const dotfiles = await getCommit("dotfiles");
    const isaacbythewood = await getCommit("isaacbythewood.com");
    const status = await getCommit("status");
    const terminal = await getCommit("terminal");
    const timelite = await getCommit("timelite");
    const timestrap = await getCommit("timestrap");
    const newtab = await getCommit("newtab");

    return {
      alpinefiles: alpinefiles,
      analytics: analytics,
      blog: blog,
      dockerfiles: dockerfiles,
      dotfiles: dotfiles,
      isaacbythewood: isaacbythewood,
      status: status,
      terminal: terminal,
      timelite: timelite,
      timestrap: timestrap,
      newtab: newtab,
    };
  };

  await Commit.sync();

  return getCommits().then((commits) => {
    return {
      props: {
        commits: JSON.parse(JSON.stringify(commits)),
      },
    };
  });
}

Code.propTypes = {
  commits: PropTypes.object,
};

export default Code;

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
  width: 125px;
  text-align: center;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 10px;
  }

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
