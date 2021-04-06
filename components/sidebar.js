import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";

const Sidebar = ({ router }) => {
  const [current, setCurrent] = useState("000");

  useEffect(() => {
    const handleRouteChange = (url) => {
      switch (url) {
        case "/":
          setCurrent("000");
          break;
        case "/about":
          setCurrent("001");
          break;
        case "/code":
          setCurrent("002");
          break;
        case "/art":
          setCurrent("003");
          break;
        case "/contact":
          setCurrent("004");
          break;
      }
    };
    handleRouteChange(router.pathname);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Nav>
      <Link href="/" passHref>
        <NavLogo aria-label="Back to home" />
      </Link>
      <Link href="/contact" passHref>
        <NavContact>Get in touch</NavContact>
      </Link>
      <NavCurrent>{current}</NavCurrent>
    </Nav>
  );
};

Sidebar.propTypes = {
  router: PropTypes.object,
};

export default withRouter(Sidebar);

const Nav = styled.nav`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
  border-right: 1px solid rgba(125, 125, 125, 0.2);

  @media (${(props) => props.theme.breakpoints.tablet}) {
    bottom: auto;
    left: 0;
    flex-direction: row;
    width: 100%;
    height: 60px;
    border-right: none;
  }
`;

const NavLogo = styled.a`
  content: "";
  display: block;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.blue} 0,
    ${(props) => props.theme.colors.purple} 100%
  );
  width: 40px;
  height: 40px;
  z-index: 3;
  margin-left: 10px;
  margin-top: 10px;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    left: 35px;
  }
`;

const NavContact = styled.a`
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-decoration: none;
  font-size: 1.2em;
  line-height: 1.5em;
  margin: 15px;
  color: black;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    right: 100%;
    width: 100%;
    height: 100%;
    background: rgba(14, 64, 244, 0.3);
    transition: right 250ms;
  }

  &:hover {
    &::before {
      right: 60%;
    }
  }

  @media (${(props) => props.theme.breakpoints.tablet}) {
    writing-mode: horizontal-tb;
    transform: none;
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {
    writing-mode: horizontal-tb;
    transform: none;
    display: none;
  }
`;

const NavCurrent = styled.div`
  font-family: monospace;
  background-color: black;
  text-align: center;
  padding: 5px;
  color: white;

  @media (${(props) => props.theme.breakpoints.tablet}) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;
