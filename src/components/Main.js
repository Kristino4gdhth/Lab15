import React from "react";
import Section from "./Section";
import Article from "./Article";
import Aside from "./Aside";
import "../styles.css";

const Main = () => {
  return (
    <main className="main">
        <Aside />
        <Article />
        <Section />
    </main>
  );
};

export default Main;
