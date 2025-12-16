import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Features.scss'

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  category: string
  icon: string
  title: string
  items: string[]
}

function Features(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        ease: 'power3.out'
      })

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.feature-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }

      // Parallax effect on hover
      cards?.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features: Feature[] = [
    {
      category: 'For developers',
      icon: '📱',
      title: 'Subscriptions SDK',
      items: ['SDK Install', 'Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls']
    },
    {
      category: 'For app owners',
      icon: '📊',
      title: 'Revenue analytics',
      items: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions']
    },
    {
      category: 'For marketers',
      icon: '🎨',
      title: 'A/B testing',
      items: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting']
    }
  ]

  return (
    <section className="features" ref={sectionRef}>
      <div className="container">
        <h2 className="features-title" ref={titleRef}>
          Help your team run the mobile subscription business.<br />
          Faster and cheaper.
        </h2>
        <div className="features-grid" ref={cardsRef}>
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-category">{feature.category}</h3>
              <h4 className="feature-title">{feature.title}</h4>
              <ul className="feature-items">
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

export default Features

