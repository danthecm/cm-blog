import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CommentCard from "../../common/CommentCard";
import { BLOG_COMMENT } from "../../utils/urls";

const Comments = (props) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentsUpdated, setCommentsUpdated] = useState(false);
  const nameRef = useRef();
  const commentRef = useRef();
  const id = props.id;

  useEffect(() => {
    setLoading(true);
    axios
      .get(BLOG_COMMENT + `?blog_id=${id}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
    setCommentsUpdated(false);
  }, [commentsUpdated]);

  const submitCommentHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = nameRef.current.value;
    const comment = commentRef.current.value;
    const data = { comment, blog_id: props.id };
    if (name) {
      data.name = name;
    }
    axios
      .post(BLOG_COMMENT, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    setCommentsUpdated(true);
    e.target.reset();
  };
  return (
    <div className="commentSection">
      <h3>Write a comment!</h3>
      <form className="commentForm" onSubmit={submitCommentHandler}>
        <input type="text" ref={nameRef} placeholder="Enter Your Name" />
        <textarea
          ref={commentRef}
          required
          placeholder="Enter Your Comment"
        ></textarea>
        <button disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <h3>Comments</h3>
      {!loading && comments.length < 1 ? (
        <h4>No comments for this post</h4>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      )}
    </div>
  );
};

export default Comments;
