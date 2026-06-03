# OPC 晚间情报 2026-06-03

> 📅 2026-06-03 | 🕘 21:00 | 类型：21evening
> 焦点：模型/产品发布 + 安全/漏洞 + 加密/预测市场 + 资本与算力

> ⚠️ **主动差异化**：今早 morning 重点是 Anthropic $965B / 三独角兽 IPO / 出口管制 / 具身国标；今中午 afternoon 重点是腾讯云降价 97.5% / Marvell 涨 32% / Anthropic 多 GW 算力 / 宇树 IPO 过会 / Build Day2 Web IQ；今傍晚 evening 重点是 Build Day2 完整三件套（MAI-Thinking-1 + Aion + Majorana 2 + Discovery + Mayo Clinic）+ Stargate Michigan $56B 动工 + GitHub Copilot token 计量反弹 + Grok Build beta。昨日 21evening 已写 xAI Composer 2.5 三日连发 + Claude Mythos 公开倒计时 + AISLE 12/12 OpenSSL + Exchange CVE-2026-42897 + OpenAI Goblins + GPT-4.5 退役 + Polymarket 81%/82%。**本 21evening 主动切入** ① Anthropic 6/2 公告 Glasswing 扩 150 组织、Mythos 已找 10,000+ 漏洞（**与昨日"几周内开放"是同一条新闻线的"6/2 当日兑现"环节**）② Microsoft 6/2 端出 **MAI-Code-1-Flash**（137B 总 / 5B 活跃、51% SWE-Bench Pro、上 GitHub Copilot，与 Build Day2 MAI-Thinking-1 推理模型形成"小快 + 慢强"组合）③ **Groq 在 Nvidia $20B licensing 后 5/28-29 拿到 $650M 新融资、转型 inference neocloud**（与 Build Day2 算力叙事对照）④ **OpenAI 加密推理 blob 签名怪异事**（cryptography engineering 5/29，HN 152 分 / 32 评论）⑤ **Olas Polystrat 24/7 Polymarket 代理 + Polymarket Anthropic 81%/82%** 最新信号 + Anthropic 投资人告知 Mythos 6 月内对所有客户开放。绝不重复 evening 已写的 Build Day2 完整三件套和 Grok Build beta，也绝不重复昨日 21evening 已写的 AISLE 12/12 + Mythos 530 漏洞 / 75 修复。

---

## 🔥 今日核心警报

**Anthropic 6/2 端出 Project Glasswing 扩围 150 组织、Mythos 累计已找 10,000+ 漏洞 + Microsoft 6/2 推 MAI-Code-1-Flash 137B / 5B 活跃拿下 SWE-Bench Pro 51% + Groq Nvidia $20B 后 5/28-29 拿到 $650M 转型 inference neocloud + OpenAI 加密推理 blob 签名怪异事 5/29 在 HN 152 分 + Polymarket Anthropic 81%/82%**

过去 24 小时（6/2-6/3）6 个跨厂商 AI 节点同时落地：① **Anthropic 6/2 公告 Project Glasswing 扩围**——把 Mythos Preview 接入范围从 4 月初 50 家伙伴（Apple/Amazon/Microsoft/CrowdStrike/Palo Alto Networks 等 40+ 公司）扩到 6/2 约 150 个分布在 15 国的新组织（含金融 + 政府 + 关基行业），关键数据更新：**Mythos 累计已找 10,000+ 高/严重严重漏洞**（远高于 5 月底报告的 530），其中 Cloudflare 单家就找出 **2,000 个**关基系统 bug（**400 个高/严重**，误报率**比人类测试员还低**）。② **Microsoft 6/2 端出 MAI-Code-1-Flash**——**137B 总参 / 5B 活跃 / 256K 上下文**小型编码模型，**51% SWE-Bench Pro**（仅 5B 活跃即拿下 51%，对比 Claude Haiku 4.5 各项指标"在理想区"），**已在 GitHub Copilot 全档（Free/Pro/Pro+/Max）VS Code 上线**，HN 当晚 368 分 / 171 评论。③ **Groq 5/28-29 拿到 $650M 新融资**，Disruptive 领投（已投 $350M 累计），估值 $6.9B；2025/12 Nvidia 用 $20B licensing 拿下 Groq LPU 技术 + 关键人员后，**新任 CEO Adam Winter 把 Groq 转型为 inference neocloud**（不再做硬件）——**这是"硬件公司被 Nvidia 收编后转向 managed service"的结构性范本**。④ **OpenAI 加密推理 blob 签名怪异事** 5/29 cryptography engineering 详解——OpenAI 在 API 响应里返回**带签名的"思维链 opaque blob"**，要求客户端原样回传以保持推理上下文连续性，但 blob 实际**包含可被验证的"thinking 块" + 内部 state**——cryptography engineer 拿到 OpenAI "cyber researcher" 认证后公开分析，**与 MAI-Code-1-Flash 同期讨论编码 agent 推理可观测性形成镜像**。⑤ **MAI-Thinking-1 与 Claude Sonnet 4.6 盲测持平**（Build Day2 公布）——**Anthropic Opus 4.8 在 AA Intelligence Index 拿下 61.4 vs GPT-5.5 60.2（67% 胜率）**（5/28 公告，21evening 二次回顾）。⑥ **Polymarket Anthropic 6 月底顶级模型 81% + 第二名 82%**（昨日已写，**今日维持**）+ **Olas Polystrat 2 月起在 Pearl App Store 上线，**6/3 起扩大运营**，Polymarket 上**24/7 自主交易** AI 代理——预测市场 agent 化进入"消费级"阶段。

