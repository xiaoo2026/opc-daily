# OPC 晚间情报 | 2026-05-27

## 1. 模型发布动态：谷歌 I/O 2026 全 AI 化，Gemini 3.5 Pro/Ultra 即将登场

**谷歌 I/O 2026 于 5 月中下旬举行，全面 AI 化**。本次大会核心发布：

- **Gemini 3.5 Pro** 将于 6 月正式发布，已进入发布前最后阶段
- **Gemini Omni** 被定位为谷歌最先进的多模态 AI 系统，可同时处理文本/音频/视频/图像
- **Gemini 3.5 Flash Lite** 继续作为轻量级低成本选项提供服务
- 搜索正进入智能体时代，Gemini 3.5 加持下的 AI Overview 用户突破 25 亿，AI Mode 用户超 10 亿
- **Spark 智能体**首秀，具备 24 小时后台运行、多模态整合和深度分析能力，实现从被动查询到主动服务的转变

**重大变化：OpenAI 可登陆 AWS 和谷歌云**。4月27日微软-OpenAI 协议松绑，OpenAI 模型现已可在 AWS Bedrock 和 Google Vertex AI 上调用，开发者可以在三大云平台上调用 OpenAI 模型。

**5月模型回顾（截至5月27日）：**
- GPT-5.5 Instant（5月5日，OpenAI，ChatGPT新默认模型）
- SubQ 1M-Preview（5月5日，Subquadratic，1200万token上下文，次二次注意力）
- Grok 4.3（5月6日，xAI）
- ZAYA1-8B（5月6-7日，Zyphra，AMD训练，Apache 2.0）
- Gemini 3.1 Flash Lite（5月8日，Google）
- **Llama 进入"维护模式"**：Meta 宣布重心转向闭源模型 Muse Spark，Llama 停止主动迭代（5月20日）
- **Meta 推出 Llama 4**（Scout + Maverick，MoE架构，4月5-6日）

**Anthropic 动态：**
- Claude Opus 4.7 于4月17日发布，每两个月稳定迭代
- Anthropic 发布《Founder's Playbook》（36页 PDF），阐述2026年AI创业方法论（5月14日）
- Anthropic 年化营收已从2024年底的10亿美元增至2026年5月的约450亿美元（18个月80倍增长）
- **Q2 预计首次盈利**：营收109亿美元（Q1的48亿翻倍），营业利润5.59亿美元
- IPO 筹备进行中，估值可能超过3000亿美元

---

## 2. 安全动态：CVE-2026-44338 PraisonAI 漏洞——开源 Agent 框架的 Auth Bypass

**The Hacker News 披露**：PraisonAI（开源多智能体编排框架）爆 CVE-2026-44338，CVSS 7.3，属于"缺少认证"类型，暴露敏感端点，攻击者可在无需 Token 的情况下调用 API 服务器的受保护功能。

**关键点**：PraisonAI 默认配置下 Flask API 服务器认证被禁用。漏洞公开后数小时内即出现野外利用。

**相关高危漏洞（5月14日同批披露）：**
- **Windows 零日漏洞**：BitLocker 绕过 + CTFMON 权限提升，由匿名网络安全研究员披露
- **CVE-2026-20182**：Cisco Catalyst SD-WAN Controller 认证绕过漏洞，CVSS 10.0（满分），已有野外利用
- **CVE-2026-20822**：微软安全更新（5月24日）
- **CVE-2026-26144**：微软 Excel 信息泄露，CVSS 7.5

**OpenClaw 安全通告**（GitHub Advisory，5月11日）：`GHSA-5mh4-3rv3-fpcf`——Host exec 环境清理遗漏包、注册表、Docker、编译器、TLS 覆盖变量，已撤回（可能是重复问题）。

**企业 AI 安全态势**：根据世界经济论坛《2026年全球网络安全展望》，64%的企业现在会在部署AI工具前进行安全风险评估（去年仅37%）。

---

## 3. AI × 预测市场：Polymarket AI 代理现状

**关键数据（截至5月27日）：**
- Polymarket 上30%以上的钱包已使用 AI 代理（LayerHub数据）
- Polystrat Agent（Olas/Valory）2月上线后，约一个月内执行4200+笔交易，单一交易最高回报率376%，37%的 Polystrat AI 显示正 P&L，人类交易者仅7-13%
- David Minarsch（Valory CEO）："你已经在和机器竞争，无论你是否意识到"

**活跃 AI 相关预测市场：**
- "Which company has the best AI model end of May?"
- "Which company has the #1 AI model end of May?"
- "Best AI model on May 16?"
- "What kind of product will OpenAI announce in 2026?"
- Anthropic IPO Closing Market Cap

**监管动态：** CFTC 对 Polymarket 调查持续推进（2021年10月首次报道，2026年仍在进行）。

---

## 4. 政府与监管动态

**美国政府提前访问 AI 模型**：Google、Microsoft、xAI 已同意向美国商务部 AI 标准和创新中心（CAISI）提供新模型提前访问权限，进行"部署前评估和研究"。OpenAI 和 Anthropic 重新谈判了现有合作协议以符合特朗普 AI 行动计划优先级。CAISI 已完成40+次评估（含未发布模型）。

**AI 监管全球动向**：64%的企业领导者表示在部署AI工具前会进行安全风险评估。AI 安全评估成为企业关注焦点。

---

## 5. GitHub Trending：2026年5月 AI 开源项目 Top 动态

- **Superpowers** ⭐ 199,943——AI编程助手框架
- **OpenHuman** ⭐ 23,534——桌面AI伙伴，118+集成
- **Andrej Karpathy Skills** ⭐ 140,667——Karpathy的Claude Code调教经验
- **OpenClaw**——GitHub最受欢迎开源项目（24.8万星），超越Linux
- **GitHub 因增长太快频发故障**，正在重构，目标是承载能力提升10倍（4月29日）
- **Claudi-hud** 和 **claude-mem** 插件各自获得近1000星增长
- **project-nomad**——离线AI硬件，2,032星

---

> 数据来源：The Hacker News / Google Threat Intelligence / WhatLLM.org / Artificial Analysis / CoinDesk / Polymarket / Financial Times / IT之家 / 腾讯新闻 / CSDN / 新浪科技
