<<<<<<< HEAD
import './App.css';

const highlights = [
  {
    title: 'Role discovery',
    description: 'Explore AI-adjacent paths such as prompt design, data analysis, automation, and product strategy.',
  },
  {
    title: 'Skill mapping',
    description: 'Turn your current background into a focused plan with the strongest skills to grow next.',
  },
  {
    title: 'Learning roadmap',
    description: 'Follow a practical sequence of projects, courses, and portfolio milestones to stay on track.',
  },
];

const roadmap = ['Assess your strengths', 'Choose a target role', 'Build portfolio evidence', 'Sharpen your interview story'];

function App() {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">AI Career Compass</p>
          <h1>Find your next move with clarity and momentum.</h1>
          <p className="hero-text">
            Discover roles, skills, and learning paths tailored to your background so you can confidently step into the future of work.
          </p>
          <div className="hero-actions">
            <button type="button">Explore roles</button>
            <button type="button" className="secondary-btn">Build your roadmap</button>
          </div>
        </div>
        <div className="hero-panel" aria-label="Career guidance summary">
          <h2>Recommended next step</h2>
          <p>Start with a strong foundation in AI literacy, communication, and one high-impact project.</p>
          <ul>
            <li>Learn core AI concepts</li>
            <li>Practice with a portfolio project</li>
            <li>Translate experience into career stories</li>
          </ul>
        </div>
      </header>

      <main className="content-grid">
        <section className="section-card" aria-labelledby="highlights-title">
          <h2 id="highlights-title">Why teams use AI Career Compass</h2>
          <div className="card-grid">
            {highlights.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card roadmap-card" aria-labelledby="roadmap-title">
          <h2 id="roadmap-title">A simple path forward</h2>
          <ol>
            {roadmap.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </main>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 771052cf0d219e764ae3d9dedc98b44cf8188f90
    </div>
  );
}

export default App;
