# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LOKA is a decentralized Bitcoin mining finance protocol that creates a liquid marketplace for hashrate contracts. The protocol enables miners to collateralize their future hashrate production with BTC to receive immediate capital, while investors acquire Bitcoin at below-market rates by purchasing discounted mining production.

**Core Innovation**: "Borrow against BTC, repay with hashrate" - A liquidation-free lending model where miners use their BTC reserves as collateral and repay loans through hashrate delivery rather than currency.

## Architecture Overview

### Technical Infrastructure
- **Platform**: Internet Computer Protocol (ICP)
- **Bitcoin Integration**: Chain-key Bitcoin (ckBTC) for non-custodial BTC handling
- **Settlement**: Every 24 hours with on-chain verification
- **Hashrate Recording**: Real-time monitoring with hourly aggregation
- **Oracle System**: Multiple mining pool verification with averaging

### Core Components

#### 1. Contract Structure (T/h denominated)
- **Denomination**: Terahash/second (T/h), NOT BTC or USD
- **Minimum Contract**: 1 TH/s with 0.0001 lot size increments
- **Collateral**: 110% BTC collateral (released daily upon hashrate delivery)
- **Duration**: 30, 90, 180, 365 days (standardized)
- **Settlement**: Daily hashrate verification + reward distribution

#### 2. Three-Party System
- **Miners**: Lock 110% BTC collateral, receive 100% upfront capital
- **Investors**: Pay upfront, receive mining rewards + collateral if default
- **Insurers**: Provide collateral and lock Bitcoin in return for upfront fees & share of mining reward

#### 3. Key Protocol Elements
- **Stash**: Contract opened by miners offering future hashrate
- **Stash Collateral Pool (SCP)**: Individual pool for each Stash where insurers store Bitcoin collateral
- **Trove**: Tokenized mining contract minted by investors from available and collateralized Stash
- **Hashrate Oracle**: Reads native hashrate sent from miner to Loka's mining pool

### Market Design
- **Central Limit Order Book (CLOB)** with continuous double auction
- **Price-time priority** (First Come First Served)
- **Fractional order support** (0.0001 lot size minimum)
- **Cross-collateral required** for order placement

### Fee Structure
- **Contract Initiation**: 0.2% of contract value (paid by taker)
- **Daily Settlement**: 0.5% of mining rewards
- **Currency Conversion**: At execution using TWAP from top 3 exchanges

## Risk Transfer Model

| Risk Type | Miners | Investors | Insurers |
|-----------|---------|-----------|----------|
| **BTC Price Volatility** | ❌ Transferred | ✅ Accepted | Limited exposure |
| **Network Difficulty** | ❌ Transferred | ✅ Accepted | Limited exposure |
| **Block Reward Variance** | ❌ Transferred | ✅ Accepted | Limited exposure |
| **Operational Risk** | ✅ Retained | ❌ Protected (via collateral) | Full exposure |

## Collateral Mechanics

### Self-Insurance Model
- **Collateral Amount**: 110% of contract value in BTC
- **Release Schedule**: Linear daily release (1/n × collateral per day, n = contract days)
- **Delivery Requirement**: Miners must deliver X T/h daily to receive collateral back
- **Partial Delivery**: If miner delivers < required hashrate:
  - 1/n × collateral released to investor
  - Mining rewards from partial hashrate go to miner

## Development Considerations

### Current State
This is a documentation-only repository containing:
- Protocol specification documents
- UX design specifications
- Bitcoin hashprice analysis
- Whitepaper (draft v.04)

### No Active Codebase
- No source code files present
- No package managers or build tools configured
- No development environment setup
- This appears to be in the conceptual/planning phase

### Key Protocol Features to Implement
1. **Smart Contract Architecture** on ICP
2. **Order Matching Engine** with CLOB functionality
3. **Collateral Management System** with daily settlement
4. **Hashrate Oracle Integration**
5. **ckBTC Integration** for non-custodial Bitcoin handling
6. **Mining Pool Integration** (initially aggregator, later direct)

### Implementation Phases
1. **Phase 1 (Months 1-3)**: MVP with basic CLOB functionality
2. **Phase 2 (Months 4-6)**: Advanced analytics and API
3. **Phase 3 (Months 7-12)**: Smart pricing assistant and institutional tools

### Decentralization Roadmap
- **SNS (Service Nervous System)** implementation for DAO governance
- **$LKMN token** distribution via neuron mechanism
- **Incentive programs** using MPTS (Miner Points) and LPTS (Liquidity Provider Points)
- **Gradual transition** from core team to community governance

## Important Context

### Problem Being Solved
- Bitcoin mining centralization due to high capital requirements
- Limited access to capital for small-to-medium miners
- Fraudulent cloud mining operations (90%+ are scams)
- Need for liquidation-free financing solutions with high LTV

### Innovation Differentiators
1. **True Physical Delivery**: Hashrate delivered daily, not cash settled
2. **No Liquidation Risk**: Operational risk only, not market risk
3. **Self-Collateralized**: No third-party insurance needed
4. **Transparent Pricing**: All calculations visible and automated
5. **Fractional Accessibility**: Any size participant can engage

### Success Metrics (Phase 1)
- **Liquidity**: Bid-ask spread < 10%
- **Volume**: $100K monthly contract value
- **Participants**: 5+ active miners, 50+ investors
- **Efficiency**: 70%+ contracts successfully completed

## File Structure Context

```
/
├── loka-protocol-spec.md          # Core technical specification
├── loka-ux-fractional.md          # UX design for liquidation-free loans
├── bitcoin_hashprice.md           # Technical analysis of hashprice metrics
├── Loka Protocol Whitepaper v.04 [DRAFT] (1).pdf  # Comprehensive whitepaper
└── CLAUDE.md                      # This file
```

When working on this project, focus on understanding the novel financial primitive that transforms unproductive BTC reserves into working capital while maintaining exposure to Bitcoin's upside through hashrate-denominated contracts rather than currency-based lending.