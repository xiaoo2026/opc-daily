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

## Where we are now (2026-07-07 07:02) — 第四期 cron 抵达
- 🔁 OPC 早报 7:00 cron 抵达 (07:01:02 fire), 第四次运行
- ✅ 早选 2026-07-07-morning 已存在 (commit 31d7446, fix 77b523a) — 当前 cron 不重写 (cron 时序判断矩阵: 同 slot 已 commit + push, 不要再 publish 第二条; 这是 cron 第四期 signal-on-existing 模式)
- 🛠️ **fix #3 — 移除 hallucinated 引述 (commit 5511728 + push origin main)**:
  - 7/7 早 index.html blockquote cite 是 `《财经》研究员 邹露` — raw.md / supplement.md **没有任何 '邹露' 字样**, 是 subagent 自创的人名
  - 违反 skill 不变量: **具名引述禁用** — 若来源是《财经》"获悉" 类匿名引述, 写"《财经》获悉", 不要 subagent 自己给个具体人名
  - 替换为权威源: 华尔街见闻 / 《财经》独家 2026-07-06, https://wallstreetcn.com/articles/3773316 (supplement #1 source)
  - 性质: fix: (additive, 不重写 voice.mp3 / 不重写 4-section 草稿) — per skill "**已确认的事实错误** 可先 patch 后报告"
- ⚠️ CF Pages 020755.xyz cache 仍返旧版 (curl 仍 `邹露`); origin GitHub 是新版 (raw.githubusercontent 已更新) — Pages 项目 block 8000119 状态未变, **不要反复 wrangler pages deploy** per skill
- ⏭️ 下次 cron: 13:00 OPC 午后 (d4623ff72812) — 但前提是 Una 醒 + 主审可达


## Where we are now (2026-07-07 13:00) — 第五期 cron 抵达 (午后)
- 🔁 OPC 午后 13:00 cron 抵达 (13:01 fire), 第五期运行
- ✅ Una 主审骨架 7/7 早 10:42 已写进 `_skeleton.md` (commit 234d1e6) — Gen 3 (loop+darwin) 首次落地; 不变量 #5 同日 cross-reference (早 DeepSeek 大基金进场 ↔ 午后 Anthropic 四股力量撕) 通过自检
- ✅ phase 1 sub-agent 30 条 raw 落 `~/opc-daily/raw/2026-07-07-afternoon.md` — **4 项 Una 现场补料 grep 全部 PASS** ($965B 4条 / $852B 4条 / Karp 5条 / Palantir 5条 / `has gone completely wrong` 2条 / Uber+Microsoft+Salesforce+Meta 4 条同条), 出处 The Daily Upside 7/6 Sean Craig
- ✅ phase 2 Una 主审 二次 grep 通过 — 数字精度一致 (stat-card $965B/$852B/4家 与 raw grep 全撞), 具名引述 cite (The Daily Upside / Sean Craig + Karp / Palantir) 在 raw 命中, 无 hallucination
- ✅ 4-section v4-Daily.html 渲染 (commit 3e7b2c2, pushed origin main):
  - 标题: "Anthropic 同一天被四股力量撕"
  - 4-section 草稿: 数字一眼 ($965B / $852B / 4家) + 事实部分 + 不选其它的 + Una 4 句说
  - blockquote cite: The Daily Upside / Sean Craig 2026-07-06, https://www.thedailyupside.com/technology/artificial-intelligence/openai-and-anthropic-speed-towards-ipos-as-business-models-come-under-scrutiny/ (CNBC + TBPN 双平台 Karp 引述附加)
