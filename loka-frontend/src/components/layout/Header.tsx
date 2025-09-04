import * as React from "react"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import { Menu, X } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export function Header() {
  const { currentView, setCurrentView } = useStore()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Prevent body scroll and hide content when mobile menu is open
  React.useEffect(() => {
    const mainElement = document.querySelector('main')
    const bodyElement = document.body
    
    if (mobileMenuOpen) {
      bodyElement.style.overflow = 'hidden'
      if (mainElement) {
        mainElement.style.display = 'none'
      }
    } else {
      bodyElement.style.overflow = 'unset'
      if (mainElement) {
        mainElement.style.display = 'block'
      }
    }
    
    // Cleanup on unmount
    return () => {
      bodyElement.style.overflow = 'unset'
      if (mainElement) {
        mainElement.style.display = 'block'
      }
    }
  }, [mobileMenuOpen])
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'miners', label: 'For Miners' },
    { id: 'lenders', label: 'For Lenders' },
    { id: 'marketplace', label: 'Loan Marketplace' },
    { id: 'dashboard', label: 'My Dashboard' }
  ]
  
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 backdrop-blur-xl bg-background/95 h-20 md:h-24">
      <div className="h-full">
        {/* Mobile Layout */}
        <div className="mobile-nav-layout items-center justify-between h-full px-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          
          {/* Mobile Logo */}
          <a className="flex items-center group" href="/" onClick={() => setCurrentView('home')}>
            <img 
              src="/assets/logos/loka-logo-horizontal-light.svg" 
              alt="LOKA Protocol"
              className="h-8 w-auto max-w-[180px] object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.src = '/assets/logos/loka-logo-horizontal.svg';
              }}
            />
          </a>
          
          {/* Mobile Connect Wallet */}
          <Button 
            variant="outline" 
            size="sm"
            className="text-xs px-3 py-1 h-8"
          >
            Connect
          </Button>
        </div>
        
        {/* Desktop Layout */}  
        <div className="desktop-nav-layout items-center h-full px-6 max-w-7xl mx-auto w-full">
          {/* Desktop Logo */}
          <a className="flex items-center group flex-shrink-0 mr-8" href="/" onClick={() => setCurrentView('home')}>
            <img 
              src="/assets/logos/loka-logo-horizontal-light.svg" 
              alt="LOKA Protocol"
              className="h-10 w-auto max-w-[200px] object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                e.currentTarget.src = '/assets/logos/loka-logo-horizontal.svg';
              }}
            />
          </a>
          
          {/* Desktop Navigation - Centered and Expanded */}
          <nav className="flex items-center justify-center space-x-4 flex-1">
            {navItems.map((item) => (
              currentView === item.id ? (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className="relative px-6 py-3 text-base font-semibold transition-all duration-200 rounded-lg whitespace-nowrap text-white bg-gradient-to-r from-[#F74B37] to-[#F5681B] shadow-lg shadow-[#F74B37]/25"
                >
                  {item.label}
                </button>
              ) : (
                <InteractiveHoverButton
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className="bg-transparent border-white/20 text-gray-100 hover:border-white/40 hover:text-white"
                >
                  {item.label}
                </InteractiveHoverButton>
              )
            ))}
          </nav>
          
          {/* Desktop Connect Wallet */}
          <div className="flex-shrink-0">
            <ShineBorder
              className=""
              color={["#F74B37", "#F5681B", "#F74B37"]}
              borderRadius={12}
              borderWidth={1.5}
              duration={8}
            >
              <Button 
                variant="ghost" 
                size="default"
                className="connect-wallet-desktop bg-transparent border-0 px-6 h-11 text-sm font-bold text-white hover:text-loka-orange transition-all duration-200 hover:scale-105"
              >
                Connect Wallet
              </Button>
            </ShineBorder>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Completely Redesigned */}
      {mobileMenuOpen && (
        <>
          {/* Full screen solid backdrop */}
          <div 
            className="fixed inset-0 w-full h-full z-[200]"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#030712',
              zIndex: 200
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu content container */}
          <div 
            className="fixed inset-0 w-full h-full z-[201]"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#030712',
              zIndex: 201
            }}
          >
          
          {/* Menu Content */}
          <div className="relative w-full h-full pt-24 px-6">
            <nav className="max-w-sm mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left p-6 text-xl font-semibold rounded-xl mb-4 transition-all duration-200 ${
                    currentView === item.id 
                      ? 'bg-gradient-to-r from-[#F74B37] to-[#F5681B] text-white shadow-lg' 
                      : 'bg-white/8 text-white hover:bg-white/15 border border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {currentView === item.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <ShineBorder
                  className="w-full"
                  color={["#F74B37", "#F5681B", "#F74B37"]}
                  borderRadius={12}
                  borderWidth={1.5}
                  duration={8}
                >
                  <Button 
                    variant="ghost" 
                    size="lg"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-transparent border-none p-4 text-lg font-semibold text-white min-h-14"
                  >
                    Connect Wallet
                  </Button>
                </ShineBorder>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-white/60">
                    LOKA Protocol - Liquidation-Free Mining Finance
                  </p>
                </div>
              </div>
            </nav>
          </div>
          </div>
        </>
      )}
    </header>
  )
}