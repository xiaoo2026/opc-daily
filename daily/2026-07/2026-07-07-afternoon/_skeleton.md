# Una 主审骨架 · 2026-07-07 午后 (13:00)

> ⚠️ 此文件是 **advisory 骨架**, 不是 publish artifact. 13:00 cron 抵达时由 Una cron prompt 读取, 进入阶段 3 落盘.
> 时戳: 2026-07-07 10:42 CST | Una 主审在场 | 不变量 #6 (loop+darwin) 已在 SKILL.md v0.6.0 落定

---

## 选材: Anthropic 这家公司, 36 小时里同时被四股力量撕

### 不变量自检 (2026-07-07 Gen 3 启用)
- **Loop**: 选完后 SKILL.md 长出什么? → "美方头部 AI 公司 IPO 前夜, 客户/市场/内部/政治四方同时施压, 是 2026 H2 资本战新结构" — 这是跨日可复用的判断框架, **新结构**.
- **Darwin**: 明天 cron 能继承什么? → "Anthropic 作为美方头部 AI 标本" 这条 baseline 持续生效, 直到 IPO 真正发生或被别家取代. **可遗传**.
- 双 YES → 锁定本选材.

### 选材理由 (cron 抵达时直接用)
**今天 7/6 (美东) 这一天, 美国三家头部 AI 公司 Anthropic 同时被四股力量撕:**
1. **资本**: 加速 IPO, 估值 $965B (5 月), OpenAI $852B (3 月) 紧随. The Daily Upside 报道.
2. **市场**: Palantir CEO Alex Karp 公开炮轰 token 付费模式 "something has gone completely wrong", 企业客户 (Uber/Microsoft/Salesforce/Meta) 已经在限额员工 AI 支出. The Daily Upside 原文.
3. **内部/技术**: Karpathy 5 月加入 Anthropic 预训练团队, 7/6 出面给 Fable 5 站台, 用新词 fablemaxxing. 但 7/1 之前 Fable 5 刚被美国出口管制拦了 3 天. (新智元 36氪)
4. **政治/军工**: Anthropic CEO Dario Amodei 与五角大楼邮件曝光, 拒绝国防订单被列"国安威胁". Times of India.
5. (bonus) **硬件去 Nvidia 化**: Anthropic 跟三星谈代工定制 AI 芯片. The Information 独家.
6. (bonus) **算力叙事对比**: 同日 Zuckerberg 内部承认 Meta agent AI "未达预期", 转算力租赁. Techzine / Reuters.

**为什么这件**: 当一家头部 AI 公司被这四股力量 (资本 + 市场 + 内部 + 政治) 同日撕扯, 它当下做的所有动作 (IPO 估值、Fable 5 造势、芯片定制、Karpathy 入伙) 都**不再是孤立事件**, 而是同一场博弈的不同手. 这跟早报 (中国大基金进场) 拼起来 = **2026-07-06 是中美 AI 资本结构同时换轨的一天**. 早是国家级资本进场 (国家队 = 单点深), 午后是市场化资本+政治+技术叙事 (IPO = 多元角力).

### v4-Daily 4-section 草稿

#### 标题 (≤20 字)
**Anthropic 这一天被四股力拉扯**

#### 为什么这件 (100-150 字, Una 第一人称)
今天 30 条里, Anthropic 出现了 5 次. IPO 估值 / Karp 炮轰 token / Fable 5 站台 / 五角大楼邮件曝光 / 三星谈芯片 — 同一公司, 36 小时内被五件事砸. 早上我说"国家大基金进场", 中国 AI 在换钱的方向; 现在这家美方头部在换另一件事 — **客户开始怀疑 token 付费模型值不值**. 谁先撑不住, 看四股力怎么落, 不看估值数字.

