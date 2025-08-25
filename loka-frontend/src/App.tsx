import { Header } from '@/components/layout/Header'
import { Dashboard } from '@/components/pages/Dashboard'
import ModernHomePage from '@/components/pages/ModernHomePage'
import { MinerDashboard } from '@/components/pages/MinerDashboard'
import { LenderDashboard } from '@/components/pages/LenderDashboard'
import { LoanMarketplace } from '@/components/pages/LoanMarketplace'
import { useStore } from '@/store/useStore'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { cn } from '@/lib/utils'

function App() {
  const { currentView } = useStore()

  return (
    <div className="min-h-screen bg-background relative">
      <GridPattern
        strokeDasharray="4 2"
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "fixed inset-0 h-full w-full opacity-50 -z-10",
        )}
      />
      <Header />
      <main className="main-content relative pt-20">
        <div className={currentView === 'home' || !currentView ? '' : 'container'}>
          {(currentView === 'home' || !currentView) && <ModernHomePage />}
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'miners' && <MinerDashboard />}
          {currentView === 'lenders' && <LenderDashboard />}
          {currentView === 'marketplace' && <LoanMarketplace />}
        </div>
      </main>
    </div>
  )
}

export default App
