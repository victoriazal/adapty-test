import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/WebFunnels.scss'

gsap.registerPlugin(ScrollTrigger)

function WebFunnels(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        y: 50,
        scale: 0.95,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="web-funnels" ref={sectionRef}>
      <div className="container">
        <div className="web-funnels-content">
          <div className="web-funnels-text" ref={contentRef}>
            <h2 className="section-title">
              Boost app revenue fast with web funnels
            </h2>
            <p className="section-description">
              Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.
            </p>
            <button className="btn btn-link">Explore FunnelFox</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebFunnels

