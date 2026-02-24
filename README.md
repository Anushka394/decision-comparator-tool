# DecisionAI

A web application that helps users compare two options and make informed decisions. Users can create an account, compare options, and view their decision history.

## Features

- User authentication (register/login)
- Compare two options with detailed analysis
- View pros and cons for each option
- Get trade-off insights and recommendations
- Save and review decision history
- Responsive design for mobile and desktop

## Tech Stack

**Frontend:**
- React
- React Router
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcryptjs

## Prerequisites

- Node.js installed
- MySQL installed and running

## Installation

1. Clone the repository
```bash
git clone https://github.com/Anushka394/decision-comparator-tool.git
cd decision-comparator
```

2. Install dependencies
```bash
npm run install-all
```

3. Set up MySQL database

Open MySQL and run:
```sql
CREATE DATABASE decisionai_db;
```

Then run the setup script:
```bash
mysql -u root -p decisionai_db < backend/setup_database.sql
```

4. Configure environment variables

Edit `backend/.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=decisionai_db
JWT_SECRET=your_secret_key
PORT=5000
```

## Running the Application

Start both servers:
```bash
npm run dev
```

Or run separately:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage

1. Register for an account
2. Log in with your credentials
3. Go to Compare page
4. Enter your decision and two options
5. View the analysis with pros, cons, and recommendations
6. Check History page to review past decisions

## Project Structure

```
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication middleware
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # Auth context
│   │   ├── pages/       # Page components
│   │   └── App.js       # Main app component
│   └── public/
└── package.json
```

## API Endpoints

**Authentication:**
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

**Decisions:**
- POST `/api/decisions/compare` - Create new comparison
- GET `/api/decisions/history` - Get user's decision history
- DELETE `/api/decisions/:id` - Delete a decision

## Database Schema

**users**
- id, name, email, password, created_at, updated_at

**decisions**
- id, user_id, problem, option1_name, option2_name, recommendation, created_at

**pros_cons**
- id, decision_id, option_number, type, content

**tradeoffs**
- id, decision_id, content

## License

MIT
