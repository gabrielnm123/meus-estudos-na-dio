import React from 'react';
import ReactDOM from 'react-dom/client'; // depois ver melhor isso, pq talvez eu deva usar o react-dom tbm no lado do servidor e ver se devo importar assim ou sem o '/client'
import App from './App';

const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<App />);
