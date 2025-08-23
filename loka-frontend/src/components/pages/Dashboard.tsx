import { HashpriceChart } from "@/components/dashboard/HashpriceChart"
import { MarketOverview } from "@/components/dashboard/MarketOverview"
import { ContractList } from "@/components/dashboard/ContractList"
import { Button } from "@/components/ui/button"
// import { useStore } from "@/store/useStore"
import { formatBTC, formatHashrate } from "@/lib/utils"
import { MagicCard } from "@/components/magicui/magic-card"
import NumberTicker from "@/components/magicui/number-ticker"
import { BorderBeam } from "@/components/magicui/border-beam"
import BlurFade from "@/components/magicui/blur-fade"
import ShimmerButton from "@/components/magicui/shimmer-button"
import { TrendingUp, Wallet, Zap, Shield, ArrowUpRight, ArrowDownRight, Plus, Eye, FileText, Calculator } from "lucide-react"
import { LoanCalculator } from "@/components/dashboard/LoanCalculator"
import { DailyCashflowSummary } from "@/components/dashboard/DailyCashflowSummary"
import { ActiveLoansManagement } from "@/components/dashboard/ActiveLoansManagement"
import { RiskDisclosure } from "@/components/dashboard/RiskDisclosure"

export function Dashboard() {
  // const { userPosition } = useStore()
  
  return (
    <div className="min-h-screen">
      {/* Modern Header with Gradient */}
      <BlurFade delay={0.1} inView>
        <div className="relative overflow-hidden rounded-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-orange-500/20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2 gradient-text">Dashboard</h1>
                <p className="text-lg text-muted-foreground">
                  Monitor your mining operations and financial positions
                </p>
              </div>
              <ShimmerButton className="shadow-xl">
                <Plus className="h-4 w-4 mr-2" />
                Create Contract
              </ShimmerButton>
            </div>
          </div>
        </div>
      </BlurFade>
      
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Total Value Locked",
            value: 14.25, // userPosition.totalCollateral,
            format: (v: number) => formatBTC(v),
            icon: Wallet,
            trend: { value: 12.5, positive: true },
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            label: "Active Hashrate",
            value: 5200, // userPosition.hashrate,
            format: (v: number) => formatHashrate(v),
            icon: Zap,
            trend: { value: 8.2, positive: true },
            gradient: "from-yellow-500 to-orange-500"
          },
          {
            label: "Daily Revenue",
            value: 14.25 * 0.00042, // userPosition.totalCollateral * 0.00042,
            format: (v: number) => formatBTC(v),
            icon: TrendingUp,
            trend: { value: 5.4, positive: false },
            gradient: "from-green-500 to-emerald-500"
          },
          {
            label: "Active Contracts",
            value: 7,
            format: (v: number) => v.toString(),
            icon: FileText,
            trend: { value: 2, positive: true },
            gradient: "from-purple-500 to-pink-500"
          }
        ].map((stat, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.05} inView>
            <MagicCard className="p-6 glass-hover" gradientColor="rgba(247, 75, 55, 0.05)">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.trend.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.trend.value}%
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">
                  {typeof stat.value === 'number' && stat.value > 10 ? (
                    <NumberTicker value={stat.value} />
                  ) : (
                    stat.format(stat.value)
                  )}
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2 cols */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hashprice Chart */}
          <BlurFade delay={0.3} inView>
            <div className="relative">
              <HashpriceChart />
            </div>
          </BlurFade>
          
          {/* Active Loans */}
          <BlurFade delay={0.35} inView>
            <ActiveLoansManagement />
          </BlurFade>
          
          {/* Contract List */}
          <BlurFade delay={0.4} inView>
            <MagicCard className="p-6" gradientColor="rgba(247, 75, 55, 0.05)">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Contracts</h3>
                <Button variant="ghost" size="sm" className="glass-hover">
                  View All
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <ContractList />
            </MagicCard>
          </BlurFade>
        </div>
        
        {/* Right Column - 1 col */}
        <div className="space-y-6">
          {/* Market Overview */}
          <BlurFade delay={0.35} inView>
            <MarketOverview />
          </BlurFade>
          
          {/* Daily Cashflow */}
          <BlurFade delay={0.4} inView>
            <DailyCashflowSummary />
          </BlurFade>
          
          {/* Loan Calculator */}
          <BlurFade delay={0.45} inView>
            <MagicCard className="p-6" gradientColor="rgba(247, 75, 55, 0.05)">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Quick Calculator</h3>
              </div>
              <LoanCalculator />
            </MagicCard>
          </BlurFade>
          
          {/* Risk Disclosure */}
          <BlurFade delay={0.5} inView>
            <RiskDisclosure />
          </BlurFade>
          
          {/* Quick Actions */}
          <BlurFade delay={0.55} inView>
            <MagicCard className="p-6" gradientColor="rgba(247, 75, 55, 0.05)">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start glass-hover" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Loan
                </Button>
                <Button className="w-full justify-start glass-hover" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  View Portfolio
                </Button>
                <Button className="w-full justify-start glass-hover" variant="outline">
                  <Shield className="h-4 w-4 mr-2" />
                  Risk Assessment
                </Button>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <BlurFade delay={0.6} inView>
        <div className="mt-12 relative">
          <MagicCard className="p-8 text-center" gradientColor="rgba(247, 75, 55, 0.1)">
            <BorderBeam size={300} duration={12} delay={9} />
            <h3 className="text-2xl font-bold mb-2">Ready to optimize your mining operations?</h3>
            <p className="text-muted-foreground mb-6">
              Create your first loan contract and unlock immediate liquidity
            </p>
            <div className="flex items-center justify-center gap-4">
              <ShimmerButton>
                Get Started
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </ShimmerButton>
              <Button variant="outline" className="glass-hover">
                Learn More
              </Button>
            </div>
          </MagicCard>
        </div>
      </BlurFade>
    </div>
  )
}