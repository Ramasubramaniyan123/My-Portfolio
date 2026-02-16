# Ramasubramaniyan K - Portfolio Website

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and education as a final-year Computer Science & Engineering (Cyber Security) student.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark navy theme and blue-violet gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode**: Built with dark-first design and light mode toggle support
- **Smooth Animations**: Subtle micro-interactions using Framer Motion
- **SEO Optimized**: Proper meta tags and structured content
- **Component-Based Architecture**: Modular, reusable React components
- **Type-Safe**: Clean JavaScript code with proper error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── main.jsx                 # Application entry point
├── App.jsx                  # Root component with router setup
├── router/
│   └── AppRouter.jsx        # Route configuration
├── layouts/
│   └── MainLayout.jsx       # Main layout wrapper
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer section
│   │   ├── MobileMenu.jsx   # Mobile navigation menu
│   │   └── ScrollProgress.jsx # Scroll progress indicator
│   └── ui/
│       ├── Button.jsx       # Reusable button component
│       ├── Card.jsx         # Card container component
│       ├── Badge.jsx        # Badge component
│       └── SectionTitle.jsx # Section header component
├── sections/
│   ├── Hero.jsx             # Hero section
│   ├── About.jsx            # About section
│   ├── Skills.jsx           # Skills section
│   ├── Projects.jsx         # Projects section
│   ├── Experience.jsx       # Experience section
│   ├── Education.jsx        # Education section
│   └── Contact.jsx          # Contact section
├── data/
│   ├── skills.data.js       # Skills data
│   ├── projects.data.js     # Projects data
│   └── experience.data.js   # Experience data
├── context/
│   └── ThemeContext.jsx     # Theme context for dark/light mode
├── hooks/
│   └── useScrollSpy.js      # Custom hook for scroll spy functionality
└── styles/
    └── globals.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0b1120` (Dark Navy)
- **Accent Colors**: Blue (`#3b82f6`) to Violet (`#8b5cf6`) gradient
- **Text Colors**: Various shades of gray for hierarchy
- **Border Colors**: Semi-transparent white for glass morphism effects

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)

### Components
- **Buttons**: Primary (gradient), Secondary (outline), Outline variants
- **Cards**: Glass morphism effect with hover animations
- **Badges**: Multiple color variants for different contexts
- **Navigation**: Sticky header with blur background and active state indicators

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20.19+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rameshvijay578/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Sections Overview

### Hero Section
- Personal introduction and tagline
- Call-to-action buttons
- Social media links
- Animated scroll indicator

### About Section
- Professional summary
- Key attributes with icons
- Core skills showcase
- Personal philosophy

### Skills Section
- Categorized skill display
- Progress bars for proficiency levels
- Technical and soft skills
- Interactive skill overview

### Projects Section
- Project cards with descriptions
- Tech stack badges
- GitHub links
- Filter by project status

### Experience Section
- Timeline layout for work experience
- Company information and achievements
- Skills gained
- Interactive timeline navigation

### Education Section
- Academic timeline
- Institution details
- Key achievements
- Subject highlights

### Contact Section
- Contact information cards
- Interactive contact form
- Social media links
- Professional call-to-action

## 🎯 Key Features

### Navigation
- Sticky header with blur effect
- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive hamburger menu
- Social media integration

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth page transitions
- Loading animations
- Micro-interactions

### Theme System
- Dark-first design approach
- Light mode toggle
- Persistent theme preference
- Smooth theme transitions

### Performance
- Optimized images and assets
- Lazy loading components
- Efficient React rendering
- Minimal bundle size
- Fast loading times

## 🔧 Customization

### Adding New Projects
1. Update `src/data/projects.data.js`
2. Add project object with required fields
3. Include GitHub repository URL
4. Specify tech stack and features

### Updating Skills
1. Modify `src/data/skills.data.js`
2. Update categories and skill levels
3. Add new skills with proficiency percentages

### Changing Colors
1. Update `tailwind.config.js`
2. Modify color palette in theme extension
3. Update CSS custom properties in `globals.css`

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for fast loading
- **Bundle Size**: < 500KB (gzipped)
- **First Contentful Paint**: < 1.5s

## 🌐 Deployment

The portfolio is designed to be easily deployed on various platforms:

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Vercel automatically detects the framework
3. Deploy with zero configuration

### GitHub Pages
1. Update `vite.config.js` base path if needed
2. Build the project
3. Deploy `dist` folder to `gh-pages` branch

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Ramasubramaniyan K**
- Final-year Computer Science & Engineering (Cyber Security) Student
- Java Developer | DSA Enthusiast | Backend Development
- Location: Chennai, Tamil Nadu, India

📧 Email: rameshvijay578@gmail.com
🔗 LinkedIn: [Ramasubramaniyan K](https://linkedin.com/in/ramasubramaniyan-k)
🐙 GitHub: [rameshvijay578](https://github.com/rameshvijay578)

---

⭐ If you like this portfolio, please give it a star!
