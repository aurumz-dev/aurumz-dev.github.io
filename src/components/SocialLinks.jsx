export default function SocialLinks() {
  return (
    <>
      <div
        className="social-links"
        style={{ display: 'flex', gap: '1rem' }}
        role="navigation"
        aria-label="Social links"
      >
        <a
          href="mailto:aurumz.gg@hotmail.com"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
          className="social-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e9e3dfca"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </a>

        <a
          href="https://github.com/aurumz-rgb"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="social-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e9e3dfca"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="social-icon"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7
                     A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0
                     C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61
                     6.44 7a3.37 3.37 0 0 0-.94 2.59V22Z" />
          </svg>
        </a>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .social-links {
            justify-content: center !important;
          }
        }

        /* Tablets (portrait) */
        @media (min-width: 481px) and (max-width: 768px) {
          .social-links {
            justify-content: center;
            gap: 0.8rem;
          }
          .social-icon {
            width: 40px;
            height: 40px;
          }
        }

        /* Small laptops */
        @media (min-width: 769px) and (max-width: 1024px) {
          .social-links {
            justify-content: flex-start;
            gap: 1rem;
          }
          .social-icon {
            width: 45px;
            height: 45px;
          }
        }

        /* Very large screens */
        @media (min-width: 1440px) {
          .social-links {
            gap: 2rem;
          }
          .social-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
}
