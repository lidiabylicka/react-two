import { useState } from "react";
import Comment from "./Comment";

const arrayOfComments = [
  {
    username: "Yogurt123",
    commentText: "Quick and reliable lawn mower service",
    replies: [],
  },
  {
    username: "Phogurt123",
    commentText: "Slow lawn mower service",
    replies: [],
  },
  {
    username: "Fogurt123",
    commentText: "Quick and reliable strimmer service",
    replies: [],
  },
  {
    username: "Gogurt123",
    commentText:
      "Awful service, awful service, awful service,awful service,awful service,awful service,awful service,awful service,awful service,awful service,",
    replies: [],
  },
  {
    username: "Matcha3",
    commentText: "The best service",
    replies: [],
  },
  {
    username: "dev_01",
    commentText: "OK",
    replies: [],
  },
];

const CommentList = () => {
  const commentCount = arrayOfComments.length;
  const [comments, setComments] = useState(arrayOfComments);
  console.log([comments, setComments]);

  const addReply = (commentIndex, replyText) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].replies.push(replyText);
    setComments(updatedComments);
  };

  return (
    <>
      <div className="comment-board">
        <h2>Comments</h2>
        <div className="comment-list">
          <div className="comment-count">Total: {commentCount}</div>
          <div className="single-comment">
            {arrayOfComments.map((comment, index) => (
              <Comment
                key={index}
                username={comment.username}
                commentText={comment.commentText}
                replies={comment.replies}
                addReply={(replyText) => addReply(index, replyText)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;
