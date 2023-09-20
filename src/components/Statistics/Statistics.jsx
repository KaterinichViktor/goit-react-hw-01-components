import React from 'react';
import '../Statistics/Statistics.css';

const aggregateStatistics = (stats) => {
  const aggregatedStats = {};

  stats.forEach((stat) => {
    if (!aggregatedStats[stat.label]) {
      aggregatedStats[stat.label] = 0;
    }
    aggregatedStats[stat.label] += stat.percentage;
  });

  const aggregatedStatsArray = Object.keys(aggregatedStats).map((label) => ({
    label,
    percentage: aggregatedStats[label],
  }));

  return aggregatedStatsArray;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ title, stats }) => {
  const aggregatedStats = aggregateStatistics(stats);

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {aggregatedStats.map((stat) => (
          <li className="itemStat" key={stat.id} style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
