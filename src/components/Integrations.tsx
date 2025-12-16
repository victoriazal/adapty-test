import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Integrations.scss'

gsap.registerPlugin(ScrollTrigger)

function Integrations(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      // Grid items animation
      const items = gridRef.current?.querySelectorAll('.integration-item')
      if (items) {
        gsap.from(items, {
          opacity: 0,
          scale: 0.8,
          y: 30,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.4)'
        })

        // Hover animations
        items.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              scale: 1.1,
              y: -5,
              duration: 0.2,
              ease: 'power2.out'
            })
          })

          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              scale: 1,
              y: 0,
              duration: 0.2,
              ease: 'power2.out'
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const integrations: string[] = [
    'Airbridge', 'Adjust', 'Amazon S3', 'Amplitude', 'Apple Ads', 'AppFlyer',
    'AppMetrica', 'Asapty', 'Branch', 'Braze', 'Facebook Ads', 'Google Analytics',
    'Google Cloud Storage', 'mixpanel', 'OneSignal', 'PostHog', 'PushWoosh',
    'SplitMetrics', 'Singular', 'Stripe', 'Tenjin', 'WebHooks'
  ]

  return (
    <section className="integrations" ref={sectionRef}>
      <div className="container">
        <div className="integrations-content">
          <div className="integrations-text" ref={contentRef}>
            <h2 className="section-title">
              Sync purchase data with other services
            </h2>
            <p className="section-description">
              Forward subscription events to analytics and attribution services without coding.
            </p>
            <button className="btn btn-link">Explore integrations</button>
            
            <div className="testimonial-box">
              <div className="testimonial-quote-icon">
                <img src="/images/quotes.svg" alt="Quote" />
              </div>
              <p className="testimonial-quote">
                "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Chris Bick</div>
                <div className="author-role">Founder and CEO</div>
                <div className="author-company">Bickster</div>
              </div>
            </div>
          </div>
          
          <div className="integrations-grid" ref={gridRef}>
            {integrations.map((integration, index) => (
              <div key={index} className="integration-item">{integration}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations

