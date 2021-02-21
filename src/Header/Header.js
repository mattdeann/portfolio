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
      <article className="intro">
        <section className="left-header">
          <p className="greeting">
            Hey there! My name is
          </p>
          <h1 className="name">
            Matthew Dean
          </h1>
          <p className="job-title">
            I'm a software developer.
          </p>
        </section>
        <section className="right-header">
            <a href="mailto:deanma95@gmail.com" className="email-link">
              Let's Connect!
            </a>
          </section>
      </article>
      <article>
        <p className="tech-stack">
          <img className="quote-image bubble" src={htmlImg} alt="html logo"/>
          <img className="quote-image bubble" src={cssImg} alt="css logo"/>
          <img className="quote-image bubble" src={jsImg} alt="js logo"/>
          <img className="quote-image spin" src={logo} alt="react logo"/>
          {/* <img className="quote-image bubble" src={mongoImg} alt="mongoDB logo"/> */}
          <img className="quote-image bubble" src={nodeImg} alt="node js logo"/>
          {/* <img className="quote-image bubble" src={wpImg} alt="wordpress logo"/> */}
        </p>
      </article>
    </header>
  );
}

export default Header;