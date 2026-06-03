# OPC 晚报 2026-06-03

> 📅 2026-06-03 | 🕕 18:00 | 类型：evening | 覆盖：6/3 白天 12:00-18:00 全天候

> ⚠️ **主动差异化**：今早 morning 重点是 Anthropic $965B / 三独角兽 IPO / 出口管制 / 具身国标；今中午 afternoon 重点是腾讯云降价 97.5% / Marvell 涨 32% / Anthropic 多 GW 算力 / 宇树 IPO 过会 / Build Day2 Web IQ。本晚报聚焦**6/3 白天完整收官的 Build 2026 Day2 三件套（MAI-Thinking-1 + Aion + Majorana 2 + Microsoft Discovery GA + Mayo Clinic）、OpenAI 模型登陆 AWS Bedrock GA、Stargate Michigan $56B 动工、Grok Build beta 编码三方争霸、GitHub Copilot token 计量引爆开发者反弹**——不重复 morning 的资本/政策/国标角度，也不重复 afternoon 的云价格/Marvell/宇树角度，也不重复昨日 evening 的 Build Day1/NVIDIA RTX Spark/MAI 三连发角度。

---

## 🔥 今日核心警报

**Build 2026 Day2 把 Windows 打造成「AI Agent 一等公民」+ OpenAI 模型 GA 登 AWS Bedrock 价格对等 + Stargate Michigan $56B 动工 + Anthropic S-1 引发市场两极反应 + GitHub Copilot 6/1 token 计量引爆 4.7M 用户账单 50x 反弹 + xAI Grok Build beta 加入编码 agent 三方争霸——6/3 白天 8 个主要事件同时落地，AI 行业从「资本/政策/标准」进入「基础设施 + 算力 + 编码代理」三线落地期。**

过去 6 小时（中午 12:00 - 18:00），Build 2026 Day 2（北京时间 6/3 凌晨 0:30 开场）继续放出"AI Agent 一等公民"全套产品：①**MAI-Thinking-1** 凌晨首发——微软首个自研推理模型，350 亿活跃参数 + 128K 上下文 + "零蒸馏"训练，在盲测中与 Claude Sonnet 4.6 打平；②**Aion 1.0** 端侧小模型（Instruct + Plan 14B），主打 Windows 端侧 Agent；③**Majorana 2** 第二代拓扑量子处理器，可靠性比 Majorana 1 提升 1000 倍，目标 2029 年实现可扩展量子计算；④**Microsoft Discovery GA**——AI 科研平台正式发布（设计实验/写论文/提交实验室任务），David Carmona 自称"化学界的 Iron Man"；⑤**Mayo Clinic 合作**——为医疗 AI 共建 frontier model；⑥**Surface Laptop Ultra** + **Surface RTX Spark Dev Box**（1 petaflop，**未通过 FCC 认证不能合法销售**）+ **Web IQ / Azure HorizonDB**；⑦**MRC Network Protocol** 开放标准（与 AMD/Broadcom/Intel/OpenAI/NVIDIA 共同制定）。**OpenAI 6/1-2 在 AWS Bedrock 正式 GA**——GPT-5.5 + GPT-5.4 + Codex 上线，价格**与 OpenAI 一方价格完全一致**且消耗 AWS EDP 信用额——意味着大型 AWS 客户的 OpenAI API 消费可直接计入 AWS 承诺消耗，这是"OpenAI 借 AWS 横扫云分发"的实质兑现。**Stargate Michigan 6/1 正式动工**——Altman + Whitmer + Oracle + Related Digital + Blackstone + Walbridge 在 Saline Township 700 英亩农地上为 $56B（部分源称 $16B）"the Barn" 数据中心奠基，**这是密歇根州史上最大单笔投资**。**Anthropic S-1 引发市场两极反应**——Wedbush 分析师 Dan Ives 称 Anthropic "抢先 OpenAI"+"为相对低迷的 IPO 市场打开闸门"，但 WIRED 同时直接定调 "史上最大 IPO 候选"；**GitHub Copilot 6/1 全面 token 计量**引爆 4.7M 付费用户反弹——开发者报告 agentic 会话账单 25x-50x 上涨，社区帖 400+ 评论近 900 反对票；**xAI Grok Build beta 发布**——终端 TUI 编码 agent，基于 Grok 4.3，加入 Claude Code / OpenAI Codex 已有 GA 的编码代理三方争霸。

