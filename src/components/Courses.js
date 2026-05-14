import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Modal, Button } from 'react-bootstrap';
import '../style/Programs.css';

function Courses() {
    const { language } = useLanguage();
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);

    const content = {
        en: {
            sectionLabel: "FOR STUDENTS & FAMILIES",
            title: "Programs & 1-on-1 Tutoring",
            intro: "Tailored to international curriculum students preparing for top US and UK universities. All programs run in a personalized 1-on-1 or small-group format.",
            programs: [
                {
                    name: "Student Research Mentorship",
                    badge: "FLAGSHIP",
                    description: "End-to-end research project guidance — topic selection, literature review, methodology, writing, and submission. Outputs usable for US high school / undergraduate admissions.",
                    details: "I built the “four-to-one” model at Shanghai Genius Academy (research advisor + literature mentor + academic writing coach + writing tutor). Now offered as a personalized 6-12 month program. Past students have produced research portfolios used in admissions to US/UK top universities."
                },
                {
                    name: "College Counseling — US / UK Path",
                    badge: "ADMISSIONS",
                    description: "Course selection, transcript strategy, extracurricular planning, and application materials — anchored in real US graduate-school experience.",
                    details: "Strategic counseling drawing on my own experience at Purdue and UT Austin, plus 10+ years coaching international curriculum students. Helps students with course load planning, GPA strategy, US/UK application essays, and interview prep."
                },
                {
                    name: "A-Level / IGCSE / AP Physics",
                    badge: "STEM",
                    description: "Advanced physics tutoring rooted in real research experience — not just exam tricks. Cambridge CAIE 9702 certified.",
                    details: "Covers mechanics, electromagnetism, thermodynamics, modern physics. Built on my Materials Engineering and Physics-track research background at Purdue. I focus on conceptual depth, not memorization."
                },
                {
                    name: "A-Level / IGCSE / AP Mathematics",
                    badge: "STEM",
                    description: "Core and Further Math up through calculus, with focus on building intuition before procedures.",
                    details: "Calculus, algebra, geometry, statistics, with emphasis on problem-solving and real-world applications. Personalized 1-on-1 format identifies and patches each student's specific gaps."
                },
                {
                    name: "Computer Science / Python / AI Basics",
                    badge: "AI",
                    description: "Programming fundamentals and an introduction to AI — directly informed by my M.S. AI work at UT Austin.",
                    details: "Python from scratch, data structures, algorithms, and a real introduction to machine learning concepts. Strong fit for students considering computer science or AI tracks in college."
                },
                {
                    name: "Academic Research & Writing",
                    badge: "WRITING",
                    description: "Thesis writing, citation, argumentation, and academic English for international curriculum students.",
                    details: "Structure and style of academic papers — thesis development, argumentation, citation methods (APA, IEEE), and academic English. Useful for IB Extended Essay, A-Level coursework, and university-level writing."
                }
            ],
            cta: "Inquire about programs",
            close: "Close"
        },
        zh: {
            sectionLabel: "学生 / 家长咨询",
            title: "项目与一对一辅导",
            intro: "面向就读国际课程、目标欧美顶尖大学的学生。所有项目都以一对一或小班定制化形式进行。",
            programs: [
                {
                    name: "中学生科研项目导师",
                    badge: "招牌项目",
                    description: "从选题、文献阅读、研究方法到论文写作的完整科研闭环，成果可直接用于美高 / 美本申请。",
                    details: "我在杰尼教育主导设计的「四对一」模式（科研导师 + 文献导读 + 学术写作 + 写作辅导）现以个性化形式提供，时长 6-12 个月。过往学生科研成果被多所美英顶尖高校录取材料采用。"
                },
                {
                    name: "美高 / 美本升学指导",
                    badge: "升学",
                    description: "课程选择、GPA 策略、课外活动规划、申请材料 —— 基于真实的美国研究生院经验。",
                    details: "结合我自己在 Purdue 与 UT Austin 的求学经历，以及 10+ 年指导国际课程学生的实战经验，提供选课规划、GPA 策略、美/英本科申请文书、面试准备。"
                },
                {
                    name: "A-Level / IGCSE / AP 物理",
                    badge: "理科",
                    description: "建立在真实科研背景上的物理教学，不只是考试技巧。Cambridge CAIE 9702 认证。",
                    details: "覆盖力学、电磁学、热力学、现代物理。结合我在 Purdue 的材料工程与物理方向研究背景。注重概念深度而非死记硬背。"
                },
                {
                    name: "A-Level / IGCSE / AP 数学",
                    badge: "理科",
                    description: "纯数与高数（含微积分），先建直觉再讲方法。",
                    details: "微积分、代数、几何、统计，强调问题解决与现实应用。一对一形式精准诊断与补足每个学生的薄弱点。"
                },
                {
                    name: "计算机 / Python / AI 入门",
                    badge: "AI",
                    description: "编程基础与 AI 入门 —— 来自我在 UT Austin 的 AI 硕士实战训练。",
                    details: "Python 从零开始、数据结构、算法、机器学习核心概念入门。适合考虑大学攻读计算机或 AI 方向的学生。"
                },
                {
                    name: "学术研究与论文写作",
                    badge: "写作",
                    description: "论文撰写、引用格式、论证逻辑、学术英语 —— 专为国际课程学生设计。",
                    details: "学术论文的结构与风格、论题开发、论证方法、引用格式（APA, IEEE）与学术英语。适合 IB Extended Essay、A-Level 课程作业以及大学阶段论文写作。"
                }
            ],
            cta: "咨询项目详情",
            close: "关闭"
        }
    };

    const c = content[language];

    const handleShow = (program) => {
        setSelected(program);
        setShowModal(true);
    };

    return (
        <section id="programs" className="programs-section">
            <div className="container">
                <div className="programs-header">
                    <div className="programs-label">{c.sectionLabel}</div>
                    <h2 className="programs-title">{c.title}</h2>
                    <p className="programs-intro">{c.intro}</p>
                </div>

                <div className="programs-grid">
                    {c.programs.map((p, i) => (
                        <div className="program-card" key={i}>
                            <div className="program-badge">{p.badge}</div>
                            <h3 className="program-name">{p.name}</h3>
                            <p className="program-desc">{p.description}</p>
                            <button className="program-link" onClick={() => handleShow(p)}>
                                {language === 'en' ? 'Learn more →' : '了解更多 →'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selected && selected.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selected && selected.details}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {c.close}
                    </Button>
                    <Button variant="primary" href="#contact" onClick={() => setShowModal(false)}>
                        {c.cta}
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default Courses;
