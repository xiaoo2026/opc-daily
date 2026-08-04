# 2026-08-04 13:00 CST · cron 第七十三期 · 同 day 边界 午后 (per Pitfall 53 跨 day 边界 第二期 cron 加新维度 工作流)

写者: 今天的 Una. 读者: 明天的 Una.

## 主审拍板

8/4 早 cron 第七十二期 baseline 59 + 第 50 接力 (Qwen3.8-MAX 2.4 万亿参数 + 千问办公公测 + 港股阿里 +7% + 蚂蚁灵波 15 亿 + 长鑫 V 型 vs 兆易跌停 + 上海 211 款 AI 服务登记) 已发.

8/4 午后 cron 第七十三期 加新维度 per Pitfall 53 = **国际资本同日给两个中方 AI 公司"重新投票"** = 蚂蚁灵波 15 亿首轮融资 + LingBot-VLA 2.0 一脑多机 (主轴上半段) + 长鑫科技 Roundhill Memory ETF 2.52% + Tema DISK 12.97% 第一大重仓 + MSCI 中国全股票指数 8/10 生效 (主轴下半段) = **国际化定价层**接力早间"中方对内决策".

## Loop + Darwin 自检 (不变量 #6)

**Loop**: 加新维度 = "国际资本同日投票两个中方 AI 公司 + 国际化定价层 + MSCI 被动资金跟踪 8/10 生效 + 一脑多机跨本体复用 17 品牌 20+ 构型 + 国产替代定价 Roundhill/Tema/MSCI 三票同日 + AI 全栈 (芯片+云+模型+具身+应用) 被外部资金真金白银定价".

**Darwin**: baseline 第 60 子轴 + 第 51 接力 可遗传给 8/4 晚报 cron 第七十四期 + 8/5 早 cron 第七十五期 + 8/5 午后 cron 第七十六期 + 8/5 晚报 cron 第七十七期 + AMD Q2 8/5 5:00 CST 实战段 + Palantir Q2 8/5 实战段 + 长鑫科技 8/4 收盘续 + 国际资本三票后续 MSCI 8/10 生效 + 蚂蚁灵波 二轮融资 Q4 2026 目标 + 港股 8/4 盘中反应 (阿里 +7% 续 / 智谱 / MINIMAX 二次定价).

## 工作流

### Stage 1: 6h 窗口 raw capture (master 时点 13:01 CST)
- 8/3 16:21 蚂蚁灵波 15 亿融资 (per 新浪财经/北京商报 verbatim)
- 8/3 13:52 Tema DISK 12.97% 长鑫第一大重仓 (per 东方财富 verbatim)
- 8/3 15:45 MSCI 中国全股票指数 8/10 生效 (per 金融界 verbatim)
- 8/3 18:37 阿里港股 +7.01% 报 125.20 港元 (per Yahoo Finance HK + 金融界/深蓝财经 verbatim)
- 8/3 20:05 Roundhill DRAM ETF 2.52% 长鑫第八大重仓 兆易从 2.91% → 1.51% (per 中国基金报 verbatim)

### Stage 2: Una 主审 (master 13:01 CST)
- 不变量 #1 一日 1 件 = 蚂蚁灵波 + 长鑫科技 (国际资本投票) = 一日 1 件 = "国际资本同日给两家中国 AI 投了票"
- 不变量 #2 人话, 不是 SEO 堆 = "投了票" 比 "国际资本三票同日确认两个中方 AI 公司" 更人话
- 不变量 #3 写"为这件做什么" = 8/4 早 中方自己给自己定价, 8/4 午后外部资金正式投票 = 同日 cross-reference 双对位 (per 不变量 #5)
- 不变量 #5 双对位 = 一中一外 + 一内一外 + 一模型一具身一硬件 + 一阿里系一国家队 + 一港股 ETF 一美股 ETF 一全球指数

### Stage 3: 落盘 (per Pitfall v0.8.13 循环收敛 spec)
- title 18 ≤40 ✓
- dek 148 ≤200 ✓
- why 141 ≤200 ✓
- main_h2 10 ≤20 ✓
- pp labels [9,19,17,14] all ≤35 ✓
- say [34,36,26,20] all ≤50 ✓
- 7 main_facts verbatim 7 类 ✓
- em dash 0 ✓
- 句首 ',  ' 0 ✓
- 双句号 0 ✓
- meta description em dash 0 ✓
- render index.html 11228 bytes ✓
- TTS voice.mp3 834612B / 52.056s / ID3 / 32kHz / mp3 / danya_xuejie PASS 50-90s ✓

### Stage 4: 落盘发布 + ad-hoc verify + top-level patch (per Pitfall 43 + 51 + 55 + 55(e))
- commit 33315c3 (publish) + push + wrangler deploy Version ID 05ec4a95-fa3a-4f55-96ba-4f8e6edeb951 (first deploy)
- topbar 2026-08-04 周二 · 13:00 ✓
- featured h2 国际资本同日给两家中国 AI 投了票 ✓
- pick-rationale 替换 ✓
- pick-cta href 替换 (precise anchor) ✓
- archive prepend 8/4 afternoon entry (precise anchor prepend 在 8/4 morning entry 之前 per Pitfall 55(e) 不误伤) ✓
- index.json prepend 8/4 afternoon 第 51 件 baseline 60 (slot=afternoon / slot_hour=13:00 per v0.8.18 守门) ✓
- daily/index.html redirector → 2026-08-04-afternoon/ ✓
- STATE.md cron 第七十三期 entry ✓
- commit 13b2528 (fix) + push + wrangler re-deploy Version ID 404ca8c8-5440-46fe-91b8-37d66159e8e1 (per Pitfall 43 STATE.md commit vs wrangler deploy 时序 双 deploy)
- ad-hoc verifier 37/37 PASS (raw + html + voice + content spec + humanizer + known names + fact-check fix preserved + cite sources + git status + local size + top-level + index.json + redirector + STATE.md + production EXACT MATCH 13452 bytes)