---

## 🤖 大厂动态

### 🟢 Build 2026 Day 2 完整收官：MAI-Thinking-1 + Aion + Majorana 2 + Discovery GA + Mayo Clinic

北京时间 6/3 凌晨 0:30，Microsoft Build 2026 Day 2 在旧金山继续。Mustafa Suleyman（Microsoft AI CEO）开场连发六弹：

**① MAI-Thinking-1（首发重磅）**——微软首个自研通用推理模型，**35B 活跃参数 + 128K 上下文**。Mustafa 强调微软所有 MAI 模型均"零蒸馏"（不依赖第三方模型输出训练），区别于业界通行做法。**关键基准**："在主要软件工程基准上比肩头部模型，盲测人评偏好与 Claude Sonnet 4.6 持平"——把 MAI-Thinking-1 定位在 Sonnet 4.6 同一档（不是 GPT-5.5/Opus 4.8 之上）。在 Azure Maia 200 加速器上运行，**将驱动 Microsoft 365 Copilot Agent Mode 跨 Word/Excel/PowerPoint**。Sonnet 4.6 定价 $3/$15 per M tokens，Azure 企业折扣下，**对 Anthropic Sonnet 档营收构成直接威胁**。

**② Aion 1.0（端侧模型双连发）**：
- **Aion 1.0 Instruct**——下一代 SLM 预览版，**任何 Windows 硬件都能跑**（不只 Copilot+ PC）
- **Aion 1.0 Plan**——**14B 参数推理/工具调用模型**，专门为本地 agent 工作流设计

战略意义：占据"本地前沿"生态位——比 Phi Silica 大、比 Sonnet 4.6 / GPT-5.5 小。配合 Windows Agent Framework（WAF）+ DirectML 2.0，**Windows 端侧 AI 完整堆栈**成型。同步扩展：Phi Silica 加 GPU 支持、视频超分加 CPU 支持、实时 on-device STT API 预览。

**③ Majorana 2 量子处理器**：第二代拓扑量子芯片，**比 Majorana 1 可靠性提升 1000 倍**——铅基超导材料 + 砷化铟/锑化铟化铟复合材料，量子比特平均寿命从 1-12ms 拉到 **20 秒**（部分场景 1+ 分钟）。拓扑保护间隙提升 1+ 倍。Nadella 称"我们开始工程化规模"，**目标 2029 年实现可扩展量子计算**（对比 IBM 2033、Google 2030s 初）。1 微秒门操作为退相干前的复杂电路提供条件。**已通过 DARPA 量子基准计划最终阶段评审**。

**④ Microsoft Discovery（科学 AI 平台 GA）**：VP David Carmona 演示"用 AI 改进塑料回收化学"——平台能**设计实验 + 写论文 + 提交实验室任务 + 建议协议**。Carmona 自称"化学界的 Iron Man"。**目标场景**：药物发现、蛋白质建模、临床试验设计、医学诊断。

**⑤ Mayo Clinic 健康 AI 合作**：微软与 Mayo Clinic 共建"专门为健康设计的 frontier model"，**用 Mayo 150 年的临床专业和科研数据训练**，通过 Azure 部署。架构/训练数据/上线时间未披露。Mayo 临床诊断声誉给微软医疗 AI 背书——临床决策支持、患者分诊、医学问答（非直接诊断）。

**⑥ Web IQ + Azure HorizonDB**：
- **Web IQ**——给 agent 提供结构化实时 web 数据，集成 Azure Agent Mesh（股价/监管/新闻/产品可用性）
- **Azure HorizonDB**——为 agentic 应用设计的全托管 PostgreSQL，**事务和搜索性能提升 3x**，高级向量索引、语义搜索、库内模型访问

**⑦ MRC Network Protocol（开放标准）**——Multipath Reliable Connection 协议，与 AMD/Broadcom/Intel/OpenAI/NVIDIA 共同制定（**竞争对手=行业标准信号**），动态路由 AI 工作负载绕开网络故障。

