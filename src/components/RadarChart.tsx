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
    <div className="w-full h-96 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
          <PolarGrid 
            stroke="hsl(var(--border))" 
            strokeWidth={1}
            radialLines={true}
          />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ 
              fill: 'hsl(var(--foreground))', 
              fontSize: 13,
              fontFamily: 'var(--font-body)'
            }}
            className="text-sm font-medium"
          />
          <Radar
            dataKey="score"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.15}
            strokeWidth={3}
            dot={{ 
              fill: 'hsl(var(--primary))', 
              strokeWidth: 2, 
              stroke: 'hsl(var(--primary-foreground))',
              r: 5 
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};