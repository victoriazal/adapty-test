import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/PaywallManagement.scss'

gsap.registerPlugin(ScrollTrigger)

function PaywallManagement(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        x: -50,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })

      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -40,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="paywall-management" ref={sectionRef}>
      <div className="container">
        <div className="paywall-management-content">
          <div className="paywall-management-text" ref={contentRef}>
            <h2 className="section-title">
              Increase subscription revenue without app releases
            </h2>
            <p className="section-description">
              Manage, target, localize and personalize paywalls without leaving your browser.
            </p>
            <button className="btn btn-link">Increase app revenue</button>
            
            <div className="testimonial-box">
              <div className="testimonial-quote-icon">
                <img src="/images/quotes.svg" alt="Quote" />
              </div>
              <p className="testimonial-quote">
                "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Ilgar Tali</div>
                <div className="author-role">Founder & Chief Vision Officer</div>
                <div className="author-company">Smartist</div>
              </div>
            </div>
          </div>
          
          <div className="paywall-features-image" ref={imageRef}>
            <img 
              src="/images/features/app-monetization-strategies.webp" 
              alt="App Monetization Strategies"
              className="paywall-features-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaywallManagement

