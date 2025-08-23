import { MagicCard } from "@/components/magicui/magic-card"
import { formatBTC } from "@/lib/utils"
import NumberTicker from "@/components/magicui/number-ticker"
import { TrendingUp, ArrowUpRight, ArrowDownLeft, Wallet, Activity } from "lucide-react"

export function DailyCashflowSummary() {
  // Mock daily cashflow data - in real app this would come from API
  const dailyCashflow = {
    miningRevenue: 0.182,
    loanRepayments: -0.131,
    collateralRelease: 0.122,
    totalNet: 0.173
  }

  const usdValue = dailyCashflow.totalNet * 67432 // Mock BTC price

  return (
    <MagicCard className="p-6" gradientColor="rgba(247, 75, 55, 0.05)">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
          <Wallet className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold">Daily Cashflow</h3>
      </div>
      
      <div className="space-y-4">
        {/* Main Net Flow */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 rounded-lg blur" />
          <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-green-400 mb-1">Net Daily Flow</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold gradient-text">
                    +<NumberTicker value={dailyCashflow.totalNet} decimalPlaces={6} />
                  </span>
                  <span className="text-sm font-medium text-green-400">BTC</span>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  ${usdValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </p>
              </div>
              <Activity className="h-8 w-8 text-green-500/20" />
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-muted-foreground">Breakdown</h4>
          
          {/* Mining Revenue */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-lg blur transition-opacity duration-300" />
            <div className="relative flex items-center justify-between p-3 glass-hover rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Mining Revenue</p>
                  <p className="text-xs text-muted-foreground">Daily rewards</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-green-500">
                +{formatBTC(dailyCashflow.miningRevenue)}
              </p>
            </div>
          </div>

          {/* Loan Repayments */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 rounded-lg blur transition-opacity duration-300" />
            <div className="relative flex items-center justify-between p-3 glass-hover rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                  <ArrowDownLeft className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Loan Repayments</p>
                  <p className="text-xs text-muted-foreground">To lenders</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-orange-500">
                {formatBTC(dailyCashflow.loanRepayments)}
              </p>
            </div>
          </div>

          {/* Collateral Release */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-lg blur transition-opacity duration-300" />
            <div className="relative flex items-center justify-between p-3 glass-hover rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Collateral Release</p>
                  <p className="text-xs text-muted-foreground">Daily return</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-500">
                +{formatBTC(dailyCashflow.collateralRelease)}
              </p>
            </div>
          </div>
        </div>

        {/* Projections */}
        <div className="pt-4 border-t border-white/10">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Monthly Projection</span>
              <span className="text-sm font-semibold">
                +{formatBTC(dailyCashflow.totalNet * 30)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Annual Projection</span>
              <span className="text-sm font-semibold gradient-text">
                +{formatBTC(dailyCashflow.totalNet * 365)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  )
}