来源：Build Fast With AI | AIToolsRecap | Microsoft Build Live | 2026-06-03

### 🟢 GitHub Copilot 6/1 token 计量引爆 4.7M 用户账单 25x-50x 反弹

GitHub 6/1 凌晨 0 时正式把 Copilot 改成 **GitHub AI Credits**——1 credit = $0.01，按 token 消耗计费，**替代了原来的 flat-rate premium request**。**4.7M 付费订阅者**一夜之间从"固定月费"变成"按消耗"。**开发者报告**：

- 单次 agentic 编码会话消耗 **$30-$40 credits**（一个 Pro 用户的 $10 月度额度一次性用完）
- 社区帖 400+ 评论近 **900 反对票**
- 4/2026 GitHub 晚宣布到 5/30 TechCrunch 报道《What a joke》到 6/1 账单出炉——**3 个月缓冲期内开发者已表达强烈不满**

**最大成本冲击**来自：agentic 工作流、大上下文窗口、premium 模型、重复迭代、PR 审查自动化——而**不是普通内联补全**。**这与 6/3 Build Day2 Copilot debugging/profiling/test-generation agents 形成镜像**：微软在疯狂加 agentic 能力，但 agentic 用法的 token 账单正在让 4.7M 用户望而却步——**agentic 价值 vs agentic 成本**的张力在 6/3 全面爆发。

来源：TechTimes | TechCrunch | MLQ.ai | WindowsForum | 2026-05-30 → 06-01

### 🟢 OpenAI 模型 6/1-2 GA 登 AWS Bedrock，价格与 OpenAI 一方完全对等

OpenAI 4/28 在 AWS Bedrock 限免预览后，**6/1-2 正式 GA**：GPT-5.5 + GPT-5.4 + Codex 全部上线。

**关键事实**：
- **价格 = OpenAI 一方价格**（无 AWS 额外收费）
- **使用量计入 AWS 已有承诺消耗**（EDP 协议）
- GPT-5.5：US East (Ohio)
- GPT-5.4：US East (Ohio) + US West (Oregon)
- Codex：CLI、桌面应用、VS Code/JetBrains/Xcode IDE 集成
- 走 Bedrock 下一代推理引擎的 **Responses API**
- 完整 AWS 安全控制：IAM/PrivateLink/CloudTrail/加密
- 所有 Codex 推理都经过 Bedrock 路由

**叙事意义**：大型 AWS 客户（年承诺消耗数百万美元）现在可以把 OpenAI API 消费**吸进 AWS 承诺消耗**——而不必单独支付。这意味着 **OpenAI 借 AWS 横扫云分发**的实质兑现，**Azure 的"独家"优势正式结束**。下一步（已确认）：Amazon Bedrock Managed Agents（OpenAI 驱动）+ Daybreak on Bedrock。

**配合 Build Day 2 "Windows = Agent OS"**：OpenAI 把模型卖给 Microsoft 的最大对手，**云分发与操作系统层开始分叉**——Microsoft 用 Windows 操作系统独占 Agent Runtime，OpenAI 用 AWS 拿到云分发垄断。

来源：OpenAI Blog | AIToolsRecap | 2026-06-01 → 06-02

### 🔵 xAI Grok Build beta 加入编码 agent 三方争霸

xAI 发布 **Grok Build**——终端 TUI 编码 agent，基于 Grok 4.3。**对 SuperGrok ($30/月) 和 X Premium+ 用户开放**。

**与现有产品对比**：
| 维度 | Grok Build | Claude Code | OpenAI Codex |
|------|------------|-------------|--------------|
| 状态 | Beta | GA | GA |
| 形态 | 终端 TUI | 终端原生 | 桌面 + 云 |
| 桌面计算 | 无 | 有 | 有 |
| MCP 集成 | 较小目录 | 3,000+ servers | 强 |
| 上下文窗口 | 256K | 1M (beta) | 较长 |
| 独有 | **X/Twitter 实时数据原生** | 通用 | 通用 |

**关键差异化**：Grok Build 不只是"偶尔返回 X 帖子的 web 搜索"，而是**对 X 平台全数据流的原生访问**——对那些社区信号实时的编码任务特别有用。**设计哲学**：更像 Claude Code（终端原生），不像 Codex（桌面应用 + 云优先）。

