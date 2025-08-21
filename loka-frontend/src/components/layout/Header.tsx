import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import { Moon, Sun, Menu } from "lucide-react"

export function Header() {
  const { isDarkMode, toggleDarkMode, currentView, setCurrentView } = useStore()
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'create', label: 'Create Contract' }
  ]
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="font-bold text-xl text-primary">LOKA</div>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`transition-colors hover:text-foreground/80 ${
                  currentView === item.id ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button variant="outline" size="sm">
              Connect Wallet
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}