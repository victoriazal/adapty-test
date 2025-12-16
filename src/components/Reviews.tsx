import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Reviews.scss'

gsap.registerPlugin(ScrollTrigger)

function Reviews(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)

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

      // Awards animation
      const awards = awardsRef.current?.querySelectorAll('.award')
      if (awards) {
        gsap.from(awards, {
          opacity: 0,
          scale: 0.8,
          y: 30,
          scrollTrigger: {
            trigger: awardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        })

        // Continuous rotation animation
        awards.forEach((award, index) => {
          gsap.to(award, {
            rotation: 5,
            duration: 3 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.2
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="reviews" ref={sectionRef}>
      <div className="container">
        <h2 className="reviews-title" ref={titleRef}>
          Trusted for usability and customer service
        </h2>
        <p className="reviews-subtitle">
          Based on 500+ reviews
        </p>
        <div className="reviews-awards" ref={awardsRef}>
          <div className="award">G2 Award: Best Results, winter 2025</div>
          <div className="award">G2 Award: High Performer, winter 2025</div>
          <div className="award">G2 Award: Best Usability, winter 2025</div>
          <div className="award">G2 Award: Best Relationship, winter 2025</div>
          <div className="award">G2 Award: Most Implementable, winter 2025</div>
        </div>
      </div>
    </section>
  )
}

export default Reviews

