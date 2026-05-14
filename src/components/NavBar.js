import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

function Navbar() {
    const { language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navData = {
        en: {
            items: ['Home', 'For Schools', 'About', 'Journey', 'Insights', 'Programs', 'Contact'],
            ids:   ['home', 'services',   'about', 'timeline','insights', 'programs', 'contact']
        },
        zh: {
            items: ['主页', '学校合作', '关于我', '轨迹', '观察', '项目', '联系'],
            ids:   ['home', 'services', 'about', 'timeline', 'insights', 'programs', 'contact']
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
             style={{
                 background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.92)',
                 backdropFilter: 'blur(10px)',
                 boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
                 transition: 'all 0.25s ease',
                 padding: '12px 0'
             }}>
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home"
                   style={{ color: '#1F3A5F', fontSize: '1.15rem', letterSpacing: '0.5px' }}>
                    Alan Hwader Chu · 曲華德
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {navData[language].items.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className="nav-link"
                                    href={`#${navData[language].ids[index]}`}
                                    style={{ color: '#333', fontWeight: 500, padding: '8px 14px' }}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="btn btn-sm"
                        onClick={toggleLanguage}
                        aria-label="Toggle Language"
                        style={{
                            border: '1.5px solid #1F3A5F',
                            color: '#1F3A5F',
                            fontWeight: 600,
                            padding: '6px 16px'
                        }}
                    >
                        {language === 'en' ? '中文' : 'English'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
