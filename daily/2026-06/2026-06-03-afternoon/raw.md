# OPC 午间情报 2026-06-03

> 📅 2026-06-03 | 🕛 12:00 | 类型：afternoon
> 焦点：腾讯云 DeepSeek-V4 降 97.5% + Marvell 涨 32% 黄仁勋点名 + Anthropic×Google×Broadcom 多 GW 算力 + 宇树科创板过会 + Microsoft Build Day2 Web IQ

> ⚠️ **主动差异化**：今早 morning 重点是 Anthropic $965B + 三大独角兽 IPO + 美对华芯片出口堵漏 + 具身智能国标；昨日 18:00 evening 重点是 Build 2026 开幕 + MAI 三连发 + RTX Spark 量产；昨日 12:00 afternoon 也已写 Build 2026 + Microsoft 365 Copilot Wave 3。本午报聚焦 **当日（6/3）生效与新出** 的四线信号：①**国内价格战（云厂商/Agent 部署成本）** ②**芯片/算力（Marvell 估值重构 + Anthropic 多 GW 算力签约）** ③**机器人/具身（宇树 IPO 过会）** ④**Build Day2 智能体协议层**——不重复 morning 的资本与国标角度，也不重复 Build 第一天的硬件/MAI 角度。

---

## 🔥 今日核心警报

**国内云厂商把 Agent 时代的"电费"打到 0.025 厘/千 token；黄仁勋一句话把 Marvell 送上涨 32% 并冠名"下一家万亿公司"；Anthropic 联手 Google+Broadcom 锁定多 GW 下代算力；宇树科创板 70 天过会、募资 42 亿砸向"机器人大脑"——AI 行业在 6/3 中午同时打出 4 张主题不同的明牌：成本（云）/ 芯片（NV 链）/ 算力（Anthropic 多云）/ 具身（机器人 IPO）。**

过去 18 小时，**国内云**端打出"以价换量"清场信号——腾讯云 6/2 18:42 官宣：6/3 00:00 起，**DeepSeek-V4-Pro 推理输入/输出价格降 75%、缓存命中价格直降 97.5%**（从 0.001 元/千 tokens 降至 0.000025 元/千 tokens），V4-Flash 缓存命中也降 90%。这次调价不是"打折促销"而是"平台级普惠"：DeepSeek 5/22 已先一步把 V4-Pro 永久降到 1/4 原价，腾讯云再把缓存命中打到原 1/40——直接利好所有跑 RAG/Agent 的企业（缓存命中是 Agent 多轮对话+RAG 文档读的核心成本项）。**国际芯片**侧黄仁勋 6/2 在 Computex 与 Marvell CEO Matt Murphy 同台 10 分钟，公开宣称 **Marvell 将是"the next trillion-dollar company"**（下一家万亿美元公司），理由：算力被分解到整个数据中心，**连接比计算更稀缺**。MRVL 当日盘前涨 24%、盘中收涨 32.52%（市值从 ~$192B 起步向万亿目标冲击），NV 此前已于 3/31 投资 Marvell $2B 锁定 NVLink Fusion 生态位。**算力**侧 Anthropic 6/2-3 宣布**与 Google Cloud、Broadcom 扩大合作锁定多 GW 下代算力**——延续去年 11 月"$50B 投资美国 AI 基础设施"承诺，多数新算力落地美国本土，Claude 现已是唯一同时在 AWS Bedrock / Google Cloud Vertex AI / Microsoft Azure Foundry 三云上线的前沿模型。**具身**侧 6/1 上交所审议通过宇树科技科创板 IPO 申请，从 3/20 受理到过会仅 70 余天，公司计划募资 42.02 亿元、其中 20.2 亿（48%）投向"机器人大脑"研发，2025 年营收 17.08 亿、净利 2.88 亿、毛利率 60.27%——**全球少数规模化盈利的人形机器人公司**。

---

## 💰 国内｜价格战进入"Agent 时代"

### 🟢 腾讯云 DeepSeek-V4 系列最高降 97.5%，6/3 00:00 生效

腾讯云 6/2 18:42 官宣：智能体开发平台对 DeepSeek-V4-Pro/V4-Flash 调价：

