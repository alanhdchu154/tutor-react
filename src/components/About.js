import React from 'react';
import { useLanguage } from '../App';
import '../style/About.css';

function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            sectionLabel: "ABOUT ME",
            title: "Cross-disciplinary educator with a builder's mindset",
            description: "I'm an educator who's spent equal time in research labs, classrooms, and a Fortune 1 engineering org — and I bring all three to international education. My current focus is helping schools build AI / STEM programs and student research pipelines that actually produce results, and helping individual students grow into independent, curious thinkers.",
            education: [
                {
                    year: "2024 – Present",
                    degree: "M.S. in Artificial Intelligence (in progress)",
                    institution: "The University of Texas at Austin",
                    note: "Applied AI / ML systems, with focus on education applications."
                },
                {
                    year: "2018 – 2020",
                    degree: "M.S. in Materials Engineering",
                    institution: "Purdue University, Indiana, USA",
                    note: "With Ph.D.-track research; doctorate not completed. Magneto-photonic structures and plasmon-assisted magnetic switching."
                },
                {
                    year: "2014 – 2016",
                    degree: "M.S. in Chemical Engineering",
                    institution: "National Tsing Hua University, Taiwan"
                },
                {
                    year: "2010 – 2014",
                    degree: "B.S. in Chemical Engineering",
                    institution: "National Tsing Hua University, Taiwan"
                }
            ],
            certifications: [
                "CAIE Cambridge 9702 Physics — Professional Development Course (2021)",
                "Purdue Oral English Proficiency Test for Teaching (2019)",
                "Science Fair Judge — West Central / Lafayette Regional Science and Engineering Fair, Indiana (2021)",
                "Purdue Certificate of Completion — Essential of Grammar; Academic Conversation Skills (2018-2020)"
            ],
            experience: [
                {
                    role: "Academic Operations / International Education",
                    org: "Genesis Ideas International School (GIIS)",
                    period: "2024 – Present",
                    detail: "Building GPA and transcript systems, supporting US high school pathways, driving AI / EdTech adoption, and translating STEM and research programs into parent-facing admissions value."
                },
                {
                    role: "Software Engineer, Data & Operations",
                    org: "Walmart Inc. (Fortune 1)",
                    period: "2023 – 2026",
                    detail: "Helped build real-time operations decision systems, KPIs, monitoring, and automated workflows. Backend services, APIs, data pipelines, and AI/ML-assisted decision support. Systems thinking transferable to school operations."
                },
                {
                    role: "Research Program Lead / STEM Coordinator",
                    org: "Shanghai Genius Academy (杰尼教育)",
                    period: "2020 – 2023",
                    detail: "Designed the “four-to-one” research mentorship model and coordinated a North American PhD mentor network across STEM and humanities for international curriculum students."
                },
                {
                    role: "Application Development Engineer",
                    org: "KLA-Tencor",
                    period: "2021 – 2022",
                    detail: "Python automation tools and engineering workflow systems."
                },
                {
                    role: "STEM Tutor & Teaching Assistant (long-term)",
                    org: "Taiwan / USA / Online",
                    period: "2010 – Present",
                    detail: "10+ years of one-on-one and small-group teaching — Physics, Chemistry, Mathematics across IGCSE, A-Level, and AP."
                }
            ]
        },
        zh: {
            sectionLabel: "关 于 我",
            title: "跨学科教育者，带着工程师的执行力",
            description: "我在研究实验室、国际课堂和 Fortune 1 工程团队里都长期工作过 —— 我把这三种身份带进国际教育。当下重点是帮助学校建设真正出成果的 AI / STEM 课程与学生科研体系，也帮助一对一辅导的学生成长为独立、有好奇心的思考者。",
            education: [
                {
                    year: "2024 – 至今",
                    degree: "人工智能硕士（在读）",
                    institution: "The University of Texas at Austin",
                    note: "应用 AI / ML 系统设计，重点结合教育场景。"
                },
                {
                    year: "2018 – 2020",
                    degree: "材料工程硕士",
                    institution: "Purdue University 普渡大学，美国 Indiana",
                    note: "含博士阶段研究经历，未取得博士学位。磁光子材料结构与等离激元辅助磁性切换研究方向。"
                },
                {
                    year: "2014 – 2016",
                    degree: "化学工程硕士",
                    institution: "国立清华大学，台湾"
                },
                {
                    year: "2010 – 2014",
                    degree: "化学工程学士",
                    institution: "国立清华大学，台湾"
                }
            ],
            certifications: [
                "CAIE Cambridge 9702 Physics — 专业发展课程认证（2021）",
                "Purdue 大学教学英语能力认证（Oral English Proficiency Test，2019）",
                "中学生科研竞赛评委 — West Central / Lafayette Regional Science and Engineering Fair（Indiana, 2021）",
                "Purdue Certificate of Completion — Essential of Grammar; Academic Conversation Skills（2018-2020）"
            ],
            experience: [
                {
                    role: "国际教育与学术系统运营",
                    org: "Genesis Ideas International School (GIIS)",
                    period: "2024 – 至今",
                    detail: "搭建美高 GPA 与成绩单架构，对接美高升学路径，推动 AI / 教育科技在校园落地，将 STEM 与科研项目转化为家长可感知的招生差异化价值。"
                },
                {
                    role: "软件工程师，数据与运营系统",
                    org: "Walmart Inc.（Fortune 1）",
                    period: "2023 – 2026",
                    detail: "参与实时运营决策系统建设，设计 KPI / 监控 / 自动化工作流；后端服务、API、数据管道与 AI / ML 辅助决策支持。系统思维可直接迁移到学校学术运营。"
                },
                {
                    role: "科研项目负责人 / STEM 教育项目协调",
                    org: "Shanghai Genius Academy（杰尼教育）",
                    period: "2020 – 2023",
                    detail: "设计「四对一」科研指导模式，组建并协调北美博士导师资源池，覆盖工程、理科、人文与社会科学方向，让中学生产出可用于美高 / 美本申请的真实研究成果。"
                },
                {
                    role: "Application Development Engineer",
                    org: "KLA-Tencor",
                    period: "2021 – 2022",
                    detail: "Python 自动化工具与工程工作流系统开发。"
                },
                {
                    role: "STEM 一对一与小班教学（长期持续）",
                    org: "台湾 / 美国 / 在线",
                    period: "2010 – 至今",
                    detail: "10+ 年 STEM 教学与学术指导经验，覆盖 Physics、Chemistry、Mathematics 的 IGCSE、A-Level、AP 体系。"
                }
            ]
        }
    };

    const c = content[language];

    return (
        <section id="about" className="about-section-new">
            <div className="container">
                <div className="about-header">
                    <div className="about-label">{c.sectionLabel}</div>
                    <h2 className="about-title">{c.title}</h2>
                    <p className="about-desc">{c.description}</p>
                </div>

                <div className="about-grid">
                    <div className="about-col">
                        <h3 className="about-col-title">{language === 'en' ? 'Experience' : '经历'}</h3>
                        <div className="experience-list">
                            {c.experience.map((item, i) => (
                                <div className="experience-item" key={i}>
                                    <div className="experience-period">{item.period}</div>
                                    <div className="experience-role">{item.role}</div>
                                    <div className="experience-org">{item.org}</div>
                                    <div className="experience-detail">{item.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-col">
                        <h3 className="about-col-title">{language === 'en' ? 'Education' : '教育背景'}</h3>
                        <div className="education-list">
                            {c.education.map((item, i) => (
                                <div className="education-item" key={i}>
                                    <div className="education-period">{item.year}</div>
                                    <div className="education-degree">{item.degree}</div>
                                    <div className="education-inst">{item.institution}</div>
                                    {item.note && <div className="education-note">{item.note}</div>}
                                </div>
                            ))}
                        </div>

                        <h3 className="about-col-title" style={{ marginTop: 36 }}>
                            {language === 'en' ? 'Certifications' : '证书与认证'}
                        </h3>
                        <ul className="cert-list">
                            {c.certifications.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
