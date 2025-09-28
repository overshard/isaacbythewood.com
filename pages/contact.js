import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "@styles/pages/contact.module.css";
import Image from "next/image";

import Page from "../components/page";

const Contact = () => {
  const lineRefs = useRef(new Map());
  const getLineRef = (key) => {
    if (!lineRefs.current.has(key)) {
      lineRefs.current.set(key, React.createRef());
    }
    return lineRefs.current.get(key);
  };
  const chatMessages = [
    "Hello!",
    "I prefer people reach out to me via email.",
    "If you'd like to get in touch with me about a new project I'm currently only working on open source stuff in my spare time.",
    "If you're trying to contact me about a job opportunity I'm currently employed with VanNoppen Marketing.",
    "If you just want to chat then I'm almost always on Discord!",
  ];

  return (
    <Page
      title="Contact"
      description="How to get in contact with me."
      gridArea="1 / 1 / 4 / 7"
    >
      <div className={styles.background} />
      <div className={styles.grid}>
        <div className={styles.gridLeft}>
          <div className={styles.contactWrapper}>
            <h1 className={styles.heading}>Contact Me</h1>
            <h2 className={styles.shoutOut}>I love chatting</h2>
            <h2 className={styles.shoutOut}>with other developers!</h2>
            <dl className={styles.contactList}>
              <dt className={styles.contactKey}>Email</dt>
              <dd className={styles.contactValue}>
                <a
                  className={styles.contactLink}
                  href="mailto:isaac@bythewood.me"
                >
                  isaac@bythewood.com
                </a>
              </dd>
              <dt className={styles.contactKey}>LinkedIn</dt>
              <dd className={styles.contactValue}>
                <a
                  className={styles.contactLink}
                  href="https://www.linkedin.com/in/isaac-bythewood/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Isaac Bythewood
                </a>
              </dd>
              <dt className={styles.contactKey}>GitHub</dt>
              <dd className={styles.contactValue}>
                <a
                  className={styles.contactLink}
                  href="https://github.com/overshard"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  /overshard
                </a>
              </dd>
              <dt className={styles.contactKey}>Discord</dt>
              <dd className={styles.contactValue}>
                <a
                  className={styles.contactLink}
                  href="https://discordapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Overshard#4907
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <div className={styles.gridRight}>
          <div className={styles.chat}>
            <TransitionGroup component={null}>
              {chatMessages.map((message, index) => {
                const transitionTimeout = (index + 2) * 2000;
                const transitionDelay = (index + 1) * 2000;
                const nodeRef = getLineRef(index);
                return (
                  <CSSTransition
                    key={index}
                    appear
                    timeout={{ appear: transitionTimeout }}
                    classNames="fade"
                    nodeRef={nodeRef}
                  >
                    <div
                      className={styles.chatLine}
                      ref={nodeRef}
                      style={{ transitionDelay: `${transitionDelay}ms` }}
                    >
                      <span className={styles.chatAvatar}>
                        <Image
                          src="/static/images/avatar.webp"
                          alt="Chat Avatar"
                          width={50}
                          height={50}
                        />
                      </span>
                      <div className={styles.chatBubble}>
                        {message}
                        <span>Isaac</span>
                      </div>
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Contact;
