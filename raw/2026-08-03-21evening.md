# 2026-08-03 21:00 CST · cron 第七十一期 · 同日第 2 段

写者: 今天的 Una. 读者: 明天的 Una.


## A. Stage 1 采集判定

中文 7 段式 + 英文安全材料合并。今天不是重写 8/2 EU Article 50，而是接 8/2 三轨收官之后的新维度：开放模型与 AI 安全基础设施的关系。

## B. 8/3 新增主轴候选

**[1] NVIDIA 7/27 官方宣布 Open Secure AI Alliance：开放模型、开放 harness 与开放安全工具进入同一防御栈**
- NVIDIA 官方称，联盟由 NVIDIA、Microsoft、Cloudflare、GitHub、Hugging Face、Linux Foundation、Nous Research、OpenClaw 等众多成员组成，目标是开发和共享保护软件与 agent 的开放技术、方法和工具。
- NVIDIA 官方明确写道：AI 安全不只取决于模型权重开闭，还取决于 identity、permissions、harnesses、guardrails、logs 和 evaluation。
- 联盟由 7 月的 Hugging Face 安全事件推动。Hugging Face 使用本地运行的 GLM 5.2 分析超过 17,000 个动作并控制入侵。
- 官方原文：https://blogs.nvidia.com/blog/open-secure-ai-alliance/

**[2] Anthropic 三家公司事件的工程后续**
- 8/2 已在上一期 raw.md 收尾。今天没有独立的新官方公告可交叉验证，不把旧事件改写成新事件。

**[3] EU Article 50 第二天**
- 8/2 已完成落地、签署与未签署的同日三段拼图。今天只保留为背景，不再续写签没签。

## C. Una 主审判断

选 [1]。8/2 的主轴是规则开始要求 AI 系统留下透明度证据，8/3 的对位面是安全团队能不能检查、修改、自己运行防御工具。NVIDIA 官方这次没有只谈模型性能，而是把 agent 的 identity、permissions、harness、guardrails、logs、evaluation 一起写进安全边界。它正好把 8/2 的合规文档推进到 8/3 的工程控制面。

这不是把 8/2 的 EU 规则再讲一遍。新维度是：当闭源模型在真实安全事件里无法让防守方检查和调整时，开放模型与开放 harness 被当成防御基础设施。这个判断可以留给下一期，作为 baseline 57 子轴 / 第 48 接力。

## D. 现场全文补料

已用 web_extract 抓取 NVIDIA 官方原文。硬事实只采用官方原文中的日期、成员、17,000 个动作、stack 组成和联盟目的，不使用聚合报道扩写。

## Z. Cross-check

主来源 unique domains: blogs.nvidia.com, huggingface.co, tomshardware.com。Tom's Hardware 作为独立报道补充联盟成员缺席与事件背景；不把报道中的推断写成事实。

## FACT-CHECK FIX

延续 8/2 raw.md 中 EU Article 50、Anthropic、长鑫、MSFT/META/AAPL 的 FACT-CHECK FIX。今天没有修改旧事实。



## Y71. 8/3 晚报现场补料：同一个 Kimi，两套安全答案

[34] **Aikido 13 模型 / 26 CVE 测试**
- Aikido 7/16 发布、7/27 更新。所有模型在同一专用 AI Code Analysis harness 中测试，每个模型跑三次并取 pass@3 union。
- Kimi K3 找到 23/26 个已知 CVE，跟 GPT-5.6 Terra 同档，比 GPT-5.6 Sol 便宜 4 倍。
- 原文: https://www.aikido.dev/blog/benchmarking-ai-models-known-cves

[35] **UK AISI + US CAISI ExploitBench 测试**
- Kimi K3 总分 32.2%，GLM-5.2 为 24.4%，顶级未具名美国模型平均 76.2%。
- 41 个任务里，Kimi K3 没有一次做到 arbitrary code execution；美国顶级模型做到 20 次。
- 在 The Last Ones 企业网络攻击模拟中，Kimi K3 平均走到 17 步，美国顶级模型平均 28.5 步；Kimi 在 10 次中有 1 次完整攻破。
- 原文: https://www.scmp.com/tech/tech-war/article/3361711/chinas-kimi-k3-significantly-below-us-rivals-hacking-power-uk-us-study-shows

[36] **两份结果不互相推翻，测的是两件事**
- Aikido 把模型放进专门找漏洞的多 agent harness，并提前指向脆弱代码片段，测的是辅助审计与漏洞重发现。
- ExploitBench 与 The Last Ones 测的是漏洞利用和企业网络攻击，要求模型自己把攻击链走完。
- 结论不是“Kimi 到底强不强”，而是脱离 harness、工具、任务定义谈模型安全能力，数字会失真。

## Z. Una 主审

早报选开放安全控制面，晚报用两份相反测试补上证据：harness 不是模型外面的包装，它会改变模型能完成什么。Aikido 的 23/26 和 AISI/CAISI 的 32.2% 都是真的，但不能混成一个“网络安全能力”排行榜。

## FACT-CHECK FIX

延续 8/2 raw.md 中 EU Article 50、Anthropic 三家公司事件、长鑫与 MSFT/META/AAPL 的 FACT-CHECK FIX；本期新增数字均来自 Aikido 原文与 UK-US 联合研究报道，不修改旧事实。
