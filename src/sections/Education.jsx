import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Engineering (Cyber Security)',
      institution: 'Sri Venkateswaraa College of Technology',
      location: 'Chennai, Tamil Nadu',
      period: 'Nov 2022 – June 2026',
      status: 'Ongoing',
      type: 'Undergraduate',
      achievements: [
        'Specialized in Cybersecurity fundamentals',
        'Focus on secure coding practices',
        'Active participant in technical workshops',
        'Student Representative role'
      ],
      highlights: ['DSA', 'Java Programming', 'Network Security', 'Cryptography']
    },
    {
      id: 2,
      degree: 'Higher Secondary',
      institution: 'Hindu Nadar Uravinmurai Committee Higher Secondary School',
      location: 'Chennai, Tamil Nadu',
      period: 'Sept 2021 – April 2022',
      status: 'Completed',
      type: 'HSC',
      achievements: [
        'Computer Science stream',
        'Strong foundation in programming concepts',
        'Participation in coding competitions'
      ],
      highlights: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry']
    },
    {
      id: 3,
      degree: 'SSLC (10th Grade)',
      institution: 'Hindu Nadar Uravinmurai Committee Higher Secondary School',
      location: 'Chennai, Tamil Nadu',
      period: 'June 2019 – July 2020',
      status: 'Completed',
      type: 'Secondary Education',
      achievements: [
        'Excellent academic performance',
        'Foundation in logical thinking',
        'Early interest in technology'
      ],
      highlights: ['Mathematics', 'Science', 'Computer Basics']
    }
  ];

  const EducationCard = ({ education, index }) => {
    const isLatest = index === 0;

    return (
      <div className="relative">
        {/* Timeline Connection */}
        {index < educationData.length - 1 && (
          <div className="hidden md:block absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary/40 to-transparent" />
        )}

        <Card className={`relative ${isLatest ? 'border-accent-primary/30 bg-secondary/30' : ''}`}>
          {/* Timeline Dot */}
          <div className="absolute -left-12 top-8 hidden md:block">
            <div
              className="w-6 h-6 bg-accent-primary rounded-full border-4 border-primary"
            />
            {isLatest && (
              <div
                className="absolute inset-0 w-6 h-6 bg-accent-primary rounded-full"
              />
            )}
          </div>

          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <GraduationCap className={`w-5 h-5 ${isLatest ? 'text-accent-primary' : 'text-text-secondary'}`} />
                  <h3 className="text-xl font-bold text-text-primary">
                    {education.degree}
                  </h3>
                  {isLatest && (
                    <Badge variant="success" size="sm">
                      Current
                    </Badge>
                  )}
                </div>
                <div className="text-accent-primary font-medium mb-1">
                  {education.institution}
                </div>
              </div>
              <Badge variant="outline" size="sm">
                {education.type}
              </Badge>
            </div>

            {/* Meta Info */}
            <div className="space-y-2 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Calendar size={14} />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>{education.location}</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-text-primary flex items-center space-x-2">
                <Award size={14} className="text-accent-secondary" />
                <span>Key Achievements</span>
              </h4>
              <ul className="space-y-1">
                {education.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 bg-accent-secondary rounded-full mt-1.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subject Highlights */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-text-primary flex items-center space-x-2">
                <BookOpen size={14} className="text-accent-secondary" />
                <span>Focus Areas</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.highlights.map((subject) => (
                  <Badge key={subject} variant="secondary" size="sm">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Education"
          subtitle="Academic journey building the foundation for a career in software engineering"
          className="mb-16"
        />

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((education, index) => (
            <EducationCard 
              key={education.id} 
              education={education} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
