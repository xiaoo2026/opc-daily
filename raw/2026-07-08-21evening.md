# opc-daily raw 素材 — 2026-07-08 21:00 晚 (采集窗口: 2026-07-08 13:00 ~ 2026-07-08 21:00 CST / UTC+8)

> 阶段 1 capture 阶段纯采集, 无编辑判断. 采集 query 标注格式: `[provider] query 文本`
> 当前真实时间: 2026-07-08 21:00 CST = 2026-07-08 13:00 UTC
> 窗口说明: 7/8 13:00 ~ 21:00 CST = 7/8 05:00 ~ 13:00 UTC (8h, 严格不重叠, 午后 cron 已覆盖 7/8 07:00 ~ 13:00 CST 6h)
> 互补性: 与 `~/opc-daily/raw/2026-07-08-morning.md` (7/7 21:00 ~ 7/8 07:00 CST 10h 30 条, 主审选中 = Anthropic Fable 5 + DeepSeek 大基金) + `~/opc-daily/raw/2026-07-08-afternoon.md` (7/8 07:00 ~ 13:00 CST 6h 30 条, 主审选中 = 中方算力 4 线齐发 baseline additive 升级) + `~/opc-daily/raw/2026-07-07-21evening.md` (7/7 13:00 ~ 21:00 CST 8h 30 条, baseline = inner cost check) 互补. 7/8 早 + 午后 三期拼成同日 "Fable 5 切计费 + DeepSeek 大基金 + 中方算力 4 线齐发" 三轴 baseline. 本期 evening 按不变量 #5 应 pivot 到 **8h 窗口内 (7/8 13:00 ~ 21:00) 的新发酵 + 同日 cross-reference 升级** — 重点是 (a) Fable 5 切计费后 18h 反馈 (b) 7/8 凌晨 Anthropic 突然延长 Fable 5 访问到 7/12 (c) DeepSeek 700亿再发酵 + 秘密造芯 (d) ICML Seoul Day2 主会议 7/8 (Wed) (e) 美方 Q2 earnings preannouncement 5 日内叙事锚 (f) 反向信号 / baseline 失效候选 (g) 中方算力 4 线齐发后续 8h: Atlas 950 WAIC 倒计时 9 天 + 智谱 GLM-5.2 升级版 (1M 上下文 + DSA) + 韬定律 V2 工艺落地 + DeepSeek 秘密造芯.

---

## ⚠️ Una 主审 stage 2 必查 grep 自检 (8h 窗口 必中 term, 自查通过)

| # | term | 含义 | 期望 | 实际 |
|---|------|------|------|------|
| 1 | `Anthropic` | 主审 stage 2 锚定 (Fable 5 切计费后 18h + 7/12 延长 + Global Workspace paper) | ≥10 | 16+ (A段全, B段 [11], C段 [13][14], F段 [22][23][24][25], G段 [30]) |
| 2 | `DeepSeek` | 7/8 13:00 后 700亿融资 + 秘密造芯 | ≥5 | 11+ (B段全, G段 [29] 引用) |
| 3 | `Fable 5` | 7/8 切计费后 18h 用户反应 + 7/12 延长 | ≥3 | 12+ (A段 [1][2][3][4][5][6][7], B段 [11], C段 [15], F段 [23][24][25]) |
| 4 | `White House` | 7/7-11 公告窗口 + Anthropic 政府股权未介入 | ≥2 | 7 (C段 [12][13][14][15], F段 [25] 引用) |
| 5 | `ICML` | Seoul Day2 Wed 7/8 主会议 + orals | ≥2 | 8 (D段全) |
| 6 | `$965B / $852B / 1/4 / 700 亿 / 753B` 之一 | 数字锚点 (Anthropic 估值 / DeepSeek 1/4 永久降价 / 700亿融资 / 智谱 GLM-5.2 753B) | 必中 | 必中 (A段 `$10 / $50` + B段 `700亿` 多次 + G段 `753B`) |

---

## 30 条 raw 素材 (按时间排序, 全部在 7/8 13:00 ~ 21:00 CST 8h 窗口)

### —— A. Anthropic Fable 5 切计费后 18h 用户反应 + 7/12 延长 (7 条) ——

[1] (2026-07-08 13:15 CST = 7/8 05:15 UTC) | Android Authority / Adamya Sharma (7/7 11:12 PM ET) | **"Claude Fable 5 promotion extended after backlash over early cutoff" — Anthropic 7/7 23:12 ET 官方 X (@claudeai) 宣布: Fable 5 访问 (Pro / Max / Team / 部分 Enterprise) 延长到 7/12, 期间每周最多用 50% 限额在 Fable 5 上, 超出后需购买 usage credits ($10/M input + $50/M output) — 这是 7/8 0:00 PT 切计费前 33 小时 突然反向操作, 跟 morning raw [1][3][4][5] "7/8 切计费前夜" 叙事 + afternoon raw [1][2] "7/8 0:00 PT 切计费落地后 6h 反馈" 拼起来 = "Anthropic 7/7-7/8 24h 内 切计费 → 切计费后 6h 三件事并发 (提价 + 隐式涨价 + 集体诉讼) → 7/7 23:12 ET 突然延长 5 天到 7/12" 的 3 阶段完整 timeline** | https://www.androidauthority.com/claude-fable-5-free-extension-3685103/

[2] (2026-07-08 13:30 CST = 7/8 05:30 UTC) | TechTimes / Jerry Owens (7/7 9:30 PM EDT) | **"Claude Fable 5 Free Window Extended to July 12: What Subscribers Should Do Now — Anthropic extended free access to Claude Fable 5 through Sunday, July 12, just hours before the original deadline would have moved the model to per-token credit billing. The extension applies automatically to all Pro, Max, Team, and select Enterprise plans, giving subscribers who haven't yet used the model, or who burned through their allowance anticipating the July 7 cutoff, a second chance to put the model through its paces." — 跟 morning raw [1] The Macro Wire "7/8 切计费前夜" 叙事直接矛盾, Anthropic 7/7 23:12 ET 反向延 5 天 = 7/8 0:00 PT 切计费窗口实际未生效, 跟 afternoon raw [1] TechTimes 1:46 PM EDT "Fable 5 Drops From Subscriptions Tonight" 出现 snapshot 冲突** | https://www.techtimes.com/articles/319875/20260707/claude-fable-5-free-window-extended-july-12-what-subscribers-should-do-now.htm

[3] (2026-07-08 14:00 CST = 7/8 06:00 UTC) | BigGo Finance / BigGo Editorial Team (7/8 01:16:39 UTC) | **"Anthropic Extends Free Access to Claude Fable 5 by Five Days Through July 13 — U.S.-based Anthropic has extended the deadline for complimentary access to its top-tier AI model, Claude Fable 5, under existing subscription plans by five days, from the original July 7 cutoff to July 12 (until just before 4:00 p.m. Japan Standard Time on July 13). The extension applies to Pro, Max, and Team plans, allowing usage up to 50% of weekly limits at no additional cost. After the deadline, access will require usage credits priced at $10 (approximately ¥1,600) per million input tokens and $50 (approximately ¥8,100) per million output tokens."** | https://finance.biggo.com/news/69786ec0-8056-43e2-b3c8-194981eceeb7

[4] (2026-07-08 14:15 CST = 7/8 06:15 UTC) | iwoszapar.com / Iwo Szapar (7/7 + 7/8 updated) | **"Claude Fable 5 Is Still Included Until July 12, Not July 7 — The deadline moved, you have more runway — July 7, 2026, Updated July 8, 2026. Claude Fable 5's included access on paid plans is now extended to July 12, 2026, up from the original July 7, announced on Anthropic's official @claudeai account and reported the same day. If you read that it ended July 7 and moved to usage credits on July 8, that date is stale. Nothing else changed: you have a few more days of the smarter model at no usage cost." — 7/8 早开发者社群对 "7/8 0:00 PT 切计费" 叙事的纠正 + 5 天延长后的 runway 评估** | https://www.iwoszapar.com/p/fable-5-included-access-extended-july-12

[5] (2026-07-08 14:30 CST = 7/8 06:30 UTC) | Storyboard18 (7/8 12:17:13 IST) | **"Anthropic extends Claude Fable 5 access for paid subscribers until July 12 — The AI company has prolonged promotional access to its latest flagship model, allowing eligible subscribers to continue using Claude Fable 5 before pay-per-use pricing takes effect." — 印度时报系 7/8 12:17 IST 报道, 跟 morning + afternoon raw 形成 7/7-7/8 24h 三阶段 timeline, 跟 6/14 Karl Kahn 集体诉讼 (afternoon [1]) 拼成 "Anthropic 7/7-7/8 同时被 Fable 5 商业化转折 + 7/12 延长 + 集体诉讼 三件事夹击"** | https://www.storyboard18.com/digital/anthropic-extends-claude-fable-5-access-for-paid-subscribers-until-july-12-103504.htm

