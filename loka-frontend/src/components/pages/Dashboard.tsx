import { HashpriceChart } from "@/components/dashboard/HashpriceChart"
import { MarketOverview } from "@/components/dashboard/MarketOverview"
import { ContractList } from "@/components/dashboard/ContractList"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import { formatBTC, formatHashrate, formatPercentage } from "@/lib/utils"

export function Dashboard() {
  const { userPosition, marketData } = useStore()
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to the LOKA mining finance protocol
          </p>
        </div>
        <Button>Create New Contract</Button>
      </div>
      
      {/* Market Overview */}
      <MarketOverview />
      
      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Charts and Market Data */}
        <div className="lg:col-span-2 space-y-6">
          <HashpriceChart />
          
          {/* Projected Rates */}
          <Card>
            <CardHeader>
              <CardTitle>Projected Rates by Duration</CardTitle>
              <CardDescription>
                Expected hashprice discounts for different contract lengths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketData.projectedRates.map((rate) => (
                  <div key={rate.duration} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <span className="font-medium">{rate.duration} days</span>
                      <div className="text-sm text-muted-foreground">
                        {formatBTC(rate.rate)}/TH/day
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${rate.discount < 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatPercentage(rate.discount)}
                      </div>
                      <div className="text-xs text-muted-foreground">discount</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - User Position and Contracts */}
        <div className="space-y-6">
          {/* User Position Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Position</CardTitle>
              <CardDescription>Current portfolio overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Total Invested</div>
                  <div className="text-xl font-bold">{formatBTC(userPosition.totalInvested)}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Daily Earnings</div>
                  <div className="text-xl font-bold text-green-600">{formatBTC(userPosition.dailyEarnings)}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Mining Power</div>
                  <div className="text-lg font-medium">{formatHashrate(userPosition.totalMining)}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Active Contracts</div>
                  <div className="text-lg font-medium">{userPosition.activeContracts}</div>
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex justify-between text-sm">
                  <span>Collateral Locked</span>
                  <span>{formatBTC(userPosition.collateralLocked)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Earnings</span>
                  <span className="text-green-600">{formatBTC(userPosition.totalEarnings)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="default">
                🚀 Create Mining Contract
              </Button>
              <Button className="w-full" variant="outline">
                💰 Browse Investments
              </Button>
              <Button className="w-full" variant="outline">
                📊 View Portfolio
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Active Contracts */}
      <ContractList />
    </div>
  )
}