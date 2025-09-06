import React from 'react';

const QuizQuestion = ({ 
  question, 
  currentIndex, 
  totalQuestions, 
  score, 
  progress, 
  onAnswer, 
  category, 
  difficulty 
}) => {
  const allAnswers = [question.correctAnswer, ...question.incorrectAnswers].sort();

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-blue-800">Quiz App</h1>
            <div className="text-right">
              <div className="text-sm text-gray-600">Question {currentIndex + 1} of {totalQuestions}</div
              <div className="text-sm text-gray-600">Score: {score}/{currentIndex}</div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {category.replace('_', ' ').toUpperCase()} • {difficulty.toUpperCase()}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
              {question.question.text}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {allAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => onAnswer(answer)}
                className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold mr-4">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="text-lg">{answer}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;