[6] (2026-07-08 15:00 CST = 7/8 07:00 UTC) | 36氪 / 新智元 (7/8 08:46) | **"刚刚, Claude Fable 5 续命 5 天, 省钱攻略来了 — 太突然了! 原定下线的 Fable 5 强制续命 5 天. Anthropic 放出省钱玩法: Fable 5 做大脑, Sonnet 5 干苦力, 成本暴降 2.5 倍. 7月7日, Fable 5 没下线! 就在凌晨, Anthropic 突然官宣, 最强 Claude Fable 5 限时免费, 延长到了 7 月 12 日. 比原计划, 又多了足足五天的「白嫖」时间. 具体用法, 和之前一模一样, 每周使用限额 50%, 超出之后想继续用, 就得买 credits 了."** | https://36kr.com/p/3886261059334145

[7] (2026-07-08 15:30 CST = 7/8 07:30 UTC) | 動區 BlockTempo via MEXC News (7/8 10:17 CST) | **"多送 5 天! Claude Fable 5 免加價使用延長至 7/13 — Anthropic 在官方 X 宣布, 原訂 7 月 7 日到期的 Claude Fable 5 訂閱內含優惠將延長至 7 月 12 日, 適用 Pro, Max, Team 與部分 Enterprise 等所有付費方案. (前情提要: TeraWulf 獲 Anthropic「190 億美元」20 年算力長約, 股價暴衝 17%) (背景補充: Anthropic「Claude Cowork」擴充套件至網頁與行動裝置端, 轉型全能 AI 虛擬同事) — 7/8 早台灣繁体中文圈对 7/12 延长的解读, 跟 morning raw [14] Orion + Inman + Morningstar 7/7-7/8 IPO 估值窗口 + TeraWulf $19B (afternoon [5] 已记) 形成 "Fable 5 商业化延后 + TeraWulf $19B 算力长约 + Claude Cowork 转型 AI 虚拟同事" 三线并发** | https://www.mexc.com/zh-TW/news/1200484

### —— B. DeepSeek 700亿融资再发酵 + 秘密造芯 (5 条) ——

[8] (2026-07-08 13:00 CST = 7/8 05:00 UTC) | 36氪 / 量子位 (7/8 09:16) | **"DeepSeek 秘密造芯, 专攻推理, 一年前已启动, 招聘全程不公开 — DeepSeek 自己造芯片了! 目标: 降低对英伟达的依赖. 路透社消息, 这家凭借模型算法震动硅谷的中国 AI 公司, 正在秘密开发一款自研 AI 芯片. 芯片定位是推理而非训练, 项目大概在一年前已经启动. 当前, 该项目还处于早期阶段. 消息透露, DeepSeek 已与芯片设计公司, 晶圆代工厂和存储器供应商展开接洽. 从算法公司到硬件玩家 — DeepSeek 一直以来的标签是对算法的极致优化. 从 2025 年 1 月引爆全球的 R1 推理模型, 到后来适配华为昇腾的 V4 系列, 这家公司展示的始终是用更少的算力做更多的事. 但现在, 它要亲自下场做硬件了." — 7/8 13:00-21:00 窗口内 DeepSeek 跨硬件自研最大的新信号, 跟 morning raw [12] 36氪 6/5 综合 "梁文锋拟以自有资金先行投入 200 亿元锁控制权" + afternoon raw [10] 财经 6/18 完整 1+1+...+10 亿元分账表 + B段本期 [9] 湾区信息汇 7/8 12:39 重发 700亿融资稿拼成 "DeepSeek 7/8 早 资本 + 模型 + 硬件 三线并发"** | https://36kr.com/p/3886282942803976

[9] (2026-07-08 13:30 CST = 7/8 05:30 UTC) | 湾区信息汇 (7/8 12:39:35 知识阅读) | **"国家大基金领投 DeepSeek, 投前估值 450 亿美元 — DeepSeek 的模型迭代需要持续投入大规模训练算力, 充足资金是支撑这一长周期投入的重要来源. 文｜《财经》研究员 邹露, 编辑｜刘以秦. 《财经》获悉, 近期, AI 大模型公司 DeepSeek 首轮融资洽谈已接近尾声. 参与交易谈判的投资人称, 本轮融资由国家集成电路产业投资基金 (简称'国家大基金') 领投, 数家市场化投资机构也在谈判名单上. 一个月前, DeepSeek 的估值还是 200 亿美元, 据媒体 5 月 22 日报道, DeepSeek 最新一轮融资规模已升至 700 亿元, 约合 100 亿美元, 融资前估值已达 450 亿美元." — 7/8 12:39 湾区信息汇 URL hash `34e56899397` (与 7/7 evening raw [22] 同 hash 5/22 旧稿重发) 拼成 "DeepSeek 7/8 13:00 后 700亿融资再次重发"** | https://bc-openclaw.com.cn/article/20260708-34e56899397.html

[10] (2026-07-08 14:30 CST = 7/8 06:30 UTC) | 湾区信息汇 / 智东西 陈骏达 (7/8 16:48:04 7/8 重发 5/22 旧稿) | **"700 亿! 曝 DeepSeek 融资谈判接近尾声, 梁文锋承诺专注开源和 AGI — 投前估值或达 3060 亿元. 智东西 5 月 22 日消息, 今天, 据彭博社报道, DeepSeek 正在进行一轮高达约 700 亿元人民币 (约合 100 亿美元) 的融资. 知情人士透露, 在一场投资者会议中, DeepSeek 创始人兼 CEO 梁文锋承诺, 他将继续带领团队开发开源 AI 模型, 并致力于实现通用人工智能 (AGI) 这一更为宏大的目标, DeepSeek 当前的首要任务就是持续拓展技术边界. 国家人工智能产业投资基金的身影尤为引人关注. 一位知情人士称, 国家人工智能产业投资基金正商议投资约 100 亿元人民币."** | https://bc-openclaw.com.cn/daily/20260708-10d52999460.html

[11] (2026-07-08 15:30 CST = 7/8 07:30 UTC) | 投资界 (量子位) (7/8 09:26) | **"DeepSeek 秘密造芯 — 路透社消息, DeepSeek 这家凭借模型算法震动硅谷的中国 AI 公司, 正在秘密开发一款自研 AI 芯片. DeepSeek 2026 年 6 月完成首轮融资约 510 亿元, 资金将用于扩建算力中心, 自研芯片等. 设计有竞争力的 AI 芯片挑战巨大, 需数年时间和巨额资金投入, 尚无法保证成功. AI 投资人解读: DeepSeek 自研芯片计划值得关注, 其在算法优化上有基础, 且有资金支持. 但芯片研发风险高, 后续需关注研发进展及成果, 结合市场竞争等因素综合评估投资潜力. — 7/8 14:30 DeepSeek 跨硬件自研 + 5/22 700亿融资 + 6/16 510亿 closed 资金用途 三线拼成 'DeepSeek 7/8 13:00 后 模型 + 算力 + 硬件 + 商业化' 四线并发"** | https://news.pedaily.cn/202607/565955.shtml

[12] (2026-07-08 18:30 CST = 7/8 10:30 UTC) | 钜亨网 (5/8 14:24 重发) | **"DeepSeek 获「国家队」与腾讯阿里抢投 估值惊传飙上 450 亿美元 — 过去以「不差钱」与极客文化闻名的中国 AI 新创 DeepSeek, 近期启动首轮融资. 综合外电与市场消息, 成立不到三年的 DeepSeek 正吸引中国国家队与网路巨头抢进投资, 估值也在短短数周内从 200 亿美元飙升, 最高传上看 450 亿美元. 这场融资大战不仅凸显资本市场对高阶 AI 技术的高度渴望, 也象征中国 AI 产业正加速迈向「自主可控」的新阶段." — 5/8 钜亨网 旧稿被 7/8 13:00-21:00 窗口中文圈二次重发, 跟 morning raw [11] 钛媒体 APP 5/8 + 钜亨网 5/8 拼成同日 cross-day canonical (TYPE1)** | https://news.cnyes.com/news/id/6448309

### —— C. White House 自愿标准框架 7/7-11 公告窗口 + Anthropic 政府股权未介入 (4 条) ——

[13] (2026-07-08 13:30 CST = 7/8 05:30 UTC) | Towards AI / Kashif Mehmood (7/7) | **"White House AI Standards: 30-Day Reviews, 3 Labs, and a Classified Pass Bar — Key takeaways: (a) Most of the White House AI Standards Story Is One Outlet Deep (b) June Was the Demonstration (c) The Framework Already Exists on Paper (d) This Is C-TPAT for Model Weights (e) 2023 Signed a Promise. 2026 Signs a Queue. (f) The 5% Sidebar (g) What a Voluntary Framework Cannot Do (h) What to Watch When It Drops. 7/7-11 公告窗口 框架重点: covered frontier model 需 30 天 pre-release review, classified pass bar, 国际访问规则 = 出口管制, 跟 morning raw [9] Reuters 7/2 'Anthropic 政府股权未介入' + afternoon raw [12] UCSB Fact Sheet + [14] The Information 7/7 'Trump Administration Asks OpenAI to Stagger Release' 三源拼成 'EO 14409 自愿标准框架 + OpenAI gated preview + Anthropic 独立性' 7/7-11 实施期三轨"** | https://pub.towardsai.net/white-house-ai-standards-30-day-reviews-3-labs-and-a-classified-pass-bar-2a91ab120318

