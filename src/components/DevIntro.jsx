// src/components/DevIntro.jsx
export default function DevIntro() {
  return (
    <div className="aspect-ratio-container">
      <div className="typing-wrapper centered shift-left">
        <h1 className="main-title">Welcome to the Dev Page</h1>
        <p className="subtitle" style={{ color: '#ccc', lineHeight: '1.5', fontSize: '1.25rem' }}>
          This is the developer's corner.<br />
          Here I share my projects, experiments,<br />
          and thoughts on coding,<br />
          open-source, and tech innovations.
        </p>
      </div>
    </div>
  );
}
