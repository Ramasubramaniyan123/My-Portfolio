import React, { useEffect, useState } from 'react';
import { Hash, Target, TrendingUp, Trophy, User } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const LeetCode = () => {
  const leetCodeApiUrl = 'https://leetcode-api-faisalshohag.vercel.app/Ramasubramaniyan123';

  const [leetCodeStats, setLeetCodeStats] = useState({
    totalSolved: null,
    easy: null,
    medium: null,
    hard: null,
    ranking: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchJson = async (url) => {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }
      return response.json();
    };

    const fetchStats = async () => {
      try {
        let data;
        try {
          data = await fetchJson(leetCodeApiUrl);
        } catch {
          const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(leetCodeApiUrl)}`;
          data = await fetchJson(proxyUrl);
        }

        const mapped = {
          totalSolved: typeof data?.totalSolved === 'number' ? data.totalSolved : null,
          easy: typeof data?.easySolved === 'number' ? data.easySolved : null,
          medium: typeof data?.mediumSolved === 'number' ? data.mediumSolved : null,
          hard: typeof data?.hardSolved === 'number' ? data.hardSolved : null,
          ranking: typeof data?.ranking === 'number' ? data.ranking : null,
          loading: false,
          error: null,
        };

        if (isMounted) setLeetCodeStats(mapped);
      } catch (err) {
        if (!isMounted) return;
        setLeetCodeStats((prev) => ({
          ...prev,
          loading: false,
          error: err?.message || 'Failed to load LeetCode stats'
        }));
      }
    };

    fetchStats();
    const intervalId = setInterval(fetchStats, 5 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [leetCodeApiUrl]);

  const statsCards = [
    { key: 'totalSolved', label: 'Total Solved', icon: Hash, accent: 'text-primary', border: 'border-border', bg: 'bg-white dark:bg-slate-700' },
    { key: 'easy', label: 'Easy', icon: Target, accent: 'text-green-600', border: 'border-green-100 dark:border-green-800', bg: 'bg-green-50 dark:bg-green-900' },
    { key: 'medium', label: 'Medium', icon: TrendingUp, accent: 'text-gray-600', border: 'border-gray-100 dark:border-gray-700', bg: 'bg-gray-50 dark:bg-gray-800' },
    { key: 'hard', label: 'Hard', icon: Trophy, accent: 'text-red-600', border: 'border-red-100 dark:border-red-800', bg: 'bg-red-50 dark:bg-red-900' },
    { key: 'ranking', label: 'Ranking', icon: User, accent: 'text-secondary', border: 'border-secondary/30', bg: 'bg-white dark:bg-slate-700' }
  ];

  return (
    <section id="leetcode" className="section-padding bg-background dark:bg-slate-900">
      <div className="max-w-5xl mx-auto container-padding">
        <SectionTitle
          title="LeetCode"
          subtitle="Problem-solving journey through algorithmic challenges"
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-border dark:border-slate-700 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {statsCards.map((stat) => (
                <div
                  key={stat.key}
                  className={`group rounded-xl border ${stat.border} ${stat.bg} p-5 transition-all duration-250 hover:shadow-md`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-text-secondary dark:text-slate-300">{stat.label}</div>
                    <stat.icon className={`w-5 h-5 ${stat.accent} transition-transform duration-250 group-hover:rotate-[12deg] group-hover:scale-110`} />
                  </div>
                  <div className="mt-3 text-2xl md:text-3xl font-bold text-text-primary dark:text-slate-100">
                    {leetCodeStats.loading ? '…' : (leetCodeStats[stat.key] ?? '—')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
