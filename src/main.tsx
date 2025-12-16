import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from './App'
import './styles/main.scss'

gsap.registerPlugin(ScrollTrigger)

// Global smooth scroll behavior
if (typeof window !== 'undefined') {
  // Add smooth scroll to html
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Initialize GSAP ScrollTrigger
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)

