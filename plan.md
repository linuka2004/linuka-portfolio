Proposed Changes
1. App Initialization
Scaffold a new Vite React application in d:\Linuka\portfolio.
Install dependencies: tailwindcss, framer-motion, lucide-react, clsx, tailwind-merge.
2. Styling Foundation
Configure Tailwind CSS in tailwind.config.js to include dark cosmic color palettes, glowing effects, and fluid typography.
Setup base CSS in index.css for the glassmorphism and animated gradient backgrounds.
3. Core Components
Navbar: Sticky, glassmorphism UI with links to sections.
Hero Section: Floating elements (Framer Motion), glowing text, introduction, and calls to action. A placeholder image will be included where the user can insert their photograph.
Projects Section: Dynamic cards with floating hover effects detailing the 4 featured projects.
Tech Stack/Skills Section: Hover-responsive skill tags using Tailwind.
Footer/Contact: Simple closing section with links to GitHub/LinkedIn.
Verification Plan
Automated Tests
Run npm run build to ensure the Vite build compiles successfully without errors.
Manual Verification
We will run npm run dev and use the browser tool to visually verify the responsive design, check the "antigravity" aesthetic, and ensure all framer motion animations function correctly.
Ask the user to review the website locally by clicking the live link from the Vite server to ensure it meets their visual expectations.
