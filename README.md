# Harshit Agarwal - Premium Portfolio Website

A modern, professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a glassmorphic design with cyan/blue/purple gradient accents, smooth animations, and full responsiveness.

## 🎨 Design Features

- **Dark Glassmorphism Theme** - Modern frosted glass effect cards with backdrop blur
- **Gradient Accents** - Cyan, blue, and purple color palette with smooth gradients
- **Smooth Animations** - Framer Motion animations for entry, hover, and scroll effects
- **Fully Responsive** - Desktop, tablet, and mobile optimized
- **Professional Typography** - Clean, readable fonts with proper hierarchy
- **Accessible** - Semantic HTML, ARIA labels, and keyboard navigation support

## 🚀 Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 4.4
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Icons**: Lucide React 0.263
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
harshit-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with intro & CTA buttons
│   │   ├── About.jsx           # About section with professional background
│   │   ├── Skills.jsx          # Categorized skills display
│   │   ├── Projects.jsx        # Featured projects with filtering
│   │   ├── Experience.jsx      # Timeline of achievements
│   │   ├── Creator.jsx         # Content creator section
│   │   ├── Contact.jsx         # Contact methods and CTA
│   │   └── Footer.jsx          # Footer with links and info
│   ├── data/
│   │   └── portfolioData.js    # All portfolio content (centralized)
│   ├── App.jsx                 # Main app component with layout
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and animations
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies and scripts
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository** (or extract the provided files)
```bash
git clone <repository-url>
cd harshit-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```
The site will open at `http://localhost:3000` automatically.

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📝 Customization Guide

### Content Updates

All portfolio content is centralized in `src/data/portfolioData.js`. Edit this file to update:

- Personal information (name, email, location)
- Social media links
- About section text
- Skills and categories
- Project details (title, description, tech stack, features)
- Experience/achievements
- Creator information
- Navigation links

### Design Customization

#### Colors
- Modify the Tailwind config in `tailwind.config.js`
- Update CSS variables in `src/index.css`
- Color palette: Cyan (#06b6d4), Blue (#3b82f6), Purple (#a855f7)

#### Typography
- Fonts are imported in `src/index.css` (Poppins and Playfair Display)
- Adjust font sizes in `tailwind.config.js` or component classes

#### Animations
- Framer Motion configurations in component files
- Custom CSS animations in `src/index.css`
- Adjust animation timing and effects as needed

### Adding New Sections

To add a new section:

1. Create a new component in `src/components/NewSection.jsx`
2. Add data to `src/data/portfolioData.js`
3. Import and use the component in `src/App.jsx`
4. Add navigation link to `portfolioData.navigation`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive classes (`sm:`, `md:`, `lg:`) for optimal display across devices.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast ratios meet WCAG standards
- Alt text for images and icons

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy" - done!

```bash
# Or deploy directly from CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder, or:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Add to vite.config.js
base: '/harshit-portfolio/',

# Build and deploy
npm run build
# Then push dist folder to gh-pages branch
```

## 📊 Performance Optimizations

- **Code Splitting**: Components are lazy-loaded
- **Tree Shaking**: Unused code is removed during build
- **Image Optimization**: Use next-gen image formats where possible
- **CSS Purging**: Tailwind removes unused styles
- **Minification**: Production builds are minified

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint (if configured)
```

## 📚 Documentation & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Lucide React Icons](https://lucide.dev)

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Tailwind styles not showing
- Make sure `node_modules` is installed
- Restart the dev server
- Check that CSS file is imported in `main.jsx`

### Animations not working
- Verify Framer Motion is installed
- Check browser console for errors
- Ensure components have proper motion wrapper elements

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support & Feedback

For issues, questions, or suggestions, please reach out via:
- Email: iharshitagarwal01@gmail.com
- LinkedIn: https://www.linkedin.com/in/harshit-agarwal010/
- Instagram: https://www.instagram.com/_.harshit_agarwal

---

**Built with ❤️ by Harshit Agarwal**

Made with React, Vite, Tailwind CSS, and Framer Motion
