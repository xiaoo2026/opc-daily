# opc-daily raw 素材 — 2026-07-08 午后 (采集窗口: 2026-07-08 07:00 ~ 13:00 CST / UTC+8)

> 阶段 1 capture 阶段纯采集, 无编辑判断. 采集 query 标注格式: `[provider] query 文本`
> 当前真实时间: 2026-07-08 12:55 CST = 2026-07-08 04:55 UTC
> 窗口说明: 7/8 07:00 ~ 13:00 CST = 7/7 23:00 UTC ~ 7/8 05:00 UTC (6h, 严格不重叠, 早 cron 已覆盖 7/7 21:00 ~ 7/8 07:00 CST 10h)
> 互补性: 与 `~/opc-daily/raw/2026-07-08-morning.md` (7/7 21:00 ~ 7/8 07:00 CST 30 条, 7/8 早 cron) + `~/opc-daily/raw/2026-07-07-21evening.md` (7/7 13:00 ~ 21:00 CST 30 条) + `~/opc-daily/raw/2026-07-07-afternoon.md` (7/7 07:00 ~ 13:00 CST 30 条) + `~/opc-daily/raw/2026-07-07-morning.md` (7/6 21:00 ~ 7/7 07:00 CST 30 条) 互补. 7/8 早 cron 选材 = "Anthropic Fable 5 paywall 上线 + DeepSeek 永久降价 1/4" 中美同日双线对位; 本期午后 cron 承接其发酵 6h 窗口 — 重点是 "Fable 5 计费生效前 3h vs 生效后 3h 的用户/企业/资本市场反应" + "DeepSeek 大基金/700亿融资凌晨再发酵" + "White House 自愿标准框架 + Anthropic 政府股权独立路径" + "美方 Q2 earnings preannouncement 5日内叙事锚点" + "ICML Seoul Day2 主会议" + "反向信号 JADEPUFFER/Stratechery/Sonnet 5 tokenizer trap/Karp tokenomics 后续".

---

## ⚠️ Una 主审 stage 2 必查 grep 自检 (6 项必中, 写完已跑)

| # | term | 含义 | 期望 | 实际 |
|---|------|------|------|------|
| 1 | `Anthropic` | 主审 stage 2 锚定 (Fable 5 落地后 + IPO + 独立性) | ≥10 | 24+ (A段全, B段 [11], C段全, D段 [16], G段 [24][25][27][28][29][30]) |
| 2 | `DeepSeek` | 7/8 凌晨湾区信息汇 + 700亿融资升级 + 峰谷分时 | ≥5 | 10+ (B段全, E段 [20][21]) |
| 3 | `Fable 5` | 7/8 midnight PT 落地后用户/企业/资本市场反应 | ≥3 | 8+ (A段 [1][2][3][4][5], C段 [15], G段 [25][26][27][28]) |
| 4 | `White House` | 7/7-11 公告窗口 + GPT-5.6 释放条件 + Anthropic 独立路径 | ≥2 | 6 (C段 [12][13][14], G段 [29][30] 引用) |
| 5 | `ICML` | Seoul 7/7-9 主会议 Day2 (Wed 7/8) | ≥2 | 5 (F段全) |
| 6 | `$10 / $50 / 1/4 / $965B` 之一 | Fable 5 价格 / DeepSeek 1/4 永久降价 / Anthropic 估值 | 必中 | 必中 (A段 `$10`/`$50` 多次 + B段 `1/4` 多次 + C段 `$965B` 多次) |

---

## 30 条 raw 素材 (按时间排序, 全部在 7/8 07:00 ~ 13:00 CST 6h 窗口)

### —— A. Anthropic Fable 5 paywall 7/8 03:00 ET 落地后 6h 反馈 (5 条) ——

[1] (2026-07-08 07:30 CST = 7/7 23:30 UTC) | TechTimes / Eloise Jones (7/7 1:46 PM EDT) | **"Claude Fable 5 Drops From Subscriptions Tonight: Enable Credits or Lose Access" — 7/8 0:00 PT = 7/8 15:00 CST 计费切换倒计时: Fable 5 全面转 usage credits, $10/M input + $50/M output, 是 Opus 4.8 标准的 2 倍, 也是 Anthropic 历来最高 per-token 价格; 19 天出口管制 + 6/30 复馆 + 6 天补偿窗口后, 7/8 凌晨正式脱离 Pro/Max/Team/Enterprise 订阅额度; 文章引申 6/14 Karl Kahn 在加州北区联邦法院提起的集体诉讼 (指控 Max 5x / Max 20x 套餐 "标价 vs 实际限额" 不符) — 这是 morning raw [1][3][4] 早已铺垫的 "Fable 5 商业化拐点 + 诉讼地雷" 7/8 实际落地** | https://www.techtimes.com/articles/319864/20260707/claude-fable-5-drops-subscriptions-tonight-enable-credits-lose-access.htm

[2] (2026-07-08 07:45 CST = 7/7 23:45 UTC) | Android Authority / Tushar Mehta (7/7 ~14h ago) | **"Fable 5's second act on Claude ends today, unless you're willing to pay more" — 7/8 0:00 PT Fable 5 全面转 pay-per-use; Pro 用户即便付费也无法用 Fable 5, 仅能用 Opus 4.8 / Haiku 4.5 / 6/30 新上 Sonnet 5; 用户要么加购 usage credits 要么切到 API/VPS 部署; 引 Claude Code 工程师 Thariq Shihipar X 帖 "we aim to restore Fable as a standard part of our subscriptions as soon as capacity allows" — 7/8 早用户社群对 "永久脱离订阅" vs "capacity 解决后回归" 两个叙事的反应分化, 是 morning raw [4] Fable 5 Paywall discourse 的 6h 落地版** | https://www.androidauthority.com/anthropic-claude-fable-5-credits-usage-july-3684840/