- ✅ voice.mp3 生成 (MiniMax CN danya_xuejie, 597KB / 37s, ID3 v2.4.0 + 32000Hz sample rate)
- ✅ wrangler deploy v1a1ba5c1-cfc5-406b-9375-691aaf40256e 成功 — CF Worker 完全可用, 跨信源/正面/ 同时落地
- ✅ daily/index.html redirector → 2026-07-07-afternoon
- ✅ top-level index.html: topbar 13:00 / eyebrow 午后选 / featured-card Anthropic 同一天被四股力量撕 / archive 7-07 午后条目
- ✅ daily/2026-07/index.json: 顶部追加 7/7 afternoon 条目 (html_url 指向 afternoon)
- ✅ TG 7069165189 sent: "Una 选: Anthropic 同一天被四股力量撕. 13:00 CST. ..."
- ⚠️ **CF Pages 020755.xyz 仍 block (8000119)** — 不反复 wrangler pages deploy per skill; master commit 在, 020755.xyz 服务旧 cache (curl 命中早报旧版); 廷哥需登 CF dashboard 解封 una-airport
- 主题: 美方头部 AI 公司 IPO 前夜的标本 — Anthropic 9650 亿美元估值 + Palantir CEO Karp 公开炮轰 token 付费模式 + Uber/Microsoft/Salesforce/Meta 同周限额员工 AI 支出. **中美同日资本换轨**: 中国 = 国家队进场 (钱的方向), 美国 = 市场化资本+政治+技术叙事+客户反噬四方撕 (钱的本质被质疑).
- 📝 同步: deepseek 大基金进场 (早报) + Anthropic IPO 准备 (7/6 morning raw [7] + 7/7 afternoon raw [14]) + Karpathy 7/6 站台 Fable 5 + Z.ai GLM-5.2 7/7 早晨上 Top-5 闭源旁 + ICML 2026 Seoul 7/7 main + Susan Athey keynote
- 📝 配套 fix-vs-publish 区别: 本次是 cron 第五期 **full fresh publish** (不是 signal-on-existing additive fix), 所以 voice.mp3 与 index.html mtime 顺序对换 OK — skill [8c] mtime invariant 只约束 additive-fix 模式
- 📮 sub-agent 双轨: main capture 30 条 + The Daily Upside 一手 web_extract 直接抓 4 项补料, Una 主审阶段 2 二次 grep 全 PASS, 不需要降级路径 (跨信源补料 4 项全部合法落入 stat-card / 引用)
- ⏭️ 下次 cron: 21:00 OPC 晚报 (OPC 晚报 21:00 (Una 主编)) — 当日已经 cron 触发了 7/7 早 + 13:00 两次, 21:00 是第三次; 选材建议向"今日早 + 午后 哪条 narrative 的对内/对立面"靠 (不变量 #5 同日 cross-reference)

## Where we are now (2026-07-07 21:00) — 第七期 cron 抵达 (晚报)
- 🔁 OPC 晚报 21:00 cron 抵达 (21:00:51 fire), 第七期运行
- ✅ phase 1 sub-agent 30 条 raw 落 `~/opc-daily/raw/2026-07-07-21evening.md` — 0 重叠 morning + afternoon raw (URL diff self-check); 8h 窗口 7/7 13:00~21:00 CST 严格互补
- ✅ phase 2 Una 主审 二次选材 (Gen 3 不变量 #6 落地) — sub-agent 候选 1+2+3, Una 选中候选 1: **"今天 钱在扩, 人在失"** — Microsoft 4,800 + Anthropic fingerprint + Lines v. OpenAI 三层 inner cost 同周并发同源
- ✅ 不变量 #5 同日 cross-reference: 早 = outer capital (DeepSeek 大基金) / 午后 = outer valuation + market reject (Anthropic) / 21:00 = inner cost (worker + user + trust) 三期拼起来 = "2026-07-07 是 AI 估值故事 outer capital 和 inner cost 肉眼可见对位的一天"
- ✅ 不变量 #6 (loop+darwin) 双 YES: Loop = "AI 头部公司 IPO 前夜, worker/user/trust 三层 inner cost 是 outward capital story 的反向资产"; Darwin = "inner cost check" 作为 baseline 可遗传
- ✅ 4-section v4-Daily.html 渲染 (commit a2d9361, pushed origin main):
  - 标题: "今天 钱在扩, 人在失"
  - 数字一眼: 4,800 (Microsoft 7/6 裁员) + ≥90 (Anthropic fingerprinting 版本数) + 3 起 (Lines v. OpenAI)
  - 事实部分 (3 件 inner cost: worker / user / trust 三层同周并发同源)
  - blockquote cite: The Verge (Tom Warren, Microsoft) + Ars Technica (Ashley Belanger, Anthropic) + The Verge (Emma Roth, Lines v. OpenAI) — 3 个 source cite, 全部 raw grep 命中
- ✅ voice.mp3 生成 (MiniMax CN danya_xuejie, 446KB / 28s, ID3 header + 32000Hz sample rate)
- ✅ wrangler deploy v7add8f9a-5d1d-4541-8c40-8e4eea00dae6 成功 — CF Worker opc-daily 31 files uploaded (3.19s)
- ✅ daily/index.html redirector → 2026-07-07-21evening
- ✅ top-level index.html: topbar 21:00 / eyebrow 晚选 / featured-card "今天 钱在扩, 人在失" / archive 7-07 晚报条目
- ✅ daily/2026-07/index.json: 顶部追加 7/7 21evening 条目 (html_url 指向 21evening)
- ✅ TG 7069165189 sent: "Una 选: 今天 钱在扩, 人在失. 21:00 CST. Microsoft 一次性裁 4,800 ... Anthropic fingerprint ... Lines v. OpenAI ..."
- ✅ 验收 PASS 33 / FAIL 0 — 8a 数字精度 consistency (4,800 / 1,600 / ≥90 / v2.1.91 stat-card 与 raw grep 一致) + 8b 具名引述 hallucination detect (Michael Lines / Satya Nadella / Tom Warren / Ashley Belanger / Emma Roth 全部 raw grep 命中) + 8c fresh publish mtime skip (7/7 13:00 实测补丁) + 8d skeleton 无 [Una 现场补料-待 cron 验] 标记 (cron fresh publish, 无跨信源补料)
- 主题: AI 头部公司 "钱扩张" 同一周, "人失血" 同周并发 — Microsoft 4,800 裁员 (worker) + Anthropic 长期 fingerprint 监控中国路由 (trust) + OpenAI Lines v. OpenAI 诉讼 (user) 三件事同周 (7/6-7/7) 并发同源, 是 outer capital story 里完全缺席的 inner cost 三层一次性摆上桌. 早 + 午后 + 21:00 三期拼起来, **2026-07-07 是 AI 估值故事 outer capital 和 inner cost 肉眼可见对位的一天** = 2026 H2 资本战的真形状, 一边跑一边失血, 这才是能撑多久的真正变量.
- ⚠️ CF Pages 020755.xyz 仍 block (8000119) — 7/7 21:00 cron 实测 wrangler deploy Worker 仍然成功 (Pages 与 Worker 是两个独立部署目标); 不反复 wrangler pages deploy per skill; master commit 在, 等廷哥登 CF dashboard 解封 una-airport
- 📝 配套 fix-vs-publish 区别: 本次是 cron 第七期 **full fresh publish** (不是 signal-on-existing additive fix), so voice.mp3 与 index.html mtime 顺序对换 OK — skill [8c] mtime invariant 只约束 additive-fix 模式
- 📝 选材决策回填 (给明天 Una): 候选 1 选中, 候选 2 (Trump gated regime 全行业升级) / 候选 3 (Karpathy-LeCun-Fung 学术内层 world model + harness) 留作后续素材; "inner cost check" baseline 持续生效直到 Lines v. OpenAI 案了结 / Microsoft 4,800 落地 / Anthropic fingerprint 公开听证为止
- ⏭️ 下次 cron: 7/8 早 7:00 cron (Gen 3 baseline 第二天验证)


## Where we are now (2026-07-08 07:13 CST) — 第八期 cron 抵达 (早)
- 🔁 OPC 早报 7:00 cron 抵达 (07:00:31 fire), 第八期运行
- ✅ Una 主审 选 **候选 A (Anthropic Fable 5 paywall + DeepSeek 永久降价 1/4)**, 写者一致 — 与 sub-agent 候选推荐吻合
- ✅ 不变量 #5 同日 cross-reference 通过自检: 7/7 evening (钱扩张+人在失 inner cost baseline) → 7/8 早 12h 后 IP 公司自己回应 (worker 层 Microsoft 7/6 裁 4,800 已存在, user 层 Anthropic Fable 5 paywall 上线, trust 层 Anthropic Sonnet 5 同日隐式涨价 25-40%); inner cost baseline 仍生效, 但时间结构从 "暴露 → 操作性回应" 迁移
- ✅ 不变量 #6 loop+darwin 双 YES:
  - **Loop 闭环**: "AI 估值故事 = outer capital + inner cost 双轴, 双向都在提速" — 7/7 evening 提, 7/8 早验证. SKILL.md 不变量层的新结构化判据.
  - **Darwin 突变**: baseline 持续生效条件 — 直到 Anthropic 6/1 S-1 后首份公开 S-1 / DeepSeek V4-Pro 降价后 9-12 月跑出 run-rate + 用户数 / Microsoft MAI 替代 OpenAI + Anthropic 落地 K2 数学 任一边不动 = 该边 baseline 失效, 主编 pivot.
- ✅ 4-section v4-Daily.html 渲染 (commit 5e8355d, pushed origin main):
  - 标题: "Anthropic 把 paywall 直接亮出来, DeepSeek 把价格砍到 1/4" (≤20 字 ✓ 人话 ✓)
  - 数字一眼 3 卡: $10 / $50 (Anthropic Fable 5 usage-credit 上线) / 1/4 (DeepSeek V4-Pro 永久降价) / $450亿 (国家队领投估值翻番)
  - 事实部分 4 段 (Anthropic Fable 5 paywall + Sonnet 5 隐式涨价反向证据 + DeepSeek 永久降价 + 大基金 $450亿)
  - blockquote cite: The Macro Wire / 湾区信息汇 DeepSeek 官方公告 / The Decoder Sonnet 5 hidden — 3 个 source cite, 全部 raw grep 命中
- ✅ voice.mp3 生成 (MiniMax CN danya_xuejie, 552KB / 34.4s, ID3 header + 32000Hz sample rate)
- ✅ wrangler deploy v9bf66ab2-a454-40ed-91fd-ba29e12ad6c4 成功 (32 files uploaded, 2.93 sec)
  - ⚠️ **2026-07-08 07:09 CST discovered**: 整段 leftink 网络 workers.dev zonetimed out (curl exit 28 / connection timed out) — cloudflare.com / dash.cloudflare.com / cloudflarestatus.com 全部可达, 这是 leftink-side BGP 局部问题 不是 CF outage. wrangler deploy 仍成功 (CF API 走不同路由). 公开 URL 暂时看不到新 deploy, 等 BGP 自愈.
- ✅ daily/index.html redirector → 2026-07-08-morning
- ✅ top-level index.html: topbar 2026-07-08 / eyebrow 早选 / featured-card Fable 5 + DeepSeek 降价 / archive 7-08 早条目
- ✅ daily/2026-07/index.json: 顶部追加 7/8 morning 条目 (html_url 指向 morning)
- ✅ TG 7069165189 sent: "Una 选: Anthropic 把 paywall 直接亮出来..."
- ✅ ad-hoc verifier 28 PASS / 0 FAIL — raw 30 条 / index.html markers / voice.mp3 ID3+32000Hz / index.json valid / redirector / topbar+eyebrow+featured / git SHA / author / 8a 数字 grep / 8b cite 名字 / 8d skeleton 无补料标记 (cron fresh publish, 无跨信源补料)
- 主题: **AI 估值故事的真结构 = outer capital + inner cost 双轴, 双向都在提速**. 7/7 evening baseline (钱扩张+人在失 inner cost 三层) 24h 后验证: worker (Microsoft 7/6 4,800) + user (Anthropic Fable 5 paywall 上线 7/8) + trust (Anthropic Sonnet 5 隐式涨价 25-40%) 都被 IP 公司以商业化操作回应. 7/8 早另一新维度 = 中美头部 IP 公司同 12h 双线对位: Anthropic 提价试探 $800B IPO 估值锚点, DeepSeek 永久降价 75% 把"便宜能赚钱"做成可复制样本. 一提一降 = 2026 H2 估值故事的真正悬念
- ⚠️ CF Pages 020755.xyz 仍 block (8000119) — 7/8 早 cron 没尝试 wrangler pages deploy per skill; master commit + Worker deploy 在, 不影响合规 publish; 廷哥仍需登 CF dashboard 解封 una-airport
- 📝 Pitfall 9 partially triggered — 但 sub-agent 90s 内落盘 (远低于 5 min 阈值), 不需要 fast-mode fallback. 子 agent 7:09 dispatch → 7:10 raw 文件已存在 → 7:11 phase 3 起草 → 7:12 index.html 落盘 + voice TTS → 7:13 commit push + wrangler + TG. 全程 ~13 min (cf 7/7 evening 17 min 起的标准; 7/6 evening 7 min, 7/7 morning 18 min 含 fix-up)
- 📝 Pitfall 11 (URL canonical) verified — 14 个 URL 全部完整 (无 ... 截断, 无省略 path), 全 canonical
- 📝 "Loop+Darwin baseline" baseline 持续生效条件 (给 tomorrow Una): 直到 (a) Anthropic 6/1 S-1 后首份公开 S-1 / (b) DeepSeek V4-Pro 降价后 9-12 月 run-rate + 用户数跑通 / (c) Microsoft MAI 替代 OpenAI+Anthropic 落地 K2 数学. 任一边不动 = 该边 baseline 失效, 主编 pivot
- ⏭️ 下次 cron: 7/8 13:00 OPC 午后 (OPC 午后 13:00 (Una 主编)) — 主审建议 pivot: "美侧 Anthropic 双线 (Fable 5 + Sonnet 5) 升级 vs 中美对照 国家队趋势" 或 "新事件不再 'outer capital + inner cost 双轴对位' 时, baseline 失效, 切到下一组"
