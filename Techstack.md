# Tech Stack Documentation

This document provides a detailed analysis of the technology stack used in the **Cyber_Secure** (formerly ScriptJacker) project. The application is a modern, high-performance web platform built to showcase advanced offensive security services.

## Core Framework & Language

### **Next.js 16.0.7 (App Router)**
- **Usage**: acts as the backbone of the application, utilizing the modern **App Router** (`src/app` directory structure) for routing, layouts, and server-side rendering.
- **Key Features Used**:
  - **Server Components**: Used by default for better performance and SEO, with client-side interactivity opted-in via `'use client'` directives (e.g., in `ApproachCycle.jsx`).
  - **Layouts**: `src/app/layout.tsx` defines the global shell, including the Navbar, Footer, and dynamic background (`CyberBackground`).
  - **Metadata API**: Used in `layout.tsx` to manage SEO tags (title, description).

### **TypeScript**
- **Usage**: The entire codebase is strict TypeScript (`tsconfig.json` enabled with `strict: true`), ensuring type safety and better developer experience.
- **Configuration**:
  - Targets **ES2017** with `esnext` modules.
  - Path aliases (`@/*` mapping to `./src/*`) are configured for clean imports.

---

## Styling & Design System

### **Tailwind CSS v4**
- **Usage**: The primary styling engine, configured in `tailwind.config.js` to enforce a consistent "Cyberpunk/Security" aesthetic.
- **Custom Theme**:
  - **Colors**: Defined semantic variables like `neon-teal` (`#00f0ff`), `neon-purple` (`#39ff14`), `dark` (`#070812`), and `surface` (`#0e101f`).
  - **Fonts**: Uses the **Inter** variable font via `next/font/google`, mapped to `font-sans`.
  - **Animations**: Custom Tailwind animations added for localized effects, such as `fade-in` and `float`.

### **PostCSS**
- **Usage**: Processes CSS, primarily to load Tailwind CSS.

### **CSS Variables**
- **Usage**: `src/app/globals.css` defines root CSS variables for foreground/background colors, enabling a consistent dark mode theme that integrates with Tailwind.

---

## UI Components & Animation

### **React 19.2.0**
- **Usage**: The core UI library. The project leverages the latest React 19 features suited for Next.js 16.

### **Framer Motion (v12)**
- **Usage**: Powering complex, high-performance animations throughout the site.
- **Examples**:
  - **Orbital Animations**: Used in `ApproachCycle.jsx` to create rotating rings and orbiting icons around a central core.
  - **Scroll Animations**: `whileInView` props trigger fade-in and slide effects as users scroll down the page.
  - **Interactivity**: `hover` and `tap` gestures provide tactile feedback on buttons and cards.

### **Lucide React**
- **Usage**: A consistent, lightweight icon library (e.g., `ShieldCheck`, `ScanSearch`) used to represent services and features.
- **Integration**: Icons are styled directly with Tailwind classes for colors and sizing.

### **@splinetool/react-spline**
- **Usage**: Integration for 3D web experiences.
- **Purpose**: Likely used for the hero section's interactive 3D elements (e.g., the 3D cube mentioned in the project history), adding a "wow" factor to the landing page.

---

## Utilities & Helpers

### **clsx & tailwind-merge**
- **Usage**: Used together (often in a `cn()` utility) to cleanly conditionally render class names and resolve conflicting Tailwind classes. This is essential for building reusable components that accept custom `className` props.

---

## Code Quality

### **ESLint**
- **Usage**: Enforces code quality standards and catches errors during development.
- **Configuration**: Standard `next/core-web-vitals` preset to ensure best practices for Next.js applications.

## Project Structure Overview

- **`src/app/`**: Contains all routes and the global layout.
- **`src/components/`**: Modular, reusable UI components (e.g., `Navbar`, `Footer`, `ApproachCycle`).
- **`public/`**: Static assets like images (`approach-logo.png`) and icons.

---

## Animation Strategy & Logic

The application employs a dual-layer animation strategy, combining **Framer Motion** for complex, state-driven interactions and **Tailwind CSS** for lightweight, continuous effects. This ensures a "Cyberpunk" feel that is both dynamic and performant.

### **1. Framer Motion (Complex Interactions)**
Used for orchestration, gesture handling, and layout transitions.
- **Orbital Systems (`ApproachCycle.jsx`)**:
  - Implements a complex planetary model where icons orbit a central core.
  - Uses `motion.div` with infinite rotation (`animate={{ rotate: 360 }}`) and precise positioning logic to keep text upright while the container rotates.
- **Scroll-Triggered Reveals**:
  - Components like `ScrollWrapper` and sections in `Hero.jsx` use `whileInView` and `viewport` props to trigger fade-in and slide-up animations as the user scrolls.
- **Page Transitions & Modals**:
  - `AnimatePresence` is used in `Navbar` (mobile menu) and `ServiceModal` to handle mount/unmount animations smoothly.
- **Text Effects**:
  - `TypewriterText.jsx` uses `staggerChildren` variants to type out characters sequentially for a "hacker terminal" effect.

### **2. Tailwind CSS (Continuous Ambience)**
Used for "always-on" background effects that require no JavaScript overhead.
- **Floating Elements**:
  - `animate-float`: Defined in `tailwind.config.js` (`float 6s ease-in-out infinite`), applied to background glowing orbs to creating a breathing, living atmosphere.
- **Infinite Marquee**:
  - `animate-marquee`: Used in `TestimonialCarousel` to continuously scroll content horizontally (`marquee 60s linear infinite`).
- **Pulse & Glows**:
  - `animate-pulse` and `animate-ping` are used on buttons and status dots to draw attention to interactive elements.
- **Gradient Text**:
  - `animate-gradient-text`: Creates a shimmering effect across text headlines by animating background positions.

### **3. Performance Optimizations**
- **Hardware Acceleration**: Heavy animations (like the 3D cube or large background blurs) are isolated to dedicated layers.
- **Lazy Animations**: Most animations are triggered only when in the viewport (`useInView`), reducing the main thread load on initial render.
