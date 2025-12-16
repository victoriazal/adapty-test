import '../styles/components/Footer.scss'

interface FooterSection {
  title: string
  links: string[]
}

function Footer(): JSX.Element {
  const footerSections: FooterSection[] = [
    {
      title: 'Adapty',
      links: [
        'Paywall management',
        'Paywall builder',
        'Onboarding builder',
        'AI generator',
        'A/B testing',
        'Autopilot',
        'Targeting',
        'Localization',
        'Remote config'
      ]
    },
    {
      title: 'Infrastructure',
      links: [
        'Subscription SDK',
        'Subscriber sync',
        'Fallback paywalls',
        'Refund saver',
        'Integrations'
      ]
    },
    {
      title: 'Roles',
      links: [
        'For developers',
        'For marketers',
        'For app owners'
      ]
    },
    {
      title: 'Stages',
      links: [
        'Indie',
        'Startups',
        'Publishers',
        'Enterprise'
      ]
    },
    {
      title: 'Cases',
      links: [
        'Integrate subscriptions',
        'Grow app revenue',
        'Analyze performance',
        'Read our cases'
      ]
    },
    {
      title: 'Migrate from',
      links: [
        'RevenueCat',
        'Purchasely',
        'Qonversion',
        'Superwall'
      ]
    },
    {
      title: 'SDK',
      links: [
        'iOS',
        'Android',
        'React Native',
        'Flutter',
        'FlutterFlow',
        'Kotlin Multiplatform',
        'Capacitor',
        'Unity',
        'Stripe'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Blog',
        'Ebooks',
        'Podcast',
        'Webinars',
        'Events',
        'Glossary',
        'Documentation',
        'Paywall library',
        'LTV prediction model',
        'Apple fiscal calendar',
        'Apple receipt checker',
        'Subscription calculator',
        'Refund saver calculator',
        'In-app subscription reports',
        'Community'
      ]
    },
    {
      title: 'Analytics',
      links: [
        'Revenue analytics',
        'LTV analytics',
        'AI predictive analytics',
        'Apple ads manager'
      ]
    },
    {
      title: 'Company',
      links: [
        'About us',
        'Contact us',
        'Careers',
        'Terms',
        'Privacy policy',
        'Data protection',
        'System status',
        'SOC2 compliance',
        'Become a partner'
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-column">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Adapty Tech Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