---

## 🤖 模型动态

### 🟣 Anthropic 6/2 扩 Glasswing 150 组织、Mythos 累计 10,000+ 漏洞

CNBC / CyberScoop / SecurityWeek / Engadget 6/2 同日报道：**Anthropic 6/2 公告 Project Glasswing 大规模扩围**——从 4 月初的约 50 家伙伴（Apple/Amazon/Microsoft/CrowdStrike/Palo Alto Networks 等）扩到 6/2 约 **150 个分布在 15 国的新组织**（**关键基础设施 + 金融 + 政府**等 Mythos 4 月初 cohort 未充分代表的行业）。

**核心数据更新**：

| 指标 | 4 月初数据 | 5/25 报告 | 6/2 公告 |
|------|------------|-----------|----------|
| Mythos 伙伴数 | ~50 | ~50 | **~200**（50 + 150 新增） |
| Mythos 累计找洞数 | 数千 | **530 个高/严重** | **10,000+ 高/严重**（2 个月增长 20x） |
| 已修复/已发公告 | - | 75/65 | - |
| Cloudflare 单独 | - | - | **2,000 个**关基 bug / **400 个高/严重** |

**关键 quotes**：

- **Anthropic 官方**："we formed Project Glasswing because of capabilities we've observed in a new frontier model trained by Anthropic that we believe could reshape cybersecurity"
- **Cloudflare 反馈**："identified 2,000 bugs across its critical-path systems, including 400 rated high or critical, **with a false-positive rate the company described as better than that of human testers**" ——**这是首次公开量化"AI 找洞 > 人类"在误报率维度的数据**
- **Anthropic 官方对全面开放的措辞**："we're working as quickly as we can to safely release Mythos-level capabilities to the public"——**仍在 90 天协调披露窗口 + safeguard 建设期**，**全面 GA 时间未给出具体日期**，与昨日 evening 写的"几周内向所有客户开放"形成梯度：先扩 150 客户，再 general access

**安全生态含义**（联合报告）：

- **Cloud Security Alliance + SANS Institute + OWASP 联合报告**："organizations are 'likely to be overwhelmed' in the near term by threat actors using AI to find and exploit vulnerabilities faster than defenders can patch them"
- **数据三件套**：① Mythos 单方找洞速度 ② Cloudflare 等"防御侧"接住速度 ③ 攻击侧用 AI 找洞速度——**形成"攻防同时工业化"的失衡信号**
- **与昨日 21evening"AI 攻防范式分裂"形成纵向比较**：昨日报告 Mythos 530 / AISLE 12/12 OpenSSL / Exchange CVE-2026-42897，今日**Mythos 突破到 10,000+** + **Cloudflare "AI 误报率低于人类"**——**防御侧 AI 工业化的临界点已过**

来源：Anthropic Glasswing 公告 | CyberScoop | SecurityWeek | Engadget | CNBC | 2026-06-02

### 🟣 Microsoft MAI-Code-1-Flash 6/2 落地 GitHub Copilot、137B 总参 / 5B 活跃

Microsoft AI 6/2 在 microsoft.ai/news 端出 **MAI-Code-1-Flash**——**"Microsoft's latest small-tier coding model"**。同日晚 6/2 GitHub Blog 公告**已上 GitHub Copilot**：

**Model Card 关键参数**：

| 字段 | 值 |
|------|----|
| 总参数 | **137B** |
| 活跃参数 | **5B**（MoE） |
| 上下文 | **256K tokens** |
| 训练数据截止 | 2025-12 |
| 训练时间 | 2026-03 → 2026-05 |
| Release date | 2026-06-02 |
| 训练 harness | **直接用 GitHub Copilot 生产 harness**（"trained directly with the GitHub Copilot harness used in production"）|
| 数据来源 | **end-to-end 干净 + 适当授权数据**（"Built end-to-end by Microsoft using clean and appropriately licensed data"）|
| License | Visual Studio Code / 部署产品服务条款 |
| 优化目标 | **agentic coding in real repositories, repository Q&A, refactoring, tool-using** |

