import { useState } from "react"
import { MagicCard } from "@/components/magicui/magic-card"
import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/magicui/shimmer-button"
import NumberTicker from "@/components/magicui/number-ticker"
import BlurFade from "@/components/magicui/blur-fade"
import { BorderBeam } from "@/components/magicui/border-beam"
import { useStore } from "@/store/useStore"
import { 
  Bitcoin,
  TrendingUp,
  Activity,
  Shield,
  ChevronRight,
  AlertCircle,
  Calculator
} from "lucide-react"

export function LoanMarketplace() {
  const { setCurrentView } = useStore()
  const [, setUserType] = useState<'miner' | 'lender' | null>(null)

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <BlurFade delay={0.1} inView>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">LOKA</span> - Liquidation-Free Mining Loans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Borrow against your BTC, repay with daily mining rewards
          </p>
        </div>
      </BlurFade>

      {/* Main Banner */}
      <BlurFade delay={0.2} inView>
        <div className="modern-card p-12 mb-12 relative overflow-hidden text-center">
          <BorderBeam size={400} duration={12} delay={9} />
          <h2 className="text-3xl font-bold mb-4">
            🔒 NO MARGIN CALLS • NO LIQUIDATIONS • NO STRESS
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Miners get immediate liquidity without selling Bitcoin. 
            Lenders earn 15-25% APY paid in actual mining rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShimmerButton 
              className="shadow-2xl"
              onClick={() => {
                setUserType('miner')
                setCurrentView('miners')
              }}
            >
              <Bitcoin className="mr-2 h-5 w-5" />
              I'm a Miner - Get a Loan
              <ChevronRight className="ml-2 h-4 w-4" />
            </ShimmerButton>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-hover border-white/10"
              onClick={() => {
                setUserType('lender')
                setCurrentView('lenders')
              }}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              I'm a Lender - Fund Loans
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </BlurFade>

      {/* Market Overview */}
      <BlurFade delay={0.3} inView>
        <MagicCard className="p-8 mb-8" gradientColor="rgba(247, 75, 55, 0.05)">
          <h3 className="text-2xl font-bold mb-6 text-center">Loan Marketplace Overview</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-3">
                <Bitcoin className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Available Capital</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={487} /> BTC
              </p>
              <p className="text-xs text-muted-foreground">($32,839,384)</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Active Loans</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={234} />
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
              <p className="text-2xl font-bold gradient-text">15-25%*</p>
              <p className="text-xs text-muted-foreground">*varies with difficulty</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">Default Rate</p>
              <p className="text-2xl font-bold text-green-500">
                <NumberTicker value={0.3} />%
              </p>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* For Miners */}
        <BlurFade delay={0.4} inView>
          <MagicCard className="p-8 h-full" gradientColor="rgba(247, 75, 55, 0.1)">
            <h3 className="text-2xl font-bold mb-6">For Miners - Get a Loan</h3>
            
            <div className="space-y-6">
              {/* Quick Calculator */}
              <div className="p-6 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Quick Loan Calculator
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">I want to borrow:</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        defaultValue={5}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                      <span className="text-sm font-medium">BTC</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">My hashrate:</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        defaultValue={1000}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                      <span className="text-sm font-medium">TH/s</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-primary/10 rounded-lg text-sm">
                  <p className="font-semibold mb-2">Your Loan Terms:</p>
                  <ul className="space-y-1">
                    <li>• Collateral Required: 5.5 BTC (110% LTV)</li>
                    <li>• Repayment: Daily mining rewards (variable)</li>
                    <li>• Estimated Cost: ~18% if hashprice stable*</li>
                    <li>• Loan Duration: 90 days</li>
                  </ul>
                </div>
                
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-green-500 font-medium">✅ No liquidation risk</p>
                  <p className="text-green-500 font-medium">✅ Repay with mining, not cash</p>
                  <p className="text-green-500 font-medium">✅ Get funds immediately</p>
                </div>
                
                <ShimmerButton 
                  className="w-full mt-4"
                  onClick={() => setCurrentView('miners')}
                >
                  Get Loan Terms
                  <ChevronRight className="ml-2 h-4 w-4" />
                </ShimmerButton>
              </div>
            </div>
          </MagicCard>
        </BlurFade>

        {/* For Lenders */}
        <BlurFade delay={0.5} inView>
          <MagicCard className="p-8 h-full" gradientColor="rgba(16, 185, 129, 0.1)">
            <h3 className="text-2xl font-bold mb-6">For Lenders - Fund Loans</h3>
            
            <div className="space-y-6">
              <h4 className="font-semibold">⚡ Best Loan Opportunities</h4>
              
              {/* Sample Loan 1 */}
              <div className="p-4 border border-white/10 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold">Loan Request #L-4821</p>
                    <p className="text-xs text-muted-foreground">2,000 TH/s | 45.2 BTC balance</p>
                  </div>
                  <p className="text-lg font-bold gradient-text">~22%</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <p className="text-muted-foreground">Requesting</p>
                    <p className="font-semibold">8.1 BTC</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Collateral</p>
                    <p className="font-semibold">8.9 BTC (110%)</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">
                  Your Returns: ~22% if difficulty stable* | Paid in: Daily mining rewards
                </p>
                
                <Button variant="outline" size="sm" className="w-full glass-hover">
                  Fund This Loan
                </Button>
              </div>
              
              {/* Sample Loan 2 */}
              <div className="p-4 border border-white/10 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold">Loan Request #L-4835</p>
                    <p className="text-xs text-muted-foreground">500 TH/s | 12.3 BTC balance</p>
                  </div>
                  <p className="text-lg font-bold gradient-text">~19%</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <p className="text-muted-foreground">Requesting</p>
                    <p className="font-semibold">2.0 BTC</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Collateral</p>
                    <p className="font-semibold">2.2 BTC (110%)</p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">
                  Your Returns: ~19% if difficulty stable* | Paid in: Daily mining rewards
                </p>
                
                <Button variant="outline" size="sm" className="w-full glass-hover">
                  Fund This Loan
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full glass-hover"
                onClick={() => setCurrentView('lenders')}
              >
                View All Loan Requests
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </MagicCard>
        </BlurFade>
      </div>

      {/* Risk Disclosure */}
      <BlurFade delay={0.6} inView>
        <div className="modern-card p-6 border-orange-500/20">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Important: Returns are Variable, Not Fixed</p>
              <p className="text-muted-foreground">
                When you fund a loan, you receive actual mining rewards which vary based on network 
                difficulty, not fixed interest payments.
              </p>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                <p>• If difficulty increases → Lower returns</p>
                <p>• If difficulty decreases → Higher returns</p>
              </div>
              <div className="mt-3 flex gap-3">
                <Button variant="ghost" size="sm" className="text-xs">
                  Understand the Risks
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  View Historical Variance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  )
}
