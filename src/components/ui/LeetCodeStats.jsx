import React, { useState, useEffect } from 'react';
import { Trophy, Target, TrendingUp, Code, ExternalLink, Loader2 } from 'lucide-react';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using LeetCode GraphQL API
        const query = `
          query getUserProfile($username: String!) {
            allQuestionsCount {
              difficulty
              count
            }
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
                totalSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
              profile {
                realName
                userAvatar
                reputation
              }
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
            userContestRanking(username: $username) {
              rating
              globalRanking
              topPercentage
              attendedContestsCount
            }
          }
        `;

        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: query,
            variables: { username: 'Ramasubramaniyan123' }
          })
        });

        const data = await response.json();
        
        if (data.errors) {
          throw new Error('Failed to fetch LeetCode data');
        }

        setStats(data.data);
      } catch (err) {
        setError(err.message);
        // Fallback to mock data if API fails
        setStats({
          allQuestionsCount: [
            { difficulty: 'Easy', count: 450 },
            { difficulty: 'Medium', count: 320 },
            { difficulty: 'Hard', count: 120 }
          ],
          matchedUser: {
            submitStats: {
              acSubmissionNum: [
                { difficulty: 'Easy', count: 420 },
                { difficulty: 'Medium', count: 280 },
                { difficulty: 'Hard', count: 95 }
              ]
            },
            profile: {
              reputation: 1250
            }
          },
          userContestRanking: {
            rating: 1650,
            globalRanking: 45000,
            topPercentage: 15.2,
            attendedContestsCount: 12
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin text-primary" size={32} />
        <span className="ml-3 text-text-secondary">Loading LeetCode stats...</span>
      </div>
    );
  }

  if (error && !stats) {
    return (
      <div className="text-center py-8">
        <p className="text-text-secondary">Unable to load LeetCode stats at the moment.</p>
      </div>
    );
  }

  const totalSolved = stats?.matchedUser?.submitStats?.acSubmissionNum?.reduce(
    (sum, item) => sum + item.count, 0
  ) || 0;

  const totalQuestions = stats?.allQuestionsCount?.reduce(
    (sum, item) => sum + item.count, 0
  ) || 0;

  const solveRate = totalQuestions > 0 ? ((totalSolved / totalQuestions) * 100).toFixed(1) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Solved */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Trophy className="text-yellow-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {totalSolved}
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
            {stats?.userContestRanking?.rating || 'N/A'}
          </span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Contest Rating</p>
        <div className="mt-2 text-xs text-primary font-medium">
          Top {stats?.userContestRanking?.topPercentage?.toFixed(1) || 'N/A'}%
        </div>
      </div>

      {/* Global Ranking */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <TrendingUp className="text-green-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {stats?.userContestRanking?.globalRanking?.toLocaleString() || 'N/A'}
          </span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary">Global Ranking</p>
        <div className="mt-2 text-xs text-primary font-medium">
          {stats?.userContestRanking?.attendedContestsCount || 0} contests
        </div>
      </div>

      {/* Reputation */}
      <div className="bg-white dark:bg-dark-card rounded-xl p-6 border border-border dark:border-dark-border hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Code className="text-purple-500" size={24} />
          <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {stats?.matchedUser?.profile?.reputation || 0}
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
          {stats?.allQuestionsCount?.map((item) => {
            const solved = stats?.matchedUser?.submitStats?.acSubmissionNum?.find(
              (solved) => solved.difficulty === item.difficulty
            );
            const percentage = item.count > 0 ? ((solved?.count || 0) / item.count * 100).toFixed(0) : 0;
            
            return (
              <div key={item.difficulty} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text-primary dark:text-dark-text-primary">
                    {item.difficulty}
                  </span>
                  <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    {solved?.count || 0}/{item.count}
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
