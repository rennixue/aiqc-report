import { CompetencyRadarChart } from "@/components/RadarChart";
import { ScoreCard } from "@/components/ScoreCard";
import { WordCloud } from "@/components/WordCloud";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Target, BookOpen, PenTool, FileText, Award, Shield } from "lucide-react";

// Mock data for demonstration
const radarData = [
  { dimension: '内容与论点', score: 85, fullMark: 100 },
  { dimension: '结构与逻辑', score: 72, fullMark: 100 },
  { dimension: '语言与风格', score: 78, fullMark: 100 },
  { dimension: '证据与支撑', score: 80, fullMark: 100 },
  { dimension: '格式与规范', score: 68, fullMark: 100 },
  { dimension: '原创性与价值', score: 92, fullMark: 100 },
];

const wordCloudData = [
  { text: '教育', frequency: 15 },
  { text: '技术', frequency: 12 },
  { text: '学生', frequency: 10 },
  { text: '创新', frequency: 8 },
  { text: '发展', frequency: 7 },
  { text: '研究', frequency: 6 },
  { text: '社会', frequency: 5 },
  { text: '影响', frequency: 4 },
  { text: '方法', frequency: 4 },
  { text: '系统', frequency: 3 },
];

const Report = () => {
  const overallScore = 78;
  const potentialScore = 88;
  const wordCount = 1245;
  const readingTime = 5;
  const avgSentenceLength = 18.2;
  const readabilityLevel = 10.5;

  return (
    <div className="min-h-screen bg-gradient-subtle font-body">
      {/* Header */}
      <header className="bg-card border-b border-border-subtle shadow-soft">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
                《人工智能在现代教育中的应用与影响》- 智能分析报告
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>生成日期：2024年01月15日</span>
                <span>报告ID：RP-20240115-78432</span>
                <span>学生：张同学</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg shadow-primary">
                <div className="font-heading text-2xl font-bold">{overallScore}/100</div>
                <div className="text-xs opacity-90">综合评分</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary */}
        <section className="bg-card rounded-xl p-8 shadow-medium border border-border-subtle">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Target className="text-primary" size={24} />
                综合评估概况
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card-subtle rounded-lg p-4 border border-border-subtle">
                  <div className="text-2xl font-bold text-foreground">{wordCount}</div>
                  <div className="text-sm text-muted-foreground">总词数</div>
                </div>
                <div className="bg-card-subtle rounded-lg p-4 border border-border-subtle">
                  <div className="text-2xl font-bold text-foreground">{readingTime}分钟</div>
                  <div className="text-sm text-muted-foreground">预估阅读时间</div>
                </div>
                <div className="bg-card-subtle rounded-lg p-4 border border-border-subtle">
                  <div className="text-2xl font-bold text-foreground">{avgSentenceLength}</div>
                  <div className="text-sm text-muted-foreground">平均句长</div>
                </div>
                <div className="bg-card-subtle rounded-lg p-4 border border-border-subtle">
                  <div className="text-2xl font-bold text-foreground">{readabilityLevel}</div>
                  <div className="text-sm text-muted-foreground">阅读难度等级</div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">AI评语摘要</h3>
                <p className="text-foreground leading-relaxed">
                  本文论点明确，选题具有现实意义。论证过程中使用了丰富的数据作为支撑，展现了良好的研究能力。
                  主要提升空间在于文章的逻辑结构可以进一步优化，部分段落间的衔接不够流畅，
                  此外语言的可读性也有待加强。
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="secondary">潜在最高分：{potentialScore}/100</Badge>
                  <Badge variant="outline">可提升 {potentialScore - overallScore} 分</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                多维能力评估
              </h3>
              <CompetencyRadarChart data={radarData} />
            </div>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="grid lg:grid-cols-2 gap-6">
          <ScoreCard
            title="内容与论点分析"
            score={85}
            icon={<BookOpen size={20} />}
            description="立意新颖，论点清晰明确。文章主题具有现实意义，展现了良好的批判性思维能力。"
          />
          <ScoreCard
            title="结构与逻辑分析"
            score={72}
            icon={<Target size={20} />}
            description="整体框架完整，但段落间过渡略显生硬。建议增强逻辑连贯性和论证层次感。"
          />
          <ScoreCard
            title="语言与风格分析"
            score={78}
            icon={<PenTool size={20} />}
            description="用词恰当，句式相对多样。可进一步提升表达的学术性和精确度。"
          />
          <ScoreCard
            title="证据与支撑分析"
            score={80}
            icon={<FileText size={20} />}
            description="引用数据充分，证据支撑有力。建议多元化论证方式，增加案例分析。"
          />
        </section>

        {/* Word Cloud */}
        <section>
          <WordCloud words={wordCloudData} />
        </section>

        {/* Grammar & Format Check */}
        <section className="bg-card rounded-xl p-8 shadow-medium border border-border-subtle">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="text-primary" size={24} />
            语法与格式检查
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-accent-success/10 rounded-lg p-4 border border-accent-success/20">
              <div className="text-2xl font-bold text-accent-success">2</div>
              <div className="text-sm text-muted-foreground">语法错误</div>
            </div>
            <div className="bg-accent-info/10 rounded-lg p-4 border border-accent-info/20">
              <div className="text-2xl font-bold text-accent-info">1</div>
              <div className="text-sm text-muted-foreground">拼写错误</div>
            </div>
            <div className="bg-accent-warning/10 rounded-lg p-4 border border-accent-warning/20">
              <div className="text-2xl font-bold text-accent-warning">3</div>
              <div className="text-sm text-muted-foreground">标点误用</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="text-2xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">格式问题</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-muted-dark rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">语法修正建议</h4>
              <div className="space-y-2">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">原文：</div>
                  <div className="text-foreground bg-card p-2 rounded border-l-4 border-accent-warning">
                    "这些技术的发展对学生学习方式产生了深远的影响。"
                  </div>
                  <div className="text-sm text-muted-foreground mb-1 mt-2">建议：</div>
                  <div className="text-foreground bg-card p-2 rounded border-l-4 border-accent-success">
                    "这些技术的发展对学生的学习方式产生了深远的影响。"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strengths & Recommendations */}
        <section className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-medium">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <CheckCircle className="text-accent-success" size={24} />
              文章亮点
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent-success flex-shrink-0 mt-1" size={16} />
                <p className="text-foreground">开篇引言成功地吸引了读者的兴趣并清晰地陈述了论点</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent-success flex-shrink-0 mt-1" size={16} />
                <p className="text-foreground">数据引用恰当，增强了论证的说服力</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent-success flex-shrink-0 mt-1" size={16} />
                <p className="text-foreground">结论部分总结到位，呼应主题</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent-success flex-shrink-0 mt-1" size={16} />
                <p className="text-foreground">选题具有现实意义和学术价值</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="text-accent-warning" size={24} />
              改进建议
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-accent-warning flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="text-foreground">建议在第三段与第四段之间增加过渡句，缓和逻辑跳跃</p>
                  <Badge className="mt-1" variant="outline">预估提分 +5</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-accent-warning flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="text-foreground">部分长句可适当拆分，提升阅读流畅度</p>
                  <Badge className="mt-1" variant="outline">预估提分 +3</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-accent-warning flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="text-foreground">增加反面论证，使论述更加全面客观</p>
                  <Badge className="mt-1" variant="outline">预估提分 +2</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Academic Integrity */}
        <section className="bg-card rounded-xl p-8 shadow-medium border border-border-subtle">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Shield className="text-accent-success" size={24} />
            学术诚信检测
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-success mb-2">98%</div>
              <div className="text-sm text-muted-foreground">原创度指数</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-accent-success mb-2">通过</div>
              <div className="text-sm text-muted-foreground">检测结果</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground mb-2">无</div>
              <div className="text-sm text-muted-foreground">潜在问题</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-accent-success/10 rounded-lg border border-accent-success/20">
            <p className="text-sm text-foreground">
              ✅ 未发现潜在的抄袭内容。文章整体展现了良好的学术诚信水准。
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border-subtle py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            本报告由AI生成，仅供参考与学习目的 | 页码：1/1 | 生成时间：2024年01月15日
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Report;