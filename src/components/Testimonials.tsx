import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Testimonials.scss'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  companyLogo?: string
}

function Testimonials(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  
  const testimonials: Testimonial[] = [
    {
      quote: "Migrating off RevenueCat was not an easy decision for us. We've chosen Adapty because we believe they are a better partner as we grow. Looking back it was the right call. Despite some hiccups, the Adapty team was always there to help us during the migration and afterward, and their support is top-notch. I recommend Adapty as a reliable partner.",
      author: "Cem Ortabas",
      role: "Co-founder and CEO, HubX",
      company: "HUBX",
      avatar: '/images/testimonials/cem-ortabas.webp',
      companyLogo: '/images/testimonials/hubx-logo.svg'
    },
    {
      quote: "We've been working with Adapty since 2021 and I couldn't be happier about it. We've tried other subscription management platforms in the past so I can compare. Adapty introduced numerous features over the years and constantly helped us grow. They have the best analytics on the market and all the integrations you can think of. If you looking to boost the revenue of your app, I definitely recommend Adapty.",
      author: "Chris Bick",
      role: "Founder and CEO, Bickster",
      company: "Bickster",
      avatar: '/images/testimonials/chris-bick.webp',
      companyLogo: '/images/testimonials/bickster-logo.png'
    },
    {
      quote: "We chose Adapty for its powerful paywall A/B testing capabilities, which helped us optimize our monetization strategy effectively. The user-friendly platform, flexible pricing, and exceptional customer support make Adapty a superior choice over competitors.",
      author: "Yalçın Özdemir",
      role: "Founder & CEO, AppNation",
      company: "AppNation",
      companyLogo: '/images/testimonials/appnation-logo.png'
    },
    {
      quote: "Adapty's platform makes it easy for non-developers to create and manage A/B tests, paywalls, product mix and pricing structure. They have a great external API that makes it easy to pass related events to other analytics tools like Amplitude and Mixpanel.",
      author: "Kyle Smith",
      role: "Head of data at Smitten Dating",
      company: "Smitten",
      avatar: '/images/testimonials/kyle-smith.webp',
      companyLogo: '/images/testimonials/smitten-logo.webp'
    },
    {
      quote: "We've tested more than three hundred paywalls in the space of four months. Adapty allows testing basically any element of the paywall, and we took advantage of that. We've tested them all: products, title text, CTA buttons, images, videos etc. With Adapty's A/B testing, we managed to double our monthly revenue. I wasn't sure if one instrument could make such an impact, but I witnessed it myself.",
      author: "Roi Mulia",
      role: "Founder & CEO, SocialKit",
      company: "SocialKit",
      avatar: '/images/testimonials/roi-mulia.webp'
    }
  ]

  const currentTestimonial = testimonials[currentIndex]
  
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const prevIndexRef = useRef<number>(currentIndex)

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

      // Initial carousel animation
      gsap.from([imageRef.current, textRef.current], {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Carousel transition animation
    if (prevIndexRef.current !== currentIndex) {
      const tl = gsap.timeline()
      
      tl.to([imageRef.current, textRef.current], {
        opacity: 0,
        x: currentIndex > prevIndexRef.current ? -30 : 30,
        duration: 0.3,
        ease: 'power2.in'
      })
      .set([imageRef.current, textRef.current], {
        x: currentIndex > prevIndexRef.current ? 30 : -30
      })
      .to([imageRef.current, textRef.current], {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power3.out'
      })

      prevIndexRef.current = currentIndex
    }
  }, [currentIndex])

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const goToSlide = (index: number): void => {
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="container">
        <h2 className="testimonials-title" ref={titleRef}>
          Developer from all kind of apps move to Adapty to grow their revenue
        </h2>
        
        <div className="testimonials-carousel" ref={carouselRef}>
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="carousel-content">
            <div className="carousel-image" ref={imageRef}>
              {currentTestimonial.avatar ? (
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.author} 
                  className="testimonial-avatar-large"
                />
              ) : (
                <div className="testimonial-avatar-placeholder">
                  {currentTestimonial.author.charAt(0)}
                </div>
              )}
            </div>
            
            <div className="carousel-text" ref={textRef}>
              <p className="testimonial-quote">"{currentTestimonial.quote}"</p>
              <div className="testimonial-author-info">
                <div className="author-name">{currentTestimonial.author}</div>
                <div className="author-role">{currentTestimonial.role}</div>
                {currentTestimonial.companyLogo && (
                  <img 
                    src={currentTestimonial.companyLogo} 
                    alt={currentTestimonial.company} 
                    className="testimonial-company-logo"
                  />
                )}
              </div>
            </div>
          </div>
          
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