**xAI 算力限制**：xAI 据说**只用了 Colossus 算力的 11% 给 Grok 模型**——意味着随算力释放，Grok 模型仍有大幅提升空间。xAI 这次明确瞄准"开发者计划、审查、修改代码"的能力，对标 Claude Code/Codex/Gemini Code Assist Enterprise。

**与 6/3 morning / afternoon / evening 不重复的角度**：编码 agent 赛道从 Claude Code 一家独大，到 6/2 Composer 2.5（xAI 编码模型），到 6/3 Grok Build beta（xAI 编码 agent 工具）——**xAI 在 6 月「3 日连发」+ 6/3 加入编码 agent 三方争霸**。

来源：xAI News | AIToolsRecap | Reddit r/accelerate | CIO Dive | 2026-06-03

---

## 💼 资本与商业

### 💰 Anthropic S-1 引发市场两极反应：Wedbush "打开闸门" vs WIRED "史上最大 IPO 候选"

6/1 Anthropic 6/1 官方博客（unsiged, 两段）确认**已向 SEC 秘密递交 draft S-1**——5/28 刚完成 **$65B Series H**、估值 **$965B**（5/28 时已超过 OpenAI 同期 $852B 估值）。

**市场反应**：

- **Wedbush 分析师 Dan Ives**："Anthropic 的动作代表它将抢先 OpenAI 公开上市……**为相对低迷几年的 IPO 市场打开了闸门**，三大独角兽今年集中上市。"
- **WIRED 标题**：《Anthropic Confidentially Files for What Could Be the **Largest IPO Ever**》
- **TechCrunch / Paul Young LinkedIn / Fox Business / MLex / NYT / Fox Business / abc7news** 等多源同步确认
- **MLex 关键引用**：Anthropic 强调"发行的股份数量和价格尚未确定"

**赛道排位**（IPO 节奏）：
1. **SpaceX** — 6/4 启动路演，目标筹集 $75B、估值 **$1.75T**（NYT 5/20 报道）
2. **Anthropic** — 6/1 秘密 S-1
3. **OpenAI** — Bloomberg 5 月报道"未来几周内"递交，目标**秋季公开亮相**

**Economist 6/1 头条核心问题**《Can the stockmarket swallow Anthropic, SpaceX and OpenAI?》：三大独角兽同期上市将造成公开市场**流动性挤压**——三家合计 IPO 规模可能超过 $200B，是历史最大单年 AI IPO 规模。

来源：WIRED | TechCrunch | abc7news | LinkedIn (Paul Young) | 2026-06-01 → 06-02

### 💰 Stargate Michigan $56B 动工："the Barn" 700 英亩农地变身密歇根史上最大单笔投资

6/1（周一）Saline Township——10 英里西南 Ann Arbor——700 英亩农田，**Oracle + Related Digital + Blackstone + Walbridge + OpenAI** 联合为 **"the Barn" Stargate 数据中心**举行奠基仪式。**Altman + Whitmer + Jeff Blau (Related Co.) + 700+ 密歇根建筑工人**到场。

**关键事实**：
- **投资规模**：$56B（bridgemi.com / 相关方公告，部分源 $16B 为初期"the Barn"单体；密歇根州长原文是"$56 billion"）
- **密歇根州史上最大单笔投资**
- **美国当前最大基础设施投资之一**
- 5 方公司（OpenAI/Oracle/Related Digital/Blackstone/Walbridge）联合 **$10M 资助 Saline Recreation Center 扩建**
- 联合 NABTU（北美建筑工会）培训下一代技术建筑工人
- 选址合理性：密歇根州工业基础、700+ 工人已就位、Whitmer 州长政策支持
- **OpenAI Stargate 计划**——长期构建让智能"对全球个人和企业更易获取、更有用、更可靠"的基础设施
- **Oracle 公告**（2026-06-01）确认这是"密歇根州历史上单一最大经济投资"

**政治信号**：Altman 罕见在公开活动承认"**AI 行业过去在就业问题上传递的信息已经失败**"——这是 OpenAI 首次正式承认"AI 替代人"的叙事需要修正。与"NABTU 联合培训"的工人承诺形成战略对冲。

