# DecisionAI

A web app I built to help people compare options and make better decisions. Sometimes you just need to see the pros and cons laid out clearly, you know?

## What it does

Enter a decision you're struggling with and two options you're considering. The app breaks down the advantages and disadvantages of each choice, shows you the trade-offs, and gives you a recommendation. All your past comparisons are saved so you can look back at them later.

## Why I built this

We all face tough decisions - career moves, purchases, life choices. I wanted to create something that makes the decision-making process less overwhelming by organizing your thoughts in a structured way.

## Tech I used

**Frontend**
- React for the UI
- React Router for page navigation
- Axios for API calls
- CSS3 for styling (no frameworks, just vanilla CSS)

**Backend**
- Node.js + Express for the API
- Simple REST endpoints

The whole thing runs locally - frontend on port 3000, backend on 5000.

## Getting started

Clone it and install dependencies:
```bash
npm run install-all
```

Run both servers:
```bash
npm run dev
```

Or run them separately if you prefer:
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2  
cd frontend && npm start
```

## Project structure

```
├── frontend/
│   ├── src/
│   │   ├── components/    # Navbar
│   │   ├── pages/         # Home, Compare, History, About
│   │   ├── App.js
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.js
│   └── package.json
└── package.json
```

## Features

**Compare page** - Main tool where you input your decision and options

**History page** - See all your past comparisons, click to view details

**Home page** - Landing page explaining what the app does

**About page** - More info about how it works

The UI has some nice touches like gradient backgrounds, smooth animations, and a glass effect on the cards. Everything's responsive so it works on mobile too.

## API

There's one main endpoint:

```
POST /api/compare
```

Send it:
```json
{
  "problem": "your decision",
  "option1": "first choice",
  "option2": "second choice"
}
```

Get back:
```json
{
  "problem": "...",
  "option1": { "name": "...", "pros": [...], "cons": [...] },
  "option2": { "name": "...", "pros": [...], "cons": [...] },
  "tradeOffs": [...],
  "recommendation": "..."
}
```

## What I learned

This was a good project for practicing:
- Multi-page React apps with routing
- Building REST APIs
- Managing state with hooks
- Local storage for data persistence
- CSS Grid and Flexbox layouts
- Making things responsive

## Future ideas

Some things I might add:
- User accounts and authentication
- Database instead of local storage
- Export comparisons as PDF
- Compare more than 2 options
- Dark mode
- Share decisions via link

## License

MIT - feel free to use this however you want

---
