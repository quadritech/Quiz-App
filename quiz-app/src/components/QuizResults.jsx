import React from 'react';

const QuizResults = ({ score, totalQuestions, resetQuiz }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl mb-4">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '👏' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600">Here's how you performed:</p>
          </div>

          {/* Score Display */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-2">{score}/{totalQuestions}</div>
            <div className="text-2xl font-semibold text-gray-700 mb-1">{percentage}% Correct</div>
            <div className="text-lg text-gray-500">
              {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
              <div className="text-sm text-gray-600">Incorrect</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
            >
              Take Another Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;