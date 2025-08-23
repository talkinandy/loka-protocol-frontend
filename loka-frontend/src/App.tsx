import { Header } from '@/components/layout/Header'
import { Dashboard } from '@/components/pages/Dashboard'
import { LandingPage } from '@/components/pages/LandingPage'
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
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <Header />
      <main className="main-content relative z-10">
        <div className={currentView === 'home' || !currentView ? '' : 'container'}>
          {(currentView === 'home' || !currentView) && <LandingPage />}
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
