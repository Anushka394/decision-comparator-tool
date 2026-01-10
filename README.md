# Decision Comparison Tool

A full-stack hackathon project that helps users make better decisions by comparing two options with automated analysis.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

## Features

- Input a problem and two options to compare
- Get automated pros and cons for each option
- View trade-offs between options
- Receive a recommendation
- Clean, responsive UI

## Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Styling:** Pure CSS with modern design

## Project Structure

```
├── frontend/          # React application
├── backend/           # Express API server
├── .kiro/            # Project context and documentation
└── package.json      # Root package with dev scripts
```

## API Usage

```javascript
POST /api/compare
{
  "problem": "Choose a programming language for my project",
  "option1": "Python",
  "option2": "JavaScript"
}
```
