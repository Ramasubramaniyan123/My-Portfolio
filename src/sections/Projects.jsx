import React, { useState } from 'react';
import { Github, ExternalLink, Code, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { projectsData } from '../data/projects.data';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.status.toLowerCase() === filter);

  const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <Card key={project.id} delay={index * 0.1} className="h-full group">
        <div className="space-y-4">
          {/* Project Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {project.title}
              </h3>
              <Badge 
                variant={project.status === 'Completed' ? 'success' : 'default'}
                size="sm"
              >
                {project.status}
              </Badge>
            </div>
            <div className="flex space-x-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-all duration-300 hover:rotate-[15deg]"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-accent-secondary hover:text-accent-primary text-sm font-medium transition-colors"
            >
              <Code size={16} className="transition-transform duration-300 group-hover:rotate-[15deg]" />
              <span>{isExpanded ? 'Hide' : 'Show'} Features</span>
            </button>
            
            {isExpanded && (
              <ul className="space-y-1 text-sm text-text-secondary">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle size={12} className="text-accent-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="sm"
              className="w-full group"
            >
              <Github size={16} className="mr-2" />
              View on GitHub
              <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Projects"
          subtitle="Showcasing my journey through practical application of skills and technologies"
          className="mb-16"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'active', 'completed', 'development'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === status
                  ? 'bg-accent-primary text-primary shadow-lg shadow-accent-primary/10'
                  : 'bg-secondary text-text-secondary hover:bg-card border border-border'
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
