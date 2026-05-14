import React, { useState } from 'react';
import { useLanguage } from '../App';

function Contact() {
    const { language } = useLanguage();
    const [role, setRole] = useState('parent');

    const content = {
        en: {
            sectionLabel: "GET IN TOUCH",
            title: "Let's talk",
            intro: "Whether you're a school exploring leadership candidates or a family looking for serious academic support, please reach out.",
            roleParent: "Parent / Student",
            roleSchool: "School / Recruiter",
            roleOther: "Other",
            name: "Your name",
            email: "Email",
            org: "School or organization (optional)",
            message: "Message",
            send: "Send message",
            directEmail: "or email directly:",
            wechatLabel: "WeChat:"
        },
        zh: {
            sectionLabel: "联系我",
            title: "聊聊看",
            intro: "无论您是寻找领导候选人的学校，还是为孩子寻找认真学术支持的家庭，欢迎联系。",
            roleParent: "家长 / 学生",
            roleSchool: "学校 / 招聘方",
            roleOther: "其他",
            name: "您的称呼",
            email: "电子邮箱",
            org: "学校或机构（选填）",
            message: "留言",
            send: "发送",
            directEmail: "或直接邮件联系：",
            wechatLabel: "微信："
        }
    };

    const c = content[language];

    return (
        <section id="contact" className="py-5" style={{ background: '#FAFBFC', padding: '90px 0' }}>
            <div className="container" style={{ maxWidth: 760 }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <div style={{
                        fontSize: '0.85rem', letterSpacing: '3px', fontWeight: 700,
                        color: '#1F3A5F', marginBottom: 14, textTransform: 'uppercase'
                    }}>{c.sectionLabel}</div>
                    <h2 style={{
                        fontSize: '2.2rem', fontWeight: 800, color: '#1A1A1A',
                        marginBottom: 18, letterSpacing: '-0.5px'
                    }}>{c.title}</h2>
                    <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>{c.intro}</p>
                </div>

                <div style={{
                    background: '#fff', borderRadius: 12, padding: '36px 32px',
                    boxShadow: '0 4px 20px rgba(31, 58, 95, 0.06)',
                    border: '1px solid #E5E8EC'
                }}>
                    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden><label>Don't fill: <input name="bot-field" /></label></p>

                        <div style={{ marginBottom: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                            {[
                                { v: 'parent', label: c.roleParent },
                                { v: 'school', label: c.roleSchool },
                                { v: 'other',  label: c.roleOther }
                            ].map(r => (
                                <label key={r.v} style={{
                                    flex: 1, minWidth: 120, padding: '10px 14px',
                                    border: role === r.v ? '2px solid #1F3A5F' : '2px solid #E5E8EC',
                                    background: role === r.v ? 'rgba(31,58,95,0.05)' : '#fff',
                                    borderRadius: 8, cursor: 'pointer', textAlign: 'center',
                                    fontWeight: role === r.v ? 600 : 400,
                                    color: role === r.v ? '#1F3A5F' : '#555',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.2s'
                                }}>
                                    <input
                                        type="radio" name="role" value={r.v}
                                        checked={role === r.v}
                                        onChange={() => setRole(r.v)}
                                        style={{ display: 'none' }}
                                    />
                                    {r.label}
                                </label>
                            ))}
                        </div>

                        <div className="mb-3">
                            <input type="text" name="name" className="form-control" placeholder={c.name} required />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" className="form-control" placeholder={c.email} required />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="org" className="form-control" placeholder={c.org} />
                        </div>
                        <div className="mb-3">
                            <textarea name="message" className="form-control" rows="5" placeholder={c.message} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-lg w-100" style={{
                            background: '#1F3A5F', color: '#fff', fontWeight: 600,
                            padding: '12px', borderRadius: 8
                        }}>
                            {c.send}
                        </button>
                    </form>

                    <div style={{
                        marginTop: 28, paddingTop: 24, borderTop: '1px solid #E5E8EC',
                        textAlign: 'center', fontSize: '0.95rem', color: '#666'
                    }}>
                        <div style={{ marginBottom: 8 }}>
                            {c.directEmail} <strong style={{ color: '#1F3A5F' }}>alanhdchu@gmail.com</strong>
                        </div>
                        <div>
                            {c.wechatLabel} <strong style={{ color: '#1F3A5F' }}>ahdchu61</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