| 模型 | 项目 | 调价前 | 调价后 | 降幅 |
|------|------|--------|--------|------|
| DeepSeek-V4-Pro | 推理输入 | 0.012 元/千 tokens | 0.003 元/千 tokens | **-75%** |
| DeepSeek-V4-Pro | 推理输出 | 0.024 元/千 tokens | 0.006 元/千 tokens | **-75%** |
| DeepSeek-V4-Pro | 缓存命中 | 0.001 元/千 tokens | 0.000025 元/千 tokens | **-97.5%** |
| DeepSeek-V4-Flash | 缓存命中 | 0.0002 元/千 tokens | 0.00002 元/千 tokens | **-90%** |

**叙事变化**：从"按分计价"打到"按厘计价"再打到"按 0.025 厘计价"。**关键看点在缓存命中降 97.5%**——RAG 检索、多轮对话、长上下文文档读，都是缓存命中场景。一个企业知识助手每天反复读取百万级 token 的内部文档，原来 0.001 元/千 token × 100 万 token = 1 元/天，调价后 0.025 元/百万 token = **0.0025 元/天**。

**为什么是"Agent 时代"**：网易/搜狐引用分析指出"AI 从'演示间'走向'业务现场'，成本账必须算得过来。缓存命中成本下降，意味着那些高频使用、长上下文、多轮对话的应用，可以用更低成本持续运行。"

**前置信号**：DeepSeek 5/22 已先一步把 V4-Pro 永久降至原定价 1/4；小米 5/27 宣布 API 永久降价最高 99%；智谱 5/22 GLM-5.1 高速版 API 跑出 400 tokens/s——5 月起国产模型就已在"按厘计价"层贴身肉搏，**6/3 腾讯云把缓存命中打到原 1/40 是把价格战从"聊天"层面推到"Agent"层面**。

来源：每日经济新闻 | 21世纪经济报道 | 新浪财经 | 17173 | 网易 | 2026-06-02

### 🟢 国产 AI 大模型 5 月热力榜：568 个模型，8 小时级持续工作成旗舰标配

大模型之家《2026 年 5 月大模型热力榜》收录 568 个大模型及其所属企业。本月最显著变化是**"智能体能力"取代"综合跑分"成为榜单权重最高的评价维度**：

- **百度文心 5.1（5/9）**：多维弹性预训练，总参数压至 5.0 的 1/3，激活参数 1/2，**预训练成本仅为业界同规模 6%**；LMArena 搜索榜 1223 分（国内第一、全球第四）；Agent 能力超 DeepSeek-V4-Pro；AIME26 数学 99.6 分
- **阿里 Qwen3.7-Max（5/20 阿里云峰会）**：三方盲测总榜国产第一，**平头哥真武 M890 芯片上从零自主工作 35 小时、1158 次工具调用**，将推理内核性能提升 10 倍；同期发布真武 M890（144GB 显存、性能 3 倍于上代）+ 磐久 AL128 超节点（128 卡互联）
- **DeepSeek V4 系列**：V4-Pro 1.6T 参数/49B 激活，V4-Flash 284B 参数/13B 激活，**1M 上下文 + MIT 全开源**；V4-Pro 在 SWE-bench Verified 编码代理任务 80.6%，**首次超过 Claude Sonnet 4.5、接近 Opus 4.6**；5/30 发布多模态"Thinking with Visual Primitives"
- **MiniMax M3（5/31）**：**国内首个齐备前沿编程 + 1M 超长上下文 + 原生多模态的开源模型**；Mavis 多 Agent 桌面重大更新（微信/飞书接入 + 上下文隔离 + Team Engine 编排）；全球企业开发者客户半年增 5 倍达 100 万、ARR 翻番周期压至 60 天
- **阶跃星辰 Step 3.7 Flash（5/29 开源）**：196B+1.8B 总参数、激活 11B、最高 400 tokens/s、256K 上下文；Pre-IPO 轮融资 25 亿美元（创国内大模型单轮纪录），香港投资管理公司独家下注

**生态信号**：8 小时级甚至 35 小时级持续自主工作已成为旗舰模型标配；"模型开源 + 芯片适配 + API 降价"三重共振，将中国 AI 产业从"参数内卷"推向"生态协同"新竞合阶段。

