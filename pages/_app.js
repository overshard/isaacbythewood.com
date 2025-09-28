import React from "react";
import App from "next/app";
import "../styles/globals.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Grid from "../components/grid";
import Sidebar from "../components/sidebar";
import Menu from "../components/menu";
import Loader from "../components/loader";
import Mouse from "../components/mouse";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Mouse />
        <Loader />
        <Sidebar />
        <Menu />
        <TransitionGroup component={null}>
          <CSSTransition
            key={this.props.router.route}
            appear
            timeout={250}
            classNames="transition"
          >
            <div className="transition">
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
// Transition classes now provided by globals.css
