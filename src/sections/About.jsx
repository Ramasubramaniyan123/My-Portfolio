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
      color: 'text-secondary'
    },
    {
      icon: Code,
      title: 'Java & DSA Focus',
      description: 'Proficient in Java programming with deep understanding of data structures and algorithms for efficient problem-solving.',
      color: 'text-primary'
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
      color: 'text-text-secondary'
    }
  ];

  const skills = [
    'Java', 'Python', 'Data Structures', 'Algorithms', 
    'REST APIs', 'Git', 'Problem Solving', 'Clean Code'
  ];

  return (
    <section id="about" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-[1400px] mx-auto container-padding">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building secure and efficient software solutions"
          className="mb-16"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Professional Summary */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-text-primary dark:text-slate-100">
                Final-year Cybersecurity student at <span className="font-semibold text-primary dark:text-slate-100">Sri venkateswaraa college of technology </span> with a strong foundation in 
                <span className="font-semibold text-primary dark:text-slate-100"> Java development</span> and modern backend technologies. Passionate about creating 
                <span className="font-semibold text-primary dark:text-slate-100"> secure</span>, <span className="font-semibold text-primary dark:text-slate-100"> efficient</span>, and 
                <span className="font-semibold text-primary dark:text-slate-100"> maintainable</span> software solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-text-primary dark:text-slate-100">
                My journey in tech has been driven by curiosity and a desire to solve complex problems. I specialize in 
                <span className="font-semibold text-primary dark:text-slate-100"> backend development</span> with expertise in 
                <span className="font-semibold text-primary dark:text-slate-100"> Spring Boot</span>, 
                <span className="font-semibold text-primary dark:text-slate-100"> REST APIs</span>, and 
                <span className="font-semibold text-primary dark:text-slate-100"> database design</span>. 
                I'm constantly expanding my knowledge in 
                <span className="font-semibold text-primary dark:text-slate-100"> cybersecurity</span> and 
                <span className="font-semibold text-primary dark:text-slate-100"> cloud technologies</span>.
              </p>
            </div>

            {/* Skills Badges */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-text-primary dark:text-slate-100 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" size="md" className="text-text-primary dark:text-slate-100 border border-border dark:border-slate-600">
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
                  <div className={`p-3 rounded-lg bg-background dark:bg-slate-800 border border-border dark:border-slate-700 ${point.color}`}>
                    <point.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary dark:text-slate-100 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">
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
