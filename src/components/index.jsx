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
