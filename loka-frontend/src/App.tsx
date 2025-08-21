import { Header } from '@/components/layout/Header'
import { Dashboard } from '@/components/pages/Dashboard'
import { LandingPage } from '@/components/pages/LandingPage'
import { useStore } from '@/store/useStore'

function App() {
  const { currentView } = useStore()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'marketplace' && (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold">Marketplace</h1>
            <p className="text-muted-foreground mt-2">Coming soon...</p>
          </div>
        )}
        {currentView === 'portfolio' && (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <p className="text-muted-foreground mt-2">Coming soon...</p>
          </div>
        )}
        {currentView === 'create' && (
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold">Create Contract</h1>
            <p className="text-muted-foreground mt-2">Coming soon...</p>
          </div>
        )}
        {!['dashboard', 'marketplace', 'portfolio', 'create'].includes(currentView) && (
          <LandingPage />
        )}
      </main>
    </div>
  )
}

export default App
