import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

// Register the GSAP plugin once when the app starts
gsap.registerPlugin(ScrollTrigger, Draggable);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);