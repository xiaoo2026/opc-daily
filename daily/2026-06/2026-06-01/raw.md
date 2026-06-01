# OPC 晚报 2026-06-01

> 📅 2026-06-01 | 🕓 18:00 | 覆盖：6月1日全天候

## 🔥 今日头条

**🤖 AI生成零日漏洞首获证实 + GitHub Copilot转向Token计费 + Google搜索25年来最大改版**

零日漏洞里程碑事件：Google威胁情报团队（GTIG）5月确认，全球首次发现威胁分子利用AI模型发现并生成零日漏洞（2FA绕过），代码特征高度符合LLM生成模式。同日GitHub Copilot正式由订阅制改为Token消耗制，开发者账单暴涨数十倍。Google I/O 2026发布Gemini Spark（24/7全天候个人AI Agent），搜索框迎25年来最大改造，AI Overviews月活已突破25亿。

---

## 🤖 模型动态

### 🟢 AI生成零日漏洞全球首获证实——Google GTIG报告
Google威胁情报团队（GTIG）发布报告，确认发现威胁分子使用AI模型发现并生成零日漏洞的实战案例。该漏洞针对一款开源Web管理工具，实现了2FA绕过。GTIG高置信度评估：代码具有典型LLM生成特征（Python脚本、结构化漏洞利用链）。这是全球首例AI辅助零日漏洞在野利用记录，标志着AI网络武器化进入实用阶段。

### 🟢 GitHub Copilot今日起转向Token计费，开发者账单暴涨
GitHub Copilot于6月1日起由固定月费订阅改为Token消耗制（GitHub AI Credits，1 Credit = $0.01）。开发者社区报告显示：有人月费从$29跳至$750，更有人从$50飙至$3000。核心原因：Agentic Coding模式下每次复杂重构需AI反复读取代码、生成修改、执行测试，Token消耗量与旧模式有本质区别。GitHub产品总监承认旧模式"已不可持续"。

### 🟢 Google I/O 2026：Gemini Spark上线，搜索框25年来最大改版
Google在I/O 2026上宣布搜索框重大更新：固定细长条→动态扩展输入域，支持自然语言/图片/视频/PDF多模态输入，可内嵌式连续对话，由Gemini 3.5 Flash驱动。同时推出Information Agents（24/7持久监控网络变化的AI Agent）和Mini-apps（自然语言描述即可自动生成工具）。AI Overviews月活已达25亿，AI Mode突破10亿用户。"十个蓝色链接"时代正式终结。

### 🟢 SpaceX提交2万亿美元IPO申请，6月12日上市
SpaceX正式向SEC提交IPO申请，计划6月12日登陆纳斯达克，目标估值1.75-2万亿美元，最高筹资750亿美元。这是2026年AI三巨头（SpaceX + OpenAI Sep + Anthropic Oct）上市序幕。分析师指出过度依赖Musk个人信誉及SpaceX/xAI合并后估值合理性存疑，但三家合计筹资规模有望超越2022-2025年美国所有IPO总和。

### 🟢 Anthropic完成H轮融资，估值9650亿美元首次超越OpenAI
Anthropic在最新一轮融资中估值达9650亿美元，首次在AI公司估值上超越OpenAI（同期估值约8500亿美元）。Anthropic宣布Claude Opus 4.8，主打更强智能体变成、多领域推理和知识工作能力，官方称"判断更敏锐，主动提问、识别自身错误"。

### 🟢 阶跃星辰开源Step 3.7 Flash：196B+MoE，400 Tokens/s生成
阶跃星辰发布并开源Step 3.7 Flash，面向Agent生产化阶段，总参数196B+（激活11B），最高生成速度400 Tokens/s。原生多模态理解UI/图表/文档，支持联网与视觉搜索增强，针对Claude Code、OpenClaw、Hermes Agent等主流Agent框架优化。

### 🔵 美国政府要求AI巨头模型发布前交政府审查
Google、Microsoft、xAI同意将新模型提交美国商务部AI标准与创新中心（CAISI）进行发布前安全审查。OpenAI和Anthropic在2024年现有合作基础上重新谈判以符合特朗普AI行动计划。此举源于政府考虑对AI模型发布实施强制预审，Anthropic的Mythos模型被指为催化剂。

---

## 📦 GitHub Trending · AI爆款项目

