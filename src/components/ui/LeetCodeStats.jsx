import React from 'react';
import { Trophy, Target, TrendingUp, Code, ExternalLink, Loader2 } from 'lucide-react';
import useLeetCodeStats from '../../hooks/useLeetCodeStats';

const LeetCodeStats = () => {
  const { total, easy, medium, hard, rating, ranking, reputation, topPercentage, attendedContests, loading, error } = useLeetCodeStats();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-primary" size={32} />
        <span className="ml-3 text-text-secondary">Loading LeetCode stats...</span>
      </div>
    );
  }

  if (error && !total) {
    return (
      <div className="text-center py-8">
        <p className="text-text-secondary">Unable to load LeetCode stats at the moment.</p>
      </div>
    );
  }

  // Mock data for allQuestionsCount since it's not in the unified hook
  const allQuestionsCount = [
    { difficulty: 'Easy', count: 450 },
    { difficulty: 'Medium', count: 320 },
    { difficulty: 'Hard', count: 120 }
  ];

  const totalQuestions = allQuestionsCount.reduce((sum, item) => sum + item.count, 0);
  const solveRate = totalQuestions > 0 ? ((total / totalQuestions) * 100).toFixed(1) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Solved */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Trophy className="text-yellow-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {total}
          </span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Problems Solved</p>
        <div className="mt-2 text-xs text-primary font-medium">
          {solveRate}% solve rate
        </div>
      </div>

      {/* Contest Rating */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Target className="text-blue-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {rating || 'N/A'}
          </span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Contest Rating</p>
        <div className="mt-2 text-xs text-primary font-medium">
          Top {topPercentage?.toFixed(1) || 'N/A'}%
        </div>
      </div>

      {/* Global Ranking */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <TrendingUp className="text-green-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {ranking?.toLocaleString() || 'N/A'}
          </span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Global Ranking</p>
        <div className="mt-2 text-xs text-primary font-medium">
          {attendedContests || 0} contests
        </div>
      </div>

      {/* Reputation */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Code className="text-purple-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {reputation || 0}
          </span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Reputation</p>
        <div className="mt-2 text-xs text-primary font-medium">
          Active contributor
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="md:col-span-2 lg:col-span-4 bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border">
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4">
          Problem Solving by Difficulty
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allQuestionsCount.map((item) => {
            const solvedCount = item.difficulty === 'Easy' ? easy : item.difficulty === 'Medium' ? medium : hard;
            const percentage = item.count > 0 ? ((solvedCount / item.count) * 100).toFixed(0) : 0;
            
            return (
              <div key={item.difficulty} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text-primary dark:text-dark-text-primary">
                    {item.difficulty}
                  </span>
                  <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    {solvedCount}/{item.count}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      item.difficulty === 'Easy' ? 'bg-green-500' :
                      item.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                  {percentage}% completed
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Profile Link */}
      <div className="md:col-span-2 lg:col-span-4 text-center">
        <a
          href="https://leetcode.com/u/Ramasubramaniyan123/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors font-medium"
        >
          View Full LeetCode Profile
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default LeetCodeStats;
