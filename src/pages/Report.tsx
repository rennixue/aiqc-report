import { CompetencyRadarChart } from "@/components/RadarChart";
import { ScoreCard } from "@/components/ScoreCard";
import { WordCloud } from "@/components/WordCloud";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Target, BookOpen, PenTool, FileText, Award, Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration
const radarData = [
  { dimension: '内容与论点', score: 85, fullMark: 100 },
  { dimension: '结构与逻辑', score: 72, fullMark: 100 },
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
  const navigate = useNavigate();
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
              <div className="flex items-center gap-4 mb-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  返回首页
                </Button>
              </div>
              <h1 className="font-sans text-3xl font-bold text-foreground mb-2">
                《人工智能在现代教育中的应用与影响》- 智能分析报告
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground font-sans">
                <span>生成日期：2024年01月15日</span>
                <span>报告ID：RP-20240115-78432</span>
                <span>昵称：张同学</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Executive Summary - First row: Score and Metrics, Second row: AI Summary */}
        <section className="space-y-6">
          {/* First row - Overall Score and Text Metrics */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Overall Score Card */}
            <Card className="p-6 shadow-soft">
              <h3 className="font-sans font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
                <Target className="text-primary" size={20} />
                综合评分
              </h3>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${(overallScore / 100) * 314} 314`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-sans text-3xl font-bold text-primary">{overallScore}</div>
                      <div className="font-sans text-sm text-muted-foreground">/100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between font-sans text-sm bg-card-subtle rounded-lg p-3">
                  <span className="text-muted-foreground">潜在最高分</span>
                  <span className="text-primary font-bold text-lg">{potentialScore}/100</span>
                </div>
                <div className="flex items-center justify-between font-sans text-sm bg-card-subtle rounded-lg p-3">
                  <span className="text-muted-foreground">可提升分数</span>
                  <span className="text-green-600 font-bold text-lg">+{potentialScore - overallScore}</span>
                </div>
              </div>
            </Card>

            {/* Text Metrics Card */}
            <Card className="p-6 shadow-soft">
              <h3 className="font-sans font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
                <FileText className="text-primary" size={20} />
                文本基础指标
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-sans text-lg font-bold text-foreground">21.5 词/句</div>
                      <div className="font-sans text-sm text-muted-foreground">平均句长</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      处于良好区间
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-sans text-lg font-bold text-foreground">45%</div>
                      <div className="font-sans text-sm text-muted-foreground">长难句占比</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      学术写作的优秀水平
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-sans text-lg font-bold text-foreground">5段，平均117词/段</div>
                      <div className="font-sans text-sm text-muted-foreground">段落分布</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      分布合理
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-sans text-lg font-bold text-foreground">11.2%</div>
                      <div className="font-sans text-sm text-muted-foreground">高级词汇占比</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      高于10%的基准线，用词出色
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Second row - AI Summary */}
          <Card className="p-6 shadow-soft bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <h3 className="font-sans font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
              <Award className="text-blue-600" size={20} />
              AI评语摘要
            </h3>
            <p className="font-sans text-foreground leading-relaxed">
              本文论点明确，选题具有现实意义。论证过程中使用了丰富的数据作为支撑，展现了良好的研究能力。
              主要提升空间在于文章的逻辑结构可以进一步优化，部分段落间的衔接不够流畅，
              此外语言的可读性也有待加强。
            </p>
          </Card>
        </section>

        {/* Multi-Dimensional Assessment */}
        <section className="bg-card rounded-xl p-8 shadow-soft">
          <h2 className="font-sans text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Target className="text-primary" size={24} />
            多维能力评估
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-card-subtle rounded-lg p-6 shadow-soft h-full flex flex-col">
              <h3 className="font-sans text-lg font-semibold text-foreground mb-4 text-center">能力雷达图</h3>
              <div className="flex-1 flex items-center justify-center">
                <CompetencyRadarChart data={radarData} />
              </div>
            </div>
            
            <div className="bg-card-subtle rounded-lg p-6 shadow-soft h-full">
              <h3 className="font-sans text-lg font-semibold text-foreground mb-6">各维度评分详情</h3>
              <div className="space-y-5">
                {radarData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-foreground font-medium">{item.dimension}</span>
                      <span className="font-sans text-primary font-bold text-lg">{item.score}/100</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="space-y-8">
          <h2 className="font-sans text-2xl font-semibold text-foreground">深度分析板块</h2>
          
          {/* Content & Thesis Analysis */}
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xl font-semibold text-foreground flex items-center gap-3">
                <BookOpen className="text-primary" size={24} />
                内容与论点分析
              </h3>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="font-sans text-sm bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  预估提分: +3
                </Badge>
                <div className="font-sans text-2xl font-bold text-accent-success">85/100</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-sans font-semibold text-foreground mb-3">AI评语</h4>
                <p className="font-sans text-foreground leading-relaxed">
                  文章立场清晰，论点具有现实意义和学术价值。作者展现了良好的批判性思维，能够从多角度分析人工智能在教育领域的影响。
                  主题展开充分，对于AI技术的教育应用场景描述详细且具体。
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-semibold text-foreground mb-3">原文证据</h4>
                <div className="space-y-4">
                  <div className="bg-accent-success/10 p-4 rounded-lg border-l-4 border-accent-success">
                    <div className="font-sans text-sm text-muted-foreground mb-2">优秀示例：</div>
                    <p className="font-sans text-foreground italic">"人工智能技术正在以前所未有的速度改变着教育的基本形态，从个性化学习推荐到智能评估系统..."</p>
                    <div className="font-sans text-sm text-accent-success mt-2">✓ 开篇引入恰当，立意清晰</div>
                  </div>
                  <div className="bg-accent-warning/10 p-4 rounded-lg border-l-4 border-accent-warning">
                    <div className="font-sans text-sm text-muted-foreground mb-2">待改进示例：</div>
                    <p className="font-sans text-foreground italic">"这些技术很好，对学生有帮助。"</p>
                    <div className="font-sans text-sm text-accent-warning mt-2">⚠ 论述过于简单，缺乏深度分析</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Structure & Logic Analysis */}
          <div className="bg-card rounded-xl p-8 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xl font-semibold text-foreground flex items-center gap-3">
                <Target className="text-primary" size={24} />
                结构与逻辑分析
              </h3>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="font-sans text-sm bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  预估提分: +5
                </Badge>
                <div className="font-sans text-2xl font-bold text-accent-info">72/100</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">AI评语</h4>
                <p className="text-foreground leading-relaxed mb-4">
                  文章整体框架完整，具备引言、主体和结论的基本结构。各段落主题明确，但部分段落间的逻辑衔接略显生硬，
                  建议增加更多过渡性语句以增强文章的连贯性。
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">文章结构示意图</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-accent-success/10 rounded-lg border border-accent-success/20">
                    <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                    <span className="text-foreground">引言 - 问题提出</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-success/10 rounded-lg border border-accent-success/20">
                    <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                    <span className="text-foreground">分论点1 - AI技术应用</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-warning/10 rounded-lg border border-accent-warning/20">
                    <div className="w-3 h-3 bg-accent-warning rounded-full"></div>
                    <span className="text-foreground">分论点2 - 影响分析（过渡薄弱）</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-success/10 rounded-lg border border-accent-success/20">
                    <div className="w-3 h-3 bg-accent-success rounded-full"></div>
                    <span className="text-foreground">结论 - 总结展望</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Grammar Check */}
        <section className="bg-card rounded-xl p-8 shadow-medium">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-sans text-xl font-semibold text-foreground flex items-center gap-3">
              <Award className="text-primary" size={24} />
              语法检查
            </h2>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="font-sans text-sm bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                预估提分: +8
              </Badge>
              <div className="font-sans text-2xl font-bold text-accent-info">68/100</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-accent-warning/10 rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-warning">5</div>
              <div className="text-sm text-muted-foreground">语法错误</div>
            </div>
            <div className="bg-accent-info/10 rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-info">3</div>
              <div className="text-sm text-muted-foreground">拼写错误</div>
            </div>
            <div className="bg-accent-warning/10 rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-warning">7</div>
              <div className="text-sm text-muted-foreground">标点误用</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-4">详细问题分析</h3>
              
              {/* Grammar Errors */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-warning rounded-full"></div>
                  语法错误 (5处)
                </h4>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">第2段，第3句：</div>
                    <div className="bg-accent-warning/10 p-3 rounded border-l-4 border-accent-warning mb-2">
                      <span className="text-foreground">"这些技术的发展对学生学习方式产生了深远的影响。"</span>
                    </div>
                    <div className="bg-accent-success/10 p-3 rounded border-l-4 border-accent-success">
                      <span className="text-foreground">"这些技术的发展对学生的学习方式产生了深远的影响。"</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">建议：在"学生"和"学习方式"之间添加助词"的"</div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">第4段，第1句：</div>
                    <div className="bg-accent-warning/10 p-3 rounded border-l-4 border-accent-warning mb-2">
                      <span className="text-foreground">"人工智能可以根据每个学生不同能力和学习进度..."</span>
                    </div>
                    <div className="bg-accent-success/10 p-3 rounded border-l-4 border-accent-success">
                      <span className="text-foreground">"人工智能可以根据每个学生的不同能力和学习进度..."</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">建议：在"学生"后添加助词"的"</div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">第6段，第2句：</div>
                    <div className="bg-accent-warning/10 p-3 rounded border-l-4 border-accent-warning mb-2">
                      <span className="text-foreground">"传统教学方法已经不能完全满足现代学生需求。"</span>
                    </div>
                    <div className="bg-accent-success/10 p-3 rounded border-l-4 border-accent-success">
                      <span className="text-foreground">"传统的教学方法已经不能完全满足现代学生的需求。"</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">建议：添加助词"的"增强语法准确性</div>
                  </div>
                </div>
              </div>

              {/* Punctuation Issues */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-warning rounded-full"></div>
                  标点误用 (7处)
                </h4>
                <div className="space-y-3">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">问题：句号位置错误</div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">错误:</div>
                        <div className="bg-accent-warning/10 p-2 rounded text-sm">"...具有重要意义"。(引号外)</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">正确:</div>
                        <div className="bg-accent-success/10 p-2 rounded text-sm">"...具有重要意义。"(引号内)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-2">问题：逗号滥用</div>
                    <div className="text-sm text-foreground">共发现4处不必要的逗号使用，建议简化句式结构</div>
                  </div>
                </div>
              </div>

              {/* Spelling Errors */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent-info rounded-full"></div>
                  拼写错误 (3处)
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">错误:</div>
                    <div className="text-accent-warning font-medium">人工智慧</div>
                    <div className="text-xs text-muted-foreground mt-1">正确:</div>
                    <div className="text-accent-success font-medium">人工智能</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">错误:</div>
                    <div className="text-accent-warning font-medium">学习效果</div>
                    <div className="text-xs text-muted-foreground mt-1">正确:</div>
                    <div className="text-accent-success font-medium">学习效果</div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">错误:</div>
                    <div className="text-accent-warning font-medium">技朮</div>
                    <div className="text-xs text-muted-foreground mt-1">正确:</div>
                    <div className="text-accent-success font-medium">技术</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Strengths & Recommendations */}
        <section className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-medium bg-white dark:bg-card">
            <h3 className="font-sans text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <CheckCircle className="text-green-600" size={24} />
              文章亮点
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 shadow-soft">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                <p className="font-sans text-foreground">开篇引言成功地吸引了读者的兴趣并清晰地陈述了论点</p>
              </div>
              <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 shadow-soft">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                <p className="font-sans text-foreground">数据引用恰当，增强了论证的说服力</p>
              </div>
              <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 shadow-soft">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                <p className="font-sans text-foreground">结论部分总结到位，呼应主题</p>
              </div>
              <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3 shadow-soft">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                <p className="font-sans text-foreground">选题具有现实意义和学术价值</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-medium bg-white dark:bg-card">
            <h3 className="font-sans text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="text-orange-600" size={24} />
              改进建议
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 shadow-soft">
                <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="font-sans text-foreground">建议在第三段与第四段之间增加过渡句，缓和逻辑跳跃</p>
                  <Badge className="mt-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-sans font-bold">预估提分 +5</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 shadow-soft">
                <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="font-sans text-foreground">部分长句可适当拆分，提升阅读流畅度</p>
                  <Badge className="mt-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-sans font-bold">预估提分 +3</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 shadow-soft">
                <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={16} />
                <div>
                  <p className="font-sans text-foreground">增加反面论证，使论述更加全面客观</p>
                  <Badge className="mt-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 font-sans font-bold">预估提分 +2</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-card shadow-soft py-6 mt-12">
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