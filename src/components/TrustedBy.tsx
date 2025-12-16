import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/TrustedBy.scss'

gsap.registerPlugin(ScrollTrigger)

interface Logo {
  name: string
  image: string | null
}

function TrustedBy(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible by default
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 1, y: 0 })
      }
      
      const logos = logosRef.current?.querySelectorAll('.logo-item')
      if (logos) {
        gsap.set(logos, { opacity: 1, y: 0, scale: 1 })
      }

      // Text animation
      if (textRef.current) {
        gsap.fromTo(textRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            ease: 'power3.out'
          }
        )
      }

      // Logos animation
      if (logos && logos.length > 0) {
        gsap.fromTo(logos,
          { opacity: 0, y: 40, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: logosRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            onComplete: () => {
              // Start floating animation after initial animation completes
              logos.forEach((logo, index) => {
                gsap.to(logo, {
                  y: -10,
                  duration: 2 + index * 0.2,
                  repeat: -1,
                  yoyo: true,
                  ease: 'power1.inOut',
                  delay: index * 0.1
                })
              })
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const logos: Logo[] = [
    { name: 'Feeld', image: '/images/logos/feeld.svg' },
    { name: 'Bumble', image: '/images/logos/bumble.svg' },
    { name: 'Weewoo', image: null },
    { name: 'AppNation', image: '/images/logos/appnation.png' },
    { name: 'Almus', image: null },
    { name: 'Impala Studios', image: '/images/logos/impala-studios.svg' },
    { name: 'HUBX', image: '/images/logos/hubx.svg' }
  ]
  
  return (
    <section className="trusted-by" ref={sectionRef}>
      <div className="container">
        <p className="trusted-by-text" ref={textRef}>
          Trusted by 15,000+ apps and the world's largest app publishers
        </p>
        <div className="trusted-by-logos" ref={logosRef}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              {logo.image ? (
                <img src={logo.image} alt={logo.name} className="logo-image" />
              ) : (
                <span className="logo-text">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy

