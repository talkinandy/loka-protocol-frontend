import { useState } from "react"
import { MagicCard } from "@/components/magicui/magic-card"
import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/magicui/shimmer-button"
import NumberTicker from "@/components/magicui/number-ticker"
import BlurFade from "@/components/magicui/blur-fade"

import { useStore } from "@/store/useStore"
import { 
  DollarSign,
  Filter,
  ChevronRight,
  CheckCircle2,
  Zap,
  Shield,
  Eye
} from "lucide-react"

export function LenderDashboard() {
  const { setCurrentView } = useStore()
  const [apyMin, setApyMin] = useState(15)
  const [apyMax, setApyMax] = useState(25)
  const [sizeMin, setSizeMin] = useState(1)
  const [sizeMax, setSizeMax] = useState(50)

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <BlurFade delay={0.1} inView>
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Lender Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Earn 15-25% APY paid in Bitcoin mining rewards.
          </p>
        </div>
      </BlurFade>

      {/* Portfolio Overview */}
      <BlurFade delay={0.2} inView>
        <MagicCard className="p-8 mb-8" gradientColor="rgba(16, 185, 129, 0.1)">
          <h3 className="text-2xl font-bold mb-6">Portfolio Overview</h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Loans</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={12} />
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Funded</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={84.0} /> BTC
              </p>
              <p className="text-xs text-muted-foreground">$5,664,288</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
              <p className="text-2xl font-bold gradient-text">~19.3%*</p>
              <p className="text-xs text-muted-foreground">*current difficulty</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Daily Income</p>
              <p className="text-2xl font-bold text-green-500">
                ~<NumberTicker value={0.444} decimalPlaces={3} /> BTC
              </p>
              <p className="text-xs text-muted-foreground">varies with mining</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Earned</p>
              <p className="text-2xl font-bold">
                <NumberTicker value={18.7} /> BTC
              </p>
              <p className="text-xs text-muted-foreground">actual rewards</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-500/10 rounded-lg">
            <p className="text-sm font-medium text-green-500 mb-1">Performance vs Estimates:</p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Expected:</span>
                <span className="font-semibold ml-2">17.2 BTC</span>
              </div>
              <div>
                <span className="text-muted-foreground">Actually received:</span>
                <span className="font-semibold ml-2">18.7 BTC</span>
              </div>
              <div>
                <span className="text-green-500">Variance:</span>
                <span className="font-semibold ml-2 text-green-500">+8.7%</span>
              </div>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* Filter Loan Requests */}
      <BlurFade delay={0.3} inView>
        <MagicCard className="p-6 mb-8" gradientColor="rgba(247, 75, 55, 0.05)">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Filter Loan Requests
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">APY Range:</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={apyMin}
                  onChange={(e) => setApyMin(Number(e.target.value))}
                  className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <span>% -</span>
                <input
                  type="number"
                  value={apyMax}
                  onChange={(e) => setApyMax(Number(e.target.value))}
                  className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <span>%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Loan Size:</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={sizeMin}
                  onChange={(e) => setSizeMin(Number(e.target.value))}
                  className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  value={sizeMax}
                  onChange={(e) => setSizeMax(Number(e.target.value))}
                  className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <span>BTC</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sort by:</label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="glass-hover">
                  APY (Highest)
                </Button>
                <Button variant="ghost" size="sm">
                  Size
                </Button>
                <Button variant="ghost" size="sm">
                  Newest
                </Button>
              </div>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* Best Loan Opportunities */}
      <BlurFade delay={0.4} inView>
        <div className="space-y-6 mb-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Best Loan Opportunities
          </h3>

          {/* Loan Request #1 */}
          <MagicCard className="p-8" gradientColor="rgba(247, 75, 55, 0.1)">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h4 className="text-xl font-bold mb-1">Loan Request #L-5012</h4>
                <p className="text-sm text-muted-foreground">Posted 2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text">Est. ~24% Returns*</p>
                <p className="text-xs text-muted-foreground">*if difficulty stable</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold mb-3">Borrower Stats:</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Hashrate:</span>
                    <span className="font-semibold">3,500 TH/s (verified)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Pool Balance:</span>
                    <span className="font-semibold">67.3 BTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mining History:</span>
                    <span className="font-semibold">18 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Previous Loans:</span>
                    <span className="font-semibold text-green-500">3 (all repaid)</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">What You Get:</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-semibold">15.0 BTC ($1,011,480)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mining Output:</span>
                    <span className="font-semibold">3,500 TH/s for 90 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estimated Value:</span>
                    <span className="font-semibold text-green-500">~18.6 BTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Collateral:</span>
                    <span className="font-semibold">16.5 BTC (110% secured)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-orange-500/10 rounded-lg">
              <p className="text-sm font-medium mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-orange-500" />
                Actual returns depend on:
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                <li>• Network difficulty changes</li>
                <li>• Transaction fee variations</li>
                <li>• Block finding variance</li>
              </ul>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium mb-1 block">Amount to Fund:</label>
                <input
                  type="number"
                  defaultValue={15.0}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-lg font-semibold"
                />
              </div>
              <ShimmerButton className="h-12 px-8">
                Fund This Loan - Get Mining Rewards
                <ChevronRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </div>
          </MagicCard>

          {/* Loan Request #2 */}
          <MagicCard className="p-8" gradientColor="rgba(247, 75, 55, 0.05)">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold mb-1">Loan Request #L-5008</h4>
                <p className="text-sm text-muted-foreground">Posted 5 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">⚡ 20% APY</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Hashrate</p>
                <p className="font-semibold">1,200 TH/s</p>
              </div>
              <div>
                <p className="text-muted-foreground">Requesting</p>
                <p className="font-semibold">8.0 BTC</p>
              </div>
              <div>
                <p className="text-muted-foreground">Collateral</p>
                <p className="font-semibold">8.8 BTC (110%)</p>
              </div>
              <div>
                <p className="text-muted-foreground">Previous Loans</p>
                <p className="font-semibold text-green-500">1 (repaid)</p>
              </div>
            </div>

            <Button variant="outline" className="mt-4 glass-hover">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </MagicCard>
        </div>
      </BlurFade>

      {/* Active Loans Section */}
      <BlurFade delay={0.5} inView>
        <MagicCard className="p-8 mb-8" gradientColor="rgba(247, 75, 55, 0.05)">
          <h3 className="text-2xl font-bold mb-6">Active Loans</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground">
              <div>Loan ID</div>
              <div>Status</div>
              <div>APY</div>
              <div>Daily Income</div>
              <div>Actions</div>
            </div>
            
            {[
              { id: 'L-4821', days: '45/90', apy: '22%', daily: '0.061 BTC', status: 'On-time' },
              { id: 'L-4763', days: '72/90', apy: '19%', daily: '0.026 BTC', status: 'On-time' },
              { id: 'L-4698', days: '12/90', apy: '24%', daily: '0.099 BTC', status: 'On-time' },
            ].map((loan) => (
              <div key={loan.id} className="grid grid-cols-5 gap-4 items-center p-4 border border-white/10 rounded-lg">
                <div>
                  <p className="font-semibold">{loan.id}</p>
                  <p className="text-xs text-muted-foreground">Day {loan.days}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{loan.status}</span>
                </div>
                <div className="font-semibold gradient-text">{loan.apy}</div>
                <div className="text-sm">{loan.daily}</div>
                <div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="mt-4 w-full glass-hover">
            View All Loans
          </Button>
        </MagicCard>
      </BlurFade>

      {/* Daily Income Stream */}
      <BlurFade delay={0.6} inView>
        <MagicCard className="p-8" gradientColor="rgba(16, 185, 129, 0.05)">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-500" />
            Daily Income Stream
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Yesterday's Income</p>
              <p className="text-3xl font-bold gradient-text mb-1">0.447 BTC</p>
              <p className="text-sm text-muted-foreground">≈ $30,142</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium mb-2">Breakdown:</p>
              {[
                { loan: 'L-4821', amount: '0.061 BTC' },
                { loan: 'L-4763', amount: '0.026 BTC' },
                { loan: 'L-4698', amount: '0.099 BTC' },
                { loan: '9 other loans', amount: '0.261 BTC' },
              ].map((item) => (
                <div key={item.loan} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">├─ Loan #{item.loan}:</span>
                  <span className="font-semibold">{item.amount}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Average</p>
                <p className="text-xl font-bold">13.32 BTC</p>
                <p className="text-xs text-muted-foreground">$898,178</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Annual Projection</p>
                <p className="text-xl font-bold">162.1 BTC</p>
                <p className="text-xs text-muted-foreground">$10,929,667</p>
              </div>
            </div>
          </div>
        </MagicCard>
      </BlurFade>

      {/* CTA Section */}
      <BlurFade delay={0.7} inView>
        <div className="mt-8 text-center">
          <Button 
            size="lg" 
            onClick={() => setCurrentView('marketplace')}
            className="glass-hover"
          >
            Browse All Loan Requests
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </BlurFade>
    </div>
  )
}
