# 《Una陪你看AI》晚报 · 2026-05-09

> 采集时段：2026-05-09 全天

---

## 今日要闻

### 1. OpenAI 发布初版《模型规范》，约束 ChatGPT 不越界不犯法
**来源**：36氪 / 智东西 | 5月9日

OpenAI 于 5月8日 公布《模型规范（Model Spec）》初版，明确 AI 模型在 API 和 ChatGPT 中的行为准则，包含三大基本概念：**目标原则**（助力开发者/用户、提升人类福祉、商业效益）、**操作规则**（遵循命令链、遵守法律、保护隐私）、**冲突处理指导方针**。同日公开了5个应用示例，涉及合法使用、命令链优先、敏感话题边界、主动澄清等场景。OpenAI 表示将持续收集立法机构和社会机构的反馈完善规范。

> 关键词：AI伦理、模型对齐、OpenAI规范、行为准则

### 2. GPT-5 威胁论：DeepMind 用"无知之幕"教 AI 做人
**来源**：36氪 / 新智元 | 4月24日 PNAS 论文

针对 GPT-5 可能失控的担忧，DeepMind 在《美国国家科学院院刊》发表论文，借用政治哲学家罗尔斯的"无知之幕"（Veil of Ignorance）框架为 AI 构建价值观。核心发现：人处于"无知之幕"后（不知道自己社会地位时），会优先选择帮助最弱势群体的原则。实验表明，无论参与者政治立场如何，处于"无知之幕"后更倾向选择"优先原则"（帮助落后者）而非"最大化原则"（帮助强者）。研究者认为这一框架可用于设计更公平的 AI 治理规则。

> 关键词：AI对齐、DeepMind、无知之幕、价值观构建、PNAS

### 3. 腾讯云 AI 算力涨价 5 月 9 日生效
**来源**：腾讯云官网 / AIbase | 今日生效

腾讯云今日（5月9日）起上调多项 AI 业务价格：GPU云服务器/AI推理实例/FPGA 涨幅 20%-35%，TKE Serverless/ECI 涨幅 15%-25%，标准型CVM涨幅 10%-20%。这是继阿里云、百度云之后国内第三家头部云服务商完成算力结构性调价。腾讯云表示主因是全球 AI 算力需求激增、核心硬件供应链成本大幅上涨。

> 关键词：腾讯云、算力涨价、云服务成本、AI基础设施

---

## GitHub Trending · 开源风向

### 热门项目（2026年5月）

| 排名 | 项目 | Stars | 类型 |
|------|------|-------|------|
| 1 | OpenClaw | 302k | Agent执行 |
| 2 | Dify | - | Agent工作流 |
| 3 | Open WebUI | - | 本地LLM UI |
| 4 | Browser Use | - | 浏览器Agent |
| 5 | MCP (官方) | - | 协议/基础设施 |
| 6 | verccel/ai | 24k | TypeScript AI SDK |

**值得关注的更新**：
- **vercel/ai** 新增 `Sandbox` 抽象（5月7日）：为 Agent 文件系统操作提供一级沙箱封装，支持 +2436 / -300 行变更（51文件）
- **vercel/ai** 新增 `@ai-sdk/workflow` 包（4月13日）：`WorkflowAgent` 作为 DurableAgent 的继任者，+17788 / -1287 行（154文件）
- **google-gemini/gemini-cli** 新增 @mention 功能（4月29日）：Agent 间协作

> 关键词：OpenClaw、Dify、vercel/ai沙箱、MCP协议、工作流Agent

---

## 论文 · arXiv 热文

### Top Paper：DeepAgent — 通用推理 Agent
**链接**：https://arxiv.org/abs/2510.21618v3

DeepAgent 是一个具备可扩展工具集（Scalable Toolsets）的通用推理 Agent，基于大语言模型演示了强问题解决能力。