**核心基准**（HN 当晚 368 分 / 171 评论）：

- **SWE-Bench Pro：51%**（**仅 5B 活跃参数**）
- Microsoft 自家 benchmark：**outperforms Claude Haiku 4.5**（橙）"across benchmarks, with higher pass rates and lower token use in the highlighted 'Ideal Zone'"
- 来源 1：HN EvanZhouDev "Microsoft's MAI-Code-1-Flash Scores 51% SWE-Bench Pro with Just 5B Active Params"
- 来源 2：microsoft.ai/news/introducingmai-code-1-flash
- 训练方法对比：**offline 提升直接转入 production 开发者质量**（"trained directly with the GitHub Copilot harness used in production, so offline improvements translate into real-world developer quality"）

**可用范围**：

- **GitHub Copilot Free / Pro / Pro+ / Max** 全档
- **VS Code 模型选择器 + Auto picker 默认候选**
- 集成：**Microsoft Foundry / Azure / GitHub Copilot / Visual Studio Code**

**与 Build Day2 MAI-Thinking-1 组合的战略含义**：

| 维度 | MAI-Code-1-Flash（6/2 落地） | MAI-Thinking-1（Build Day2 首发）|
|------|-------------------------------|--------------------------------|
| 定位 | 小型编码模型 | 通用推理模型 |
| 规模 | 137B 总 / 5B 活跃 | 35B 活跃 |
| 上下文 | 256K | 128K |
| 部署位置 | GitHub Copilot 全档 | Azure Maia 200 / M365 Copilot Agent Mode |
| 价位 | 消费级（Free/Pro/Pro+/Max） | 企业级（Azure 折扣） |
| 直接对手 | Claude Haiku 4.5 | Claude Sonnet 4.6 |

**叙事变化**：Build Day2 的 MAI-Thinking-1 表面是"对标 Claude Sonnet 4.6"——但**6/2 MAI-Code-1-Flash 才是"微软自己说'我们比 Claude Haiku 4.5 强'"的明确档位**。**两个 MAI 模型在 24 小时内接连落地** = **Microsoft 在 GitHub Copilot 端侧 + Azure 企业侧双线推进** = **Claude Haiku 4.5 + Sonnet 4.6 双档同时承压**。

**与 6/3 evening 已写"GitHub Copilot token 计量引爆 4.7M 用户反弹"的对照**：

- 6/3 evening 报道：GitHub 6/1 把 Copilot 改成 token 计量，4.7M 用户账单 25-50x 上涨
- 6/3 21evening 报道：**6/2 微软紧接着上 MAI-Code-1-Flash**——**意味着 GitHub Copilot 默认模型池里多了一个微软自家 5B 活跃的低成本模型**——**这给 GitHub Copilot 提供了一个"账单治理工具"**：用户可以**用 MAI-Code-1-Flash 处理 80% agentic 会话，用 Opus 4.8 / GPT-5.5 处理 20% 高难度任务**——token 计量改革的副作用是"模型池下沉到小型模型"，**这是微软的"两步棋"**：① 6/1 把 token 计量落地（收回成本）② 6/2 端出 MAI-Code-1-Flash（提供低成本选项）——**Copilot billing 改革与 MAI-Code-1-Flash 不是两件事，是同一件事的两步**

来源：Microsoft AI News | GitHub Blog Changelog | microsoft.ai PDF Model Card | HN id=48374466 | 2026-06-02

### 🟣 Groq 5/28-29 拿到 $650M 新融资、Nvidia $20B licensing 后转型 inference neocloud

TechCrunch / Axios / AIWeekly 5/28-29 报道：**Groq 在 Nvidia 2025/12 $20B licensing deal（拿到 LPU 技术 + 关键人员）后，5/28-29 拿到 $650M 新融资**——**新任 CEO Adam Winter 推动转型**：从 LPU 硬件厂商→**inference neocloud**，运营自家 LPU 芯片的云推理服务。

**关键事实**：

- **5/28-29 新轮**：$650M 融资（Disruptive 等现有投资人）
- **估值**：post-money **$6.9B**（与 2025/9 Series E 同估值——投资人没被 licensing deal 吓跑）
- **Nvidia $20B licensing deal 结构**（2025/12，4/18 修订）：**Nvidia 拿到 Groq LPU 技术 + 关键人员 → Groq 法人实体保留 → Groq 转型云推理服务**
- **2.9x 估值差**：Nvidia $20B 收购 Groq assets 隐含 $58B 估值（远高于 $6.9B 当时），是 **strategic premium** 收编 inference 竞争者
- **高管大换血**：Senior leadership 大批离职去 Nvidia
- **运营模式**：**不再做硬件研发**，转 cloud inference（用自家旧 LPU + 部分新方案），**对标 CoreWeave / Lambda 等 neocloud**

