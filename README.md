# DecisionAI 🤔➡️✅

A web app that helps you compare two options and make smarter decisions. Enter your problem, give two options, and get a full breakdown of pros, cons, trade-offs, and a recommendation.

🌐 **Live App:** https://decision-comparator-tool.vercel.app

---

## What It Does

- Create an account and log in
- Enter any decision you're struggling with
- Get pros & cons for both options
- See key trade-offs and a final recommendation
- View your full decision history anytime
- Works on mobile and desktop

---

## Tech Stack

**Frontend**
- React - UI framework
- React Router - page navigation
- Axios - API calls
- CSS3 - styling

**Backend**
- Node.js - runtime
- Express.js - web server
- JWT - user authentication
- bcryptjs - password hashing

**Database**
- MySQL - stores users, decisions, pros/cons
- Hosted on Railway

**Deployment**
- Frontend → Vercel
- Backend → Render
- Database → Railway

---

## Project Structure

```
decision-comparator/
├── backend/
│   ├── config/        # Database connection
│   ├── controllers/   # Business logic
│   ├── middleware/    # JWT auth check
│   ├── routes/        # API endpoints
│   ├── utils/         # Token generator
│   └── server.js      # Entry point
└── frontend/
    └── src/
        ├── components/  # Navbar, ProtectedRoute
        ├── context/     # Auth state
        └── pages/       # Home, Compare, History, Login, Register
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Login |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/decisions/compare` | Compare two options |
| GET | `/api/decisions/history` | Get decision history |
| DELETE | `/api/decisions/:id` | Delete a decision |

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/Anushka394/decision-comparator-tool.git
cd decision-comparator

# Install all dependencies
npm run install-all

# Add your environment variables in backend/.env
# Then start both servers
npm run dev
```

Backend runs on `http://localhost:5000`  
Frontend runs on `http://localhost:3000`

---

Made by Anushka Bhandari
