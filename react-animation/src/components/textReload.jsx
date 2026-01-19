import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../TextReload.css';

function SplitText({ text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    <p ref={containerRef} className="split-text">
      {text.split('').map((char, i) => (
        <span className="char" key={i}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  );
}

export default SplitText;
