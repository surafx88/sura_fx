import "./App.css";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">SURA FX</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
        </ul>
      </nav>

      {/* HOME */}
<section id="home" className="section hero">
  <h2 className="hero-title">Trade Smart. Trade Disciplined.</h2>
  <p className="hero-subtitle">
    A professional trading ecosystem focused on ICT & CRT concepts,
    execution discipline, and performance tracking.
  </p>
  <div className="hero-actions">
    <a href="#education" className="btn primary">Start Learning</a>
    <a href="#blog" className="btn secondary">Market Insights</a>
  </div>
</section>


      {/* EDUCATION */}
      <section id="education" className="section">
        <h2>Education</h2>
        <p>Structured ICT & CRT concepts. Launching soon.</p>
      </section>

      {/* BLOG */}
      <section id="blog" className="section">
        <h2>Blog</h2>
        <p>Market insights, trade breakdowns, and psychology.</p>
      </section>

      {/* DASHBOARD */}
      <section id="dashboard" className="section">
        <h2>Dashboard</h2>
        <p>Performance tracking and analytics. Coming soon.</p>
      </section>
    </div>
  );
}

export default App;
