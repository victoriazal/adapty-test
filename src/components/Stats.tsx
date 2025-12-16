import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Stats.scss'

gsap.registerPlugin(ScrollTrigger)

function Stats(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        ease: 'power3.out'
      })

      // Stats counter animation
      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      if (statItems) {
        gsap.from(statItems, {
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        })

        // Number counting animation
        statItems.forEach((item) => {
          const valueEl = item.querySelector('.stat-value')
          if (valueEl) {
            gsap.from(valueEl, {
              opacity: 0,
              y: 20,
              scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
              },
              duration: 0.8,
              delay: 0.3,
              ease: 'power2.out'
            })
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <h2 className="stats-title" ref={titleRef}>
          Adapty processes subscription revenue with the industry's highest SLA Rate
        </h2>
        <div className="stats-grid" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-value">$0B</div>
            <div className="stat-label">tracked revenue</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0.0%</div>
            <div className="stat-label">historical uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0B</div>
            <div className="stat-label">users served</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">0B</div>
            <div className="stat-label">API calls / month</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

