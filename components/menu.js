import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const pages = [
    { num: "000", href: "/", title: "Home" },
    { num: "001", href: "/about", title: "About" },
    { num: "002", href: "/code", title: "Code" },
    { num: "003", href: "/art", title: "Art" },
    { num: "004", href: "/contact", title: "Contact" },
  ];

  const toggleMenu = () => {
    if (open === false) {
      setOpen(true);
      document.body.style.overflowY = "hidden";
    } else {
      setOpen(false);
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <>
      <Hamburger onClick={toggleMenu} aria-label="Hamburger">
        <Patty style={{ width: "15px" }} />
        <Patty />
        <Patty style={{ width: "20px" }} />
      </Hamburger>
      <CSSTransition in={open} timeout={500} classNames="transition">
        <Overlay>
          <OverlayGrid>
            <CSSTransition
              in={open}
              timeout={500}
              classNames="transition"
              appear
            >
              <OverlayGridLeft>
                <TopBar>
                  <Link href="https://blog.bythewood.me/" passHref>
                    <TopLink target="_blank">Blog</TopLink>
                  </Link>
                  <Link href="https://status.bythewood.me/properties/87097ef2-5643-4999-917e-72b172dd9e19/" passHref>
                    <TopLink target="_blank">Status</TopLink>
                  </Link>
                  <Link href="https://analytics.bythewood.me/properties/30e69c06-9beb-4283-8919-8c7a686ab013/" passHref>
                    <TopLink target="_blank">Analytics</TopLink>
                  </Link>
                  <Link href="https://github.com/overshard" passHref>
                    <TopLink target="_blank">GitHub</TopLink>
                  </Link>
                  <Bar />
                </TopBar>
                {pages.map((page) => {
                  return (
                    <Link key={page.href} href={page.href} passHref>
                      <OverlayLink data-text={page.title} onClick={toggleMenu}>
                        {page.title}
                      </OverlayLink>
                    </Link>
                  );
                })}
                <BottomBar>
                  <Image
                    src="/static/images/avatar.webp"
                    alt="Isaac Bythewood"
                    width={50}
                    height={50}
                  />
                  <Bar />
                </BottomBar>
              </OverlayGridLeft>
            </CSSTransition>
            <CSSTransition
              in={open}
              timeout={500}
              classNames="transition"
              appear
            >
              <OverlayGridRight>
                <Image
                  src="/static/images/art/006.jpg"
                  alt="#006 Molten Copper"
                  loading="lazy"
                  layout="fill"
                />
              </OverlayGridRight>
            </CSSTransition>
          </OverlayGrid>
        </Overlay>
      </CSSTransition>
    </>
  );
};

export default Menu;

const Hamburger = styled.button`
  position: fixed;
  top: 30px;
  right: 0;
  padding: 20px 15px;
  background: white;
  z-index: 5001;
  border: none;
  cursor: pointer;

  &:hover * {
    width: 30px !important;
  }

  @media (${(props) => props.theme.breakpoints.tablet}) {
    top: 0;
    padding-bottom: 21px;
  }
`;

const Patty = styled.div`
  background: black;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  margin-left: auto;
  transition-duration: 250ms;
  transition-property: width;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -5000;

  &.transition-enter {
    z-index: 5000;
  }

  &.transition-enter-active {
    z-index: 5000;
  }

  &.transition-enter-done {
    z-index: 5000;
  }

  &.transition-exit {
    z-index: 5000;
  }

  &.transition-exit-active {
    z-index: 5000;
  }

  &.transition-exit-done {
    z-index: -5000;
  }
`;

const OverlayGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 100%;
  }
`;

const OverlayGridLeft = styled.div`
  grid-area: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  transition-duration: 500ms;
  transition-property: transform;
  transform: translateX(-100%);

  &.transition-enter {
    transform: translateX(-100%);
  }

  &.transition-enter-active {
    transform: translateX(0);
  }

  &.transition-enter-done {
    transform: translateX(0);
  }

  &.transition-exit {
    transform: translateX(0);
  }

  &.transition-exit-active {
    transform: translateX(-100%);
  }

  &.transition-exit-done {
    transform: translateX(-100%);
  }
`;

const OverlayGridRight = styled.div`
  grid-area: 1/2;
  height: 100vh;
  overflow: hidden;
  transition-duration: 500ms;
  transition-property: transform;
  transform: translateX(100%);

  &.transition-enter {
    transform: translateX(100%);
  }

  &.transition-enter-active {
    transform: translateX(0);
  }

  &.transition-enter-done {
    transform: translateX(0);
  }

  &.transition-exit {
    transform: translateX(0);
  }

  &.transition-exit-active {
    transform: translateX(100%);
  }

  &.transition-exit-done {
    transform: translateX(100%);
  }

  img {
    object-fit: cover;
    height: 100vh;
  }
`;

const OverlayLink = styled.a`
  font-weight: 900;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 3em;
  color: black;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: attr(data-text);
    color: white;
    position: absolute;
    width: 0;
    left: 0;
    bottom: 3px;
    height: 27px;
    background-color: black;
    transition-property: width;
    transition-duration: 200ms;
    line-height: 0;
    overflow: hidden;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;

const TopBar = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  left: 20px;
  top: 20px;
  align-items: center;
  justify-content: start;
`;

const TopLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: rgba(0, 0, 0, 1);
  padding: 0.25rem 0.5rem;
  margin-left: 1rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.8em;
    margin-left: 0.5rem;
  }
`;

const BottomBar = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  left: 20px;
  bottom: 20px;
  align-items: center;
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.3);
  margin-left: 40px;
  margin-right: 60px;
`;
