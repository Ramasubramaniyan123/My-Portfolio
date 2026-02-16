import React from 'react';
import { Code, Database, Layers, Wrench, Users } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { skillsData } from '../data/skills.data';

const Skills = () => {
  const technicalCategories = [
    { key: 'programming', title: 'Programming', icon: Code },
    { key: 'backend', title: 'Backend', icon: Database },
    { key: 'coreConcepts', title: 'Core Concepts', icon: Layers },
    { key: 'tools', title: 'Tools', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle
          title="Skills"
          subtitle="Backend-focused technical strengths and professional soft skills"
          className="mb-16"
        />

        <div className="space-y-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-text-primary">Technical Skills</h3>
              <p className="text-sm text-text-secondary mt-1">Java backend, APIs, and core engineering fundamentals.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalCategories.map((category, index) => (
                <Card key={category.key} delay={index * 0.05} className="h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary border border-border group-hover:border-accent-primary transition-colors duration-300">
                        <category.icon size={18} className="text-accent-primary transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
                      </div>
                      <h4 className="text-base font-semibold text-text-primary">{category.title}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skillsData.technical[category.key].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-text-secondary transition-all duration-300 group-hover:border-accent-primary/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-text-primary">Soft Skills</h3>
              <p className="text-sm text-text-secondary mt-1">How I collaborate, communicate, and execute.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.soft.map((skill, index) => (
                <Card key={skill} delay={index * 0.03} className="group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary border border-border group-hover:border-accent-secondary transition-colors duration-300">
                        <Users size={16} className="text-accent-secondary transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110" />
                      </div>
                      <div className="text-sm font-semibold text-text-primary">{skill}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
