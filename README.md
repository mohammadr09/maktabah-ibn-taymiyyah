# Maktabah Ibn Taymiyyah

**Created by:** Mohammad Rahman
**Link:** [maktabahibntaymiyyah.vercel.app](maktabahibntaymiyyah.vercel.app)

A full-featured e-commerce Islamic bookstore built from the ground up using Next.js and Tailwind CSS. The platform includes Firebase Authentication for user management, Stripe for secure payments, and real-time shipping rate calculations powered by Shippo's API.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Next Steps & Future Plans](#next-steps--future-plans)

---

## Features
- **Modern Web Framework**: Built with Next.js for server-side rendering and optimized performance.
- **Responsive Design**: Styled with Tailwind CSS for a seamless user experience across devices.
- **User Authentication**: Firebase Authentication for secure login and registration.
- **Real-Time Shipping Rates**: Integrated with Shippo's API to calculate shipping costs dynamically (currently using default weights; abstraction in progress).
- **Secure Payments**: Stripe integration for handling transactions.
- **Dynamic Catalog**: Browse books by categories and subcategories.
- **Cart Management**: Add, remove, and update items in the cart.

---

## Tech Stack
- **Web Framework**: Next.js
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Payments**: Stripe
- **Shipping Rates**: Shippo API

---

## Project Structure
```
.
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── routes/         # Page routes
│   │   └── layout.tsx      # Main layout
│   ├── lib/                # Reusable components, context, and utilities
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/mohammadr09/maktabah-ibn-taymiyyah.git
   ```
2. Navigate to the project directory:
   ```bash
   cd maktabah-ibn-taymiyyah
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   STRIPE_SECRET_KEY=your_stripe_secret_key
   SHIPPO_API_KEY=your_shippo_api_key
   ```
5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Usage
- Browse the catalog and add books to your cart.
- Proceed to checkout and complete your purchase securely using Stripe.
- Track shipping rates dynamically based on your location.

---

## License
This project is licensed under the AGPL-3.0 License. See the [LICENSE](./LICENSE) file for details.

---

## Next Steps & Future Plans
* Implement Dynamic Weight-Based Shipping Calculations
* Refactor the codebase to improve maintainability and further expansion of the website
* Make UI changes to allow for a seamless, standardized UI. These UI changes will also allow for a more robust mobile-responsive version for the website.


^ Note: The shipping rate calculation currently uses default weights. Future updates will include dynamic weight-based calculations.