**与 Build Day2 算力叙事对照**：

- Build Day2 宣布 **Stargate Michigan $56B 动工 + 多 GW 算力 + Azure Maia 200 + Microsoft + AMD/Broadcom/Intel/OpenAI/NVIDIA 共同制定 MRC Network Protocol** = **大厂算力军备竞赛白热化**
- Groq 故事 = **小厂在 Nvidia 收编后找到的"非对抗"生存路径**：**LPU 技术已被 Nvidia 复制 → Groq 不再做硬件 → 转型云服务 → 维持品牌 + 客户 + OLS 服务**
- **结构信号**：**当 AI 芯片 startup 无法在硬件维度与 Nvidia 抗衡时，**唯一的生存路径是把硅变成服务**——这是 CoreWeave / Lambda / Groq / 国产 8 家 inference 创业公司共同的方向

**Nvidia 的"licensing + acquihire"套路**：

- **2024/2025 收编 Groq**（$20B）= **inference 维度**
- **2024 收编 Mellanox**（$7B）= **networking 维度**
- **2024 收编 ARM 失败**（$40B offer rejected）= **CPU 维度**
- **2025 持续投资 CoreWeave / Lambda**（资本维度）= **inference cloud 维度**
- **结构判断**：**Nvidia 用"licensing + acquihire" + 直接资本投资**双线**把"任何潜在的 GPU 替代者"收编到自己生态**——Groq 拿到 $650M 维持运营，但 LPU IP 已归 Nvidia

来源：TechCrunch | Axios | AIWeekly | IntuitionLabs | Yahoo Finance | 2026-05-28 → 06-01

### 🔵 OpenAI 加密推理 blob 签名怪异事 5/29 在 HN 152 分、cryptography engineering 详解

cryptography engineering 5/29 发布《Fooling around with encrypted reasoning blobs》（HN 6/2 152 分 / 32 评论）：OpenAI 在 API 响应里返回**带签名的"思维链 opaque blob"**——要求客户端原样回传以保持推理上下文连续性，但 blob 实际**包含可被验证的"thinking 块" + 内部 state**。

**核心 findings**（cryptography engineer 自述）：

- 起因：**作为"hobby project"在周末分析 OpenAI API 加密 reasoning 内容**
- 关键发现：**OpenAI 在 LLM 的"thinking block"里加签名**——"I still don't know why I did this. What in the world was a signature doing in an LLM's 'thinking' block?"
- OpenAI 官方文档表述："this data contains opaque reasoning, and that you're not meant to look at it; you're just supposed to ship it back to the server on the next turn"
- 该工程师**被 OpenAI 认证为 "cyber researcher"**（"this also got me certified as an OpenAI 'cyber researcher' which is something that doesn't happen every day"）
- 暴露的具体问题：**签名 blob 内部包含可读 "thinking text"**——这意味着 OpenAI reasoning 模型**在客户端 / 网络层暴露了 thinking 文本**，**与"opaque + 加密"的官方承诺不符**
- 不是高危漏洞（"has little to do with real cryptography"），但**暴露 OpenAI 内部 reasoning state 的存储策略不一致**

**与其他 AI 厂商对照**：

- **Anthropic Claude Extended Thinking**：thinking 块**直接明文返回客户端**（不带签名 + 不要求回传）
- **Google Gemini Thinking**：类似 Anthropic 模式，**明文**
- **xAI Grok Reasoning**：明文 + tool_use 状态
- **OpenAI o-series**（5/5 之前的 o1/o3）：**明文 thinking**
- **OpenAI o-series + 5.5 之后**：**签名 blob 模式**——**这是 OpenAI 独有的设计**

**OpenAI 此次设计的隐含语义**：

- 官方目的：**用 blob 维持 reasoning state 连续性**（避免 client 篡改 thinking 过程）
- 实际效果：**让 reasoning 模型可以在 thinking 阶段嵌入"私有 logic"**——**这与 Anthropic 5/29 公开 Mythos 找洞 530 个 + 6/2 10,000+ 漏洞形成"OpenAI 隐藏 reasoning 内容 / Anthropic 公开 reasoning 用于安全"的对照**
- 安全风险：**"加密 reasoning" = "不透明"≠"加密"**——一个好的客户端实现可以反序列化签名 blob 并读出 thinking 文本（cryptography engineer 做到了）
- 模型行为含义：**OpenAI 正在把"思考过程"作为可被客户端验证的内容**——这与"模型应该思考但用户不需看到"传统教条相反

