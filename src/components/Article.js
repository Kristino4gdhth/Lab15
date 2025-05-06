import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "../sections/News";
import About from "../sections/About";
import Contacts from "../sections/Contacts";
import PageNotFound from "../sections/pageNotFound";
import "../styles.css";

const Article = () => {
  return (
    <div className="center">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Article;
