// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <div className="l-element">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <h1 className="link-element">Wave</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="link-element">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-element">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-element">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
