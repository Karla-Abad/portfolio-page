import profilePic from "../images/profilePic.jpg";

const Profile = () => {
  return (
    <section className="profile">
      <img
        className="profile__picture"
        src={profilePic}
        alt="Developer picture"
      />
      <p className="profile__description">Front-end Developer Miami, FL</p>
      <p>
        Turning ideas into easy-to-use applications with modern technologies.
      </p>
      <div className="skillsBox">
        <div className="skills">
          <div className="badge badge--primary">JAVASCRIPT</div>
          <div className="badge badge--primary">REACT</div>
          <div className="badge badge--primary">CSS</div>
          <div className="badge badge--primary">HTML</div>
        </div>
        <div className="skills">
          <div className="badge badge--secondary">EXPRESS</div>
          <div className="badge badge--secondary">NODE.JS</div>
          <div className="badge badge--secondary">MONGOdb</div>
          <div className="badge badge--secondary">GIT</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
