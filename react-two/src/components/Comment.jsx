import { useState } from "react";

const Comment = ({ username, commentText, addReply, replies }) => {
  const [replyText, setReplyText] = useState("");
  const handleReply = () => {
    if (replyText) {
      addReply(replyText);
      setReplyText("");
    }
  };

  return (
    <>
      <div className="comment">
        <div className="comment-username">{username}:</div>
        <div className="comment-text">&quot;{commentText}&quot;</div>
        <button className="reply-button" onClick={() => handleReply(replyText)}>
          Reply
        </button>
        <input
          className="reply-input"
          type="text"
          value={replyText}
          placeholder="Type your reply and hit Reply button"
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div className="replies">
          {" "}
          Replies:
          {replies.map((reply, index) => (
            <div className="reply" key={index}>
              &quot;{reply}&quot;
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
