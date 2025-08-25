import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useStore } from "@/store/useStore"
import { formatBTC } from "@/lib/utils"
import { BorderBeam } from "@/components/magicui/border-beam"
import { MagicCard } from "@/components/magicui/magic-card"
import NumberTicker from "@/components/magicui/number-ticker"
import ShimmerButton from "@/components/magicui/shimmer-button"
import BlurFade from "@/components/magicui/blur-fade"
import { Calculator, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react"

export function LoanCalculator() {
  const { marketData, userPosition } = useStore()
  const [loanAmount, setLoanAmount] = useState(5.0)
  const [hashrate, setHashrate] = useState(1000)
  const [duration, setDuration] = useState(90)

  // Calculate loan terms
  const collateralRequired = loanAmount * 1.1 // 110% LTV
  const dailyMiningRevenue = (hashrate * marketData.currentHashprice) / 1000 // Convert TH to TH
  const totalMiningValue = dailyMiningRevenue * duration
  const estimatedCost = ((totalMiningValue - loanAmount) / loanAmount) * 100
  const hasBalance = userPosition.role === 'miner' && collateralRequired <= userPosition.totalInvested + userPosition.collateralLocked

  return (
    <BlurFade delay={0.2} inView>
      <MagicCard className="relative overflow-hidden" gradientColor="rgba(247, 75, 55, 0.1)">
        <BorderBeam size={150} duration={20} delay={0} />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Quick Loan Calculator
        </CardTitle>
        <CardDescription>
          Calculate your liquidation-free loan terms instantly
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Loan Amount */}
        <div className="space-y-2">
          <Label htmlFor="loan-amount">Loan Amount</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
              step={0.1}
              min={0.1}
              max={50}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground">BTC</span>
          </div>
          <p className="text-xs text-green-400 font-medium">
            ~$<NumberTicker value={loanAmount * 67432} /> USD
          </p>
        </div>

        {/* Hashrate */}
        <div className="space-y-2">
          <Label htmlFor="hashrate">Your Hashrate</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="hashrate"
              type="number"
              value={hashrate}
              onChange={(e) => setHashrate(parseInt(e.target.value) || 0)}
              step={100}
              min={100}
              max={10000}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground">TH/s</span>
          </div>
        </div>

        {/* Duration Slider */}
        <div className="space-y-2">
          <Label>Loan Duration: {duration} days</Label>
          <Slider
            value={[duration]}
            onValueChange={(value) => setDuration(value[0])}
            min={30}
            max={365}
            step={30}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>30d</span>
            <span>90d</span>
            <span>180d</span>
            <span>365d</span>
          </div>
        </div>

        {/* Loan Terms Display */}
        <div className="bg-gradient-to-r from-loka-red-orange/10 to-loka-orange/5 rounded-lg p-4 space-y-3 border border-loka-red-orange/20">
          <h4 className="font-semibold text-sm text-white">Your Loan Terms:</h4>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-loka-red-orange" />
              <div>
                <p className="font-medium text-white">Collateral Required</p>
                <p className="text-muted-foreground">
                  <NumberTicker value={collateralRequired} decimalPlaces={3} /> BTC (110% LTV)
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="font-medium text-white">Daily Mining</p>
                <p className="text-muted-foreground">
                  <NumberTicker value={dailyMiningRevenue} decimalPlaces={6} /> BTC
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <div>
                <p className="font-medium text-white">Total Repayment</p>
                <p className="text-muted-foreground">
                  <NumberTicker value={totalMiningValue} decimalPlaces={3} /> BTC
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-blue-500" />
              <div>
                <p className="font-medium text-white">Estimated Cost</p>
                <p className={`${estimatedCost > 0 ? 'text-orange-400' : 'text-green-400'} font-bold`}>
                  <NumberTicker value={estimatedCost} decimalPlaces={1} />%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-400/5 rounded-lg p-4 border border-green-500/20">
          <h4 className="font-semibold text-sm text-white mb-3">🔒 NO LIQUIDATION RISK</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-muted-foreground">Keep your collateral safe - no margin calls</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4 text-green-400" />
              <span className="text-muted-foreground">Repay with mining rewards, not cash</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-muted-foreground">Get funds immediately upon approval</span>
            </div>
          </div>
        </div>

        {/* Balance Check */}
        {userPosition.role === 'miner' && (
          <div className={`p-3 rounded-lg border ${hasBalance ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800'}`}>
            <p className="text-sm font-medium">
              {hasBalance ? '✅ Sufficient balance for this loan' : '⚠️ Insufficient balance'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Your balance: {formatBTC(userPosition.totalInvested + userPosition.collateralLocked)}
            </p>
          </div>
        )}

        {/* Action Button */}
        <ShimmerButton 
          className="w-full text-lg py-4"
          disabled={!hasBalance && userPosition.role === 'miner'}
        >
          <span className="text-white font-semibold">Get Detailed Loan Terms</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </ShimmerButton>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground">
          *Actual cost depends on mining difficulty changes during loan period
        </p>
        </CardContent>
      </MagicCard>
    </BlurFade>
  )
}
