import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const { feedbackItems } = props;
  const [feedback, setFeedback] = useState("");
  const handleShowDetails = (id) => [
    fetch(`api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => [setFeedback(data.feedback)]),
  ];
  return (
    <>
      <p>{feedback.email}</p>
      <ul>
        {feedbackItems.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text} {" "}
            <button onClick={handleShowDetails.bind(this, feedback.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const fileData = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: fileData,
    },
  };
}

export default FeedbackPage;
