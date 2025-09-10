import { cn } from "@/lib/utils";

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore?: number;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

export const ScoreCard = ({ 
  title, 
  score, 
  maxScore = 100, 
  icon, 
  description,
  className 
}: ScoreCardProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return "text-accent-success";
    if (percentage >= 70) return "text-accent-info";
    if (percentage >= 50) return "text-accent-warning";
    return "text-primary";
  };

  return (
    <div className={cn(
      "bg-gradient-card rounded-lg p-6 shadow-soft border border-border-subtle",
      "hover:shadow-medium transition-all duration-300",
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {icon && <div className="text-muted-foreground">{icon}</div>}
          <h3 className="font-heading font-semibold text-foreground text-lg">
            {title}
          </h3>
        </div>
        <div className={cn("text-2xl font-bold", getScoreColor(percentage))}>
          {score}
          <span className="text-sm text-muted-foreground">/{maxScore}</span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 mb-3">
        <div 
          className={cn(
            "h-2 rounded-full transition-all duration-500",
            percentage >= 90 ? "bg-accent-success" :
            percentage >= 70 ? "bg-accent-info" :
            percentage >= 50 ? "bg-accent-warning" : "bg-primary"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};