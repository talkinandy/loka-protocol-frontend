import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import { formatBTC, formatHashrate, formatPercentage } from "@/lib/utils"

export function ContractList() {
  const { contracts } = useStore()
  const activeContracts = contracts.filter(c => c.status === 'active').slice(0, 5)
  
  if (activeContracts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Active Contracts</CardTitle>
          <CardDescription>Your currently running mining contracts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            No active contracts found
          </div>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Contracts</CardTitle>
        <CardDescription>Your currently running mining contracts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeContracts.map((contract) => (
            <div key={contract.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{contract.id}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    contract.type === 'mining' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {contract.type}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatHashrate(contract.hashrate)} • {contract.duration} days • {formatBTC(contract.hashprice)}/TH/day
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>Progress: {formatPercentage(contract.progress)}</span>
                  <span>Daily: {formatBTC(contract.dailyRewards)}</span>
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <div className="font-medium">{formatBTC(contract.totalValue)}</div>
                <div className="text-sm text-muted-foreground">
                  Earned: {formatBTC(contract.totalRewardsEarned)}
                </div>
                <div className="w-24 bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${contract.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4">
            <Button variant="outline" className="w-full">
              View All Contracts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}