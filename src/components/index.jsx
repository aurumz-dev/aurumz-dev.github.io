import { render } from 'preact';
import App from './App.jsx';

function init() {
  const root = document.getElementById('root');
  if (root) {
    render(<App />, root);
  } else {
    console.error('Root element not found');
  }
}

// Wait for DOM to be ready before rendering
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Add a global style for responsiveness
const style = document.createElement('style');
style.textContent = `
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    background-color: #111; /* optional background */
    color: #eee;
  }

  /* Make sure root scales and content is flex-centered */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* General responsive adjustments */
  @media (max-width: 480px) {
    body {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1440px) {
    body {
      font-size: 1.05rem;
    }
  }
`;
document.head.appendChild(style);
