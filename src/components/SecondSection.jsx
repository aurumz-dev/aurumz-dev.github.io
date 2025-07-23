import { useState, useEffect, useRef } from 'preact/hooks';
import ProjectsList from './ProjectsList.jsx';

export default function SecondSection() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.3 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="section second-section">
      <div ref={containerRef} className={`animate-fade ${visible ? 'visible' : ''}`}>
        <div className="left-top-text">
          <div className="title-subtitle-row">
            <h1>Some of My Projects</h1>
            <div className="subtitle">(open-access)</div>
          </div>
          <div className="new-subtitle">Your new subtitle goes here</div>
        </div>
        <ProjectsList />
      </div>
    </section>
  );
}
