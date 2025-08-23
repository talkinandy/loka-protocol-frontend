# LOKA Protocol Frontend

A decentralized Bitcoin mining finance protocol that creates a liquid marketplace for hashrate contracts.

## 🎯 Core Innovation

**"Borrow against BTC, repay with hashrate"** - A liquidation-free lending model where miners use their BTC reserves as collateral and repay loans through hashrate delivery rather than currency.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/talkinandy/loka-protocol-frontend.git
cd loka-protocol-frontend
```

2. Install dependencies:
```bash
cd loka-frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠 Built With

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Magic UI
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React

## 📁 Project Structure

```
loka-frontend/
├── src/
│   ├── components/
│   │   ├── dashboard/        # Dashboard components
│   │   ├── layout/           # Layout components
│   │   ├── pages/            # Page components
│   │   ├── ui/               # Reusable UI components
│   │   └── magicui/          # Magic UI components
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── services/
│   │   └── mockData.ts       # Mock data for MVP
│   ├── store/
│   │   └── useStore.ts       # Zustand store
│   └── types/
│       └── index.ts          # TypeScript definitions
├── docs/                     # Protocol documentation
└── netlify.toml             # Netlify deployment config
```

## 🌟 Features

### For Miners:
- 🔒 **No Liquidation Risk** - Never worry about margin calls
- ⚡ **Instant Capital** - Get funds immediately upon contract execution
- 💎 **Keep Your Bitcoin** - Use BTC as collateral without selling
- 📊 **Transparent Pricing** - All calculations visible and automated

### For Investors:
- 🎯 **Below-Market Bitcoin** - Acquire BTC at discounted rates
- 💰 **Real Mining Rewards** - Receive actual daily mining production
- 🛡️ **110% Collateralized** - Protected by over-collateralization
- 📈 **Diversified Returns** - Exposure to mining economics

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Components

1. **Dashboard** - Main user interface with market overview
2. **HashpriceChart** - Real-time hashprice visualization
3. **MarketOverview** - Key market metrics and statistics
4. **ContractList** - Active contract management

## 🚀 Deployment

The project is configured for automatic deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `loka-frontend/dist`
   - Base directory: `loka-frontend`
3. Deploy automatically on push to main branch

## 🎨 Design System

The project uses a modern design system with:
- **LOKA brand colors** (orange/red gradient theme)
- **Dark theme** optimized for readability
- **Magic UI components** for enhanced visual effects
- **Responsive design** for all screen sizes
- **Glassmorphism styling** for modern aesthetics

## 📊 Mock Data

The MVP includes realistic mock data for:
- Hashprice historical data
- Market statistics
- User positions and contracts
- Order book entries

## 🔮 Future Enhancements

- Integration with Internet Computer Protocol (ICP)
- ckBTC wallet connectivity
- Real-time hashrate oracles
- Advanced trading features
- Multi-language support

## 📄 License

This project is part of the LOKA Protocol ecosystem. See documentation for details.

## 🤝 Contributing

Please read the contributing guidelines before submitting pull requests.

## 📞 Support

For questions and support, please refer to the project documentation or open an issue.
