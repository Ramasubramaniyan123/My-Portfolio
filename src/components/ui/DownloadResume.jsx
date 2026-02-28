import React from 'react';
import { Download } from 'lucide-react';
import Button from './Button';

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = import.meta.env.VITE_RESUME_PATH || '/resume.pdf';
    link.download = 'Ramasubramaniyan_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} className="group">
      <Download size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
      Download Resume
    </Button>
  );
};

export default DownloadResume;
