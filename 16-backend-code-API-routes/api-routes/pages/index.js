import { useRef, useState } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [feedbackItems, setFeedbackItems] = useState([]);

  const handleLoadFeedbacks = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.feedback);
        setFeedbackItems(data.feedback);
      });
  };

  function handleFeedbackSubmit(event) {
    event.preventDefault();

    const emailInput = emailRef.current.value;
    const feedbackInput = feedbackRef.current.value;
    const reqBody = {
      email: emailInput,
      text: feedbackInput,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={handleFeedbackSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" rows={5} ref={feedbackRef} />
        </div>
        <button>Submit Feedback</button>
      </form>
      <button onClick={handleLoadFeedbacks}>Load feedbacks</button>
      <ul>
        {feedbackItems.map((feedback) => (
          <li key={feedback.id}>{feedback.text}</li>
        ))}
      </ul>
    </>
  );
}