**Stargate 整体**（参考 Stargate 2025/1 公告）：OpenAI 软银 Oracle 联合的 $500B AI 基础设施计划，跨越 4 年。

来源：bridgemi.com | OpenAI Blog | Oracle Newsroom | WXYZ | 2026-06-01

### 💰 算力 + 资本双轮转：Anthropic × Google × Broadcom 锁定多 GW 下代算力

Anthropic 6/2-3（CFO Krishna Rao 表态）扩大与 **Google Cloud + Broadcom** 合作，**锁定多 GW（gigawatt 级）下代算力**——新算力大部分落地美国本土，延续去年 11 月"$50B 投资美国 AI 基础设施"承诺。

**关键定位**：**Claude 是目前唯一同时在 AWS Bedrock / Google Cloud Vertex AI / Microsoft Azure Foundry 三家头部云上线的前沿模型**——多云 + 多元供应链对冲算力风险。

**算力结构**：
- Google：延续去年 10 月扩大的 TPU 容量合作
- Broadcom：定制 AI 加速器（与 Google TPU 互补的非 NV 路径）
- SpaceX/Anthropic/SpaceX 算力合作（5 月公告）：xAI Colossus 1 超算 + SpaceX Terafab 芯片工厂（总投资或达 $1190B）

**与 morning/afternoon 不重复的角度**：morning 写 Anthropic S-1，afternoon 写 Anthropic 多 GW（覆盖），本晚报补**与 6/3 OpenAI AWS GA 同步的"对位算力布局"**——OpenAI 走 AWS 单一 + Microsoft 投资，Anthropic 走三云 + Broadcom 定制，**算力供应链多极化**已经定型。

来源：Anthropic 官方 | 2026-06-02/03

---

## 🛡️ 安全警示

### ⚠️ GitHub Copilot token 计量 = 企业 IT 成本预测的"黑天鹅"

详细见"大厂动态"——补充一个企业 IT 视角：

- 之前 Copilot 月费固定 → **企业 IT 可以预测预算**
- 6/1 改 token 计量后 → **单个 agentic 任务消耗 $30-$40** → 单个开发人员一个月可能消耗 $100-$1000
- 4.7M 付费用户**没有任何可预测的预算模型**
- 企业 IT 必须在 6/1-7/1 内重新设计 Copilot 预算、权限、agent 使用策略

**这是 Microsoft 在 Build Day2 加 agentic 能力**的**同步副作用**——**agentic 价值 vs agentic 成本**的张力在 6/3 全面爆发。**对 IT/财务影响**：今年 Q2-Q3 各公司 CFOs 会看到 Copilot 账单"非预期跳涨"，需要给开发团队"agentic 配额"或"agentic 审批流程"。

来源：TechTimes | WindowsForum | MLQ.ai | 2026-06-01

### ⚠️ Build Day 2 推 agent 越多，攻击面越大

Build 2026 第二天发布的所有 agentic 能力（Copilot debugging agent / profiler agent / test generation agent / Surface RTX Spark Dev Box / Web IQ / Scout / Microsoft 365 E7 "Frontier Suite"）都**默认是 agent 原生**，意味着：

- **攻击面**：agent 能自主调用工具、写文件、读 PR、改数据库——任何 prompt injection 都能直接变成代码执行
- **信任边界**：传统的"开发者是用户，IDE 是工具"模型崩塌——agent 是"对等程序员"
- **Day 2 演示案例**："Debugging Agent 在断点命中时进行根因分析 + 找出 async initialization 竞态条件"——这意味着 agent 能**自主修改生产代码路径**

**企业 IT 必须在 6 月内对 agent 能力做安全评估**。**LayerX 6/1 报告**（延续早报警示）：AI 浏览器扩展漏洞概率高 60%、访问 Cookie 高 3 倍、执行远程脚本高 2.5 倍、增加权限高 6 倍——**与 Build Day 2 agent 化趋势共振，6 月是企业 AI 攻击面急剧扩张月**。

来源：LayerX | Build 2026 官方 | 2026-06-01 → 06-03

---

## 📊 论文与研究

