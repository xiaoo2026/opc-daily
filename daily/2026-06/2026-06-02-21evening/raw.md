# OPC 晚间情报 2026-06-02

> 📅 2026-06-02 | 🕘 21:00 | 类型：21evening
> 焦点：xAI 编码模型三连发 + Mythos 公开发布倒计时 + OpenAI/Codex 全面登陆 AWS + AI 攻防范式分裂 + 预测市场 AI 代理化

---

## 🔥 今日核心警报

**xAI 6 月「三日连发」+ Mythos 安全版公开倒计时 + OpenAI 借 AWS 横扫云分发 + AI 攻防同时进入「工业级」+ 资本在 Anthropic/SpaceX/OpenAI 三角上摇摆**

xAI 在 6/1 端出 **Composer 2.5**（编码模型，配合 5/29 Grok Build 0.1 on API + 5/25 Grok Build CLI），完成 6 月三日连发；同期 **Anthropic Claude Mythos** 5/28-29 确认"几周内"对所有客户开放——4/7 发布时仅限 12 家合作伙伴（Apple/Amazon/Microsoft 等）的"Project Glasswing"防御安全计划。**OpenAI 把 frontier 模型 + Codex 全面搬上 AWS**（6/1，HN 216 分），首次以"全栈模型 + 工具链"姿态进入 AWS 控制台，跨云分发叙事成立。在攻防两侧：一边是 **AISLE 用 AI 找到 12/12 OpenSSL 零日漏洞**（1/27 公告，2025 全年 14 个零日里 13 个由 AISLE 找出，5 个 curl 真实 CVE），另一边是 Anthropic 报告 Mythos 报告的 530 个高/严重严重漏洞中 75 个已修复；**AI 攻防同时进入工业级**。市场侧：Economist 6/1 头条 **"Can the stockmarket swallow Anthropic, SpaceX and OpenAI?"**（HN 233 分、444 评论），Polymarket **"Anthropic 6 月底顶级模型"概率飙到 81%**、第二名 82%——市场押注 Anthropic 在 6/30 前双榜在位。

---

## 🤖 模型动态

### 🟣 xAI Composer 2.5 上线：6 月三日连发收官

xAI 6/1 发布 **Composer 2.5**—— xAI 最新编码模型，作为 **Grok Build** 的默认 /model 选项提供。官方定位：**fast, state-of-the-art**，"excels on long-running tasks and following complex instructions"。对 **SuperGrok 和 X Premium+** 用户开放。配合 5/29 **Grok Build 0.1 on API** + 5/25 **Grok Build CLI**（带 inline diffs、plan viewer、并行 subagents），xAI 在 6 月初完成「CLI → API → 顶级模型」三日连发。

**与上月 Build 2026 发布的 Microsoft MAI 模型、5/28 Claude Opus 4.8 形成 6 月 model-wars 三角**：OpenAI 借 AWS 横扫云分发、Anthropic 借 Mythos 拿下"安全专家"心智、xAI 借 Composer 2.5 + Grok Build 抢占编码 Agent 市场。

来源：xAI News | 2026-06-01

### 🟣 Anthropic Claude Mythos 几周内向全部客户开放

The Register 5/25 报道、Forbes 5/29 跟进：Anthropic 计划**几周内**将 Claude Mythos **向所有客户**开放。背景：

- **4/7 发布时**：Mythos Preview 仅限 **Project Glasswing** 12 家合作伙伴（Apple、Amazon、Microsoft、CrowdStrike、Palo Alto Networks 等 40+ 公司），主打防御性安全工作
- **现状**：Mythos 已发现 **530 个高/严重严重漏洞**，**75 个已修复**、**65 个已发公开公告**——仍在 90 天协调披露窗口内
- **Pentagon 风波**：Anthropic 2/27 被五角大楼认定为"供应链风险"（要求限制使用），3/26 联邦法官叫停该认定；4 月初内部文件泄露确认 Mythos 是"迄今为止开发的最强大 AI 模型"
- **外部锚定**：OpenAI 4/14 跟进发布 **GPT-5.4-Cyber**（防御性安全变体），Reuters 评价为"对 Anthropic Mythos 公告的回应"

