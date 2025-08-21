import type { Contract, HashpriceData, MarketData, UserPosition, OrderBookEntry } from '@/types'

// Mock current BTC price
const CURRENT_BTC_PRICE = 67432

// Generate realistic hashprice data
export const generateHashpriceData = (): HashpriceData[] => {
  const data: HashpriceData[] = []
  const now = new Date()
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    const basePrice = 0.00005 + Math.sin(i * 0.1) * 0.00001 + Math.random() * 0.00001
    
    data.push({
      timestamp: date,
      price: basePrice,
      difficulty: 123000000000000 + Math.random() * 1000000000000,
      btcPrice: CURRENT_BTC_PRICE + (Math.random() - 0.5) * 5000,
      change24h: (Math.random() - 0.5) * 10
    })
  }
  
  return data
}

export const mockMarketData: MarketData = {
  currentHashprice: 0.000049,
  projectedRates: [
    { duration: 30, rate: 0.000047, discount: -4.2 },
    { duration: 90, rate: 0.000044, discount: -10.2 },
    { duration: 180, rate: 0.000042, discount: -14.3 },
    { duration: 365, rate: 0.000039, discount: -20.4 }
  ],
  totalVolume: 487.2,
  activeContracts: 234,
  availableCapital: 487.2
}

export const mockUserPosition: UserPosition = {
  role: 'both',
  totalInvested: 15.5,
  totalMining: 2500,
  collateralLocked: 17.05,
  dailyEarnings: 0.173,
  totalEarnings: 18.7,
  activeContracts: 3
}

export const generateMockContracts = (): Contract[] => {
  const contracts: Contract[] = []
  const now = new Date()
  
  // Active contracts
  for (let i = 0; i < 5; i++) {
    const createdAt = new Date(now.getTime() - Math.random() * 60 * 24 * 60 * 60 * 1000)
    const duration = [30, 90, 180, 365][Math.floor(Math.random() * 4)]
    const expiresAt = new Date(createdAt.getTime() + duration * 24 * 60 * 60 * 1000)
    const hashrate = 100 + Math.random() * 2000
    const hashprice = 0.000040 + Math.random() * 0.000020
    const totalValue = hashrate * hashprice * duration
    const progress = Math.min(100, ((now.getTime() - createdAt.getTime()) / (expiresAt.getTime() - createdAt.getTime())) * 100)
    
    contracts.push({
      id: `contract-${i + 1}`,
      type: Math.random() > 0.5 ? 'mining' : 'investment',
      hashrate,
      duration,
      hashprice,
      collateral: totalValue * 1.1,
      totalValue,
      status: 'active',
      createdAt,
      expiresAt,
      miner: {
        id: `miner-${i + 1}`,
        name: `Miner ${i + 1}`,
        reputation: 80 + Math.random() * 20
      },
      investor: {
        id: `investor-${i + 1}`,
        name: `Investor ${i + 1}`
      },
      dailyRewards: hashrate * hashprice,
      totalRewardsEarned: (hashrate * hashprice) * (progress / 100) * (duration / 100),
      collateralReleased: (totalValue * 1.1) * (progress / 100),
      progress
    })
  }
  
  return contracts
}

export const generateOrderBook = (): OrderBookEntry[] => {
  const orders: OrderBookEntry[] = []
  const now = new Date()
  
  // Generate asks (miners selling hashrate)
  for (let i = 0; i < 10; i++) {
    orders.push({
      id: `ask-${i}`,
      type: 'ask',
      hashrate: 100 + Math.random() * 1000,
      price: 0.000040 + Math.random() * 0.000020,
      duration: [30, 90, 180, 365][Math.floor(Math.random() * 4)],
      minerfunds: `miner-${i}`,
      timestamp: new Date(now.getTime() - Math.random() * 1000 * 60 * 60)
    })
  }
  
  // Generate bids (investors buying hashrate)
  for (let i = 0; i < 10; i++) {
    orders.push({
      id: `bid-${i}`,
      type: 'bid',
      hashrate: 100 + Math.random() * 1000,
      price: 0.000035 + Math.random() * 0.000015,
      duration: [30, 90, 180, 365][Math.floor(Math.random() * 4)],
      minerfunds: `investor-${i}`,
      timestamp: new Date(now.getTime() - Math.random() * 1000 * 60 * 60)
    })
  }
  
  return orders.sort((a, b) => {
    if (a.type === 'ask' && b.type === 'bid') return -1
    if (a.type === 'bid' && b.type === 'ask') return 1
    if (a.type === 'ask') return a.price - b.price
    return b.price - a.price
  })
}

export const mockHashpriceData = generateHashpriceData()
export const mockContracts = generateMockContracts()
export const mockOrderBook = generateOrderBook()