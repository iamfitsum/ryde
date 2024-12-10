<div align="center">
  <h1>Ryde: An Uber Clone</h1>
  <img src="assets/images/banner.png" alt="Ryde Banner" />
</div>

**Ryde** is a feature-rich ride-hailing app built with modern web and mobile technologies. Designed to provide a seamless user experience, Ryde integrates real-time location tracking, secure payments, and responsive design to deliver a platform optimized for both Android and iOS devices.

---

## 📋 Table of Contents
1. [Features](#-features)
2. [Technologies Used](#%EF%B8%8F-technologies-used)
3. [Important Links](#-important-links)
4. [File Structure](#-file-structure)
5. [Getting Started](#-getting-started)
6. [Configuration](#%EF%B8%8F-configuration)
7. [Acknowledgements](#-acknowledgements)
8. [License](#-license)

---

## 🚀 Features

### User Experience
- **Onboarding Flow**: Seamless user registration and setup process.
- **Email Password Authentication with Verification**: Secure login with email verification.
- **OAuth Using Google**: Easy login with Google credentials.

### Rides
- **Home Screen with Live Location & Google Map**: Real-time location tracking with markers on a map.
- **Recent Rides**: View a list of recent rides at a glance.
- **Google Places Autocomplete**: Search any place on Earth with autocomplete suggestions.
- **Find Rides**: Search for rides by entering 'From' and 'To' locations.
- **Select Rides from Map**: Choose available cars near your location from the map.
- **Confirm Ride with Detailed Information**: View complete ride details, including time and fare price.
- **Create Rides After Successful Payment**: Book a ride after confirming payment.

### Payments
- **Pay for Ride Using Stripe**: Secure payments via multiple methods like cards.

### User Profile
- **Profile Management**: Manage account details in the profile screen.
- **Ride History**: Review all rides booked so far.

### Compatibility
- **Responsive on Android and iOS**: Optimized for both Android and iOS devices.

---

## 🛠️ Technologies Used

- **[React Native](https://reactnative.dev/)**
- **[Expo](https://expo.dev/)**
- **[Stripe](https://stripe.com/)**
- **[PostgreSQL](https://www.postgresql.org/) ([neon](https://neon.tech/))**
- **[Google Maps](https://console.cloud.google.com/)**
- **[Zustand](https://zustand-demo.pmnd.rs/)**
- **[Clerk](https://clerk.com/)**
- **[Tailwind CSS](https://tailwindcss.com/)**

---

## 🔗 Important Links

- <a href="https://docs.expo.dev/guides/using-eslint/" target="_blank">Eslint and Prettier Setup</a>
- <a href="https://www.nativewind.dev/quick-starts/expo" target="_blank">Expo NativeWind Setup</a>
- <a href="https://www.nativewind.dev/v4/getting-started/typescript" target="_blank">TypeScript Support for NativeWind</a>
- <a href="https://neon.tech/" target="_blank">Serverless NeonDB</a>
- <a href="https://go.clerk.com/DtiSBEI" target="_blank">Clerk Auth</a>
- <a href="https://clerk.com/docs/quickstarts/expo" target="_blank">Clerk Expo Quickstart</a>
- <a href="https://clerk.com/docs/custom-flows/oauth-connections" target="_blank">Clerk Expo OAuth</a>
- <a href="https://www.geoapify.com/" target="_blank">Geoapify Map</a>
- <a href="https://docs.stripe.com/payments/accept-a-payment?platform=react-native&ui=payment-sheet" target="_blank">Stripe React Native SDK</a>
- <a href="https://docs.stripe.com/payments/accept-a-payment-deferred" target="_blank">Stripe</a>

---

## 📂 File Structure

```bash
.
├── app
│   ├── (api)
│   │   ├── driver+api.ts
│   │   ├── ride
│   │   │   ├── create+api.ts
│   │   │   └── [id]+api.ts
│   │   ├── (stripe)
│   │   │   ├── create+api.ts
│   │   │   └── pay+api.ts
│   │   └── user+api.ts
│   ├── (auth)
│   │   ├── _layout.tsx
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   └── welcome.tsx
│   ├── index.tsx
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   └── (root)
│       ├── book-ride.tsx
│       ├── confirm-ride.tsx
│       ├── find-ride.tsx
│       ├── _layout.tsx
│       └── (tabs)
│           ├── chat.tsx
│           ├── home.tsx
│           ├── _layout.tsx
│           ├── profile.tsx
│           └── rides.tsx
├── assets
│   ├── fonts
│   ├── icons
│   └── images
├── components
├── constants
├── lib
├── store
├── scripts
├── types
├── babel.config.js
├── package.json
├── .env
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/))
- [Git](https://git-scm.com/)
- [Expo CLI](https://expo.dev/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/iamfitsum/ryde.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ryde
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the Expo development server:
   ```bash
   expo start
   ```

5. Run the app on your device or simulator:
   - Press `a` for Android
   - Press `i` for iOS

---

## 🧩 Configuration

1. Create a `.env` file in the project root and add the following environment variables:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

   EXPO_PUBLIC_PLACES_API_KEY=
   EXPO_PUBLIC_DIRECTIONS_API_KEY=

   DATABASE_URL=

   EXPO_PUBLIC_SERVER_URL=https://ryde.com/

   EXPO_PUBLIC_GEOAPIFY_API_KEY=

   EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   ```

---

## 🙏 Acknowledgements

- [Adrian (JSMastery)](https://www.youtube.com/watch?v=kmy_YNhl0mw)

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