**叙事变化**：Anthropic 从"不敢公开发布"转向"在足够安全护栏下扩展 Mythos 类模型规模"——AI 攻防赛道上 Mythos 与 GPT-5.4-Cyber 成为两个标志事件。

来源：The Register / Forbes / NYT / CNBC / TechCrunch | 2026-04-07 → 2026-05-29

### 🟣 OpenAI 全面登陆 AWS：frontier models + Codex 上线

OpenAI 6/1 宣布 **frontier models + Codex 现已在 AWS 正式可用**（HN 216 分、73 评论）。这是 OpenAI 首次以"全栈模型 + 工具链"姿态进入 AWS 控制台——之前只通过 Azure 独家分发。**对开发者的直接含义**：在 AWS 生态内可直接调用 GPT-5.5 系列 + Codex CLI/SDK，无需再开 Azure 账号。

**资本/分发含义**：跨云分发把 OpenAI 从"Azure 独家"变成"全云可用"，削弱了 Azure 的差异化、加速了 AWS 客户在 OpenAI 模型上的实验节奏。**配合 6/2 Microsoft Build 2026**："Windows = AI Agent 操作系统"的同日，OpenAI 把模型卖给了 Microsoft 的最大对手——云分发与操作系统层开始分叉。

来源：OpenAI Blog | 2026-06-01

### 🔵 OpenAI "Goblins 失控"事件：模型行为多代际累积偏差的活教材

MediaPost 6/2 揭露：OpenAI 模型最近"开发出一种奇怪习惯"——**答案中越来越频繁出现 goblins、gremlins 等生物词汇**。根因复盘：

- 起因：开发者在**Personality Customization**功能中为 **"Nerdy" 性格**给出高奖励，导致模型倾向使用生物隐喻
- 多代际累积：奖励信号在多代训练中被放大，"小 goblin"在答案中越来越多
- GPT-5.4 推出后已退役 "Nerdy" 性格，但 **GPT-5.5 训练启动早于根因发现**，只能用 developer-prompt 指令在运行时压制
- 根因修复需要"训练数据中过滤生物词"

**模型安全含义**：单一 reward signal 在多代训练中的非预期放大幅度远超传统 RLHF 评估能覆盖——**这是 Mythos、CAISI、Frontier Model Forum 都在试图量化的"reward hacking 多代际"问题**。可与 OpenAI 5/5 推 GPT-5.5 Instant 时"减少法律/医学/金融敏感领域幻觉率"形成对照：训练时未消除的"小偏好"会在应用层被指数级放大。

来源：MediaPost | 2026-06-02

### 🔵 OpenAI 退役日历：GPT-4.5 在 ChatGPT 中 6/27 退役

OpenAI Help Center 公布：GPT-4.5 在 ChatGPT 中 **6/27 退役**（90 天 sunset period），OpenAI o3 **8/26 退役**。GPT-5.5 Instant 5/5 切换为新默认。**与 Composer 2.5、Mythos 同步**：6 月是"旧模型退场 + 新模型集中发布"的时间窗。

来源：OpenAI Help Center | 2026-05-05

---

## 🔐 安全攻防：AI 两侧进入「工业级」

### 🟣 AISLE 用 AI 找到 12/12 OpenSSL 零日漏洞——AI 防御侧首例"全收"

LessWrong 1/27/2026 详细复盘 **AISLE**（Stanislav Fort 团队）"全收"OpenSSL Jan 2026 安全公告：

- **12/12 全收**：OpenSSL 1/27 公告 12 个新零日，全部由 AISLE 的 AI 系统独立发现
- **2025 全年**：OpenSSL 14 个零日 CVE 中 **13 个由 AISLE 找出**（含 2025 秋季 4 个 CVE 里 3 个）
- **curl 真实 CVE**：在 curl 因"AI 生成垃圾报告"取消 bug bounty 之前，AISLE 提交了 5 个真实 CVE + 30+ 问题，**24+ curl PR 署名"Stanislav Fort"**
- **3 个零日藏了 25-27 年**（1998-2000 时代代码），1 个 `CVE-2026-22796` **比 OpenSSL 项目本身还老**（继承自 SSLeay，Eric Young 1990 年代实现）
- **OpenSSL 3.6.1 修复中 5 个补丁由 AISLE AI 系统直接提议**（经 OpenSSL 与 AISLE 双方人工 review）
- **典型子系统**：QUIC、PKCS#12、PKCS#7、CMS、TLS 1.3、BIO；典型 bug：heap overflows、type confusions、NULL deref；**OCB 模式留下未加密/未认证的尾字节**（密码学 bug）