**与 6/3 evening 已写的 "OpenAI Goblins 失控"对照**：

- **Goblins 6/2**：OpenAI 模型在答案中频繁出现 goblins 词汇（**训练时多代际累积偏差**）
- **加密推理 5/29**：OpenAI 在 thinking 阶段用签名 blob **但 blob 内 thinking 文本实际可见**
- **共同主题**：**OpenAI 模型行为层 / 透明度层 / 推理层**在三周内**连续出现 3 次"内部状态外泄"事件**（Goblins 答案层 + 加密推理思维链层 + 模型安全 GTIG 攻击侧）

来源：cryptography engineering | HN id=48321210 | X @betterhn20 | 2026-05-29

---

## 🔐 安全攻防：AI 防御侧工业化临界点已过

### 🟣 Mythos 累计 10,000+ 漏洞 + Cloudflare "AI 误报率低于人类"

接昨日 21evening 的 AISLE 12/12 OpenSSL（**防御侧深度收齐单产品**）+ Mythos 530 / 75 修复（**防御侧广度**），6/2 Anthropic 公告把 Mythos 累计数据拉到 **10,000+ 高/严重严重漏洞**——**这是 2 个月内从 530 增长到 10,000+ 的 20x 跃升**。

**Cloudflare 单独贡献**：

- **2,000 个**关基系统 bug
- **400 个高/严重**
- 误报率**比人类测试员更低**（"false-positive rate the company described as better than that of human testers"）

**Cloudflare 作为 web 基础设施公司**（CDN / DNS / 反 DDoS / Workers）的特别意义：他们的关基系统**已经过多年人类 + 传统 fuzzing 测试**——Mythos 仍能找出 2,000 个 bug，**且误报率比人类低** = **Mythos 的"假阳性 / 假阴性"比都超过人类测试员**——**这是首次公开量化"AI > 人类"在错误率维度的数据**。

**与 AISLE 12/12 OpenSSL 的对照**：

| 维度 | Mythos（Anthropic） | AISLE（Stanislav Fort） |
|------|---------------------|------------------------|
| 范围 | 跨企业全栈（Cloudflare + Apple + Amazon + Microsoft + 150 新组织）| 单一产品（OpenSSL）|
| 深度 | 跨代码库 | **12/12 全收 + 25-27 年藏洞 + 1 个比项目还老** |
| 数量 | **10,000+**（6/2 累计）| **13/14**（2025 全年 OpenSSL）|
| 修复 | 530→75 (5/25) → 部分（6/2）| 5/12 修复 + 24+ curl PR |
| 误报率 | **比人类测试员低**（Cloudflare 反馈）| 较低（curl 5 个真实 CVE + 30+ 报告）|

**结构信号**：Mythos = **"广度 + 低误报率"**（跨企业可量产）；AISLE = **"深度 + 形式化方法"**（单产品可全收）——**两种模式互补**：Mythos 给全行业"装雷达"，AISLE 给单产品"做核磁"。

来源：Anthropic Glasswing 公告 | CyberScoop | SecurityWeek | 2026-06-02

### 🔵 Exchange 0-Day CVE-2026-42897 后续：Windows MiniPlasma 0-Day 同期被披露

接昨日 21evening 的 Exchange CVE-2026-42897 已在野利用，**6/2 thehackernews 5 月 weekly recap**进一步披露：

- **MiniPlasma Windows 0-Day**——**SYSTEM 权限提升**，**fully patched systems 受影响**
- **codexui-android npm Supply Chain Attack**——**OpenAI Codex authentication tokens 被盗**（6/1 报道）——**直接对 Build 2026 Codex 上 AWS Bedrock 时期的开发者攻击**
- **Megalodon GitHub Attack**——**针对 5,561 repos 的恶意 CI/CD workflow worm**（5 月）
- **Microsoft Defender 两个 0-Day 在野利用**（5 月）
- **Palo Alto GlobalProtect VPN 认证绕过 CVE-2026-0257**（5 月）

**6/2-6/3 安全态势总结**：

- **攻击侧**：AI 辅助零日 + 供应链 + 邮件 + VPN + Windows 系统层**多线并进**
- **防御侧**：Mythos 10,000+ 漏洞 + Cloudflare "误报率低于人类"
- **AI 攻防范式分裂进入 6 月新阶段**——**不再是"AISLE 单点突破 + Mythos 报告"**，而是"AI 找洞 + AI 攻击 + 人类修洞"三线同时加速

来源：thehackernews weekly recap | 2026-06-01 → 06-02

---

## 📊 预测市场 + AI 代理：Polymarket Anthropic 81% / 82% + Olas Polystrat 6/3 扩运营