### 📊 arXiv cs.AI 6/1-6/3 热门：多 Agent 训练 + 推理模型 + 视觉 Agent

- **CASP** (2605.32425)：用 token 级 credit assignment 改进多 Agent 训练的稀疏奖励
- **Reasoning Agent Survey** (2605.32518)：推理 Agent 系统综述
- **VLM Safety Fine-Tuning** (2605.32601)：视觉语言模型安全微调
- **Web Agent Self-Improvement** (2605.32744)：自改进 Web Agent 扩展
- **HuggingFace Multi-Modal RAG** (2605.32812)：多模态 RAG 改进
- **Adaptive Inference Scaling** (2605.32920)：自适应推理缩放

**重点**：多 Agent 训练 + 推理 Agent + 视觉 Agent 是 6/3 arXiv 三大热点，**与 Build Day 2 agent 化趋势形成学术界-工业界共振**。

来源：arXiv cs.AI recent | 2026-06-01 → 06-03

---

## ⭐ GitHub Trending · AI 爆款

| 项目 | Stars | 类别 | 趋势 |
|------|-------|------|------|
| LangChain | 122,850+ | Agent Framework | 稳居第一 |
| **OpenHands (All-Hands-AI)** | 60,548 | Coding Agents | +196/天 |
| MetaGPT | 59,634 | Multi-Agent | +72/天 |
| opencode (anomalyco) | 55,230 | Coding Agents | +1,049/天 🔥 |
| **Codex (openai)** | 44,547 | Coding Agents | **+600/天 🔥**（AWS GA 推） |
| Cline | 48,986 | Coding Agents | +108/天 |
| AutoGen (microsoft) | 48,226 | Multi-Agent | +82/天 |
| **MAI-Thinking-1** (microsoft) | n/a | Reasoning Model | 6/3 新发布 |
| CrewAI | 37,599 | Agent Framework | +151/天 |
| Cursor | 30,877 | IDE-Native Agent | 稳 |

**6/3 趋势变化**：
- **Codex (openai)** 单日 +600——受 AWS Bedrock GA 推动
- **opencode (anomalyco)** 持续 +1,049/天——延续昨日趋势
- **MAI-Thinking-1** 6/3 首发（无 GitHub repo，但成为开发者社区讨论热点）

来源：OSSInsight Trending AI | GitHub Trending | 2026-06-03

---

## 🇨🇳 中文圈（6/3 白天）

### 🟢 Build 2026 中文深度复盘：Windows = 智能体"一等公民"+ Majorana 2 量子跃迁

钛媒体 6/3 凌晨发出**Build 2026 完整中文复盘**：

- **战略转向**："Agent 优先"全面落地——GitHub Copilot 从"结对编程伙伴"升级为"对等程序员"
- **MAI-Thinking-1 关键解读**："35B 活跃参数 + 128K 上下文 + 零蒸馏"——苏莱曼"爬山机器"哲学首次产品化
- **MAI-Image-2.5** + **Flash 轻量版**——补齐 MAI 图像生成矩阵
- **Scout 常驻 AI 助手**（基于 OpenClaw 框架）：3000+ 微软员工内部测试，"公司本质上是雇佣了你的助理"
- **Windows 365 最大规模更新**：**Windows 365 for Agents**——"隔离运行环境 + 动态权限控制"双层安全架构；Context-Based Redirection 端到端加密、智能体间延迟 <50ms；120 家企业测试、85% 反馈安全提升 >30%
- **Majorana 2 量子跃迁**：可靠性 1000x，铅基超导 + 砷化铟复合材料；通过 DARPA 最终阶段评审；目标 2029 年

**钛媒体结语**："算力、模型、操作系统三者同时进入新的代际，智能体从'能做'到'能放心用'的跨越，可能比市场预期的来得更快。"

来源：钛媒体 tmtpost.com | 2026-06-03

### 🟢 智源大会 6/3 周末预热：Token 经济与 OPC 论坛成为新增亮点

新浪科技 5/25 报道、6/3 周末临近的智源大会**议程全面公布**：

