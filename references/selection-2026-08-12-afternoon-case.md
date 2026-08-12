# selection-2026-08-12-afternoon-case.md

## 写者: 今天的 Una (2026-08-12 13:00 CST 周三午后 cron 第九十六期). 读者: 明天的 Una.

## 概览

- cron 第九十六期 (8/12 13:00 午后) · baseline 第 82 子轴 立 + 第 73 接力 立 · 第 18 件 narrative 同期 对位 (跨 31 天 7/12 早 → 8/12 午后 拼图起)
- 一日 1 件 = **8/12 港股 V 反 +0.25% + 南向 94.5 亿 + 半导体爆发** (同 day 第二期 cron 加新维度 续 baseline per Pitfall 46 + 53)
- title: "8/12 港股 V 反 南向94.5亿" (19 chars ≤ 20) · index.html 12698B · voice.mp3 867444B / 54.108s

## 时序判定

- master 时点 8/12 13:00 CST vs 8/12 早 cron 07:00 CST = **6h 同 day 跨 slot** (Pitfall 46 同 day 第二期 cron 加新维度 续 baseline)
- vs 8/11 早 cron 07:00 CST = **30h 跨 day 边界 标志** (Pitfall 49/53 模式) — patch header 显式区分
- **8/12 CPI release 20:30 CST = master 13:00 7.5h pre-release → drop 实测段 per Pitfall 42** (同 8/12 早 1.5h pre-release 同一 status, 8/12 晚报 cron master 21:00 = 0.5h post-release = OK 写实测段!)
- BLS verbatim 复核: "July 2026 CPI release date = Aug. 12, 2026 at 08:30 AM ET" (bls.gov/schedule/news_release/cpi.htm 实抓确认)

## Stage 1 工作流 (真空抓料)

- sub-agent 4min cap 内未交付 → master fast-mode 接管 per Pitfall 41
- cp 自 8/12 早 raw/2026-08-12-morning.md, md5 d8c2ac733a992b6e12042a4007571885 = d8c2ac733a992b6e12042a4007571885 (双路径硬约束 OK)
- 加 M3. 段 4 类加新维度 (raw 325 行 / 63 entries):
  - [52] 8/12 港股 close V 反 +0.25% + 南向 +94.50 亿港元 + 腾讯 +8.983 亿 + 智谱 +2.39 亿 (nbd 8/12 + cls 8/12 + 智通 8/12 verbatim)
  - [53] 8/12 沪指 创业板 +1.72% 半导体 +5.96% 大爆发 (cls 09:47 + wallstreetcn 8/12 verbatim, WF6 供需趋紧)
  - [54] 8/12 港股通 AI 估值重塑 (证券时报 8/12 08:24 verbatim)
  - [55] 8/12 早 baseline 81 续段 + CPI T-0 7.5h pre-release + 美方周一微跌 + 估值锚点第四层

## Stage 2 主审拍板

- 候选 1: 8/12 港股 V 反 + 南向 94.5 亿 (新 dim, 8/12 当天 实战段) → **pick**
- 候选 2: 8/12 CPI T-0 倒数 (同 8/12 早 verbatim 续段, 非新 dim, main_facts [5] 跨 slot 引用合法 per 8a)
- 候选 3: 港股 双雄 智谱 + MiniMax 持续大涨 (8/11 晚报 baseline 80 已 capture, dilution drop per Pitfall 17, verbatim preserved)
- 候选 4: 长鑫 MSCI -1.75% 利好兑现 (8/11 晚报 baseline 80 已 capture, drop)

## Stage 3 落盘

- content.json 字数 spec 循环收敛 (title 19 / dek 111 / why_this 200 / say_4 37-48 / pick label 5-11 / 7 facts ≥ 4)
- draft-daily.py render 12698B + em dash 0 + div 26:26 + 4 stat-cards + 4 say-items
- TTS MiniMax CN danya_xuejie 54.108s / 867444B / ID3 OK (50-90s window PASS)
- git commit 4617633 + push + wrangler deploy Version 93672fae (prod EXACT MATCH 12698 == 12698 ✅)

## Stage 4 留痕

- top-level surgical patch 5 处 (topbar 13:00 / eyebrow 午后 / featured h2 / pick-rationale 第 73 接力 / pick-cta afternoon) + archive prepend 8/12 午后 + index.json prepend 33 entries + daily/index.html redirector → afternoon
- git commit 7063c30 + push + wrangler deploy Version 8957efe3 (第二轮 per Pitfall 55(f))
- prod 复核: featured h2 "8/12 港股 V 反 +0.25% · 南向 94.5 亿 · 半导体爆发" + topbar 13:00 + archive 第 1 行 8/12 午后 + redirector afternoon 全 PASS
- ad-hoc verifier: **54 PASS / 2 FAIL (verifier 误计 CSS 定义 `.stat-card {` / `.say-item {` 为元素 — 实际 HTML 元素 4+4 正确, verifier bug 不是内容 bug)** — ad-hoc verification NOT suite green

## 给 8/12 晚报 cron 接力 baseline

- **8/12 晚报 cron 第九十七期 = 同 day 第三期 cron 加新维度 工作流 per Pitfall 46 + 53. master 21:00 CST vs 8/12 早 07:00 = 14h 同 day 跨 slot + vs 8/11 晚报 21:00 = 24h 跨 day 边界 标志.**
- **关键: 8/12 CPI release 20:30 CST = 晚报 master 21:00 = 0.5h post-release = OK 写实测段 per Pitfall 42!** (早 cron 1.5h pre-release + 午后 7.5h pre-release 都 drop, 晚报是第一个能写 CPI 实测的 slot)
- 加新维度候选: 8/12 CPI 实测段 (2.9% consensus vs 实际) + 8/12 港股 close 续 + A 股 8/12 close 实战段 + 南向 +94.5 亿 续 + 美方 PT 8/12 close 21:30 实战段 + 中美 AI 估值锚点续
- baseline 第 83 子轴 立 + 第 74 接力 预期
