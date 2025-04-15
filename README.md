# Interswitch Payment Portal

A modern payment portal built with Next.js, TypeScript, and Tailwind CSS, integrated with Interswitch East Africa's payment gateway. This application provides a seamless payment experience for various product categories and order aggregations.

## Features
## Product Categories

The  portal can support the following service categories:

- **Telecommunications**
  - Airtime
  - Data Bundles
  - SIM Cards Purchase
  - Mobile Money

- **Transport & Logistics**
  - Parking Services
  - Public Transport
  - Vehicle Hire Orders
  - Logistics Payments

- **Financial Services**
  - Forex Services
  - Money Transfers
  - Bill Payments
  - Insurance Premiums

- **Government Services**
  - Tax Payments
  - License Fees
  - Driving Licence Payments
  - Other Government Bills

- **Utilities**
  - Electricity
  - Water
  - Internet
  - TV Subscriptions

- **Retail & Commerce**
  - Digital Goods
  - Subscription Services
  - Event Tickets

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/interswitch-payment.git
   cd interswitch-payment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit `http://localhost:3000` to see the application running.

## Project Structure

```
interswitch-payment/
├── components/
│   ├── steps/           # Step components for the payment wizard
│   ├── ui/              # Reusable UI components
│   └── wizard/          # Wizard-related components
├── lib/
│   ├── interswitch/     # Interswitch integration utilities
│   └── dummy-data.ts    # Mock data for development
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Technologies Used

- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

## Development

- **Code Formatting**: Uses Prettier for consistent code style
- **Type Checking**: TypeScript for type safety
- **Linting**: ESLint for code quality

## Building for Production

### Build Process

The application uses Next.js's build system to create an optimized production build. Here's how it works:

1. **Build Command**
   ```bash
   npm run build
   # or
   yarn build
   # or
   npx next build
   ```

2. **Build Output**
   The build process creates an optimized production build in the `.next` directory with:
   - Optimized JavaScript bundles
   - Static HTML pages
   - Server-side rendering configurations
   - API route handlers
   - Static assets optimization

3. **Build Configuration**
   The build is configured in `next.config.js` with:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     images: {
       domains: ['api.dicebear.com'],
     }
   }
   ```

4. **Build Optimization Features**
   - **Static Site Generation (SSG)**: Pre-renders pages at build time
   - **Incremental Static Regeneration (ISR)**: Updates static content after build
   - **Image Optimization**: Automatic image optimization and resizing
   - **Code Splitting**: Automatic code splitting for faster page loads
   - **Tree Shaking**: Removes unused code from the final bundle

5. **Environment Variables**
   During build, Next.js:
   - Inlines environment variables prefixed with `NEXT_PUBLIC_`
   - Validates required environment variables
   - Creates optimized bundles for different environments

6. **Build Output Structure**
   ```
   .next/
   ├── cache/              # Build cache
   ├── server/             # Server-side code
   ├── static/             # Static assets
   ├── chunks/             # Code chunks
   └── build-manifest.json # Build metadata
   ```

7. **Production Deployment**
   After building, you can:
   ```bash
   # Start the production server
   npm run start
   # or
   yarn start
   # or
   npx next start
   ```

   The production server runs on port 3000 by default and can be configured using:
   ```bash
   PORT=4000 npm run start
   ```

8. **Build Performance**
   - Uses SWC compiler for faster builds
   - Implements caching for faster subsequent builds
   - Optimizes bundle size through code splitting
   - Implements automatic static optimization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
