import React, { useState } from "react";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import classes from "./styles/Comments.module.css";

function Comments() {
  const [showComments, setShowComments] = useState(false);

  console.log("Show comments: ", showComments);

  const toggleShowComments = () => {
    setShowComments((prevStatus) => !prevStatus);
  };
  const addCommentHandler = (commentData) => {

  }
  return (
    <section className={classes.comments}>
      <button onClick={toggleShowComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;
