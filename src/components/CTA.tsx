import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/CTA.scss'

gsap.registerPlugin(ScrollTrigger)

function CTA(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        ease: 'power3.out'
      })

      // Buttons animation
      const buttons = buttonsRef.current?.querySelectorAll('button')
      if (buttons) {
        gsap.from(buttons, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        })

        // Pulse animation on buttons
        buttons.forEach((button) => {
          button.addEventListener('mouseenter', () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.2,
              ease: 'power2.out'
            })
          })

          button.addEventListener('mouseleave', () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.2,
              ease: 'power2.out'
            })
          })
        })
      }

      // Parallax background effect
      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="cta" ref={sectionRef}>
      <div className="container">
        <h2 className="cta-title" ref={titleRef}>
          Get started today or schedule a demo<br />
          for your personal onboarding
        </h2>
        <div className="cta-buttons" ref={buttonsRef}>
          <button className="btn btn-primary">Start for free</button>
          <button className="btn btn-secondary">Schedule a demo</button>
        </div>
      </div>
    </section>
  )
}

export default CTA