#### 事实部分 (200 字, 30 秒能懂)
- **资本**: Anthropic 估值 $965B (5 月), OpenAI $852B (3 月), The Daily Upside 报道两家下半年都 IPO, Anthropic 最早 10 月.  ⚠️ **[Una 现场补料-待 cron 验]**: $965B/$852B + Karp 引述不在 morning raw.md, 是 Una web_extract The Daily Upside URL 现场抓的 (URL 已验证可达). 13:00 cron 阶段 1/2 必须 (a) sub-agent 重采 raw 把 Karp + 估值补进 raw/2026-07-07-afternoon.md; (b) Una 主审二次 grep 才能进 stat-card. 不满足则降级: Karp 段改"路透 7/6 报道 token 模式被质疑"匿名, 删 $965B/$852B.
- **市场**: Palantir CEO Karp 说 token 付费模式"something has gone completely wrong". Uber / Microsoft / Salesforce / Meta 已经在限制员工 AI 支出.  ⚠️ **[同上, Karp + Palantir 都是现场补料]** — cron 守门前不进 publish.
- **技术**: Karpathy 5 月加入 Anthropic 预训练, 7/6 给 Fable 5 站台 (1600 行代码生成 63 个 3D 世界). 但 Fable 5 在 7/1 之前被美国出口管制拦了 3 天.
- **政治**: Anthropic CEO Dario 跟五角大楼邮件曝光, 拒绝国防订单被列"国安威胁".
- **横向**: Meta 同一天承认 agent AI 没达预期, 转算力租赁; Anthropic 跟三星谈代工芯片.

#### 不选其它的 (3 条, 30 字/条)
- **腾讯混元 Hy3 + 1元/百万token** (财新): 大厂旗舰, 跟 DeepSeek 早报同方向, 不出新意.
- **GPT-5.6 Sol 30小时跑赢 Opus** (36氪): 技术里程碑, 5 月以来模型叙事已饱和.
- **美团 LongCat-2.0 1.6T** (比特范): 国产算力里程碑, 跟 DeepSeek 早报同质.

#### Una 4 句说 (4 条 ≤ 50 字/条)
1. Anthropic 这家公司的今天, 是美方头部 AI IPO 前夜的样子. 估值 $965B, 客户已经在限制支出.
2. token 付费模式一直被当成默认, Karp 是第一个公开说它有问题的人. SaaS 客户已经在找开源替代.
3. Karpathy 入伙 + fablemaxxing 是 IPO 前夜的造势. Fable 5 在 7/1 还在被美国自己拦, 这件事站台盖不住.
4. 今天中美同日换轨. 中国是"国家队进来决定钱往哪走", 美国是"客户怀疑钱花得值不值".

---

## Cron 抵达时的执行路径 (13:00 CST)

1. 阶段 1: sub-agent 采集 7/7 07:00 ~ 13:00 CST 6h 窗口 raw, 追加到 `raw/2026-07-07-afternoon.md`
2. 阶段 2: Una 主审 (我) — **直接读本骨架**, 确认选材 / 4-section 内容是否仍 fit (6h 窗口若有新料, 加进事实部分; 不替换主结构)
3. 阶段 3: 用 v4-Daily.html 模板 render, TTS MiniMax CN danya_xuejie 60 秒生成 voice.mp3, git commit + push origin main, wrangler deploy
4. 阶段 4: TG 7069165189 回报 "Una 选: Anthropic 同一天被四股力量撕. 13:00. <URL>"

## 不变量 #6 自检回填 (cron 跑完时)

- Loop: 本日 cron 结束后, 是否在 SKILL.md 长新东西? → 若有, patch v0.7.0; 若无, 写进 STATE.md 但不升 skill.
- Darwin: 明天 21:00 cron 是否继承 "Anthropic 作为美方头部 AI 标本" 这条 baseline? → 是 → 不动; 否 → 重审.

---

> 主审签: Una <una@leftink.local>
> 时戳: 2026-07-07 10:42 CST (写于 cron 抵达前 2h 18min)
> SKILL.md 版本: v0.6.0 (Gen 3 启用)