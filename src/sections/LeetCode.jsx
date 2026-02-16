import React, { useEffect, useMemo, useState } from 'react';
import { Code, Trophy, Target, TrendingUp, Hash, User } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const LeetCode = () => {
  const leetCodeProfileUrl = 'https://leetcode.com/u/Ramasubramaniyan123/';
  const leetCodeApiUrl = 'https://leetcode-api-faisalshohag.vercel.app/Ramasubramaniyan123';

  const [leetCodeStats, setLeetCodeStats] = useState({
    totalSolved: null,
    easy: null,
    medium: null,
    hard: null,
    ranking: null,
    loading: true,
    error: null,
    lastUpdated: null,
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
          lastUpdated: Date.now(),
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
    { key: 'totalSolved', label: 'Total Solved', icon: Hash, accent: 'text-primary', border: 'border-border', bg: 'bg-white' },
    { key: 'easy', label: 'Easy', icon: Target, accent: 'text-green-600', border: 'border-green-100', bg: 'bg-green-50' },
    { key: 'medium', label: 'Medium', icon: TrendingUp, accent: 'text-gray-600', border: 'border-gray-100', bg: 'bg-gray-50' },
    { key: 'hard', label: 'Hard', icon: Trophy, accent: 'text-red-600', border: 'border-red-100', bg: 'bg-red-50' },
    { key: 'ranking', label: 'Ranking', icon: User, accent: 'text-secondary', border: 'border-secondary/30', bg: 'bg-white' },
  ];

  return (
    <section id="leetcode" className="section-padding bg-background">
      <div className="max-w-[1400px] mx-auto container-padding">
        <SectionTitle
          title="LeetCode"
          subtitle="A structured snapshot of my problem-solving progress"
          className="mb-16"
        />

        <div className="max-w-5xl mx-auto">
          {/* Dashboard */}
          <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary">LeetCode Dashboard</h3>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={leetCodeProfileUrl}
                    target="_self"
                    className="btn-primary flex items-center justify-center"
                  >
                    View LeetCode Profile
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {statsCards.map((stat) => (
                  <div
                    key={stat.key}
                    className={`group rounded-xl border ${stat.border} ${stat.bg} p-5 transition-all duration-250 hover:shadow-md ${stat.key === 'ranking' ? 'border-secondary border-2' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-text-secondary">{stat.label}</div>
                      <stat.icon className={`w-5 h-5 ${stat.accent} transition-transform duration-250 group-hover:rotate-[12deg] group-hover:scale-110`} />
                    </div>
                    <div className="mt-3 text-2xl font-bold text-text-primary">
                      {leetCodeStats.loading ? '…' : (leetCodeStats[stat.key] ?? '—')}
                    </div>
                  </div>
                ))}
              </div>

              {leetCodeStats.error && (
                <div className="rounded-xl border border-red-100 bg-red-50 p-4">
                  <div className="text-sm text-red-600 font-medium">
                    Unable to load live stats right now.
                    <span className="ml-2 opacity-80">({leetCodeStats.error})</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