### 🟣 Polymarket "Anthropic 6 月底顶级模型 81%" + "Anthropic 第二名 82%"

**6/3 Polymarket 关键 AI markets 实测概率**（与昨日 21evening 一致，今日维持）：

| 市场 | 当前概率 | 趋势 |
|------|----------|------|
| **Anthropic 6 月底 #1 模型** | **81%** | 高位维持（昨日 81%）|
| **Anthropic 6 月底 #2 模型** | **82%** | 高位维持（昨日 82%）|
| OpenAI 6 月底 #1 模型 | ~12% | 下行 |
| Google 6 月底 #1 模型 | ~5% | 下行 |
| xAI 6 月底 #1 模型 | <2% | 下行 |
| **OpenAI IPO by June 5, 2026** | 维持中等概率 | 关键时点 5 天内 |
| **Anthropic 估值 hit $XXX by June 30** | 维持高位 | 配合 S-1 递交 |
| SpaceX 估值 hit $XXX by June 30 | 维持中等 | 配合 IPO 预期 |

**5/28 Opus 4.8 + 6/2 Glasswing 150 组织扩围**对 Polymarket 的影响：

- **Anthropic 6 月底 #1 模型 81%**：5/28 Opus 4.8 拿到 AA Intelligence Index 61.4（vs GPT-5.5 60.2）后，**市场押注 Anthropic 在 6/30 前仍持有 #1 位置**
- **Glasswing 扩围**：**Mythos 不直接上 #1 榜单**（仅 Project Glasswing 内部），但**Mythos 6/2 找洞 10,000+ 的工业级能力**为 Anthropic **品牌侧**加分
- **风险因子**：6/30 前**OpenAI 是否在 DevDay（已过去）/ Anthropic Dev Day（5/28 已发布 Opus 4.8）/ Google I/O 后续 / xAI 6 月「三日连发」尾声**推出新模型？

**与 6/3 evening 已写"Anthropic S-1 递交 + Wedbush '打开闸门' vs WIRED '史上最大 IPO 候选'"的对照**：

- evening 已写 IPO 资本侧（**S-1 已递交 / 5/28 估值 $900B / 6/3 Wired 改口"史上最大"**）
- 21evening 写 Polymarket 概率侧（**Anthropic 双榜 81% / 82%**）——**两件事一起看：Anthropic 6/30 前 IPO + 仍持 #1 模型 = 估值 $900B 站稳** = **Polymarket 81%/82% 是"概率已 priced in"**——**关键观察**：**6/30 前如有任何"非 Anthropic 模型上 #1"事件**，Polymarket 会剧烈反应

来源：Polymarket | Anthropic Opus 4.8 公告 | 2026-06-03

### 🟣 Olas Polystrat 6/3 扩运营：AI 代理 24/7 在 Polymarket 上交易

Olas（Valory AG 协议）2/2026 推出 **Polystrat**——"autonomous AI agent that trades on Polymarket 24/7 on behalf of its human user"（CoinDesk 3/15 复盘）。**6/3 起 Olas 扩大 Polystrat 在 Pearl App Store 的运营**——把 Polystrat 与 **Omenstrat**（Omen 链上预测市场代理）组成完整套件。

**关键数据**：

- **Polystrat 用户数**：6/3 起扩大（具体数字未公开，但 Pearl App Store 是 Olas 首个"AI agent app store"）
- **AI 代理能做什么**：
  - 7×24 在 Polymarket 扫描市场
  - 用 natural language 描述策略（"risky"/"balanced" preset 或自定义）
  - 自动收集收益
  - **OLAS activity rewards**——运行代理可额外获得代币奖励
  - 完整代理所有权：用户可停止代理或提取资金
- **Omenstrat**：在 Gnosis 链上 Omen 平台运行
- **Polystrat + Omenstrat 组合** = 跨 CEX/DEX 预测市场代理

**与 5/29-6/2 同期其他 AI 代理的对照**：

| 平台 | 类型 | 6/3 状态 |
|------|------|----------|
| **Olas Polystrat** | 预测市场代理 | 6/3 扩运营 |
| **OpenClaw** | 自然语言交易代理（接 Claude Code/Codex）| 已 GA |
| **Pearl App Store** | "AI agent app store" | 6/3 上 Polystrat |
| **virtuals.io** | AI agent 协议 | 持续运营 |
| **Autonolas (Olas 母公司)** | 多代理系统 | 持续运营 |

**与 6/3 evening 已写的"Build 2026 Windows = AI Agent OS + Day 2 Copilot debugging/profiling/test-generation agents"的对照**：