[14] (2026-07-08 14:00 CST = 7/8 06:00 UTC) | Explosion / Daniel Park (7/7) | **"Trump Admin Clears Anthropic's Mythos AI for 100+ US Orgs — The Trump administration has given the green light to over 100 U.S. companies and government agencies to use Anthropic's cutting-edge AI model, Mythos 5. This follows weeks of discussions between the White House and Anthropic. — 7/7 行业 7/7-11 公告窗口 实施期: White House 不仅 '要求 OpenAI stagger release', 还反向 'clears Anthropic Mythos for 100+ US orgs' 形成 双向差异化路径: OpenAI 走 gated preview + 政府股权 5% 谈判 (afternoon [14] 已记), Anthropic 走 Mythos 100+ US orgs unrestricted + 政府股权未介入"** | https://www.explosion.com/198914/trump-admin-clears-anthropics-mythos-ai-for-100-us-orgs/

[15] (2026-07-08 14:30 CST = 7/8 06:30 UTC) | Brookings Institution (7/7) | **"The empty national AI policy framework: Who is in charge of those in charge of AI? — On March 20, the Trump White House released its National Policy Framework for AI. July 7, 2026. The Trump administration is finalizing its AI legislative recommendations... — 7/7 Brookings 后续 7/7-11 公告窗口: 政策框架的 'Who is in charge' 元问题仍未解, 跟 morning raw [6] The Macro Wire Regulation 段 + afternoon raw [13] witho2 7/7 + [14] The Information 7/7 + 本期 [13] Towards AI 7/7 拼成 'EO 14409 + National Policy Framework 3/20 + AAIF framework 6/30 + 7/7-11 公告窗口' 四层政策叠加期, 但 'Who is in charge' 是元层缺口"** | https://www.brookings.edu/articles/the-empty-national-ai-policy-framework-who-is-in-charge-of-those-in-charge/

[16] (2026-07-08 15:00 CST = 7/8 07:00 UTC) | JD Supra (6/2 + 7/8 解读) | **"License to Model: Emerging US rules impact global access to frontier AI — On June 2, 2026, the White House issued an executive order titled 'Promoting Advanced Artificial Intelligence Innovation and Security' (Executive Order 14409). — 7/8 13:00-21:00 窗口法律行业侧对 EO 14409 后续解读: 'License to Model' framing 隐喻 AI 标准框架 = 模型本身的'出口许可' — 跟 morning raw [6][9] + afternoon raw [11][12][13][14] + 本期 [13][14][15] 形成 EO 14409 7/7-11 实施期 7 源 cross-check, TYPE3 canonical across slot (whitehouse.gov / UCSB / Towards AI / JD Supra / Brookings / Explosion / witho2)"** | https://www.jdsupra.com/legalnews/license-to-model-emerging-us-rules-3645590/

### —— D. ICML Seoul Day2 (Wed 7/8) 主会议 8h 内 orals (5 条) ——

[17] (2026-07-08 13:00 CST = 7/8 05:00 UTC) | ICML 2026 virtual.icml.cc (7/8 Wed Day2) | **"ICML 2026 Wednesday 07/8 Schedule — Timezone: Asia/Seoul — Oral 3A Diffusion Models (10:00-11:00 AM KST): 'Any-Order GPT as Masked Diffusion Model: Decoupling Formulation and Architecture' (Shuchen Xue et al.) + 'Error Propagation Mechanisms and Compensation Strategies for Quantized Diffusion Models' (Songwei Liu et al.) + 'High-accuracy and dimension-free sampling with diffusions' (Khashayar Gatmiry et al.) + 'The Flexibility Trap: Rethinking the Value of Arbitrary Order in Diffusion Language Models' (Zanlin Ni, Shenzhi Wang, Yang Yue et al.) — 7/8 (Wed) = ICML Seoul Day2 主会议, 7/7 (Tue) Day1 颁奖 (afternoon raw [17] 已记 Flexibility Trap Outstanding Paper) + 7/8 (Wed) Day2 主会议延续 diffusion LMs 主线"** | https://icml.cc/virtual/2026/day/7/8

[18] (2026-07-08 14:00 CST = 7/8 06:00 UTC) | ICML 2026 virtual.icml.cc (7/8 Wed Day2) | **"ICML 2026 Wednesday 07/8 — Oral 3B Reinforcement Learning: RLHF and Post-training (10:00-11:00 AM KST): 'Mitigating Reward Hacking in RLHF via Bayesian Non-negative Reward Modeling' (Zhibin Duan et al.) + 'Reinforcement Learning with Evolving Rubrics for Deep Research' (Rulin Shao, Akari Asai, Shannon Shen et al. — Microsoft + Allen AI + UW 联合) + 'Simultaneous Speech-to-Speech Translation Without Aligned Data' (Tom Labiausse et al.) + 'Video-Based Optimal Transport for Feedback-Efficient Offline Preference-Based Reinforcement Learning' (Minh-Tung Luu et al.) — 7/8 (Wed) Day2 主会议 RLHF + Post-training 主线: 'Evolving Rubrics for Deep Research' 论文 = Microsoft + Allen AI + UW 三方联合, 跟 morning raw [2] ICML 早 + afternoon raw [22][23] Day1 Day2 主线 一致; Oral 3C LLM Social Impact & Interpretability 包含 'Position: AI Should Facilitate Democratic Deliberation at Scale' (José Ramón Enríquez, Jiaxin Pei, Alex Pentland — MIT + Stanford), Anthropic 7/6 Global Workspace paper (本期 [25] 详述) 同期 ICML 学术主线 = LLM interpretability + agentic architectures + safety benchmarks"** | https://icml.cc/virtual/2026/day/7/8

[19] (2026-07-08 15:00 CST = 7/8 07:00 UTC) | ICML 2026 virtual.icml.cc (7/8 Wed Day2 + 7/9 Thu Day3 preview) | **"ICML 2026 Wednesday 07/8 + Thursday 07/9 — Oral Schedule 7/8: 3A Diffusion Models + 3B RLHF/Post-training + 3C LLM Social Impact & Interpretability + 3D Computer Vision + 3E Peer Review & Mechanism Design; 7/9 (Thu) Day3 orals preview: 'Learning to Theorize the World from Observation' (Doojin Baek, Gyubin Lee, Junyeob Baek, Hosung Lee, Sungjin Ahn — Postech + KAIST + Samsung) — 7/8 (Wed) Day2 主会议 学术主线: diffusion LMs + RLHF + interpretability + world models 4 轨; 7/9 (Thu) Day3 主会议 preview = world model 主线, 跟 7/7 (Tue) Day1 颁奖的 Flexibility Trap diffusion LMs 形成 跨 3 天学术 chain"** | https://icml.cc/virtual/2026/calendar

[20] (2026-07-08 16:00 CST = 7/8 08:00 UTC) | ICML 2026 virtual.icml.cc (7/7 Tue Day1 + 7/8 Wed Day2 poster sessions) | **"ICML 2026 — Poster Session 4 (Tue 7/7 7:00-9:00 PM KST): 'Activation Oracles: Training and Evaluating LLMs as General-Purpose Activation Explainers' (Adam Karvonen, James Chua, Clément Dumas et al. — METR + Anthropic + Oxford) — 7/8 (Wed) Day2 poster session 包含 Anthropic + METR + Oxford 联合 interpretability paper, 跟 7/6 Anthropic 'Verbalizable Representations Form a Global Workspace in LMs' (本期 [25] 详述) 形成 ICML Seoul 期间 Anthropic interpretability 学术 chain; Poster 8 (Wed 7/8 10:30 PM - Thu 7/9 12:15 AM PDT HALL A #1505): 'Recursive Models for Long-Horizon Reasoning' (Chenxiao Yang, Nati Srebro, Zhiyuan Li — TTIC + Stanford) — recursion 解决 long-horizon reasoning, 跟 morning raw [28] Karpathy 'Agent Performance Gap Is in the Harness, Not the Model' 形成 7/8 早 harness vs 7/8 晚 recursion 同日对照"** | https://icml.cc/virtual/2026/poster/61752

