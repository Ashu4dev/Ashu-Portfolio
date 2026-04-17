import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { subject: 'Analysis', A: 120, fullMark: 150 },
  { subject: 'Coding', A: 98, fullMark: 150 },
  { subject: 'Stats', A: 86, fullMark: 150 },
  { subject: 'Visuals', A: 99, fullMark: 150 },
  { subject: 'Cleaning', A: 85, fullMark: 150 },
  { subject: 'ML', A: 65, fullMark: 150 },
];

export default function SkillsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-[400px] glass rounded-3xl p-6 mt-12 flex flex-col justify-center items-center"
    >
      <h3 className="text-xl font-bold mb-8 dark:text-white">Expertise Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#6366f1" strokeOpacity={0.2} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#6366f1', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.6}
            animationDuration={2000}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