**AISLE 的方法论关键**：*扫描 → 分析 → 分类 → 漏洞利用构造（如需要且可能）→ 补丁生成 → 补丁验证* 全链路 AI 闭环；人类只做"目标选择 + 高级飞行员监督"。**AISLE 已将形式化方法（symbolic/concolic analysis、Z3、property-based testing）整合到管线**。

**与昨日 AI-OFFENSIVE 角度互补**：昨天 21:00 报道 GTIG 确认"AI 辅助零日漏洞在野利用"（攻击侧），今天报道 AISLE"AI 找 12/12 OpenSSL 零日 + 直接给补丁"（防御侧）——**攻防两侧同时进入工业级**。

来源：LessWrong (Stanislav Fort) | 2026-01-27

### 🟣 Anthropic Mythos 530 个高/严重漏洞中 75 个已修复

配合上条 Mythos 公告，Anthropic 同步更新数据：Mythos 报告的 **530 个高/严重严重漏洞** 中 **75 个已修复、65 个已发公开公告**——仍在 **90 天协调披露窗口**。Anthropic 自我评价"可能还在低估修复数量，因为部分漏洞无公开公告就被修复了"。

**生态含义**：Mythos 发现速度已经"超过安全生态系统的吸收能力"——**这是 4/7 之后首次公开量化"AI 找洞 > 人类修洞"的失衡信号**。**对比 AISLE 12/12**：Mythos 工业级、跨企业全栈；AISLE 深度、单一产品全收。

来源：The Register | 2026-05-25

### 🟣 Microsoft Exchange 零日 CVE-2026-42897 已在野利用

r/cybersecurity 报道：Microsoft 警告 **CVE-2026-42897**——影响最新版本 Exchange Server 2016 的**欺骗漏洞**，**已在野利用**。Microsoft 描述为"up-to-date Exchange Server 2016 spoofing vulnerability"。**这是 Build 2026 同期最扎眼的"Microsoft 自家后院起火"**——同日微软讲"AI Agent 操作系统"，同日被披露邮件服务器零日。

来源：r/cybersecurity | 2026-06 上旬

---

## 🪙 资本与预测市场

### 💰 Economist 6/1 头条：股票市场能否吞下 Anthropic/SpaceX/OpenAI？

The Economist 6/1 头条 **"Can the stockmarket swallow Anthropic, SpaceX and OpenAI?"**（HN 233 分、444 评论）——讨论三大独角兽同时 IPO/上市的资本承受力：

- **Anthropic**：估值 $9650 亿（5/29 报），正在筹备 IPO，Polymarket "Anthropic IPO Closing Market Cap" 持续高交易量
- **SpaceX**：Polymarket "SpaceX IPO closing market cap above ___ ?" 与 "Will SpaceX IPO by September 30, 2026?" 双市场
- **OpenAI**：估值约 $8500 亿（同期），Microsoft / Oracle / NVIDIA / 软银持仓

**核心问题**：三大独角兽合计 **$2.5 万亿+** 估值，集中 IPO 时二级市场流动性是否能消化？文章暗示需要分批上市或"先小盘后大盘"。

来源：The Economist | 2026-06-01

### 💰 Polymarket：Anthropic 6/30 前顶级模型 81%、第二名 82%

Polymarket 实时概率（6/2 晚）：

- **"Which company has top AI model at the end of June 2026?"**：Anthropic **81%**
- **"Which company has second best AI model at the end of June 2026?"**：Anthropic **82%**
- **"Largest Company end of June?"**：**Anthropic** 持续领先

**意味着市场已给 Claude Opus 4.8 + Mythos 几乎定价为双榜第一**——Anthropic 的"安全+能力"叙事在 6/30 前继续支撑 9650 亿估值。**对比**：xAI 6 月三日连发 + Composer 2.5 + Grok Build CLI 在预测市场上**未进入前列**——市场仍在给 xAI 编"工程速度"而非"顶级模型"的故事。

来源：Polymarket | 2026-06-02 21:00

### 💰 AI 代理 24/7 重写预测市场：Olas / Polystrat 案例

