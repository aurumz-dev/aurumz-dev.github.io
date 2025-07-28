export default function ProjectCard({ name, link, description, github, tags = [], backgroundColor = "#222" }) {
  const isClickable = Boolean(link);

  return (
    <a
      href={isClickable ? link : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${isClickable ? '' : 'disabled'}`}
      style={{
        backgroundColor,
        color: '#fff',
        textDecoration: 'none',
        padding: '1.21rem', // original 1.05 * 1.15
        borderRadius: '0.805rem', // original 0.7 * 1.15
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        ...(isClickable && { cursor: 'pointer' }),
      }}
    >
      <h3 style={{ fontSize: '1.127rem', marginBottom: '0.644rem' }}>
        {name}
      </h3> {/* 0.98 * 1.15, 0.56 * 1.15 */}
      
      <p style={{ fontSize: '0.77rem', lineHeight: '1.4', flexGrow: 1 }}>
        {description}
      </p> {/* 0.67 * 1.15 */}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '0.575rem', // 0.5 * 1.15
            fontSize: '0.92rem', // 0.8 * 1.15
            color: '#4d6595',
            textDecoration: 'underline',
            alignSelf: 'flex-start',
          }}
        >
          GitHub Source
        </a>
      )}

      {tags.length > 0 && (
        <div
          className="project-tags"
          style={{
            marginTop: '0.805rem', // 0.7 * 1.15
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.402rem', // 0.35 * 1.15
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              style={{
                backgroundColor: '#00000040',
                color: '#fff',
                padding: '0.241rem 0.564rem', // 0.21 * 1.15, 0.49 * 1.15
                borderRadius: '999px',
                fontSize: '0.604rem', // 0.525 * 1.15
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
