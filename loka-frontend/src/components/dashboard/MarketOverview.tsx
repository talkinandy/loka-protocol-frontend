import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStore } from "@/store/useStore"
import { formatBTC, formatPercentage } from "@/lib/utils"

export function MarketOverview() {
  const { marketData } = useStore()
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Available Capital</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">₿</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatBTC(marketData.availableCapital)}</div>
          <p className="text-xs text-muted-foreground">
            Ready for investment
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">📋</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{marketData.activeContracts}</div>
          <p className="text-xs text-muted-foreground">
            Currently running
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Hashprice</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">⚡</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatBTC(marketData.currentHashprice)}</div>
          <p className="text-xs text-muted-foreground">
            per TH/day
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Best Discount</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">💰</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {formatPercentage(Math.abs(marketData.projectedRates[3].discount))}
          </div>
          <p className="text-xs text-muted-foreground">
            365-day contracts
          </p>
        </CardContent>
      </Card>
    </div>
  )
}