import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, BarChart3, Award, BookOpen, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Index = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 模拟文件分析过程
      // 实际项目中这里会调用API进行文件分析
      setTimeout(() => {
        navigate('/report');
      }, 1000);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-subtle font-body">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-academic">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="font-heading text-5xl font-bold text-primary-foreground mb-6">
            AI 写作质量分析平台
          </h1>
          <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            为学生提供专业的Essay质量评估服务，通过多维度深度分析，
            帮助您理解文章优点与不足，获得清晰的改进方向
          </p>
          <div className="flex items-center justify-center">
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,.doc,.docx,.pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button 
              onClick={triggerFileUpload}
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-primary"
            >
              <Upload className="mr-2 h-5 w-5" />
              上传文档开始分析
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            您的私人写作顾问
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            超越语法检查的深度洞察，提供学术期刊级别的专业分析
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 border-border-subtle">
            <div className="text-primary mb-4">
              <FileText size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              多维度评估
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              从内容论点、结构逻辑、语言风格等6个维度全面分析文章质量
            </p>
          </Card>

          <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 border-border-subtle">
            <div className="text-primary mb-4">
              <BarChart3 size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              可视化数据
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              雷达图、词云图等专业图表，直观展示文章各项指标表现
            </p>
          </Card>

          <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 border-border-subtle">
            <div className="text-primary mb-4">
              <Award size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              专业建议
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              提供具体可操作的改进建议，帮助您快速提升写作水平
            </p>
          </Card>

          <Card className="p-6 shadow-medium hover:shadow-strong transition-all duration-300 border-border-subtle">
            <div className="text-primary mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              学术标准
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              基于学术期刊标准的评估体系，确保分析结果的权威性
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
