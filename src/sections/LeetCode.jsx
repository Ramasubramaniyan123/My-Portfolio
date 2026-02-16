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

  // Manually editable monthly tracker
  const monthlyTracker = useMemo(() => ([
    { month: 'January', solved: 40 },
    { month: 'February', solved: 35 },
    { month: 'March', solved: 50 },
  ]), []);

  const maxSolvedInMonth = Math.max(...monthlyTracker.map(m => m.solved), 1);

  const statsCards = [
    { key: 'totalSolved', label: 'Total Solved', icon: Hash, accent: 'text-accent-primary', border: 'border-accent-primary/30', bg: 'bg-accent-primary/10' },
    { key: 'easy', label: 'Easy', icon: Target, accent: 'text-text-secondary', border: 'border-border', bg: 'bg-secondary' },
    { key: 'medium', label: 'Medium', icon: TrendingUp, accent: 'text-accent-secondary', border: 'border-accent-secondary/30', bg: 'bg-accent-secondary/10' },
    { key: 'hard', label: 'Hard', icon: Trophy, accent: 'text-accent-primary', border: 'border-accent-primary/30', bg: 'bg-accent-primary/10' },
    { key: 'ranking', label: 'Ranking', icon: User, accent: 'text-text-secondary', border: 'border-border', bg: 'bg-secondary' },
  ];

  return (
    <section id="leetcode" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="LeetCode"
          subtitle="A structured snapshot of my problem-solving progress"
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          {/* Dashboard */}
          <Card className="p-8 md:p-12">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/30">
                    <Code className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary">LeetCode Dashboard</h3>
                    <p className="text-text-secondary text-sm mt-1">Real-time stats (auto-updated).</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => { window.location.href = leetCodeProfileUrl; }}
                    className="group"
                    type="button"
                  >
                    View Full LeetCode Profile
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {statsCards.map((stat) => (
                  <div
                    key={stat.key}
                    className={`group rounded-xl border ${stat.border} ${stat.bg} p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30 hover:border-accent-primary`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-text-secondary">{stat.label}</div>
                      <stat.icon className={`w-4 h-4 ${stat.accent} transition-transform duration-300 group-hover:rotate-[15deg] group-hover:scale-110`} />
                    </div>
                    <div className="mt-2 text-xl font-bold text-text-primary">
                      {leetCodeStats.loading ? '…' : (leetCodeStats[stat.key] ?? '—')}
                    </div>
                  </div>
                ))}
              </div>

              {leetCodeStats.error && (
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <div className="text-sm text-text-secondary">
                    Unable to load live stats right now.
                    <span className="ml-2 text-text-secondary/80">({leetCodeStats.error})</span>
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <div className="text-sm text-text-secondary">
                  Profile:
                  <a
                    href={leetCodeProfileUrl}
                    target="_self"
                    className="ml-2 text-accent-primary hover:underline"
                  >
                    {leetCodeProfileUrl}
                  </a>
                </div>
              </div>

              {/* Monthly Tracker */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">Monthly Tracker</h4>
                  <p className="text-sm text-text-secondary mt-1">Manually editable monthly solved count.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {monthlyTracker.map((m) => (
                    <div key={m.month} className="rounded-xl border border-border bg-secondary/30 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-semibold text-text-primary">{m.month}</div>
                        <div className="text-sm text-text-secondary">{m.solved} problems</div>
                      </div>

                      <div className="h-2 w-full bg-card rounded-full overflow-hidden border border-border">
                        <div
                          className="h-full bg-accent-secondary transition-all duration-300"
                          style={{ width: `${Math.round((m.solved / maxSolvedInMonth) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
