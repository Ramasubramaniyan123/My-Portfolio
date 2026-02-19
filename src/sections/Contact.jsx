import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7871560486',
      href: 'tel:+917871560486',
      color: 'text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ramasubramaniyan.k12@gmail.com',
      href: 'mailto:ramasubramaniyan.k12@gmail.com',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: null,
      color: 'text-text-secondary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Ramasubramaniyan123',
      label: 'GitHub',
      color: 'hover:text-text-primary dark:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ramasubramaniyan-k-486086255',
      label: 'LinkedIn',
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      href: 'mailto:ramasubramaniyan.k12@gmail.com',
      label: 'Email',
      color: 'hover:text-primary'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-8xl mx-auto container-padding">
        <SectionTitle
          title="Contact"
          subtitle="Let's connect and discuss opportunities"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary dark:text-white dark:text-slate-100 mb-6">Let's Connect</h3>
              <p className="text-text-secondary dark:text-slate-300 mb-8">
                I'm always interested in hearing about new opportunities, 
                exciting projects, or just having a conversation about technology 
                and programming. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} hover={true} delay={index * 0.1}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-background dark:bg-slate-800 border border-border dark:border-slate-600 ${info.color}`}>
                      <info.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-text-muted dark:text-slate-400 mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-text-primary dark:text-white dark:text-slate-100 font-medium hover:text-accent-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-text-primary dark:text-white dark:text-slate-100 font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary dark:text-white dark:text-slate-100 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-lg bg-background dark:bg-slate-800 border border-border dark:border-slate-600 text-text-secondary dark:text-slate-300 transition-all duration-300 hover:scale-110 hover:rotate-[15deg] hover:border-accent-primary"
                  >
                    <social.icon size={20} className={social.color} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="h-full bg-background">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-6">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background dark:bg-slate-800 border border-border dark:border-slate-600 rounded-lg text-text-primary dark:text-white placeholder:text-text-secondary/70 dark:placeholder:text-slate-400/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background dark:bg-slate-800 border border-border dark:border-slate-600 rounded-lg text-text-primary dark:text-white placeholder:text-text-secondary/70 dark:placeholder:text-slate-400/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background dark:bg-slate-800 border border-border dark:border-slate-600 rounded-lg text-text-primary dark:text-white placeholder:text-text-secondary/70 dark:placeholder:text-slate-400/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background dark:bg-slate-800 border border-border dark:border-slate-600 rounded-lg text-text-primary dark:text-white placeholder:text-text-secondary/70 dark:placeholder:text-slate-400/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2">
                        <MessageSquare size={18} />
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-accent-primary/10 border border-accent-primary/30 rounded-lg text-accent-primary text-sm text-center">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16">
          <Card className="text-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Ready to Collaborate?</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to connect - I'm always open to meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" href="mailto:ramasubramaniyan.k12@gmail.com">
                  <Mail size={18} className="mr-2" />
                  Email Me
                </Button>
                <Button variant="secondary" href="https://www.linkedin.com/in/ramasubramaniyan-k-486086255">
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
