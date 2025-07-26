import './LandingPage.css';
import emad from '../emad.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="content">
          <img src={emad} alt="Emad" className="profile-img" />

          <h1>Hi, I'm <span>Emad</span></h1>
          <p className="subtitle">Frontend Developer | React Specialist</p>

          <p className="description">
            I craft modern, responsive web interfaces using clean HTML, CSS, and React.
            Passionate about performance, design, and usability.
          </p>

          <div className="buttons">
           <Link to='/contact' className="btn outline">Contact Me</Link> 
            <Link to='/mywork' className="btn outline">See My Work</Link>
          </div>

          <div className="social-links">
            <a href="https://github.com/Omda-dev" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/emad-eldeen-50a532368" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