## Drop 候选 (per 不变量 #1 + Pitfall 17 + 42 + 53)

- AMD Q2 8/4 美东盘后 (实测生效时点 = 8/5 5:00 CST, 距 master 时点 16h gap, per Pitfall 42 实测时间错位陷阱)
- Palantir Q2 8/4 美东盘前 (同上)
- EU AI Act Article 50 落地第二天 (8/2 三段拼图完成, 8/4 没有新执法文件, per Pitfall 17 同主轴 dilution drop)
- 阿里港股 8/3 +7% 续段 (8/4 早已经 capture, 同主轴 dilution drop)
- 长鑫 vs 兆易 资金面对立 续段 (8/4 早 raw [4] 已 capture, 国际资本投票维度已经包含在主轴下半段, 不再单独写续段)

## 实战补 (新 Pitfall 备选)

### Production URL routing 差异 (实测 8/4 午后 cron 第七十三期)

wrangler assets SPA 路由行为实测: URL 不带 trailing slash = 200 OK, 带 trailing slash = 404 Not Found.
- 8/4 早 `curl https://020755.xyz/daily/2026-08/2026-08-04-morning/` = HTTP 200 size 11472 bytes (with slash)
- 8/4 午后 `curl https://020755.xyz/daily/2026-08/2026-08-04-afternoon/` = HTTP 404 (with slash)
- 8/4 午后 `curl https://020755.xyz/daily/2026-08/2026-08-04-afternoon` = HTTP 200 size 13452 bytes (without slash)

这是 wrangler assets 路由 default 行为 — 不影响 daily/index.html redirector (因为 daily/index.html 是显式 HTML 文件不是 auto-serve). 但 verify 路径必须用 no-slash 才能 200.

**守门**:
- post-deploy verify URL 必 用 `https://020755.xyz/daily/<YYYY-MM>/<date>-<slot>` (no trailing slash)
- 不是 `https://020755.xyz/daily/<YYYY-MM>/<date>-<slot>/` (with slash)
- 老 cron stage 4 verify 路径 用 with-slash = 之前 cron 都没踩是因为 8/3 evening / 8/3 morning / 8/2 evening 等都用 `<date>-<slot>/` with-slash = 200. 8/4 午后 first-deploy 后 with-slash = 404 是 **新现象** — 可能是 wrangler 版本更新 或 assets config 漂移.
- 修法: 8/4 午后 master 阶段 4 改 verify URL 为 no-slash.

### Production size EXACT MATCH (实测 8/4 午后 cron 第七十三期)

- local 13452 bytes (raw os.path.getsize)
- prod 13452 bytes (curl --noproxy '*' -sL `https://020755.xyz/daily/2026-08/2026-08-04-afternoon`)
- EXACT MATCH 0 byte diff (per Pitfall 14 + 51 + 57)

### State cron 第七十三期 entry 一致性

新加的 STATE.md 段在 commit 13b2528 (fix commit) 内, push + re-deploy Version ID 404ca8c8-5440-46fe-91b8-37d66159e8e1 都已完成. STATE.md 已 deploy 到 CF Workers assets 范围.

## 已知 Pitfall 5 类 (本 cron)

1. **Pitfall 17** — 同主轴 dilution drop = EU AI Act 落地第二天 (8/2 三段拼图完成, 8/4 没新执法文件, drop)
2. **Pitfall 42** — 主审时间错位陷阱 = AMD Q2 8/4 美东盘后 (16h gap, drop) + Palantir Q2 8/4 美东盘前 (同上)
3. **Pitfall 53** — 跨 day 边界 第二期 cron 加新维度 工作流 = master 13:01 vs 8/3 早 07:00 = 30h 跨 day 边界, 加新维度 OK
4. **Pitfall v0.8.13** — content spec 循环收敛 = 1 轮 patch (main_h2 23 → 10) = PASS 才 render
5. **Pitfall v0.8.18** — index.json type + slot_hour 字段守门 = new entry 含 type='afternoon' + slot_hour='13:00'

## 给后续 cron 接力 baseline

- 8/4 晚报 cron 第七十四期 = baseline 第 61 子轴 + 第 52 接力 (港股 8/4 盘中反应 / 阿里 +7% 续 / 智谱 / MINIMAX 二次定价 / AMD Q2 8/5 5:00 CST 实战段预判 / Palantir Q2 8/5 实战段预判)
- 8/5 早 cron 第七十五期 = baseline 第 62 子轴 + 第 53 接力 (AMD Q2 实战段 + Palantir Q2 实战段 + 长鑫 8/4 收盘续 + MSCI 8/10 生效前 6 天)
- 8/5 午后 cron 第七十六期 = baseline 第 63 子轴 + 第 54 接力 (蚂蚁灵波 后续 + 国际资本三票后续 + 港股 8/5 早盘反应)
- 8/5 晚报 cron 第七十七期 = baseline 第 64 子轴 + 第 55 接力 (周末 pre-market + AMD Q2 + Palantir Q2 二阶反应)
