import { useState, useEffect, useMemo } from 'react';

const TypingEffect = () => {
  const phrases = useMemo(() => ([
    'A Problem Solver',
    'A Java Backend Developer',
    'A Cybersecurity Student',
    'A Software Engineer in Progress'
  ]), []);

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let timer;
    
    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (currentText === '') {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 50);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      }
    } else {
      if (currentText === phrase) {
        timer = setTimeout(() => {
          setIsPaused(true);
        }, 50);
      } else {
        timer = setTimeout(() => {
          setCurrentText(phrase.slice(0, currentText.length + 1));
        }, 100);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases]);

  return (
    <span className="text-accent-primary">
      {currentText}
      <span className="animate-blink text-accent-primary">|</span>
    </span>
  );
};

export default TypingEffect;
