import { MagicCard } from "@/components/magicui/magic-card"
import { useStore } from "@/store/useStore"
import { formatBTC, formatPercentage } from "@/lib/utils"
import NumberTicker from "@/components/magicui/number-ticker"
import { TrendingUp, Wallet, FileText, Zap, TrendingDown, ArrowUpRight } from "lucide-react"

export function MarketOverview() {
  const { marketData } = useStore()
  
  const cards = [
    {
      title: "Available Capital",
      value: marketData.availableCapital,
      formatter: formatBTC,
      subtitle: "Ready for investment",
      icon: Wallet,
      trend: { value: 12.5, positive: true },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Active Contracts",
      value: marketData.activeContracts,
      formatter: (v: number) => v.toString(),
      subtitle: "Currently running",
      icon: FileText,
      trend: { value: 8, positive: true },
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Current Hashprice",
      value: marketData.currentHashprice,
      formatter: formatBTC,
      subtitle: "per TH/day",
      icon: Zap,
      trend: { value: 3.2, positive: false },
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Best Discount",
      value: Math.abs(marketData.projectedRates[3].discount),
      formatter: formatPercentage,
      subtitle: "365-day contracts",
      icon: TrendingUp,
      trend: { value: 15, positive: true },
      gradient: "from-green-500 to-emerald-500",
      highlight: true
    }
  ]
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Market Overview</h3>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          View Details
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
      
      <div className="space-y-4">
        {cards.map((card, index) => (
          <MagicCard 
            key={index} 
            className={`p-4 glass-hover ${card.highlight ? 'border-primary/50' : ''}`}
            gradientColor={card.highlight ? "rgba(247, 75, 55, 0.1)" : "rgba(247, 75, 55, 0.05)"}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${card.gradient}`}>
                    <card.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">{card.title}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-xl font-bold ${card.highlight ? 'gradient-text' : ''}`}>
                    {typeof card.value === 'number' && card.value > 10 ? (
                      <NumberTicker value={card.value} />
                    ) : (
                      card.formatter(card.value)
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground">{card.subtitle}</span>
                </div>
              </div>
              
              <div className={`flex items-center gap-1 text-xs ${card.trend.positive ? 'text-green-500' : 'text-red-500'}`}>
                {card.trend.positive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{card.trend.value}%</span>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  )
}