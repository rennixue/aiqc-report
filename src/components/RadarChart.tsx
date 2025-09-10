import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from 'recharts';

interface RadarChartProps {
  data: Array<{
    dimension: string;
    score: number;
    fullMark: number;
  }>;
}

export const CompetencyRadarChart = ({ data }: RadarChartProps) => {
  return (
    <div className="w-full h-80 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid 
            stroke="hsl(var(--border))" 
            strokeWidth={1}
            radialLines={true}
          />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ 
              fill: 'hsl(var(--foreground))', 
              fontSize: 12,
              fontFamily: 'var(--font-body)'
            }}
            className="text-xs font-medium"
          />
          <Radar
            name="当前得分"
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.15}
            strokeWidth={2.5}
            dot={{ 
              fill: 'hsl(var(--primary))', 
              strokeWidth: 2, 
              stroke: 'hsl(var(--primary-foreground))',
              r: 4 
            }}
          />
          <Legend 
            wrapperStyle={{ 
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'hsl(var(--foreground))'
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};