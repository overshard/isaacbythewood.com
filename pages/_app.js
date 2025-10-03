import React, { createRef } from "react";
import App from "next/app";
import "../styles/globals.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Grid from "../components/grid";
import Sidebar from "../components/sidebar";
import Menu from "../components/menu";
import Loader from "../components/loader";
import Mouse from "../components/mouse";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.transitionNodeRefs = new Map();
  }

  getNodeRef(route) {
    if (!this.transitionNodeRefs.has(route)) {
      this.transitionNodeRefs.set(route, createRef());
    }
    return this.transitionNodeRefs.get(route);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const nodeRef = this.getNodeRef(router.route);

    return (
      <>
        <Mouse />
        <Loader />
        <Sidebar />
        <Menu />
        <TransitionGroup component={null}>
          <CSSTransition
            key={router.route}
            appear
            timeout={250}
            classNames="transition"
            nodeRef={nodeRef}
          >
            <div className="transition" ref={nodeRef}>
              <Grid>
                <Component {...pageProps} />
              </Grid>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

export default MyApp;
