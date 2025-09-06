# Quiz-App
My Alx CapStone Project 
A simple quiz application built with React.js and Tailwind CSS. Users can take quizzes on different topics and view their scores.
Features

Select quiz categories (Music, Sports, Movies, History, Science, Arts & Literature)
Choose difficulty levels (Easy, Medium, Hard)
Answer multiple choice questions
Track your score in real-time
View final results with performance breakdown
Responsive design for mobile and desktop

Technologies Used

React.js
Tailwind CSS
The Trivia API
Vite

Installation

Clone the repository:
bashgit clone https://github.com/yourusername/quiz-app.git
cd quiz-app

Install dependencies:
bashnpm install

Install Tailwind CSS:
bashnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Add Tailwind to your src/index.css:
css@tailwind base;
@tailwind components;
@tailwind utilities;

Start the development server:
bashnpm run dev

Open http://localhost:5173 in your browser.

How to Use

Select a category from the available options
Choose your preferred difficulty level
Click "Start Quiz" to begin
Answer the questions by clicking on your chosen option
View your final score and results
Click "Take Another Quiz" to try again

Project Structure
src/
├── components/
│   ├── QuizSetup.jsx      # Category and difficulty selection
│   ├── QuizQuestion.jsx   # Question display and answers
│   └── QuizResults.jsx    # Final score and results
├── App.jsx                # Main app logic
├── index.css             # Tailwind imports
└── main.jsx              # App entry point
API
This app uses The Trivia API to fetch quiz questions. No API key required.