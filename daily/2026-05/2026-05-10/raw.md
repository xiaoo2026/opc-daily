# OPC 晚报 2026-05-10

> 采集时间：2026-05-10 18:00 | 类型：evening

---

## 🔥 今日最重磅

### 谷歌AI数学家刷新SOTA：48%准确率碾压全场

谷歌DeepMind发布**AI Co-Mathematician**（AI联合数学家）系统，在FrontierMath Tier 4基准测试中获48%准确率，超越GPT-5.5 Pro（39.6%）和Claude Opus 4.7等所有已知模型。底层基座为Gemini 3.1 Pro，独立作战仅19%，通过AI协作框架跃升29个百分点。该系统已帮助牛津数学家破解群论领域数十年未解的悬案。

**来源**：新浪财经 2026-05-10
https://finance.sina.com.cn/wm/2026-05-10/doc-inhxkhwm6282339.shtml

---

## 🤖 模型 & 发布

### Claude Opus 4.7 发布：新增"xhigh"推理档位

Anthropic发布Claude Opus 4.7，新增`xhigh`（extra high）推理档位，位于`high`和`max`之间，提供更细粒度的推理-延迟权衡控制。支持通过Claude API和Claude Code使用。

**来源**：Anthropic官网
https://www.anthropic.com/news/claude-opus-4-7

### Apple Intelligence大松绑：iOS 27可自由切换Claude、Gemini

iOS 27将允许用户不再只能使用ChatGPT，可在Apple Intelligence中自由切换Claude、Gemini等不同AI模型，Siri的声音也会随之改变。

**来源**：ETtoday 2026-05-06
https://www.ettoday.net/news/20260506/3161439.htm

### xAI预训练负责人庄钧堂宣布离职

2026年5月9日，xAI预训练负责人庄钧堂宣布离职，当天还有多名员工离职。xAI已并入SpaceX，过去一年可查证离职员工超80人，11位联创已全部离开。

**来源**：AITNT News
https://www.aitntnews.com/ainews/zh-CN

---

## 📊 GitHub & 开源

### GLM-5.1 & GLM-5：智谱AI新一代Agent编程模型

智谱AI发布GLM-5.1下一代旗舰模型，专为Agentic Engineering设计，在Design2Code基准测试中以94.8分超越竞争对手。GitHub: 3212 Stars。

**仓库**：https://github.com/zai-org/GLM-5

### 蚂蚁百灵 Ling-2.6-1T：万亿参数开源对标GPT-5.4

蚂蚁集团inclusionAI团队发布Ling-2.6-1T，万亿参数规模，原生支持262K上下文，MIT许可可商用。Token效率仅为同类模型1/4，综合智能对标GPT-5.4（非推理模式），在数学、代码、Agent工具调用达到开源SOTA。

**仓库**：https://github.com/inclusionAI/DR-Venus

### NanoBot：超轻量个人AI Agent

HKUDS开源NanoBot，MIT协议，41688 Stars。为个人AI Agent轻量解决方案，支持多模型接入。

**仓库**：https://github.com/HKUDS/NanoBot

### 4万Star神作：obsidian-skills

Obsidian CEO发布obsidian-skills仓库，仅用5个Markdown文件实现Agent技能规范，零代码实现跨Agent平台兼容，获27k+ Stars。

---

## 🔐 安全 & 漏洞

### PyTorch Lightning被植入恶意代码

PyPI包`lightning`在2.6.2和2.6.3版本中被植入Mini Shai-Hulud主题恶意代码，导入时执行窃取凭证恶意软件。需立即审计并轮换GitHub token等凭证。

**来源**：Semgrep
https://semgrep.dev/blog/2026/malicious-dependency-in-pytorch-lightning-used-for-ai-training

### 2026：AI辅助攻击元年

The Hacker News报道，2026年将成为AI辅助网络攻击元年。AI驱动的攻击比人工操作更嘈杂、更难检测，但攻击窗口大幅压缩，企业SOC/MDR面临严峻挑战。

**来源**：The Hacker News
https://thehackernews.com/2026/05/2026-year-of-ai-assisted-attacks.html

---

## 💰 资本 & 产业

### GitHub Copilot全面转向按量计费

GitHub宣布2026年6月1日起，所有GitHub Copilot计划将转向基于使用量的计费模式（usage-based billing），不再按请求数计次。

**来源**：GitHub Blog
https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/

### RadixArk完成1亿美元种子轮

SGLang团队创立AI基础设施公司RadixArk，完成1亿美元种子轮融资，投后估值4亿美元，由Accel领投，打造下一代开放AI基础设施。

---

## 🔬 研究 & 论文

### DeepAgent: 通用推理Agent可扩展工具集

来自中国人民大学、小红书等机构的论文，提出DeepAgent——基于大推理模型的通用Agent框架，在复杂问题求解上展现强大能力。

**来源**：arXiv
https://arxiv.org/abs/2510.21618v3

### AlphaApollo: 深度Agentic推理系统

来自港科大、Stanford、东京大学等机构的AlphaApollo系统，针对Agentic推理的两大瓶颈进行优化。

**来源**：arXiv
https://arxiv.org/abs/2510.06261v2

---

## 🌏 社区 & 产品

### HakkoAI：游戏+桌宠+AI三合一获千万用户

全球注册用户超1000万的AI游戏陪伴产品，兼具桌宠形态与游戏助手功能，采用订阅制，填补游戏玩家低压力情绪陪伴需求空白。

### Emma Sensei：Kubernetes 2026与GenAI融合加速

日本技术社区Emma Sensei发表深度分析，2026年Kubernetes与GenAI集成加速，Kueue、DAS、GAIE等新工具将GenAI工作流性能提升最高82%，Serverless与Kubernetes边界模糊化。

### Plaud估值20亿美元

AI录音笔公司Plaud获传腾讯投资，估值达20亿美元，双方均否认。Plaud靠海外市场崛起，2025年全球销量破百万台。

---

## 📈 行业观察

### 大模型清场前夜：三年内见分晓

钛媒体深度报道，三家公司三天超70亿美元融资涌入，大模型商品化加速。DeepSeek V4把开源能力拉到接近GPT-4水平，模型能力本身比所有人预期更快被追平。资本向头部三家（智谱、MiniMax、月之暗面）高度集中，阶跃星辰计划港股上市。大模型行业从百模大战到清场可能只需三年。

**来源**：钛媒体
https://www.tmtpost.com/7982488.html
