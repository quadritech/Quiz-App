
import React, { useState } from 'react';
import QuizSetup from './components/QuizSetup';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';
import './App.css';

const QuizApp = () => {
  const [quizState, setQuizState] = useState('setup'); // 'setup', 'quiz', 'results'
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');

  const categories = [
    { id: 'music', name: 'Music', emoji: '🎵' },
    { id: 'sport_and_leisure', name: 'Sports', emoji: '⚽' },
    { id: 'film_and_tv', name: 'Movies & TV', emoji: '🎬' },
    { id: 'arts_and_literature', name: 'Arts & Literature', emoji: '📚' },
    { id: 'history', name: 'History', emoji: '🏛️' },
    { id: 'science', name: 'Science', emoji: '🧪' }
  ];

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const categoryParam = selectedCategory ? `categories=${selectedCategory}&` : '';
      const url = `https://the-trivia-api.com/v2/questions?${categoryParam}limit=10&difficulties=${selectedDifficulty}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data && data.length > 0) {
        setQuestions(data);
        setQuizState('quiz');
      } else {
        alert('No questions found. Try a different category or difficulty.');
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      alert('Failed to load questions. Please try again.');
    }
    setLoading(false);
  };

  const startQuiz = () => {
    if (!selectedCategory) {
      alert('Please select a category first!');
      return;
    }
    fetchQuestions();
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    const newAnswer = {
      question: currentQuestion.question.text,
      selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect
    };
    
    setUserAnswers([...userAnswers, newAnswer]);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('results');
    }
  };

  const resetQuiz = () => {
    setQuizState('setup');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setSelectedCategory('');
    setSelectedDifficulty('medium');
  };

  // Render different screens based on quiz state
  if (quizState === 'setup') {
    return (
      <QuizSetup
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        startQuiz={startQuiz}
        loading={loading}
      />
    );
  }

  if (quizState === 'quiz' &&\ questions.length > 0) {
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
      <QuizQuestion
        question={currentQuestion}
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        score={score}
        progress={progress}
        onAnswer={handleAnswer}
        category={currentQuestion.category}
        difficulty={selectedDifficulty}
      />
    );
  }

  if (quizState === 'results') {
    return (
      <QuizResults
        score={score}
        totalQuestions={questions.length}
        resetQuiz={resetQuiz}
      />
    );
  }

  return <div>Loading...</div>;
};

function App() {
  return <QuizApp />;
}

export default App;