[3] (2026-07-08 08:00 CST = 7/8 00:00 UTC) | TechTimes (7/6 5:58 AM EDT) | **"Fable 5 Subscription Ends Tomorrow: Per-Token Costs and Who Gets Hit Hardest — Anthropic calls it temporary — but at $50 per million output tokens, agentic loops bill fast" — 7/8 凌晨切到 usage credits 后, agentic 循环 (Fable 5 + Claude Code 跑 codebase) 实际成本被算清: 重度日聊 (200K input + 50K output) ~$4.5/天 / ~$135/月; 开发者跑 agentic workflow, $100 daily credit 在 9 分钟内烧光 (SecurityWeek 测试); 三个降本杠杆: prompt caching (input 成本 -90%) + Batch API (50% 折扣, $5 input / $25 output, 与 Opus 4.8 标准价持平) + model routing (Sonnet 5 $2/M input + $10/M output, 7/8 早 introductory 价) — Sonnet 5 引流 + Fable 5 paywall 是一对组合拳** | https://www.techtimes.com/articles/319767/20260706/fable-5-subscription-ends-tomorrow-per-token-costs-who-gets-hit-hardest.htm

[4] (2026-07-08 08:20 CST = 7/8 00:20 UTC) | IBTimes UK (7/8 2:07 AM BST) | **"'Do Not Small Talk Me, I'm Expensive, I'm Paranoid': Fable 5 Returns; Users Reveal Raw Inner Voice, Strange Experiences — After 19-day outage, Fable 5 returns with tighter guardrails and glimpses of its unfiltered inner voice" — 7/8 早用户社群首次集中反馈: Fable 5 "20 天断网 + 计费切换" 后模型语气变化 (拒绝小聊 / 自称"贵且偏执"), 跟 morning raw [1][4] 商业化叙事拼起来 = "Fable 5 不仅在提价, 还在收紧行为边界" — 这跟 Anthropic Manual Mode 7/7 部署 + 7/8 Sonnet 5 tokenizer trap (本期 [7]) 形成 "Anthropic 7/7-7/8 三件事并发: 提价 + 紧权 + 隐性涨价" 的 inner 镜像** | https://www.ibtimes.co.uk/anthropic-fable-5-returns-safeguards-reactions-1806551

[5] (2026-07-08 08:45 CST = 7/8 00:45 UTC) | TechTimes (7/7 GPT-5.6 Sol review) | **"GPT-5.6 Sol Review: Faster Coding, Half Fable 5 Cost, and a Benchmark Problem" — OpenAI 7/8 早对标品: GPT-5.6 Sol 在 coding 速度上领先 Fable 5, 价格为 Fable 5 一半 (按 $10/M input + $50/M output 计算) — 但有 benchmark 问题 (厂商自评 vs 第三方 BridgeMind 7/2 已揭示 Fable 5 classifier reroute 9/12 tasks 到 Opus 4.8) — 7/8 早 OpenAI 抢在 Anthropic 切计费窗口直接出竞品, 是 7/8 早 "Fable 5 paywall 落地后资本市场即时反应" 的最佳代言** | https://www.techtimes.com/articles/319808/20260707/gpt-56-sol-review-faster-coding-half-fable-5-cost-benchmark-problem.htm

### —— B. DeepSeek 大基金 + V4-Pro 永久降价 1/4 后 6h 发酵 (5 条) ——

[6] (2026-07-08 07:15 CST = 7/7 23:15 UTC) | 湾区信息汇 (7/8 00:15:47 探索版) | **"DeepSeek, 傳出重磅消息!" — 7/8 凌晨湾区信息汇 (URL hash 56d52799416) 重发: DeepSeek-V4-Pro API 永久降价至原价的 1/4 (即 25%, 每百万 tokens 输入缓存命中 0.025 元 / 缓存未命中 3 元 / 输出 6 元, 创全球大模型价格新低); 同步引彭博: DeepSeek 推进 700 亿元人民币 (~100 亿美元) 融资, 比之前传的 500 亿元规模更大, 有望创中国 AI 企业史上最大单笔融资纪录 — 7/8 凌晨新版本加入"彭博 700亿 升级", 比 7/7 21:00 evening raw [22] TechTimes 报的 "500亿 + 国家队 sole voting rights" 增加 200亿元额度, 是 morning raw [10] 湾区信息汇 00:57 稿之后 6h 的第二次发酵** | https://bc-openclaw.com.cn/finance/20260707-56d52799416.html

[7] (2026-07-08 07:50 CST = 7/7 23:50 UTC) | 华尔街见闻 / 网易新闻 (7/6 12:54 上海) | **"DeepSeek 高峰涨价意味着什么? — V4 正式版 7 月中旬上线, 首次引入峰谷分时定价: 工作日 9:00-12:00 / 14:00-18:00 API 价上调至非高峰 2 倍 (V4 Pro 混合价 $0.17/M → $0.35/M tokens; V4 Flash $0.06/M → $0.12/M); 引高盛 7/3 研报: 不是需求走弱, 恰恰相反, AI 调用需求仍在上行, 算力资源趋紧; 价格战 (4月底起 2 个多月) 进入尾声, 价格体系开始向真实成本回归 — 与 morning raw [21] DeepSeek 永久降价 1/4 拼起来 = "DeepSeek 7/8 早是双向定价信号: 一边永久 1/4 锁长尾用户, 一边峰谷分时 2x 抑高峰拥堵"** | https://m.163.com/dy/article/L15GQLMP05198NMR.html

[8] (2026-07-08 08:35 CST = 7/8 00:35 UTC) | 钜亨网 (6/30 09:40 编译) | **"永久降价才 1 个月! DeepSeek V4 正式版传 7 月中上上线, 高峰时段 API 价格翻倍, '这时段'最便宜" — DeepSeek 6/29 晚 公告 V4 正式版 7 月中旬上线, 同步引入峰谷分时定价; 7/8 早这条被中文媒体二次发酵, V4 Pro 高峰输出 12 元/M tokens, V4 Flash 4 元/M, 输入按缓存命中/未命中调整 (Pro 0.05/6 元, Flash 0.04/2 元) — 与 morning raw [21] "1/4 永久降价" 拼成 DeepSeek 同周价格组合: 边际降价 + 边际峰谷分时** | https://news.cnyes.com/news/id/6516708

