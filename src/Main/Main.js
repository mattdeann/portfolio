import './Main.css'
import pomodorobot from '../images/pomodorobot.png'
import falto from '../images/falto.png'
import timeTravelers from '../images/travel-tracker.png'

function Main() {
  return (
    <main>
      <article className="main-body">
        <article className="about">
          <h1 className="main-title">
            About Me
          </h1>
          <p className="main-content">
            Matt here! I'm a software developer living in Denver, CO. I love to build things, whether it's an application to help others increase productivity or a website for a company I believe in. I strive to ensure that the experiences I help create are performant, accessible, and beautiful. Originally a biologist, I switched to software development to apply my creative problem solving and interpersonal skills in a more effective manner.
          </p>
          <p className="main-content">
            I'm constantly tinkering with something new, code related or not. Lately I've been working on my SwiftUI skills so I can take some projects I've built in React and deploy them to iOS! You can check out some previous projects of mine below.
          </p>
        </article>
        <article className="projects">
          <h2 className="main-title">
            Projects I've Built
          </h2>
          <section className="project">
            <article classname="project-info">
              <h3>FALTO</h3>
              <p>Ecommerce website for Chicago based luxury fashion brand. Utilizes a minimalistic design to draw attention to product. Built on top of Squarespace using HTML / CSS / JS</p>
              <a href="https://www.faltoclothing.com/" rel="noopener noreferrer" target="_blank">Falto Website</a>
            </article>
            <img className="project-image" src={falto} alt="falto website"/>
          </section>
          <section className="project">
            <article classname="project-info">
              <h3>PomodoRobot</h3>
              <p>Pomodoro timer app created to help increase personal productivity and decrease burn out. Uses React state as well as window APIs in order to set an internal interval without relying on a network.</p>
              <a href="https://mattdeann.github.io/pomodoro/" rel="noopener noreferrer" target="_blank">PomodoRobot</a>
            </article>
            <img className="project-image" src={pomodorobot} alt="pomodorobot"/>
          </section>
          <section className="project">
            <article classname="project-info">
              <h3>Time Travelers</h3>
              <p>Web application written entirely in Vanilla JS that allows users to interact with a public API in order to view movie data. Upon assembly, the program automatically display movies from the database on page, with the ability to open each individual movie for more info.</p>
              <a href="https://github.com/mattdeann/travel-tracker" rel="noopener noreferrer" target="_blank">Time Travelers Repo</a>
            </article>
            <img className="project-image" src={timeTravelers} alt="time travelers"/>
          </section>
        </article>
      </article>
    </main>
  );
}

export default Main;