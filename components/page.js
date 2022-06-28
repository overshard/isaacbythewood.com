import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import styled from "styled-components";

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
      <Main gridArea={props.gridArea ? props.gridArea : "main"}>
        {props.children}
      </Main>
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

const Main = styled.main`
  ${(props) => props.gridArea && `grid-area:  ${props.gridArea};`}
`;
