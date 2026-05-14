import React from 'react';
import { useLanguage } from '../App';

function Footer() {
    const { language } = useLanguage();

    const content = {
        en: {
            tagline: "AI / STEM Educator · International Curriculum · Student Research",
            availability: "Open to Shanghai international school roles · July – August 2026",
            copyright: "© 2026 Alan Hwader Chu",
            contact: "Contact",
            email: "Email",
            wechat: "WeChat"
        },
        zh: {
            tagline: "AI / STEM 教育者  ·  国际课程  ·  学生科研",
            availability: "可入职上海国际学校  ·  2026 年 7-8 月",
            copyright: "© 2026 曲華德 Alan Hwader Chu",
            contact: "联系方式",
            email: "邮箱",
            wechat: "微信"
        }
    };

    const c = content[language];

    return (
        <footer style={{
            background: '#1F3A5F', color: '#fff', padding: '48px 0 32px'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 32, marginBottom: 32
                }}>
                    <div style={{ flex: '1 1 320px' }}>
                        <h3 style={{
                            fontSize: '1.4rem', fontWeight: 700, marginBottom: 10,
                            letterSpacing: '0.5px'
                        }}>
                            Alan Hwader Chu  ·  曲華德
                        </h3>
                        <p style={{
                            fontSize: '0.95rem', color: 'rgba(255,255,255,0.78)',
                            marginBottom: 14, lineHeight: 1.6
                        }}>
                            {c.tagline}
                        </p>
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.12)',
                            padding: '6px 14px', borderRadius: 999,
                            fontSize: '0.85rem',
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            {c.availability}
                        </div>
                    </div>

                    <div style={{ flex: '0 0 auto', minWidth: 220 }}>
                        <h4 style={{
                            fontSize: '0.85rem', letterSpacing: '2px',
                            fontWeight: 700, marginBottom: 14, textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.6)'
                        }}>
                            {c.contact}
                        </h4>
                        <div style={{ fontSize: '0.95rem', marginBottom: 8 }}>
                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{c.email} · </span>
                            <a href="mailto:alanhdchu@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                                alanhdchu@gmail.com
                            </a>
                        </div>
                        <div style={{ fontSize: '0.95rem' }}>
                            <span style={{ color: 'rgba(255,255,255,0.65)' }}>{c.wechat} · </span>
                            <span style={{ color: '#fff' }}>ahdchu61</span>
                        </div>
                    </div>
                </div>

                <div style={{
                    paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)',
                    textAlign: 'center', fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.55)'
                }}>
                    {c.copyright}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
