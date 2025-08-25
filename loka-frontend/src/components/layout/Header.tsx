import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import { Moon, Sun, Menu } from "lucide-react"
import ShineBorder from "@/components/magicui/shine-border"

export function Header() {
  const { isDarkMode, toggleDarkMode, currentView, setCurrentView } = useStore()
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'miners', label: 'For Miners' },
    { id: 'lenders', label: 'For Lenders' },
    { id: 'marketplace', label: 'Loan Marketplace' },
    { id: 'dashboard', label: 'My Dashboard' }
  ]
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl bg-background/95 h-20 overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-20 items-center justify-between overflow-hidden">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a className="flex items-center group" href="/" onClick={() => setCurrentView('home')}>
              <img 
                src="/assets/logos/loka-logo-horizontal.svg" 
                alt="LOKA Protocol"
                className="h-8 w-auto max-w-[200px] max-h-8 object-contain transition-transform group-hover:scale-105"
                style={{ height: '32px', maxHeight: '32px', width: 'auto', maxWidth: '200px' }}
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.currentTarget.src = '/assets/logos/loka-logo.svg';
                }}
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`relative px-4 py-2 text-base font-semibold transition-all duration-200 rounded-lg ${
                  currentView === item.id 
                    ? 'text-white !text-white bg-gradient-to-r from-[#F74B37] to-[#F5681B] shadow-lg shadow-[#F74B37]/25' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden lg:flex h-10 w-10"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {/* Connect Wallet */}
            <ShineBorder
              className="hidden lg:block"
              color={["#F74B37", "#F5681B", "#F74B37"]}
              borderRadius={12}
              borderWidth={1.5}
              duration={8}
            >
              <Button 
                variant="ghost" 
                size="sm"
                className="bg-transparent border-0 px-6 h-10 text-sm font-semibold text-white hover:text-loka-orange transition-colors"
              >
                Connect Wallet
              </Button>
            </ShineBorder>
          </div>
        </div>
      </div>
    </header>
  )
}