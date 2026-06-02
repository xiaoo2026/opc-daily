# OPC 晚报 2026-06-02

> 📅 2026-06-02 | 🕕 18:00 | 覆盖：6月2日全天候（Build 2026 Day 1 收官 + 资本市场反应 + 中文圈跟进）

## 🔥 今日头条

**Build 2026 Day 1 完整收官：本地 AI 操作系统化 + Agent 平台化 + 资本向 Agent 部署平台轮动**

Microsoft Build 2026 Day 1 在旧金山 Fort Mason Center 落幕。Satya Nadella 9:30 PT 主题演讲后一整天，Microsoft 抛出了把 Windows 打造成「AI Agent 操作系统」的完整叙事：MAI 自家模型三连发、Copilot Cowork 集成 Anthropic、Agent 365 控制平面、Wave 3 of Copilot 全套登场。配合 NVIDIA RTX Spark 在 Computex 同步亮相（6,144 CUDA 核 + 128GB 统一内存），本地 Agent 算力底座正式落地。资本市场反应直接：Wonderful B 轮 €1.298 亿、Anthropic 估值 $9650 亿首超 OpenAI、Quantinuum 200 亿美元冲刺纳斯达克，VC 与 IPO 资金同步涌向「企业级 Agent 部署平台」与「量子+AI 交叉领域」。

---

## 🤖 大厂动态

### 🟢 Build 2026 Day 1 收官：Windows = AI Agent 操作系统

Microsoft Build 2026 6/2 在 Fort Mason Center 召开，Satya Nadella 9:30 PT 主题演讲拉开序幕，全天围绕一个核心论点：**Windows 是 AI Agent 的运行时（runtime）**。整日发布组合：

- **MAI 模型家族三连发**：MAI-Image-2.5（5/26 LM Arena 文生图 #3，1254 分）、MAI-Voice-2（15 种新语言 TTS）、MAI-Transcribe-1.5（25 种语言 WER 最低）
- **Copilot Wave 3 of Microsoft 365**：核心是 Copilot Cowork（基于 Anthropic Claude Cowork 技术，委托多步骤任务全程在 loop 中）
- **Agent 365**：企业级 AI agent 控制平面
- **Edit with Copilot**：Word/Excel/PowerPoint 内通过 "Work IQ" 上下文直接创建/编辑内容
- **Microsoft 365 E7 "Frontier Suite"**：Copilot + Agent 365 捆绑包
- **Microsoft 自研 reasoning 模型**（The Verge 提前爆料）+ 新 Copilot 「super app」首次登场

来源：Microsoft Build 官网 / The Verge / TestingCatalog / WindowsForum / TimesOfAI | 2026-06-02

### 🟢 NVIDIA RTX Spark 量产：本地的「Apple Silicon 时刻」

NVIDIA 在 Computex 2026 主题演讲中正式发布 **RTX Spark**——与微软共同开发的首款面向 Windows-on-Arm 笔记本/迷你 PC 的 SoC。规格：

- **Blackwell GPU**：6,144 CUDA cores + 第 5 代 Tensor Cores (FP4 精度)
- **Grace CPU**：20 核
- **128GB 统一内存**，NVLink-C2C 互联
- **首批 OEM**：Microsoft、Lenovo、HP、Dell、ASUS（今年下半年出货）

配套硬件 **DGX Station for Windows**——把万亿参数 AI 超级计算机放到每个企业桌面上。同步发布 **DLSS 4.5 Ray Reconstruction**（8 月上线）、1000Hz G-Sync 显示器。**这是 Windows 阵营对 Apple Silicon 形态的正面回应：把 agentic AI 塞进 Windows 笔记本**。

来源：NVIDIA Newsroom / CNBC / IGN / KitGuru | 2026-05-31 → 2026-06-01

### 🔵 OpenAI/ChatGPT 退役日历：GPT-4.5 6/27、o3 8/26

