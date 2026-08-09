# InterviewPilot

AI-powered technical interview practice platform that conducts personalized interviews based on a candidate's experience, learning history, and current curriculum.

InterviewPilot dynamically adapts interview questions based on previous answers, gradually increasing or decreasing difficulty to simulate a more realistic technical interview experience.

## Features

- Personalized AI technical interviews
- Candidate-specific interview questions
- Dynamic difficulty adaptation
- Conversational follow-up questions
- Curriculum-based questioning
- Interview performance evaluation
- AI-generated feedback and overall score
- Candidate learning progress tracking
- Responsive and modern UI
- Separate frontend and backend deployment

## How It Works

1. Candidate selects their profile.
2. InterviewPilot analyzes the candidate's experience and learning history.
3. An initial technical question is generated.
4. The candidate submits an answer.
5. The AI evaluates the response.
6. The next question is generated based on the previous answer.
7. Question difficulty adapts according to the candidate's performance.
8. After the interview, the candidate receives a performance report with an overall score and feedback.

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React

### Backend

- Node.js
- Express.js
- Groq API
- CORS
- dotenv

## Project Structure

```text
interview-pilot/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CandidateCard.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── CandidateSelection.jsx
│   │   │   ├── InterviewBriefing.jsx
│   │   │   ├── Interview.jsx
│   │   │   └── Feedback.jsx
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md