# OPC 晚间情报 | 2026-05-14

## 1. GPT-5.5 Instant 上线：OpenAI 推出新版默认模型，幻觉率大幅降低

**时间**：5月5日

OpenAI 推出 **GPT-5.5 Instant**，取代 GPT-5.3 Instant 成为 ChatGPT 默认模型。该版本核心改进：

- **幻觉率显著下降**：在法律、医学、金融等敏感领域，幻觉率大幅降低
- **AIME 2025 数学测试**：得分 81.2（GPT-5.3 为 65.4）
- **MMMU-Pro 多模态推理**：得分 76 vs 69.2
- **上下文记忆**：可搜索历史对话、文件和 Gmail，来源可查、可删改
- **API 上线**：以 "chat-latest" 提供，5.3 版本三个月后下架

来源：TechCrunch

---

## 2. 首例 AI 研发零日漏洞：Google 披露 2FA 绕过攻击

**时间**：5月11日

Google 威胁情报团队（GTIG）披露：网络犯罪分子使用 AI 系统（极可能为 LLM）研发出**首个已知的零日 2FA 绕过漏洞**。特征：

- Python 脚本包含大量教育性 docstring、幻觉的 CVSS 评分
- 代码格式"教科书式"Pythonic，符合 LLM 生成特征
- 需要有效凭证才能利用，本质是硬编码信任逻辑缺陷
- 漏洞影响某流行开源 Web 管理工具，已修复

**更广泛趋势**：AI 加速漏洞发现—发现、武器化、利用时间线全面压缩。"攻击者不会手软，防御者也无法选择退出。"

其他 AI 滥用案例：
- **UNC2814**（疑似中国背景）：引导 Gemini 进行网络漏洞研究
- **APT45**（朝鲜）：发送"数千个重复 prompt"递归分析 CVE 和 PoC
- **PromptSpy**：安卓恶意软件滥用 Gemini 分析屏幕并自动点击
- **APT27**（中国）：用 Gemini 加速开发僵尸网络管理应用
- 地下 API 中转市场：中国开发者通过灰市 relay 平台绕过 Claude/Gemini 访问限制，模型精度从 83.82% 降至约 37%

来源：The Hacker News

---

## 3. 预测市场 + AI Agent：加密与 AI 深度融合加速

**AWS 推出 AI Agent 支付**：Amazon Bedrock AgentCore Payments，携手 Coinbase 和 Stripe，支持 AI Agent 使用 USDC 购买网络内容、API 访问、MCP 服务器和跨 Agent 交易。

**Binance 入局**：宣布为 AI Agent 提供"交易所级大脑"交易智能，OKX 同日推出 OnchainOS AI 升级版，定位为自主加密交易 Agent 基础设施。

**Polymarket 预测市场**：AI Agent 正在接管 Polymarket——Valory 的 Polystrat Agent 7×24 小时自主交易，AI 从新闻实时生成预测问题、分析市场情绪、合成多市场信息做复杂预测。

**核心洞察**："预测市场本质是去中心化新闻编辑部，市场直接告诉你概率而非专家观点。"

来源：CoinDesk、Blockonomi、StockTwits

---

## 4. 美国政府获模型提前访问权：Google、Microsoft、xAI 签署协议

美国商务部 AI 标准与创新中心（CAISI）宣布：**Google、Microsoft、xAI** 同意在公开发布前向政府提供模型进行安全评估此前 OpenAI 和 Anthropic 已签署类似协议。

协议背景：Trump 政府正考虑为AI工具建立政府审查机制，要求企业提前报告可能构成安全风险的 AI 能力。CAISI 已完成 40+ 次评估（含未发布模型）。

来源：Bloomberg、CNN

---

## 5. GitHub Trending 热点

- **vicode**：Rust TUI coding agent，fuse-overlayfs 实现 tabs/subagents 并行，共享编译缓存
- **Maelstrom**：轻量 Agent 框架，仅 agent/workflow/session/timers 四个概念
- **AI 安全工具爆发**：Quasar Linux RAT、Linux PamDOORa、CopyFail 漏洞被大规模利用
- **SWE-bench**：软件工程解决率 2024 年 8 月 33% → 2025 年 12 月 81%

来源：Hacker News

---

## 6. 今日安全漏洞一览

| 漏洞 | 影响 | 状态 |
|------|------|------|
| Palo Alto PAN-OS RCE | root 访问、间谍活动 | 已在野利用 |
| Apache HTTP/2 CVE-2026-23918 | DoS + 潜在 RCE | 补丁中 |
| Linux Kernel Dirty Frag LPE | 多发行版 root 提权 | 在野 Exploit |
| Linux PamDOORa | PAM 模块窃取 SSH 凭证 | 新发现 |
| LiteLLM CVE-2026-42208 | SQL 注入 | 披露 36 小时内已遭利用 |

来源：The Hacker News