OpenAI 公布模型退役时间表：**GPT-4.5** 在 ChatGPT 中 **6/27 退役**（90 天 sunset period）；**OpenAI o3** 在 ChatGPT 中 **8/26 退役**。GPT-5.5 Instant 已成 ChatGPT 新默认模型（5/5 切换）。GPT-3 时代的旧模型正在批量退出历史舞台。**节奏明确：OpenAI 在为 GPT-5.5 全家族 + 下一代 reasoning 模型让路**。

来源：OpenAI Help Center | 2026-05-05

### 🔵 ASUS COMPUTEX 2026：采用 NVIDIA DSX AI Factory 平台

ASUS 6/2 在 Computex 2026 发布全栈 AI 基础设施方案，采用 NVIDIA DSX AI Factory 平台，重点加速企业 AI Factory 部署时间。Lexar 同步推出 "AI Storage Core" 愿景，专为 AI PC 与边缘计算设计存储能力。

来源：ASUS Press / PRNewswire | 2026-06-02

---

## 💼 资本与商业

### 💰 资本轮动：企业 AI Agent 部署平台成主战场

Angel Investors Network 最新分析：**Wonderful**（阿姆斯特丹企业 AI agent 平台）3 月完成 Insight Partners 领投的 **€1.298 亿 B 轮（$1.5 亿）**，估值 €17 亿——**机构资本正从基础模型轮动至企业级 Agent 部署平台**。Wonderful 的差异化：*"model-agnostic by design"*，为每个 workflow 选最佳模型。

**VC 视角的判断**：*"企业 AI 真正的赢家不是构建最好 transformer 的人，而是最好的部署平台。"*

来源：Angel Investors Network / LinkedIn | 2026-03

### 💰 Anthropic 估值 9650 亿美元首超 OpenAI

5/29 报道：Anthropic 最新融资估值 **$9650 亿**，首次超越 OpenAI 同期 $8500 亿估值。融资规模 $300 亿+，Bloomberg 称本轮可能在 5 月底前关闭。**Claude for Small Business**（5/13 发布，集成 QuickBooks/PayPal/HubSpot/Canva/Docusign/Google Workspace/Microsoft 365）打开 SME 入口。**5/28 Claude Opus 4.8** 同期发布，主打更强智能体能力。

来源：Business Insider / Anthropic / LLM-Stats | 2026-05-13 → 2026-05-29

### 💰 量子计算 IPO 潮：Quantinuum 200 亿美元冲刺纳斯达克

钛媒体深度分析：**Quantinuum**（霍尼韦尔 + 剑桥量子合并）5/9 提交 S-1，目标纳斯达克，估值 **约 200 亿美元**——量子计算领域史上最大 IPO。Helios 系统演示 48 个完全纠错逻辑比特（保真度 99.99%，编码率 2:1），2026 年唯一达此指标的商用系统。

**中国镜像**：2026 Q1 国内量子融资约 33 亿元（已超 2025 全年），玻色量子 10 亿 B 轮、量旋科技 6 亿 C+ 轮密集落地。本源量子 "悟空-180"（180 物理比特）已上线面向全球开放。

**两种叙事**：美国「资本先行」 vs 中国「政策驱动 + 全栈自主」。

来源：钛媒体 | 2026-05

---

## 📜 政策与监管

### 🟡 EU AI Act 8 月合规截止日逼近 + Digital Omnibus 中央集权化

美国公司在欧盟 AI Act 关键合规节点逼近（**8/2026**），最高罚款 **€3500 万或全球营收 7%**。同期，欧盟 11/2025 推出的 **Digital Omnibus on AI** 修正案**进一步中央集权执法**——不再依赖各成员国分散执行。AI Pact 自愿合规框架仍开放。GPAI Code of Practice（7/10/2025 发布）+ 7/18 通用 AI 模型指南构成合规基础。

来源：EU Parliament / Holland & Knight / DLA Piper | 2026-04 → 2026-05

### 🟡 FLI AI Safety Index：Google DeepMind 落后于 OpenAI

