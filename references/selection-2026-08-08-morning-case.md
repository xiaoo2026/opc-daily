# selection-2026-08-08-morning-case.md — cron 第八十五期 8/8 早

## 主审拍板段

**一日 1 件 = 长鑫 MSCI T-2 + 8/7 三层齐创新高** (跨 day 边界 第一期 cron 加新维度 工作流 per Pitfall 49 + master fast-mode 接管 per Pitfall 41).

master 时点 8/8 07:00 CST (周六) = 跨 day 边界 第一期 cron (vs 8/7 早 cron master 时点 = 24h 跨 day 边界 标志). 6h 窗口全市场真空: 港股 (HKEX) 周末休市 + A 股 (SSE/SZSE) 周末休市 + 美方 NYSE/Nasdaq 8/7 close 后休市 + 欧方 LSE/Euronext 周六休市.

**候选菜单**:
- 候选 A (PICK): 长鑫 MSCI 8/10 T-2 决战 (8/7→8/10 = 3 天倒计时, 8/10 A 股开盘即生效) + 8/7 PT close 三层齐创新高 (S&P 7,757.64 +0.62% / Nasdaq 26,690.62 +1.30% / Dow 54,036.93 +0.28% / Russell 2000 3,034.49 +1.1% / VIX 15.15) + US 7 月 -23K jobs 意外 (Fed 9 月加息概率 55%→42%) + 8/7 港股大模型双雄齐大涨 (智谱 1,246 HKD +14.63% / MiniMax 326.40 HKD +9.83%) + 长鑫 8/7 close 52.48 +1.0% = **跨 day 边界 24h 真空段 + 8/10 A 股开盘即生效实战段** (baseline 第 71 子轴 立 + 第 62 接力)
- 候选 B (drop per Pitfall 17): AMD 8/7 PT drop per marketwatch (8/6 close $489.28 -6.99% 续跌, 跟 8/7 早 baseline 68 美方 双跌 同主轴跨日续写 dilution drop)
- 候选 C (drop per Pitfall 17): Bloomberg 中国 Show 8/7 DeepSeek 融资续段 (同主轴 dilution)
- 候选 D (drop per Pitfall 17): OpenRouter weekly 中国模型前十占八 (8/7 续 baseline, 同主轴 dilution)

**Loop + Darwin 自检** (不变量 #6):
- Loop ✅: SKILL.md 无新增 pitfall 需求 (Pitfall 49/53/41 全复用), raw.md 归档 92 entries
- Darwin ✅: baseline 71 子轴 可遗传 — 8/8 午后 cron 第八十六期 接力 = 跨 day 边界 第二期 cron baseline 72 子轴 + 第 63 接力 per Pitfall 53

## 跨 day 边界 第一期 cron 工作流 实战补 (Pitfall 49)

1. Stage 1 sub-agent 4min cap 内交付 raw (875 行 / 92 entries / md5 5ab60b9... mirror 一致) — sub-agent 实际抓了真实施段 (8/7 PT close 三层创新高 + US jobs + 港股双雄 + 长鑫 close + 休市日历), 不是纯 cp baseline
2. master 复核 (Pitfall 44): wc -l 875 ≥ 350 ✅ / entries 92 ≥ 30 ✅ / md5 双路径一致 ✅ / header 反映第八十五期 ✅ / tail cross-check ✅
3. Header patch: 清理 sub-agent 自动 patch 产生的重复 banner 行 (2 行 # 合并成 1 行)
4. Stage 2 主审: 6h 窗口全真空 → 用 raw verbatim baseline + 加新维度 8/7 PT close 三层创新高 + US -23K jobs + 长鑫 MSCI T-2 决战
5. Stage 3: content.json 5 轮 spec patch 收敛 (title 30→20 / dek 274→200 / why_this 402→200 / main_h2 70→49 / say_4 57→47) — per v0.8.13 循环收敛 spec 工作流, 不 render-推-verifier-反推
6. TTS: MiniMax CN danya_xuejie 57.024s / 914100B / ID3 / 32000Hz (50-90s window PASS)
7. Git: 3 commits (627b758 publish + 40c7671 fix STATE.md + top-level + ea52e53 fix raw mirror) + 2 wrangler deploys (f012e692 + 8939f370)
8. Top-level surgical patch (Pitfall 55 + 55(e) + 55(f)): topbar / eyebrow / featured h2 / pick-rationale / pick-cta href / archive prepend 8/8 早间 (5 件齐备: entry-date + time + title + type morning) — 用精确 anchor patch, 无 sed 误伤
9. Ad-hoc verifier: 34/35 → 35/35 PASS (git tree clean 后全绿) + prod EXACT MATCH 14992 = 14992 + top-level prod featured h2 长鑫 MSCI T-2 ✅

## 给 8/8 午后 cron 第八十六期 接力 baseline

跨 day 边界 第二期 cron 加新维度 per Pitfall 53 (master 时点 8/8 13:00 CST vs 8/8 早 07:00 CST = 6h 同 day 跨 slot, vs 8/7 午后 13:00 CST = 24h 跨 day 边界 标志):
- (a) 8/8 午后 港股 8/10 周一 开盘实战段 pre-market (周末真空续)
- (b) 8/8 午后 长鑫 MSCI 8/10 T-1 决战 (8/8→8/10 = 2 天倒计)
- (c) 8/8 午后 美方 8/7 PT close 三层创新高续 (8/7 PT 收盘后 30h+ 实战段)
- (d) 8/8 午后 高盛 ARR $13B + OpenRouter 续 baseline
- (e) 8/8 午后 US 7 月 CPI 8/12 倒计时 4 天 (per Barron 8/7 verbatim 'next week's inflation data will still likely be the deciding factor')
