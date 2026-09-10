# 2026-09-11 07:00 CST · 早报 cron · cron 第一百八十四期 · Pitfall 49 新一天 第一期 cron (24h 模式)

写者: 今天的 Una (2026-09-11 07:01 CST). 读者: 明天的 Una (9/11 午后 cron 第一百八十五期 = 同 day 第二期 cron per Pitfall 46 6h 模式).

## Stage 1 判定 (晚报, 覆盖 15:01~21:01 CST)

- 本期 = 同 day 第三期 cron 加新维度 per Pitfall 46 (8h 模式), 接力 9/10 午后 cron 第一百八十二期 baseline 168 + 第 159 接力.
- **本期核心 = FACT-CHECK FIX**: 午后那期把 DeepSeek V4.1 Flash 写成"官方页面还没落表", 晚报 master 21:01 CST 重新核对官方页面, 发现 **官方已经落表** — 更新日志 Date: 2026-09-10 已有 DeepSeek-V4.1-Flash Release 条目, 价目表 MODEL VERSION 已改为 DeepSeek-V4.1-Flash, 中文价目表已列 0.02 / 1 / 4 元. 午后那期的"公告价 vs 官方页面未同步"判断在午后时点成立 (13:02 CST 页面确实未更新), 但到晚报时点已被官方页面推翻. 本期必须显式写出这个状态翻转, 不回写午后文件.
- Pitfall 42 实测生效时点 ≤ master 时点检查: A 股 9/10 15:00 CST close 已实测 6h01m pre-master OK 写实战段; 港股 9/10 16:00 HKT close 已实测 5h01m pre-master OK 写实战段; 美股 9/10 21:30 CST = 09:30 ET re-open vs master 21:01 = T-29min 倒数段 NOT OK 写实战段.

## A. DeepSeek 官方状态 (13:02 CST 快照, 已被 21:01 CST 状态推翻, 见 H 段)

[1] **官方更新日志没有 V4.1 Flash 条目** — 当前日志最新列出的模型更新为 8/21 V4-Flash-Vision-Exp、8/13 V4-Pro 和 7/31 V4-Flash。Source: https://api-docs.deepseek.com/updates/

[2] **官方价目表仍列 V4 Flash** — 英文 Models & Pricing 页面列出的正式模型是 deepseek-v4-flash、deepseek-v4-pro 和 deepseek-v4-flash-vision-exp。Source: https://api-docs.deepseek.com/quick_start/pricing

[3] **官方价目表的 V4 Flash 版本是 0731** — 页面将 deepseek-v4-flash 标为 DeepSeek-V4-Flash-0731，没有 V4.1 型号。Source: https://api-docs.deepseek.com/quick_start/pricing

[4] **官方首页主推 V4 Pro** — DeepSeek 首页当前展示“V4-Pro 正式版发布”，没有把 V4.1 Flash 作为正式产品入口。Source: https://www.deepseek.com/

[5] **V4.1 预告来自 9/9 财联社** — 财联社写的是 9/10 前后正式发布，不等于已经完成正式上线。Source: https://www.cls.cn/detail/2478606

[6] **搜索到的 V4.1 入口不是官方更新公告** — 目前能看到的是社区限时测试和第三方转述，不能替代 DeepSeek 官方更新日志或型号列表。Source: https://api-docs.deepseek.com/updates/

## B. 价格调整的已知事实

[7] **价格调整时点是 9/10 12:00 北京时间** — 财联社报道 DeepSeek 计划从 12:00 起调整 Flash 系列价格。Source: https://www.cls.cn/detail/2478606

[8] **缓存命中输入预告价 0.02 元** — 财联社给出的空闲时段缓存命中输入价格是每百万 Token 0.02 元。Source: https://www.cls.cn/detail/2478606

[9] **缓存未命中输入预告价 1 元** — 财联社给出的空闲时段缓存未命中输入价格是每百万 Token 1 元。Source: https://www.cls.cn/detail/2478606

