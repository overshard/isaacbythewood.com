import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const pages = [
    { num: "000", href: "/", title: "Home" },
    { num: "001", href: "/about", title: "About" },
    { num: "002", href: "/Code", title: "Code" },
    { num: "003", href: "/Art", title: "Art" },
    { num: "004", href: "/Contact", title: "Contact" }
  ];

  return (
    <>
      <Hamburger
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Patty />
        <Patty />
        <Patty />
      </Hamburger>
      <Overlay open={open}>
        <OverlayGrid>
          <OverlayGridLeft>
            {pages.map(page => {
              return (
                <Link key={page.href} href={page.href} passHref>
                  <OverlayLink
                    data-text={page.title}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <span>{page.num}</span>
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
    </>
  );
};

export default Menu;

const Hamburger = styled.div`
  position: fixed;
  top: 30px;
  right: 0;
  padding: 20px 15px;
  background: white;
  z-index: 5001;
`;

const Patty = styled.div`
  background: black;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;

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
  z-index: ${props => (props.open ? 5000 : -5000)};
  visibility: ${props => (props.open ? "visible" : "hidden")};
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

  & > span {
    position: absolute;
    font-weight: 100;
    font-size: 0.5em;
    left: -100%;
  }

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
