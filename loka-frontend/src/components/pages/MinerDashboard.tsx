import { useState } from "react"
import { MagicCard } from "@/components/magicui/magic-card"
import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/magicui/shimmer-button"
import NumberTicker from "@/components/magicui/number-ticker"
import BlurFade from "@/components/magicui/blur-fade"
import { BorderBeam } from "@/components/magicui/border-beam"
import { useStore } from "@/store/useStore"
import { 
  Calculator, 
  TrendingUp, 
  Lock, 
  Zap, 
  ArrowRight,
  CheckCircle2
} from "lucide-react"

export function MinerDashboard() {
  const { setCurrentView } = useStore()
  const [loanAmount, setLoanAmount] = useState(5)
  const [hashrate, setHashrate] = useState(1000)

  // Calculate loan terms
  const collateralRequired = loanAmount * 1.1 // 110% LTV
  const estimatedCost = 18 // ~18% if hashprice stable
  const loanDuration = 90 // days
  // const dailyRepayment = (hashrate / 1000) * 0.00000120 * 30 // Simplified calculation

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <BlurFade delay={0.1} inView>
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Miner Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Get liquidation-free loans. Keep your Bitcoin. Repay with mining.
          </p>
        </div>
      </BlurFade>

      {/* Main Banner */}
      <BlurFade delay={0.2} inView>
        <div className="modern-card p-8 mb-8 relative overflow-hidden">
          <BorderBeam size={300} duration={12} delay={9} />
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 gradient-text">
              🔒 NO MARGIN CALLS • NO LIQUIDATIONS • NO STRESS
            </h2>
            <p className="text-lg text-muted-foreground">
              Borrow against your BTC, repay with daily mining rewards
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Market Overview */}
      <BlurFade delay={0.3} inView>
        <MagicCard className="p-8 mb-8" gradientColor="rgba(247, 75, 55, 0.05)">
          <h3 className="text-2xl font-bold mb-6">Loan Marketplace Overview</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Available Capital</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={487} /> BTC
              </p>
              <p className="text-xs text-muted-foreground">$32,839,384</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Loans</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={234} />
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
              <p className="text-2xl font-bold gradient-text">15-25%*</p>
              <p className="text-xs text-muted-foreground">*varies with difficulty</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Default Rate</p>
              <p className="text-2xl font-bold text-green-500">0.3%</p>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* Quick Loan Calculator */}
      <BlurFade delay={0.4} inView>
        <MagicCard className="p-8 mb-8" gradientColor="rgba(247, 75, 55, 0.1)">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Quick Loan Calculator
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">I want to borrow:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-lg font-semibold"
                  />
                  <span className="text-lg font-medium">BTC</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  ≈ ${(loanAmount * 67432).toLocaleString()}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">My hashrate:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={hashrate}
                    onChange={(e) => setHashrate(Number(e.target.value))}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-lg font-semibold"
                  />
                  <span className="text-lg font-medium">TH/s</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Your Loan Terms:</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Collateral Required:</span>
                  <span className="font-semibold">{collateralRequired.toFixed(1)} BTC (110% LTV)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Repayment:</span>
                  <span className="font-semibold">Daily mining rewards (variable)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Cost:</span>
                  <span className="font-semibold">~{estimatedCost}% if hashprice stable*</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Loan Duration:</span>
                  <span className="font-semibold">{loanDuration} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Repayment:</span>
                  <span className="font-semibold">Mining production value</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground italic mt-4">
                *Actual cost depends on mining difficulty changes
              </p>

              <div className="pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No liquidation risk - keep your collateral safe</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Repay with mining rewards, not cash</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Get funds immediately upon approval</span>
                </div>
              </div>

              <ShimmerButton 
                className="w-full mt-6"
                onClick={() => setCurrentView('loan-application')}
              >
                Get Loan Terms
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* Active Loans Section */}
      <BlurFade delay={0.5} inView>
        <MagicCard className="p-8 mb-8" gradientColor="rgba(247, 75, 55, 0.05)">
          <h3 className="text-2xl font-bold mb-6">My Active Loans</h3>
          
          <div className="space-y-4">
            {/* Sample Active Loan */}
            <div className="p-6 border border-white/10 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold mb-1">Loan #L-4821</h4>
                  <p className="text-sm text-muted-foreground">Day 45/90</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Borrowed</p>
                  <p className="text-lg font-semibold">10.0 BTC</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Repayment Progress</span>
                    <span className="font-semibold">50%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-1/2 transition-all duration-1000" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">45 days complete | 45 days remaining</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Mining Allocated</p>
                    <p className="font-semibold">2500 TH/s for 90 days</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Collateral Released</p>
                    <p className="font-semibold">5.5/11.0 BTC</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full glass-hover">
                  View Details
                </Button>
              </div>
            </div>
            
            {/* No loans state */}
            <div className="text-center py-8 text-muted-foreground">
              <p>No other active loans</p>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* Daily Cashflow Summary */}
      <BlurFade delay={0.6} inView>
        <MagicCard className="p-8" gradientColor="rgba(16, 185, 129, 0.05)">
          <h3 className="text-2xl font-bold mb-6">Daily Cashflow Summary</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Mining Revenue</p>
                <p className="text-lg font-semibold text-green-500">+0.182 BTC</p>
              </div>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Loan Repayments</p>
                <p className="text-lg font-semibold text-orange-500">-0.131 BTC</p>
              </div>
              <Zap className="h-5 w-5 text-orange-500" />
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Collateral Release</p>
                <p className="text-lg font-semibold text-blue-500">+0.122 BTC</p>
              </div>
              <Lock className="h-5 w-5 text-blue-500" />
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Net Daily</p>
                  <p className="text-2xl font-bold gradient-text">+0.173 BTC</p>
                  <p className="text-sm text-muted-foreground">≈ $11,666</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-muted-foreground">Monthly Projection</p>
                  <p className="font-semibold">+5.19 BTC</p>
                </div>
              </div>
            </div>
          </div>
        </MagicCard>
      </BlurFade>
    </div>
  )
}
