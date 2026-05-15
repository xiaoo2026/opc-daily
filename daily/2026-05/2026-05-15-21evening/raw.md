# OPC 晚间情报 | 2026-05-15

## 1. 模型发布：5月上旬密集发布期回顾

| 模型 | 公司 | 日期 | 亮点 |
|------|------|------|------|
| GPT-5.5 Instant | OpenAI | 5月5日 | 幻觉率大幅降低，AIME 81.2，MMMU-Pro 76 |
| SubQ 1M-Preview | Subquadratic | 5月5日 | 12M token 上下文窗口 |
| Grok 4.3 | xAI | 5月6日 | 深度搜索能力 |
| ZAYA1-8B | Zyphra | 5月6-7日 | 开源小模型 |
| Gemini 3.1 Flash Lite | Google | 5月8日 | 轻量低成本 |
| ERNIE 5.1 | 百度 | 5月8日 | LMArena 第4名（1223分），中国模型最高 |

来源：buildfastwithai.com, teqvolt.com, felloai.com

## 2. 基准评测：Kimi K2.6、Leni 抢占头条

- **Kimi K2.6**（Moonshot，4月20日发布）：开源权重模型，SWE-bench Pro 击败 GPT-5.4、Claude Opus 4.6、Gemini 3.1 Pro，长上下文搜索能力强
- **Leni**（5月12日）：商业地产AI平台，在4大基准测试中登顶：
  - DRACO Benchmark 第1（深度研究）：71.6%，超越 Perplexity/Google/OpenAI 深度研究产品
  - SpreadsheetBench Verified：全球前2（365/400任务正确）
  - BullshitBench 第1：98%识别虚假前提，超越全部142个公共模型
  - GAIA 第1：77.0%，超越 Genspark、Manus、OpenAI Deep Research

来源：PRNewswire, teqvolt.com

## 3. 安全动态：AI 辅助攻击进入现实

**首例AI研发零日2FA绕过**（Google GTIG，5月11日）
- 网络犯罪组织使用AI（极可能为LLM）研发出首个已知零日2FA绕过漏洞
- Python脚本含大量教育性docstring、幻觉CVSS评分，教科书式Pythonic格式
- 已修复，本质是硬编码信任逻辑缺陷，LLM擅长发现此类漏洞

**APT组织AI滥用案例**：
- UNC2814（疑似中国）：引导Gemini进行网络漏洞研究（Jailbreak）
- APT45（朝鲜）：数千个重复prompt递归分析CVE和PoC
- APT27（中国）：用Gemini加速开发僵尸网络管理应用
- PromptSpy：安卓恶意软件滥用Gemini分析屏幕+自动点击，捕获生物识别数据

**灰市API中转**：
- 中国开发者通过relay平台绕过Claude/Gemini访问限制
- 研究发现17个shadow API，MedQA精度从83.82%暴跌至37%

来源：The Hacker News, arxiv.org

## 4. AI Agent 框架格局

| 框架 | 定位 | 亮点 |
|------|------|------|
| LangGraph | 生产级首选 | 最多生产部署（Klarna/Cisco/Vizient），MCP原生支持，100+LLM |
| CrewAI | 角色型多Agent | LlamaIndex工具可集成进CrewAI系统 |
| AutoGen | 多Agent对话 | 微软主推 |
| OpenClaw | 高影响力Agent | 2026年重要开源项目 |
| Dify | 工作流平台 | 生产级AI应用开发平台 |

GitHub Trending：OpenHands（60k star）、MetaGPT（59k）、opencode（54k）、AutoGen（48k）

来源：firecrawl.dev, aimultiple.com, intuz.com

## 5. 加密+AI融合市场

- **AWS + Coinbase + Stripe**：Bedrock AgentCore Payments 支持 Agent 用 USDC 购买网络内容、API访问、MCP服务器
- **Binance**：为AI Agent提供"交易所级大脑"交易智能
- **Virtuals Protocol生态**：FET $0.24-$0.30（市值$6.23亿），VIRTUAL $0.93（市值$6.11亿）
- **Polymarket**：AI Agent 7×24小时自主交易，从新闻实时生成预测问题

来源：blockonomi.com, stocktwits.com

## 6. AI辅助攻击规模化（The Hacker News 专题）

2026年成为AI辅助攻击元年：
- 漏洞发现、武器化、利用时间线全面压缩
- 威胁组织利用AI进行自动化漏洞发现、大规模账户滥用（注册/取消高级LLM账户循环）
- AI环境成为新攻击面（TeamPCP/UNC6780攻击AI环境开发者）
- 防御方：AI驱动攻击比传统攻击更嘈杂，EDR/XDR可检测

来源：The Hacker News "2026: The Year of AI-Assisted Attacks"