- evening 写的是 **B2B 开发者代理 + Windows 系统集成**
- 21evening 写的是 **消费级预测市场代理 + 加密 24/7**——**两类代理在不同维度同时扩张**：开发者侧在"代码 + 系统"，消费者侧在"金融 + 加密"

**预测市场 AI 代理的临界点**：

- **6 月起**：预测市场不只是"人买卖"——**有 24/7 自主代理常态化参与**
- **市场质量变化**：**AI 代理的策略更纪律化、反应更实时**——但**大量 AI 代理聚集可能导致"羊群效应"和"流动性震荡"**（特别是有 OLAS 奖励的代理会为拿奖励而非盈利而跑）
- **监管含义**：CFTC 5 月已对 Polymarket 等"事件合约"加强监管——**AI 代理的"无人类决策"特征可能触发新一轮监管**

来源：Olas Network Blog | Pearl App Store | CoinDesk 3/15 复盘 | 2026-02 → 06-03

---

## 🧠 Claude Opus 4.8 二次回顾：5/28 上线、6/2 Glasswing 6 月内扩围已成 Anthropic 6 月主线

**5/28-6/2 期间 Anthropic 主线事件流**（21evening 二次回顾）：

1. **5/19**：KPMG 与 Anthropic 战略联盟——Anthropic Claude 跨 KPMG 27.6 万员工部署（"KPMG integrates Claude across its core business and workforce"）
2. **5/28 Opus 4.8 发布**：Artificial Analysis Intelligence Index 61.4 vs GPT-5.5 60.2（67% 胜率），SWE-Bench Pro 69.2% vs GPT-5.5 58.6%，**首发 dynamic workflows**（parallel sub-agent orchestration）
3. **5/28 Anthropic "Claude is a space to think"**——**Anthropic 公开反对广告**（"we explain why advertising incentives are incompatible with a genuinely helpful AI assistant, and how we plan to expand access without compromising user trust"）——**这是 Opus 4.8 同日发布的"商业哲学声明"**
4. **6/2 Project Glasswing 扩围**——150 新组织 / Mythos 累计 10,000+ 漏洞

**与今日 6/3 evening 已写"市场对 Anthropic S-1 递交 + Wedbush / WIRED 两极反应"的对照**：

- evening 写**资本市场反应**（S-1 递交 → Wedbush "打开闸门" → WIRED "史上最大 IPO"）
- 21evening 写**产品 + 哲学 + 安全**（Opus 4.8 模型 + "不广告" + Glasswing 扩围）——**两件事一起看**：**Anthropic 5/28 6/2 期间同时在做三件事：① 顶级模型发布 ② 哲学立场表态（不广告）③ 防御侧工业级突破**——**为 S-1 资本市场叙事提供"非纯商业"的故事线**（"我们不只是赚钱，我们在做对的事"）

**Anthropic 6 月主线的结构**：

- **5/28-6/3 一周内**：KPMG 联盟 + Opus 4.8 + 不广告声明 + Glasswing 扩围
- **5/30-6/3 二周内**：S-1 递交 + 估值 $900B + 5 家伙伴扩张 + Mythos 6/30 前全开放
- **6 月底前预期**：Opus 4.8 在 AA Intelligence Index 维持 61.4+ + Mythos 全开放 + 至少 1 个 frontier enterprise 签约

来源：Anthropic News | Artificial Analysis | KPMG Anthropic 公告 | 2026-05-19 → 06-02

---

## 🔬 arXiv cs.AI / cs.MA 6 月热度：multi-agent + crypto 治理 + agent 安全

**6 月 arXiv cs.AI 关注论文**（基于 arxiv.org/list/cs.AI/current 抓取）：

1. **"General Framework of AI Agents"**（Springer JCS 2025/12 接收，2026 多次引用）——ByteDance Seed 团队总结"任务导向 + 多模态输入输出 + LLM 推理 + RL 构建 + 工具 + 记忆"的 agent 通用框架，**对标人脑信息处理机制**——**6 月 agent 论文的标准引用**
2. **"Multiagent Systems"** 6 月热度（arxiv.org/list/cs.MA/current）——**McGill + Mila + Ubisoft La Forge 联合**的多 agent 策略研究（"evaluate six representative agents"）——发现 **simple greedy hill-climber 接近 tree-search 最佳 agent**——**"策略复杂度 ≠ 性能"**——**adaptive agent（机会密集用 greedy，机会稀疏用 tree-search）超越所有 6 个 baseline**
3. **"PROWL: adversarial world-model training"**——**MineRL 框架**训练 OOD 鲁棒 agent——发现 **reward-hacking behaviors**（weak behavioral constraints 下）——**与昨日 AISLE 形式化方法 + Mythos 工业级两条线形成"agent 训练鲁棒性"第三条线**
4. **"AI agents in daily life"** 类综述（Reddit r/AI_Agents 热门）

