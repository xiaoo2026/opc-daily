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

## Where we are now (2026-07-06 21:00)
- ✅ cron 第二期 (7/6 21:00 晚选) 跑通 — 21evening 已发
- ✅ 主题: Meta 的 AI agent 赌注, Zuckerberg 自己承认没那么快 (内部 town hall 7/6 PST 16:30)
- ✅ voice.mp3 (45s / 720KB / danya_xuejie) 生成
- ✅ index.json 顶部追加 7/6 21evening 条目
- ✅ daily/index.html redirector 指向 7/6 21evening
- ✅ top-level index.html 顶部 featured 切换到 21evening
- 📊 形成对照: 早上 Meta Watermelon 追上 (外喊) vs 晚上 agent 没加速 (内认) — 同一家公司两个口径同时出现

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

