import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/components/Integration.scss'

gsap.registerPlugin(ScrollTrigger)

interface CodeExample {
  language: string
  code: string
}

function Integration(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Swift')
  
  const codeExamples: CodeExample[] = [
    {
      language: 'Swift',
      code: `// Your app's code
import Adapty
 
do {
  try await Adapty.activate("PUBLIC_SDK_KEY")
 
  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`
    },
    {
      language: 'Kotlin',
      code: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())
 
// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
	when (result) {
		is AdaptyResult.Success -> {
			if (result.value is AdaptyPurchaseResult.Success)
				// successful purchase
		}
		is AdaptyResult.Error -> {
			// handle the error
		}
	}
}`
    },
    {
      language: 'React Native',
      code: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');
 
// Make a purchase, Adapty handles the rest
try {
	const profile = await adapty.makePurchase(product);
	// successful purchase
} catch (error) {
	// handle the error
}`
    },
    {
      language: 'Flutter',
      code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';
 
try {
  await Adapty().activate();
 
  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`
    },
    {
      language: 'Unity',
      code: `// Your app's code
using AdaptySDK;
 
Adapty.makePurchase(product, (profile, error) => {
	if (error == null) {
		// successful purchase
	}
});`
    }
  ]

  const currentCode = codeExamples.find(ex => ex.language === selectedLanguage)?.code || ''
  
  const handleCopyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(currentCode)
      // Можно добавить уведомление об успешном копировании
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  interface Platform {
    name: string
    icon: string
  }

  const platforms: Platform[] = [
    { name: 'Swift SDK', icon: '/images/icons/swift.svg' },
    { name: 'Kotlin SDK', icon: '/images/icons/kotlin.svg' },
    { name: 'React Native SDK', icon: '/images/icons/react-native.svg' },
    { name: 'Unity SDK', icon: '/images/icons/unity.svg' },
    { name: 'Flutter SDK', icon: '/images/icons/flutter.svg' },
    { name: 'Capacitor SDK', icon: '/images/icons/capacitor.svg' },
    { name: 'KMP SDK', icon: '/images/icons/kotlin-multiplatform.svg' },
    { name: 'FlutterFlow', icon: '/images/icons/flutterflow.svg' },
    { name: 'Web API', icon: '/images/icons/web-api.svg' },
    { name: 'Stripe', icon: '/images/icons/stripe.svg' }
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const platformsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if mobile device
      const isMobile = window.innerWidth <= 768
      
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: isMobile ? 30 : 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            duration: isMobile ? 0.6 : 1,
            ease: 'power3.out'
          }
        )
      }

      // Left content animation
      if (leftRef.current) {
        const children = Array.from(leftRef.current.children)
        children.forEach((child, index) => {
          gsap.fromTo(child,
            { opacity: 0, x: isMobile ? -30 : -80 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: leftRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              duration: isMobile ? 0.5 : 0.8,
              delay: index * (isMobile ? 0.1 : 0.15),
              ease: 'power3.out'
            }
          )
        })
      }

      // Right code block animation
      if (rightRef.current) {
        gsap.fromTo(rightRef.current,
          { opacity: 0, x: isMobile ? 30 : 80, scale: isMobile ? 1 : 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            duration: isMobile ? 0.6 : 1,
            ease: 'power3.out'
          }
        )
      }

      // Code block parallax on scroll (only on desktop)
      if (!isMobile) {
        const codeBlock = rightRef.current?.querySelector('.code-block')
        if (codeBlock) {
          gsap.to(codeBlock, {
            y: -30,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1
            }
          })
        }
      }

      // Platforms animation
      const platformItems = platformsRef.current?.querySelectorAll('.platform-item')
      if (platformItems) {
        gsap.fromTo(platformItems,
          { opacity: 0, y: isMobile ? 30 : 50, scale: isMobile ? 0.95 : 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: platformsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            duration: isMobile ? 0.4 : 0.6,
            stagger: isMobile ? 0.05 : 0.08,
            ease: isMobile ? 'power2.out' : 'back.out(1.4)'
          }
        )

        // Hover animations (only on desktop)
        if (!isMobile) {
          platformItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              gsap.to(item, {
                scale: 1.1,
                y: -8,
                rotation: 2,
                duration: 0.3,
                ease: 'power2.out'
              })
            })

            item.addEventListener('mouseleave', () => {
              gsap.to(item, {
                scale: 1,
                y: 0,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
              })
            })
          })
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="integration" ref={sectionRef}>
      <div className="container">
        <h2 className="integration-title" ref={titleRef}>
          Integrate in-app purchases with a few lines of code
        </h2>
        
        <div className="integration-content">
          <div className="integration-left" ref={leftRef}>
            <p className="integration-description">
              Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.
            </p>
            <button className="btn btn-link integration-cta">Make subscriptions easy →</button>
            
            <div className="testimonial-box">
              <div className="testimonial-quote-icon-large">
                <img src="/images/quotes.svg" alt="Quote" />
              </div>
              <div className="testimonial-company-logo-smitten">
                <img src="/images/testimonials/smitten-logo.webp" alt="Smitten" />
              </div>
              <p className="testimonial-quote">
                "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android."
              </p>
              <div className="testimonial-author">
                <img 
                  src="/images/testimonials/magnus-olafsson.webp" 
                  alt="Magnús Ólafsson" 
                  className="author-avatar"
                />
                <div className="author-info">
                  <div className="author-name">Magnús Ólafsson</div>
                  <div className="author-role">Chief Technology Officer at Smitten</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="integration-right" ref={rightRef}>
            <div className="code-block">
              <div className="code-tabs">
                {codeExamples.map((example) => (
                  <button
                    key={example.language}
                    className={`code-tab ${selectedLanguage === example.language ? 'active' : ''}`}
                    onClick={() => setSelectedLanguage(example.language)}
                  >
                    {example.language}
                  </button>
                ))}
              </div>
              <div className="code-header">
                <button className="code-copy-btn" onClick={handleCopyCode} title="Copy code">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 4.5V2.5C5.5 1.67157 6.17157 1 7 1H13.5C14.3284 1 15 1.67157 15 2.5V9C15 9.82843 14.3284 10.5 13.5 10.5H11.5V12.5C11.5 13.3284 10.8284 14 10 14H3.5C2.67157 14 2 13.3284 2 12.5V5.5C2 4.67157 2.67157 4 3.5 4H5.5V4.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M5.5 4H10C10.8284 4 11.5 4.67157 11.5 5.5V10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </button>
              </div>
              <pre className="code-content">
                <code>{currentCode}</code>
              </pre>
              <div className="code-footer">
                <div className="code-github">
                  <img src="/images/github-logo.svg" alt="GitHub" className="github-icon" />
                  <span>100% Open Source</span>
                </div>
                <a href="https://github.com/adaptyteam" target="_blank" rel="noopener noreferrer" className="code-github-link">
                  Go to GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="platforms">
          <h3 className="platforms-title">Get the SDK for your platform</h3>
          <div className="platforms-grid" ref={platformsRef}>
            {platforms.map((platform, index) => (
              <div key={index} className="platform-item">
                <img src={platform.icon} alt={platform.name} className="platform-icon" />
                <span className="platform-name">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integration

