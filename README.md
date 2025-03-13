# AI-Powered 3D Portfolio Website

A modern, interactive portfolio website showcasing ML and Data Engineering expertise through immersive 3D experiences and dynamic visualizations.

## Features

- Interactive 3D globe/neural network visualization
- Dynamic 3D avatar with animated introduction
- Interactive project showcase with 3D cards
- Holographic skills visualization
- Interactive blog with data visualizations
- AI-powered contact interface
- Smooth parallax effects and glassmorphism design

## Tech Stack

### Frontend
- React.js
- Three.js for 3D rendering
- React Three Fiber
- GSAP for animations
- TailwindCSS for styling
- Framer Motion for UI animations

### Backend
- Python Flask
- SQLAlchemy for database
- JWT for authentication

## Setup Instructions

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
4. Start the development servers:
   - Frontend: `npm start` (runs on http://localhost:3000)
   - Backend: `python app.py` (runs on http://localhost:5000)

## Project Structure

```
.
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── styles/
│   └── package.json
├── backend/           # Flask backend application
│   ├── app.py
│   ├── models/
│   ├── routes/
│   └── requirements.txt
└── README.md
``` 