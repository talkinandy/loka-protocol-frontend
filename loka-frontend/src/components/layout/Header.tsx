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
    <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-8 flex items-center group" href="/">
            <div className="relative hidden md:block">
              <img 
                src="/assets/logos/loka-logo-horizontal.svg" 
                alt="LOKA Protocol"
                className="h-10 transition-transform group-hover:scale-105"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div className="absolute inset-0 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
            </div>
            <div className="relative md:hidden">
              <img 
                src="/assets/logos/loka-symbol-only.svg" 
                alt="LOKA"
                className="h-10 w-10 transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
            </div>
          </a>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`relative px-3 py-2 text-base font-medium transition-all hover:text-foreground rounded-md ${
                  currentView === item.id ? 'text-foreground bg-loka-red-orange/10' : 'text-muted-foreground hover:bg-white/5'
                } group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-loka-red-orange transition-all ${
                  currentView === item.id ? 'w-8' : 'w-0 group-hover:w-6'
                }`} />
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-hover"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          
          <nav className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="glass-hover"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <ShineBorder
              className="text-center text-sm"
              color={["#F74B37", "#F5681B", "#F74B37"]}
              borderRadius={12}
              borderWidth={1.5}
              duration={8}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="bg-transparent border-0 px-6 h-10 font-semibold hover:text-primary transition-colors"
              >
                Connect Wallet
              </Button>
            </ShineBorder>
          </nav>
        </div>
      </div>
    </header>
  )
}