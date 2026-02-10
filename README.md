# DecisionAI - AI-Powered Decision Comparison Tool

A professional full-stack web application that helps users make better decisions by comparing options using AI-powered analysis. Perfect portfolio project for full-stack developer roles!

## 🌟 Features

### Multi-Page Application
- **Home Page**: Beautiful landing page with hero section, features showcase, and call-to-action
- **Compare Page**: Interactive decision comparison tool with AI analysis
- **History Page**: Track and review all past decision comparisons
- **About Page**: Detailed information about the platform and technology stack

### Core Functionality
- ✅ AI-powered pros and cons analysis for each option
- ✅ Trade-off insights to understand what you gain/lose
- ✅ Smart recommendations based on your specific situation
- ✅ Decision history with local storage persistence
- ✅ Beautiful, responsive UI with smooth animations
- ✅ Professional gradient design with glass-morphism effects

### Technical Highlights
- Modern React with React Router for navigation
- RESTful API backend with Express.js
- Responsive design for all devices
- Local storage for decision history
- Professional UI/UX with animations and transitions
- Clean, maintainable code structure

## 🚀 Tech Stack

**Frontend:**
- React 18
- React Router DOM
- Axios
- CSS3 with modern features (Grid, Flexbox, Animations)
- Google Fonts (Inter)

**Backend:**
- Node.js
- Express.js
- CORS enabled

## 📦 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd decision-comparator
```

2. Install all dependencies
```bash
npm run install-all
```

## 🎯 Running the Application

### Option 1: Run both frontend and backend together
```bash
npm run dev
```

### Option 2: Run separately

**Backend (Terminal 1):**
```bash
cd backend
npm run dev
```

**Frontend (Terminal 2):**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Project Structure

```
decision-comparator/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── pages/
│   │   │   ├── Home.js & Home.css
│   │   │   ├── Compare.js & Compare.css
│   │   │   ├── History.js & History.css
│   │   │   └── About.js & About.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.js
│   └── package.json
└── package.json
```

## 🎨 Key Features for Resume

1. **Full-Stack Development**: Complete MERN-like stack implementation
2. **Modern React Patterns**: Hooks, Router, Component Architecture
3. **RESTful API Design**: Clean backend architecture
4. **Responsive Design**: Mobile-first approach with modern CSS
5. **State Management**: Local storage integration for persistence
6. **Professional UI/UX**: Glass-morphism, gradients, animations
7. **Code Organization**: Clean separation of concerns

## 🔧 API Endpoints

### POST /api/compare
Compare two options and get AI analysis

**Request Body:**
```json
{
  "problem": "What decision are you trying to make?",
  "option1": "First option",
  "option2": "Second option"
}
```

**Response:**
```json
{
  "problem": "...",
  "option1": {
    "name": "...",
    "pros": ["..."],
    "cons": ["..."]
  },
  "option2": {
    "name": "...",
    "pros": ["..."],
    "cons": ["..."]
  },
  "tradeOffs": ["..."],
  "recommendation": "..."
}
```

## 📱 Pages Overview

### Home Page
- Animated hero section with floating cards
- Features grid showcasing key capabilities
- Call-to-action section
- Smooth scroll animations

### Compare Page
- Clean form with emoji icons
- VS divider between options
- Loading states with spinner
- Detailed results with color-coded pros/cons
- Trade-offs and recommendations sections

### History Page
- List view of all past decisions
- Click to view detailed analysis
- Delete individual items or clear all
- Responsive two-column layout

### About Page
- Mission statement
- How it works (4-step process)
- Key features list
- Technology stack showcase
- Call-to-action

## 🎓 Learning Outcomes

- React Router implementation
- Component-based architecture
- RESTful API development
- Modern CSS techniques (Grid, Flexbox, Animations)
- State management with hooks
- Local storage integration
- Responsive design principles
- Professional UI/UX design

## 🚀 Future Enhancements

- User authentication
- Database integration for persistent history
- Export decisions as PDF
- Share decisions via link
- Multiple options comparison (3+)
- AI model integration for smarter analysis
- Dark mode toggle

## 📄 License

MIT

## 👨‍💻 Author

Full Stack Developer specializing in React and Node.js

---

Perfect for showcasing in your portfolio or resume! Demonstrates modern web development skills with a clean, professional implementation.