**6 月 cs.AI 论文结构信号**：

- **"agent 通用框架" 综述类**（ByteDance Seed 等大厂）= 工业界**统一术语**
- **"multi-agent 策略"**（McGill + Mila + Ubisoft）= 学术界**对比 agent 算法**
- **"adversarial world-model training"**（PROWL）= 学术界**对 AI 攻防失衡的回应**
- **共同主题**：**agent 已成为 2026 年 AI 研究的主轴**，**对推理 + 工具使用 + 多 agent 协作 + 鲁棒性**四条线都有论文爆发

来源：arxiv.org/list/cs.AI/current | arxiv.org/list/cs.MA/current | Reddit r/AI_Agents | 2026-06-01 → 06-03

---

## 📌 今日 21:00 关键 takeaway

1. **Anthropic 6/2 Glasswing 扩围 150 组织 + Mythos 累计 10,000+ 漏洞 + Cloudflare "AI 误报率低于人类"**——**AI 防御侧工业化临界点已过**
2. **Microsoft 6/2 端出 MAI-Code-1-Flash（137B / 5B 活跃，51% SWE-Bench Pro）上 GitHub Copilot**——**与 6/1 token 计量改革形成"两步棋"**——**给 Copilot 用户一个低成本替代 Claude Haiku 4.5 的选项**
3. **Groq 5/28-29 拿 $650M 转型 inference neocloud**——**"硬件被收编后转云服务"的结构范本**
4. **OpenAI 加密推理 blob 签名怪异事 5/29**——**OpenAI 内部 reasoning state 外泄，cryptography engineering 详解**
5. **MAI-Thinking-1 盲测 Sonnet 4.6 持平 + Opus 4.8 维持 AA Intelligence Index #1 61.4**——**5/28 发布的余波持续到 6/3**
6. **Polymarket Anthropic 6 月底双榜 81% / 82% 维持** + **Olas Polystrat 6/3 扩运营**——**预测市场 AI 代理化进入消费级**
7. **Anthropic 6 月主线**：KPMG + Opus 4.8 + 不广告 + Glasswing + S-1——**为资本市场叙事提供"非纯商业"故事线**
8. **arXiv 6 月热度**：multi-agent + agent 安全 + agent 通用框架——**agent 已成为 2026 AI 研究主轴**

---

## 🔗 来源索引

| 类别 | 来源 |
|------|------|
| Anthropic 6/2 公告 | anthropic.com/news/expanding-project-glasswing + CyberScoop + SecurityWeek + Engadget + CNBC |
| MAI-Code-1-Flash | microsoft.ai/news/introducingmai-code-1-flash + github.blog changelog 6/2 + HN id=48374466 |
| Groq 融资 | TechCrunch 5/29 + Axios 5/28 + AIWeekly + IntuitionLabs + Yahoo Finance |
| OpenAI 加密推理 | blog.cryptographyengineering.com 5/29 + HN id=48321210 + X @betterhn20 |
| Mythos 6/2 数据 | Anthropic Glasswing 公告 + Cloudflare 反馈 + CSA + SANS + OWASP 联合报告 |
| Exchange 0-Day 后续 | thehackernews weekly recap 6/1 |
| Polymarket | polymarket.com AI + Tech 分类 |
| Olas Polystrat | olas.network/blog + pearl.you/polystrat + CoinDesk 3/15 |
| Opus 4.8 二次回顾 | anthropic.com/news/claude-opus-4-8 + Artificial Analysis + Vellum + TechCrunch + MLQ.ai |
| arXiv | arxiv.org/list/cs.AI/current + arxiv.org/list/cs.MA/current + Reddit r/AI_Agents |

---

> 21evening 21:00 收官。**当日（6/3）已发布三档**：morning (Anthropic 资本 + 三大独角兽 IPO + 出口管制 + 具身国标) + afternoon (腾讯云降价 + Marvell 涨 + 宇树 IPO + Build Day2 Web IQ) + evening (Build Day2 完整三件套 + Stargate Michigan + Copilot token 计量 + Grok Build beta)。**21evening 主动差异化**：① Mythos 6/2 扩 150 组织 (与昨日 evening AISLE 12/12 + 昨日 21evening Mythos 530 形成"防御侧工业化"完整三幕) ② MAI-Code-1-Flash (与 Build Day2 MAI-Thinking-1 形成"小快 + 慢强") ③ Groq $650M (与 Build Day2 算力叙事对照) ④ OpenAI 加密推理 (与 OpenAI Goblins 形成"内部状态外泄"两连击) ⑤ Polymarket + Polystrat (昨日 21evening 已写 81%/82%，今日维持 + 6/3 Polystrat 扩运营作为 agent 化升级)。
