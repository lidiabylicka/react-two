import Comment from "./Comment";

const arrayOfComments = [
  {
    username: "Yogurt123",
    commentText: "Quick and reliable lawn mower service",
  },
  {
    username: "Phogurt123",
    commentText: "Slow lawn mower service",
  },
  {
    username: "Fogurt123",
    commentText: "Quick and reliable strimmer service",
  },
  {
    username: "Gogurt123",
    commentText:
      "Awful service, awful service, awful service,awful service,awful service,awful service,awful service,awful service,awful service,awful service,",
  },
  {
    username: "Matcha3",
    commentText: "The best service",
  },
  {
    username: "dev_01",
    commentText: "OK",
  },
];

const CommentList = () => {
  const commentCount = arrayOfComments.length;
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;
