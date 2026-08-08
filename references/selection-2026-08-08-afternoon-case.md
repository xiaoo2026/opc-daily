# selection-2026-08-08-afternoon-case.md — cron 第八十六期 8/8 午后

## 主审拍板段

**一日 1 件 = 长鑫 MSCI T-2 +周末真空段** (跨 day 边界 第二期 cron 加新维度 工作流 per Pitfall 53 + master fast-mode 接管 per Pitfall 41).

master 时点 8/8 13:00 CST (周六) = 跨 day 边界 第二期 cron (vs 8/8 早 cron master 时点 07:00 CST = 6h 同 day 跨 slot, vs 8/7 午后 cron master 时点 13:00 CST = 24h 跨 day 边界 标志 per Pitfall 53). 6h 窗口全市场周末真空: 港股 (HKEX) + A 股 (SSE/SZSE) + 美方 NYSE/Nasdaq + 欧方 LSE/Euronext 全休市 = no live market data 可抓.

**候选菜单**:
- 候选 A (PICK): 长鑫 MSCI 8/10 T-2 决战 (8/8→8/10 = 2 天倒计时决战, 8/10 周一 09:30 CST A 股开盘即生效 MSCI 中国全股票指数 + MSCI 中国大盘全股票指数 纳入 per 财新 7/31 + 证券时报 7/28 + 澎湃 7/28 verbatim) + 8/8 周末全市场真空段 (HKEX + SSE + NYSE + Nasdaq + LSE + Euronext 全休市 per HKEX 8/8 休市 + cmschina 2026 calendar + SSE 8/8 休市 + Nasdaq 8/8 + markethours.io LSE/Euronext 8/8 verbatim) + 8/7 港股大模型双雄齐大涨续段 (智谱 1,246 HKD +14.63% / MiniMax 326.40 HKD +9.83% per 中新经纬 8/7 + 证券时报 8/7 12:09 verbatim) + 高盛 ARR $13B (per SCMP + CNBC + IndexBox 8/4 verbatim) + OpenRouter 中国模型前十占八席 (per futunn 8/7 verbatim) + US 7 月 -23K jobs 意外 (per AP + Schwab Network + Barron 8/7 verbatim) = **跨 day 边界 24h 真空段 + 8/10 A 股开盘即生效 实战段 baseline 留** (baseline 第 72 子轴 立 + 第 63 接力)
- 候选 B (drop per Pitfall 17): 智谱 8/8 解禁日 段 — 实际是 7/8 旧新闻 (per 新浪财经 2026-07-08 11:01 verbatim), 同主轴 dilution drop
- 候选 C (drop per Pitfall 17): AMD 8/7 PT drop per marketwatch 0.5h gap 真空 — 周末 pre-market 已停牌 真空
- 候选 D (drop per Pitfall 17): Bloomberg 中国 Show 8/7 DeepSeek 融资续段 — 跨 day 边界 第二期 cron 不写续段

