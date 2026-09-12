function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#main" aria-label="Go to homepage">Narendra Seerla<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="/resume.pdf" download="Narendra-Seerla-Resume.pdf">Resume</a>
      </nav>
      <a className="header-contact" href="mailto:narendraseerla@gmail.com">Let's talk <span>↗</span></a>
    </header>
  )
}

export default Header