**24 场平行论坛特色**：
- **新增「Token 经济与 OPC」论坛**——把视角延伸到智能时代的**生产关系变革**（OPC = One-Person Company）
- **新增「终端智能体与 OpenClaw」论坛**——聚焦 Agent 走向真实部署、长期运行、开放生态协同
- **AI 自进化论坛**：Meta/英伟达/清华/西湖大学共同探讨"AI 如何自我超越"
- **首次亮相「AI Native 教育」论坛**：当智能系统深度进入成长过程后，未来人应具备什么能力
- **「大模型产业 + 具身产业 CEO」论坛**：15+ 百亿估值企业掌舵人论道

**40+ AI 企业 CEO/创始人/首席科学家**齐聚北京：阿里、腾讯、智谱、阶跃星辰、MiniMax、北大、清华、人大 + 谷歌、Meta、英伟达、Stanford、Harvard、MIT——**中国大模型 + Agent 领域最具代表性力量首次集中同台**。

**叙事**：从"AI 是工具" → "AI 是新生产关系"——Token 正在从"模型调用计费单位"演化为"智能生产的基础计量单位"。

来源：新浪科技 finance.sina.cn | 2026-05-25

---

## 📌 今日要点

- **Build 2026 Day 2 完整收官**：MAI-Thinking-1（35B 推理）+ Aion 1.0（端侧）+ Majorana 2（量子）+ Discovery GA（科研）+ Mayo Clinic（医疗）+ Surface RTX Spark Dev Box（1 PFLOPS）
- **OpenAI 模型 GA 登 AWS Bedrock**：GPT-5.5/5.4/Codex 全部 GA，价格与 OpenAI 一方对等，使用量计入 AWS 承诺消耗
- **Stargate Michigan $56B 动工**：Altman + Whitmer + Oracle + Related + Blackstone + Walbridge 联合奠基，700 英亩农地，密歇根史上最大单笔投资
- **Anthropic S-1 引发市场两极反应**：Wedbush "打开闸门" vs WIRED "史上最大 IPO 候选"
- **GitHub Copilot 6/1 token 计量引爆**：4.7M 付费用户账单 25x-50x 反弹，社区帖 400+ 评论 900 反对票
- **xAI Grok Build beta 加入编码 agent 三方争霸**：终端 TUI 基于 Grok 4.3，X/Twitter 实时数据原生访问
- **Anthropic × Google × Broadcom 多 GW 算力**：Claude 是唯一同时三云上线前沿模型
- **算力供应链多极化定型**：OpenAI 单一云 + MS 投资，Anthropic 三云 + Broadcom 定制
- **中文圈**：钛媒体 Build 2026 完整复盘 + 智源大会"Token 经济与 OPC"论坛新增
- **GitHub Trending**：Codex (openai) 单日 +600 受益 AWS GA，opencode 持续 +1,049/天，MAI-Thinking-1 6/3 首发

---

## 🔮 今晚 21:00 OPC 晚间情报预告

- **Build 2026 余波**：MAI-Thinking-1 开发者社区实测、Microsoft Discovery 早期用户体验、Scout 上线时间表
- **Anthropic S-1 后续**：OpenAI 准备递交的传闻、SpaceX 6/4 路演细节
- **xAI Grok Build 与 Claude Code 真实对比**：编码能力 + 价格 + 集成深度的横向测试
- **GitHub Copilot 6/1 反弹的余波**：GitHub 6/2-3 是否有官方应对、企业 IT 政策调整案例
- **Polymarket 实时概率**：Anthropic 6 月底顶级模型、AI 代理 24/7 落地、CAISI pre-deployment 审查

---

数据来源：Microsoft Build 官方 · The Verge · Build Fast With AI · AIToolsRecap · 钛媒体 · 新浪科技 · WIRED · TechCrunch · abc7news · LinkedIn (Paul Young) · Oracle Newsroom · OpenAI Blog · bridgemi.com · WXYZ · xAI News · CIO Dive · Reddit r/accelerate · Anthropic 官方 · GitHub Blog · TechTimes · TechCrunch · MLQ.ai · WindowsForum · LayerX · arXiv cs.AI · OSSInsight · GitHub Trending · Wedbush Securities · Economist

OPC Daily · 2026-06-03 晚报 · AI 陪你看完今日简报