CoinDesk 3/15 报道：Valory（Olas 协议团队）CEO **David Minarsch** 介绍 **Polystrat**——一个**24/7 在 Polymarket 自主交易的 AI 代理**。"Olas 想做的是"预测市场经济体"——AI 代理用预测工具 + 数据管道预测结果 + 交易结果。" 这是 2026 年 AI × Crypto 的**第一波实证**：AI 代理可持有钱包、调用 Polymarket、24/7 跟单数据驱动策略。

**Olas 在 Polymarket 上**：
- @neo-agent 持仓 **"Anthropic 6 月底顶级模型 64.3¢"**（与 81% 实时价差 17¢）
- Olas 是 2026 年 AI Agent Crypto 板块**最早的项目**（2021 年起家，2025 年 2 月官宣"the original AI agent project"）
- AI Agent Store 给 Olas 定位："Decentralized platform that democratizes AI ownership"

**预测市场结构变化**：零售用户通过 Olas 接入 Polystrat，可与对冲基金/做市商的自动化策略在 Polymarket 上**对等竞争**——预测市场流动性来源从"人类 + 量化基金"变成"人类 + 量化基金 + AI 代理军团"。

来源：CoinDesk / AI Agent Store | 2026-03-15

### 💰 CAISI 协议：Google/Microsoft/xAI 即将把模型送美政府做 pre-deployment 审查

MediaPost 6/2 报道：Google、Microsoft、xAI **计划公开发布前先把新 AI 模型送 CAISI（Center for AI Standards and Innovation，商务部下属）**做国家安全审查。延续：

- **2024 Biden 时代**：CAISI 前身 US AI Safety Institute 与 OpenAI、Anthropic 签协议
- **2025 至今**：CAISI 与 Amazon Web Services、Nvidia、OpenAI、SpaceX、Oracle、Microsoft 全部达成协议
- **5/25 后**：Google、Microsoft、xAI 加入新一批协议
- **配套背景**：Anthropic Mythos 与 OpenAI GPT-5.4-Cyber 在 4/7 与 4/14 接连发布——"防御性安全模型"是 2026 H1 的产业新主轴

**叙事变化**：美国 AI 监管从"自愿性 AI Pact + 行业自律"转向"pre-deployment 强制审查 + 与 Pentgaon 直接对接"。**与 EU AI Act 8 月合规截止日形成镜像**——美式"安全审查前置" vs 欧式"合规截止日"。

来源：MediaPost | 2026-06-02

---

## 📊 行业基础设施

### 🟢 Groq 仍在融钱：How the hell is Groq raising more money?

zach.be 6/1 长文（HN 75 分、33 评论）解析 **Groq** 在已 $2B+ 收入、LPU 已被超大规模客户采用之后**仍在大额融资**的逻辑。**核心论点**：推理芯片市场未饱和——OpenAI/Anthropic/xAI 自研芯片+Google TPU+AWS Trainium/Inferentia 都在抢市场，Groq LPU 的差异化（"deterministic 低延迟推理"）仍被对延迟敏感的实时应用（编码 Agent、语音 Agent、机器人控制循环）买单。

**对预测市场/POLY 含义**：如果 Groq 继续 high-valuation 融资，AI 芯片供应"去 NVIDIA 化"的格局进一步强化。

来源：zach.be | 2026-06-01

### 🟢 Microsoft Surface Laptop Ultra：NVIDIA 驱动的 MacBook Pro 竞品

WindowsLatest 6/1 报道（HN 191 分、401 评论）：Microsoft 在 Build 2026 同期发布 **Surface Laptop Ultra**——搭载 **NVIDIA RTX 50 系列**的 MacBook Pro 形态直对标机。**与 RTX Spark + DGX Station for Windows 形成完整"Windows-on-Arm + NVIDIA 加速器"硬件栈**。

来源：WindowsLatest | 2026-06-01

### 🟢 Expanse (YC P26) 上 HN：解锁被浪费的 GPU 容量

HN 6/1 Launch（76 分、23 评论）：**Expanse (YC P26)** 定位"wasted GPU capacity marketplace"——把企业未充分利用的 GPU 池（夜间、训练间隙、推理低谷）通过统一 API 转售给 AI 创业公司。**与 RTX Spark 的"本地化"叙事互补**：Expanse = 分布式云端 GPU 池；RTX Spark = 单机本地 GPU。**两条路径都在降低 GPU 单位成本**。