### ⭐ OpenWebUI — 开源AI聊天框架（支持多模型）
Open WebUI是一个功能完备的Web UI，支持Ollama和OpenAI API，扩展性强，模块化设计。

### ⭐ n8n — 工作流自动化平台（AI Agent集成）
n8n是开源工作流自动化工具，提供可视化流程编辑，支持AI Agent集成和复杂工作流编排。

### ⭐ Browser Use — AI浏览器自动化
让AI Agent控制浏览器执行任务的工具，用于Web自动化和网页交互场景。

### ⭐ microsoft / markitdown — 132,731 Stars
Python工具：将文件和Office文档转换为Markdown格式，开发者必备文档处理工具。

### ⭐ anthropics / claude-code — 128,454 Stars
Claude Code：终端中的AI变成助手，理解代码库，通过自然语言命令执行变成任务，支持多种开发场景。

### ⭐ Dify — AI应用开发平台
开源LLMOps平台，支持工作流编排、RAG、多种模型集成、本地/云端部署，面向生产环境AI应用开发。

---

## 🔐 安全警示

### ⚠️ AI生成零日漏洞确认——网络空间安全里程碑
Google GTIG报告：威胁分子使用AI模型（高度疑似LLM）发现并生成零日漏洞，实现了针对开源Web管理工具的2FA绕过功能。这是全球首例"AI辅助零日"在野利用记录。GTIG已命名多个AI恶意工具家族：PROMPTFLUX（利用Gemini API生成代码）、HONESTCUE（调用Gemini进行VBScript混淆）。AI网络武器化已从理论进入实战。

### ⚠️ Megalodon攻击：5561个GitHub仓库被植入恶意CI/CD工作流
大规模供应链攻击"megalodon"利用恶意CI/CD工作流入侵5561个GitHub仓库。攻击者通过修改.github/workflows目录注入恶意Actions脚本。开发者应立即检查仓库CI/CD配置。

### ⚠️ Claude Code源码泄露：51.2万行TypeScript被意外发布
Anthropic Claude Code因npm打包配置疏忽，意外泄露51.2万行TypeScript源码（含1906个文件、40+工具模块），包含未发布核心功能及安全架构细节。Anthropic已紧急下架并发布赔偿公告。

---

## 📄 arXiv 论文精选

### Agentic Reasoning for Large Language Models
研究Agentic Reasoning范式，探索如何让LLM在复杂任务中实现自主推理与工具调用。

### Agent Reasoning Reward Model (Agent-RRM)
提出多维度奖励模型，为Agentic场景提供结构化反馈机制，提升智能体任务完成质量。

### Toward AI Agents That Reason With Us, Not For Us
探索论证式人机协同决策框架，让AI不仅提供答案，而是参与可争议、可修正的辩证过程。

---

## 📊 Polymarket 预测市场

| 市场 | 当前赔率 |
|------|---------|
| 年底最佳AI模型公司（6月末） | Anthropic 77% / Google 17% |
| Anthropic第二好AI模型（6月末） | 79% |
| SpaceX IPO市值超2万亿美元 | 70% |
| 年底最大公司 | NVIDIA 62% / Alphabet 24% |
| Anthropic估值（6月30日） | 9650亿美元（实际已完成） |

---

## 📰 产业要闻

- **英伟达2027财年Q1**：营收816亿美元（+85% YoY），净利润583亿美元（+211%），数据中心业务继续爆发
- **JPMorgan预测**：AI将缩短工作周至3.5天，延长人类寿命至100岁，治愈癌症
- **苹果PICO**：AI引入图像压缩底层基础设施，以1/3体积实现同等画质
- **腾讯DreamNow**：AI创作与展示平台，支持AI视频/图片/互动影游，魏晋国风美学

---

## 🎯 21:00 预告（晚间情报）

今晚21:00将发布OPC晚间情报，重点关注：
- 是否有新模型发布（Gemini 3.5 Pro / GPT-5.6 / Claude Mythos正式版）
- AI安全漏洞跟进（Megalodon攻击范围、Claude Code泄露后续）
- 加密/预测市场动态（SpaceX IPO预期、BTC价格走向）
- 端侧AI进展（Apple PICO、Meta AI吊坠等）

---

*OPC 晚报 | Una陪你看AI | 每日AI资讯精选*