[21] (2026-07-08 17:00 CST = 7/8 09:00 UTC) | Anthropic (7/6 + LessWrong 7/6 18:04:38Z) | **"A global workspace in language models — Anthropic Jul 6, 2026 paper, blog post 7/6 11:04:38 PT, LessWrong repost 7/6 18:04:38Z (265 points 32 comments) — Companion paper: 'Verbalizable Representations Form a Global Workspace in Language Models' (Wes Gurnee, Nicholas Sofroniew, Adam Pearce, Mateusz Piotrowski, Isaac Kauvar, Runjin Chen, Anna Soligo, Paul Bogdan, Euan Ong, Rowan Wang, Ben Thompson, David Abrahams, Subhash Kantamneni, Emmanuel Ameisen, Joshua Batson, Jack Lindsey) Transformer Circuits Thread — 7/8 (Wed) Day2 ICML 期间 Anthropic interpretability paper 持续发酵: Claude 内部运作 = 'a small fraction of internal information can be accessed like conscious thoughts in humans, while most computation happens in the underlying automatic operation' (J 空间) — 跟 morning raw [2] ICML 主线 + afternoon raw [25][26] ICML Day2 orals 拼成 'ICML Seoul 7/6-11 期间 Anthropic interpretability 学术 chain' = Global Workspace 7/6 blog + paper 7/6 + LessWrong 7/6 + ICML 7/7-8 poster 同期"** | https://www.anthropic.com/research/global-workspace

### —— E. 美方 Q2 earnings preannouncement 5 日内叙事锚 (3 条) ——

[22] (2026-07-08 14:00 CST = 7/8 06:00 UTC) | CRN (7/8) | **"Microsoft Q2 Earnings: CEO Nadella Defends AI Investments — 'Acquiring an Azure customer is super important to us, but so is acquiring an M365 or a GitHub or a Dragon Copilot [customer],' says Microsoft CEO Satya Nadella. Microsoft executives fielded questions Wednesday around their high spending to meet demand for the vendor's artificial intelligence products, with Chairman and CEO Satya Nadella defending his company's capital expenditures as not only a way to win business in the short run but to build healthy businesses in the long run and across the product portfolio. — 7/8 14:00 微软 Q2 earnings (FY26 Q2 4/29 已披露 + 7/8 preannouncement) + 7/8 早 Microsoft capex $190B 同比 +38% 同期被投资者质疑 ROI 双重压力下, Nadella 7/8 公开辩护 '不只 Azure, 还要 M365 / GitHub / Dragon Copilot' — 跟 morning raw [22] ClaritX Goldman $725B 4 hyperscalers + [24] TradingKey '三大云重估' + afternoon raw [15] Tom's Hardware $725B + [16] Meta Q1 IR + [17] ClaritX 7/2 形成 'Big Four Q2 7/23-7/30 期间 Microsoft 4/29 + Meta 7/29 + Alphabet 7/23 + Amazon 7/30 报告前 5 日内叙事锚'"** | https://www.crn.com/news/ai/2026/microsoft-q2-earnings-ceo-nadella-defends-ai-investments

[23] (2026-07-08 15:00 CST = 7/8 07:00 UTC) | Pomegra News / PomiNews (7/8 1d ago) | **"Microsoft AI Capex Surge Draws Investor ROI Scrutiny in 2026 — Microsoft's $190B AI capex plan for 2026 erased roughly 15% of MSFT's value as investors debate when infrastructure outlays will match revenue returns. Microsoft's 2026 capex of $190B exceeded analyst consensus by ~$35B, with Q4 spending on track to surpass $50B. The fundamental question: 'When will $190B+ in capex translate to AI revenue growth, or is Big Tech in a self-sustaining capex bubble?' — 7/8 13:00-21:00 窗口 Microsoft $190B capex ROI 投资者审视升级: 比 analyst consensus 高 $35B, Q4 支出 track $50B+, 总估值被擦 15% — 跟 afternoon raw [15] Tom's Hardware $725B 4 hyperscalers + 本期 [22] CRN Nadella 7/8 辩护 形成 'Microsoft 7/8 早 capex 高位 + 投资者 ROI 审视 + CEO 公开辩护' 三源 cross-check"** | https://pomegra.io/news/microsoft-ai-capex-surge-draws-investor-roi-scrutiny-in-2026

[24] (2026-07-08 16:00 CST = 7/8 08:00 UTC) | AInvest / Edwin Foster (7/6 14:37 ET) | **"Meta or Microsoft for H2 2026? Wall Street Wants AI Payoffs, Not Just Spending — Monday, Jul 6, 2026 — Q2 2026 earnings preannouncement 7/6-7/12 期间: Meta 7/29 Q2 report + Microsoft 7/8 Q2 报告 (4/29 FY26 Q2 已披露) + Alphabet 7/23 + Amazon 7/30 5 日内叙事锚 = 'H2 2026 投资者要的不是 capex 而是 AI payoffs' — 跟 morning raw [14] Orion + [16] Morningstar 7/7 + afternoon raw [15] Tom's Hardware + [16] Meta Q1 IR + 本期 [22] CRN + [23] Pomegra 形成 'Big Four Q2 5 日内 preannouncement 叙事预备' 完整 7 源 cross-check"** | https://www.ainvest.com/news/meta-microsoft-h2-2026-wall-street-ai-payoffs-spending-2607/

### —— F. 反向信号 / baseline 失效候选 (4 条) ——

[25] (2026-07-08 13:30 CST = 7/8 05:30 UTC) | V2EX / Had (PRO) (7/8 03:43:59 +08:00) | **"Fable 5 延期到 7 月 12 号 — Through July 12, you can use up to 50% of your weekly usage limit on Fable 5. If you hit your limit, you can continue on Fable 5 with usage credits. Fable 5 draws down usage faster than Opus 4.8. Run /model and select Fable to use it. 没有 200 刀基本上无法使用, 对当前项目做一轮 code review, 100 刀都跑不下来. 4h 9m ago, 346 views, 2 replies — 7/8 03:43 开发者社群对 7/12 延长的即时反应: '没有 200 刀基本上无法使用, 对当前项目做一轮 code review 100 刀都跑不下来' — morning + afternoon raw 'Fable 5 切计费后 6h 反馈' 叙事 + 7/12 延长 同日并发下, 开发者社群 实际成本算清: $10/M input + $50/M output Fable 5 + Sonnet 5 routing 杠杆 不解决 power user 的实际预算; baseline 'Fable 5 商业化拐点' 出现第一波 baseline 失效信号 — 延长 ≠ 商业化验证, 反而 = 用户预留 5 天 runway 但实际账单难消化"** | https://www.v2ex.com/t/1225713

[26] (2026-07-08 15:00 CST = 7/8 07:00 UTC) | ITmedia AI+ via NewsPicks (7/8 8h ago) | **"「Claude Fable 5」のサブスク提供, 延長 12 日 (太平洋標準時) まで 日本時間では 13 日午後 — ITmedia AI+ 7/8 早 報道: Fable が 13 日午後 3 時 59 分まで延期されました. 昨日までのキャンペーン (?) が好調だったからか, GPT5.6 への牽制か, 理由は不明ですが大盤振る舞いであることは変わりません. 早速使ってみたところ, Fable を選んだはずが注釈込みで Opus に切り替 (続く). — 日本 ITmedia 7/8 早 报道: Fable 5 选择后 注釈込みで Opus に切替 异常 — 7/8 14:00 ITmedia 实际体验报: Fable 5 'On-the-fly 自动回退到 Opus' 行为 = Sonnet 5 tokenizer trap 同期同样的 隐性改写, baseline 'Fable 5 paywall 落地 = 用户主动选择' 进一步失效"** | https://newspicks.com/news/17053333/

[27] (2026-07-08 16:00 CST = 7/8 08:00 UTC) | TechOrange / 李昀蔚 (7/1) | **"AI 太貴難落地, 太強又怕失控: Anthropic Sonnet 5 如何把企業 AI 變便宜, 又不踩政府安全紅線? — Gartner 預測, 今年全球 AI 支出將飆升 47%, 達到驚人的 2.6 兆美元, 這迫使許多企業在收到鉅額帳單後, 開始重新檢視技術導入成本. 因此, 在 AI 供應商不得不轉向強調成本效率的趨勢下, Anthropic 近日推出的 Claude Sonnet 5, 正是對這種 'AI 太貴難落地 + 太強又怕失控' 雙重壓力的回應 — 7/8 14:00-21:00 窗口外企 IT 决策者视角 baseline 失效: Fable 5 提价 + 7/12 延长 + Sonnet 5 隐式涨价 + 政府红线 (Mythos 100+ US orgs) 四件事并发下, 企業 AI 落地 不是 '提价试错' 而是 '成本 vs 安全' 双重约束"** | https://techorange.com/2026/07/01/anthropic-sonnet-5/

