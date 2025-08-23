# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LOKA Frontend is a React + TypeScript application built with Vite for the LOKA Protocol - a decentralized Bitcoin mining finance protocol. The application provides interfaces for miners to create hashrate-collateralized contracts and investors to purchase future mining rewards.

**Core Concept**: "Borrow against BTC, repay with hashrate" - A liquidation-free lending model where miners lock 110% BTC collateral and repay through daily hashrate delivery rather than currency.

## Development Commands

### Core Development
```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type checking (manual)
npx tsc --noEmit
```

### Testing with Puppeteer
The project includes Puppeteer for automated UI testing and screenshots. Create test scripts and run with:
```bash
node your-test-script.js
```

## Architecture & Code Structure

### State Management
- **Zustand Store** (`src/store/useStore.ts`): Central state management
  - Market data, user positions, contracts, order book
  - UI state (dark mode, current view)
  - Mock data integration for development

### Data Layer
- **Mock Services** (`src/services/mockData.ts`): Realistic test data
  - Bitcoin hashprice data with historical trends
  - Mining contracts with collateral mechanics
  - Market overview and order book simulation
  - User positions for different roles (miner/investor)

### Component Architecture

#### Layout Components
- `src/components/layout/Header.tsx`: Main navigation with LOKA branding
- Navigation uses Zustand store for view routing

#### Page Components
- `Dashboard.tsx`: Main dashboard with market overview and user position
- `LandingPage.tsx`: Marketing/landing page
- `MinerDashboard.tsx`: Miner-specific interface for creating contracts
- `LenderDashboard.tsx`: Investor interface for browsing opportunities
- `LoanMarketplace.tsx`: Order book and contract marketplace

#### Dashboard Components
- `HashpriceChart.tsx`: Recharts-based Bitcoin hashprice visualization
- `MarketOverview.tsx`: Key metrics cards with live data
- `ContractList.tsx`: Active contracts table with progress tracking
- `LoanCalculator.tsx`: Interactive loan amount calculator
- `ActiveLoansManagement.tsx`: Loan management interface
- `RiskDisclosure.tsx`: Risk information components

### UI System

#### Base Components (`src/components/ui/`)
- Built on **shadcn/ui** patterns with Radix UI primitives
- **Card system**: Enhanced with LOKA brand styling and better padding
- **Button variants**: Custom LOKA styling with hover effects and animations
- **Form components**: Input, Label, Slider, Progress with consistent theming

#### Magic UI Components (`src/components/magicui/`)
- **Animated elements**: BorderBeam, ShinyButton, PulsatingButton
- **Visual effects**: GridPattern, Particles, BlurFade
- **Interactive components**: AnimatedGradientText, NumberTicker
- **Layout helpers**: BentoGrid, MagicCard with enhanced styling

### Design System

#### LOKA Brand Colors
```css
--loka-red-orange: #F74B37  /* Primary brand color */
--loka-orange: #F5681B      /* Secondary accent */
--loka-off-black: #040303   /* Dark backgrounds */
--loka-off-white: #FFF1ED   /* Light text */
```

#### Typography
- **Display/Headlines**: Inter font family
- **Body text**: Roboto font family  
- **Technical text**: Jersey monospace (for data)

#### Spacing & Layout
- **Container max-width**: 1280px
- **Card padding**: 32px (8 Tailwind units)
- **Section spacing**: 3rem between major sections
- **Grid gaps**: 32px for visual separation

### Key Features

#### Contract System
- **T/h denominated contracts**: All values in Terahash/second, not BTC/USD
- **110% collateralization**: Self-insurance model with daily releases
- **Duration options**: 30, 90, 180, 365 days standardized
- **Daily settlement**: Real-time progress tracking

#### Market Data Integration
- **Hashprice tracking**: Bitcoin mining profitability metrics
- **Order book**: Central Limit Order Book (CLOB) simulation
- **Risk calculations**: Projected rates and discount analysis

## Technical Stack

### Core Technologies
- **React 19** with TypeScript
- **Vite** for build tooling and HMR
- **Tailwind CSS 4.x** with custom LOKA theming
- **Zustand** for state management
- **Recharts** for data visualization

### UI Libraries
- **Radix UI** for accessible primitives
- **Lucide React** for icons
- **Framer Motion** for animations
- **Class Variance Authority** for component variants

### Development Tools
- **ESLint** with React and TypeScript rules
- **PostCSS** with autoprefixer
- **Puppeteer** for automated testing

## Development Guidelines

### Component Patterns
- Use TypeScript interfaces from `src/types/index.ts`
- Follow shadcn/ui component patterns for consistency
- Implement LOKA brand styling with custom CSS variables
- Use Zustand store for all shared state

### Styling Approach
- **CSS Variables**: Defined in `src/index.css` with LOKA brand colors
- **Tailwind Classes**: Extended with custom LOKA color palette
- **Responsive Design**: Mobile-first with proper breakpoints
- **Dark Theme**: Primary theme with high contrast for readability

### Data Handling
- All financial values use precise number types (avoid floating point issues)
- Hashrate denominated in TH/s (Terahashes per second)
- Bitcoin values in BTC (not satoshis) for clarity
- Dates handled as Date objects, not strings

### Mock Data Strategy
- Realistic data that reflects actual Bitcoin mining economics
- Hashprice follows believable market patterns
- Contract progress simulates daily settlement mechanics
- Order book reflects actual trading dynamics

## Architecture Decisions

### Why Zustand over Redux
- Simpler state management for financial data
- Better TypeScript integration
- Minimal boilerplate for rapid development

### Why Mock Data Architecture  
- Enables full frontend development before backend
- Realistic data for accurate UI/UX testing
- Easy transition to real APIs (same interfaces)

### Component Organization
- Pages contain business logic and layout
- Dashboard components focus on single responsibilities
- UI components are pure and reusable
- Magic UI components add visual polish

## Important Context

This is a **frontend-only implementation** of the LOKA Protocol dashboard. The actual protocol will run on Internet Computer Protocol (ICP) with ckBTC integration, but this interface provides the complete user experience for testing and development.

The application focuses on the novel financial primitive of hashrate-collateralized lending, where miners can access capital without liquidation risk by delivering mining hashrate instead of repaying in currency.