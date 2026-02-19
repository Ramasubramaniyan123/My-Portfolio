import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { skillsData } from '../data/skills.data';

const Skills = () => {
  const technicalCategories = [
    { key: 'programming', title: 'Programming' },
    { key: 'backend', title: 'Backend' },
    { key: 'coreConcepts', title: 'Core Concepts' },
    { key: 'tools', title: 'Tools' },
  ];

  return (
    <section id="skills" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto container-padding">
        <SectionTitle
          title="Skills"
          subtitle="Backend-focused technical strengths and professional soft skills"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {/* TECHNICAL SKILLS */}
          <div className="space-y-10">
            <div className="space-y-6">
              {technicalCategories.map((category) => (
                <div key={category.key} className="space-y-3">
                  <h4 className="text-lg font-bold text-primary dark:text-primary">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillsData.technical[category.key].map((skill, index) => (
                      <span key={index} className="text-base font-medium text-text-primary dark:text-slate-100 px-3 py-1 bg-white dark:bg-slate-700 border border-border dark:border-slate-600 rounded-md">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="space-y-10">
            <h4 className="text-lg font-bold text-primary dark:text-primary">Soft Skills</h4>
            <div className="flex flex-wrap gap-3">
              {skillsData.soft.map((skill, index) => (
                <span key={index} className="text-base font-medium text-text-primary dark:text-slate-100 px-3 py-1 bg-white dark:bg-slate-700 border border-border dark:border-slate-600 rounded-md">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
