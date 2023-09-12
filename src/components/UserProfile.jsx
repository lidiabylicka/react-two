import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";

const UserProfile = ({ profile = {} }) => {
  const { src = "", name = "", email = "" } = profile;
  return (
    <div className="user-profile">
      <ProfilePicture src={src} className="profile-picture" />
      <ProfileDetails name={name} email={email} className="profile-details" />
    </div>
  );
};

export default UserProfile;
