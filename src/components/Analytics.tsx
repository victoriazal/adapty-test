import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Analytics.scss'

gsap.registerPlugin(ScrollTrigger)

function Analytics(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="analytics" ref={sectionRef}>
      <div className="container">
        <div className="analytics-content">
          <div className="analytics-text" ref={contentRef}>
            <h2 className="section-title">
              Know your subscription numbers at any moment
            </h2>
            <p className="section-description">
              Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.
            </p>
            <button className="btn btn-link">See subscription BI</button>
            
            <div className="testimonial-box">
              <div className="testimonial-quote-icon">
                <img src="/images/quotes.svg" alt="Quote" />
              </div>
              <p className="testimonial-quote">
                "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Nikolay Chebotarev</div>
                <div className="author-role">Head of UA at Moonly.app</div>
                <div className="author-company">Moonly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Analytics

