import { buildFeedbackPath, extractFeedback } from ".";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filepath = buildFeedbackPath();
  const fileData = extractFeedback(filepath);
  const feedback = fileData.find(feedback => feedback.id === feedbackId)
  res.status(200).json({feedback})
}

export default handler;