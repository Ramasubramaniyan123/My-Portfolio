import React, { useState } from 'react';
import { ExternalLink, Calendar, Award, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { certificationsData } from '../data/certifications.data';

const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="certifications" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-8xl mx-auto container-padding">
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications that validate my technical expertise and commitment to continuous learning"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((certification) => (
            <Card key={certification.id} className="group">
              <article className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="text-primary" size={24} />
                      <h3 className="text-xl font-bold text-text-primary dark:text-slate-100 group-hover:text-primary transition-colors">
                        {certification.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary dark:text-slate-300">
                      <span className="font-medium">{certification.issuer}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{certification.date}</span>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={certification.status === 'active' ? 'success' : 'secondary'}
                    className="capitalize"
                  >
                    {certification.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed">
                  {certification.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-background dark:bg-slate-700 border border-border dark:border-slate-600 text-text-secondary dark:text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                <div className="border-t border-border dark:border-slate-700 pt-4">
                  <button
                    onClick={() => toggleExpanded(certification.id)}
                    className="flex items-center justify-between w-full text-left text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    <span>Credential Details</span>
                    {expandedId === certification.id ? (
                      <ChevronUp size={18} className="transition-transform" />
                    ) : (
                      <ChevronDown size={18} className="transition-transform" />
                    )}
                  </button>

                  {expandedId === certification.id && (
                    <div className="mt-3 space-y-2 animate-fade-in">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary dark:text-slate-300">Credential ID:</span>
                        <span className="font-mono text-text-primary dark:text-slate-100">{certification.credentialId}</span>
                      </div>
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm text-primary hover:text-primary-hover transition-colors group"
                      >
                        <span>Verify Certificate</span>
                        <ExternalLink 
                          size={16} 
                          className="group-hover:translate-x-1 transition-transform" 
                        />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
