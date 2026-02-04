# 🌌 NexusCRM | Advanced Full-Stack CRM Solutions

NexusCRM is a premium, high-performance **Full-Stack** Customer Management System built for modern teams. It combines a cinematic UI/UX with a powerful Supabase backend to provide a seamless, real-time data experience.

---

### 🚀 Premium Features

- **Cinematic Animated UI**:
  - **Moving Art Backdrop**: A fluid mesh gradient background that stays active across all pages.
  - **Starfall Animation**: Cascading shooting stars (diagonal fall) for a celestial, high-end atmosphere.
- **Full-Stack Supabase Integration**:
  - **Authentication**: Secure Login & Registration system with real-time session handling.
  - **User Profiles**: Automatic profile creation using **PostgreSQL Triggers** when a new user signs up.
  - **Personalized Dashboard**: Real-time data fetching from the `customers` database, filtered specifically for the logged-in user.
- **Premium Pricing & Payments**:
  - **Interactive Plan Selection**: Switch between Monthly and Yearly billing.
  - **Integrated Payment Modal**:
    - **PayPal / Skrill**: Simulated secure gateway redirection.
    - **USDT (Crypto)**: Dedicated TRC20 address box with one-click clipboard copy functionality.
- **Glassmorphism Design**: Advanced CSS layering with backdrop blur and vibrant accent colors.
- **High Performance**: Built with **Vite** and **Quasar Framework** for sub-second load times.

---

### 🛠️ Technology Stack

- **Frontend**: Vue.js 3, Quasar Framework (Vite Edition), SCSS
- **Backend (BaaS)**: [Supabase](https://supabase.com/)
- **Database**: PostgreSQL with Row-Level Security (RLS)
- **State Management**: Reactive Vue 3 Composition API & Quasar Boot logic

---

### 🔑 Backend Credentials (Coded into the Project)

- **Supabase URL**: `https://htrzpaoahyzatgvsxhzf.supabase.co`
- **Public Anon Key**: `sb_publishable_KRa8QQ9-jkvbmuGlNGcsmQ_kY22qL6T`
- **Database Password**: `[YOUR_DATABASE_PASSWORD]` _(Keep this secure and never share publicly)_

---

### 📦 Installation & Deployment

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Environment Setup**:
   Ensure the `.env` file contains your Supabase credentials as shown above.

3. **Launch Development**:

   ```bash
   quasar dev
   ```

4. **Build for Production**:
   ```bash
   quasar build
   ```

---

### 🏛️ Database Architecture

- `auth.users`: Managed by Supabase Auth.
- `public.profiles`: Stores user-specific professional data (Linked via Trigger).
- `public.customers`: Stores customer leads and sales data with RLS protection.

---

_Engineered for Visual Excellence and Data Integrity._
