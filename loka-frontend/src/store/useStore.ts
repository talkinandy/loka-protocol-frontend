import { create } from 'zustand'
import type { Contract, HashpriceData, MarketData, UserPosition, OrderBookEntry } from '@/types'
import { 
  mockMarketData, 
  mockUserPosition, 
  mockHashpriceData, 
  mockContracts, 
  mockOrderBook 
} from '@/services/mockData'

interface AppStore {
  // Data
  hashpriceData: HashpriceData[]
  marketData: MarketData
  userPosition: UserPosition
  contracts: Contract[]
  orderBook: OrderBookEntry[]
  
  // UI State
  isDarkMode: boolean
  currentView: 'home' | 'dashboard' | 'marketplace' | 'portfolio' | 'create' | 'miners' | 'lenders' | 'loan-application'
  
  // Actions
  toggleDarkMode: () => void
  setCurrentView: (view: string) => void
  updateUserPosition: (position: Partial<UserPosition>) => void
  addContract: (contract: Contract) => void
  updateContract: (id: string, updates: Partial<Contract>) => void
  refreshData: () => void
}

export const useStore = create<AppStore>((set, get) => ({
  // Initial data
  hashpriceData: mockHashpriceData,
  marketData: mockMarketData,
  userPosition: mockUserPosition,
  contracts: mockContracts,
  orderBook: mockOrderBook,
  
  // UI State
  isDarkMode: false,
  currentView: 'home',
  
  // Actions
  toggleDarkMode: () => {
    set((state) => ({ isDarkMode: !state.isDarkMode }))
    const isDark = get().isDarkMode
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  
  setCurrentView: (view: string) => {
    set({ currentView: view as any })
  },
  
  updateUserPosition: (position: Partial<UserPosition>) => {
    set((state) => ({
      userPosition: { ...state.userPosition, ...position }
    }))
  },
  
  addContract: (contract: Contract) => {
    set((state) => ({
      contracts: [...state.contracts, contract]
    }))
  },
  
  updateContract: (id: string, updates: Partial<Contract>) => {
    set((state) => ({
      contracts: state.contracts.map(contract =>
        contract.id === id ? { ...contract, ...updates } : contract
      )
    }))
  },
  
  refreshData: () => {
    // In a real app, this would fetch fresh data from APIs
    // For now, we'll just simulate some small changes
    set((state) => ({
      marketData: {
        ...state.marketData,
        currentHashprice: state.marketData.currentHashprice + (Math.random() - 0.5) * 0.000001
      }
    }))
  }
}))