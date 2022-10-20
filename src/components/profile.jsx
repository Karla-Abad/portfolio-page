import profilePic from "../images/profilePic.jpg";

const Profile = () => {
  return (
    <section className="profile">
      <img
        className="profile__picture"
        src={profilePic}
        alt="Developer picture"
      />
      <p className="profile__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga
        quam, voluptate voluptas delectus at!
      </p>
      <div className="skills">
        <span className="badge badge--primary">JAVASCRIPT</span>
        <span className="badge badge--primary">REACT</span>
        <span className="badge badge--primary">CSS</span>
      </div>
      <div className="skills">
        <span className="badge badge--secondary">NODE.JS</span>
        <span className="badge badge--secondary">MONGOdb</span>
        <span className="badge badge--secondary">EXPRESS</span>
      </div>
    </section>
  );
};

export default Profile;
