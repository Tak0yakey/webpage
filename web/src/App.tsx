import { useState } from 'react';
import './App.css';

// Mock Data for News
const newsItems = [
  {
    id: 1,
    title: '建築鯖',
    date: '2025-03-15',
    summary: '建築鯖というか生活鯖がリリースされました。',
    image: 'https://placehold.co/600x400/1a1a1a/55ff55?text=Minecarft+Building+Server+Released'
  }
];

function App() {
  const [copied, setCopied] = useState(false);
  const serverIp = 'discord.gg/RYwkDq2b';

  const copyIp = () => {
    window.location.href = 'https://discord.gg/RYwkDq2b'
    setTimeout(() => { setCopied(false) }, 1000)
  };

  // Simulate live player count updates

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Null<span className="highlight">SERVERS</span></div>
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#news">News</a></li>
          </ul>
          <a href="https://discord.gg/RYwkDq2b" className="btn-discord">Join Discord</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to <br /> <span className="glitch" data-text="NullSERVER">NullSERVER</span></h1>
          <p className="hero-subtitle">The ultimate minecraft experience. Join thousands of players today.</p>

          <div className="server-ip-box" onClick={copyIp}>
            <span className="ip-label">Server DISCORD:</span>
            <span className="ip-address"><a href='https://discord.gg/RYwkDq2b'>{serverIp}</a></span>
            <span className="copy-tooltip">{copied ? 'Clicked!' : 'Click to Join'}</span>
          </div>
        </div>
      </header>

      {/* News Section */}
      <section className="section news-section" id="news">
        <div className="container">
          <h2 className="section-title">Latest <span className="highlight">News</span></h2>
          <div className="news-grid">
            {newsItems.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <a href="#" className="read-more">Read More &rarr;</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-col">
            <h4>Nullwebservice</h4>
            <p>&copy; 2026 Nullwebservice<br />Not affiliated with Mojang AB.</p>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li><a href="$">Rules</a></li>
              <li><a href="#">Staff</a></li>
              <li><a href="#">Vote</a></li>
              <li><a href="#">Wiki</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="https://discord.gg/RYwkDq2b">Discord</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;