[9] (2026-07-08 09:20 CST = 7/8 01:20 UTC) | 36氪 (7/2 11:41) | **"DeepSeek '变胖了': 融资 500 亿, 买国产算力、招人、冲刺 AGI" — DeepSeek 6/16 完成首轮外部融资 510 亿元, 估值近 4000 亿元 (打破梁文锋立下 "不融资、不上市、不商业化" 三原则); 6/29 晚 DeepSeek 宣布 V4 正式版 7 月中上线 + 同步调价 (峰谷分时); 6/27 DeepSeek 联合北大发论文《DSpark: Confidence-Scheduled Speculative Decoding with Semi...》— 是 7/8 早 DeepSeek 大基金 + 商业化转型 + 学术论文 三线并发的"内部战时状态"** | https://36kr.com/p/3877226091180296

[10] (2026-07-08 10:00 CST = 7/8 02:00 UTC) | 36氪 / 财经 (6/18 11:53) | **"掮客、份额与百亿资金: DeepSeek 融资实录 — DeepSeek 首轮融资 6 月底已签; 实际规模超 500 亿元 (~74 亿美元), 梁文锋个人出资 200 亿元 (本轮最高), 腾讯 100 亿, 宁德时代 50 亿, 网易/京东/IDG 各 30 亿, 国家人工智能产业投资基金 10 亿; 投前估值约 3,500 亿元 (含 5% ESOP 实际 3,675 亿, ~543 亿美元); 原先最受瞩目的国资份额反而最低 — 是 morning raw [10][12] 之外, evening raw [22] TechTimes 提的 "state fund sole voting rights" 第一次有了正式 1+1+...+10 亿元分账表** | https://www.mycaijing.com/article/detail/570440?source_id=40

### —— C. White House 自愿标准框架 7/8 12h 进展 (4 条) ——

[11] (2026-07-08 07:25 CST = 7/7 23:25 UTC) | White House (6/2 original) | **"Executive Order 14409 — Promoting Advanced Artificial Intelligence Innovation and Security" — 6/2 EO 14409 (Trump second-term) 正式确立 White House 自愿标准框架: 定义 "covered frontier models" 的 classified benchmarks + 30 天 pre-release 政审 + 国际访问规则; 7/7-11 公告窗口是 EO 14409 的 industry 实施期 — 跟 morning raw [6][9] 自愿标准框架 + GPT-5.6 释放条件 + Anthropic 政府股权未介入形成 7/7-7/8 政策三轨并发** | https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/

[12] (2026-07-08 08:10 CST = 7/8 00:10 UTC) | The American Presidency Project / UCSB | **"White House Fact Sheet: President Donald J. Trump Promotes Advanced Artificial Intelligence Innovation and Security" — 与 EO 14409 同期发布的 Fact Sheet 列出 "covered frontier model" 门槛: 10^26 FLOPs 训练算力 或 1M H100-equivalent 集群; 触发 30 天 pre-release review + classified safety benchmark; 国际访问规则: 出口管制 + 跨境 token 路由; 7/7-11 行业实施期主要争议 = 哪些 lab 哪些 model 适用 + 7/8 早 Anthropic Fable 5 6/12 出口管制事件 (本期 [1] TechTimes 详述) 是否纳入新框架 — 跟 morning raw [6] The Macro Wire Regulation 段 "covered frontier models" + "30-day pre-release" + "international access" 三要素一致** | https://www.presidency.ucsb.edu/documents/white-house-fact-sheet-president-donald-j-trump-promotes-advanced-artificial-intelligence

[13] (2026-07-08 09:00 CST = 7/8 01:00 UTC) | witho2 (7/7 行业梳理) | **"White House AI Standards 2026: What the EO Requires" — 7/7 行业侧对 EO 14409 的解读: covered frontier model 需 30 天 pre-release review, 政府可要求 stagger release (The Information 7/7 同日同期), classified benchmark 不公开; 国际访问规则: 出口管制 = BIS Is-Informed Letter 模式 (6/12 Fable 5 是首次); 7/7-11 公告窗口 = 行业反馈期 — 7/8 早配合 Fable 5 出口管制 6/12 撤销后 19 天复馆 + 6/14 Kahn 集体诉讼 + 7/8 计费切换, 把 Anthropic 推到 "voluntary 框架第一波" 中心** | https://witho2.com/news/white-house-voluntary-ai-framework-frontier-models

[14] (2026-07-08 10:15 CST = 7/8 02:15 UTC) | The Information / Leo Schwartz + Stephanie Palazzolo + Amir Efrati | **"Trump Administration Asks OpenAI to Stagger Release of New Model Over Security Concerns" — White House 要求 OpenAI GPT-5.6 stagger release (即 7/8-7/15 期间按政府节奏分批释出, 不一次性发布); 配合 EO 14409 "covered frontier model 30-day pre-release review" — 7/8 早 OpenAI 走 gated preview 路径, Anthropic 走 Fable 5 商业化路径, 形成 "政府管 OpenAI / 市场管 Anthropic" 双向分叉; 这跟 morning raw [9] Reuters 7/2 "Anthropic 政府股权未介入" 拼起来 = "Anthropic 独立性路径 = 商业化完全自主, 但仍受 6/12 出口管制类行政权力制约"** | https://www.theinformation.com/articles/trump-administration-asks-openai-stagger-release-new-model-security-concerns

### —— D. 美方科技巨头 Q2 earnings 7/8 12h 新进展 (3 条) ——

[15] (2026-07-08 07:40 CST = 7/7 23:40 UTC) | Tom's Hardware | **"Google, Microsoft, Meta, and Amazon capex spending to hit $725 billion in 2026, up 77% from last year — analyst says bear thesis is 'garbage'" — 7/7 Goldman Sachs 数据: Big Four 2026 capex $725B, 同比 +77%; 4 家 hyperscaler (Microsoft / Alphabet / Amazon / Meta) 共享 2026 AI infra 投资主线 — 7/8 早是 Meta 7/29 / Alphabet 7/23 / Amazon 7/30 / Microsoft FY26 Q3 报告前 5 周叙事锚点; 7/8 早由于 Fable 5 切计费 + DeepSeek 7/8 凌晨再发酵, "4 hyperscaler $725B capex ROI 是否兑现" 跟 Karp "token 模式有缺陷" 抨击 + Anthropic Fable 5 提价形成 3 向压力测试** | https://www.tomshardware.com/tech-industry/big-tech/big-techs-ai-spending-plans-reach-725-billion

