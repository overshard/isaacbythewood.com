import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@styles/components/sidebar.module.css";
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
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <a className={styles.navLogo} aria-label="Back to home" />
      </Link>
      <Link href="/contact" passHref>
        <a className={styles.navContact}>Get in touch</a>
      </Link>
      <div className={styles.navCurrent}>{current}</div>
    </nav>
  );
};

Sidebar.propTypes = {
  router: PropTypes.object,
};

export default withRouter(Sidebar);
