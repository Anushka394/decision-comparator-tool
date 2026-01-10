# Decision Comparison Tool - Hackathon Project

## Project Overview
A full-stack web application that helps users make better decisions by comparing two options with AI-generated pros, cons, and trade-offs.

## Architecture
- **Frontend**: React application with clean UI for input and results display
- **Backend**: Node.js/Express API that processes comparisons
- **No Database**: All processing happens in-memory for simplicity

## Key Features
- Problem description input
- Two-option comparison
- Automated pros/cons generation
- Trade-off analysis
- Recommendation engine
- Responsive design

## Project Structure
```
├── frontend/          # React application
│   ├── src/
│   │   ├── App.js     # Main component with form and results
│   │   ├── index.js   # React entry point
│   │   └── index.css  # Styling
│   ├── public/
│   └── package.json
├── backend/           # Express API server
│   ├── server.js      # Main server with comparison logic
│   └── package.json
├── .kiro/
│   └── context.md     # This file
└── package.json       # Root package with dev scripts
```

## API Endpoints
- `GET /api/health` - Health check
- `POST /api/compare` - Compare two options
  - Body: `{ problem, option1, option2 }`
  - Returns: Structured comparison with pros, cons, trade-offs

## Development Commands
- `npm run install-all` - Install all dependencies
- `npm run dev` - Start both frontend and backend
- `npm run frontend` - Start React dev server only
- `npm run backend` - Start Express server only

## Hackathon Notes
- Minimal viable product focused on core functionality
- Mock comparison logic (can be enhanced with AI/ML)
- Clean, professional UI suitable for demos
- Easy to extend with additional features