/frontend
Create a modern, premium landing page for an AI-powered web application called InterviewPilot using React, Vite, and Tailwind CSS.

The design should have a dark navy background with purple gradients and a futuristic SaaS look.

The page should include:

- Responsive navbar with InterviewPilot logo, Home, About, GitHub, and a "Start Interview" button.
- Hero section with:
  - Badge: "Built for AB Talks AI Cohort Hackathon"
  - Heading: "Practice Smarter. Interview Better."
  - Subtitle: "AI-Powered Technical Interview Platform"
  - Description explaining personalized AI interviews.
  - Primary CTA: "Start Interview"
  - Secondary CTA: "Learn More"
- On the right, instead of a robot illustration, create a modern mock interview interface showing:
  - AI interviewer asking a technical question
  - Candidate response
  - Progress bar (Question 3 of 8)
  - "AI analyzing your answer..." status
- Below the hero section, create three feature cards:
  - Adaptive Questions
  - Intelligent Follow-ups
  - Personalized Feedback
- Add subtle hover animations, glassmorphism cards, rounded corners, smooth transitions, and a premium UI.
- Make the page fully responsive and production-ready.
- Use reusable React components and clean Tailwind CSS.

<!-- NAVBAR -->

Create a modern, responsive Navbar component for an AI-powered web application called InterviewPilot using React, Tailwind CSS, and Lucide React icons.

Requirements:

- Sticky navigation bar with backdrop blur and glassmorphism effect.
- Dark navy background with subtle transparency.
- Left side:
  - Paper airplane icon (Lucide SendHorizonal or Send)
  - Brand name "InterviewPilot"
  - "Pilot" should be highlighted with a purple gradient.
- Center:
  - Home
  - About
  - Features
- Right side:
  - Rounded purple gradient button "Start Interview"
- Mobile:
  - Hamburger menu using Lucide Menu and X icons.
  - Collapsible navigation.
- Hover animations for links.
- Smooth transitions.
- Fully responsive.
- Production-ready code using React functional components.

<!-- Hero.jsx -->

Create a premium Hero section for an AI-powered web application called InterviewPilot using React, Tailwind CSS, Framer Motion, and Lucide React.

The Hero section should have a modern SaaS design with a dark navy background and purple gradient accents.

Layout:
- Two-column responsive layout.
- Left side contains:
  - Small pill badge:
      "Built for AB Talks AI Cohort Hackathon"
  - Large heading:
      "Practice Smarter."
      "Interview Better."
      (Highlight "Interview Better." with a purple gradient.)
  - Subtitle:
      "AI-Powered Technical Interview Platform"
  - Description:
      "Experience personalized AI interviews that adapt to your learning journey, ask intelligent follow-up questions, and provide actionable technical feedback."
  - Two CTA buttons:
      • Start Interview (primary gradient button)
      • Learn More (glassmorphism outline button)

Right side:
Instead of a robot illustration, create a futuristic laptop or floating chat window that previews the product.

Inside the preview:
- AI Interviewer
- Question 3 / 8
- Technical question:
  "Explain how vector databases differ from traditional SQL databases."
- Candidate answer bubble.
- Purple progress bar.
- Small text:
  "AI is analyzing your answer..."

Visual style:
- Glassmorphism cards.
- Purple glow.
- Floating blurred circles.
- Soft shadows.
- Rounded corners (20px).
- Smooth hover effects.
- Responsive layout.

Generate production-ready React component using Tailwind CSS.

<!-- Features.jsx -->

Create a premium "Features" section for InterviewPilot using React and Tailwind CSS.

The section should follow the same futuristic dark navy and purple SaaS theme as the landing page.

Requirements:

- Responsive 3-column layout on desktop and stacked cards on mobile.
- Section title:
  "Why Choose InterviewPilot?"
- Subtitle:
  "An AI-powered interview platform that adapts to every candidate's learning journey."

Create three glassmorphism feature cards with Lucide React icons.

