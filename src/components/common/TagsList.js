import React from "react";

const TagsList = (props) => {
  return (
    <div>
      {props.tags.map((tag, index) => (
        <p key={index} className="cardTag">
          {tag.title}
        </p>
      ))}
    </div>
  );
};

export default TagsList;
