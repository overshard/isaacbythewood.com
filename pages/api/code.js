const { Sequelize } = require("sequelize");

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
  const timelite = await getCommit("timelite");
  const timestrap = await getCommit("timestrap");

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
  };
};

export default async (req, res) => {
  await Commit.sync();

  return getCommits()
    .then((commits) => {
      res.status(200).json(commits);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
