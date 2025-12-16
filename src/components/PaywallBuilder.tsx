import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/PaywallBuilder.scss'

gsap.registerPlugin(ScrollTrigger)

function PaywallBuilder(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        x: 50,
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
          scale: 1.02,
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
    <section className="paywall-builder" ref={sectionRef}>
      <div className="container">
        <div className="paywall-builder-content">
          <div className="paywall-builder-text" ref={contentRef}>
            <h2 className="section-title">
              No-code paywall builder
            </h2>
            <p className="section-description">
              Build beautiful native paywalls for iOS, Android, Flutter, and React Native without a dev team.
            </p>
            <button className="btn btn-link">Create paywalls within minutes</button>
            
            <div className="testimonial-box">
              <div className="testimonial-quote-icon">
                <img src="/images/quotes.svg" alt="Quote" />
              </div>
              <p className="testimonial-quote">
                "Adapty's Paywall Builder and A/B testing tools paired together are a game changer for anyone trying to do high-velocity testing and find quick wins."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Mike McSweeney</div>
                <div className="author-role">Chief Product Officer</div>
                <div className="author-company">Moodworks Inc</div>
              </div>
            </div>
          </div>
          
          <div className="paywall-builder-image" ref={imageRef}>
            <img 
              src="/images/features/no-code-paywall-builder.webp" 
              alt="No-code Paywall Builder"
              className="paywall-builder-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaywallBuilder

