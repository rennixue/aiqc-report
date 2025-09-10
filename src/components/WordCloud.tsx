interface WordCloudProps {
  words: Array<{
    text: string;
    frequency: number;
  }>;
}

export const WordCloud = ({ words }: WordCloudProps) => {
  const maxFreq = Math.max(...words.map(w => w.frequency));
  
  const getFontSize = (frequency: number) => {
    const ratio = frequency / maxFreq;
    return Math.max(12, Math.min(32, 12 + ratio * 20));
  };

  const getOpacity = (frequency: number) => {
    const ratio = frequency / maxFreq;
    return Math.max(0.4, Math.min(1, 0.4 + ratio * 0.6));
  };

  return (
    <div className="bg-gradient-card rounded-lg p-6 border border-border-subtle">
      <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">
        核心词汇分布
      </h4>
      <div className="flex flex-wrap gap-3 justify-center items-center min-h-[120px]">
        {words.map((word, index) => (
          <span
            key={index}
            className="font-body text-primary hover:text-primary-dark transition-colors cursor-default"
            style={{
              fontSize: `${getFontSize(word.frequency)}px`,
              opacity: getOpacity(word.frequency),
              fontWeight: word.frequency > maxFreq * 0.7 ? 600 : 400
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
};