import React from "react";
import moment from "moment";


const AuthorInfo = (props) => {
  const text = props.content
  const readingTime = (text) => {
      console.log("The text is ", text)
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      return Math.ceil(words / wpm);
  }
  const authorName = props.authorName.charAt(0).toUpperCase() + props.authorName.slice(1)
  const dateTime = moment(new Date(props.dateTime)).format("DD MMMM YYYY")
  const readTime = readingTime(text)
    return(
        <div className="author-info">
          <p>
            <i className="fa-regular fa-user"></i>
            {authorName} |{" "}
            <i className="fa-solid fa-calendar-days"></i>
            {dateTime} |
            <i className="fa-regular fa-clock"></i>{readTime} mins read
          </p>
        </div>
    )
}

export default AuthorInfo