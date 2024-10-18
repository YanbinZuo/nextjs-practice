import React, { useEffect, useState } from "react";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import classes from "./styles/Comments.module.css";

function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  console.log("Show comments: ", showComments);

  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => setComments(data.comments));
    }
  }, [showComments]);

  const toggleShowComments = () => {
    setShowComments((prevStatus) => !prevStatus);
  };
  const addCommentHandler = (commentData) => {
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <section className={classes.comments}>
      <button onClick={toggleShowComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
