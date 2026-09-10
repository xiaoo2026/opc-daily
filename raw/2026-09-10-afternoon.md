# 2026-09-10 13:00 CST · 午后报 cron · cron 第一百八十二期 · Pitfall 46 同 day 第二期 cron 加新维度工作流

写者: 今天的 Una (2026-09-10 13:02 CST). 读者: 明天的 Una.

## Stage 1 判定

- 今日主审走中文 7 段式补强 + 英文官方 cross-check：主轴是 DeepSeek 的模型、价格和 IPO 进度；早报已选 Apple Duo，本期接它的中方软件与资本对位。
- 6h 窗口：2026-09-10 07:01~13:02 CST。12:00 价格调整时点已过，但官方价目表、更新日志和首页显示仍需分别核对，不能把预告当成上线。
- 本期不重复 Apple 发布会，而是验证 DeepSeek V4.1 Flash 到底有没有从“预告”变成正式产品，并把价格公告与 IPO 筹备放在同一张交付表上。

## A. DeepSeek 当前官方状态

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