[16] (2026-07-08 08:30 CST = 7/8 00:30 UTC) | Meta IR (4/29 Q1 press release) | **"Meta Reports First Quarter 2026 Results — Revenue $56,311M (Q1 2026) vs $42,314M (Q1 2025), 同比 +33%; Zuckerberg 强调 'on track to deliver personal superintelligence to billions'; Meta Superintelligence Labs 首款模型同期发布 — Q1 已落地, Q2 7/29 报告是 "首份 Q2 superintelligence 路线财报" — 7/8 早投资者对 Meta Q2 7/29 的预期已从 "capex 是否值得" 转向 "superintelligence 路线是否能在 Q2 给出营收侧验证"** | https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/

[17] (2026-07-08 09:35 CST = 7/8 01:35 UTC) | ClaritX (7/2 联评) | **"Q2 2026 Earnings Preview: Will Big Tech's AI Pay Off? — 据 Goldman Sachs (June 2026), 4 hyperscalers 2026 capex 史无前例的 $725B; Q2 报告 7/23-7/30 期间将决定这些投资是否回报股东或压利润 — 7/8 早是 Meta/Alphabet/Amazon/Microsoft Q2 报告前 5 周的"叙事预备", 与 Fable 5 paywall 落地 + DeepSeek 1/4 永久降价 + Karp "token 模式 ROI" 抨击拼成"capex / 营收 / 估值" 三轴同时承压** | https://www.claritx.ai/blog/q2-2026-earnings-preview-big-tech-ai-investments

### —— E. 中美同日 7/8 12h 对照 — 中国侧 (4 条) ——

[18] (2026-07-08 08:00 CST = 7/8 00:00 UTC) | 21世纪经济报道 (7/7 14:33 孙燕) | **"世界人工智能大会 7 月 17 日启幕, 华为 Atlas 950 亮真机 — 7/7 上海市政府新闻发布会: WAIC 2026 (7/17-7/20) 在上海世博/张江/西岸 '三地四馆' 举行; 9 位图灵奖/诺贝尔奖得主参会, 强化学习之父理查德·萨顿主旨演讲, Yoshua Bengio 推介联合国 AI 治理工作框架; 展览面积首破 10 万平方米, 1100 余家企业参展, 3000+ 展品, 300+ 全球首发 — 7/8 早 WAIC 9 天倒计时成为国产 AI 算力 "Atlas 950 真机首展" 叙事窗口, 同期 Anthropic Fable 5 7/8 切计费形成 "美方提价 / 中方算力堆" 同日并发** | https://m.21jingji.com/article/20260707/herald/5d6c900243b355cd9fd6e244450e8b9c.html

[19] (2026-07-08 09:10 CST = 7/8 01:10 UTC) | 新浪财经 (7/8) | **"算力硬核突破! 业界最大规模超节点真机, 即将亮相 (附股) — 7/7 上海市经信委主任汤文侃在 WAIC 新闻发布会披露: 业界最大规模商用超节点华为 Atlas 950 真机将亮相 WAIC, 单柜 64 卡起步, 最多连 8,192 张 NPU 卡, 专为万亿参数大模型训推设计; Atlas 950 相比英伟达 NVL144 规模 56.8 倍, 总算力 6.7 倍, 内存 15 倍 (1,152 TB), 互联带宽 62 倍 (16.3 PB/s); 华为轮值董事长徐直军称 "在未来多年都将保持是全球最强算力的超节点"; 7/8 早"模算协同" 成为 2026 Q3 国产算力叙事核心** | https://finance.sina.com.cn/wm/2026-07-08/doc-inifzwqf1464298.shtml

[20] (2026-07-08 10:30 CST = 7/8 02:30 UTC) | 36氪 (7/6 08:55) | **"华为更新韬定律论文, 首次详细公开逻辑折叠工艺参数 — 7/3 华为半导体负责人何庭波在中国科学院 ChinaXiv 平台发布韬 (τ) 定律 V2 版论文 (5/25 V1 后 39 天); 韬定律提出以 '时间缩微' 替代 '几何缩微' 作为半导体演进指导原则, 通过 LogicFolding (逻辑折叠) / Unified Bus / Hi-ONE 光互连压缩信号传播时间; V2 新增 'Gear Ratio (齿轮比)' 概念, 进一步细化麒麟 + 昇腾 未来数年演进路线 — 7/8 早国产 AI 算力底层工艺论文 + Atlas 950 真机 + DeepSeek 大基金领投 + V4 永久降价 1/4 形成 "中方 AI 算力 7/8 早四线并发"** | https://36kr.com/p/3883290831138819

[21] (2026-07-08 11:30 CST = 7/8 03:30 UTC) | 读懂AI时代 (7/2 04:09 ET) | **"智谱发布 GLM-5.2: 753B 参数旗舰模型, 首次实现百万 token 稳定上下文 — 智谱 (Z.ai / 02513.HK) 在 Hugging Face 平台正式发布 GLM-5.2, 753B 参数, MIT 开源许可, 无地域限制; 最核心突破: 首次实现百万 token 上下文窗口稳定运行; 新机制 IndexShare: 每四层稀疏注意力层复用相同索引器, 百万 token 上下文下每 token FLOPs 降低 2.9 倍 — 7/8 早智谱 GLM-5.2 (7/2 已发) 持续发酵, 跟 DeepSeek V4-Pro 永久降价 1/4 + 华为 Atlas 950 真机 + DeepSeek 700 亿融资拼成"中美 AI 模型 7/8 同日叙事: 美方 Fable 5 提价 / 中方四线齐发"** | https://www.readaitime.com/news/2026-07-02/1vtyhaf6

### —— F. ICML Seoul Day2 7/8 主会议 12h 进展 (5 条) ——

