import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStore } from "@/store/useStore"
import { formatBTC } from "@/lib/utils"
import { BorderBeam } from "@/components/magicui/border-beam"

export function HashpriceChart() {
  const { hashpriceData, marketData } = useStore()
  
  const chartData = hashpriceData.map(item => ({
    date: item.timestamp.toLocaleDateString(),
    price: item.price,
    formatted: item.price.toFixed(8)
  }))
  
  const currentPrice = marketData.currentHashprice
  const change24h = hashpriceData.length > 1 
    ? ((currentPrice - hashpriceData[hashpriceData.length - 2].price) / hashpriceData[hashpriceData.length - 2].price) * 100
    : 0
  
  return (
    <Card className="relative overflow-hidden">
      <BorderBeam size={200} duration={15} delay={0} />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          ⚡ Bitcoin Hashprice
          <span className="text-sm font-normal text-muted-foreground">
            (Live Market Data)
          </span>
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Current: <span className="font-semibold text-primary">{formatBTC(currentPrice)}/TH/day</span></span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${change24h >= 0 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
            {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}% (24h)
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="hashpriceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--loka-red-orange))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--loka-red-orange))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={false}
                tickLine={false}
                domain={['dataMin * 0.98', 'dataMax * 1.02']}
                className="text-muted-foreground"
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-sm font-bold text-primary">
                          {formatBTC(payload[0].value as number)}/TH/day
                        </p>
                        <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="hsl(var(--loka-red-orange))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--loka-red-orange))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--loka-red-orange))', strokeWidth: 2, fill: 'hsl(var(--background))' }}
                strokeLinecap="round"
                fill="url(#hashpriceGradient)"
              />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Trend indicator */}
          <div className="absolute top-2 right-2 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1 border">
            <div className={`w-2 h-2 rounded-full ${change24h >= 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-xs font-medium">
              {change24h >= 0 ? '📈 Trending Up' : '📉 Trending Down'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}