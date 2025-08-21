import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useStore } from "@/store/useStore"

export function LandingPage() {
  const { setCurrentView } = useStore()
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Liquidation-Free
            <span className="text-primary block">Bitcoin Mining Finance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Borrow against BTC, repay with hashrate. The first protocol that transforms 
            unproductive Bitcoin reserves into working capital while maintaining upside exposure.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => setCurrentView('marketplace')}
            className="text-lg px-8"
          >
            Browse Contracts
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setCurrentView('dashboard')}
            className="text-lg px-8"
          >
            Enter App
          </Button>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🔒 No Liquidation Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Never worry about margin calls or forced liquidations. Your collateral 
              is always returned based on hashrate delivery, not market prices.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⚡ Physical Delivery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              True hashrate delivery daily, not cash settlement. Investors receive 
              actual mining rewards directly from the Bitcoin network.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💎 Self-Collateralized
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              110% BTC collateral ensures security without third-party insurance. 
              Miners act as their own insurers in this trustless system.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📊 Transparent Pricing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All calculations visible and automated. Price discovery through 
              Central Limit Order Book with real-time hashprice data.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎯 Fractional Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Minimum 1 TH/s contracts with 0.0001 lot size increments. 
              Anyone can participate regardless of size.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌐 Decentralized
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built on Internet Computer Protocol with ckBTC integration. 
              Non-custodial and completely permissionless.
            </p>
          </CardContent>
        </Card>
      </section>
      
      {/* How It Works */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <p className="text-muted-foreground mt-2">
            Simple 3-step process for both miners and investors
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>1. Create Contract</CardTitle>
              <CardDescription>Miners offer hashrate, investors browse opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Miners lock 110% BTC collateral and offer future hashrate production. 
                Investors can browse and filter contracts by duration, size, and discount rate.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>2. Execute Agreement</CardTitle>
              <CardDescription>Trustless execution via smart contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Smart contracts handle collateral locking, payment processing, and 
                daily settlement verification through on-chain hashrate oracles.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>3. Daily Settlement</CardTitle>
              <CardDescription>Automatic rewards distribution and collateral release</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Every 24 hours, mining rewards are distributed to investors and 
                collateral is released back to miners based on hashrate delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
        <p className="text-muted-foreground">
          Join the future of Bitcoin mining finance with liquidation-free lending
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => setCurrentView('marketplace')}
          >
            Browse Opportunities
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setCurrentView('create')}
          >
            Create Contract
          </Button>
        </div>
      </section>
    </div>
  )
}