const Hello = ({ newName, setNewName }) => {
  const isNameEmpty = newName.trim() === "";
  return (
    <>
      <div className="greeting-card">
        <div className="what-name">
          What&apos;s your name?
          <div>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
        </div>
        <div className="greeting">
          <h1>Hello, {isNameEmpty ? "User" : newName}</h1>
        </div>
      </div>
    </>
  );
};

export default Hello;