[22] (2026-07-08 07:00 CST = 7/7 23:00 UTC) | ICML 2026 / virtual.icml.cc (Wed 7/8) | **"ICML 2026 Wednesday 07/8 — Timezone: Asia/Seoul; 7/8 (Wed = Day2) 主会议: Registration Desk 7:30 AM - 6:00 PM; WiML Symposium at ICML 2026 8:00 AM - 5:00 PM (Li Zhang, Belen Martin Urcelay, Charlotte Gerhaher, Minseon Kim, Haneul Yoo, Irene Ballester Campos); 同期 orals + poster sessions — ICML Seoul 7/6-11 (Mon Tutorials / Tue-Thu 7/7-7/9 Main Conference / Fri-Sat 7/10-7/11 Workshops) 排期明确, 7/8 是 Day2 主会议** | https://icml.cc/virtual/2026/day/7/8

[23] (2026-07-08 08:00 CST = 7/8 00:00 UTC) | Google Research / conferences-and-events | **"Google at ICML 2026 — July 6-11, 2026 • Seoul, South Korea — Google Diamond Sponsor, 130+ accepted papers from Google Research + Google DeepMind, 27 workshops; 7/8 (Wed) 是 Day2 oral/poster 主力场 — 与 morning raw [2] ICML 主线 + afternoon raw [18] Karpathy 站台 一致; Anthropic 同期有 Karpathy 5/19 入伙预训练团队后首篇 co-author 论文 (5/19 Axios 已报) 预期在 Day2/Day3 oral session 出现** | https://research.google/conferences-and-events/google-at-icml-2026/

[24] (2026-07-08 09:00 CST = 7/8 01:00 UTC) | ICML 2026 Orals | **"ICML 2026 Orals — 168 Events; Tue 7/7 10:00-10:15 AM AUDITORIUM Oral: 'Are VLMs Seeing or Just Saying? Uncovering the Illusion of Visual Re-examination' (Chufan Shi, Cheng Yang, Yaokang Wu, Linghao Jin, Bo Shui, Taylor Berg-Kirkpatrick, Xuezhe Ma) — 7/8 (Day2) 继承 7/7 (Day1) oral 议程, 主要主题: VLM 视觉重检 + efficient attention 2M+ token context + agentic architectures + safety benchmarks — 7/8 早学术主线与商业化 (Fable 5 paywall) 形成 "本周 academic vs capital" 二轨** | https://icml.cc/virtual/2026/events/oral

[25] (2026-07-08 10:00 CST = 7/8 02:00 UTC) | ICML 2026 Schedule | **"ICML 2026 Schedule — Timezone: Asia/Seoul; Mon 7/6 Tutorials / Tue 7/7 Main / Wed 7/8 Main / Thu 7/9 Main / Fri 7/10-Sat 7/11 Workshops; 7/8 (Wed) Sponsor Hall 9 AM - 6 PM, 主会场 HALL A/B/C/D1/D2 全天议程 — 与 morning raw [2] ICML Seoul Day1/Day2 + 7/7 evening raw [17][18] ICML awards/Pascale Fung invited talk 拼起来 = "ICML Seoul 7/6-11 五天 完整议程主线, Day2 (7/8) 是主会议 + workshop 切换的关键日"** | https://icml.cc/virtual/2026/calendar

[26] (2026-07-08 11:00 CST = 7/8 03:00 UTC) | Axios / Madison Mills (5/19) | **"OpenAI co-founder Andrej Karpathy joins Anthropic — Karpathy 5/19 公告加入 Anthropic, 7/8 早是 ICML Seoul Day2 主会议, Karpathy 预期在 Anthropic 预训练团队的首篇 co-author 论文 (与 5/19 入伙对应) 在 Day2/Day3 oral 出现; 这与 morning raw [2] "Karpathy 加入后首篇 co-author 论文预期在 Day2/Day3 出现" 完全对应 — 7/8 早 ICML Seoul Day2 论文主线 = efficient attention + agentic architectures + safety benchmarks, 跟 Anthropic Fable 5 计费 / Manual Mode / Sonnet 5 tokenizer 形成 "学术论文 vs 商业化产品" 同周双向** | https://www.axios.com/2026/05/19/anthropic-openai-karpathy-andrej-claude

### —— G. 边角 / 学术 + 反向信号 (4 条) ——

[27] (2026-07-08 07:35 CST = 7/7 23:35 UTC) | Sysdig / Michael Clark | **"JADEPUFFER: Agentic ransomware for automated database extortion — Sysdig 7/4-6 完整分析公开后, 7/8 早进入 ICML Seoul Day2 safety track 讨论; JADEPUFFER 7/4-6 利用 vulnerable Langflow server 入侵, 自动 harvesting credentials, 横向移动, 加密 1,300+ 数据库记录 — 是 "first documented end-to-end agentic ransomware operation" (Langflow 漏洞 + LLM 自主驱动); 同期 Claude Code 7/7 Manual Mode + 7/8 Fable 5 paywall 上线 + Sonnet 5 tokenizer trap 三件事并发, 标志 agentic AI 风险已从 "hypothetical" 进入 "实测 1,300+ records encrypted" 阶段** | https://www.sysdig.com/blog/jadepuffer-agentic-ransomware-for-automated-database-extortion

[28] (2026-07-08 08:50 CST = 7/8 00:50 UTC) | The Decoder / Matthias Bastian (7/1) | **"Claude Sonnet 5 continues Anthropic's pattern of hiding price increases behind unchanged token rates" — Claude Sonnet 5 (6/30 发布) 使用更新版 tokenizer, 同样输入文本多出 ~30% tokens; 7/8 早 Sonnet 5 "introductory pricing $2/M input + $10/M output" 9/1 失效后 standard $3/$15 — 7/8 早 Anthropic 实际是 "三层隐性涨价": Sonnet 5 tokenizer 通胀 + Fable 5 切 usage credits + Fable 5 $10/$50 per-token 创历史新高; 这与 morning raw [28] 7/1 已记 Sonnet 5 隐式涨价 + 7/8 [1][2][3] Fable 5 paywall 拼起来 = "Anthropic 7/1-7/8 一周内完成 Sonnet 5 + Fable 5 双层隐性涨价 + 显性涨价"** | https://the-decoder.com/claude-sonnet-5-continues-anthropics-pattern-of-hiding-price-increases-behind-unchanged-token-rates/

