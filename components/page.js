import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import styles from "@styles/components/page.module.css";

import { strings } from "../site.config";

const Page = (props) => {
  const baseTitle = strings.title;
  const defaultDescription = strings.description;

  return (
    <>
      <Head>
        <title>
          {props.title ? `${props.title} — ${baseTitle}` : baseTitle}
        </title>
        <meta
          name="description"
          content={props.description ? props.description : defaultDescription}
        />
      </Head>
      <main
        style={{ gridArea: props.gridArea ? props.gridArea : "main" }}
        className={styles.main}
      >
        {props.children}
      </main>
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  gridArea: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Page;

// migrated to CSS Module
