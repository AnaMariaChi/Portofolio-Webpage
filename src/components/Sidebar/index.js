import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/A.png'
import LogoSubtitle from '../../assets/images/AnaChi2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoA} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="anachi" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ana-maria-chifan-690711246/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AnaMariaChi"
        >
          <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="skype:live:ana.maria.chi">
          <FontAwesomeIcon icon={faSkype} color="4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
