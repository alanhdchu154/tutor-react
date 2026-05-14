import React from 'react';
import { useLanguage } from '../App';
import '../style/Services.css';

function Services() {
    const { language } = useLanguage();

    const content = {
        en: {
            sectionLabel: "FOR SCHOOLS & RECRUITERS",
            title: "What I Build for Schools",
            intro: "I'm available for international school leadership roles starting July–August 2026. Below are the program areas I can lead and the differentiated value I bring to each.",
            services: [
                {
                    tag: "PROGRAM LEAD",
                    title: "AI / STEM Curriculum & Innovation",
                    desc: "Design and lead AI/STEM programs, project-based learning frameworks, and EdTech rollouts. M.S. AI (UT Austin) + Fortune 1 (Walmart) ML systems experience uncommon in international school staff."
                },
                {
                    tag: "MENTORSHIP",
                    title: "Student Research Program",
                    desc: "Operate the “four-to-one” research mentorship model (research advisor + literature mentor + writing coach + writing tutor). Coordinate North American PhD mentor networks across STEM and humanities."
                },
                {
                    tag: "COLLEGE PATHWAY",
                    title: "College Counseling & Academic Operations",
                    desc: "Build GPA/transcript systems and college pathway design for US High School and US University admissions. Cross-cultural communication across Chinese, American, and European education contexts."
                },
                {
                    tag: "OPERATIONS",
                    title: "Data-Driven Academic Operations",
                    desc: "Translate Fortune 1 systems thinking into school operations: learning analytics dashboards, teaching process automation, GPA architecture, admissions data tracking. Take schools from Excel to Dashboard."
                }
            ],
            fitFor: "Suited for: Head of STEM / Head of Science · AI Innovation Director · Curriculum Coordinator · Deputy Head · International Program Lead · Director of Student Research"
        },
        zh: {
            sectionLabel: "学校 / 招聘合作方向",
            title: "我能为学校建设什么",
            intro: "2026 年 7-8 月起，可入职上海国际学校管理岗位。以下是我能主导的项目方向，以及在每个方向上的差异化价值。",
            services: [
                {
                    tag: "项目负责人",
                    title: "AI / STEM 课程与教育创新",
                    desc: "设计并主导 AI / STEM 课程、项目制学习体系（PBL）、教育科技落地。UT Austin AI 硕士 + Walmart（Fortune 1）ML 系统经验，是国际学校师资里罕见的组合。"
                },
                {
                    tag: "导师制",
                    title: "中学生科研项目体系",
                    desc: "运作「四对一」科研指导模式（科研导师 + 文献导读 + 学术写作 + 写作辅导），协调北美博士导师资源池，覆盖工程、理科、人文与社会科学方向。"
                },
                {
                    tag: "升学路径",
                    title: "升学指导与学术运营",
                    desc: "建设 GPA / 成绩单系统、美高 / 美本升学路径规划。跨文化沟通经验涵盖中美欧多元教育场景，能在外籍管理层与中籍家长之间架起桥梁。"
                },
                {
                    tag: "运营",
                    title: "数据化学术运营",
                    desc: "将 Fortune 1 级别的系统思维迁移到学校：学习分析看板、教学流程自动化、GPA 架构、招生数据追踪。让学校从 Excel 升级到 Dashboard。"
                }
            ],
            fitFor: "适合岗位：Head of STEM / Head of Science · AI 创新负责人 · 课程总监 · 学术副校长 · 国际课程项目负责人 · 学生科研项目负责人"
        }
    };

    const c = content[language];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header">
                    <div className="services-label">{c.sectionLabel}</div>
                    <h2 className="services-title">{c.title}</h2>
                    <p className="services-intro">{c.intro}</p>
                </div>

                <div className="services-grid">
                    {c.services.map((s, i) => (
                        <div className="service-card" key={i}>
                            <div className="service-tag">{s.tag}</div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="services-fit">
                    {c.fitFor}
                </div>
            </div>
        </section>
    );
}

export default Services;