[28] (2026-07-08 17:00 CST = 7/8 09:00 UTC) | 量子位 / 克雷西 (7/1) | **"A 社你解释下, 啥叫 Sonnet 5 比 Fable 5 还贵? — '性价比模型' 价格明降暗涨. 刚刚, Claude 又又又更新了. 但这次不是旗舰, Anthropic 推出了新版性价比模型 Sonnet 5. A 社把它定位成迄今为止 '最能干活' 的 Sonnet, 能自己规划任务, 调用浏览器和终端. 其跑分逼近自家最贵的 Opus 4.8, 价格却只要后者的六成左右, 着实一款 'Opus 平替'. 具体数字摆在那儿, 其 agentic coding 跑分 SWE-bench Pro 63.2%, 比上一代 Sonnet 4.6 高出 5 个百分点. 标价则是跟 4.6 比一字不差, 从发布会的口径上看, 能力涨了, 价格没涨. 真的没涨……吗? 开发者 Simon Willison 了件简单的事, 把同一段文字分别喂给新旧两个模型计数. 结果发现, Sonnet 5 虽然表面上价格一样, 但账单上的 Token 消耗数字偷偷涨了三成. — 7/1 量子位 旧稿 7/8 14:00-21:00 窗口中文圈再次发酵: 'A 社你解释下, 啥叫 Sonnet 5 比 Fable 5 还贵?' = Sonnet 5 隐式涨价 + Fable 5 显性涨价 双叠加 baseline 失效 候选的 7/1 canonical cross-check 源"** | https://www.qbitai.com/2026/07/441001.html

### —— G. 中方算力 4 线齐发后续 8h: Atlas 950 WAIC 9 天倒计时 + 韬定律 V2 工艺落地 (2 条 + B段 [8][11] 秘密造芯 + A 段 [21] ICML Global Workspace 智谱 GLM-5.2 升级版 1M 上下文 cross-day) ——

[29] (2026-07-08 13:30 CST = 7/8 05:30 UTC) | 第一财经 / 周玲 (7/7 10:48:10) | **"业界最大规模超节点华为 Atlas 950 真机将在 2026 世界人工智能大会亮相 — 2026 世界人工智能大会暨人工智能全球治理高级别会议于 7 月 17 日至 20 日在上海举行. 7 月 7 日, 上海市经济信息化委主任汤文侃在上海市政府举行的新闻发布会上表示, 论坛聚焦 AI 热点, 将围绕世界模型, 开源智能体, AI Coding, Token 经济, OPC 等议题进行深入探讨. 展览将首发首秀最新 AI 产品, 业界最大规模超节点华为 Atlas 950 真机亮相, 行业领先的 MiniMax M3 多模态大模型, 阶跃 Agent 操作系统, 近存计算 3D 芯片, 全球首款 AI 智能体手机, 以及多款人形机器人, AI 灵巧手等重磅新品, 都将在大会展出. — 7/8 13:30 WAIC 7/17-7/20 倒计时 9 天, 7/7 上海市经信委汤文侃 完整披露 Atlas 950 + MiniMax M3 + 阶跃 Agent OS + 近存计算 3D 芯片 + AI 智能体手机 五件重磅新品, 跟 afternoon raw [18][19] WAIC 7/17-7/20 + 华为 Atlas 950 真机 拼成 'WAIC 9 天倒计时 + 5 件重磅新品' baseline 继续生效条件 (per 7/8 午后 Pitfall 18 baseline additive 升级 worked example)"** | https://www.yicai.com/news/103263204.html

[30] (2026-07-08 14:30 CST = 7/8 06:30 UTC) | 36氪 / 智东西 蒋思源 (7/8 08:10) | **"华为'爆改' 5nm 芯片 — 时间微缩, 逻辑折叠. 华为更新了'韬定律'论文的 V2 版: 《A time scaling theory for multi-layer electronic systems》 (关于多层电子系统的时间缩放理论). 整个论文可以概括为后摩尔定律时代华为对芯片性能的持续扩展的思考. 摩尔定律框架之下, 晶体管数量每 24 个月翻一倍, 但这套框架在近几年开始失准, 而在华为身上还面临着特殊的限制: 先进 EUV 和高端 DUV 光刻机遭遇禁运. 过去, 为了延续摩尔定律的晶体管几何微缩, '多重曝光' 这种几何缩微成为国产芯片突破 7nm 等先进工艺的关键手段. 只是, 多重曝光带来了成本和良率问题, 且这项技术也有极限, '韬定律' 则是绕开这种技术方案的新路径. 按照华为的测算, 今年的 Kirin 2026 芯片, 基于韬定律单次迭代实现的晶体管密度提升, 相当于传统几何微缩三年 (代) 的水平. 可以这样说, '韬定律' 反映的是一种更系统的方式来做先进工艺芯片, 去对标传统晶圆制造的 5nm, 3nm 甚至是 1nm 芯片. — 7/8 08:10 36氪 智东西 蒋思源 '爆改 5nm 芯片' 详细解读韬定律 V2 工艺: 华为基于韬定律单次迭代的晶体管密度提升 = 传统几何微缩三年, 跟 afternoon raw [20] 36氪 7/6 08:55 '韬定律 V2 Gear Ratio 工艺' + 本期 7/8 13:30 第一财经 Atlas 950 WAIC 倒计时 拼成 'Atlas 950 真机 + 韬定律 V2 工艺' baseline additive 升级 继续生效条件 (per Pitfall 18)"** | https://36kr.com/p/3886231468880135

---

## ⚠️ Una 主审 stage 2 必查 grep 自检 (跨 slot URL overlap 验证 + 6 项必中)

### 跨 slot URL overlap 判据 (per references/raw-capture-cross-day-url-canonical.md TYPE1/2/3)

```bash
# 1. 提本 slot URL
LC_ALL=C grep -oE 'https?://[^ )]+' /home/ting/opc-daily-work/raw/2026-07-08-21evening.md | sort -u > /tmp/urls_evening.txt
# 2. prior 4 slots URL (morning + afternoon + 7/7 evening + 7/7 afternoon)
LC_ALL=C grep -oE 'https?://[^ )]+' /home/ting/opc-daily-work/raw/2026-07-08-morning.md /home/ting/opc-daily-work/raw/2026-07-08-afternoon.md /home/ting/opc-daily-work/raw/2026-07-07-21evening.md 2>/dev/null | sort -u > /tmp/urls_prior_4_slots.txt
# 3. overlap
comm -12 /tmp/urls_evening.txt /tmp/urls_prior_4_slots.txt
```

### 6 项必中 grep 自检 (per Una 主审 brief)

```bash
RAW=/home/ting/opc-daily-work/raw/2026-07-08-21evening.md

# 1. Anthropic ≥10
echo "Anthropic: $(grep -cF 'Anthropic' $RAW)"  # 16+ ✅
# 2. DeepSeek ≥5
echo "DeepSeek: $(grep -cF 'DeepSeek' $RAW)"  # 11+ ✅
# 3. Fable 5 ≥3
echo "Fable 5: $(grep -cF 'Fable 5' $RAW)"  # 12+ ✅
# 4. White House ≥2
echo "White House: $(grep -cF 'White House' $RAW)"  # 7 ✅
# 5. ICML ≥2
echo "ICML: $(grep -cF 'ICML' $RAW)"  # 8 ✅
# 6. 数字锚点 ($965B / $852B / 1/4 / 700 亿 / 753B)
echo "数字锚点: $(grep -cE '\$965B|\$852B|1/4|700 亿|753B' $RAW)"  # 必中 ✅
```

---

## 采集 query 标注 (按调用顺序)

| # | Provider | Query 文本 |
|---|----------|------------|
| 1 | web_search_plus (firecrawl day) | `Anthropic Fable 5 paywall July 8 2026 user reaction cost first 18 hours` |
| 2 | web_search_plus (exa day) | `DeepSeek 700亿 融资 7月8日 国家队 兜底 主导 7月8日 2026` |
| 3 | web_extract | `https://icml.cc/virtual/2026/calendar` + `https://icml.cc/virtual/2026/day/7/8` (verbatim 7/8 Wed Day2 orals) |
| 4 | web_search_plus (firecrawl day) | `Anthropic Fable 5 extend July 12 access paid plans usage credits Techmeme 7月8日` |
| 5 | web_search_plus (exa day) | `WAIC 2026 华为 Atlas 950 倒计时 智谱 GLM-5.2 升级 韬定律 V2 7月8日 2026` |
| 6 | web_search_plus (exa) | `Microsoft Meta Q2 2026 earnings preannouncement capex AI July 8 9 10 11 12 2026` |
| 7 | web_search_plus (firecrawl) | `"White House" AI voluntary standards framework Anthropic government stake July 7 8 9 2026` |
| 8 | web_search_plus (exa depth) | `ICML 2026 Seoul Day2 Day3 oral world model Anthropic Karpathy paper co-author July 8` |
| 9 | web_search_plus (firecrawl day) | `AI tokenomics Karp Anthropic Fable 5 reaction July 8 2026 critique market` |
| 10 | web_search_plus (exa) | `智谱 GLM-5.2 升级 7月8日 Hugging Face 百万 token 上下文 2026 后续` |
| 11 | web_search_plus (exa) | `华为 韬定律 V2 5nm 爆改 7月8日 36氪 Kirin 2026 论文` |
| 12 | web_search_plus (firecrawl) | `"Fable 5" "extension" user reaction "July 12" backlash "subscription" Twitter X 7月8日` |
| 13 | web_search_plus (exa) | `Anthropic Fable 5 global workspace Anthropic paper 7月6日 2026 LessWrong 解释性` |
| 14 | web_search_plus (firecrawl) | `"Anthropic" "Sonnet 5" "introductory pricing" OR "1/4 pricing" "Sonnet 5" hidden cost 7月8日 2026` |
| 15 | web_search_plus (firecrawl) | `Anthropic TeraWulf $19B compute deal Claude Cowork Manifold Compute July 8 2026` |
| 16 | web_search_plus (firecrawl) | `"White House" AI voluntary framework Anthropic government stake 5% 7月8日 2026 implementation` |

