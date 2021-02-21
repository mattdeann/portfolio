import './Main.css'

function Main() {
  return (
    <main>
      
      <article className="main-body">
        <article className="about">
          <h1 className="main-title">
            About Me
          </h1>
          <p className="main-content">
          Hey there!, I'm Matt, a software developer living in Denver, CO. I love to build things, whether it's an application to help others increase productivity or a website for a company I believe in. I strive to ensure that the experiences I help create end up performant, accessible, and beautiful. Originally a biologist, I switched to software development to apply my creative problem solving and interpersonal skills in a more effective manner.
          </p>
        </article>
        <article className="projects">
          <h1 className="main-title">
            Projects I've Built
          </h1>
          <section className="project">
            FALTO
          </section>
        </article>
      </article>
    </main>
  );
}

export default Main;