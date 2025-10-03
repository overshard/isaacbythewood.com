import React, { useEffect, useState, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Image from "next/image";

import Page from "../components/page";
import styles from "@styles/pages/index.module.css";

const Index = () => {
  const words = ["Developer", "SysAdmin", "DevOps", "Consultant"];
  const [currentWords, setCurrentWord] = useState([words[0]]);
  const currentWordsRef = useRef(currentWords);
  currentWordsRef.current = currentWords;
  const wordRefs = useRef(new Map());
  const getWordRef = (key) => {
    if (!wordRefs.current.has(key)) {
      wordRefs.current.set(key, React.createRef());
    }
    return wordRefs.current.get(key);
  };

  useEffect(() => {
    const wordsInterval = setInterval(() => {
      let nextWordIndex = words.indexOf(currentWordsRef.current[0]) + 1;
      if (nextWordIndex < words.length) setCurrentWord([words[nextWordIndex]]);
      else setCurrentWord([words[0]]);
    }, 2000);
    return () => {
      clearInterval(wordsInterval);
    };
  }, []);

  return (
    <Page title="Senior Solutions Architect located in Elkin, NC">
      <div className={styles.imageWrapper}>
        <Image
          src="/static/images/art/acrylic-pours/005.webp"
          alt="#005 Nebulas in Triangulum"
          loading="eager"
          layout="fill"
          priority={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <TransitionGroup component="div" className={styles.words}>
        {currentWords.map((word) => {
          const nodeRef = getWordRef(word);
          return (
            <CSSTransition
              key={word}
              timeout={1000}
              classNames={{
                appear: styles.wordAppear,
                appearActive: styles.wordAppearActive,
                appearDone: styles.wordAppearDone,
                enter: styles.wordEnter,
                enterActive: styles.wordEnterActive,
                enterDone: styles.wordEnterDone,
                exit: styles.wordExit,
                exitActive: styles.wordExitActive,
              }}
              appear
              nodeRef={nodeRef}
            >
              <h3 className={styles.word} ref={nodeRef}>
                {word}
              </h3>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <h1 className={styles.description}>
        Senior Solutions Architect located in Elkin, NC
      </h1>
      <h2 className={styles.name}>Isaac</h2>
      <h2 className={styles.name} style={{ animationDelay: "100ms" }}>
        Bythewood
      </h2>
    </Page>
  );
};

export default Index;