来源：澎湃新闻（大模型之家）| 2026-06-02

---

## 🌍 国际｜芯片 + 算力 双线重构

### 🔵 Marvell 涨 32%，黄仁勋点名"下一家万亿公司"

6/2 台北 Computex，**英伟达 CEO 黄仁勋意外现身 Marvell CEO Matt Murphy 主题演讲**，同台约 10 分钟——Computex 一小时 keynote 中最受热议的时刻。黄仁勋原话："When you take a computing problem, and you disaggregate it into a lot of parts, and you distribute it across the entire data center, what's necessary is connectivity. That's the reason why Matt's doing so well. That's the reason why Marvell is so essential."

**股价反应**：MRVL 盘前涨 24%、盘中收涨 **32.52%**；自 3/31 NV 投资 $2B 以来累涨 185%。市值从 $192B 起步向万亿目标冲击。

**战略逻辑**：
- 算力正在从"单一 GPU 巨型节点"转向"整个数据中心协同"——计算被分解到数千个互联芯片，**连接比计算更稀缺**
- NV 3/31 投资 Marvell $2B + NVLink Fusion 生态绑定：客户可同时使用 NV 网络/CPU 与 Marvell 定制 AI 芯片
- NVLink Fusion 战略去年 Computex 首发，今年是兑现兑现

来源：CNBC | Reuters | Digitimes | 2026-06-02

### 🔵 Anthropic × Google × Broadcom：锁定多 GW 下代算力

Anthropic 6/2-3 官方公告（CFO Krishna Rao 表态）：**扩大与 Google Cloud、Broadcom 的合作，锁定多 GW（gigawatt 级）下代算力**。**新算力大部分落地美国本土**，延续去年 11 月"$50B 投资美国 AI 基础设施"承诺。

**关键定位**：**Claude 是目前唯一同时在 AWS Bedrock / Google Cloud Vertex AI / Microsoft Azure Foundry 三家头部云上线的前沿模型**——多云 + 多元供应链对冲算力风险。

**算力结构**：
- 与 Google：延续去年 10 月扩大的 TPU 容量合作
- 与 Broadcom：定制 AI 加速器（与 Google TPU 互补的非 NV 路径）
- 与 SpaceX/Anthropic/SpaceX 算力合作（5 月公告）：xAI Colossus 1 超算 + SpaceX Terafab 芯片工厂（总投资或达 $1190B）

来源：Anthropic 官方 | 2026-06-02/03

### 🔵 Microsoft Build 2026 Day2：智能体协议层

Build 第二天（6/3）重点：**Work IQ / Web IQ / Foundry IQ / Fabric IQ 四 IQ 矩阵 + Rayfin 后端框架**：

- **Work IQ**（6/2 公告）：捕获工作方式
- **Fabric IQ**：建模业务运行
- **Foundry IQ**：让 agent 发现并复用知识
- **Web IQ**（6/3 新发）：**给 agent 加实时全球 web 上下文**——是 Bing 之于 Copilot 的"代理搜索"版本
- **Rayfin**：从 prompt 到生产后端的转换框架
- **Microsoft Databases for AI**：原生适配 agent 工作流

**叙事**：Build 2026 核心叙事从"agent 模型"升到"**agent 平台 + 智能体协议层**"——Work/Fabric/Foundry/Web 四个 IQ 各管一层认知，agent 真正嵌入企业 IT 骨架。

来源：Azure Blog | Microsoft Build Live | 2026-06-02/03

---

## 🤖 具身智能｜宇树科创板 70 天过会

### 🟡 宇树科技 6/1 上交所过会：42 亿募资 48% 砸"机器人大脑"

上交所上市审核委员会 6/1 审议通过宇树科技科创板 IPO 申请——**从 3/20 获受理到过会仅 70 余天**。公司计划募资 42.02 亿元：
- **20.2 亿（48%）** → 智能机器人模型研发（"机器人大脑"）
- 剩余 → 机器人本体研发 + 智能制造基地

**财务**：2025 年营收 17.08 亿、净利 2.88 亿、毛利率 60.27%——**全球少数实现规模化盈利的机器人公司**。

