const Tab = ({ label, children }) => {
  return (
    <div className="tab">
      <div className="tab-label">
        {label}
        <div className="tab-children">{children}</div>
      </div>
    </div>
  );
};

export default Tab;
