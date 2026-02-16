import { useState, useEffect } from 'react';

const LEETCODE_USERNAME = 'Ramasubramaniyan123';

const LEETCODE_GRAPHQL_QUERY = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        reputation
        starRating
      }
    }
  }
`;

export const useLeetCodeStats = () => {
  const [stats, setStats] = useState({
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Using a CORS proxy or direct fetch to LeetCode's GraphQL endpoint
        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Referer': 'https://leetcode.com',
          },
          body: JSON.stringify({
            query: LEETCODE_GRAPHQL_QUERY,
            variables: { username: LEETCODE_USERNAME }
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }

        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const submissions = data.data?.matchedUser?.submitStats?.acSubmissionNum || [];
        
        const easy = submissions.find(s => s.difficulty === 'Easy')?.count || 0;
        const medium = submissions.find(s => s.difficulty === 'Medium')?.count || 0;
        const hard = submissions.find(s => s.difficulty === 'Hard')?.count || 0;
        const total = easy + medium + hard;

        setStats({
          total,
          easy,
          medium,
          hard,
          loading: false,
          error: null
        });
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        // Fallback to default stats if API fails
        setStats({
          total: 156,
          easy: 89,
          medium: 54,
          hard: 13,
          loading: false,
          error: err.message
        });
      }
    };

    fetchStats();
  }, []);

  return stats;
};

export default useLeetCodeStats;
