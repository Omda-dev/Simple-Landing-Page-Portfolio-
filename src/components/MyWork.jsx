import './MyWork.css';
import { useNavigate } from 'react-router-dom';
import eCommerce from '../eCommerce.jpeg';
import ps from '../ps.jpg';
import todo from '../todo.jpeg';
import { FaHome} from 'react-icons/fa';


const projects = [
  {
    title: 'Furniture E-commerce',
    description: 'A fully functional e-commerce website for furniture, built with React and REST API integration. Responsive and user-friendly.',
    link: 'https://github.com/Omda-dev/eCommerce-project.git',
    image: eCommerce
  },
  {
    title: 'PS Store Front',
    description: 'A PlayStation-style storefront showcasing the latest games using modern React components and styled layout.',
    link: 'https://github.com/Omda-dev/ps-store-front',
    image: ps
  },
  {
    title: 'To-Do App',
    description: 'A minimalistic to-do web app created with React. Clean UI and simple logic for managing tasks.',
    link: 'https://github.com/Omda-dev/To-Do-list.git',
    image: todo
  }
];

const MyWork = () => {
  const navigate = useNavigate();

  return (
    <section className="my-work-section">
      <div className="nav-buttons">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaHome style={{ marginRight: '8px' }} />
          Home
        </button>        <button className="contact-button" onClick={() => navigate('/contact')}>Contact →</button>
      </div>

      <h2 className="section-title">✨ My Projects</h2>
      <p className="section-subtitle">A few selected works showcasing my skills in React development.</p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">🔗 View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
