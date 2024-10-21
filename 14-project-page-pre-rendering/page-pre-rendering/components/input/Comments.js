import React, { useContext, useEffect, useState } from "react";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import classes from "./styles/Comments.module.css";
import NotificationContext from "@/store/NotificationContext";

function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [isCommentsLoading, setIScommentsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);


  useEffect(() => {
    if (showComments) {
      setIScommentsLoading(true);
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.comments) {
            setComments(data.comments);
            setIScommentsLoading(false);
          }
        });
    }
  }, [showComments]);

  const toggleShowComments = () => {
    setShowComments((prevStatus) => !prevStatus);
  };
  const addCommentHandler = (commentData) => {
    notificationCtx.showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored into a database.",
      status: "pending",
    });
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      })
      .then((data) =>
        notificationCtx.showNotification({
          title: "Success!",
          message: data.message,
          status: "success",
        })
      )
      .catch((error) =>
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        })
      );
  };
  return (
    <section className={classes.comments}>
      <button onClick={toggleShowComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isCommentsLoading && <CommentList items={comments} />}
      {showComments && isCommentsLoading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
