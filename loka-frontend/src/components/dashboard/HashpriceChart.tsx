import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useStore } from "@/store/useStore"
import { formatBTC } from "@/lib/utils"

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
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin Hashprice</CardTitle>
        <CardDescription>
          Current: {formatBTC(currentPrice)}/TH/day
          <span className={`ml-2 ${change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={['dataMin * 0.95', 'dataMax * 1.05']}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background border rounded-lg p-2 shadow-md">
                      <p className="text-sm">{label}</p>
                      <p className="text-sm font-medium text-primary">
                        {formatBTC(payload[0].value as number)}/TH/day
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}