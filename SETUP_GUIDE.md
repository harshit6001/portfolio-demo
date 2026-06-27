# Portfolio Website - Complete Setup & Deployment Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Installation Steps](#installation-steps)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Customization Guide](#customization-guide)
6. [Deployment Guide](#deployment-guide)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This is a **production-ready, premium portfolio website** designed for:
- Web Developers
- Full-Stack Engineers
- Content Creators
- Tech Professionals

### Key Features
✅ Modern Glassmorphism Design
✅ Smooth Framer Motion Animations
✅ Fully Responsive (Mobile, Tablet, Desktop)
✅ Dark Theme with Gradient Accents
✅ Project Filtering System
✅ Social Media Integration
✅ SEO Optimized
✅ Fast Performance (Vite)
✅ No Backend Required

---

## 🚀 Installation Steps

### Step 1: Prerequisites Check
Make sure you have installed:
```bash
# Check Node.js version (should be v16+)
node --version

# Check npm version (should be v8+)
npm --version
```

### Step 2: Project Setup
```bash
# Navigate to your project directory
cd harshit-portfolio

# Install all dependencies
npm install

# This will install:
# - React 18.2
# - Vite 4.4
# - Tailwind CSS 3.3
# - Framer Motion 10.16
# - Lucide React Icons
```

### Step 3: File Structure Setup

Ensure your project has this structure:
```
harshit-portfolio/
├── src/
│   ├── components/          ← All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Creator.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  ← All content
│   ├── App.jsx              ← Main app
│   ├── main.jsx             ← Entry point
│   └── index.css            ← Global styles
├── public/                  ← Static files
│   └── resume.pdf          ← Your resume
├── index.html              ← HTML template
├── package.json            ← Dependencies
├── vite.config.js          ← Vite config
├── tailwind.config.js      ← Tailwind config
├── postcss.config.js       ← PostCSS config
└── README.md               ← Documentation
```

### Step 4: Verify Installation
```bash
# Start development server
npm run dev

# You should see:
# ➜  Local:   http://localhost:3000/
# ➜  Press q to quit
```

---

## 📁 Project Structure Explained

### Components Folder
Each component is a standalone React module:
- **Navbar.jsx**: Sticky navigation with mobile menu
- **Hero.jsx**: Main landing section with CTA buttons
- **About.jsx**: Professional background information
- **Skills.jsx**: Technical skills categorized
- **Projects.jsx**: Featured projects with filters
- **Experience.jsx**: Timeline of achievements
- **Creator.jsx**: Content creation portfolio
- **Contact.jsx**: Contact methods and CTA
- **Footer.jsx**: Footer with links

### Data Folder
- **portfolioData.js**: Single source of truth for all content
  - Personal information
  - Social links
  - Skills
  - Projects
  - Experience
  - Creator info
  - Navigation

### Root Files
- **App.jsx**: Main component combining all sections
- **main.jsx**: React DOM render point
- **index.css**: Global styles and animations
- **index.html**: HTML template with meta tags
- **vite.config.js**: Build and dev server config
- **tailwind.config.js**: Tailwind CSS customization
- **package.json**: Dependencies and scripts

---

## 💻 Development Workflow

### Start Development Server
```bash
npm run dev
```
- Opens at localhost:3000 by default
- Hot Module Replacement (HMR) enabled
- Auto-refresh on file changes

### Create a New Component
```bash
# 1. Create new file in src/components/
# src/components/YourComponent.jsx

import React from 'react';
import { motion } from 'framer-motion';

const YourComponent = () => {
  return (
    <div>
      <h1>Your Component</h1>
    </div>
  );
};

export default YourComponent;

# 2. Add to App.jsx
import YourComponent from './components/YourComponent';

<section id="your-section">
  <YourComponent />
</section>
```

### Testing Responsive Design
```bash
# In browser DevTools:
# 1. Press F12 or Ctrl+Shift+I
# 2. Press Ctrl+Shift+M for device toolbar
# 3. Test on different screen sizes
```

---

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
personal: {
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your.email@example.com',
  intro: 'Your introduction...',
  about: 'Your about text...',
  resume: '/resume.pdf',  // Add your resume
}
```

### 2. Update Social Links

```javascript
social: [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    label: 'Connect on LinkedIn',
  },
  // Add more social links...
]
```

### 3. Update Skills

```javascript
skills: [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
  // Add more categories...
]
```

### 4. Update Projects

```javascript
projects: [
  {
    id: 1,
    title: 'Project Name',
    category: 'Web Development',
    description: 'Short description',
    longDescription: 'Detailed description',
    tech: ['React', 'Tailwind', 'Node.js'],
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/...',
    demo: 'https://demo.com/',
    color: 'from-cyan-500/20 to-blue-500/20',
    icon: '🚀',
  },
  // Add more projects...
]
```

### 5. Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Change these for your color scheme
      cyan: '#06b6d4',
      blue: '#3b82f6',
      purple: '#a855f7',
      pink: '#ec4899',
    }
  }
}
```