Feature 1:
🤖 Adaptive Questions
Description:
Generate personalized technical interview questions based on completed curriculum topics and candidate progress.

Feature 2:
🧠 Intelligent Follow-ups
Description:
Analyze each response in real time and ask contextual follow-up questions like a real technical interviewer.

Feature 3:
📊 Actionable Feedback
Description:
Receive detailed performance insights, strengths, knowledge gaps, and recommended topics after every interview.

Design Requirements:
- Glassmorphism cards
- Rounded corners (20px)
- Purple glow on hover
- Smooth animations
- Consistent spacing
- Lucide icons
- Fully responsive
- Production-ready React component using Tailwind CSS.

<!-- footer.jsx -->

Create a modern Footer component for an AI-powered web application called InterviewPilot using React, Tailwind CSS, and Lucide React.

Requirements:

- Dark navy background matching the website theme.
- Responsive layout.
- Left section:
  - Paper airplane logo
  - InterviewPilot branding
  - Short description:
    "AI-powered technical interview platform built for personalized learning and interview preparation."

- Middle section:
  Quick Links
  - Home
  - Features
  - About

- Right section:
  Tech Stack
  - React
  - Node.js
  - Express
  - Gemini API
  - Tailwind CSS

- Bottom divider with:
  © 2026 InterviewPilot. Built for the AB Talks AI Cohort Hackathon.

Design:
- Glassmorphism style
- Purple accents
- Clean typography
- Soft hover effects
- Responsive
- Production-ready React component.

<!-- Candidate Selection  -->

Create a Candidate Selection page for InterviewPilot using React, React Router, Tailwind CSS, and Lucide React.

