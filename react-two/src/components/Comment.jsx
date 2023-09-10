const Comment = ({ username, commentText }) => {
  return (
    <>
      <div className="comment">
        <div className="comment-username">{username}:</div>
        <div className="comment-text">&quot;{commentText}&quot;</div>
      </div>
    </>
  );
};

export default Comment;
