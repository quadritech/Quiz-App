import React from 'react';

const QuizSetup = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  selectedDifficulty, 
  setSelectedDifficulty, 
  startQuiz, 
  loading 
}) => {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Quiz App</h1>
          <p className="text-gray-600">Test your knowledge with fun trivia questions!</p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Quiz</h2>
          
          {/* Category Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-4">Select Category:</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 border-2 rounded-lg text-center transition-all ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{category.emoji}</div>
                  <div className="text-sm font-medium">{category.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-4">Select Difficulty:</label>
            <div className="flex space-x-4 justify-center">
              {['easy', 'medium', 'hard'].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedDifficulty === difficulty
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startQuiz}
            disabled={loading}
            className="w-full bg-blue-600 text-white text-xl font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {loading ? 'Loading Questions...' : 'Start Quiz 🚀'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSetup;