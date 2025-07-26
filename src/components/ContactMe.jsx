import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-container" id="contact">
      <div className="nav-buttons">
        <button type="button" className="back-button" onClick={() => navigate('/')}>
          <FaHome style={{ marginRight: '8px' }} />
          Home
        </button>
        <button type="button" className="contact-button" onClick={() => navigate('/mywork')}>
          My Work →
        </button>
      </div>

      <div className="contact-content">
        <h2>Let's Connect</h2>
        <p>
          Got a question, proposal, or just want to say hello? Fill out the form below, and I’ll try my best to get back to you as soon as I can.
        </p>

        <form className="contact-form">
          <div className="name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-footer">
          <div className="social">
            <h4>Social</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/emad-eldeen-50a532368" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Omda-dev" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:emadtarik776@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="speak">
            <h4>Call Me</h4>
            <p>+20 100 739 2433</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
