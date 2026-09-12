const skills = [
  ['Frontend', 'HTML5 / CSS3 / SCSS / Bootstrap / Tailwind CSS / Responsive Web Design'],
  ['JavaScript', 'JavaScript / ES6+ / TypeScript / jQuery'],
  ['Frameworks & libraries', 'React.js / Angular / Redux / Next.js'],
  ['Angular', 'Angular Components / Forms / CRUD / Angular Signals / HttpClient / REST API Integration'],
  ['React', 'Reusable Components / Single-Page Applications / Redux State Management'],
  ['AEM', 'Adobe Experience Manager / AEM Components'],
  ['APIs & tools', 'REST APIs / JSON / API Integration / Git / Jira'],
  ['Delivery', 'MySQL / Agile / Sprint Management / Client Interaction / Testing / Cross-Browser Compatibility'],
]

function Skills() {
  return (
    <section className="section skills-section reveal" id="skills">
      <div className="section-label"><span>02</span> Technical skills</div>
      <div className="skills-heading"><h2>Tools are a means.<br /><em>People are the point.</em></h2><p>A practical toolkit for building responsive, reliable, and useful digital experiences.</p></div>
      <div className="skill-list">{skills.map(([title, details], index) => <div className="skill-row" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{details}</p><b>+</b></div>)}</div>
    </section>
  )
}

export default Skills
