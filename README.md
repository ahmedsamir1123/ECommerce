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

src/ ├── components/ # Reusable UI components │ ├── Home # Home page (Displays featured products, promotions) │ ├── Layout # Main layout component (Header, Footer, etc.) │ ├── Cart # Cart page (Product list in the cart with quantities) │ ├── Checkout # Checkout page (Billing, Shipping, Payment) │ ├── Loader # Loader component (Displays during async data loading) │ ├── Login # Login page (User authentication page) │ ├── Register # Register page (User registration page) │ ├── Navbar # Navbar (Navigation links and user profile) │ ├── Product # Product listing page (Display all products) │ └── SingleProduct # Product detail page (Detailed view of a single product) │ ├── redux/ # Redux store and state management │ ├── store.tsx # Store setup (Central Redux store) │ ├── auth/ │ │ └── authSlice.tsx # Slice managing authentication state │ └── cart/ │ └── cartSlice.tsx # Slice managing cart items │ ├── assets/ # Static assets (images, icons, fonts) │ └── images/ # Product images and other visuals │ ├── index.css # Global styles ├── App.tsx # Root component with routing setup └── main.tsx # Entry point of the application

yaml
Copy
Edit


