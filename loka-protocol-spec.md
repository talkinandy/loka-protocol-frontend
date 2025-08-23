# LOKA Protocol: Technical Specification & Market Design

## Executive Summary

LOKA is a decentralized Bitcoin mining finance protocol that creates a liquid marketplace for hashrate contracts. Miners collateralize their future hashrate production with BTC to receive immediate capital, while investors acquire Bitcoin at below-market rates by purchasing discounted mining production.

## Core Innovation

**"Borrow against BTC, repay with hashrate"** - A liquidation-free lending model where miners use their BTC reserves as collateral and repay loans through hashrate delivery rather than currency.

## Protocol Architecture

### 1. Contract Structure

```
Mining Contract (T/h denominated)
├── Miners: Lock 110% BTC collateral, receive 100% upfront capital
├── Investors: Pay upfront, receive mining rewards + collateral if default
└── Settlement: Physical hashrate delivery daily
```

**Key Parameters:**
- **Denomination**: Terahash/second (T/h), NOT BTC or USD
- **Minimum Contract**: 1 TH/s with 0.0001 lot size increments
- **Collateral**: BTC (released daily upon hashrate delivery)
- **Duration**: 30, 90, 180, 365 days (standardized)
- **Settlement**: Daily hashrate verification + reward distribution

### 2. Risk Transfer Model

| Risk Type | Miners | Investors |
|-----------|---------|-----------|
| **BTC Price Volatility** | ❌ Transferred | ✅ Accepted |
| **Network Difficulty** | ❌ Transferred | ✅ Accepted |
| **Block Reward Variance** | ❌ Transferred | ✅ Accepted |
| **Operational Risk** | ✅ Retained | ❌ Protected (via collateral) |
| **Energy Price Risk** | ✅ Retained | ❌ None |

### 3. Collateral Mechanics

- **Self-Insurance Model**: Miners act as their own insurers
- **Collateral Amount**: 110% of contract value in BTC
- **Release Schedule**: Linear daily release (1/n × collateral per day, n = contract days)
- **Delivery Requirement**: Miners must deliver X T/h daily to receive collateral back
- **Partial Delivery**: If miner delivers < required hashrate:
  - 1/n × collateral released to investor
  - Mining rewards from partial hashrate go to miner
  - Example: Contract requires 10 T/h, miner delivers 8 T/h → investor gets collateral, miner keeps rewards from 8 T/h

## Market Design

### 1. Price Discovery Mechanism

**Central Limit Order Book (CLOB) with:**
- Continuous double auction
- Price-time priority (First Come First Served)
- Fractional order support (0.0001 lot size minimum)
- Cross-collateral required for order placement

### 2. Fee Structure

**Protocol Fees:**
- **Contract Initiation**: 0.2% of contract value (paid by taker)
- **Daily Settlement**: 0.5% of mining rewards
- **Currency Conversion**: At execution using TWAP from top 3 exchanges, costs borne by taker
- **Distribution**: Fees distributed to token holders via ve (vote-escrowed) mechanism

### 3. Reference Pricing

```
Base Reference: Luxor Hashprice Index (BTC/TH/day)
├── Real-time updates with each block
├── 144-block moving average for fee smoothing
└── Projected forward curve using difficulty adjustments
```

### 4. Visual Pricing Interface

```
    ┌─────────────────────────────────────────────────────────────┐
    │                    HASHPRICE DASHBOARD                      │
    ├─────────────────────────────────────────────────────────────┤
    │                                                             │
    │  Current Reference (On-chain Calculated)                   │
    │  ● 0.00000120 BTC/TH/day                                   │
    │                                                             │
    │  Projected Hashprice by Contract Length                    │
    │  ├─ 30 days:  0.00000115 BTC/TH/day (-4.2%)              │
    │  ├─ 90 days:  0.00000108 BTC/TH/day (-10%)               │
    │  ├─ 180 days: 0.00000102 BTC/TH/day (-15%)               │
    │  └─ 365 days: 0.00000096 BTC/TH/day (-20%)               │
    │                                                             │
    │  ┌─────────────────────────────────────────────┐           │
    │  │         Price Band Visualization            │           │
    │  │                                              │           │
    │  │  0.00000120 ━━━━━━━━━━━━━━━━━━━━━  Reference │           │
    │  │  0.00000108 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  90d Proj.  │           │
    │  │  0.00000105 ░░░░░░░░░░░░░░░░░░░  Recommended │           │
    │  │             ↑        ↑        ↑              │           │
    │  │           Miners  Optimal  Investors         │           │
    │  └─────────────────────────────────────────────┘           │
    │                                                             │
    │  Recommendations by Contract Length:                       │
    │  🎯 30d:  Miners: -5 to -7%  | Investors: -7 to -10%      │
    │  🎯 90d:  Miners: -10 to -12% | Investors: -12 to -15%    │
    │  🎯 180d: Miners: -15 to -17% | Investors: -17 to -20%    │
    │  🎯 365d: Miners: -20 to -22% | Investors: -22 to -25%    │
    │                                                             │
    ├─────────────────────────────────────────────────────────────┤
    │                  ORDER BOOK DEPTH                           │
    │                                                             │
    │  ASK (Miners Selling)              BID (Investors Buying)  │
    │  0.00000108 │████████              0.00000102 │████████████│
    │  0.00000105 │██████                0.00000099 │████████    │
    │  0.00000102 │████                  0.00000096 │██████      │
    │                                                             │
    │  Spread: 2.5% | Mid-Market: 0.00000104                     │
    └─────────────────────────────────────────────────────────────┘
```

