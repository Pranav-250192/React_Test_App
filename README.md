# React Test App

A simple React project for testing — Counter, Fetch, and Form components.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Structure

```
react-test-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── App.module.css
    └── components/
        ├── Counter.jsx
        ├── Counter.module.css
        ├── FetchTest.jsx
        ├── FetchTest.module.css
        ├── FormTest.jsx
        └── FormTest.module.css
```

## Components

- **Counter** — useState, increment/decrement/reset, conditional badge
- **FetchTest** — async fetch, loading/error states, JSONPlaceholder API
- **FormTest** — controlled inputs, validation, submit handler
