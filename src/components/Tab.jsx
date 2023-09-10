const Tab = ({ label, isActive, onClick }) => {
  const tabClassName = isActive ? "active-tab" : "inactive-tab";

  return (
    <div className={`tab ${tabClassName}`} onClick={onClick}>
      <div className="tab-label">{label}</div>
    </div>
  );
};

export default Tab;
