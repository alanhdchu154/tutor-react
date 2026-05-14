import React, { useState } from 'react';
import { useLanguage } from '../App';

function AcademicHighlights() {
    const { language } = useLanguage();

    const content = {
        en: {
            sectionLabel: "STUDENT OUTCOMES",
            title: "Where my students go",
            intro: "A selection of past students I've worked with — across A-Level, AP, research projects, and college admissions.",
            students: [
                { author: "Michael Z.",   courses: "A-Level Math (A), Physics (A), Research Paper (High Distinction)", university: "University of Melbourne" },
                { author: "Carlos W.",    courses: "A-Level Math (A*), ACT 35", university: "University of Sydney" },
                { author: "Natalia D.",   courses: "A-Level Math (A*)", university: "Kyoto University" },
                { author: "Rachel Z.",    courses: "A-Level Math (A*), Further Math (A*)", university: "University of Warwick" },
                { author: "Cindy C.",     courses: "A-Level Math (A)", university: "High school (in progress)" },
                { author: "Marshall Y.",  courses: "Python / Algorithms", university: "High school (in progress)" }
            ],
            seeMore: "Shuffle examples"
        },
        zh: {
            sectionLabel: "学生成果",
            title: "学生升学去向",
            intro: "部分指导过的学生 —— 涵盖 A-Level、AP、科研项目与升学申请。",
            students: [
                { author: "周同学 M.Z.",  courses: "A-Level 数学 (A), 物理 (A), 学术论文 (优秀)", university: "墨尔本大学" },
                { author: "王同学 C.W.",  courses: "A-Level 数学 (A*), ACT 35", university: "悉尼大学" },
                { author: "杜同学 N.D.",  courses: "A-Level 数学 (A*)", university: "京都大学" },
                { author: "张同学 R.Z.",  courses: "A-Level 数学 (A*), 高数 (A*)", university: "华威大学" },
                { author: "陈同学 C.C.",  courses: "A-Level 数学 (A)", university: "高中在读" },
                { author: "叶同学 M.Y.",  courses: "Python / 算法", university: "高中在读" }
            ],
            seeMore: "换一组学生"
        }
    };

    const c = content[language];

    const pick = () => {
        const total = window.innerWidth < 768 ? 3 : 4;
        const pool = [...c.students];
        const picked = [];
        while (picked.length < total && pool.length) {
            const idx = Math.floor(Math.random() * pool.length);
            picked.push(pool.splice(idx, 1)[0]);
        }
        return picked;
    };

    const [displayed, setDisplayed] = useState(pick);

    return (
        <section id="academic-highlights" style={{ padding: '90px 0', background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 48px' }}>
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
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 20
                }}>
                    {displayed.map((s, i) => (
                        <div key={i} style={{
                            background: '#FAFBFC', borderLeft: '4px solid #1F3A5F',
                            padding: '24px 22px', borderRadius: '0 8px 8px 0',
                            transition: 'all 0.25s'
                        }}>
                            <div style={{
                                fontSize: '1rem', fontWeight: 700,
                                color: '#1A1A1A', marginBottom: 8
                            }}>
                                {s.author}
                            </div>
                            <div style={{
                                fontSize: '0.85rem', color: '#555',
                                marginBottom: 10, lineHeight: 1.5
                            }}>
                                {s.courses}
                            </div>
                            <div style={{
                                fontSize: '0.9rem', color: '#1F3A5F',
                                fontWeight: 600
                            }}>
                                → {s.university}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: 32 }}>
                    <button
                        onClick={() => setDisplayed(pick())}
                        style={{
                            background: 'transparent', border: '1.5px solid #1F3A5F',
                            color: '#1F3A5F', fontWeight: 600,
                            padding: '10px 22px', borderRadius: 6, fontSize: '0.95rem',
                            transition: 'all 0.2s'
                        }}
                    >
                        {c.seeMore}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AcademicHighlights;
