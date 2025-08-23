
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
// import { useStore } from "@/store/useStore"
import { formatBTC, formatHashrate } from "@/lib/utils"
import { BorderBeam } from "@/components/magicui/border-beam"
import { FileText, Calendar, Zap, Shield, TrendingUp } from "lucide-react"

interface Loan {
  id: string
  borrowedAmount: number
  collateralAmount: number
  interestRate: number
  duration: number
  daysComplete: number
  hashrate: number
  miningDelivered: number
  estimatedTotal: number
  collateralReleased: number
  collateralLocked: number
  dailyRelease: number
  performance: number
}

export function ActiveLoansManagement() {
  // const { userPosition } = useStore() // Will be used for user role detection
  
  // Mock loan data - in real app this would come from API
  const activeLoans: Loan[] = [
    {
      id: "L-4821",
      borrowedAmount: 10.0,
      collateralAmount: 11.0,
      interestRate: 18,
      duration: 90,
      daysComplete: 45,
      hashrate: 2500,
      miningDelivered: 5.4,
      estimatedTotal: 10.8,
      collateralReleased: 5.5,
      collateralLocked: 5.5,
      dailyRelease: 0.122,
      performance: 100
    }
  ]

  const totalBorrowed = activeLoans.reduce((sum, loan) => sum + loan.borrowedAmount, 0)

  return (
    <div className="space-y-6">
      {/* Header Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            My Loans
            <span className="text-sm font-normal text-muted-foreground ml-2">
              Total Borrowed: {formatBTC(totalBorrowed)}
            </span>
          </CardTitle>
          <CardDescription>
            Manage your active liquidation-free mining loans
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Active Loans */}
      {activeLoans.map((loan) => (
        <Card key={loan.id} className="relative overflow-hidden">
          <BorderBeam size={180} duration={18} delay={0} />
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                LOAN #{loan.id}
                <span className="text-sm font-normal text-muted-foreground">
                  Day {loan.daysComplete}/{loan.duration}
                </span>
              </CardTitle>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Borrowed</p>
                <p className="font-semibold">{formatBTC(loan.borrowedAmount)}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Borrowed Amount</p>
                <p className="font-semibold">{formatBTC(loan.borrowedAmount)} (~${(loan.borrowedAmount * 67432).toLocaleString()})</p>
              </div>
              <div>
                <p className="text-muted-foreground">Collateral Locked</p>
                <p className="font-semibold">{formatBTC(loan.collateralAmount)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Interest Rate</p>
                <p className="font-semibold">{loan.interestRate}% APR</p>
              </div>
            </div>

            {/* Repayment Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Repayment Progress
                </h4>
                <span className="text-sm text-muted-foreground">
                  {Math.round((loan.daysComplete / loan.duration) * 100)}% Complete
                </span>
              </div>
              
              <Progress 
                value={(loan.daysComplete / loan.duration) * 100} 
                className="h-3"
              />
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{loan.daysComplete} days complete</span>
                <span>{loan.duration - loan.daysComplete} days remaining</span>
              </div>
            </div>

            {/* Repayment Status */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-sm">Repayment Status:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Mining Allocated</p>
                    <p className="text-muted-foreground">{formatHashrate(loan.hashrate)} for {loan.duration} days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Mining Delivered</p>
                    <p className="text-muted-foreground">{formatBTC(loan.miningDelivered)} (actual rewards)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Estimated Total</p>
                    <p className="text-muted-foreground">{formatBTC(loan.estimatedTotal)} by day {loan.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="font-medium">Performance</p>
                    <p className="text-green-600">{loan.performance}% hashrate delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collateral Status */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                Collateral Status:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-blue-700 dark:text-blue-400 font-medium">Released</p>
                  <p className="text-blue-600">{formatBTC(loan.collateralReleased)} (back to your balance)</p>
                </div>
                <div>
                  <p className="text-blue-700 dark:text-blue-400 font-medium">Still Locked</p>
                  <p className="text-blue-600">{formatBTC(loan.collateralLocked)}</p>
                </div>
                <div>
                  <p className="text-blue-700 dark:text-blue-400 font-medium">Daily Release</p>
                  <p className="text-blue-600">{formatBTC(loan.dailyRelease)}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              <Button variant="outline" size="sm">
                Repayment History
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* No Active Loans State */}
      {activeLoans.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No Active Loans</h3>
            <p className="text-muted-foreground mb-4">
              You don't have any active loans. Get liquidation-free capital to grow your mining operation.
            </p>
            <Button>Get Your First Loan</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
