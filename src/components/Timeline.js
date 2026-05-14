import React from 'react';
import { useLanguage } from '../App';
import '../style/Timeline.css';

function Timeline() {
    const { language } = useLanguage();

    const content = {
        en: {
            sectionLabel: "JOURNEY",
            title: "From chemistry labs to AI systems to international classrooms",
            intro: "Each step compounds on the last. The cross-disciplinary path is the point — not an accident.",
            milestones: [
                {
                    year: "2010 – 2016",
                    track: "ACADEMIC",
                    title: "Chemical Engineering, NTHU",
                    desc: "B.S. + M.S. at National Tsing Hua University. Foundation in problem-solving and STEM rigor."
                },
                {
                    year: "2010 – Present",
                    track: "TEACHING",
                    title: "STEM Tutor & Teaching Assistant",
                    desc: "Started teaching during undergrad. 10+ years coaching international curriculum students across Physics, Chemistry, Math."
                },
                {
                    year: "2018 – 2020",
                    track: "RESEARCH",
                    title: "Purdue University · Materials Engineering",
                    desc: "M.S. with Ph.D.-track research in magneto-photonic materials. Published in Optical Materials Express."
                },
                {
                    year: "2020 – 2023",
                    track: "PROGRAM",
                    title: "Shanghai Genius Academy",
                    desc: "Designed the “four-to-one” student research mentorship model. Coordinated North American PhD mentor network."
                },
                {
                    year: "2023 – 2026",
                    track: "INDUSTRY",
                    title: "Walmart Inc. · Fortune 1",
                    desc: "Real-time operations decision systems, AI/ML decision support, data pipelines. Systems thinking at enterprise scale."
                },
                {
                    year: "2024 – Present",
                    track: "ACADEMIC",
                    title: "UT Austin · M.S. AI (in progress)",
                    desc: "Applied AI / Machine Learning with focus on education-domain applications."
                },
                {
                    year: "2024 – Present",
                    track: "SCHOOL",
                    title: "Genesis Ideas International School (GIIS)",
                    desc: "Building GPA/transcript systems, driving AI/EdTech adoption, designing academic operations SOPs."
                },
                {
                    year: "2026 →",
                    track: "NEXT",
                    title: "Shanghai International School Leadership",
                    desc: "Available July–August 2026 for Head of STEM / AI Innovation / Curriculum / Academic Operations roles."
                }
            ]
        },
        zh: {
            sectionLabel: "成长轨迹",
            title: "从化工实验室，到 AI 系统，到国际课堂",
            intro: "每一段都是下一段的底子。跨学科本身就是策略——不是意外。",
            milestones: [
                {
                    year: "2010 – 2016",
                    track: "学术",
                    title: "国立清华大学  ·  化学工程",
                    desc: "化工学士与硕士。STEM 思维与问题解决能力的根基。"
                },
                {
                    year: "2010 – 至今",
                    track: "教学",
                    title: "STEM 一对一与小班教学",
                    desc: "大学开始带学生，至今 10+ 年指导国际课程学生（Physics、Chemistry、Math）。"
                },
                {
                    year: "2018 – 2020",
                    track: "科研",
                    title: "Purdue University  ·  材料工程",
                    desc: "硕士学位（含博士阶段研究经历）。磁光子材料研究，在 Optical Materials Express 发表论文。"
                },
                {
                    year: "2020 – 2023",
                    track: "项目",
                    title: "Shanghai Genius Academy  ·  杰尼教育",
                    desc: "设计「四对一」学生科研指导模式，组建北美博士导师资源池。"
                },
                {
                    year: "2023 – 2026",
                    track: "产业",
                    title: "Walmart Inc.  ·  Fortune 1",
                    desc: "实时运营决策系统、AI/ML 决策支持、数据管道。企业级系统思维。"
                },
                {
                    year: "2024 – 至今",
                    track: "学术",
                    title: "UT Austin  ·  人工智能硕士（在读）",
                    desc: "应用 AI / Machine Learning，重点结合教育场景。"
                },
                {
                    year: "2024 – 至今",
                    track: "学校",
                    title: "Genesis Ideas International School (GIIS)",
                    desc: "搭建 GPA / 成绩单架构、推动 AI / 教育科技落地、设计学术运营 SOP。"
                },
                {
                    year: "2026 →",
                    track: "下一步",
                    title: "上海国际学校管理岗位",
                    desc: "2026 年 7-8 月入职上海国际学校 Head of STEM / AI 创新 / 课程总监 / 学术运营方向。"
                }
            ]
        }
    };

    const c = content[language];

    return (
        <section id="timeline" className="timeline-section">
            <div className="container">
                <div className="timeline-header">
                    <div className="timeline-label">{c.sectionLabel}</div>
                    <h2 className="timeline-title">{c.title}</h2>
                    <p className="timeline-intro">{c.intro}</p>
                </div>

                <div className="timeline-wrap">
                    <div className="timeline-line"></div>
                    {c.milestones.map((m, i) => (
                        <div className={`timeline-item ${i % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`} key={i}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <div className="timeline-card-meta">
                                    <span className="timeline-card-year">{m.year}</span>
                                    <span className="timeline-card-track">{m.track}</span>
                                </div>
                                <h3 className="timeline-card-title">{m.title}</h3>
                                <p className="timeline-card-desc">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
