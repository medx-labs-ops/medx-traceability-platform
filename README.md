# MedX Traceability Platform

A full-stack pharmaceutical supply chain traceability platform that combines blockchain verification with real-time inventory and order management. MedX enables end-to-end tracking of medicines from raw material suppliers through manufacturers, distributors, and retailers—improving transparency, authenticity, and accountability across the supply chain.

**Repository:** [medx-labs-ops/medx-traceability-platform](https://github.com/medx-labs-ops/medx-traceability-platform)

---

## Overview

MedX Traceability Platform is built for organizations that need a trusted, auditable view of pharmaceutical product movement. Participants connect via Web3 wallets, operate within role-specific dashboards, and interact with on-chain order records backed by off-chain data stored in MongoDB.

### Key capabilities

- **Role-based access** — Separate workflows for providers, manufacturers, distributors, and retailers
- **Inventory management** — Create, update, and monitor product stock by wallet and role
- **Supply chain tracking** — Trace product movement and order status across the network
- **Order lifecycle** — Create, process, ship, and complete orders with blockchain-backed verification
- **QR scanning** — Scan product codes for quick lookup and verification
- **Real-time updates** — Live notifications via Socket.IO
- **On-chain verification** — Ethereum smart contract for immutable order records

---

## Tech stack

| Layer | Technologies |
|-------|--------------|
| Frontend | Next.js 14, React 18, Tailwind CSS, Radix UI |
| Backend | Next.js API Routes |
| Database | MongoDB Atlas |
| Blockchain | Ethereum, Ethers.js, Web3.js |
| Real-time | Socket.IO |
| Smart contract | Solidity (`MedXSupplyChain.sol`) |

---

## Prerequisites

- **Node.js** 18 or later
- **npm** or **Yarn**
- **MongoDB Atlas** account (or local MongoDB instance)
- **MetaMask** or another Web3-compatible wallet
- **Deployed smart contract** (optional for local development; required for on-chain features)

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/medx-labs-ops/medx-traceability-platform.git
cd medx-traceability-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
# Database (required)
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<database>

# Application
NEXT_PUBLIC_API_URL=http://localhost:3000

# Smart contract (required for on-chain features)
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress

# Blockchain network (optional — used for wallet network switching)
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/<your-key>
NEXT_PUBLIC_CHAIN_NAME=Sepolia
NEXT_PUBLIC_NATIVE_CURRENCY_NAME=Sepolia Ether
NEXT_PUBLIC_NATIVE_CURRENCY_SYMBOL=ETH
NEXT_PUBLIC_BLOCK_EXPLORER_URL=https://sepolia.etherscan.io
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Connect and register

1. Click **Connect Wallet** on the landing page
2. Approve the connection in your Web3 wallet
3. Select your supply chain role (provider, manufacturer, distributor, or retailer)
4. Complete registration to access your role-specific dashboard

---

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |

Utility scripts for seeding and verifying data are available under `scripts/`.

---

## Project structure

```
medx-traceability-platform/
├── app/                      # Next.js App Router
│   ├── api/                  # REST API routes (inventory, orders, products, users)
│   ├── auth/                 # Wallet connection and role selection
│   └── dashboard/            # Role-based dashboard pages
├── components/               # Reusable UI and feature components
├── context/                  # React context (wallet, data)
├── contracts/                # Solidity smart contract and ABI
├── lib/                      # Database, Web3, and utility modules
├── models/                   # Data models
├── scripts/                  # Database seeding and verification scripts
└── public/                   # Static assets
```

---

## Supply chain roles

| Role | Description |
|------|-------------|
| **Provider** | Supplies raw materials and ingredients |
| **Manufacturer** | Produces finished pharmaceutical products |
| **Distributor** | Warehouses and ships products to retailers |
| **Retailer** | Sells products to end consumers |

Each role has a dedicated dashboard with views for inventory, orders, tracking, products, profile, and settings.

---

## Smart contract

The `MedXSupplyChain` contract handles on-chain order creation, status transitions, and payment escrow. Order metadata is stored off-chain (MongoDB) and referenced via URI on the blockchain.

Contract source: `contracts/MedXSupplyChain.sol`

---

## Deployment

The application is designed for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add all environment variables from `.env.local` in the Vercel project settings
4. Deploy

Ensure `MONGODB_URI`, `NEXT_PUBLIC_API_URL`, and `NEXT_PUBLIC_CONTRACT_ADDRESS` are set for production.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome. Please open an issue or submit a pull request on [GitHub](https://github.com/medx-labs-ops/medx-traceability-platform).
