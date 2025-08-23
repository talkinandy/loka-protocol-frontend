import React from "react"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"
import AnimatedGradientText from "@/components/magicui/animated-gradient-text"
import ShimmerButton from "@/components/magicui/shimmer-button"
import { MagicCard } from "@/components/magicui/magic-card"
import { AnimatedBeam, Circle } from "@/components/magicui/animated-beam"
import NumberTicker from "@/components/magicui/number-ticker"
import { BorderBeam } from "@/components/magicui/border-beam"
import BlurFade from "@/components/magicui/blur-fade"
import { ChevronRight, Shield, Zap, Globe, TrendingUp, Lock, Cpu, Users, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"

// Protocol Flow Component
function ProtocolFlow() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const minerRef = React.useRef<HTMLDivElement>(null);
  const protocolRef = React.useRef<HTMLDivElement>(null);
  const investorRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full mx-auto max-w-4xl h-[300px]">
      <div className="absolute inset-0 flex items-center justify-between px-12">
        <div ref={minerRef} className="flex flex-col items-center gap-3">
          <Circle className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-glow-orange">
            <Cpu className="h-5 w-5" />
          </Circle>
          <div className="text-center">
            <h4 className="font-semibold text-sm">Miners</h4>
            <p className="text-xs text-muted-foreground">Lock BTC collateral</p>
            <p className="text-xs text-green-500">Get immediate capital</p>
          </div>
        </div>

        <div ref={protocolRef} className="flex flex-col items-center gap-3">
          <Circle className="bg-gradient-to-br from-primary to-orange-500 text-white border-0 shadow-glow-orange">
            <Globe className="h-5 w-5" />
          </Circle>
          <div className="text-center">
            <h4 className="font-semibold text-sm">LOKA Protocol</h4>
            <p className="text-xs text-muted-foreground">T/h denominated contracts</p>
            <p className="text-xs text-primary">No liquidation risk</p>
          </div>
        </div>

        <div ref={investorRef} className="flex flex-col items-center gap-3">
          <Circle className="bg-gradient-to-br from-green-500 to-emerald-500 text-white border-0 shadow-glow-orange">
            <TrendingUp className="h-5 w-5" />
          </Circle>
          <div className="text-center">
            <h4 className="font-semibold text-sm">Investors</h4>
            <p className="text-xs text-muted-foreground">Buy discounted BTC</p>
            <p className="text-xs text-green-500">15-25% APY potential</p>
          </div>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={minerRef} toRef={protocolRef} gradientStartColor="#F74B37" gradientStopColor="#F5681B" />
      <AnimatedBeam containerRef={containerRef} fromRef={protocolRef} toRef={investorRef} gradientStartColor="#F5681B" gradientStopColor="#10B981" />
    </div>
  )
}

