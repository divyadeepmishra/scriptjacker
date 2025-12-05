# ScriptJacker Frontend

A high-end, dark-themed cybersecurity marketing site built with Next.js 15+, Tailwind CSS, and Spline 3D.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

## 🎨 3D Spline Integration
The Hero component uses `@splinetool/react-spline` to render 3D scenes.
- **Location**: `src/components/Hero.jsx`
- **Configuration**: Replace the `SPLINE_SCENE_URL` constant with your exported Spline URL.
- **Fallback**: Mobile users see a fallback layout. For strict image fallback, uncomment the logic in `Hero.jsx`.

## ⚡ Performance Optimization Checklist (Lighthouse)
- [x] **Next.js Image Optimization**: Use `<Image />` where possible.
- [x] **Lazy Loading**: Spline scene is lazy-loaded using `React.lazy`.
- [x] **Font Optimization**: `next/font` loads Inter automatically.
- [ ] **PWA**: Add manifest.json for offline capabilities (optional).
- [ ] **Analytics**: Integrate privacy-preserving analytics (e.g., Plausible).

## 🛠 Project Structure
- `src/app`: App Router pages and layout.
- `src/components`: UI components (Navbar, Hero, ContactForm, etc.).
- `src/hooks`: Custom hooks (`useScrollScale`).
- `public`: Static assets.

## 🧪 Testing
Run the example contact form test:
```bash
npm test
```
(Requires Jest setup, see `jest.config.js` if needed. Included `__tests__/ContactForm.test.jsx` is ready for RTL).

## 📝 Copy Deck (Handcrafted)

### Hero Headlines
1. **Short**: "Secure the Future."
2. **Medium**: "Offensive Security for the Decentralized Web."
3. **Long**: "Advanced threat detection and adversarial simulation. We break your systems before they do."

### Founder Bio
"Founded by ex-APT researchers and cryptography PhDs, ScriptJacker brings state-level offensive capabilities to the commercial sector. We believe security is not a product, but a continuous state of resistance."

### Testimonials
- "ScriptJacker found vulnerabilities our previous three audits missed." – CTO, DeFi Protocol
- "Their red team operation was terrifyingly effective. Best money we ever spent." – CISO, FinTech Corp