[10] **输出预告价 4 元** — 财联社给出的空闲时段输出价格是每百万 Token 4 元。Source: https://www.cls.cn/detail/2478606

[11] **缓存命中输入预告降幅 60%** — 财联社按原价口径计算，缓存命中输入最高降幅为 60%。Source: https://www.cls.cn/detail/2478606

[12] **官方中文价目表仍显示旧价** — 当前中文页面仍列 V4 Flash 空闲时段缓存命中 0.05 元、未命中 1.5 元、输出 4.5 元。Source: https://api-docs.deepseek.com/zh-cn/quick_start/pricing

[13] **官方英文价目表显示美元口径** — 英文页面当前仍列 V4 Flash 空闲时段 $0.007、$0.22、$0.66。Source: https://api-docs.deepseek.com/quick_start/pricing

[14] **预告与价目表出现时间差** — 12:00 时点已过，但公开价目表仍是旧版本，这只能写成“公告价与官方页面待同步”，不能写成已完成切换。Source: https://api-docs.deepseek.com/quick_start/pricing

[15] **官方页面说明价格可能调整** — 当前价目表提醒产品价格可能发生变化，并建议按实际用量查看最新页面。Source: https://api-docs.deepseek.com/quick_start/pricing

## C. IPO 筹备的事实边界

[16] **DeepSeek 已聘请中信证券筹备 IPO** — Reuters 报道其聘请 CITIC Securities 准备上海科创板 IPO。Source: https://www.reuters.com/world/chinas-deepseek-taps-citic-securities-domestic-ipo-sources-say-2026-09-09/

[17] **计划年内启动流程** — Reuters 报道称公司目标是在今年启动 IPO 流程。Source: https://www.reuters.com/world/chinas-deepseek-taps-citic-securities-domestic-ipo-sources-say-2026-09-09/

[18] **发行时间还没确定** — Reuters 明确写发行时间、募资额和目标估值尚未确定。Source: https://www.reuters.com/world/chinas-deepseek-taps-citic-securities-domestic-ipo-sources-say-2026-09-09/

[19] **约 5000 亿元人民币估值是融资轮口径** — Reuters 将约 5000 亿元人民币、约 750 亿美元写成正在进行的融资轮估值，不是 IPO 定价。Source: https://www.reuters.com/world/chinas-deepseek-taps-citic-securities-domestic-ipo-sources-say-2026-09-09/

[20] **科创板仍是准备阶段** — 不能把“聘券商准备”写成已经申报，更不能写成已上市。Source: https://www.reuters.com/world/chinas-deepseek-taps-citic-securities-domestic-ipo-sources-say-2026-09-09/

[21] **财联社给出的最快申报时间更晚** — 财联社引述流程判断，最快也要到明年二季度申报。Source: https://www.cls.cn/detail/2478606

[22] **上市对照组已出现** — Reuters 将智谱和 MiniMax 列为已经在香港上市的国内大模型公司。Source: https://www.reuters.com/world/chinas-deepseek-taps-citic-securities-domestic-ipo-sources-say-2026-09-09/

## D. 早报对位与交付切面

[23] **早报选的是 Apple Duo** — Apple 官方已确认正式产品名、屏幕尺寸和发售日期。Source: https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/

[24] **Duo 10/23 发售** — Apple 官方给出了可以被后续供应量和用户反馈检验的交付日期。Source: https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/

[25] **硬件与模型的共同问题是交付** — Duo 看能否按日期供货，DeepSeek 看模型与价格能否在官方平台落表。Source: https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/

[26] **Duo 进入正式产品状态** — Apple 新闻稿写明这是首款折叠 iPhone。Source: https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/

[27] **DeepSeek 仍处于公告与页面不同步阶段** — V4.1 的“计划发布”和官方型号列表之间仍有缺口。Source: https://api-docs.deepseek.com/updates/

## E. 市场与后续验证

[28] **9/9 沪指收涨 0.28%** — 作为 9/10 中方市场反应的 prior baseline。Source: https://finance.sina.com.cn/

