import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Cases.scss'

gsap.registerPlugin(ScrollTrigger)

interface Case {
  app: string
  category: string
  metric: string
  title: string
}

function Cases(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      // Cases cards animation
      const cards = gridRef.current?.querySelectorAll('.case-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          rotation: -5,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.7,
          stagger: {
            amount: 0.6,
            from: 'random'
          },
          ease: 'power3.out'
        })

        // Hover animations
        cards.forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -12,
              rotation: 2,
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out'
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              rotation: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const cases: Case[] = [
    { app: 'Productivity App', category: 'Productivity', metric: '+50% in total revenue', title: 'How pricing tests unlocked app\'s potential' },
    { app: 'Text on Pic', category: 'Photo & Video', metric: 'Over 30% MRR growth', title: 'How to boost revenue with the right experiments' },
    { app: 'Secret app', category: 'Trip planning', metric: '+102% ARPU growth', title: 'New onboarding and pricing strategy doubled revenue per user' },
    { app: 'Going Merry', category: 'App publisher', metric: '5x MRR growth', title: 'How to scale subscription revenue with Paywall Builder' },
    { app: 'Shmoody', category: 'Mental health', metric: 'ARR scaled from $0 to $2M', title: 'How to grow from a free app to $2M ARR with Adapty' },
    { app: 'Lively', category: 'Health & Fitness', metric: 'Refund rate dropped by 83%', title: 'Saved 82% of potentially lost revenue' },
    { app: 'Glam AI', category: 'Makeup & Beauty', metric: 'ROAS from Adapty – 108%', title: 'How to scale to $1.2M ARR in 3 months' },
    { app: 'Pepapp', category: 'Health & Fitness', metric: '400% ROI on Adapty', title: 'How to make Adapty free with Refund Saver' },
    { app: 'Fotorama', category: 'Photo & Video', metric: 'Refund rate dropped 40%', title: 'How to decrease the refund rate with Adapty' }
  ]

  return (
    <section className="cases" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Read the real cases of our customers</h2>
        <div className="cases-grid" ref={gridRef}>
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <div className="case-category">{caseItem.category}</div>
              <div className="case-app">{caseItem.app}</div>
              <div className="case-metric">{caseItem.metric}</div>
              <div className="case-title">{caseItem.title}</div>
              <button className="case-link">Read more</button>
            </div>
          ))}
        </div>
        <button className="btn btn-link">Read all cases</button>
      </div>
    </section>
  )
}

export default Cases

