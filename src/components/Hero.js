import React from 'react';
import { useLanguage } from '../App';
import '../style/Hero.css';

function Hero() {
    const { language } = useLanguage();

    const content = {
        en: {
            preTitle: "ALAN HWADER CHU  ·  曲華德",
            title: "AI / STEM Educator",
            titleAccent: "International Curriculum & Student Research",
            tagline: "Bringing Fortune 1 systems thinking, AI training, and 10+ years of international STEM teaching to schools that want differentiated programs — and to families that want their students to do real research, not just exams.",
            stats: [
                { num: "10+", label: "Years Teaching" },
                { num: "3", label: "Master's Degrees" },
                { num: "2", label: "Published Papers" },
                { num: "100+", label: "Students Mentored" }
            ],
            ctaSchool: "For Schools & Recruiters",
            ctaParent: "For Students & Families",
            availability: "Available for Shanghai international school roles · July – August 2026"
        },
        zh: {
            preTitle: "曲華德  ·  ALAN HWADER CHU",
            title: "AI / STEM 教育者",
            titleAccent: "国际课程 · 学生科研指导",
            tagline: "把 Fortune 1 级别的系统思维、AI 实战训练，以及 10+ 年国际课程教学经验，带给想要差异化课程的学校，以及希望学生做真科研而不只是刷题的家庭。",
            stats: [
                { num: "10+", label: "年教学经验" },
                { num: "3", label: "硕士学位" },
                { num: "2", label: "学术论文" },
                { num: "100+", label: "学生指导" }
            ],
            ctaSchool: "学校 / 招聘合作",
            ctaParent: "学生 / 家长咨询",
            availability: "可入职上海国际学校  ·  2026 年 7-8 月"
        }
    };

    const c = content[language];

    return (
        <section id="home" className="hero">
            <div className="container hero-inner">
                <div className="hero-pretitle">{c.preTitle}</div>
                <h1 className="hero-title">
                    {c.title}
                    <span className="hero-title-accent">{c.titleAccent}</span>
                </h1>
                <p className="hero-tagline">{c.tagline}</p>

                <div className="hero-availability">{c.availability}</div>

                <div className="hero-cta">
                    <a href="#services" className="hero-btn hero-btn-primary">{c.ctaSchool}</a>
                    <a href="#programs" className="hero-btn hero-btn-outline">{c.ctaParent}</a>
                </div>

                <div className="hero-stats">
                    {c.stats.map((s, i) => (
                        <div className="hero-stat" key={i}>
                            <div className="hero-stat-num">{s.num}</div>
                            <div className="hero-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