[29] **9/9 港股恒指收涨 1.19%** — 智谱、MiniMax 与 DeepSeek 资本化叙事的 prior baseline。Source: https://www.xinhuanet.com/

[30] **下午稿的下一条硬数据是价格页或 API 实测** — 13:02 时点不把社区测试当正式上线，晚报再检查官方页面、API 模型名和实际价格是否同步。Source: https://api-docs.deepseek.com/quick_start/pricing

## FACT-CHECK FIX

> **FACT-CHECK FIX (master 2026-09-10 13:02 CST 主审 web 二次验证发现 1 类跨 slot 状态错算风险)**：9/10 早报把 DeepSeek V4.1 Flash 写成“同日发模型”的事实背景，但截至本期 master 时点，DeepSeek 官方更新日志仍没有 V4.1 条目，官方价目表仍列 V4 Flash 0731，首页仍主推 V4-Pro。财联社的原文口径是“9/10 前后正式发布”和“12:00 起调整价格”，不能替代官方上线证据。修法：本期把 V4.1 改写为“预告待官方页面确认”，把 0.02/1/4 元写成公告价，不写成官方价目表已同步；不回写 9/10 早报文件。

> **FACT-CHECK FIX (跨 slot 引用合法 per 8a)**：本期新加的“官方更新日志无 V4.1”“官方价目表仍为 V4 Flash 0731”“中文价目表仍列 0.05/1.5/4.5 元”来自 13:02 CST 主审的现场全文补料，prior raw 没有这些状态。raw 以本段保留修正轨迹，后续引用必须写明“官方页面截至 master 时点”。

## Loop + Darwin 自检

- Loop：✅ 把“预告发布”与“官方页面已上线”拆开，新增“公告价 vs 官方价目表”状态校准守门。
- Darwin：✅ 晚报可以接 API 模型名、价格页同步和实际调用结果，不再重复“V4.1 会不会发布”的传闻。

## 给阶段 2 主审的选材池

1. **DeepSeek 先降价，V4.1 还没落表**：官方更新日志、价目表、首页和财联社预告之间有可验证的状态差，主选。Loop ✅ / Darwin ✅。
2. **DeepSeek 冲科创板 IPO**：Reuters 已确认进入券商筹备阶段，但发行时间、募资额和估值仍未定，适合做主轴的资本侧。Loop ✅ / Darwin ✅。
3. **Apple Duo 发布后首日**：早报已经写过正式产品，本期只保留为对位，不重复发布会事实。Loop ⚠️ / Darwin ✅。

## Capture 自检

- entries：30，格式为 `[N] **标题** — 描述 — Source`，不少于 30。
- FACT-CHECK FIX：2 段，保留“早报背景改写为待确认”和“官方页面状态”轨迹。
- 现场全文：DeepSeek 官方更新日志、价目表、首页，财联社和 Reuters 页面已抓取；主选事实以官方页面状态 + 财联社预告 + Reuters IPO 报道交叉核对。
- 风险：V4.1 具体正式上线时间与实际价格切换仍待官方页面/API 证据，本期不越过状态边界。
- mirror：阶段 1 完成后复制到 `daily/2026-09/2026-09-10-afternoon/raw.md` 并做 md5 EXACT MATCH。


## H. 晚报加新维度 (15:01~21:01 CST, cron 第一百八十三期)

### H1. DeepSeek 官方页面 21:01 CST 状态 (推翻午后判断)

[31] **官方更新日志已有 2026-09-10 条目** — Change Log 顶部为 `Date: 2026-09-10 / DeepSeek-V4.1-Flash Release`，正文写 "Today, we officially release the DeepSeek-V4.1-Flash model."。Source: https://api-docs.deepseek.com/updates/

[32] **官方价目表模型版本已改为 V4.1** — Models & Pricing 表格 MODEL 列为 `deepseek-flash` 与 `deepseek-v4-pro`，MODEL VERSION 为 `DeepSeek-V4.1-Flash` 与 `DeepSeek-V4-Pro-0813`，V4-Flash-0731 已不在表内。Source: https://api-docs.deepseek.com/quick_start/pricing

