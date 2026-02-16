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
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-[1400px] mx-auto container-padding">
        <SectionTitle
          title="Skills"
          subtitle="Backend-focused technical strengths and professional soft skills"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* LEFT SIDE: TECHNICAL SKILLS */}
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-primary pl-4">
              <h3 className="text-2xl font-bold text-text-primary tracking-tight">Technical Skills</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalCategories.map((category) => (
                <div key={category.key} className="space-y-4">
                  <h4 className="text-lg font-bold text-text-primary">{category.title}</h4>
                  <ul className="space-y-2">
                    {skillsData.technical[category.key].map((skill) => (
                      <li key={skill} className="flex items-center text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        <span className="text-base font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: SOFT SKILLS */}
          <div className="space-y-10">
            <div className="inline-block border-l-4 border-secondary pl-4">
              <h3 className="text-2xl font-bold text-text-primary tracking-tight">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skillsData.soft.map((skill) => (
                <div
                  key={skill}
                  className="px-5 py-2.5 rounded-full bg-background border border-border text-text-primary font-semibold text-sm transition-all duration-250 hover:bg-primary/10 hover:border-primary hover:scale-[1.02] cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
