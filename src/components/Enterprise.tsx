import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Enterprise.scss'

gsap.registerPlugin(ScrollTrigger)

interface EnterpriseFeature {
  category: string
  items: string[]
}

function Enterprise(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        ease: 'power3.out'
      })

      // Cards animation
      const cards = gridRef.current?.querySelectorAll('.enterprise-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          rotationX: 15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        })

        // 3D tilt effect on hover
        cards.forEach((card) => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = (y - centerY) / 10
            const rotateY = (centerX - x) / 10

            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              transformPerspective: 1000,
              duration: 0.3,
              ease: 'power2.out'
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.5,
              ease: 'power2.out'
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features: EnterpriseFeature[] = [
    {
      category: 'Secure',
      items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring']
    },
    {
      category: 'Reliable',
      items: ['99.99% SLA', 'Over $500M/year of in-app purchases processed']
    },
    {
      category: 'Responsive',
      items: ['Dedicated customer success manager', 'Direct communication via Slack', 'Live chat on the website', 'Four ways to reach us']
    }
  ]

  return (
    <section className="enterprise" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Enterprise-grade platform</h2>
        <div className="enterprise-grid" ref={gridRef}>
          {features.map((feature, index) => (
            <div key={index} className="enterprise-card">
              <h3 className="enterprise-category">{feature.category}</h3>
              <ul className="enterprise-items">
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Enterprise