### 5. Automated Calculations

**For Miners:**
- Discount percentage from reference
- Required collateral: 110% of contract value in BTC
- Effective capital efficiency: 90.9% (get 100% with 110% collateral)
- Daily collateral release amount (1/n × total collateral)

**For Investors:**
- Projected BTC accumulation over contract period
- Implied APY vs spot purchase
- Break-even scenarios
- Daily BTC receipt estimate

**Example Calculation Display:**
```
Your Position: 100 TH/s for 90 days at 0.00000105 BTC/TH/day

MINER PERSPECTIVE:
• Contract Value: 0.945 BTC (100 TH × 90 days × 0.00000105)
• Collateral Required: 1.040 BTC (110% of contract)
• Upfront Payment: 0.945 BTC (100% of contract)
• Daily Collateral Release: 0.0116 BTC (if hashrate delivered)
• Net Capital Efficiency: 90.9%

INVESTOR PERSPECTIVE:
• Investment: 0.945 BTC (or equivalent in stablecoin)
• Expected BTC Return: 1.080 BTC (at current difficulty)
• Implied APY: 45.2%
• Daily BTC Receipt: ~0.012 BTC (varies with network)
```

## Technical Implementation

### 1. Smart Contract Architecture

Built on Internet Computer Protocol (ICP):
- **ckBTC**: Chain-key Bitcoin for non-custodial BTC handling
- **Settlement**: Every 24 hours with on-chain verification
- **Hashrate Recording**: Real-time monitoring with hourly aggregation
- **Oracle System**: Multiple mining pool verification with averaging

### 2. Order Matching Engine

```javascript
// Simplified matching logic
function matchOrders() {
  // Verify cross-collateral before matching
  requireCrossCollateral(ask.miner, ask.value * 1.1);
  
  sortAsks(byPriceThenTime);  // Lowest price, earliest time
  sortBids(byPriceThenTime);   // Highest price, earliest time
  
  while (asks[0].price <= bids[0].price) {
    executeTrade(asks[0], bids[0]);
    updateOrderBook();
  }
}
```

### 3. Collateral Management

```javascript
// Daily collateral release
function dailySettlement(contract) {
  const dailyCollateral = contract.totalCollateral / contract.durationDays;
  
  if (hashrateDelivered >= contract.requiredHashrate) {
    // Full delivery: miner gets collateral back
    releaseCollateral(dailyCollateral, contract.miner);
    distributeRewards(contract.miningRewards, contract.investor);
  } else {
    // Partial/no delivery: investor gets collateral
    releaseCollateral(dailyCollateral, contract.investor);
    // Miner keeps rewards from partial hashrate delivered
    if (hashrateDelivered > 0) {
      const partialRewards = (hashrateDelivered / contract.requiredHashrate) * contract.miningRewards;
      distributeRewards(partialRewards, contract.miner);
    }
  }
}
```

## Market Dynamics

### 1. Equilibrium Pricing

Expected discount range: **10-20% below reference hashprice**

Factors affecting spread:
- Miner operational efficiency
- Market liquidity depth
- Difficulty projections
- BTC price volatility

### 2. Participant Incentives