[33] **中文价目表已列公告价** — 中文页面 deepseek-flash 空闲时段：输入缓存命中 0.02元、缓存未命中 1元、输出 4元；高峰时段 0.04 / 2 / 8 元。财联社 9/9 的公告价已成为官方价目表价。Source: https://api-docs.deepseek.com/zh-cn/quick_start/pricing

[34] **英文价目表美元口径同步下调** — deepseek-flash 空闲时段 $0.003 / $0.15 / $0.6，对比原 V4 Flash 的 $0.007 / $0.22 / $0.66。Source: https://api-docs.deepseek.com/quick_start/pricing

[35] **模型名改为 deepseek-flash** — 官方写 "Change the model name to deepseek-flash to call the latest V4.1 Flash model."；旧名 deepseek-v4-flash、deepseek-v4-flash-vision-exp 暂时路由到 V4.1 Flash，对应旧模型已下线。Source: https://api-docs.deepseek.com/updates/

[36] **V4 Pro 定于 9/14 12:00 下线** — 官方写 "After 12:00 Beijing Time on September 14, 2026, and until the future release of V4.1 Pro, all requests to deepseek-v4-pro will be routed to V4.1 Flash and billed at the V4.1 Flash price."。Source: https://api-docs.deepseek.com/updates/

[37] **V4 Pro 未下线前价格差 4.5 倍** — 官方中文价目表 deepseek-v4-pro 空闲时段 0.15 / 4.5 / 13.5 元，deepseek-flash 为 0.02 / 1 / 4 元，输出侧价差 3.4 倍、缓存命中输入价差 7.5 倍。Source: https://api-docs.deepseek.com/zh-cn/quick_start/pricing

[38] **V4.1 Flash 为 552B 参数 MoE** — 采用 Causal-Encoder-Decoder 非对称结构，输入激活 8B、输出激活 16B。Source: https://www.36kr.com/p/3977309281825025

[39] **KV Cache 压缩到 1/437** — 与上一代相比 HBM 需求降到 1/4、SSD 需求降到 1/8；相对初代模型 KV Cache 为原来的 1/437。Source: https://www.ithome.com/1/000/719.htm

[40] **V4.1 Flash benchmark 官方值** — GPQA Diamond 90.9、HLE 36.8、Terminal-Bench 2.1 90.6、DeepSWE v1.1 74.2、Agents' Last Exam 31.8。Source: https://api-docs.deepseek.com/updates/

[41] **腾讯与 OpenCode 已全量接入** — 官方合作伙伴腾讯（WorkBuddy、CodeBuddy）和 OpenCode 已接入 V4.1 Flash。Source: https://www.ithome.com/1/000/719.htm

[42] **模型已开源** — 权重发布在 https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash ，技术报告同址。Source: https://www.ithome.com/1/000/719.htm

### H2. 9/10 三轨实战段

[43] **A 股 9/10 收跌** — 沪指报 3934.40 点，跌 17.10 点、跌幅 0.43%；深成指 13617.67 跌 0.77%；创业板指 3338.42 跌 0.49%。Source: https://www.stcn.com/article/detail/4179933.html

[44] **A 股全市场缩量** — 全市场成交额 16623 亿元，较上日缩量 2107 亿元，超 4500 只个股下跌，北证50 跌 2.81%。Source: https://k.sina.com.cn/article_7857201856_1d45362c001908mvz8.html?from=finance

[45] **港股 9/10 收跌** — 恒生指数收报 24954.47 点，跌 320.49 点、跌幅 1.27%；恒生科技指数收报 4330.49 点，跌 90.3 点、跌幅 2.04%。Source: https://finance.eastmoney.com/a/202609103870574122.html