And update `src/index.css`:

```css
:root {
  --color-cyan: #06b6d4;
  --color-blue: #3b82f6;
  --color-purple: #a855f7;
  --color-pink: #ec4899;
}
```

### 6. Update Fonts

Fonts are in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

Change to any Google Font you prefer.

### 7. Add Your Resume

```bash
# 1. Place your resume PDF in public/ folder
# public/resume.pdf

# 2. Update in portfolioData.js
resume: '/resume.pdf'
```

### 8. Update Favicon

Edit in `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

---

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

**Advantages**:
- ⚡ Fastest deployment
- 🔄 Automatic deployments on push
- 🎯 Great for Vite projects
- 💰 Free tier available

**Steps**:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Vite)

3. **Custom Domain** (optional)
   - In Vercel Dashboard
   - Go to Settings > Domains
   - Add your custom domain
   - Update DNS records as shown

4. **Environment Variables** (if using)
   - Settings > Environment Variables
   - Add your variables from `.env.local`

### Option 2: Deploy to Netlify

1. **Build locally first**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Or connect GitHub and auto-deploy

3. **Configuration File**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Deploy to GitHub Pages

1. **Update vite.config.js**:
```javascript
export default {
  base: '/portfolio/',  // Change to your repo name
  // ... rest of config
}
```

2. **Build and deploy**:
```bash
npm run build
# Push dist/ to gh-pages branch
```

### Option 4: Deploy to Cloudflare Pages

1. **Build**:
```bash
npm run build
```

2. **Go to Cloudflare Pages**
   - Connect your GitHub repo
   - Build command: `npm run build`
   - Build directory: `dist`
   - Deploy!

---

## 🔍 Troubleshooting

### Issue 1: npm install fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue 2: Port 3000 is already in use

**Solution**:
```bash
# Use different port
npm run dev -- --port 3001

# Or kill process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue 3: Tailwind CSS not working

**Solution**:
1. Verify `index.css` is imported in `main.jsx`
2. Check `tailwind.config.js` has correct content paths
3. Restart dev server
4. Clear browser cache (Ctrl+Shift+Delete)

### Issue 4: Images not showing

**Solution**:
- Put images in `public/` folder
- Reference as `/image-name.jpg` (absolute path)
- NOT relative paths inside components

### Issue 5: Build fails

**Solution**:
```bash
# Clean everything
rm -rf node_modules dist .vite package-lock.json

# Reinstall and rebuild
npm install
npm run build

# Check for errors in console
npm run build -- --debug
```

---

## 📊 Performance Checklist

Before deploying, ensure:

- [ ] All personal info updated
- [ ] All projects filled in
- [ ] Resume uploaded to `public/`
- [ ] Social links are correct
- [ ] Images are optimized
- [ ] No console errors (F12)
- [ ] Mobile responsive (F12 > Device Toolbar)
- [ ] All links are working
- [ ] Animations are smooth
- [ ] Page loads in < 3 seconds

---

## 🎓 Learning Resources

### React
- https://react.dev
- React Hooks documentation
- Component composition patterns

### Vite
- https://vitejs.dev
- HMR (Hot Module Replacement)
- Build optimization

### Tailwind CSS
- https://tailwindcss.com/docs
- Responsive design
- Dark mode

### Framer Motion
- https://www.framer.com/motion
- Animation patterns
- Gesture animations

### Web Performance
- https://web.dev
- Lighthouse audits
- Core Web Vitals

---

## 🆘 Getting Help

If you encounter issues:

1. **Check the README.md** - Common questions
2. **Check console errors** - F12 > Console
3. **Check internet connection** - For npm install
4. **Clear cache** - `npm cache clean --force`
5. **Reinstall** - Delete node_modules, run `npm install`
6. **Update** - `npm update` to latest versions

---

## ✅ Final Checklist

Before deploying:

- [ ] All components are rendering
- [ ] No console errors or warnings
- [ ] Mobile responsive design works
- [ ] All links are functional
- [ ] Social media links point to correct profiles
- [ ] Resume file is in public folder
- [ ] Colors and theme match your preference
- [ ] Animations are smooth (no janky frames)
- [ ] Page loads under 3 seconds
- [ ] Lighthouse scores > 90

---

## 🎉 You're Ready!

Your portfolio is now ready to deploy and showcase your work to the world!

**Next Steps**:
1. Customize your content
2. Test on multiple devices
3. Deploy to your preferred platform
4. Share your portfolio
5. Keep updating with new projects

---

**Good luck with your portfolio! 🚀**
