import moment from "moment";
import React from "react";

const CommentCard = (props) => {
  const {comment} = props
    return (
        <div className="commentCard">
          <p>
            {comment.comment}
          </p>
          <p className="author-info">By {comment.name} on {moment(new Date(comment.created_at)).format("DD MMMM YYYY")}</p>
        </div>
    )
}


export default CommentCard