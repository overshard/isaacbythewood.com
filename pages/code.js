import React from "react";
import PropTypes from "prop-types";
import styles from "./code.module.css";

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
      <div className={styles.background} />
      <h1 className={styles.heading}>Code</h1>
      <p className={styles.paragraph}>
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
      </p>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>Analytics</h1>
          <p className={styles.projectParagraph}>
            A self-hostable analytics service with a straightforward API to
            track events from any source.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.analytics.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/analytics"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>Status</h1>
          <p className={styles.projectParagraph}>
            A self-hosted status monitoring service.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.status.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/status"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>Blog</h1>
          <p className={styles.projectParagraph}>
            A self-hostable blog built on Wagtail targeted towards developers
            with code blocks, syntax highlighting, live search, great SEO, and a
            clean customizable UI.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.blog.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/blog"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>Timelite</h1>
          <p className={styles.projectParagraph}>
            A simple time tracking progressive web app. Uses local storage and
            service workers to remain accessible offline. Sometimes you just
            need the essentials when you are busy.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.timelite.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/timelite"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>Timestrap</h1>
          <p className={styles.projectParagraph}>
            A full feature time tracking web app. Supports multiple users and
            exporting reports in multiple formats. Makes use of websockets to
            maintain state across clients.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.timestrap.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/timestrap"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>isaacbythewood.com</h1>
          <p className={styles.projectParagraph}>
            The personal website of Isaac Bythewood. So this site...
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.isaacbythewood.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/isaacbythewood.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>New Tab</h1>
          <p className={styles.projectParagraph}>
            A clean new tab page extension for Chrome.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.newtab.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/newtab"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>dockerfiles</h1>
          <p className={styles.projectParagraph}>
            All the Dockerfiles I use for various purposes. More detailed usage
            instructions are at the top of each Dockerfile.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.dockerfiles.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/dockerfiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>alpinefiles</h1>
          <p className={styles.projectParagraph}>
            Some of the files that I use on my Alpine Linux servers.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.alpinefiles.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/alpinefiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h1 className={styles.projectHeading}>dotfiles</h1>
          <p className={styles.projectParagraph}>
            A variety of config files for setting up new systems.
          </p>
          <pre className={styles.projectCommit}>
            {JSON.stringify(commits.dotfiles.data, null, 2)}
          </pre>
          <a
            className={styles.projectButton}
            href="https://www.github.com/overshard/dotfiles"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
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
    if (!commitsFetch.ok) {
      console.error(
        `GitHub API fetch failed for ${repo}:`,
        commitsFetch.status,
        commits
      );
    }
    let commit = null;
    if (Array.isArray(commits) && commits.length > 0) {
      commit = commits[0];
    }
    if (!commit) {
      console.error(`No commit data found for ${repo}. Response:`, commits);
    }
    const commitData = {
      repo: repo,
      createdAt: new Date(),
      data: {
        sha: commit ? commit.sha : null,
        commit: {
          message:
            commit &&
            commit.commit &&
            typeof commit.commit.message !== "undefined"
              ? commit.commit.message
              : null,
          date:
            commit &&
            commit.commit &&
            commit.commit.author &&
            typeof commit.commit.author.date !== "undefined"
              ? commit.commit.author.date
              : null,
        },
        author: {
          name:
            commit &&
            commit.commit &&
            commit.commit.author &&
            typeof commit.commit.author.name !== "undefined"
              ? commit.commit.author.name
              : null,
          email:
            commit &&
            commit.commit &&
            commit.commit.author &&
            typeof commit.commit.author.email !== "undefined"
              ? commit.commit.author.email
              : null,
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
