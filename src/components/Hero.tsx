import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Hero.scss'

gsap.registerPlugin(ScrollTrigger)

function Hero(): JSX.Element {
  const heroRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner animation
      if (bannerRef.current) {
        gsap.fromTo(bannerRef.current, 
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
      }

      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
        )
      }

      // Subtitle animation
      const subtitle = leftRef.current?.querySelector('.hero-subtitle')
      if (subtitle) {
        gsap.fromTo(subtitle,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
        )
      }

      // CTA form animation
      const ctaForm = leftRef.current?.querySelector('.hero-cta-form')
      if (ctaForm) {
        gsap.fromTo(ctaForm,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
        )
      }

      // Right content animation
      if (rightRef.current) {
        gsap.fromTo(rightRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
        )
      }

      // Parallax effects - set up after initial animation
      setTimeout(() => {
        const dashboardImage = rightRef.current?.querySelector('.dashboard-image')
        const mobileImage = rightRef.current?.querySelector('.mobile-preview-image')
        
        if (dashboardImage && heroRef.current) {
          gsap.to(dashboardImage, {
            y: -50,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1
            }
          })
        }

        if (mobileImage && heroRef.current) {
          gsap.to(mobileImage, {
            y: -80,
            x: 20,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5
            }
          })
        }
      }, 100)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-left" ref={leftRef}>
          <div className="hero-ebook-banner" ref={bannerRef}>
            <span className="ebook-text">Ebook</span>
            <span className="ebook-title">$100K playbook</span>
            <span className="ebook-download">| download</span>
            <span className="ebook-arrow">→</span>
          </div>
          
          <h1 className="hero-title" ref={titleRef}>
            Revenue management for in-app purchases
          </h1>
          
          <p className="hero-subtitle">
            Save months on integrating subscriptions and double your app revenue with paywall management.
          </p>
          
          <div className="hero-cta-form">
            <div className="hero-email-input">
              <input 
                type="email" 
                placeholder="Email address" 
                className="email-field"
              />
              <button className="btn btn-primary btn-start-free">
                Start for free →
              </button>
            </div>
            <a href="#" className="hero-demo-link">
              Book a demo →
            </a>
          </div>
        </div>
        
        <div className="hero-right" ref={rightRef}>
          <div className="hero-dashboard">
            <img 
              src="/images/adapty-overview-2x.webp" 
              alt="Adapty Overview Dashboard"
              className="dashboard-image"
            />
          </div>
          <div className="hero-mobile-preview">
            <img 
              src="/images/adapty-paywall-demo-preview.webp" 
              alt="Adapty Paywall Demo Preview"
              className="mobile-preview-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

