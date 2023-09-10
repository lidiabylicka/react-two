const ProfileDetails = ({ name, email }) => {
  return (
    <div className="profile-details">
      <h2>{name}</h2>
      <h3>{email}</h3>
    </div>
  );
};

export default ProfileDetails;
