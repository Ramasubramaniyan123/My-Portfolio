import React from 'react';
import { User, Code, Shield, Target } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const About = () => {
  const aboutPoints = [
    {
      icon: Shield,
      title: 'Cybersecurity Background',
      description: 'Strong academic foundation in cybersecurity with focus on secure coding practices and threat awareness.',
      color: 'text-accent-secondary'
    },
    {
      icon: Code,
      title: 'Java & DSA Focus',
      description: 'Proficient in Java programming with deep understanding of data structures and algorithms for efficient problem-solving.',
      color: 'text-accent-primary'
    },
    {
      icon: Target,
      title: 'Analytical Mindset',
      description: 'Detail-oriented approach to problem-solving with emphasis on clean architecture and maintainable code.',
      color: 'text-text-secondary'
    },
    {
      icon: User,
      title: 'Continuous Learner',
      description: 'Passionate about learning new technologies and best practices to build robust, scalable applications.',
      color: 'text-text-muted'
    }
  ];

  const skills = [
    'Java', 'Python', 'Data Structures', 'Algorithms', 
    'REST APIs', 'Git', 'Problem Solving', 'Clean Code'
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="About Me"
          subtitle="A passionate fresher with strong foundations in cybersecurity and Java development"
          className="mb-16"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Professional Summary */}
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed">
                I am a final-year Computer Science and Engineering (Cyber Security) student at 
                Sri Venkateswaraa College of Technology, passionate about building secure and 
                efficient software solutions.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My journey in programming began with Java, and I've developed a strong foundation 
                in Data Structures and Algorithms. I believe in writing clean, maintainable code 
                and solving problems with analytical precision.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Currently undergoing intensive training at Xcelevate Skills Foundation, I'm 
                honing my backend development skills and preparing for a career in software 
                engineering with a focus on Java-based enterprise applications.
              </p>
            </div>

            {/* Skills Badges */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" size="md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Key Attributes */}
          <div className="space-y-6">
            {aboutPoints.map((point, index) => (
              <Card key={index} hover={true} delay={index * 0.1}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-background border border-border ${point.color}`}>
                    <point.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {point.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
