import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { withRouter } from "next/router";

const Sidebar = ({ router }) => {
  const [current, setCurrent] = useState("000");

  useEffect(() => {
    const handleRouteChange = url => {
      switch (url) {
        case "/":
          setCurrent("001");
          break;
        case "/about":
          setCurrent("002");
          break;
        case "/code":
          setCurrent("003");
          break;
        case "/art":
          setCurrent("004");
          break;
        case "/contact":
          setCurrent("005");
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
      <Link href="/contact" passHref>
        <NavContact>Get in touch</NavContact>
      </Link>
      <NavLinks>
        <Link href="/" passHref>
          <NavLink active={router.pathname === "/"}>
            <NavTooltip>Landing</NavTooltip>
          </NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink active={router.pathname === "/about"}>
            <NavTooltip>About</NavTooltip>
          </NavLink>
        </Link>
        <Link href="/code" passHref>
          <NavLink active={router.pathname === "/code"}>
            <NavTooltip>Code</NavTooltip>
          </NavLink>
        </Link>
        <Link href="/art" passHref>
          <NavLink active={router.pathname === "/art"}>
            <NavTooltip>Art</NavTooltip>
          </NavLink>
        </Link>
        <Link href="/contact" passHref>
          <NavLink active={router.pathname === "/contact"}>
            <NavTooltip>Contact</NavTooltip>
          </NavLink>
        </Link>
      </NavLinks>
      <NavCurrent>{current}</NavCurrent>
    </Nav>
  );
};

Sidebar.propTypes = {
  router: PropTypes.object
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
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
  @media (${props => props.theme.breakpoints.tablet}) {
    bottom: auto;
    left: 0;
    flex-direction: row;
    width: 100%;
    height: 60px;
  }
`;

const NavContact = styled.a`
  font-weight: 700;
  writing-mode: vertical-rl;
  text-decoration: none;
  font-size: 1.2em;
  line-height: 1.5em;
  margin: 15px;
  color: black;
  transform: rotate(180deg);
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
  &::after {
    visibility: hidden;
  }
  @media (${props => props.theme.breakpoints.tablet}) {
    writing-mode: horizontal-tb;
    transform: none;
  }
  @media (${props => props.theme.breakpoints.mobile}) {
    visibility: hidden;
    &::after {
      visibility: visible;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        ${props => props.theme.colors.blue} 0,
        ${props => props.theme.colors.purple} 100%
      );
      width: 30px;
      height: 60px;
      position: absolute;
      z-index: 3;
      left: 0;
      top: 0;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const NavLink = styled.a`
  content: "";
  display: flex;
  align-items: center;
  width: 10px;
  height: 50px;
  margin: 10px;
  ${props =>
    props.active
      ? "background-color: rgba(0, 0, 0, 1);"
      : "background-color: rgba(0, 0, 0, 0.5);"}
  transition-property: background-color;
  transition-duration: 250ms;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
  @media (${props => props.theme.breakpoints.tablet}) {
    width: 35px;
    height: 15px;
  }
`;

const NavTooltip = styled.div`
  position: absolute;
  right: 70%;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-decoration: none;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 2px;
  @media (${props => props.theme.breakpoints.tablet}) {
    visibility: hidden;
  }
`;

const NavCurrent = styled.div`
  font-family: monospace;
  background-color: black;
  text-align: center;
  padding: 5px;
  color: white;
  @media (${props => props.theme.breakpoints.tablet}) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
`;