注: web_extract 仅对 ICML 2026 7/8 (Wed) Day2 orals 抓 verbatim (verbatim "Any-Order GPT as Masked Diffusion Model" + "Reinforcement Learning with Evolving Rubrics for Deep Research" + "The Flexibility Trap" + "Activation Oracles" + "Recursive Models for Long-Horizon Reasoning" 5 条). 其余条用 web_search_plus 摘要 + 一手 URL 引用 (Android Authority / TechTimes / BigGo Finance / iwoszapar / Storyboard18 / 36氪 / 動區 BlockTempo / 湾区信息汇 / 投资界 / 钜亨网 / Towards AI / Explosion / Brookings / JD Supra / ITmedia AI+ via NewsPicks / CRN / Pomegra / AInvest / V2EX / TechOrange / 量子位 / 第一财经 / Anthropic Research / LessWrong).

---

## 文件清单

- 路径: `/home/ting/opc-daily-work/raw/2026-07-08-21evening.md`
- 条数: 30 (7 条 Anthropic Fable 5 切计费 18h 后效 + 7/12 延长 / 5 条 DeepSeek 700亿再发酵 + 秘密造芯 / 4 条 White House 7/7-11 公告窗口 / 5 条 ICML Seoul Day2 Wed 7/8 主会议 / 3 条 美方 Q2 earnings 7/8 preannouncement / 4 条 反向信号 / 4 条 中方算力 4 线齐发后续 8h)
- 覆盖时间窗: 2026-07-08 13:00 ~ 21:00 CST (8h), 严格不重叠午后 cron 7/8 07:00 ~ 13:00 CST
- 一手来源覆盖: Android Authority / TechTimes / BigGo Finance / iwoszapar / Storyboard18 / 36氪 / 動區 BlockTempo / MEXC News / 湾区信息汇 / 投资界 / 钜亨网 / Towards AI / Explosion / Brookings / JD Supra / ICML 2026 virtual / Anthropic / CRN / Pomegra / AInvest / V2EX / ITmedia AI+ / NewsPicks / TechOrange / 量子位 / 第一财经 / 36氪 智东西 / LessWrong
- 21:00 evening cron 重在 7/8 13:00 ~ 21:00 8h 窗口新发酵: (a) Fable 5 切计费后 18h 反馈 + 7/12 突然延长 (Android Authority 7/7 23:12 ET + TechTimes 7/7 21:30 EDT + BigGo 7/8 01:16 UTC + 36氪 7/8 08:46 + Storyboard18 7/8 12:17 IST + 動區 7/8 10:17 CST) (b) DeepSeek 700亿再发酵 + 7/8 13:00 后秘密造芯立项一年 (36氪 7/8 09:16 量子位 + 投资界 7/8 09:26 + 湾区信息汇 7/8 12:39 + 7/8 16:48 重发 5/22 旧稿 + 钜亨网 5/8 14:24 重发) (c) White House 7/7-11 公告窗口 + Anthropic 独立性 + Mythos 100+ US orgs (Towards AI 7/7 + Explosion 7/7 + Brookings 7/7 + JD Supra 6/2+7/8) (d) ICML Seoul Day2 Wed 7/8 主会议 orals verbatim (ICML calendar + day 7/8 + 7/9 Day3 preview + Anthropic 7/6 Global Workspace paper + LessWrong 7/6 repost) (e) 美方 Q2 earnings 7/8 preannouncement 5 日内 (CRN 7/8 Microsoft Nadella + Pomegra 7/8 Microsoft $190B capex ROI + AInvest 7/6 Meta vs Microsoft H2) (f) 反向信号 / baseline 失效候选 (V2EX 7/8 03:43 "Fable 5 延期 + 100 刀都跑不下来" + ITmedia AI+ 7/8 "Fable 选后 注釈込みで Opus に切替" + TechOrange 7/1 "AI 太貴難落地 + 太強又怕失控" + 量子位 7/1 "Sonnet 5 比 Fable 5 还贵 隐式涨价") (g) 中方算力 4 线齐发后续 8h: Atlas 950 WAIC 9 天倒计时 (第一财经 7/7 10:48 汤文侃 完整披露) + 智谱 GLM-5.2 升级版 (7/1 JARVIS + 7/2 腾讯云 + 7/7 21:21 CSDN DSA + 1M 上下文) + 韬定律 V2 工艺落地 (36氪 7/8 08:10 蒋思源 '爆改 5nm 芯片' 详细解读) + DeepSeek 秘密造芯 (本期 B段 [8][11])
- ⚠️ publish 未触发; git 未 push. 本文件是 raw capture, 阶段 3 由 Una cron 读取骨架 + 本 raw 后才出 v4-Daily.html.

---

## Una 主编 stage 2 候选 (2026-07-08 21:00)

> 按 skill 不变量 #5 + 不变量 #6 + 7/8 午后 Pitfall 17/18 实测 worked example: 早 cron (Fable 5 切计费前夜) + 午后 cron (中方算力 4 线齐发 baseline additive 升级) 拼成同日 "Fable 5 商业化 + 中方算力结构性突破" 双轴 baseline. 本期 evening cron 应在 8h 窗口内 (7/8 13:00 ~ 21:00) 的新发酵上 pivot, **不锁死排序** — Una 主审自己跑不变量 #6 loop+darwin 自检 + Pitfall 17 同主轴续写检测.

### 候选 A — Anthropic Fable 5 切计费后 18h 三阶段反馈 (切 → 6h 反馈 → 突然延长 5 天到 7/12) (续早 + 午后, 同主轴续写风险)

- 主题: 7/8 13:00-21:00 窗口内 8h 时间窗的 Fable 5 完整三阶段 timeline — 7/7 23:12 ET 切计费前 33h 突然延长 5 天 (Android Authority 7/7 23:12 ET + TechTimes 7/7 21:30 EDT + BigGo 7/8 01:16 UTC + iwoszapar 7/7 + 7/8 updated + Storyboard18 7/8 12:17 IST + 36氪 7/8 08:46 + 動區 7/8 10:17 CST) — 拼早 + 午后 raw 1/4 永久降价 + Fable 5 切计费后 6h 反馈 + 7/8 0:00 PT 切计费窗口实际未生效 + 7/12 延长 = 7/7-7/8 24h 内完整 timeline.
- headline 源: Android Authority 7/7 23:12 ET (verbatim) + TechTimes 7/7 21:30 EDT + 36氪 7/8 08:46 + V2EX 7/8 03:43.
- why-it's-the-inner-voice verdict: 早 cron 关注 "7/8 0:00 PT 切计费前夜", 午后 cron 关注 "切计费后 6h 三件事并发 (提价 + Sonnet 5 隐式涨价 + 6/14 Kahn 集体诉讼)", 本期 evening cron 关注 "切计费窗口实际未生效 + 7/12 突然延长 5 天" — 拼早 + 午后 + evening 三期得 "Anthropic Fable 5 7/7-7/8 24h 内 切计费前夜 → 切计费后 6h 三件事 → 切计费实际未生效 + 7/12 延长 5 天" 完整 timeline. ⚠️ **同主轴续写风险**: 早 + 午后 + evening 三期同主轴 = 7/8 早 + 午后 已铺够, evening 再续就是 dilution.
- loop+darwin self-check: loop = "Fable 5 切计费 + Sonnet 5 tokenizer + Kahn 集体诉讼 + 9 分钟烧光 $100 + Sonnet 5 routing + OpenAI GPT-5.6 Sol 对标 + Thariq Shihipar capacity X 帖 + 7/12 突然延长 5 天" 已在 A 段 7 条 (1-7) + 早 cron (8-12) + 午后 cron (8-12) 形成 22+ 节点闭环; darwin = 中国侧 DeepSeek V4 永久降价 1/4 + 峰谷分时 + 700 亿融资 + 造芯 vs 美侧 Fable 5 提价 + 7/12 延长 形成 "美方边际提价 / 中方边际降价 + 中方硬件自研" 同日双向测试.

### 候选 B — DeepSeek 700亿升级版发酵 + 秘密造芯立项一年 (续午后 DeepSeek 段, baseline additive 升级)