**技术路径**：坚持"本体 + 小脑 + 大脑"全栈自研一体化，与早报中提到的工信部 2/28《人形机器人与具身智能标准体系（2026版）》形成企业 + 政策双向印证——行业进入"从 1 走向 10"的规模化窗口期。

来源：36氪 | 量子位 | 2026-06-02

---

## 🐙 社区速递

- **GitHub Trending AI 仓库 TOP**（5 月统计）：AnomalyCo OpenCode 55k+ stars 涨 1049（编码 agent）、OpenAI Codex 44.5k 涨 600、All-Hands-AI OpenHands 60.5k、MetaGPT 59.6k——**编码 agent 占据增长榜前 4**
- **Anthropic + Google + Broadcom 三方合作**官宣后，Anthropic 6/2 估值/算力双线优势再次强化（叠加 morning 已写的 $965B + 6/1 S-1）
- **港股科技**：6/2 早盘恒生科技指数涨 3%，美团/腾讯齐拉——腾讯云降价利好叠加微信 AI 助手预期，腾讯控股当日涨超 10%

---

## 📄 论文速递（cs.AI / cs.MA，6/2 新发）

| 论文 | 机构/作者 | 核心贡献 |
|------|-----------|----------|
| **Adaptive Strategy Selection in MineRL** | Zöllner 等 | 6 种 agent 策略对比——简单贪心爬山 ≈ 最佳 tree-search，**自适应切换策略 agent 跑赢所有 6 个 baseline** |
| **PROWL: Adversarial World-Model Training** | Kondapally 等 | 鲁棒对抗世界模型训练；揭示 reward-hacking 与行为正则化的平衡 |
| **Multiagent Systems 6 月新发** | McGill/Mila/Ubisoft | 多人多 agent 协作 + 实时策略学习 |
| **arXiv cs.MA 6 月专题** | 多机构 | 工业 agent 协作、agent 监控、agent 协议层相关 |

---

## 💡 一句话观点

**6/3 中午的 AI 行业有 4 张"明牌"在同时打：① 国内云把 Agent 时代的"电费"打到 0.025 厘/千 token（成本曲线的指数级下沉）② Marvell 涨 32% 黄仁勋点名万亿（连接比计算更稀缺）③ Anthropic 锁定多 GW 算力（前沿模型的多云供应链对冲）④ 宇树 70 天过会（具身智能的 IPO 商业闭环）。这 4 张牌的方向完全不一样，但合在一起讲的是同一件事：AI 产业正从"模型竞速"全面进入"基础设施 + 落地 + 商业化"的下半场——上层看谁的应用跑得动、底层看谁的算力/连接/制造撑得住。**

---

## 🔗 信源索引

- [腾讯云 DeepSeek-V4 降价 97.5% - 每日经济新闻](https://www.nbd.com.cn/articles/2026-06-02/4415237.html)
- [腾讯云降价公告解读 - 21世纪经济报道](https://www.21jingji.com/article/20260602/herald/26bc97111c932b7740423b2e8a4b4c43.html)
- [Marvell stock soars 32% - CNBC](https://www.cnbc.com/2026/06/02/jensen-huang-nvidia-marvell-technology-trillion-dollar-ai.html)
- [Jensen Huang joins Marvell CEO at Computex - Digitimes](https://www.digitimes.com/news/a20260602VL210/nvidia-ceo-marvell-jensen-huang-computex.html)
- [Anthropic expands partnership with Google and Broadcom - Anthropic](https://www.anthropic.com/news/google-broadcom-partnership-compute)
- [Microsoft Build 2026: Building agentic apps with Microsoft Fabric - Azure](https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases)
- [大模型之家 2026 年 5 月热力榜 - 澎湃新闻](https://www.thepaper.cn/newsDetail_forward_33291314)
- [芝麻AI速递 6月3日财经热点 - 新浪财经](https://finance.sina.com.cn/headline/2026-06-03/doc-iniaamia4391357.shtml)
- [英伟达 GTC Taipei 2026 - 稀土掘金](https://juejin.cn/post/7646348958055497778)
- [36氪快讯](https://36kr.com/newsflashes)
