import './Header.css'
import logo from '../images/logo.svg';
import cssImg from '../images/css-img.png'
import htmlImg from '../images/html-img.png'
import jsImg from '../images/js-img.png'
import mongoImg from '../images/mongo-img.png'
import nodeImg from '../images/node-img.png'
import wpImg from '../images/wordpress-img.png'

function Header() {
  return (
    <header>
      <h1 className="name">
        Matthew Dean
      </h1>
      <article>
        <p className="job-title">
          Software Developer
        </p>
        <p className="tech-stack">
          <img className="quote-image" src={htmlImg} alt="html logo"/>
          <img className="quote-image" src={cssImg} alt="css logo"/>
          <img className="quote-image" src={jsImg} alt="js logo"/>
          <img className="quote-image" src={logo} alt="react logo"/>
          <img className="quote-image" src={mongoImg} alt="mongoDB logo"/>
          <img className="quote-image" src={nodeImg} alt="node js logo"/>
          <img className="quote-image" src={wpImg} alt="wordpress logo"/>
        </p>
      </article>
    </header>
  );
}

export default Header;