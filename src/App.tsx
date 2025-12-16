import { Helmet } from 'react-helmet-async'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Stats from './components/Stats'
import Integration from './components/Integration'
import PaywallManagement from './components/PaywallManagement'
import RefundSaver from './components/RefundSaver'
import Analytics from './components/Analytics'
import PaywallBuilder from './components/PaywallBuilder'
import WebFunnels from './components/WebFunnels'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import Enterprise from './components/Enterprise'
import Reviews from './components/Reviews'
import Cases from './components/Cases'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Adapty - Revenue management for in-app purchases</title>
        <meta name="description" content="Save months on integrating subscriptions and double your app revenue with paywall management." />
        <meta name="keywords" content="in-app purchases, subscriptions, paywall management, mobile app revenue" />
        <meta property="og:title" content="Adapty - Revenue management for in-app purchases" />
        <meta property="og:description" content="Save months on integrating subscriptions and double your app revenue with paywall management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adapty.io/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adapty - Revenue management for in-app purchases" />
        <meta name="twitter:description" content="Save months on integrating subscriptions and double your app revenue with paywall management." />
        <link rel="canonical" href="https://adapty.io/" />
      </Helmet>
      <div className="app">
        <Hero />
        <TrustedBy />
        <Features />
        <Stats />
        <Integration />
        <PaywallManagement />
        <RefundSaver />
        <Analytics />
        <PaywallBuilder />
        <WebFunnels />
        <Integrations />
        <Testimonials />
        <Enterprise />
        <Reviews />
        <Cases />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default App

