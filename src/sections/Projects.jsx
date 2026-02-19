import React, { useState } from 'react';
import { Github, ExternalLink, Code, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SocialShare from '../components/ui/SocialShare';
import { projectsData } from '../data/projects.data';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => {
        const status = project.status.toLowerCase();
        if (filter === 'development') {
          return status.includes('development');
        }
        return status === filter || status.includes(filter);
      });

  const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-6 transition-all duration-250 hover:shadow-lg hover:border-primary hover:scale-105 hover:-translate-y-1 group flex flex-col h-full">
        <div className="space-y-4 flex-grow">
          {/* Project Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary dark:text-slate-100 mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                project.status === 'Completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
              }`}>
                {project.status}
              </div>
            </div>
            <div className="flex space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-slate-300 hover:text-primary transition-all duration-250 hover:rotate-[12deg] hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-background dark:bg-slate-700 border border-border dark:border-slate-600 text-text-secondary dark:text-slate-300 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-primary hover:text-primary-hover text-sm font-semibold transition-colors"
            >
              <Code size={16} className="transition-transform duration-250 group-hover:rotate-[12deg]" />
              <span>{isExpanded ? 'Hide' : 'Show'} Features</span>
            </button>
            
            {isExpanded && (
              <ul className="space-y-1.5 text-sm text-text-secondary animate-fade-in">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2"
                  >
                    <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 mt-auto">
          <Button
            href={project.githubUrl}
            variant="secondary"
            size="sm"
            className="w-full btn-secondary py-2.5 text-black"
          >
            <Github size={18} className="mr-2" />
            View on GitHub
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-8xl mx-auto container-padding">
        <SectionTitle
          title="Projects"
          subtitle="Showcasing my journey through practical application of skills and technologies"
          className="mb-16"
        />

        {/* Social Share */}
        <div className="flex justify-center mb-12">
          <SocialShare 
            title="Ramasubramaniyan K - Projects"
            description="Check out my projects showcasing Java, Spring Boot, and full-stack development skills."
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'completed', 'development'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-250 ${
                filter === status
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-primary/5 border border-border hover:border-primary/30'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-text-muted text-lg">
              No projects found for the selected filter.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