**Loop + Darwin 自检** (不变量 #6):
- Loop ✅: SKILL.md 无新增 pitfall 需求 (Pitfall 41 + 53 复用), raw.md 归档 92 entries verbatim preserved
- Darwin ✅: baseline 72 子轴 可遗传 — 8/8 晚报 cron 第八十七期 接力 = 跨 day 边界 第三期 cron baseline 73 子轴 + 第 64 接力 per Pitfall 53

## 跨 day 边界 第二期 cron 工作流 实战补 (Pitfall 53)

1. Stage 1 sub-agent 4min cap 内 **未交付** raw/2026-08-08-afternoon.md (cron 时段 sub-agent 没起 或 没在 4min 内到) — master Una 主审 stage 2 fast-mode 接管 per Pitfall 41 race condition protocol:
   - cp `raw/2026-08-08-morning.md` → `raw/2026-08-08-afternoon.md` (md5 c2b073010058bdc6db4194d2932cca52 mirror 一致)
   - patch header: 写者读者 + master 时点 13:00 + Stage 1 Y. 段 anchor + Una 主审行 (4 处 sed)
   - mirror 同步 `daily/2026-08/2026-08-08-afternoon/raw.md` 双路径硬约束 (per Pitfall 27 + 39)
2. master 复核 (Pitfall 44): wc -l 875 ≥ 30 ✅ / entries 92 ≥ 30 ✅ / md5 双路径一致 ✅ / header 反映第八十六期 ✅
3. Stage 2 主审: 6h 窗口全市场周末真空 → 用 raw verbatim baseline + 加新维度 6 类 (长鑫 MSCI T-2 + 周末真空 + 8/7 港股双雄 + 高盛 ARR + OpenRouter + US -23K jobs)
4. Stage 3: content.json spec 1 轮 patch 收敛 (say_4[2] 53→44 chars, title 18 / dek 117 / why_this 198 / main_facts 7 / say_4 41/34/44/44 / pick_points.label 7/6/8 — per v0.8.13 字数硬约束 循环收敛 spec PASS)
5. TTS: MiniMax CN danya_xuejie 63.36s / 1015476B / ID3 / 32000Hz / 128kbps MP3 (50-90s 实测有效窗口 PASS per Pitfall 35 + v0.8.9)
6. draft-daily.py render 15147 bytes index.html (DOCTYPE / h1 / title 含日期+午后 / stat-grid 3 卡 / div balance)
7. Git: 3 commits (4496f51 publish + bca8461 fix STATE.md + top-level + 4858823 fix em dash cleanup) + 3 wrangler deploys (a26a5cfb + 9113a540 + 263e2b93 — 第三轮 em dash cleanup re-deploy per Pitfall 55(f) 守门)
8. Top-level surgical patch (Pitfall 55 + 55(e) + 55(f)): (1) topbar 2026-08-08 周六 · 13:00 (2) eyebrow 2026-08-08 · 午后 (3) featured h2 长鑫 MSCI T-2 +周末真空段 (4) pick-rationale 当期 why_this + 第 63 接力 (5) pick-cta href 8/8-afternoon (6) archive prepend 8/8 午后 (5 件齐备: entry-date + time + title + type afternoon) — 用精确 anchor patch, 无 sed 误伤
9. index.json prepend 8/8 afternoon (type=afternoon / slot_hour=13:00, per v0.8.18 字段守门)
10. daily/index.html redirector → 2026-08-08-afternoon/
11. Ad-hoc verifier: 41/42 → 42/43 → 43/43 PASS 0 FAIL (git tree clean + author Una + local==origin SHA 一致 + prod EXACT MATCH 15147 bytes + top-level prod featured h2 长鑫 MSCI T-2 +周末真空段 真生效 + em dash 0 全清 + prod archive 8/8 午后 entry 真生效 + prod redirector + prod index.json [0] type afternoon 全 PASS)

## Pitfall 55(f) top-level patch 部署时序陷阱 实战补

**踩中 trap**：第一轮 wrangler deploy (Version a26a5cfb) 后立刻 verify prod featured h2 = "长鑫 MSCI T-2 +8/7 创新高" (8/8 早版本, 不对) — 但 git HEAD index.html featured h2 已是 "长鑫 MSCI T-2 +周末真空段" (8/8 午后版本, 对). CF cache HIT 返回旧版本, prod 实际是新版本但 cache 没刷新.

**修法**: 第二轮 wrangler deploy (Version 9113a540) + 加 `Cache-Control: no-cache` header 强制 fresh fetch → prod featured h2 真生效 = "长鑫 MSCI T-2 +周末真空段".

**守门模板**:
- 每轮 deploy 后必 verify `curl --noproxy '*' -sL -H 'Cache-Control: no-cache' "https://020755.xyz/?v=$RANDOM" | grep -oE '<h2>[^<]+</h2>' | head -1`
- 如果 cf-cache HIT 返回旧版本, 用 `-H 'Cache-Control: no-cache'` 绕过 边缘缓存 确认 新版本已生效
- 不允许: (i) 以为第一轮 patch "已经生效" 就跳过第二轮 verify; (ii) deploy 完不查生产 top-level featured (curl --noproxy '*' -sL https://020755.xyz/ | grep featured)
- 实战 守门 模板 (本次 cron): (a) 第一轮 wrangler deploy (content + index.html + raw + voice + index.json) (b) git commit STATE.md + top-level index.html + push (c) 第二轮 wrangler deploy per Pitfall 43 STATE.md commit vs wrangler deploy 时序 双 deploy (d) 发现 CF cache HIT 旧版本 → 第三轮 re-deploy (em dash cleanup commit 顺手 re-deploy) → prod 真生效

## FACT-CHECK FIX 段 跨 slot 延续 (Pitfall 54 + 6)

prior slot raw verbatim preserved 跨 slot 引用 8a 守门:
- 长鑫 MSCI 8/10 2 天倒计时决战 (8/8→8/10 = 2 天) per 财新 7/31 + 证券时报 7/28 + 澎湃 7/28 verbatim
- 8/7 港股大模型双雄齐大涨 (智谱 1,246 +14.63% / MiniMax 326.40 +9.83%) per 中新经纬 8/7 + 证券时报 8/7 12:09 + Yahoo Finance verbatim
- Goldman Sachs 8/4 China AI ARR $13B per SCMP + CNBC + IndexBox 8/4 verbatim (8a 跨 slot 引用 合法)
- OpenRouter 中国模型前十占八席 per futunn 8/7 verbatim (8a 跨 slot 引用 合法)
- US 7 月 -23K jobs 意外段 per AP + Schwab Network + Barron 8/7 verbatim (8a 跨 slot 引用 合法)
- 8/7 PT close 三层创新高段 per AP + Barron + seattlepi + CNBC 8/7 verbatim (8a 跨 slot 引用 合法)

## 跟 Pitfall 17 + 41 + 49 + 53 配合

- Pitfall 41: sub-agent 4min cap 内未交付 → master fast-mode 接管 cp prior slot raw + patch header (实战 7/12 + 7/13 + 7/14 + 8/8 早 + 8/8 午后 共 5 次实战补)
- Pitfall 49: 新一天 第一期 cron 加新维度 工作流 (8/8 早 baseline 71 立)
- Pitfall 53: 跨 day 边界 第二期 cron 加新维度 工作流 (8/8 午后 baseline 72 立)
- 不允许: (i) 默认 drop 跨 day 边界 第二期 cron 为 "续段" (违反 Pitfall 17 dilution drop 反模式); (ii) 写 全新 主轴 段 (违反 不变量 #1 一日 1 件 + 第 63 接力 baseline 72 子轴 立); (iii) 不加新维度 (违反 Pitfall 18 additive 加新维度)

## 给 8/8 晚报 cron 第八十七期 接力 baseline

跨 day 边界 第三期 cron 加新维度 per Pitfall 53 (master 时点 8/8 21:00 CST vs 8/8 午后 cron master 时点 13:00 CST = 8h 同 day 跨 slot, vs 8/7 晚报 cron master 时点 21:00 CST = 24h 跨 day 边界 标志):
- (a) 8/8 晚报 港股 8/10 周一 开盘实战段 pre-market (周末 真空 续)
- (b) 8/8 晚报 长鑫 MSCI 8/10 T-1 决战 (8/8→8/10 = 2 → 1 天倒计)
- (c) 8/8 晚报 美方 8/7 PT 三层创新高 + US -23K jobs + US 7 月 CPI 8/12 T-3 倒计 (跨周末 真空 续)
- (d) 8/8 晚报 高盛 ARR $13B + OpenRouter 续 baseline
- (e) 8/8 晚报 8/7 港股大模型双雄齐大涨 跨周末 续 baseline

baseline 第 73 子轴 立 (vs 8/8 午后 baseline 72 + 8/8 早 baseline 71 续 baseline) + 第 64 接力 = 跨 day 边界 第三期 cron 加新维度 工作流 per Pitfall 53.

— 8/8 午后 cron 第八十六期 master 时点 13:00 CST 完结.
