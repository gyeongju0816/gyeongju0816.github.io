import './App.css';
import portraitImage from './assets/사진.jpg';
import githubLogo from './assets/github_img.png';

import { Routes, Route, NavLink } from 'react-router-dom';

import AboutMe from './aboutMe';
import Skills from './skill';
import Portfolio from './portfolio';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About me', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Portfolio', to: '/portfolio' },
];

const contactInfo = [
  { label: 'E-MAIL.', value: 'jkj081677@naver.com' },
  { label: 'GITHUB.', value: 'https://github.com/gyeongju0816', link: 'https://github.com/gyeongju0816' },
  { label: 'TEL.', value: '010-2993-5066' },
];

// ✅ 이 페이지를 만들 때 사용한 기술 (원하는 만큼 추가/삭제 가능)
const builtWith = ['React', 'TypeScript', 'React Router', 'CSS', 'Responsive UI'];

function HomePage() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero__left">
          <h1 className="split-hero__name">조경주</h1>
          <p className="split-hero__desc">신입개발자</p>

          <div className="contact-row">
            {contactInfo.map((item) => (
              <article className="contact-card" key={item.label}>
                <span className="contact-card__label">{item.label}</span>
                {item.link ? (
                  <a className="contact-card__value" href={item.link} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-card__value">{item.value}</span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="split-hero__right">
          <div className="portrait" style={{ backgroundImage: `url(${portraitImage})` }} />
        </div>
      </section>

      {/* ✅ 기술 스택 + 설명 배너 */}
      <section className="info-panel">
        <div>
          <p className="info-panel__title">BUILT WITH</p>

          <div className="info-panel__meta">
            {builtWith.map((t) => (
              <span className="tech-pill" key={t}>
                {t}
              </span>
            ))}
          </div>

          <p className="info-panel__caption">
            React 기반 SPA로 구성하고, Router로 페이지를 분리했으며 CSS로 레이아웃과 반응형 UI를 구현했습니다.
          </p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <main className="page">
      <div className="canvas">
        <nav className="hero-nav">
          <a className="hero-nav__brand" href="https://github.com/gyeongju0816" target="_blank" rel="noreferrer">
            <img className="hero-nav__logo" src={githubLogo} alt="GitHub logo" />
            <span className="hero-nav__brand-text">GitHub</span>
          </a>

          <div className="hero-nav__links">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `hero-nav__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </main>
  );
}
