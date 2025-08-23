# LOKA Protocol UX Design - Liquidation-Free Bitcoin Mining Loans

## Core Concept: "Borrow Against BTC, Repay with Hashrate"

**Miner Tagline:** "Get liquidation-free loans. Keep your Bitcoin. Repay with mining."
**Lender Tagline:** "Earn 15-25% APY paid in Bitcoin mining rewards."

## 1. Landing Page - Available Loans

### Main Dashboard

```
┌────────────────────────────────────────────────────────────────────────┐
│ LOKA - LIQUIDATION-FREE MINING LOANS                 BTC: $67,432     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │         🔒 NO MARGIN CALLS • NO LIQUIDATIONS • NO STRESS        │ │
│ │    Borrow against your BTC, repay with daily mining rewards     │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │                    LOAN MARKETPLACE                             │ │
│ │                                                                  │ │
│ │  Available Capital: 487 BTC ($32,839,384)                       │ │
│ │  Active Loans: 234                                              │ │
│ │  Est. Returns: 15-25%* (*varies with mining difficulty)         │ │
│ │  Default Rate: 0.3%                                             │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ FOR MINERS - GET A LOAN:                                              │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │                                                                  │ │
│ │  Quick Loan Calculator:                                         │ │
│ │  ┌──────────────────────────────────────────────┐              │ │
│ │  │ I want to borrow: [5] BTC ($337,160)         │              │ │
│ │  │ My hashrate: [1000] TH/s                     │              │ │
│ │  └──────────────────────────────────────────────┘              │ │
│ │                                                                  │ │
│ │  Your Loan Terms:                                               │ │
│ │  • Collateral Required: 5.5 BTC (110% LTV)                     │ │
│ │  • Repayment: Daily mining rewards (variable)                  │ │
│ │  • Estimated Cost: ~18% if hashprice stable*                   │ │
│ │  • Loan Duration: 90 days                                       │ │
│ │  • Total Repayment: Mining production value                    │ │
│ │                                                                  │ │
│ │  *Actual cost depends on mining difficulty changes              │ │
│ │                                                                  │ │
│ │  ✅ No liquidation risk - keep your collateral safe            │ │
│ │  ✅ Repay with mining rewards, not cash                        │ │
│ │  ✅ Get funds immediately upon approval                        │ │
│ │                                                                  │ │
│ │  [GET LOAN TERMS →]                                            │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ FOR LENDERS - FUND LOANS:                                             │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │                                                                  │ │
│ │  ⚡ BEST LOAN OPPORTUNITIES                                     │ │
│ │                                                                  │ │
│ │  Loan Request #L-4821                                          │ │
│ │  Borrower Hashrate: 2000 TH/s | Pool Balance: 45.2 BTC         │ │
│ │  Requesting: 8.1 BTC | Collateral: 8.9 BTC (110%)             │ │
│ │  Your Returns: ~22% if difficulty stable*                      │ │
│ │  Paid in: Daily mining rewards (variable BTC)                  │ │
│ │  [FUND THIS LOAN]                                              │ │
│ │                                                                  │ │
│ │  Loan Request #L-4835                                          │ │
│ │  Borrower Hashrate: 500 TH/s | Pool Balance: 12.3 BTC          │ │
│ │  Requesting: 2.0 BTC | Collateral: 2.2 BTC (110%)             │ │
│ │  Your Returns: ~19% if difficulty stable*                      │ │
│ │  Paid in: Daily mining rewards (variable BTC)                  │ │
│ │  [FUND THIS LOAN]                                              │ │
│ │                                                                  │ │
│ │  *Returns = actual mining rewards, vary with network difficulty │ │
│ │                                                                  │ │
│ │  [VIEW ALL LOAN REQUESTS →]                                    │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

## 2. Miner Flow - Getting a Loan

### Loan Application

```
┌────────────────────────────────────────────────────────────────────────┐
│ GET A LIQUIDATION-FREE LOAN                                           │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ STEP 1: LOAN AMOUNT & TERMS                                           │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ How much capital do you need?                                   │ │
│ │ ┌─────────────────────────────────────┐                        │ │
│ │ │ [10] BTC  (~$674,320)                │                        │ │
│ │ └─────────────────────────────────────┘                        │ │
│ │                                                                  │ │
│ │ Loan Duration: 90 days (standard term)                          │ │
│ │                                                                  │ │
│ │ Interest Rate Options:                                           │ │
│ │ ◉ Market Rate (~18% discount) - Fastest approval                │ │
│ │ ○ Custom Rate: [___]% discount - May take longer                │ │
│ │                                                                  │ │
│ │ 📊 How Rates Work:                                              │ │
│ │ • You lock in today's value                                     │ │
│ │ • Repay with future mining (whatever it produces)               │ │
│ │ • Higher discount = more attractive to lenders                  │ │
│ │ • Current market: 15-25% discount range                         │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ STEP 2: COLLATERAL FROM YOUR BALANCE                                  │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 🔒 YOUR COLLATERAL (NEVER LIQUIDATED)                          │ │
│ │                                                                  │ │
│ │ Your Mining Pool Balance: 24.5 BTC ($1,651,084)                 │ │
│ │ Required Collateral: 11.0 BTC (110% of loan)                    │ │
│ │ Remaining Balance: 13.5 BTC (still yours)                       │ │
│ │                                                                  │ │
│ │ ✅ Sufficient balance for this loan                             │ │
│ │                                                                  │ │
│ │ How collateral works:                                           │ │
│ │ • Locked for 90 days (no liquidation risk)                     │ │
│ │ • Released daily as you repay with mining                       │ │
│ │ • Fully returned at loan completion                             │ │
│ │ • Never sold, always yours                                      │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ STEP 3: REPAYMENT THROUGH MINING                                      │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ 📊 YOUR REPAYMENT STRUCTURE                                     │ │
│ │                                                                  │ │
│ │ Your Hashrate: 2500 TH/s                                        │ │
│ │ Current Daily Mining: ~0.120 BTC (at today's difficulty)        │ │
│ │                                                                  │ │
│ │ How Repayment Works:                                            │ │
│ │ • You allocate 2500 TH/s for 90 days                           │ │
│ │ • Lender receives ALL mining rewards from this hashrate        │ │
│ │ • Amount varies daily with network difficulty                   │ │
│ │                                                                  │ │
│ │ Projected Repayment (if difficulty stable):                     │ │
│ │ • Total mining value: ~10.8 BTC over 90 days                   │ │
│ │ • You received: 10.0 BTC upfront                               │ │
│ │ • Effective cost: ~8% for capital                              │ │
│ │                                                                  │ │
│ │ Risk Transfer:                                                  │ │
│ │ ✅ You get: Guaranteed 10 BTC today                            │ │
│ │ ✅ Lender gets: Whatever 2500 TH/s mines for 90 days           │ │
│ │ ✅ If difficulty rises: Lender gets less, you're protected     │ │
│ │ ✅ If difficulty falls: Lender gets more, you locked value     │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ STEP 4: REVIEW & CONFIRM                                              │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ LOAN SUMMARY                                                    │ │
│ │                                                                  │ │
│ │ You Receive: 10.0 BTC ($674,320) immediately                    │ │
│ │ Collateral: 11.0 BTC (locked, never liquidated)                 │ │
│ │ Repayment: 2500 TH/s mining for 90 days                        │ │
│ │ Estimated Value: ~10.8 BTC (varies with difficulty)             │ │
│ │                                                                  │ │
│ │ THE TRADE-OFF:                                                  │ │
│ │ • You get: Certainty (10 BTC guaranteed today)                 │ │
│ │ • Lender gets: Mining upside/downside risk                     │ │
│ │ • Your protection: No liquidation, ever                        │ │
│ │                                                                  │ │
│ │ USE OF FUNDS:                                                   │ │
│ │ ☑ New mining equipment                                          │ │
│ │ ☑ Operational expenses                                          │ │
│ │ ☑ Facility expansion                                            │ │
│ │ ☑ Keep BTC reserves intact                                      │ │
│ │                                                                  │ │
│ │ PROTECTION:                                                     │ │
│ │ ✅ No margin calls                                              │ │
│ │ ✅ No forced liquidations                                       │ │
│ │ ✅ Collateral always returned                                   │ │
│ │ ✅ Repay with mining, not cash                                  │ │
│ │                                                                  │ │
│ │ [SUBMIT LOAN REQUEST]                                           │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Active Loan Management

```
┌────────────────────────────────────────────────────────────────────────┐
│ MY LOANS                                       Total Borrowed: 32 BTC │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ LOAN #L-4821                               Day 45/90            │ │
│ │                                                                  │ │
│ │ Borrowed: 10.0 BTC ($674,320)                                   │ │
│ │ Collateral: 11.0 BTC (locked)                                   │ │
│ │ Interest Rate: 18% APR                                          │ │
│ │                                                                  │ │
│ │ ┌──────────────────────────────────────────────────┐           │ │
│ │ │  REPAYMENT PROGRESS                               │           │ │
│ │ │  [█████████████████░░░░░░░░░░░░░░] 50%           │           │ │
│ │ │  45 days complete | 45 days remaining             │           │ │
│ │ └──────────────────────────────────────────────────┘           │ │
│ │                                                                  │ │
│ │ Repayment Status:                                               │ │
│ │ • Mining Allocated: 2500 TH/s for 90 days                      │ │
│ │ • Days Complete: 45/90                                          │ │
│ │ • Mining Delivered: ~5.4 BTC (actual rewards)                   │ │
│ │ • Estimated Total: ~10.8 BTC by day 90                          │ │
│ │ • Performance: 100% hashrate delivery                           │ │
│ │                                                                  │ │
│ │ Collateral Status:                                              │ │
│ │ • Released: 5.5 BTC (back to your balance)                     │ │
│ │ • Still Locked: 5.5 BTC                                        │ │
│ │ • Daily Release: 0.122 BTC                                     │ │
│ │                                                                  │ │
│ │ [VIEW DETAILS]  [REPAYMENT HISTORY]                            │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │              DAILY CASHFLOW SUMMARY                             │ │
│ │                                                                  │ │
│ │  Mining Revenue:      +0.182 BTC                                │ │
│ │  Loan Repayments:     -0.131 BTC                                │ │
│ │  Collateral Release:  +0.122 BTC                                │ │
│ │  ─────────────────────────────────                             │ │
│ │  Net Daily:           +0.173 BTC ($11,666)                     │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

## 3. Lender Flow - Funding Loans

### Browse Loan Requests

```
┌────────────────────────────────────────────────────────────────────────┐
│ FUND MINING LOANS                              Available: 47 requests │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ FILTER LOAN REQUESTS                                            │ │
│ │                                                                  │ │
│ │ APY Range: [15]% - [25]%                                        │ │
│ │ Loan Size: [1] - [50] BTC                                       │ │
│ │ Sort by: ◉ APY (Highest) ○ Size ○ Newest                      │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ LOAN REQUEST #L-5012              Est. ~24% Returns*            │ │
│ │                                                                  │ │
│ │ Borrower Stats:                                                 │ │
│ │ • Hashrate: 3,500 TH/s (verified)                              │ │
│ │ • Pool Balance: 67.3 BTC                                        │ │
│ │ • Mining History: 18 months                                     │ │
│ │ • Previous Loans: 3 (all repaid)                               │ │
│ │                                                                  │ │
│ │ Loan Details:                                                   │ │
│ │ • Requesting: 15.0 BTC ($1,011,480)                            │ │
│ │ • Collateral: 16.5 BTC (110% secured)                          │ │
│ │ • Duration: 90 days                                             │ │
│ │                                                                  │ │
│ │ What You Get:                                                   │ │
│ │ • 3,500 TH/s mining output for 90 days                         │ │
│ │ • Estimated value: ~18.6 BTC (if difficulty stable)            │ │
│ │ • Daily payments: Variable BTC from mining                     │ │
│ │ • Your cost: 15.0 BTC upfront                                  │ │
│ │ • Estimated return: ~24% (18.6/15.0 - 1)                       │ │
│ │                                                                  │ │
│ │ *Actual returns depend on:                                      │ │
│ │ • Network difficulty changes                                    │ │
│ │ • Transaction fee variations                                    │ │
│ │ • Block finding variance                                        │ │
│ │                                                                  │ │
│ │ Amount to Fund: [15.0] BTC                                      │ │
│ │                                                                  │ │
│ │ [FUND THIS LOAN - GET MINING REWARDS]                          │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │ LOAN REQUEST #L-5008              ⚡ 20% APY                    │ │
│ │                                                                  │ │
│ │ Borrower Stats:                                                 │ │
│ │ • Hashrate: 1,200 TH/s (verified)                              │ │
│ │ • Pool Balance: 24.5 BTC                                        │ │
│ │ • Mining History: 8 months                                      │ │
│ │ • Previous Loans: 1 (repaid)                                   │ │
│ │                                                                  │ │
│ │ Loan Details:                                                   │ │
│ │ • Requesting: 8.0 BTC ($539,456)                               │ │
│ │ • Collateral: 8.8 BTC (110% secured)                           │ │
│ │ • Your Return: 20% APY                                          │ │
│ │                                                                  │ │
│ │ [VIEW DETAILS]                                                  │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Lender Portfolio

```
┌────────────────────────────────────────────────────────────────────────┐
│ MY LENDING PORTFOLIO                           Total Funded: 84 BTC   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │                    PORTFOLIO OVERVIEW                           │ │
│ │                                                                  │ │
│ │  Active Loans: 12                                               │ │
│ │  Total Funded: 84.0 BTC ($5,664,288)                           │ │
│ │  Est. Returns: ~19.3%* (*based on current difficulty)           │ │
│ │  Daily Income: ~0.444 BTC (varies with mining)                  │ │
│ │  Total Earned: 18.7 BTC (actual mining rewards)                 │ │
│ │                                                                  │ │
│ │  Performance vs Estimates:                                      │ │
│ │  • Expected at funding: 17.2 BTC                               │ │
│ │  • Actually received: 18.7 BTC                                 │ │
│ │  • Variance: +8.7% (difficulty decreased)                      │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │                    ACTIVE LOANS                                 │ │
│ │                                                                  │ │
│ │  Loan #L-4821          Day 45/90          22% APY              │ │
│ │  Funded: 10 BTC       Daily: 0.061 BTC    Status: ✅ On-time   │ │
│ │                                                                  │ │
│ │  Loan #L-4763          Day 72/90          19% APY              │ │
│ │  Funded: 5 BTC        Daily: 0.026 BTC    Status: ✅ On-time   │ │
│ │                                                                  │ │
│ │  Loan #L-4698          Day 12/90          24% APY              │ │
│ │  Funded: 15 BTC       Daily: 0.099 BTC    Status: ✅ On-time   │ │
│ │                                                                  │ │
│ │  [VIEW ALL LOANS]                                               │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │                    DAILY INCOME STREAM                          │ │
│ │                                                                  │ │
│ │  Yesterday's Income: 0.447 BTC ($30,142)                       │ │
│ │  ├─ Loan #L-4821: 0.061 BTC                                    │ │
│ │  ├─ Loan #L-4763: 0.026 BTC                                    │ │
│ │  ├─ Loan #L-4698: 0.099 BTC                                    │ │
│ │  └─ 9 other loans: 0.261 BTC                                   │ │
│ │                                                                  │ │
│ │  Monthly Average: 13.32 BTC ($898,178)                         │ │
│ │  Annual Projection: 162.1 BTC ($10,929,667)                    │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

## 4. Mobile Experience

### Mobile - Miner View

```
┌─────────────────────┐
│ LOKA            ☰   │
├─────────────────────┤
│                     │
│ MY LOANS            │
│                     │
│ Borrowed: 32 BTC    │
│ Collateral: 35 BTC  │
│                     │
├─────────────────────┤
│ ACTIVE LOAN         │
│                     │
│ 10 BTC received     │
│ Repaying: 2500 TH/s │
│ Day 45/90           │
│ [██████░░░] 50%     │
│                     │
│ Today's repayment:  │
│ ~0.120 BTC (mining) │
│ *varies daily       │
│                     │
│ Collateral:         │
│ 5.5/11 BTC released │
│                     │
├─────────────────────┤
│ NEED CAPITAL?       │
│                     │
│ Balance: 18 BTC     │
│ Can borrow: 16 BTC  │
│                     │
│ [GET NEW LOAN]      │
└─────────────────────┘
```

### Mobile - Lender View

```
┌─────────────────────┐
│ LOKA            ☰   │
├─────────────────────┤
│                     │
│ MY PORTFOLIO        │
│                     │
│ Funded: 84 BTC      │
│ Est Return: ~19%*   │
│ *varies w/ mining   │
│                     │
├─────────────────────┤
│ TODAY'S REWARDS     │
│                     │
│ +0.444 BTC          │
│ $29,940             │
│ (actual mining)     │
│                     │
├─────────────────────┤
│ NEW OPPORTUNITY     │
│                     │
│ ~24% est. return    │
│ 15 BTC loan         │
│ 110% secured        │
│                     │
│ You get: mining     │
│ rewards for 90d     │
│                     │
│ [FUND NOW]          │
├─────────────────────┤
│ [BROWSE LOANS]      │
└─────────────────────┘
```

## 5. Key Messaging Throughout

### For Miners
- "Lock in guaranteed value today"
- "No margin calls, ever"
- "Transfer mining risk to lenders"
- "Your BTC stays yours"
- "Get capital without selling Bitcoin"

### For Lenders
- "Buy mining production at a discount"
- "Earn actual mining rewards"
- "Returns vary with network difficulty"
- "110% collateralized protection"
- "Not fixed returns - real mining economics"

## 6. Critical UX Principles

### The Loan Narrative
- **Always** frame as loans, not sales
- **Always** emphasize "liquidation-free"
- **Always** show collateral is never sold
- **Always** highlight repayment via mining

### Trust Through Transparency
- Show exact collateral amounts
- Display daily repayment schedules
- Clear APY/interest calculations
- Mining hashrate verification

### Simplicity First
- "Borrow BTC, repay with mining" - that's it
- Don't complicate with "offers" or "contracts"
- It's a loan platform, period

### Protection Emphasized
- No margin calls (repeat often)
- No forced liquidations (key differentiator)
- Collateral always returned
- 110% secured for lenders

## 7. Notifications

### For Miners
```
"✅ Loan approved! 10 BTC transferred to your wallet"
"📊 Daily mining allocated: 2500 TH/s to lender"
"🔓 Collateral released: 0.122 BTC back to your balance"
"🎯 50% complete! 45 days remaining on your loan"
"💪 Loan complete! All collateral returned"
"📈 You locked in 10 BTC before difficulty increased 5%"
```

### For Lenders
```
"💰 Mining rewards received: 0.121 BTC from Loan #L-4821"
"📊 Today's returns above estimate! (+4% vs projection)"
"🔥 New loan: ~24% estimated returns available"
"✅ Loan #L-4763 complete - received 12.3 BTC total"
"⚠️ Network difficulty +3% - returns adjusting"
"📈 Portfolio actual: 19.8% vs 18.2% estimated"
```

## 8. Onboarding

### New Miner Onboarding

```
┌────────────────────────────────────────────────────────────────────────┐
│ WELCOME TO LIQUIDATION-FREE MINING LOANS                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ ┌──────────────────────────────────────────────────────────────────┐ │
│ │          HOW IT WORKS - SIMPLE AS 1-2-3                        │ │
│ │                                                                  │ │
│ │  1️⃣ BORROW                                                      │ │
│ │     Use your BTC as collateral                                  │ │
│ │     Get capital immediately                                     │ │
│ │     Lock in today's value                                       │ │
│ │                                                                  │ │
│ │  2️⃣ REPAY WITH MINING                                           │ │
│ │     Allocate hashrate for loan duration                         │ │
│ │     Lender gets actual mining rewards                           │ │
│ │     Amount varies with network difficulty                       │ │
│ │                                                                  │ │
│ │  3️⃣ COMPLETE                                                    │ │
│ │     After 90 days, obligation ends                              │ │
│ │     Collateral fully returned                                   │ │
│ │     No liquidation risk ever                                    │ │
│ │                                                                  │ │
│ │  THE KEY INNOVATION:                                            │ │
│ │  ❌ Traditional DeFi: Liquidation if BTC price drops            │ │
│ │  ✅ LOKA: Never liquidated, repay with mining output           │ │
│ │                                                                  │ │
│ │  WHO TAKES WHAT RISK:                                          │ │
│ │  • Miners: Transfer hashprice risk, get certainty              │ │
│ │  • Lenders: Accept mining variance, get potential upside       │ │
│ │                                                                  │ │
│ │  [GET YOUR FIRST LOAN]  [LEARN MORE]                           │ │
│ └──────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

## 9. Risk Disclosure Section (Required on All Pages)

### Standard Risk Disclosure Banner

```
┌────────────────────────────────────────────────────────────────────────┐
│ ⚠️ IMPORTANT: Returns are Variable, Not Fixed                          │
│                                                                        │
│ When you fund a loan, you receive actual mining rewards which vary    │
│ based on network difficulty, not fixed interest payments.             │
│                                                                        │
│ • If difficulty increases → Lower returns than estimated              │
│ • If difficulty decreases → Higher returns than estimated             │
│ • All displayed percentages are estimates based on current conditions  │
│                                                                        │
│ [Understand the Risks]  [View Historical Variance]                    │
└────────────────────────────────────────────────────────────────────────┘
```

### Detailed Risk Explanation (Help Modal)

```
┌────────────────────────────────────────────────────────────────────────┐
│ UNDERSTANDING MINING LOANS                                            │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ HOW THESE LOANS DIFFER FROM TRADITIONAL LENDING:                      │
│                                                                        │
│ Traditional Loan:                                                     │
│ • Lender gives $100                                                   │
│ • Borrower repays $110 (fixed)                                        │
│ • Return: Guaranteed 10%                                              │
│                                                                        │
│ LOKA Mining Loan:                                                     │
│ • Lender gives 10 BTC                                                 │
│ • Borrower allocates mining hashrate                                  │
│ • Lender receives whatever that hashrate mines                        │
│ • Return: Variable (~15-25% historically)                             │
│                                                                        │
│ WHO SHOULD USE THIS:                                                  │
│                                                                        │
│ Miners: ✅ Perfect if you want:                                       │
│ • Guaranteed capital today                                            │
│ • Protection from difficulty increases                                │
│ • To keep your BTC holdings                                          │
│                                                                        │
│ Lenders: ✅ Perfect if you:                                           │
│ • Understand mining economics                                         │
│ • Accept variable returns                                             │
│ • Want exposure to mining rewards                                     │
│                                                                        │
│ Lenders: ❌ Not for you if:                                           │
│ • You need guaranteed fixed returns                                   │
│ • You don't understand mining difficulty                              │
│ • You can't accept return variance                                    │
│                                                                        │
│ [I Understand]  [Learn More About Mining]                             │
└────────────────────────────────────────────────────────────────────────┘
```

This complete redesign maintains the accessible "loan" framing while being completely transparent about the variable nature of returns. The key improvements:

1. **No Fixed APR Claims**: Everything is "estimated" or "~approximate"
2. **Clear Risk Transfer**: Explicitly states who takes what risk
3. **Variable Returns Emphasized**: "Actual mining rewards" not "fixed payments"
4. **Transparent Mechanics**: Shows that lenders get "whatever the hashrate mines"
5. **Risk Disclosure**: Prominent warnings about variable returns
6. **Educational**: Helps users understand this is mining production financing, not traditional lending

The narrative remains simple ("get a loan, repay with mining") but now accurately represents the economic reality of the protocol.