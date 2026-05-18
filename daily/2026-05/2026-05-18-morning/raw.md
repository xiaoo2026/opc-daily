# OPC 早报 · 2026年5月18日（采集昨日内容）

> 早报采集范围：2026年5月17日全天真动态

---

## 🔥 今日头条

### RSI：Meta元老组队，6.5亿美元融资打造"递归式超级智能"
- 来源：36氪
- 摘要：**Recursive Superintelligence（RSI）** 是一家刚刚从隐身状态走出的AI公司，由8位联创组成，拿到**6.5亿美元融资（约44亿元）**，估值**46.5亿美元（约316亿元）**。创始团队包括Meta FAIR前研究科学家总监**田渊栋**、ImageNet/GloVe作者**Richard Socher**（Google学术引用量24万次）、清华姚班**施天麟**、UCL AI教授**Tim Rocktäschel**（开放式安全红队）、Vision Transformer作者**Alexey Dosovitskiy**、OpenAI早期成员**Josh Tobin**等。
- 核心路线：递归式自我改进（recursive self-improvement）——让AI发现自身短板，设计新实验，编写新benchmark，再主动重写自己的代码库，生物进化式永远不停。
- 路线图第一步：先训练具备"**50000名博士**"能力的系统，自动化AI科学研究本身。

### 量子计算超级独角兽冲刺IPO：Quantinuum估值200亿美元
- 来源：TMT Post / 36氪
- 摘要：量子计算公司**Quantinuum**正式向SEC提交S-1，目标纳斯达克，估值约**200亿美元**——量子计算领域史上最大IPO。霍尼韦尔旗下，主打离子阱路线，在Helios系统上演示了**48个完全纠错逻辑比特**（Iceberg编码方案），保真度99.99%，2029年Apollo系统是关键里程碑。
- 行业背景：2026年已有三家量子企业上市，另有五家排队，纯量子概念股数量年内有望增至三倍。
- 中国镜像：2026年Q1国内量子融资约**33亿元**，已超2025全年。玻色量子10亿元B轮、量旋科技6亿元C+轮密集落地。

---

## 🏛️ 大厂动态

### OpenAI：Greg Brockman接管产品战略，ChatGPT + Codex统一管理
- 来源：36氪
- OpenAI重组中，联合创始人兼总裁**Greg Brockman**正式接管公司产品战略，计划整合ChatGPT和编程产品Codex，实现统一产品管理。加速商业化、统一AI产品线的重要信号。

### Anthropic Claude Opus 4.6：同日对攻OpenAI，扩展上下文窗口
- 来源：Business Insider
- Anthropic发布**Claude Opus 4.6**，升级版提升办公和编码任务性能，扩展"上下文窗口"支持更长文档和更复杂项目在单会话中完成。同日OpenAI也有新动作，两家"正面交锋"。

### 中国电信推出Token套餐：最低每月9.9元
- 来源：AI中文社
- 中国电信推出试商用**Token套餐**，最低**每月9.9元**。标志着AI服务正向大众市场普及。

### OpenClaw案例：3人 + 100个AI Agent，月烧130万美元
- 来源：36氪
- OpenClaw创始人将软件开发变成"AI流水线"——**3名人类员工管理100个AI Agent**，一个月烧掉**130万美元**，OpenAI买单。极端案例展示AI Agent在软件工程中的规模化应用潜力，也引发成本和效率边界的讨论。

---

## 📊 模型与工具

### 5月模型发布动态：GPT-5.5 Instant / SubQ 1M / Grok 4.3 / Gemini 3.1 Flash Lite
- 来源：WhatLLM.org
- 截至5月中确认发布：
  - **GPT-5.5 Instant**（OpenAI，5月5日）— 新版ChatGPT默认模型
  - **SubQ 1M-Preview**（Subquadratic，5月5日）— 首个商业化亚二次LLM，1200万Token上下文窗口，比前沿模型便宜约1/5，注意力速度快52倍
  - **Grok 4.3**（xAI，5月6日）— 继4月17日beta后更大范围推出
  - **ZAYA1-8B**（Zyphra，5月6-7日）— Apache 2.0 MoE，AMD训练
  - **Gemini 3.1 Flash Lite**（Google，5月8日）— 轻量级Gemini 3.1变体

