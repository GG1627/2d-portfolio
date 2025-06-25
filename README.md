[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.16.0-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

# Gael Garcia - 2D Portfolio

A modern, interactive 2D portfolio showcasing my work as a Computer Engineering student at the University of Florida. Built with cutting-edge web technologies and featuring smooth animations, this portfolio serves as both a standalone showcase and a component within my larger 3D portfolio ecosystem.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Key Sections](#-key-sections)
- [Getting Started](#️-getting-started)
- [Development](#-development)
- [Performance](#-performance)
- [Design System](#-design-system)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Connect](#-connect)

## ✨ Features

- **Modern Design**: Clean, professional interface with a dark theme and blue accent colors
- **Interactive Animations**: Smooth parallax effects, type animations, and hover interactions
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Dynamic Content**: Tabbed sections for education and interests with engaging animations
- **Project Showcase**: Interactive project cards with live previews and GitHub links
- **Contact Form**: Professional contact section with social media integration
- **Performance Optimized**: Built with Next.js for optimal loading and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and optimized images

## 🚀 Tech Stack

### Core Technologies

- **Next.js 15.1.3** - React framework with App Router and server-side rendering
- **TypeScript 5.0** - Type-safe development with strict configuration
- **React 19.0.0** - Latest React with concurrent features
- **Tailwind CSS 3.4.1** - Utility-first CSS framework with custom configuration

### Animation & Interaction

- **Framer Motion 11.16.0** - Production-ready motion library
- **React Type Animation 3.2.0** - Dynamic text typing effects
- **React Intersection Observer 9.14.1** - Scroll-triggered animations
- **React Just Parallax 3.1.16** - Parallax scrolling effects

### UI & Icons

- **React Icons 5.4.0** - Comprehensive icon library
- **Heroicons 2.2.0** - Beautiful hand-crafted SVG icons
- **Custom SVG Components** - Optimized SVG handling with @svgr/webpack

### Development & Build Tools

- **ESLint 9** - Code quality and consistency with Next.js config
- **PostCSS 8** - CSS processing and optimization
- **TypeScript Compiler** - Strict type checking and compilation
- **Tailwind Scrollbar Hide** - Custom scrollbar utilities

## 🏗️ Architecture

### Design Patterns

- **Component-Based Architecture** - Modular, reusable components
- **Custom Hooks** - Logic separation and reusability
- **TypeScript Interfaces** - Strong typing for props and data structures
- **CSS-in-JS with Tailwind** - Utility-first styling approach

### Performance Optimizations

- **Next.js Image Optimization** - Automatic image optimization and lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **Bundle Analysis** - Optimized bundle sizes
- **Caching Strategies** - Static generation and incremental static regeneration

## 📁 Project Structure

```
2d-portfolio/
├── app/                          # Next.js App Router
│   ├── components/               # Reusable UI components
│   │   ├── Circles.tsx          # Animated circle components
│   │   ├── Clouds.tsx           # Parallax cloud effects
│   │   └── ProjectCard.tsx      # Interactive project cards
│   ├── sections/                # Main page sections
│   │   ├── Hero.tsx            # Landing section with animations
│   │   ├── About.tsx           # Personal information section
│   │   ├── Projects.tsx        # Portfolio showcase
│   │   ├── Stack.tsx           # Technology stack display
│   │   ├── Contact.tsx         # Contact form and social links
│   │   ├── Footer.tsx          # Footer component
│   │   └── Navbar.tsx          # Navigation component
│   ├── assets/                 # Static assets and images
│   │   ├── avatar.png          # Profile image
│   │   ├── cloud*.png          # Parallax cloud images
│   │   └── *.svg               # SVG icons and graphics
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Main page component
├── public/                     # Static files
│   └── images/                 # Project screenshots and assets
├── .eslintrc.json             # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Key Sections

### Hero Section (`/app/sections/Hero.tsx`)

- **Animated Avatar**: Circular profile image with gradient background
- **Dynamic Typography**: Type animation showcasing personality traits
- **Parallax Effects**: Cloud animations for visual depth
- **Responsive Design**: Optimized for all screen sizes

### About Section (`/app/sections/About.tsx`)

- **Tabbed Interface**: Education and Interests with smooth transitions
- **University Branding**: Animated "Go Gators" text with sliding effect
- **Professional Photo**: High-quality image with proper optimization
- **Interactive Elements**: Hover effects and state management

### Projects Section (`/app/sections/Projects.tsx`)

- **Interactive Cards**: 6 featured projects with hover effects
- **Live Previews**: Direct links to deployed applications
- **GitHub Integration**: Repository links with proper attribution
- **Technology Tags**: Visual representation of tech stack per project

### Tech Stack Section (`/app/sections/Stack.tsx`)

- **Animated Icons**: Smooth transitions with Framer Motion
- **Rotated Labels**: Modern aesthetic with CSS transforms
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Intersection Observer**: Scroll-triggered animations

### Contact Section (`/app/sections/Contact.tsx`)

- **Professional Form**: Accessible contact form with validation
- **Social Integration**: LinkedIn and GitHub with hover effects
- **Clean Design**: Consistent with overall design system
- **Responsive Layout**: Optimized for mobile and desktop

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or yarn/pnpm)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GG1627/2d-portfolio.git
   cd 2d-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start

# Or use the standalone output
npm run build && npm run start
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Prettier**: Code formatting (if configured)
- **Git Hooks**: Pre-commit linting (recommended setup)

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## ⚡ Performance

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Techniques

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Route-based automatic splitting
- **Bundle Analysis**: Optimized JavaScript bundles
- **Caching**: Static generation with ISR
- **CDN**: Vercel Edge Network deployment

## 🎨 Design System

### Color Palette

```css
Primary Blue: #5D97C9
Secondary Blue: #557BAD
Accent Blue: #0F62AB
Background: #0a0a0a
Surface: #181818
Text Primary: #ffffff
Text Secondary: #ADB7BE
```

### Typography

- **Primary Font**: Lexend Deca (Google Fonts)
- **Secondary Font**: Noto Sans
- **Display Font**: Shrikhand (for special elements)

### Spacing System

- **Base Unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128

### Animation Principles

- **Duration**: 300ms for micro-interactions, 500ms for page transitions
- **Easing**: Cubic-bezier(0.4, 0, 0.2, 1) for smooth motion
- **Stagger**: 50ms delay between sequential animations

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. Deploy automatically on push to main branch

### Environment Variables

Set in Vercel dashboard:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Custom Domain

1. Add custom domain in Vercel dashboard
2. Configure DNS records
3. Enable HTTPS automatically

## 🤝 Contributing

While this is a personal portfolio project, contributions and feedback are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code style with ESLint
- Write meaningful commit messages
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Connect

- **LinkedIn**: [Gael Garcia](https://www.linkedin.com/in/gael-garcia1627/)
- **GitHub**: [GG1627](https://github.com/GG1627)
- **Portfolio**: [2D Portfolio](https://2d-portfolio-git-master-gael-garcias-projects.vercel.app/)
- **Email**: Available through the contact form on the portfolio

---

_Built with ❤️ using Next.js, TypeScript, and Tailwind CSS_

**Last Updated**: December 2024
