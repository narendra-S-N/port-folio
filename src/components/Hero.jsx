function Hero() {
  return (
    <section className="hero-section reveal" id="main">
      <div className="hero-copy">
        <p className="eyebrow">Front-end developer / React / Angular / AEM</p>
        <h1 aria-label="Building digital experiences that work."><span className="word word-one">Building</span> <span className="word word-two">digital</span><br /><em><span className="word word-three">experiences</span></em> <span className="word word-four">that</span> <span className="word word-five">work.</span></h1>
        <p className="hero-intro">I am Narendra Seerla, a front-end developer with 3+ years of experience creating responsive, maintainable web applications.</p>
        <div className="hero-actions">
          <a className="circle-link" href="#projects" aria-label="View selected projects">↓</a>
          <a className="resume-link" href="/resume.pdf" download="Narendra-Seerla-Resume.pdf">Download resume <span>↓</span></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Narendra Seerla initials illustration" role="img">
        <div className="art-ring ring-one"></div><div className="art-ring ring-two"></div><div className="art-sun"></div>
        <div className="art-label">OPEN TO<br />FRONT-END<br />OPPORTUNITIES</div><div className="art-initials">N<span>/</span>S</div>
      </div>
    </section>
  )
}

export default Hero