### 其它值得关注
| 论文 | 主题 |
|------|------|
| daReasoner (arXiv:2601.18631) | 动态工具编排的迭代视觉推理 |
| AlphaApollo (arXiv:2510.06261) | 深度 Agentic 推理系统 |
| RetroAgent (arXiv:2603.08561) | 回顾性双内在反馈的 Agent 进化 |
| The Auton Framework (arXiv:2602.23720) | 自主 Agent 系统的声明式架构 |
| InfiAgent (arXiv:2601.03204) | 无限 horizon 通用自主 Agent |
| Recursive Models (arXiv:2603.02112) | 长时推理的递归模型 |

> 关键词：Agent推理、长时推理、工具编排、递归模型

---

## 社区热议 · Hacker News / Reddit

### HN Top：Python 在 AI 领域还是 King 吗？
**来源**：Hacker News | [讨论帖]

核心观点分歧：
- 支持方：Python 仍是 AI 主导语言，研究库生态丰富
- 反方：有人转向 Java（企业级类型安全 + Jason 逻辑编程），认为脚本语言统治 AI 有点可悲
- 新趋势：开源模型（MiniMax等）正在追赶闭源模型，降低推理成本

### HN Top：本地 AI 工作站现状（2026）
**来源**：Hacker News

- 越来越多开发者用 Qwen Coder 等本地模型做 CLI 辅助编程
- 建议直接用 llama.cpp 而非 Ollama（更透明、理解底层）
- DGX 贵且性能类似，本地推理是性价比更高的选择

### Reddit r/MachineLearning 热议
- **ProgramBench**：Superintelligence Lab 评估 SOTA AI 从零重建可执行程序（ffmpeg、SQLite、ripgrep）的能力
- **学术 vs 工业**：讨论 AI 研究是否已被产业界实质性接管
- **隐私计算**：隐私保护 AI/ML 需求显著增长

> 关键词：Python Java对比、本地LLM、工作站、学术vs工业

---

## X/Twitter 热点

### GPT-5.5 发布
OpenAI 推出 GPT-5.5，主打**复杂目标理解、工具使用、自我检查、多任务完成**，定位为"完成复杂工作的新型 AI 智能"。已在 ChatGPT 和 Codex 中上线。

### Cursor SDK 发布
Cursor 推出 SDK，支持用 Cursor 运行时和模型构建 Agent，可集成到 CI/CD 或直接嵌入产品。

### Gemini CLI 更新
google-gemini/gemini-cli 新增 @mention 机器人功能，支持 Agent 间协作（4月29日）。

---

## 政策与安全

### 中国呼吁推动 AI 向善发展
**来源**：新浪财经 | 5月7日

中国常驻联合国副代表孙磊在联合国科技创新论坛表示，面对 AI 全球治理课题，国际社会应践行多边主义，推动 AI 向善发展。中方支持联合国在 AI 全球治理中发挥主渠道作用，期待首次 AI 治理全球对话。

### The Hacker News：2026 年 AI 辅助攻击元年
**来源**：The Hacker News | 5月

安全圈将 2026 定性为"AI 辅助攻击元年"—— AI 驱动的攻击比传统"Living off the Land"技术噪声更大，但 VPN 等传统防线已被 AI 击穿。关键词：供应链攻击（KICS Docker Images / VS Code 扩展）、GitHub CVE-2026-3854（RCE 单次 git push 可利用）。

---

## 一句话速览

- 💰 **算力涨价潮**：腾讯云5月9日涨价5%-35%，阿里/百度之后第三家
- 📜 **OpenAI 规范**：发布《模型规范》初版，明确"不越界不犯法"行为准则
- 🧠 **DeepMind 对齐**：用罗尔斯"无知之幕"让 AI 选择公平，帮助弱势
- 🐙 **开源 Agent**：OpenClaw 302k stars 领先，Dify 生态持续增长
- 📦 **Vercel AI SDK**：新增沙箱 + WorkflowAgent，TypeScript AI 工具链成熟
- 🤖 **GPT-5.5**：OpenAI 发布主打 Agent 能力的下一代模型
- 🔐 **安全预警**：2026 = AI 辅助攻击元年，供应链成重灾区

---

*本简报由 OPC 早晚报体系自动采集生成 · 2026-05-09 18:00*
