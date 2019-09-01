import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const pages = [
    { num: "000", href: "/", title: "Home" },
    { num: "001", href: "/about", title: "About" },
    { num: "002", href: "/code", title: "Code" },
    { num: "003", href: "/art", title: "Art" },
    { num: "004", href: "/contact", title: "Contact" }
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
      <Hamburger onClick={toggleMenu}>
        <Patty style={{ width: "15px" }} />
        <Patty />
        <Patty style={{ width: "20px" }} />
      </Hamburger>
      <CSSTransition in={open} timeout={250} classNames="transition">
        <Overlay>
          <OverlayGrid>
            <OverlayGridLeft>
              {pages.map(page => {
                return (
                  <Link key={page.href} href={page.href} passHref>
                    <OverlayLink data-text={page.title} onClick={toggleMenu}>
                      {page.title}
                    </OverlayLink>
                  </Link>
                );
              })}
            </OverlayGridLeft>
            <OverlayGridRight>
              <OverlayImage src="/static/images/art/003.jpg" alt="" />
            </OverlayGridRight>
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
  cursor: none;

  &:hover * {
    width: 30px !important;
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
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-duration: 250ms;
  transition-property: opacity;
  opacity: 0;
  z-index: -5000;

  &.transition-enter {
    opacity: 0;
    z-index: 5000;
  }

  &.transition-enter-active {
    opacity: 1;
    z-index: 5000;
  }

  &.transition-enter-done {
    opacity: 1;
    z-index: 5000;
  }

  &.transition-exit {
    opacity: 1;
    z-index: 5000;
  }

  &.transition-exit-active {
    opacity: 0;
    z-index: 5000;
  }

  &.transition-exit-done {
    opacity: 0;
    z-index: -5000;
  }
`;

const OverlayGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const OverlayGridLeft = styled.div`
  grid-area: 1/1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OverlayGridRight = styled.div`
  grid-area: 1/2;
  height: 100vh;
  overflow: hidden;
`;

const OverlayImage = styled.img`
  object-fit: cover;
  height: 100%;
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
