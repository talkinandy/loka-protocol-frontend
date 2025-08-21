export interface Contract {
  id: string
  type: 'mining' | 'investment'
  hashrate: number // TH/s
  duration: number // days
  hashprice: number // BTC/TH/day
  collateral: number // BTC
  totalValue: number // BTC
  status: 'active' | 'pending' | 'completed' | 'defaulted'
  createdAt: Date
  expiresAt: Date
  miner: {
    id: string
    name: string
    reputation: number
  }
  investor?: {
    id: string
    name: string
  }
  dailyRewards: number // BTC
  totalRewardsEarned: number // BTC
  collateralReleased: number // BTC
  progress: number // percentage 0-100
}

export interface HashpriceData {
  timestamp: Date
  price: number // BTC/TH/day
  difficulty: number
  btcPrice: number // USD
  change24h: number // percentage
}

export interface MarketData {
  currentHashprice: number
  projectedRates: {
    duration: number
    rate: number
    discount: number
  }[]
  totalVolume: number
  activeContracts: number
  availableCapital: number
}

export interface UserPosition {
  role: 'miner' | 'investor' | 'both'
  totalInvested: number // BTC
  totalMining: number // TH/s
  collateralLocked: number // BTC
  dailyEarnings: number // BTC
  totalEarnings: number // BTC
  activeContracts: number
}

export interface OrderBookEntry {
  id: string
  type: 'ask' | 'bid'
  hashrate: number // TH/s
  price: number // BTC/TH/day
  duration: number // days
  minerfunds: string
  timestamp: Date
}