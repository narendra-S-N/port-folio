function Projects() {
  return (
    <section className="section projects-section reveal" id="projects">
      <div className="section-label"><span>04</span> Selected projects</div>
      <div className="projects-heading"><h2>Work that solves<br /><em>real problems.</em></h2><a className="text-link" href="mailto:narendraseerla@gmail.com">Start a conversation <span>↗</span></a></div>
      <div className="project-grid">
        <article className="project-card project-dark"><div className="project-visual visual-one"><span className="visual-word">CC Engage</span><span className="visual-mark">◒</span></div><div className="project-info"><div><h3>CC Engage</h3><p>Angular / Signals / REST APIs</p></div><span className="project-arrow">↗</span></div></article>
        <article className="project-card project-sage"><div className="project-visual visual-two"><span className="visual-stamp">TAFE<br />QUEENSLAND</span><span className="visual-line"></span></div><div className="project-info"><div><h3>TAFE Queensland</h3><p>React / AEM / Education</p></div><span className="project-arrow">↗</span></div></article>
        <article className="project-card project-orange"><div className="project-visual visual-three"><span className="visual-sun"></span><span className="visual-type">OOKA<br />SHOP</span></div><div className="project-info"><div><h3>OOKA</h3><p>React / TypeScript / eCommerce</p></div><span className="project-arrow">↗</span></div></article>
      </div>
    </section>
  )
}

export default Projects