**Miners participate when:**
- Need immediate liquidity
- Extremely bullish on BTC (don't want to sell)
- Have excess BTC reserves for collateral
- Tax optimization (borrowing vs selling)
- **Verification Required**: Must post cross-collateral when placing asks

**Investors participate when:**
- Want BTC exposure below spot price
- Seeking yield on BTC holdings (converted to stablecoin upfront, accumulating BTC daily)
- Seeking yield on stablecoin/fiat
- Believe in mining economics
- Portfolio diversification
- Want to accumulate more BTC than initial holdings over contract duration

### 3. Secondary Effects

- **No liquidation cascades** (unlike traditional DeFi)
- **Natural efficiency filter** (inefficient miners priced out)
- **Transparent price discovery** (all costs visible)
- **Reduced mining centralization** (small miners access capital)

## User Interface Specifications

### Core Dashboard Elements

1. **Reference Price Display**
   - Current Luxor hashprice (BTC/TH/day)
   - 24h change percentage
   - Projected difficulty adjustment

2. **Order Book Visualization**
   - Depth chart (visual)
   - Order list (tabular)
   - Spread indicator

3. **Position Builder**
   - Slider for price selection
   - Auto-calculated metrics
   - One-click order placement

4. **Portfolio View**
   - Active contracts
   - Performance metrics
   - Collateral status

## Launch Strategy

### Phase 1: MVP (Months 1-3)
- Basic CLOB functionality
- Standard contract durations
- Manual price discovery
- Core calculations
- **Bootstrap Strategy**:
  - Partner with 3-5 anchor miners
  - Zero fees for first 100 contracts
  - Seed liquidity from protocol treasury

### Phase 2: Growth (Months 4-6)
- Advanced analytics
- Historical data charts
- API for algorithmic trading
- Mobile interface

### Phase 3: Maturity (Months 7-12)
- Smart pricing assistant (with sufficient data)
- Cross-margin features
- Institutional tools
- Market maker program (if needed)

## Key Differentiators

1. **True Physical Delivery**: Hashrate delivered daily, not cash settled
2. **No Liquidation Risk**: Operational risk only, not market risk
3. **Self-Collateralized**: No third-party insurance needed
4. **Transparent Pricing**: All calculations visible and automated
5. **Fractional Accessibility**: Any size participant can engage

## Success Metrics

### Phase 1 (Months 1-3)
- **Liquidity**: Bid-ask spread < 10%
- **Volume**: $100K monthly contract value
- **Participants**: 5+ active miners, 50+ investors
- **Efficiency**: 70%+ contracts successfully completed

### Phase 2 (Months 4-6)
- **Liquidity**: Bid-ask spread < 5%
- **Volume**: $1M monthly contract value
- **Participants**: 20+ active miners, 200+ investors
- **Efficiency**: 85%+ contracts successfully completed

### Phase 3 (Months 7-12)
- **Liquidity**: Bid-ask spread < 3%
- **Volume**: $10M+ monthly contract value
- **Participants**: 100+ active miners, 1000+ investors
- **Efficiency**: 90%+ contracts successfully completed
- **Decentralization**: No single miner > 20% of volume

## Competitive Landscape

### Direct Competitors Comparison

| Feature | LOKA | NiceHash | Compass Mining | Cloud Mining |
|---------|------|----------|----------------|--------------|
| **Model** | Forward contracts | Spot marketplace | Hardware hosting | Profit sharing |
| **Settlement** | Physical delivery | Immediate | N/A | Cash only |
| **Collateral** | 110% BTC locked | None | None | None (trust-based) |
| **Price Discovery** | CLOB with spreads | Order matching | Fixed pricing | Opaque |
| **Custody** | Non-custodial | Custodial | Physical custody | Full custody |
| **Minimum Size** | 1 TH/s | 0.001 TH/s | Full ASIC | Varies |
| **Contract Length** | 30-365 days | On-demand | 6-36 months | 1-3 years |
| **Default Risk** | Eliminated via collateral | Counterparty risk | Equipment risk | Platform risk |
| **Transparency** | On-chain verifiable | Platform reported | Self-reported | Often opaque |

### Key Differentiators

**vs NiceHash:**
- LOKA offers forward pricing (lock in future rates) vs spot only
- Non-custodial with collateral vs custodial trust model
- Investors get actual BTC rewards vs cash settlement

**vs Compass Mining:**
- No hardware purchase required
- Fractional participation (1 TH/s vs whole machines)
- Instant liquidity vs 6-month commitments

**vs Traditional Cloud Mining:**
- Verifiable on-chain hashrate delivery
- Collateralized security (no Ponzi risk)
- Transparent pricing via CLOB
- No platform custody risk

## Risk Considerations

1. **Adverse Selection**: Failing miners most incentivized to participate
2. **Difficulty Spikes**: Investors bear full network risk (though 50% sudden spike is unrealistic)
3. **Regulatory**: Potential securities classification - may require accredited investor verification
4. **Technical**: Smart contract bugs, oracle failures
5. **Market**: Insufficient liquidity in early stages
6. **BTC Price Crash**: If BTC price drops significantly mid-contract, miners may find it economically rational to abandon contracts as their remaining collateral obligation (in USD terms) becomes less than operational costs. This is part of investor risk profile.

## Conclusion

LOKA creates a novel financial primitive that transforms unproductive BTC reserves into working capital while maintaining exposure to Bitcoin's upside. By denominating contracts in hashrate rather than currency, the protocol elegantly sidesteps volatility while creating natural hedges for both sides of the market.

The visual, automated interface removes complexity barriers, while the self-collateralization model eliminates counterparty risk. This positions LOKA to become the "CME of hashrate" - a fundamental infrastructure layer for Bitcoin mining finance.

---

*This document represents the current design consensus and will evolve as the protocol develops.*