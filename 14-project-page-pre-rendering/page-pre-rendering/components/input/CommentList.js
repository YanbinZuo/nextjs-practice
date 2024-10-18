import React from "react";
import classes from "./styles/CommentList.module.css";

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.items.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