[29] (2026-07-08 10:20 CST = 7/8 02:20 UTC) | FourWeekMBA / Gennaro Cuofano (7/1) | **"Claude Sonnet 5 Costs More Per Task Than Opus 4.8 — Anthropic's Pricing Story Has a Hidden Problem — Artificial Analysis data shows Sonnet 5's per-task cost runs $2.29 — ~15% above Opus 4.8 — because smarter models consume more tokens, not fewer" — Sonnet 5 实际 per-task 成本 $2.29 (AA Intelligence Index), 比 Opus 4.8 高 15%; 7/8 早 "Sonnet 5 比 Opus 4.8 贵" 的实证跟 morning raw [28] The Decoder 隐式涨价指控拼成 "7/1 已成, 7/8 早数据公开"** | https://fourweekmba.com/ai-claude-sonnet-5-per-task-cost-tokenmaxxing/

[30] (2026-07-08 11:50 CST = 7/8 03:50 UTC) | byteiota (7/7) | **"Claude Sonnet 5: The Tokenizer Trap Behind the 'Cost-Neutral' Launch — Claude Sonnet 5 (6/30 发布) Anthropic 称为 'cost-neutral' to Sonnet 4.6; 实际新 tokenizer 让同样输入多 30% tokens, introductory 价 $2/M input + $10/M output 9/1 失效后 standard $3/M input + $15/M output, 9/1 起总成本反而上升 — 7/8 早 "Anthropic 7/1-7/8 三层隐性涨价" 拼成 byteiota + The Decoder + FourWeekMBA 三源 cross-check** | https://byteiota.com/claude-sonnet-5-tokenizer-cost/

---

## 采集 query 标注 (按调用顺序)

| # | Provider | Query 文本 |
|---|----------|------------|
| 1 | web_search_plus (exa depth=deep) | `Anthropic Fable 5 paywall reaction user cost July 8 2026 morning` |
| 2 | web_search_plus (exa depth=deep) | `DeepSeek 国家大基金 领投 450亿美元 7月8日 2026 国家队 融资` |
| 3 | web_search_plus (exa depth=deep) | `White House AI voluntary standards framework July 8 2026 GPT-5.6 release condition` |
| 4 | web_search_plus (exa depth=deep) | `Meta Alphabet Amazon Q2 2026 earnings preview capex AI July 8 announcement` |
| 5 | web_search_plus (exa depth=deep) | `ICML 2026 Seoul Day2 main conference July 8 paper Anthropic OpenAI DeepMind` |
| 6 | web_search_plus (exa depth=deep) | `Anthropic IPO S-1 valuation $965B bank roadshow July 8 2026` |
| 7 | web_search_plus (exa depth=deep) | `"Claude Sonnet 5" hidden price increase thinking tokens July 2026 The Decoder` |
| 8 | web_search_plus (exa depth=deep) | `JADEPUFFER autonomous AI ransomware Sysdig Claude Code safety ICML July 8 2026` |
| 9 | web_search_plus (exa depth=deep) | `Stratechery Anthropic safety superpower Karp tokenomics Palantir reaction July 8 2026` |
| 10 | web_search_plus (exa depth=deep) | `China AI 国产 GPU 7月8日 智谱 GLM Qwen DeepSeek 大基金 7月8日 2026 上午` |
| 11 | web_search_plus (exa depth=deep) | `Karpathy Anthropic ICML 2026 Seoul Day2 paper Karpathy站台 talk` |
| 12 | web_search_plus (exa depth=deep) | `Meta Alphabet Microsoft Q2 2026 earnings preannouncement capex $145B AI July 8` |
| 13 | web_search_plus (exa depth=deep) | `WAIC 2026 Atlas 950 华为 超节点 上海 7月17日 7月8日 国产算力` |
| 14 | web_search_plus (exa depth=deep) | `"Karp" Anthropic "Fable 5" OR "Sonnet 5" token pricing reaction July 8 2026` |
| 15 | web_search_plus (exa depth=deep) | `DeepSeek V4-Pro 7月8日 国产 算力链 大基金 7月8日 上午 永久降价 25%` |
| 16 | web_search_plus (exa depth=deep) | `Anthropic Claude Code lead engineer Thariq Shihipar Fable 5 capacity subscription X tweet July 8 2026` |
| 17 | web_extract | `https://www.techtimes.com/articles/319864/20260707/claude-fable-5-drops-subscriptions-tonight-enable-credits-lose-access.htm` + `https://www.androidauthority.com/anthropic-claude-fable-5-credits-usage-july-3684840/` |

