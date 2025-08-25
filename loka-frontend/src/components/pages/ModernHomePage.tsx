import React from 'react';
import { useStore } from '@/store/useStore';
import { mockData } from '@/services/mockData';
import { ArrowRight, Shield, Zap, TrendingUp, Calculator, Cpu, Lock } from 'lucide-react';
import AnimatedGradientText from '@/components/magicui/animated-gradient-text';
import { BentoGrid, BentoGridItem } from '@/components/magicui/bento-grid';
import { MagicCard } from '@/components/magicui/magic-card';
import NumberTicker from '@/components/magicui/number-ticker';
import ShimmerButton from '@/components/magicui/shimmer-button';
import RippleButton from '@/components/magicui/ripple-button';
import BlurFade from '@/components/magicui/blur-fade';
import { GridPattern } from '@/components/magicui/grid-pattern';
import { Particles } from '@/components/magicui/particles';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const ModernHomePage: React.FC = () => {
  const { setCurrentView } = useStore();
  const [loanAmount, setLoanAmount] = React.useState([5]);
  const [hashrate, setHashrate] = React.useState([1000]);

  const collateralRequired = loanAmount[0] * 1.1;
  const estimatedCost = loanAmount[0] * 0.18;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <GridPattern 
        className="absolute inset-0 opacity-20" 
        width={60} 
        height={60}
        x={-1}
        y={-1}
        strokeDasharray="0"
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#F74B37"
        refresh
      />

      {/* Hero Section */}
      <section className="relative py-40 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <BlurFade delay={0.1} inView>
            <div className="mb-12">
              <AnimatedGradientText className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
                🔒 NO MARGIN CALLS
              </AnimatedGradientText>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-tight tracking-tight">
                Borrow Against BTC,{' '}
                <br className="hidden md:block" />
                <AnimatedGradientText className="text-5xl md:text-7xl lg:text-8xl font-black">
                  Repay with Hashrate
                </AnimatedGradientText>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
                The first liquidation-free Bitcoin mining finance protocol. 
                <br className="hidden md:block" />
                Get immediate capital while keeping your BTC safe.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-20">
              <ShimmerButton 
                className="text-2xl px-12 py-6 h-16 shadow-2xl shadow-loka-red-orange/25"
                onClick={() => setCurrentView('miners')}
              >
                <span className="text-white font-bold">I'm a Miner</span>
                <ArrowRight className="ml-3 h-6 w-6" />
              </ShimmerButton>
              
              <RippleButton
                onClick={() => setCurrentView('lenders')}
                className="bg-transparent border-3 border-white/50 text-white hover:bg-white/10 hover:border-white hover:scale-105 text-2xl px-12 py-6 h-16 font-bold transition-all duration-300"
              >
                I'm an Investor
                <TrendingUp className="ml-3 h-6 w-6" />
              </RippleButton>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Market Overview */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade delay={0.2} inView>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Loan Marketplace</h2>
              <p className="text-lg text-muted-foreground">
                Real-time lending opportunities powered by Bitcoin mining
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <BentoGrid className="max-w-4xl mx-auto">
              <BentoGridItem
                className="col-span-3 lg:col-span-1"
                title="Available Capital"
                header={
                  <div className="absolute inset-0 bg-gradient-to-br from-loka-red-orange/20 to-loka-orange/10" />
                }
                icon={<Lock className="h-6 w-6 text-loka-red-orange" />}
                description={
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      <NumberTicker value={487} /> BTC
                    </div>
                    <div className="text-lg text-muted-foreground">
                      $<NumberTicker value={32839384} />
                    </div>
                  </div>
                }
              />

              <BentoGridItem
                className="col-span-3 lg:col-span-1"
                title="Active Loans"
                header={
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-400/10" />
                }
                icon={<Zap className="h-6 w-6 text-green-500" />}
                description={
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      <NumberTicker value={234} />
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Currently Active
                    </div>
                  </div>
                }
              />

              <BentoGridItem
                className="col-span-3 lg:col-span-1"
                title="Default Rate"
                header={
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/10" />
                }
                icon={<Shield className="h-6 w-6 text-blue-500" />}
                description={
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      <NumberTicker value={0.3} />%
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Historically Low
                    </div>
                  </div>
                }
              />
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      {/* Quick Loan Calculator */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <BlurFade delay={0.2} inView>
            <MagicCard className="p-8" gradientColor="rgba(247, 75, 55, 0.1)">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Quick Loan Calculator</h2>
                <p className="text-muted-foreground">
                  See your loan terms instantly - no liquidation risk
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-white mb-4 font-medium">
                      I want to borrow: {loanAmount[0]} BTC (${(loanAmount[0] * 67432).toLocaleString()})
                    </label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={50}
                      min={1}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-4 font-medium">
                      My hashrate: {hashrate[0]} TH/s
                    </label>
                    <Slider
                      value={hashrate}
                      onValueChange={setHashrate}
                      max={5000}
                      min={100}
                      step={100}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Loan Terms */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Your Loan Terms:</h3>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>Collateral Required:</span>
                      <span className="text-white font-semibold">
                        {collateralRequired.toFixed(2)} BTC (110% LTV)
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Estimated Cost:</span>
                      <span className="text-white font-semibold">
                        ~{((estimatedCost / loanAmount[0]) * 100).toFixed(1)}% if hashprice stable
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Loan Duration:</span>
                      <span className="text-white font-semibold">90 days</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Repayment:</span>
                      <span className="text-white font-semibold">Daily mining rewards</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <ShimmerButton 
                      className="w-full"
                      onClick={() => setCurrentView('miners')}
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Get Detailed Terms</span>
                    </ShimmerButton>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-green-400">
                    <Shield className="h-4 w-4" />
                    <span>No liquidation risk</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Cpu className="h-4 w-4" />
                    <span>Repay with mining rewards</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Zap className="h-4 w-4" />
                    <span>Get funds immediately</span>
                  </div>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </section>

      {/* Best Loan Opportunities */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <BlurFade delay={0.2} inView>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">⚡ Best Loan Opportunities</h2>
              <p className="text-lg text-muted-foreground">
                Fund loans and earn Bitcoin mining rewards
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6">
            {mockData.loanOpportunities.slice(0, 4).map((loan, index) => (
              <BlurFade key={loan.id} delay={0.3 + index * 0.1} inView>
                <MagicCard className="p-6" gradientColor="rgba(16, 185, 129, 0.1)">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Loan Request #{loan.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        Hashrate: {loan.hashrate} TH/s | Pool Balance: {loan.poolBalance} BTC
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-400">
                        ~{loan.expectedReturn}%
                      </div>
                      <div className="text-xs text-muted-foreground">Expected Return</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span>Requesting:</span>
                      <span className="text-white font-semibold">{loan.requesting} BTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Collateral:</span>
                      <span className="text-white font-semibold">{loan.collateral} BTC (110%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="text-white font-semibold">{loan.duration} days</span>
                    </div>
                  </div>
                  
                  <RippleButton 
                    className="w-full bg-green-600 hover:bg-green-500 text-white"
                    onClick={() => setCurrentView('lenders')}
                  >
                    Fund This Loan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </RippleButton>
                </MagicCard>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.6} inView>
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setCurrentView('marketplace')}
                className="text-white border-white/30 hover:bg-loka-red-orange hover:border-loka-red-orange"
              >
                View All Loan Requests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default ModernHomePage;