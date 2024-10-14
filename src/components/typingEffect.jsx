import React, { useState, useEffect } from 'react';

const TypingEffect = ({ sentences }) => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentSentence = sentences[sentenceIndex];
      let nextCharIndex;

      if (!isDeleting) {
        nextCharIndex = charIndex + 1;
      } else {
        nextCharIndex = charIndex - 1;
      }

      if (!isDeleting && nextCharIndex > currentSentence.length) {
        setIsDeleting(true);
      }

      if (isDeleting && nextCharIndex === 0) {
        setIsDeleting(false);
        setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }

      setCharIndex(nextCharIndex);
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, sentenceIndex, sentences]);

  return <div id='ty-text'>{sentences[sentenceIndex].substring(0, charIndex)}</div>;
};

export default TypingEffect;