import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, TrendingUp, TrendingDown, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface RiskDisclosureProps {
  className?: string
  showDetailed?: boolean
}

export function RiskDisclosure({ className, showDetailed = false }: RiskDisclosureProps) {
  const [isExpanded, setIsExpanded] = useState(showDetailed)
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed && !showDetailed) return null

  return (
    <div className={cn("space-y-4", className)}>
      {/* Standard Risk Disclosure Banner */}
      {!showDetailed && (
        <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="flex items-center justify-between w-full">
            <div>
              <strong className="text-orange-800 dark:text-orange-400">
                IMPORTANT: Returns are Variable, Not Fixed
              </strong>
              <br />
              <span className="text-orange-700 dark:text-orange-300">
                When you fund a loan, you receive actual mining rewards which vary based on network difficulty, not fixed interest payments.
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDismissed(true)}
              className="text-orange-600 hover:text-orange-800 ml-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Quick Risk Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <TrendingDown className="h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium text-red-800 dark:text-red-400">If difficulty increases</p>
            <p className="text-sm text-red-700 dark:text-red-300">Lower returns than estimated</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium text-green-800 dark:text-green-400">If difficulty decreases</p>
            <p className="text-sm text-green-700 dark:text-green-300">Higher returns than estimated</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Info className="h-4 w-4 mr-2" />
          {isExpanded ? 'Hide Details' : 'Understand the Risks'}
        </Button>
        <Button variant="outline" size="sm">
          View Historical Variance
        </Button>
      </div>

      {/* Detailed Risk Explanation */}
      {isExpanded && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Understanding Mining Loans
            </CardTitle>
            <CardDescription>
              How these loans differ from traditional lending
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Traditional Loan:</h4>
                <div className="bg-muted/50 rounded-lg p-3 space-y-2 text-sm">
                  <p>• Lender gives $100</p>
                  <p>• Borrower repays $110 (fixed)</p>
                  <p>• Return: <span className="font-semibold text-green-600">Guaranteed 10%</span></p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">LOKA Mining Loan:</h4>
                <div className="bg-primary/10 rounded-lg p-3 space-y-2 text-sm">
                  <p>• Lender gives 10 BTC</p>
                  <p>• Borrower allocates mining hashrate</p>
                  <p>• Lender receives whatever that hashrate mines</p>
                  <p>• Return: <span className="font-semibold text-orange-600">Variable (~15-25% historically)</span></p>
                </div>
              </div>
            </div>

            {/* Who Should Use This */}
            <div className="space-y-4">
              <h4 className="font-semibold">Who Should Use This:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                      ✅ Miners: Perfect if you want:
                    </h5>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Guaranteed capital today</li>
                      <li>• Protection from difficulty increases</li>
                      <li>• To keep your BTC holdings</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                      ✅ Lenders: Perfect if you:
                    </h5>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Understand mining economics</li>
                      <li>• Accept variable returns</li>
                      <li>• Want exposure to mining rewards</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                    ❌ Lenders: Not for you if:
                  </h5>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• You need guaranteed fixed returns</li>
                    <li>• You don't understand mining difficulty</li>
                    <li>• You can't accept return variance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Risks */}
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <h5 className="font-semibold text-orange-800 dark:text-orange-400 mb-3">
                Key Risk Factors:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-orange-700 dark:text-orange-300">Network Difficulty Changes</p>
                  <p className="text-orange-600 dark:text-orange-400">Can increase/decrease returns by 10-30%</p>
                </div>
                <div>
                  <p className="font-medium text-orange-700 dark:text-orange-300">Transaction Fee Variations</p>
                  <p className="text-orange-600 dark:text-orange-400">Affects daily mining reward amounts</p>
                </div>
                <div>
                  <p className="font-medium text-orange-700 dark:text-orange-300">Block Finding Variance</p>
                  <p className="text-orange-600 dark:text-orange-400">Natural randomness in Bitcoin mining</p>
                </div>
                <div>
                  <p className="font-medium text-orange-700 dark:text-orange-300">Miner Performance Risk</p>
                  <p className="text-orange-600 dark:text-orange-400">110% collateral provides protection</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button onClick={() => setIsExpanded(false)}>
                I Understand
              </Button>
              <Button variant="outline">
                Learn More About Mining
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
