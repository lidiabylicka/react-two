import { useState } from "react";

const Comment = ({ username, commentText, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const replies = useState([""]);
  const handleReply = () => {
    if (replyText) {
      addReply(replyText);
      setReplyText("");
      replies.push(replyText);
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
          type="text"
          value={replyText}
          placeholder="Type your reply and hit Reply button"
          onChange={(e) => setReplyText(e.target.value)}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     this.setState({ value: e.target.value });
          //     console.log("enter comment");
          //   }
          // }}
        />
      </div>
    </>
  );
};

export default Comment;