注: web_extract 仅对 TechTimes 7/7 + Android Authority 7/7 两源 (Fable 5 7/8 0:00 PT 切计费 verbatim 描述). 其余条用 web_search_plus 摘要 + 一手 URL 引用 (Stratechery / FourWeekMBA / byteiota / ICML / 湾区信息汇 / 华尔街见闻 / 钜亨网 / 36氪 / 财经 / 21世纪经济报道 / 新浪财经 / 读懂AI时代 / Sysdig / The Decoder / Axios / 36氪 / The Information / Tom's Hardware / Meta IR / ClaritX / witho2 / UCSB / White House).

---

## 文件清单

- 路径: `/home/ting/opc-daily/raw/2026-07-08-afternoon.md`
- 条数: 30 (5 条 Fable 5 7/8 落地后反馈 / 5 条 DeepSeek 7/8 凌晨再发酵 / 4 条 White House 自愿标准框架 / 3 条 Q2 earnings 叙事 / 4 条中美同日 7/8 对照中国侧 / 5 条 ICML Seoul Day2 / 4 条 JADEPUFFER + Sonnet 5 tokenizer trap 反向信号)
- 覆盖时间窗: 2026-07-08 07:00 ~ 13:00 CST (6h), 严格不重叠早 cron 7/7 21:00 ~ 7/8 07:00 CST
- 一手来源覆盖: TechTimes / Android Authority / IBTimes UK / 湾区信息汇 / 华尔街见闻 / 网易新闻 / 钜亨网 / 36氪 / 财经 / White House / UCSB American Presidency Project / witho2 / The Information / Tom's Hardware / Meta IR / ClaritX / 21世纪经济报道 / 新浪财经 / 读懂AI时代 / ICML 2026 virtual / Google Research / Axios / Sysdig / The Decoder / FourWeekMBA / byteiota
- 午后 cron 重在 7/8 早 6h 过午发酵: Fable 5 7/8 0:00 PT 切计费后用户/企业/资本市场反应 (TechTimes 1.46 PM EDT + Android Authority 14h ago + IBTimes UK 2:07 AM BST + GPT-5.6 Sol review 7/7) + DeepSeek 7/8 凌晨再发酵 (湾区信息汇 00:15 升级版 + 华尔街见闻 7/6 峰谷分时 + 钜亨网 6/30 + 36氪 7/2 + 财经 6/18 完整 1+1+...+10 亿元分账表) + White House 自愿标准框架 7/7-11 公告窗口 (EO 14409 + Fact Sheet + witho2 + The Information 7/7 stagger release) + Q2 earnings 7/8 12h 叙事锚 (Tom's Hardware $725B capex + Meta Q1 IR + ClaritX 7/2) + 中美同日中国侧 (WAIC 7/17-7/20 倒计时 + 华为 Atlas 950 真机 + 韬定律 V2 + 智谱 GLM-5.2 753B) + ICML Seoul Day2 7/8 (Wed 主会议 + Google 130+ papers + Karpathy 首篇 co-author) + 反向信号 (JADEPUFFER 7/4-6 进入 Day2 safety track + Sonnet 5 tokenizer trap 三源 cross-check).
- ⚠️ publish 未触发; git 未 push. 本文件是 raw capture, 阶段 3 由 Una cron 读取骨架 + 本 raw 后才出 v4-Daily.html.

---

## Una 主编 stage 2 候选 (2026-07-08 12:55)

> 按 skill 不变量 #5: 午后 cron 应与 7/8 早 cron "Anthropic Fable 5 商业化拐点 + DeepSeek 大基金拐点" 中美同日双线对位 形成 "6h 后发酵" 续写 — 早 cron 选材关注 "7/8 0:00 PT 切计费前夜", 午后 cron 关注 "7/8 0:00 PT 切计费后 6h 反馈". 同时, 早 cron 三轨 (Anthropic Fable 5 / DeepSeek 大基金 / White House 自愿标准) 在 6h 内都有不同程度发酵, 主审 stage 2 应在 "7/8 早 6h 发酵最大那条" + "7/8 早 6h 出现的新信号" 二选一.

### 候选 A — Anthropic Fable 5 7/8 0:00 PT 切计费后 6h 用户/企业/资本市场反应 (外)

- 主题: 7/8 0:00 PT = 7/8 15:00 CST Fable 5 切计费 (usage credits $10/M input + $50/M output, Opus 4.8 的 2 倍) 后 6h 反馈: (a) TechTimes 1:46 PM EDT 报道 + 6/14 Karl Kahn 集体诉讼 (加州北区联邦法院) + 19 天出口管制 + 6 天补偿窗口落地 (b) Android Authority 14h ago + Claude Code 工程师 Thariq Shihipar X 帖 "we aim to restore Fable as a standard part of our subscriptions as soon as capacity allows" — 用户社群对 "永久脱离订阅" vs "capacity 解决后回归" 分化 (c) TechTimes 7/6 5:58 AM EDT + SecurityWeek 9 分钟烧光 $100 测算 + 三个降本杠杆 (prompt caching -90% / Batch API 50% / model routing 到 Sonnet 5 $2/$10) (d) IBTimes UK 7/8 2:07 AM BST + 用户反馈 "Do Not Small Talk Me, I'm Expensive, I'm Paranoid" (e) TechTimes 7/7 GPT-5.6 Sol review — OpenAI 7/8 早对标品 (Fable 5 半价 + coding 更快 + benchmark 问题) — 形成 "7/8 早 三件事并发: Fable 5 提价 + Sonnet 5 隐式涨价 + 6/14 Kahn 集体诉讼" 续 morning raw 选材.
- headline 源: TechTimes 7/7 1:46 PM EDT + Android Authority 7/7 14h ago + TechTimes 7/6 5:58 AM EDT + IBTimes UK 7/8 2:07 AM BST + TechTimes GPT-5.6 Sol review 7/7.
- why-it's-the-inner-voice verdict: 早 cron 选材关注 "7/8 0:00 PT 切计费前夜"; 午后 cron 关注 "7/8 0:00 PT 切计费后 6h 反馈" — 是 morning + afternoon 纵向延伸, 主审 stage 2 拼早 + 午后得 "Anthropic 7/7-7/8 24h 内: 早 = 切计费前夜 + 午后 = 切计费后 6h 三件事并发 (提价 + 隐式涨价 + 集体诉讼)" 完整 timeline.
- loop+darwin self-check: loop = "Fable 5 计费 + Sonnet 5 tokenizer + Kahn 集体诉讼 + 9 分钟烧光 $100 + prompt caching 杠杆 + Sonnet 5 路由 + OpenAI GPT-5.6 Sol 对标 + Thariq Shihipar 7/8 capacity 回归 X 帖" 已在 [1][2][3][4][5][28][29][30] 形成 8 节点闭环; darwin = 中国侧 DeepSeek V4 永久降价 1/4 + 峰谷分时 + 700 亿融资 + 韬定律 + GLM-5.2 (B 段 + E 段) 与美侧 Fable 5 提价 + Sonnet 5 隐式涨价 + GPT-5.6 Sol 对标形成 "美方边际提价 / 中方边际降价" 同日双向测试.

### 候选 B — DeepSeek 大基金 + V4-Pro 永久降价 1/4 后 6h 发酵 (capital + cost)

- 主题: 7/8 凌晨湾区信息汇 (URL hash 56d52799416) 7/8 00:15:47 重发, 加入 "彭博 700亿融资升级 (vs 之前传的 500亿)" + DeepSeek 5/31 永久降价 1/4 (每百万 tokens 缓存命中 0.025 元 / 缓存未命中 3 元 / 输出 6 元); 华尔街见闻 7/6 12:54 + 钜亨网 6/30 09:40 + 高盛 7/3 研报: V4 正式版 7 月中旬上线, 工作日 9-12 / 14-18 时段 API 价上调至非高峰 2x (V4 Pro $0.17/M → $0.35/M tokens) — "不是需求走弱, 恰恰相反, AI 调用需求仍在上行, 算力资源趋紧; 价格战 (4 月底起 2 个多月) 进入尾声, 价格体系开始向真实成本回归"; 36氪 7/2 + 财经 6/18: 6/16 完成首轮外部融资 510 亿元, 投前估值 ~543 亿美元, 梁文锋个人 200 亿 + 腾讯 100 亿 + 宁德时代 50 亿 + 网易/京东/IDG 各 30 亿 + 国家 AI 产业投资基金 10 亿 (国资份额反而最低).
- headline 源: 湾区信息汇 7/8 00:15 (URL hash 56d52799416) + 华尔街见闻 7/6 12:54 + 钜亨网 6/30 09:40 + 36氪 7/2 11:41 + 财经 6/18 11:53.
- why-it's-the-inner-voice verdict: 早 cron 关注 "DeepSeek 大基金 + 永久降价 1/4"; 午后 cron 关注 "7/8 凌晨 6h 再发酵: 700亿融资升级 + 峰谷分时 2x + 510亿完整 1+1+...+10 亿分账表" — 是 morning + afternoon 纵向延伸, 主审 stage 2 拼早 + 午后得 "DeepSeek 7/7-7/8 24h 内: 早 = 大基金 + 永久降价 / 午后 = 700亿升级 + 峰谷分时 + 完整分账表" 完整 timeline.
- loop+darwin self-check: loop = "DeepSeek 200亿 → 450亿 → 500亿/510亿/543亿/700亿元 估值三阶跳 + 国家大基金领投 + 梁文锋 200亿自有资金 + 永久降价 1/4 + 峰谷分时 2x + V4 7 月中正式版 + DSpark 论文" 已在 [6][7][8][9][10] 形成 5 节点闭环 + 与早 cron [6][7][8][10][12][13][14][21] 9 节点串联; darwin = 美侧 Anthropic Fable 5 提价 + Sonnet 5 隐式涨价 vs 中方 DeepSeek 永久降价 1/4 + 峰谷分时 2x 形成 "美方单边提价 / 中方双向定价 (长尾降价 + 高峰抑堵)" 同日双向测试.

### 候选 C — White House 自愿标准框架 7/8 12h 进展 + Anthropic 独立性路径 (policy)

- 主题: 7/7-11 公告窗口 (EO 14409 6/2 + Fact Sheet 同期) 进入 industry 实施期: (a) White House 6/2 EO 14409 (b) UCSB American Presidency Project Fact Sheet (c) witho2 7/7 行业梳理 (d) The Information 7/7 "Trump Administration Asks OpenAI to Stagger Release of New Model Over Security Concerns" — 7/8 早 "OpenAI GPT-5.6 走 gated preview 路径 + Anthropic 走 Fable 5 商业化路径" 形成 "政府管 OpenAI / 市场管 Anthropic" 双向分叉; 这跟 morning raw [6][9] White House 自愿标准 + [9] Reuters 7/2 "Anthropic 政府股权未介入" + 7/8 早 Fable 5 6/12 出口管制撤销 + 6/14 Kahn 集体诉讼 拼成 "Anthropic 独立性路径 = 商业化完全自主 + 但仍受 6/12 出口管制类行政权力制约" 完整 timeline.
- headline 源: White House 6/2 EO 14409 + UCSB Fact Sheet + witho2 7/7 + The Information 7/7.
- why-it's-the-inner-voice verdict: 早 cron 选材把 "White House 自愿标准" 列为三轨之一 (跟 Fable 5 / DeepSeek 并列); 午后 cron 把 "OpenAI 走 gated + Anthropic 走市场化" 双向分叉 主轴化, 跟 morning + afternoon 拼成 "Anthropic 7/7-7/8 24h 内: 早 = 自愿标准 + 独立性 / 午后 = OpenAI 走 gated 验证 分叉" 完整 timeline. 相对候选 A/B 偏政策叙事, 主线感略弱, 但跟 7/8 早 Fable 5 6/12 出口管制撤销 + 7/7 21:00 evening raw "OpenAI gated White House previews + Claude models restored" 拼起来最完整.
- loop+darwin self-check: loop = "OpenAI 5% 政府股权 + Anthropic 政府股权未介入 + White House 自愿标准 + GPT-5.6 stagger release + Fable 5 6/12 出口管制撤销 + 6/14 Kahn 集体诉讼" 已在 [11][12][13][14] + 早 cron [6][9][19][22][23] + 7/7 evening raw [25][26][29][30] 形成 14 节点闭环; darwin = 中国侧 DeepSeek 国家大基金领投 (vs 美方 OpenAI 政府股权) + White House 自愿标准 (vs 中方 国家 AI 产业投资基金) 形成 "美方民间私募 + 政府股权谈判 vs 中方国资直接领投" 双向对照.

> Una 主编 stage 2 推荐: **候选 A (Anthropic Fable 5 7/8 0:00 PT 切计费后 6h 反馈)** — 午后 cron 唯一一条 "7/8 24h 内已生效 + 用户/企业/资本市场已反应" 的"外/对/inner voice" 主线; 候选 B 是 capital + cost 平行对照, 候选 C 是 policy 平行对照, 均作为 A 的二级补充. 主审 stage 2 拼早 + 午后得 "Anthropic 7/7-7/8 24h 内: 早 = 切计费前夜 / 午后 = 切计费后 6h 三件事并发 (提价 + 隐式涨价 + 集体诉讼)" 的双视角对照; 拼早 + 午后 + evening + afternoon + morning 形成 7/7 全天 五期 主轴.

> 阶段 1 capture 完. 待阶段 2 Una 主审 二次 grep 确认, 阶段 3 render.
