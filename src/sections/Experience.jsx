import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ExpandableCard from '../components/ui/ExpandableCard';
import { experienceData } from '../data/experience.data';

const Experience = () => {
  const ExperienceCard = ({ experience, index }) => {
    const achievementsContent = (
      <ul className="space-y-1.5 text-sm text-text-secondary dark:text-slate-300 animate-fade-in">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start space-x-2">
            <Award size={14} className="text-accent-secondary mt-0.5 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    );

    return (
      <article className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-6 transition-all duration-250 hover:shadow-lg hover:border-primary hover:scale-105 hover:-translate-y-1 group flex flex-col h-full">
        <div className="space-y-4 flex-grow">
          {/* Experience Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary dark:text-slate-100 mb-2 group-hover:text-primary transition-colors">
                {experience.title}
              </h3>
              <div className="text-primary font-medium mb-2 dark:text-primary">
                {experience.company}
              </div>
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                experience.type === 'Training' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 
                experience.type === 'Internship' ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' :
                'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
              }`}>
                {experience.type}
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="space-y-2 text-sm text-text-secondary dark:text-slate-300">
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <ExpandableCard
            expandedContent={achievementsContent}
            expandButtonText="Show Key Achievements"
            collapseButtonText="Hide Key Achievements"
            ariaLabel={`Show achievements for ${experience.title}`}
            contentId={`achievements-${experience.id}`}
            buttonClassName="flex items-center space-x-2 text-primary hover:text-primary-hover text-sm font-semibold transition-colors"
          >
            <Award size={16} className="transition-transform duration-250 group-hover:rotate-[12deg]" />
          </ExpandableCard>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span key={skill} className="px-2.5 py-1 rounded-md bg-background dark:bg-slate-700 border border-border dark:border-slate-600 text-text-secondary dark:text-slate-300 text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="experience" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto container-padding">
        <SectionTitle
          title="Experience"
          subtitle="Professional journey and key achievements"
          className="mb-16"
        />

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