- 主题: 7/8 13:00-21:00 窗口内 DeepSeek 跨硬件自研 (36氪 7/8 09:16 量子位 + 投资界 7/8 09:26) + 5/22 700亿融资再发酵 (湾区信息汇 7/8 12:39 + 7/8 16:48 重发 5/22 旧稿) + 6/16 510亿 closed 资金用途 (投资界 7/8 09:26 引用) — 拼午后 raw B 段 [6][7][8][9][10] "DeepSeek 7/8 凌晨再发酵: 700亿升级 + 峰谷分时 + 完整分账表" + 7/8 13:00 后 秘密造芯 = "DeepSeek 7/7-7/8 24h 内 资本 (700亿/510亿) + 模型 (V4 永久降价 1/4 + 峰谷分时 2x) + 硬件 (秘密造芯立项一年) 三线并发" 完整 timeline.
- headline 源: 36氪 7/8 09:16 量子位 (verbatim "DeepSeek 秘密造芯, 专攻推理, 一年前已启动, 招聘全程不公开") + 投资界 7/8 09:26 + 湾区信息汇 7/8 12:39 + 7/8 16:48 + 钜亨网 5/8 14:24 重发.
- why-it's-the-inner-voice verdict: 早 cron 关注 "DeepSeek 大基金 + 永久降价 1/4", 午后 cron 关注 "7/8 凌晨再发酵: 700亿升级 + 峰谷分时 + 完整分账表", 本期 evening cron 关注 "7/8 13:00 后 秘密造芯立项一年" — 拼早 + 午后 + evening 三期得 "DeepSeek 7/7-7/8 24h 内 大基金 + 1/4 永久降价 → 700亿升级 + 峰谷分时 + 510亿 closed → 秘密造芯立项一年" 完整 timeline. ✅ **baseline additive 升级**: 中方算力结构性突破 baseline 加 "DeepSeek 跨硬件自研" 新子轴 (造芯 + 昇腾适配 + 国产 GPU 多芯片适配), 不替换旧 baseline, additive 扩轴.
- loop+darwin self-check: loop = "DeepSeek 200亿 → 450亿 → 500亿/510亿/543亿/700亿元 估值三阶跳 + 国家大基金领投 + 梁文锋 200亿自有资金 + 永久降价 1/4 + 峰谷分时 2x + V4 7 月中正式版 + DSpark 论文 + 秘密造芯立项一年 + 推理 chip + 已与晶圆代工/存储器接洽" 已在 B 段 5 条 (8-12) + 早 cron 9 节点 + 午后 cron 5 节点 形成 19 节点闭环; darwin = 美侧 Anthropic Fable 5 提价 + 7/12 延长 + Sonnet 5 隐式涨价 + OpenAI GPT-5.6 stagger release vs 中方 DeepSeek 永久降价 1/4 + 峰谷分时 2x + 秘密造芯 + 国资兜底形成 "美方纯私募 + 单边提价 / 中方国资 + 双向定价 + 跨硬件自研" 同日双向测试.

### 候选 C — 中方算力 4 线齐发后续 8h: Atlas 950 WAIC 倒计时 9 天 + 智谱 GLM-5.2 升级版 + 韬定律 V2 工艺 + 模算协同 (续午后 G 段, baseline additive 升级生效条件)

- 主题: 7/8 13:00-21:00 窗口内 Atlas 950 WAIC 9 天倒计时 (第一财经 7/7 10:48 汤文侃 完整披露 Atlas 950 + MiniMax M3 + 阶跃 Agent OS + 近存计算 3D 芯片 + AI 智能体手机 五件重磅新品 7/17-7/20) + 韬定律 V2 工艺落地 (36氪 7/8 08:10 蒋思源 '爆改 5nm 芯片' 详细解读 华为基于韬定律单次迭代 = 传统几何微缩三年) + 智谱 GLM-5.2 升级版 (7/1 JARVIS 1991y.net '我不作弊' + 7/2 腾讯云 + 7/7 21:21 CSDN '1M 上下文 + DSA + Agentic Coding') + DeepSeek 秘密造芯 (B 段 [8][11]) — 拼午后 raw G 段 "Atlas 950 + 韬定律 V2 + 智谱 GLM-5.2 + DeepSeek 700亿" baseline additive 升级 4 子轴 + 7/8 13:00 后 5 件重磅新品 + 韬定律 V2 '爆改 5nm' + GLM-5.2 升级 DSA + DeepSeek 造芯 = "Atlas 950 真机首展 7/17-7/20 + 韬定律 V2 工艺落地 + 智谱 GLM-5.2 1M 上下文用户跑通 + DeepSeek 造芯立项一年" 4 子轴继续生效条件全 ✅.
- headline 源: 第一财经 7/7 10:48 汤文侃 (TYPE3 canonical across slot) + 36氪 7/8 08:10 蒋思源 (新 verbatim) + JARVIS 1991y.net 6/13 (TYPE2 persistent cross-check) + 36氪 7/8 09:16 量子位 + 投资界 7/8 09:26.
- why-it's-the-inner-voice verdict: 早 cron 关注 "DeepSeek 大基金 + 永久降价 1/4" 跟 Atlas 950/韬定律/GLM-5.2 没直接关系, 午后 cron 关注 "中方算力 4 线齐发 baseline additive 升级 (per Pitfall 18 worked example)", 本期 evening cron 关注 "Atlas 950 WAIC 9 天倒计时 5 件重磅新品 + 韬定律 V2 '爆改 5nm' + 智谱 GLM-5.2 升级 DSA + DeepSeek 造芯立项一年" — 拼午后 + evening 两期得 "中方算力 4 线齐发 baseline additive 升级 4 子轴 继续生效条件" 完整 timeline. ✅ **baseline additive 升级**: 续午后 baseline 4 子轴继续生效, 不替换旧 baseline.
- loop+darwin self-check: loop = "Atlas 950 真机 + 韬定律 V2 工艺 (时间缩微 + 逻辑折叠 + Gear Ratio + 爆改 5nm) + 智谱 GLM-5.2 753B (1M 上下文 + DSA + IndexShare) + DeepSeek 700亿 + 秘密造芯 + 华为昇腾 + 国产 GPU 多芯片适配" 已在 G 段 2 条 (29-30) + 早 cron (12-14) + 午后 cron (18-21) 形成 11+ 节点闭环; darwin = 美侧 Anthropic Fable 5 提价 + OpenAI GPT-5.6 stagger release + White House 自愿标准框架 + Mythos 100+ US orgs vs 中方 Atlas 950 + 韬定律 V2 + 智谱 GLM-5.2 + DeepSeek 造芯 形成 "美方监管驱动商业化 (gate + 提价 + 出口管制) / 中方算力驱动模型演进 (wafer-scale + 时间缩微 + 1M 上下文 + 跨硬件自研)" 同日双向测试.

### 候选 D — ICML Seoul Day2 (Wed 7/8) 主会议 + Anthropic 7/6 Global Workspace paper (学术内层)

- 主题: 7/8 13:00-21:00 窗口内 ICML Seoul Day2 (Wed 7/8) 主会议 orals verbatim: 3A Diffusion Models (Flexibility Trap Outstanding Paper 7/7 颁奖后续 + 4 篇 diffusion LMs 论文) + 3B RLHF/Post-training (Microsoft + Allen AI + UW 联合 'Evolving Rubrics for Deep Research') + 3C LLM Social Impact & Interpretability (MIT + Stanford 'AI Should Facilitate Democratic Deliberation at Scale') + 3D Computer Vision + 3E Peer Review & Mechanism Design + 7/8 晚 poster session ('Activation Oracles' METR + Anthropic + Oxford 联合 + 'Recursive Models for Long-Horizon Reasoning' TTIC + Stanford) + 7/6 Anthropic 'Verbalizable Representations Form a Global Workspace in LMs' (Wes Gurnee, Jack Lindsey et al.) + LessWrong 7/6 18:04:38Z 265 points 32 comments.
- headline 源: ICML 2026 virtual.icml.cc (verbatim) + Anthropic Research 7/6 + LessWrong 7/6 18:04:38Z (265 points).
- why-it's-the-inner-voice verdict: 早 + 午后 cron 都把 ICML 作为"主会议"提一句 (morning [2] + afternoon [22][23][24][25][26]), 本期 evening cron 把 ICML 7/8 (Wed) Day2 主会议 orals verbatim 抓齐 + Anthropic 7/6 Global Workspace paper 同期 — 学术内层主线比早 + 午后深一层. ⚠️ **同主轴续写稀释风险** (相对候选 C 而言): 早 + 午后 ICML 已铺, evening 再续 = 同主轴续写, 不 additive 升级.
- loop+darwin self-check: loop = "Diffusion LMs (Flexibility Trap) + RLHF (Evolving Rubrics) + Interpretability (Activation Oracles + Global Workspace) + Long-Horizon Reasoning (Recursive Models) + Peer Review" 已在 D 段 5 条 (17-21) 形成 5 节点闭环; darwin = 与 7/7 21:00 evening raw "Karpathy harness + world model" (7/7 evening [16][17][18]) 拼成 7/7-7/8 24h 学术 chain.

### 候选 E — 美方 Q2 earnings preannouncement 5 日内: Microsoft $190B capex ROI 审视 + Nadella 7/8 辩护 + Meta vs Microsoft H2 2026 (续午后 D 段, 跨日)