### GitHub Trending AI项目（2026年5月）
- 来源：ossinsight.io / AskGlitch
- 热门项目：OpenHands（AI Coding Agent）、MetaGPT（多智能体协作）、opencode（Coding Agent）、cline、microsoft/autogen、openai/codex、crewAI、cursor、continue

### arXiv论文精选
- **DeepAgent**（arXiv 2510.21618）：可扩展工具集通用推理智能体
- **AlphaApollo**（arXiv 2510.06261）：深度智能体推理系统
- **RetroAgent**（arXiv 2603.08561）：通过回顾性双重内在反馈从求解到演进
- **Reasoning as Gradient**（arXiv 2603.01692）：将推理视为梯度，扩展MLE智能体超越树搜索
- **Recursive Models for Long-Horizon Reasoning**（arXiv 2603.02112）：用递归突破有限上下文约束

---

## ⚠️ 安全警示

### 2026年：AI辅助攻击元年
- 来源：The Hacker News
- 2026年被定义为"**AI辅助攻击元年**"。Hacker News当日头版报道：
  - **Mini Shai-Hulud蠕虫**： compromise TanStack、Mistral AI、Guardrails AI等多个开源包
  - **AITokenizer攻击**：新型攻击手法
  - **Exim BDAT漏洞**：暴露GnuTLS构建潜在代码执行
  - **AI开发零日2FA绕过**：黑客用AI开发首个已知零日2FA绕过技术，实现大规模利用
  - **微软MDASH AI系统**：发现16个Windows漏洞，已在补丁星期二修复
  - **PAN-OS RCE**：Palo Alto Networks防火墙远程代码执行漏洞

---

## 📰 行业观察

### 美国AI监管动向：白宫内部混乱信号
- 来源：新浪财经 / 新华网
- **核心事件**：白宫内部就AI模型发布前是否需接受联邦安全审查释放混乱信号。
  - 商务部与谷歌、微软及xAI达成新协议，AI模型发布前需通过**CAISI**（人工智能标准与创新中心）评估
  - 白宫国家经济委员会主任凯文·哈塞特：将此比作FDA式上市前检测
  - 白宫办公厅主任苏西·威尔斯：明确反对"挑选赢家和输家"，不设庞大审批官僚机构
  - 特朗普政府最终态度：**暂缓推进行政令**，现有体系已足够有效

### 中国政策：三部委联合印发首个智能体国家级专项政策
- 来源：飞钉AI / 网信办
- 2026年5月8日，**国家网信办、国家发改委、工信部**联合印发《智能体规范应用与创新发展实施意见》——国内首个智能体国家级专项政策。核心关键词：**安全可控、规范有序、合规规模化落地**。

---

## 🎯 今日要点

1. **递归式超级智能获资本认可**：RSI 6.5亿美元融资46.5亿美元估值，8位顶级联创押注AI自我改进闭环
2. **量子计算IPO大年**：Quantinuum 200亿美元估值冲刺纳斯达克，纠错能力成估值锚点
3. **AI安全攻防白热化**：2026定义为AI辅助攻击元年，多起零日漏洞和供应链攻击爆发
4. **5月模型密集迭代**：GPT-5.5 Instant / SubQ 1M / Grok 4.3 / Gemini 3.1 Flash Lite同台竞技，上下文窗口突破千万Token
5. **GitHub AI Agent生态繁荣**：OpenHands / MetaGPT / opencode / Codex引领编码Agent开源浪潮
6. **美国AI监管摇摆**：白宫内部路线之争，暂缓设立"AI-FDA"，商务部的CAISI自愿评估框架成折中方案
7. **中国首个智能体国字号政策落地**：三部委联合印发，安全可控成为行业主基调

---

*数据来源：36氪 · 量子位 · 新浪财经 · The Hacker News · TMT Post · Business Insider · WhatLLM.org · ossinsight.io · arXiv · 新华网 · 新浪科技*
