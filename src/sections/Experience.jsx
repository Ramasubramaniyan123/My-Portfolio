import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { experienceData } from '../data/experience.data';

const Experience = () => {
  const ExperienceCard = ({ experience, index }) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        className={`flex items-center mb-12 ${
          isLeft ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* Content Card */}
        <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
          <Card className="relative">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {experience.title}
                  </h3>
                  <div className="text-accent-primary font-medium mb-2">
                    {experience.company}
                  </div>
                </div>
                <Badge 
                  variant={experience.type === 'Training' ? 'default' : 'secondary'}
                  size="sm"
                >
                  {experience.type}
                </Badge>
              </div>

              {/* Meta Info */}
              <div className="space-y-2 text-sm text-text-secondary">
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
              <p className="text-text-secondary text-sm leading-relaxed">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-text-primary">Key Achievements:</h4>
                <ul className="space-y-1">
                  {experience.achievements.slice(0, isLeft ? 3 : 2).map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                      <Award size={12} className="text-accent-secondary mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <Badge key={skill} variant="outline" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline Dot */}
        <div className="hidden md:flex items-center justify-center w-2/12">
          <div className="relative">
            <div
              className="w-4 h-4 bg-accent-primary rounded-full border-4 border-primary"
            />
            <div
              className="absolute inset-0 w-4 h-4 bg-accent-primary rounded-full"
            />
          </div>
        </div>

        {/* Empty Space for Timeline */}
        <div className="hidden md:block w-5/12" />
      </div>
    );
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience & Leadership"
          subtitle="Professional journey combining technical training with leadership development"
          className="mb-16"
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-primary/40 transform -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card>
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-text-primary">Professional Growth</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Briefcase className="w-12 h-12 mx-auto mb-3 text-accent-primary" />
                  <div className="text-lg font-semibold text-text-primary">Hands-on Training</div>
                  <div className="text-sm text-text-secondary">Industry-relevant skills development</div>
                </div>
                <div className="text-center">
                  <GraduationCap className="w-12 h-12 mx-auto mb-3 text-accent-secondary" />
                  <div className="text-lg font-semibold text-text-primary">Leadership Experience</div>
                  <div className="text-sm text-text-secondary">Student representation and coordination</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-accent-primary" />
                  <div className="text-lg font-semibold text-text-primary">Continuous Learning</div>
                  <div className="text-sm text-text-secondary">Backend development and problem solving focus</div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-text-secondary max-w-3xl mx-auto">
                  My experience combines intensive technical training with practical leadership roles, 
                  providing a well-rounded foundation for a career in software engineering. 
                  Each opportunity has contributed to my growth as a developer and professional.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