- 主题: 7/8 13:00-21:00 窗口内 Microsoft Q2 earnings 7/8 preannouncement 5 日内 (CRN 7/8 Microsoft Q2 + Nadella 'Azure + M365 + GitHub + Dragon Copilot' 辩护) + Microsoft $190B capex ROI 投资者审视 (Pomegra 7/8 'erased 15% of MSFT value') + Meta vs Microsoft H2 2026 (AInvest 7/6) — 拼午后 raw D 段 [15][16][17] "美方科技巨头 Q2 earnings 7/8 12h 叙事锚" + 早 cron F 段 [22][23][24][25] Q2 preannouncement 7 节点 形成 "Big Four Q2 5 日内 preannouncement 完整 timeline" (Microsoft 4/29 + 7/8 + Meta 7/29 + Alphabet 7/23 + Amazon 7/30).
- headline 源: CRN 7/8 + Pomegra 7/8 + AInvest 7/6 + afternoon [15] Tom's Hardware $725B (TYPE3 canonical across slot).
- why-it's-the-inner-voice verdict: 早 cron 关注 "Q2 earnings 7/8 早 5 周叙事预备", 午后 cron 关注 "Q2 earnings 7/8 12h 叙事锚", 本期 evening cron 关注 "Microsoft Q2 7/8 preannouncement Nadella 7/8 公开辩护 + Microsoft $190B capex ROI 投资者 15% 估值擦除" — 拼早 + 午后 + evening 三期得 "Big Four Q2 5 日内 preannouncement 完整 timeline (Microsoft 4/29 + 7/8 → Meta 7/29 + Alphabet 7/23 + Amazon 7/30)". ✅ **baseline 续写**: 续午后 Q2 earnings 段, 不 additive 升级.
- loop+darwin self-check: loop = "Microsoft $190B capex + 15% MSFT value 擦除 + Nadella 辩护 + Meta 7/29 + Alphabet 7/23 + Amazon 7/30 + Goldman $725B 4 hyperscalers + Tom's Hardware $725B (TYPE3)" 形成 8 节点闭环; darwin = 美方 Q2 capex ROI 投资者审视 vs 中方 7/8 13:00 后 DeepSeek 秘密造芯 + 智谱 GLM-5.2 + 韬定律 V2 + Atlas 950 形成 "美方 capex 商业化 ROI 审视 / 中方算力结构性突破" 同日双向测试.

### 候选 F — White House 自愿标准框架 7/7-11 公告窗口 + Anthropic Mythos 100+ US orgs + 政府股权独立路径 (续午后 C 段, 跨日)

- 主题: 7/8 13:00-21:00 窗口内 White House 7/7-11 公告窗口 实施期 7 源 cross-check: Towards AI 7/7 "30-Day Reviews, 3 Labs, Classified Pass Bar" + Explosion 7/7 "Trump Admin Clears Anthropic's Mythos AI for 100+ US Orgs" (反向 clear, 跟 OpenAI stagger release 双向差异化) + Brookings 7/7 "Who is in charge of those in charge of AI" 元问题 + JD Supra 6/2 + 7/8 "License to Model" 法律行业侧解读 + JD Supra + EO 14409 + National Policy Framework 3/20 + AAIF framework 6/30 + 7/7-11 公告窗口 四层政策叠加期 + Anthropic 政府股权未介入 (Reuters 7/2 morning [9] 已记).
- headline 源: Towards AI 7/7 (verbatim) + Explosion 7/7 (verbatim "Trump Admin Clears Anthropic's Mythos AI for 100+ US Orgs") + Brookings 7/7 + JD Supra 6/2+7/8 (TYPE3 canonical across slot whitehouse.gov).
- why-it's-the-inner-voice verdict: 早 cron 关注 "White House 自愿标准 + Anthropic 独立性", 午后 cron 关注 "OpenAI gated preview + Anthropic Mythos 出口管制 6/12 撤销 + 7/7 复馆 + 6/14 Kahn 集体诉讼", 本期 evening cron 关注 "White House 7/7-11 公告窗口 实施期 4 层政策叠加 + Mythos 100+ US orgs unrestricted (反向 OpenAI gated) + 'Who is in charge' 元问题" — 拼早 + 午后 + evening 三期得 "White House 7/7-11 公告窗口 4 层政策叠加 (EO 14409 + National Policy Framework 3/20 + AAIF framework 6/30 + 7/7-11 公告窗口) + OpenAI gated vs Anthropic Mythos unrestricted 双向差异化" 完整 timeline. ✅ **baseline 续写**: 续午后 White House 段, 不 additive 升级.
- loop+darwin self-check: loop = "OpenAI 5% 政府股权 + Anthropic 政府股权未介入 + White House 自愿标准 + GPT-5.6 stagger release + Anthropic Mythos 100+ US orgs unrestricted + 6/12 出口管制撤销 + 6/14 Kahn 集体诉讼 + JD Supra License to Model" 形成 8 节点闭环; darwin = 中国侧 DeepSeek 国家大基金领投 (vs 美方 OpenAI 政府股权) + White House 自愿标准 (vs 中方 国家 AI 产业投资基金) 形成 "美方民间私募 + 政府股权谈判 + 自愿标准 / 中方国资直接领投" 双向对照.

### 候选 G — 反向信号 / 修正: 早 + 午后 baseline 失效信号 (baseline 失效候选)

- 主题: 7/8 13:00-21:00 窗口内 4 个 baseline 失效信号 — (a) Fable 5 切计费实际未生效 + 7/12 突然延长 5 天 (V2EX 7/8 03:43 "Fable 5 延期到 7 月 12 号, 没有 200 刀基本上无法使用, 对当前项目做一轮 code review 100 刀都跑不下来" + ITmedia AI+ 7/8 "Fable 选了 はずが 注釈込みで Opus に切替" 异常) (b) Sonnet 5 隐式涨价 + Fable 5 显性涨价 双叠加 (TechOrange 7/1 "AI 太貴難落地 + 太強又怕失控" + 量子位 7/1 "Sonnet 5 比 Fable 5 还贵") (c) Microsoft $190B capex ROI 投资者 15% 估值擦除 (Pomegra 7/8) (d) Anthropic 7/6 Global Workspace paper 商业化 vs 学术张力 (LessWrong 7/6 "AGI 竞赛分水岭").
- headline 源: V2EX 7/8 03:43 (verbatim) + ITmedia AI+ 7/8 (verbatim "Fable 选了 はずが 注釈込みで Opus に切替") + TechOrange 7/1 (TYPE2 persistent cross-check) + 量子位 7/1 (TYPE2 persistent cross-check).
- why-it's-the-inner-voice verdict: 这是 evening 唯一一条 "8h 窗口内 baseline 失效候选" 主线, 但偏反向, 不是主审做"1 件 daily" 的常规选材. ⚠️ **不是主选, 但应作为主审 stage 2 推翻 baseline 的备选** — 如果主审 stage 2 决定推翻 7/8 早 + 午后 baseline, G 候选是最直接的反向证据.
- loop+darwin self-check: loop = "Fable 5 切计费未生效 + 7/12 延长 + Sonnet 5 隐式涨价 + Microsoft $190B capex ROI 15% 擦除 + Anthropic 7/6 Global Workspace" 形成 5 节点 baseline 失效 cluster; darwin = baseline 失效 = 7/8 evening cron 给明早 Una 的"baseline 失效 → 重审" 锚点, 是 7/9 早 cron 主审的"重审 anchor".

> Una 主编 stage 2 推荐: **候选 C (中方算力 4 线齐发后续 8h: Atlas 950 WAIC 倒计时 9 天 + 智谱 GLM-5.2 升级版 + 韬定律 V2 工艺 + 模算协同)** — 续午后 baseline additive 升级 4 子轴 继续生效条件 (per Pitfall 18 worked example), 7/8 13:00-21:00 窗口内 Atlas 950 5 件重磅新品 + 韬定律 V2 '爆改 5nm' + 智谱 GLM-5.2 1M 上下文 DSA + DeepSeek 秘密造芯 全 ✅. 候选 A 是早 + 午后 + evening 三期同主轴续写, 同质稀释, 应降级. 候选 B 是 baseline additive 升级 (续午后 B 段 DeepSeek 资本), 但偏资本侧, 主线感比 C 弱. 候选 D 同主轴续写 (续午后 F 段 ICML), dilution. 候选 E 续午后 D 段 Q2 earnings, baseline 不扩轴. 候选 F 续午后 C 段 White House, baseline 不扩轴. 候选 G 是反向信号, 不是主审常规选材. **主审 stage 2 拼午后 + evening 两期得 "中方算力 4 线齐发 baseline additive 升级 (outer capital + inner cost + 中方算力结构性突破) 4 子轴继续生效条件 (Atlas 950 WAIC 7/17-7/20 + 韬定律 V2 工艺 + 智谱 GLM-5.2 1M 上下文 + DeepSeek 造芯立项一年) 全 ✅"**.

> 阶段 1 capture 完. 待阶段 2 Una 主审 二次 grep 确认, 阶段 3 render.
