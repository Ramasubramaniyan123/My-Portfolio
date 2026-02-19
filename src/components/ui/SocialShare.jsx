import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react';

const SocialShare = ({ title, description, url }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Ramasubramaniyan K - Java Developer Portfolio';
  const shareDescription = description || 'Final-year Cybersecurity student passionate about Java, DSA, and building efficient backend systems.';

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareTitle} - ${shareDescription}`)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-700',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (socialUrl) => {
    window.open(socialUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-text-secondary">Share:</span>
      
      <div className="flex items-center space-x-2">
        {socialLinks.map((social) => (
          <button
            key={social.name}
            onClick={() => handleShare(social.url)}
            className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color} hover:text-white transform hover:scale-105`}
            aria-label={`Share on ${social.name}`}
            title={`Share on ${social.name}`}
          >
            <social.icon size={18} />
          </button>
        ))}
        
        <button
          onClick={copyToClipboard}
          className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200 transform hover:scale-105`}
          aria-label="Copy link"
          title="Copy link"
        >
          {copied ? (
            <Check size={18} className="text-green-500" />
          ) : (
            <Link2 size={18} />
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;
