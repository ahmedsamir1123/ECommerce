# 🛒 E-Commerce Web App

A modern, scalable e-commerce application built with **React**, **TypeScript**, and **Redux**. Features include dynamic product listings, cart management, and API integration for seamless user experience.

---

**Frontend**: React, TypeScript, Redux Toolkit, Axios  
- **API**:https://documenter.getpostman.com/view/5709532/2s93JqTRWN
- **State Management**: Redux Toolkit  
- **Routing**: React Router DOM  
- **Styling**: TailwindCSS / Styled Components *(customizable)*  
- **Tooling**: Vite / Webpack, ESLint, Prettier  

---

## 📁 Project Structure
src/ 
  ├── components/
      ├── Home              # Home page (Displays featured products, promotions)
      ├── Layout           # Main layout component (Header, Footer, etc.)
      ├── Cart             # Cart page (Product list in the cart with quantities)
      ├── Checkout           # Checkout page (Billing, Shipping, Payment)
      ├── Loader            # Loader component (Displays during async data loading)
      ├── Login             # Login page (User authentication page)
      ├── register             # register page (User authentication page)
      ├── Navbar            # Navbar (Navigation links and user profile)
      ├── Product          # Product listing page (Display all products)
      ├── SingleProduct      # Single Product page (Detailed view of a single product)
  ├── redux/                 # Redux store and state management
  │   ├── store.tsx          # Store setup (Central Redux store)
  │   ├── auth/              # Authentication slice (User state management)
  │   │   └── authSlice.tsx  # Slice managing authentication state
  │   └── cart/              # Cart slice (Cart state management)
  │       └── cartSlice.tsx  # Slice managing cart items
  ├── assets/                # Assets folder (Images, fonts, icons)
  │   └── images/            # Product images and other static assets
  ├── index.css              # Global CSS styles (Shared styles across the app)
  ├── App.tsx                # Main App component (Contains routing setup)
  └── main.tsx               # Main entry point of the application (renders App)