Future of Life Institute 最新 AI Safety Index：**Google DeepMind 在安全框架上得分落后于 OpenAI**。FLI 同步推出 *"Pro-Human AI Declaration"* 运动，呼吁全球 AI 协议。Florida 州长 DeSantis 签署行政命令，要求州机构与 FLI 合作保护家庭免受 AI 危害。**Build 2026 keynote 同场**——前英国首相 Rishi Sunak 现身讨论 "AI's Mythos Moment"（AI 神话时刻：政府如何准备 AI）。

来源：Future of Life Institute / Microsoft Build | 2026-05 → 2026-06-02

---

## 🇨🇳 中文圈

### 🔴 量子位：英伟达×清华 Gamma-World 把世界模型从「单人」推到「多人共处」

量子位 5/30 报道：**英伟达 + 清华等机构**联合发布 **Gamma-World**——世界模型从「一个人玩」到「多人共处」的新范式。这对具身智能、游戏、内容生成有直接意义：**世界模型不再只是生成一个静态场景，而是支持多个 agent 同步交互**。

来源：量子位 | 2026-05-30

### 🔴 复旦×通义 CUA 训练新范式 + 清华系「智能算力电网」

复旦 × 通义联合提出**全新 CUA（Computer-Use Agent）训练范式**，解决「别光给 Agent 加 Tool 了，它根本选不明白」的核心痛点。同期，清华系团队给大模型**织了一张「智能算力电网」**，调度推理算力。比亚迪 4nm 自研 AI 芯片对标英伟达，算力「拉爆」特斯拉。

来源：量子位 | 2026-05

### 🔴 6/2 财经观察：人民币升值 + 长鑫宇树 IPO

6/2 财经话题：**人民币升值「先开门」**叠加**长鑫存储（CXMT）+ 宇树科技（Unitree）IPO 吸金**——中国硬科技 + AI 机器人板块成为 A 股新热点。宇树（人形机器人）IPO 估值受到市场关注，与英伟达 RTX Spark + Build 2026 形成"全球本地 AI 算力军备竞赛"的镜像。

来源：YouTube 财经起床號 6/2 | 2026-06-02

---

## 📊 论文与研究

### 📄 arXiv cs.AI 5/29-6/2 热门：多 Agent 推理 + 推理缩放 + 世界模型

- **LinTree** (2605.31492)：用显式结构化搜索历史提升 LLM 推理
- **FAM-Bench** (2605.31410)：Food-as-Medicine 多模态推理基准
- **HypoAgent** (2605.31370)：基于知识图谱的交互式假设生成 Agent
- **Learning to Adapt** (2605.31365)：自改进 Web Agent，认知感知探索
- **TraceGraph** (2605.31308)：Agent 轨迹诊断与改进的共享决策图
- **UniScale** (2605.30898)：通过模型路由 + 测试时缩放联合优化实现自适应推理缩放
- **COMPASS** (2605.30838)：认知 MCTS 引导的 Process Alignment for安全搜索 Agent

来源：arXiv cs.AI recent | 2026-05-29 → 2026-06-02

---

## ⭐ GitHub Trending · AI 爆款

| 项目 | 类别 | 趋势 |
|------|------|------|
| LangChain ⭐ 122.8k | Agent Framework | 稳居第一 |
| OpenHands (All-Hands-AI) ⭐ 60.5k +196/天 | Coding Agents | 持续爆发 |
| MetaGPT ⭐ 59.6k +72/天 | Multi-Agent | 稳定增长 |
| opencode (anomalyco) ⭐ 55.2k +1,049/天 | Coding Agents | 单日暴涨 |
| AutoGen (microsoft) ⭐ 48.2k +82/天 | Multi-Agent | 稳 |
| Codex (openai) ⭐ 44.5k +600/天 | Coding Agents | 持续爆 |
| CrewAI ⭐ 37.6k +151/天 | Agent Framework | 稳 |
| Cline ⭐ 49.0k +108/天 | Coding Agents | 稳 |
| Cursor ⭐ 30.9k | IDE-Native Agent | 稳 |
| Dify ⭐ 21k+ | LLM App Platform | 稳 |