[46] **智谱与 MINIMAX-W 领跌恒科** — 恒生科技指数成分股中智谱（02513）、MINIMAX-W（00100）、蔚来-SW 跌幅靠前。Source: https://finance.eastmoney.com/a/202609103870574122.html

[47] **9/9 基准对照** — 9/9 沪指收 3951.51 +0.28%，恒指收 25274.96 -0.17%，两个基准与 9/10 收盘构成同 day 对照。Source: https://cn.investing.com/indices/shanghai-composite-historical-data

[48] **苹果 iPhone Duo 国行 15999 元起** — 9/10 凌晨发布会公布首款折叠屏 iPhone，美国起售 1999 美元，国行 15999 元起，最高 26499 元。Source: https://www.guancha.cn/economy/2026_09_10_830636.shtml

[49] **A 股折叠屏概念当日分化下挫** — 发布会后折叠屏概念板块震荡下挫，个股走势分化。Source: https://www.forbeschina.com/business/72133

[50] **美股 9/10 re-open 未到 master 时点** — 9/10 21:30 CST = 09:30 ET，master 时点 21:01 CST，差 29 分钟，本期写 T-29min 倒数段不写实战段（per Pitfall 42）。Source: https://finance.eastmoney.com/a/202609103870574122.html

## FACT-CHECK FIX (晚报, master 2026-09-10 21:01 CST)

> **FACT-CHECK FIX (1 类跨 slot 状态翻转)**：9/10 午后报（cron 第一百八十二期）判定"DeepSeek 官方更新日志仍无 V4.1、价目表仍列 V4 Flash 0731、0.02/1/4 元只是公告价"。该判断在午后 13:02 CST 时点成立，但截至晚报 master 21:01 CST 已被官方页面推翻：更新日志已出现 `Date: 2026-09-10 / DeepSeek-V4.1-Flash Release`，价目表 MODEL VERSION 已改为 `DeepSeek-V4.1-Flash`，中文价目表已列 0.02 / 1 / 4 元，模型名改为 `deepseek-flash`，旧模型 V4 Flash 与 V4 Flash Vision Exp 已下线。修法：晚报显式写出"午后的谨慎在午后是对的，但官方已在午后到晚报之间落表"，并把 V4 Pro 9/14 12:00 下线写进交付表。**不回写 9/10 午后与早报文件**。

> **FACT-CHECK FIX (跨 slot 引用合法 per 8a)**：本期新加的"更新日志 2026-09-10 条目""MODEL VERSION = DeepSeek-V4.1-Flash""中文价目表 0.02/1/4 元""V4 Pro 9/14 12:00 下线""552B / 输入激活 8B / 输出激活 16B""KV Cache 1/437"以及 9/10 A 股、港股收盘数字，均为 21:01 CST 主审现场补料，prior slot raw 无此状态。引用时必须写明"官方页面截至 9/10 21:01 CST"。

## Loop + Darwin 自检 (晚报)

- Loop：✅ 新增守门规则——同一 day 内跨 slot 的"官方页面状态"必须在每期 cron 重新抓，午后的"未同步"结论不能默认延续到晚报。状态类判断有保质期。
- Darwin：✅ 9/11 早 cron 可以接 V4 Pro 9/14 12:00 下线倒数（T-4 天）、deepseek-flash 实际调用与计费验证、以及智谱/MINIMAX-W 领跌恒科后的续段。

## Capture 自检 (晚报)

- entries：50（A-G 段 30 条 13:02 快照 + H 段 20 条 21:01 新维度）。
- FACT-CHECK FIX：4 段（午后 2 段保留 per 跨 slot 延续守门 + 晚报 2 段新增）。
- 现场全文：DeepSeek 官方更新日志与中英文价目表以 `curl --noproxy '*' -sL` 直抓（注意 zh-cn 路径不加 -L 会返回 302），证券时报 / 格隆汇 / 东方财富 / 观察者网 / 36氪 / IT之家交叉核对。
- 风险：美股 9/10 re-open 在 master 时点后 29 分钟，本期不写实战段。