export function LandingPage() {
  const { setCurrentView } = useStore()

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
            <div className="text-center space-y-8">
              {/* Core Tagline */}
              <AnimatedGradientText className="inline-flex">
                <span className="animate-gradient bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                  🔒 Liquidation-Free Bitcoin Mining Loans
                </span>
              </AnimatedGradientText>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="block">Borrow Against BTC</span>
                  <span className="gradient-text">Repay with Hashrate</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The first decentralized protocol where miners collateralize their BTC to receive 
                  immediate capital, while investors buy Bitcoin at below-market rates through 
                  discounted mining production.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <ShimmerButton 
                  className="shadow-2xl"
                  onClick={() => setCurrentView('miners')}
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white">
                    I'm a Miner
                  </span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </ShimmerButton>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-hover border-white/10"
                  onClick={() => setCurrentView('lenders')}
                >
                  I'm an Investor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </BlurFade>
          
          {/* Protocol Flow Visualization */}
          <BlurFade delay={0.5} inView>
            <div className="mt-20">
              <ProtocolFlow />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Core Innovation Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                The <span className="gradient-text">Core Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                LOKA transforms unproductive BTC reserves into working capital while maintaining 
                exposure to Bitcoin's upside. By denominating contracts in hashrate rather than 
                currency, we eliminate volatility and liquidation risk.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-8">
            <BlurFade delay={0.3} inView>
              <MagicCard className="p-8 h-full" gradientColor="rgba(247, 75, 55, 0.1)">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Cpu className="h-6 w-6 text-primary" />
                  For Miners
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Get immediate liquidity without selling your Bitcoin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Lock in today's value, transfer hashprice risk to investors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>No margin calls or forced liquidations, ever</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Repay with daily mining rewards, not cash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>110% collateralized, released daily as you mine</span>
                  </li>
                </ul>
              </MagicCard>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <MagicCard className="p-8 h-full" gradientColor="rgba(16, 185, 129, 0.1)">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                  For Investors
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Buy Bitcoin at 10-25% below market price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Receive actual mining rewards daily in BTC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>110% BTC collateralized for security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Exposure to mining economics and BTC upside</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Transparent on-chain settlement</span>
                  </li>
                </ul>
              </MagicCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Simple, transparent, and liquidation-free
              </p>
            </div>
          </BlurFade>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Post Collateral",
                description: "Miners lock BTC collateral (110% of loan value) in smart contracts. This collateral is never liquidated.",
                icon: Lock
              },
              {
                step: "02",
                title: "Receive Capital",
                description: "Get immediate USDT or BTC at 100% of contract value. Use it for operations, expansion, or holding.",
                icon: Zap
              },
              {
                step: "03",
                title: "Repay with Mining",
                description: "Allocate hashrate for the contract duration. Investors receive daily mining rewards. Collateral released daily.",
                icon: Cpu
              }
            ].map((item, index) => (
              <BlurFade key={index} delay={0.25 + index * 0.15} inView>
                <div className="relative">
                  <div className="modern-card p-8 h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-primary mb-4 mt-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-t from-transparent to-background/50">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Key <span className="gradient-text">Differentiators</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What makes LOKA Protocol unique in the DeFi landscape
              </p>
            </div>
          </BlurFade>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "True Physical Delivery",
                description: "Hashrate delivered daily, not cash settled. Real mining rewards, real Bitcoin.",
                icon: Cpu,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "No Liquidation Risk",
                description: "Your BTC collateral is never sold. Only operational risk, not market risk.",
                icon: Shield,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Self-Collateralized",
                description: "No third-party insurance needed. Miners act as their own insurers.",
                icon: Lock,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Transparent Pricing",
                description: "All calculations visible on-chain. CLOB with real-time price discovery.",
                icon: TrendingUp,
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Fractional Access",
                description: "Start with just 1 TH/s. No need to buy entire mining machines.",
                icon: Users,
                gradient: "from-red-500 to-rose-500"
              },
              {
                title: "Automated Settlement",
                description: "Smart contracts handle daily settlements. No manual intervention needed.",
                icon: Zap,
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <BlurFade key={index} delay={0.25 + index * 0.1} inView>
                <MagicCard 
                  className="p-6 h-full cursor-pointer glass-hover"
                  gradientColor="rgba(247, 75, 55, 0.05)"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Available Capital", value: 487, suffix: " BTC", prefix: "" },
              { label: "Active Contracts", value: 234, suffix: "", prefix: "" },
              { label: "Default Rate", value: 0.3, suffix: "%", prefix: "" },
              { label: "Est. APY Range", value: "15-25", suffix: "%", prefix: "" }
            ].map((stat, index) => (
              <BlurFade key={index} delay={0.25 + index * 0.1} inView>
                <div className="modern-card p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <div className="text-3xl font-bold gradient-text">
                    {stat.prefix}
                    {typeof stat.value === 'number' ? (
                      <NumberTicker value={stat.value} />
                    ) : (
                      stat.value
                    )}
                    {stat.suffix}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
            <div className="modern-card p-8 border-orange-500/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Important: Variable Returns</h3>
                  <p className="text-muted-foreground mb-4">
                    When you fund a loan, you receive actual mining rewards which vary based on network 
                    difficulty, not fixed interest payments. Returns depend on Bitcoin mining economics.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-orange-500 mb-1">If difficulty increases:</p>
                      <p className="text-muted-foreground">Lower returns than estimated</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-500 mb-1">If difficulty decreases:</p>
                      <p className="text-muted-foreground">Higher returns than estimated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
            <div className="modern-card p-16 text-center relative overflow-hidden">
              <BorderBeam size={400} duration={12} delay={9} />
              <h2 className="text-4xl font-bold mb-4">
                Ready to Start?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the first liquidation-free Bitcoin mining finance protocol
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ShimmerButton 
                  className="shadow-2xl"
                  onClick={() => setCurrentView('marketplace')}
                >
                  <span className="text-base font-semibold">
                    View Loan Marketplace
                  </span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </ShimmerButton>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-hover border-white/10"
                >
                  Read Whitepaper
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}