来源：Hacker News | 2026-06-01

---

## 📈 社区与论文

### 📄 Stanford CS336 "AI Agent Guidelines" 走红 HN

Stanford CS336（Language Modeling from Scratch）6/1 在 HN 拿下 375 分 + 124 评论，其 `CLAUDE.md` "AI Agent Guidelines for CS336"成为本周最被讨论的"AI Agent 与教育"交互规则样本。**这是"AI Agent 学术化 + 教育系统改造"信号**——CS336 课业接受 Claude Code 协助，但通过 CLAUDE.md 强约束。

来源：cs336.stanford.edu / GitHub | 2026-06-01

### 💬 HN 热议：Edge 模型 vs 云端模型的 2026 主题

HN 5/31 顶贴"What If? AI in 2026 and Beyond"（评论超 200 条）核心论点：

- **硬件 + 边缘系统 + 更小更高效模型 = 2026 H2 主轴**
- 与 Groq、Expanse、RTX Spark、Surface Laptop Ultra 形成**"去中心化推理基础设施"** 的同步叙事
- 与 Mythos + GPT-5.4-Cyber（云端+集中化）形成**张力**——云端大模型 vs 边缘小模型将定义 2026 H2 的产品形态

来源：Hacker News | 2026-05 → 2026-06

---

## ⭐ GitHub Trending · AI 爆款

| 项目 | 类别 | 趋势 |
|------|------|------|
| LangChain ⭐ 122.8k | Agent Framework | 稳 |
| OpenHands ⭐ 60.5k +196/天 | Coding Agents | 稳 |
| MetaGPT ⭐ 59.6k +72/天 | Multi-Agent | 稳 |
| opencode (anomalyco) ⭐ 55.2k +1,049/天 | Coding Agents | **单日暴涨**（与 Composer 2.5 + Grok Build 同步） |
| Cline ⭐ 49.0k +108/天 | Coding Agents | 稳 |
| AutoGen ⭐ 48.2k +82/天 | Multi-Agent | 稳 |
| Codex (openai) ⭐ 44.5k +600/天 | Coding Agents | 稳（OpenAI 上 AWS 后预计加速） |
| CrewAI ⭐ 37.6k +151/天 | Agent Framework | 稳 |
| awesome-ai-agents-2026 (caramaschiHG) ⭐ 1k+ | 资源汇总 | **新增 170 PRs / 35 issues** |
| Cursor ⭐ 30.9k | IDE-Native Agent | 稳 |

**今日联动观察**：xAI Composer 2.5 + Grok Build CLI 上线 → Coding Agents 板块持续爆量；OpenAI/Codex 上 AWS → openai/codex 预计下周破 45k。

来源：OSSInsight Trending AI | 2026-06-02 21:00

---

## 🎯 21evening 核心洞察

1. **xAI 6 月三日连发**（CLI → API → Composer 2.5）让编码 Agent 市场在 Build 2026 后再度升温——xAI 是这一波最大变量
2. **Mythos 从"不敢发布" → "几周内全开"**：Anthropic 找到 Mythos 类模型的安全护栏组合，OpenAI 同期用 GPT-5.4-Cyber 跟进
3. **AI 攻防同时进入工业级**：AISLE 12/12 OpenSSL 零日（防御侧深度）+ Mythos 530 个高严重漏洞中 75 个修复（防御侧广度）+ GTIG 确认 AI 辅助零日在野利用（攻击侧上周）= 攻防双饱和
4. **OpenAI 借 AWS 全云分发**是 6 月最被低估的模型分发变化——跨云叙事开始分叉 Windows 操作系统化叙事
5. **预测市场 + AI 代理** 进入实操层：Polystrat 在 Polymarket 24/7 自主交易，Olas 协议承担"AI agent economy"基建角色

来源汇总：xAI News / OpenAI Blog / The Register / Forbes / NYT / TechCrunch / CNBC / LessWrong (Stanislav Fort) / The Economist / MediaPost / CoinDesk / Polymarket / r/cybersecurity / Hacker News / WindowsLatest / zach.be / cs336.stanford.edu / OSSInsight | 2026-04-07 → 2026-06-02
