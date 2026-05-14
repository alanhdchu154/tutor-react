import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Modal } from 'react-bootstrap';
import '../style/Insights.css';

function Insights() {
    const { language } = useLanguage();
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(null);

    const content = {
        en: {
            sectionLabel: "INSIGHTS & WRITING",
            title: "Notes from the field",
            intro: "Short essays on AI in education, student research, and what international schools are missing.",
            close: "Close",
            readingTime: "min read",
            posts: [
                {
                    category: "AI IN EDUCATION",
                    date: "March 2026",
                    readTime: 6,
                    title: "Why most schools' \"AI strategy\" is just a ChatGPT subscription",
                    excerpt: "Real AI integration in classrooms is not buying a tool. It's redesigning what students do — what gets memorized, what gets automated, what gets evaluated.",
                    body: [
                        "Walk into most international schools in 2026 and ask about their \"AI strategy.\" You'll usually hear one of three answers: \"We have a ChatGPT EDU license.\" \"We've banned AI in assessments.\" \"We're piloting something with the IT team.\"",
                        "None of these are strategies. They're reactions.",
                        "A real AI strategy in a school answers four questions: (1) Which student tasks are we keeping because the cognitive struggle is the point? (2) Which tasks should AI eliminate so students can spend time on higher-order work? (3) How do we redesign assessment so we measure thinking, not output? (4) How do we train teachers to do this without piling more on them?",
                        "At Walmart, I worked on systems where AI was integrated into operational decision-making — not as a gimmick, but as a deliberate redesign of human–machine workflow. The same principle applies to classrooms. AI doesn't replace teachers; it changes what the highest-value teacher work looks like.",
                        "For a school, the practical first move is to pick one subject area (often STEM) and one grade band, then prototype: what does an AI-augmented unit actually look like end-to-end — lesson design, in-class practice, formative assessment, summative assessment? Once you have a working prototype, scaling is a training problem, not a tech problem."
                    ]
                },
                {
                    category: "STUDENT RESEARCH",
                    date: "February 2026",
                    readTime: 5,
                    title: "The \"four-to-one\" research mentorship model — and why one mentor isn't enough",
                    excerpt: "Middle schoolers doing real research need four different kinds of help. Most programs only provide one — and that's why most student research projects are weak.",
                    body: [
                        "When I designed the research mentorship program at Shanghai Genius Academy, I noticed a pattern: a single mentor — typically a PhD student in the field — couldn't deliver everything a 14–17 year old needed to produce real research.",
                        "PhD mentors are great at research design and methodology. They're often weaker at coaching a teenager through the emotional grind of writing, helping them read academic papers they don't yet understand, or polishing prose to the level needed for submission.",
                        "We restructured into a \"four-to-one\" model: each student gets a research advisor (the PhD), a literature mentor (helps the student actually read the prior literature), an academic writing coach (structures the paper and argumentation), and a writing tutor (sentence-level polish, English mechanics).",
                        "Costs more upfront, but the output quality jumps. Students aren't drowning when their PhD mentor is too busy to debug their methodology. Papers don't fall apart at the writing stage. And families see four people working with their kid — which justifies the program's price point.",
                        "For schools considering setting up a research program internally: don't underestimate the writing-coach role. Most STEM teachers are not trained academic writing coaches, and most English teachers are not trained in research writing conventions. This is the gap that kills most school research initiatives."
                    ]
                },
                {
                    category: "INTERNATIONAL EDUCATION",
                    date: "January 2026",
                    readTime: 7,
                    title: "What international schools in Shanghai actually need (that they're not hiring for)",
                    excerpt: "Most postings I see are still for traditional subject teachers. The biggest staffing gaps are roles schools haven't named yet.",
                    body: [
                        "I've been watching Shanghai international school postings over the past 18 months — Wellington, Dulwich, Concordia, SCIS, YK Pao, the NACIS cluster — and a pattern keeps showing up: schools post for what they already have an org chart slot for, not what they actually need.",
                        "The unfilled gaps I see in almost every school:",
                        "1. **A real AI / EdTech program owner.** Not the IT director. Someone who can sit at the curriculum table, push back on bad assumptions, and design end-to-end how AI changes what teachers and students do.",
                        "2. **A student research program coordinator.** US college admissions has shifted heavily toward research portfolios. Schools that can run a credible internal research program differentiate enormously in admissions outcomes — but few have anyone qualified to run one.",
                        "3. **An academic operations lead with systems-thinking background.** GPA architecture, transcript design, learning analytics, data pipeline for student tracking. This work usually gets shoved onto the registrar or an admin who doesn't have an engineering background.",
                        "4. **A bridging role between Chinese-speaking parents and the foreign-led leadership team.** Most schools either have a bilingual marketing person (commercial framing) or a bilingual counselor (welfare framing). What's missing is an academic-side bilingual leader who can translate pedagogy and outcomes.",
                        "Schools that hire for these roles in the next two years will pull ahead. Schools that wait will be hiring more expensive consultants in three years to fix what an in-house hire could have prevented."
                    ]
                }
            ]
        },
        zh: {
            sectionLabel: "教育观察",
            title: "来自实战的笔记",
            intro: "关于 AI 教育、学生科研、和国际学校真正缺什么的短文。",
            close: "关闭",
            readingTime: "分钟阅读",
            posts: [
                {
                    category: "AI 教育",
                    date: "2026 年 3 月",
                    readTime: 6,
                    title: "为什么多数学校的「AI 策略」只是买了个 ChatGPT 订阅",
                    excerpt: "真正把 AI 整合进课堂不是采购一个工具，而是重新设计学生该做什么——什么需要背、什么可以自动化、什么要被评估。",
                    body: [
                        "走进 2026 年的多数上海国际学校问「你们的 AI 策略是什么」，你通常会听到三种答案之一：「我们买了 ChatGPT EDU 授权。」「我们在评估中禁止 AI。」「IT 团队在试点一个东西。」",
                        "这些都不是策略。这些是反应。",
                        "学校真正的 AI 策略要回答四个问题：（1）哪些学生作业要保留——因为认知挣扎本身就是教学目的？（2）哪些作业应该让 AI 替学生完成，让学生把时间花在更高阶的工作上？（3）评估如何重新设计才能衡量思考，而不是产出？（4）怎么训练老师做到这些，又不给他们额外加压？",
                        "在 Walmart，我做过的系统是把 AI 整合进运营决策的——不是 demo，是认真地重新设计人机工作流。同样的原则适用于课堂。AI 不取代老师，但它改变了「老师最有价值的工作」长什么样。",
                        "对一所学校来说，最务实的第一步是：选定一个学科（通常是 STEM）和一个年级段，做原型试验——一个 AI 辅助的教学单元从头到尾长什么样？教学设计、课堂练习、形成性评估、终结性评估？有了能跑通的原型，规模化就是培训问题，不是技术问题。"
                    ]
                },
                {
                    category: "学生科研",
                    date: "2026 年 2 月",
                    readTime: 5,
                    title: "「四对一」科研导师模式——为什么单一导师不够",
                    excerpt: "做真科研的中学生需要四种不同的支持。多数项目只提供一种——这就是为什么大部分学生科研项目质量不行。",
                    body: [
                        "我在杰尼教育设计科研项目时，注意到一个规律：一个导师——通常是该领域的博士生——没办法满足 14-17 岁学生做真科研需要的所有东西。",
                        "博士导师擅长研究设计和方法论。但他们往往不擅长在情绪上陪伴一个少年熬过写作的痛苦，不擅长帮学生读懂他暂时读不懂的论文，更不擅长把文章打磨到可以投稿的水平。",
                        "我们重组成「四对一」：每个学生配一位科研导师（博士）、一位文献导读导师（帮学生真的读懂前人的研究）、一位学术写作导师（搭建文章结构和论证）、一位写作辅导导师（句子层面的润色与英语机制）。",
                        "前期成本更高，但产出质量飞跃。学生不会因为博士导师太忙、方法论调不通就卡死；论文也不会在写作阶段崩盘。家长看到四个人在和孩子一起工作——这也撑起了项目的定价。",
                        "对想建内部科研项目的学校：不要低估写作教练这个角色。多数 STEM 老师没受过学术写作训练，多数英语老师不熟悉研究写作的规范。这是把多数学校科研计划做垮的那道缝。"
                    ]
                },
                {
                    category: "国际教育",
                    date: "2026 年 1 月",
                    readTime: 7,
                    title: "上海国际学校真正缺什么（但还没在招的岗位）",
                    excerpt: "我看到的招聘大部分还是传统学科教师。最大的人才缺口，是学校自己还没命名的岗位。",
                    body: [
                        "我观察上海国际学校（Wellington、Dulwich、Concordia、SCIS、YK Pao、NACIS 系列等）过去 18 个月的招聘，有个规律：学校只招他们 org chart 上已经有位置的人，不招他们真正需要的人。",
                        "我看到几乎每所学校都缺的角色：",
                        "1. **真正能落地的 AI / 教育科技项目负责人。** 不是 IT 主管，而是能坐在课程会议桌前、能挑战错误假设、能从头到尾设计「AI 怎么改变师生工作」的人。",
                        "2. **学生科研项目协调人。** 美本招生重心已经大幅转向科研成果。有能力做内部真科研项目的学校，升学结果会拉开差距——但少有学校有合适的人选来主导。",
                        "3. **有系统思维背景的学术运营负责人。** GPA 架构、成绩单设计、学习分析、学生跟踪数据管道。这些活通常被推给注册主管或没有工程背景的行政人员。",
                        "4. **中文家长与外籍管理层之间的桥梁角色。** 多数学校有双语市场人员（商业角度）或双语辅导员（关怀角度），缺的是学术侧的双语领导，能翻译教学法和成果的人。",
                        "未来两年敢招这些岗位的学校会拉开差距。等的学校三年后会花更贵的钱请顾问，修一个内部招人就能预防的问题。"
                    ]
                }
            ]
        }
    };

    const c = content[language];

    const handleShow = (post) => {
        setSelected(post);
        setShowModal(true);
    };

    return (
        <section id="insights" className="insights-section">
            <div className="container">
                <div className="insights-header">
                    <div className="insights-label">{c.sectionLabel}</div>
                    <h2 className="insights-title">{c.title}</h2>
                    <p className="insights-intro">{c.intro}</p>
                </div>

                <div className="insights-grid">
                    {c.posts.map((p, i) => (
                        <article className="insight-card" key={i} onClick={() => handleShow(p)}>
                            <div className="insight-meta">
                                <span className="insight-category">{p.category}</span>
                                <span className="insight-dot">·</span>
                                <span className="insight-date">{p.date}</span>
                                <span className="insight-dot">·</span>
                                <span className="insight-read">{p.readTime} {c.readingTime}</span>
                            </div>
                            <h3 className="insight-title-card">{p.title}</h3>
                            <p className="insight-excerpt">{p.excerpt}</p>
                            <span className="insight-read-link">
                                {language === 'en' ? 'Read more →' : '阅读全文 →'}
                            </span>
                        </article>
                    ))}
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                {selected && (
                    <>
                        <Modal.Header closeButton>
                            <div>
                                <div style={{
                                    fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700,
                                    color: '#1F3A5F', marginBottom: 8, textTransform: 'uppercase'
                                }}>
                                    {selected.category}  ·  {selected.date}
                                </div>
                                <Modal.Title style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                                    {selected.title}
                                </Modal.Title>
                            </div>
                        </Modal.Header>
                        <Modal.Body style={{ fontSize: '1rem', lineHeight: 1.75, color: '#1A1A1A', padding: '28px 32px' }}>
                            {selected.body.map((para, i) => (
                                <p key={i} style={{ marginBottom: 16 }}
                                   dangerouslySetInnerHTML={{
                                       __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                                   }} />
                            ))}
                        </Modal.Body>
                    </>
                )}
            </Modal>
        </section>
    );
}

export default Insights;
