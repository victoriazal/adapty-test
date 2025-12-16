import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/RefundSaver.scss'

gsap.registerPlugin(ScrollTrigger)

function RefundSaver(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="refund-saver" ref={sectionRef}>
      <div className="container">
        <div className="refund-saver-content">
          <div className="refund-saver-text" ref={contentRef}>
            <h2 className="section-title">
              Cut refund rate by 40%
            </h2>
            <p className="section-description">
              Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.
            </p>
            <button className="btn btn-link">Set up Refund Saver</button>
            
            <div className="testimonial-box">
              <div className="testimonial-quote-icon">
                <img src="/images/quotes.svg" alt="Quote" />
              </div>
              <p className="testimonial-quote">
                "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Berk Çağatay Albayrak</div>
                <div className="author-role">Sr. Product Manager</div>
                <div className="author-company">Fotorama</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundSaver

