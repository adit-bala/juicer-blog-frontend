import React from "react";
import "../styles/MainPage.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function PreviewPost({ article, author }) {
  const readingTime = Math.round(
    (article.body.toString().split(" ").length +
      article.title.toString().split(" ").length +
      article.description.toString().split(" ").length) /
      200
  );
  return (
    <div className="post-preview">
      <Link
        className="article-title"
        to={`${process.env.PUBLIC_URL}/${article.slug}`}
      >
        {" "}
        {article.title}{" "}
      </Link>
      <div className="author-date-div">
        {/* <div className="pfp-container">
        <img src={article.author.picture}></img>
      </div> */}
        <h6 className="article-author"> {author.name} </h6>
        <h6 className="article-date"> {formatDate(article.publishedAt)} </h6>
        <h6 className="article-date"> {readingTime} min read</h6>
      </div>
      <h4 className="article-desc"> {article.description} </h4>
    </div>
  );
}

function formatDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = new Date(date);
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  return month + "\n" + day + ", " + year;
}
