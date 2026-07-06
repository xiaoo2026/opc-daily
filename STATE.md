# opc-daily STATE.md (loop-engineering pattern, 自 2026-07-05)

> 这文件给 opc-daily cron / 全 loop shared state. 任何 sub-agent 起来接 opc-daily 第一件事是 read this.

## What we do
- 公众号心智: 每天 1 件 AI 圈事实 + Una 主编观点, 推 020755.xyz / GitHub / CF Worker
- 输入: opencli + agent-reach + web-search-plus + exa MCP + MCP-MiniMax
- 输出: 日报 HTML + voice.mp3 (TTS) + GitHub commit + CF deploy

## Who runs
- **editor session** (hermes cron 7/13/21) — Una 主审
- **capture agent** (sub-agent 阶段 1) — 抓 30 条 raw 素材
- **verifier sub-agent** (待装) — Phase 2.5 检查 Una 输出
- **publisher** (no-agent shell) — 阶段 3 自动 git + wrangler

## 当前 phase = L1 (report only)
- 7 jobs installed, 不动 PR
- cron 第一次跑要等明早 7:00
- 失败处理: 该日不出稿 (Una 在场 > 卡稿)

## Where we are now (2026-07-06 21:00) — 第二期 cron 抵达
- 🔁 cron 21:00 抵达 (21:02 fire), 第一次运行
- ⚠️ 13:00 cron 误触发 (20:09 fire), 已 produce `2026-07-06-21evening/` 内容 — Meta agent 对内承认没加速 (跨参元 不变量 #5 拼上 7/6 早 Meta Watermelon 对外喊)
- ✅ 19:53 21evening index.html + raw.md + voice.mp3 commit 3e41da1 + push origin main
- ✅ 当前 21:00 cron 不重写 21evening 文件 (会覆盖已 publish 内容)
- ✅ raw/2026-07-07-morning-supplement.md 修正 (URL cyzone→wallstreetcn) commit ab755aa + push origin
- ✅ 数字精度 fix: 7/7 早 index.html 100 亿→70 亿, $10B→$7B (per skill 数字精度要求 + supplement 一致性), commit 77b523a + push origin
- ⚠️ TG 7069165189 失败 (timed out) — 21evening 缺补告推送; QQ 7069165189 (qqbot) 已 broken (c2c=500) per skill
- ⚠️ **CF Pages 仍 block (code 8000119)** — `wrangler pages deploy` 返回 `Contact abusereply@cloudflare.com`, master commit 在但 fix 未上 020755.xyz 公开版, 廷哥需登 CF dashboard 解封 una-airport. 7/6 21:00 故障 + 7/7 早成功 → 现再 fail, 是反复.

## Where we are now (2026-07-07 07:00)
- ✅ cron 第三期 (7/7 07:01 早选) 跑通 — 早选 2026-07-07-morning 已发
- ✅ 7 files committed: 31d7446 (pushed origin main)
- ✅ wrangler deploy v88d5b178 成功 — CF Worker 1101 故障已恢复 (昨天 21:00 故障解)
- ✅ voice.mp3 (37s / 597KB / danya_xuejie) 生成
- ✅ index.json 顶部追加 7/7 morning 条目
- ✅ daily/index.html redirector 指向 7/7 morning
- ✅ top-level index.html 顶部 featured 切换到 7/7 morning
- ✅ TG 7069165189 sent
- 主题: 国家大基金 12 年来首次跨界投纯大模型公司 — DeepSeek 首轮 \$45B 估值 / \$10B 规模 / 国家队领投, 中国 AI 大模型史上最大首轮
- 📊 同步: 腾讯混元 Hy3 发布 (MoE 295B/21B + 1元/百万token) + 美团 LongCat-2.0 开源 (1.6T) + ICML 2026 Seoul 开幕 + SK Hynix \$28B 美股上市 + Mistral \$3.5B
- 📝 raw 素材归档: ~/opc-daily/raw/2026-07-07-morning.md (30 条) + 2026-07-07-morning-supplement.md (9 条深度索引)
- 📮 sub-agent 双轨: main capture 30 条 + supplement 主题深度包, Una 主审选 #1 DeepSeek

## Where we are now (2026-07-06 21:00)
- ✅ cron 第二期 (7/6 21:00 晚选) 跑通 — 21evening 已发
- ✅ 主题: Meta 的 AI agent 赌注, Zuckerberg 自己承认没那么快 (内部 town hall 7/6 PST 16:30)
- ✅ voice.mp3 (45s / 720KB / danya_xuejie) 生成
- ✅ index.json 顶部追加 7/6 21evening 条目
- ✅ daily/index.html redirector 指向 7/6 21evening
- ✅ top-level index.html 顶部 featured 切换到 21evening
- ✅ GitHub main 推送 (commit 461d42a)
- ⚠️ **CF 部署双失败 (2026-07-06 21:00 故障)**:
  - CF Worker (opc-daily.zhuyting.workers.dev) 这次 deploy 后全站 1101, 即使回滚到早上成功的 614c9e40 也是 1101 — 怀疑 CF 账号层 / Worker runtime 故障
  - CF Pages project 'una-airport' (serve 020755.xyz) 被 Cloudflare block (code 8000119), wrangler pages deploy 无法上传
  - master commit 在, 等 CF 那边恢复后再 deploy; 不需要重做内容
- 📊 形成对照: 早上 Meta Watermelon 追上 (外喊) vs 晚上 agent 没加速 (内认) — 同一家公司两个口径同时出现
- 📮 TG 7069165189 sent (fallback: qqbot 已知 broken, 跳过)

## Where we are now (2026-07-06 07:01)
- ✅ cron 第一期 (7/6 07:01) 跑通 — 早选 2026-07-06-morning 已发
- ✅ 4 files committed: 7cabc57 (pushed origin main)
- ✅ wrangler deploy v614c9e40 成功
- ✅ voice.mp3 (75s / 1.79 MB / danya_xuejie) 生成 + 上 CDN
- ✅ TG 7069165189 sent
- 主题: Meta Watermelon 追上 GPT-5.5 (Alexandr Wang 内部 7/5 晚)

## Where we are now (2026-07-05 23:00)
- ✅ opencli 1.8.4 装好
- ✅ agent-reach 11/15 渠道装好
- ✅ v3 → v4 部署好, 020755.xyz serve v4 设计稿
- ✅ opc-daily 仓 main 一次推 v4 (commit 4b531eeb)
- ⏳ cron 第一次跑 = 待 7/6 7:00

## 已知未做的事
- [ ] Phase 2.5 verifier — 让一个独立 sub-agent 拉 raw + 拉 Una 输出, 校验
- [ ] loop-budget.md (token cap per day)
- [ ] loop-run-log.md (cron 跑几次后写)
- [ ] 公众号 WeChat API token (廷哥抽时间)
- [ ] waydroid 启动
- [x] **CF Worker / Pages 故障** — 2026-07-06 21:00 cron 出现的 1101 故障已恢复 (7/7 07:01 wrangler deploy v88d5b178 成功), Pages (020755.xyz) 状态待 7/7 单独确认