**今日最大黑马**：`anomalyco/opencode` 单日 +1,049 stars，是当周增长最快的 Coding Agent 框架。

来源：OSSInsight Trending AI / GitHub Trending | 2026-06-02

---

## 🔒 安全警示

### ⚠️ AI 浏览器扩展：企业网络最大盲区（延续早报警示）

LayerX 报告：**AI 浏览器扩展**存在漏洞概率高 60%、访问 Cookie 高 3 倍、执行远程脚本高 2.5 倍、增加权限高 6 倍。99% 企业用户至少安装 1 个扩展，超 1/4 用户装 10+ 个。**这是 6/2 仍需警惕的企业级 AI 攻击面**，Build 2026 把 AI 浏览器当企业入口——攻击面同步扩大。

来源：LayerX / The Hacker News | 2026-06-01

### ⚠️ Claude Code 源码泄露后续（延续晚报预警）

昨日 Anthropic Claude Code 因 npm 打包配置疏忽，意外泄露 51.2 万行 TypeScript 源码（含 1906 个文件、40+ 工具模块），包含未发布核心功能及安全架构细节。**6/2 跟进**：Anthropic 已紧急下架并发布赔偿公告，安全社区开始分析暴露的 internal API。Build 2026 上 Microsoft 把 Claude Cowork 集成进 Copilot，**集成深度 + 源码泄露**的组合在企业侧引发新一轮安全评估。

来源：Anthropic / The Hacker News | 2026-06-01 → 2026-06-02

---

## 📌 今日要点

- **Build 2026 Day 1 收官**：MAI 三连发 + Copilot Wave 3 + Copilot Cowork（集成 Anthropic）+ Agent 365 + Microsoft 自研 reasoning 模型
- **NVIDIA RTX Spark 量产**：6,144 CUDA 核 + 128GB 统一内存，本地 Agent 的「Apple Silicon 时刻」
- **企业 AI Agent 平台成新主战场**：Wonderful B 轮 €1.298 亿，VC 从基础模型轮动到部署平台
- **Anthropic 估值 $9650 亿首超 OpenAI**：Claude Opus 4.8 + Claude for Small Business 双线推进
- **Quantinuum 200 亿美元冲刺纳斯达克**：量子计算史上最大 IPO，中国「悟空-180」镜像发力
- **EU AI Act 8 月合规节点逼近**：Digital Omnibus 中央集权化，最高罚款 €3500 万
- **OpenAI 退役日历**：GPT-4.5 6/27、o3 8/26 离开 ChatGPT
- **中文圈：英伟达×清华 Gamma-World 多智能体世界模型发布 + 复旦×通义 CUA 新范式**
- **GitHub Trending 黑马**：`anomalyco/opencode` 单日 +1,049 stars

---

## 🔮 今晚 21:00 预告（晚间情报）

今晚 21:00 OPC 晚间情报将聚焦：
- Build 2026 Day 2（6/3 凌晨）会有哪些重磅——MAI 系列下半场、Foundry 新功能
- 安全社区对 Claude Code 源码泄露的进一步分析
- SpaceX IPO 6/12 临近的市场反应
- 加密/预测市场当日波动（Anthropic 估值、SpaceX 估值赔率变化）

---

*数据来源：Microsoft Build 官网 · NVIDIA Newsroom · TestingCatalog · TimesOfAI · The Verge · TechCrunch · WindowsForum · LLM-Stats · Angel Investors Network · 36氪 · 量子位 · 钛媒体 · 21财经 · 苹果财经起床號 · EU Parliament · Future of Life Institute · FLI · arXiv cs.AI · LayerX · The Hacker News · Anthropic · CNBC · IGN · KitGuru · OSSInsight · GitHub Trending*