Keep the same dark navy (#0B1020) and purple gradient theme as the landing page.

The page should allow the user to select a candidate before starting an AI technical interview.

Include:

- A top navigation/header with InterviewPilot logo.
- Heading: "Select a Candidate"
- Subtitle: "Choose a candidate profile to begin a personalized technical interview."

Display 4 candidate profiles in a responsive grid.

Each candidate card should contain:
- Avatar with candidate initials
- Candidate name
- Role
- Completed missions
- Number of attempts
- Learning progress
- "Start Interview" button

Use realistic sample candidate data for now.

Design:
- Dark navy background
- Glassmorphism cards
- Purple gradient accents
- Rounded corners
- Subtle purple glow on hover
- Smooth transitions
- Clean professional SaaS interface
- Fully responsive

Create:
1. CandidateSelection.jsx
2. CandidateCard.jsx

Behavior:
- When "Start Interview" is clicked, pass the selected candidate through React Router state.
- Navigate to `/briefing`.
- Do not connect to the backend yet.
- Keep candidate data local for now.

Use clean, reusable React components.

<!-- Inerview page -->
Create a realistic technical interview chat interface for InterviewPilot using React, React Router, Tailwind CSS, and Lucide React.

Keep the existing dark navy and purple premium SaaS theme.

The page should look like a real technical interview rather than a generic chatbot.

Include:
- Header with InterviewPilot logo, candidate name, "Technical Interview", Question 1 of 8, and Exit Interview button.
- Scrollable conversation area.
- AI interviewer messages on the left.
- Candidate responses on the right.
- Current technical question:
  "Explain the concept of Retrieval-Augmented Generation (RAG) and why it is useful."
- Multiline answer input at the bottom.
- Submit Answer button.
- Interview progress bar.
- AI analyzing status after submission.

Use mock conversation data for now.

When the candidate submits an answer:
- Add the answer to the conversation.
- Show a temporary "AI is analyzing your response..." state.
- Then display a placeholder follow-up question.
- Do not call any backend or AI API yet.

Use React state for the conversation and input.
Make the interface responsive, polished, and production-quality.

<!-- Fix the exit button -->
Fix the Exit Interview button in Interview.jsx.

When the user clicks Exit, navigate back to the Candidate Selection page at `/candidates` using React Router's useNavigate hook.

Keep the existing styling and UI unchanged.

Also ensure the candidate interview state is cleared by navigating away from the interview page.

<!-- Feedback Page -->
Create a Technical Interview Feedback page for InterviewPilot using React, React Router, Tailwind CSS, and Lucide React.

Keep the same dark navy (#0B1020), purple gradient, glassmorphism SaaS design used throughout the application.

The page should display structured feedback after the candidate completes the interview.

Include:

1. Header
- InterviewPilot logo
- "Interview Complete" status

2. Overall Performance
- Large overall score out of 100
- Short summary of the candidate's performance
- Visual circular or progress score

3. Performance Breakdown
Create cards for:
- Technical Understanding
- Depth of Explanation
- Problem Solving
- Communication

Each should show a score and progress bar.

4. Strengths
Show 3 positive points based on the interview.

5. Areas to Improve
Show 3 actionable improvement points.

6. Curriculum Coverage
Show which AI Cohort topics were assessed, such as:
- RAG
- Vector Databases
- Prompt Engineering
- Agentic AI

7. Interview Summary
Show:
- Questions asked
- Follow-up questions
- Curriculum days covered
- Interview duration

8. Buttons
- "Try Another Interview" → navigate to `/candidates`
- "Back to Home" → navigate to `/`

Use mock data for now.

Do not connect to the AI/backend yet.

Make the page responsive, polished, and consistent with the existing InterviewPilot UI.

<!-- Backend Starts -->


We are building InterviewPilot, an AI technical interview agent for the AB Talks AI Cohort hackathon.

I want to set up the Node.js + Express backend first.

Create a clean backend structure for:
- Express server
- candidates.json
- curriculum.json
- API routes
- interview service/agent logic
- feedback generation

For now, only set up the Express server and folder structure. Do not implement the AI agent yet.

Use ES modules.
Keep the code simple and beginner-friendly because I am learning while building this hackathon project.

<!-- POST /api/interview -->

We are building InterviewPilot for the AB Talks AI Cohort hackathon.

The official technical specification requires exactly one main endpoint:

POST /api/interview

The endpoint must:
- Accept sessionId and candidate on the first request.
- Accept sessionId and message on subsequent requests.
- Maintain interview state using sessionId.
- Return { reply, done } during the interview.
- Return { reply, done: true, feedback } when the interview is complete.

Set up a clean Express backend using ES modules.

Create:
- routes/interviewRoutes.js
- services/interviewService.js

For now, do NOT use an LLM or implement the actual interview intelligence.

Instead:
1. Accept a new interview session.
2. Store the candidate and basic session state in memory.
3. Return a simple welcome message.
4. Accept subsequent messages and return a temporary mock question.
5. Keep the implementation simple and beginner-friendly.

The endpoint must be:
POST /api/interview

<!-- jumpng to LMM -->

We are building the InterviewPilot AI technical interview agent for the AB Talks AI Cohort hackathon.

The mandatory requirements are:
- Minimum 8 questions
- At least 4 different curriculum days
- Follow-up questions based on previous responses
- Conversation context maintained throughout
- Structured feedback at the end
- POST /api/interview endpoint

Implement the interview state/controller layer separately from the LLM.

The controller must:
1. Receive the candidate.
2. Find curriculum days that the candidate has passed.
3. Select at least 4 suitable curriculum days.
4. Track the current curriculum day.
5. Track question count.
6. Store every AI question and candidate response in conversation history.
7. Prevent the interview from ending before 8 questions.
8. Prevent the interview from ending before 4 curriculum days have been covered.
9. Allow the LLM to generate the actual question and adaptive follow-up.
10. When the minimum requirements are satisfied and the interview is naturally complete, generate structured feedback.

Do not implement the LLM yet.
First build a reliable interview state machine that guarantees the hackathon requirements.
Use ES modules and keep the implementation beginner-friendly.