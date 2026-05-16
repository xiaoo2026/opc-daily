# OPC 晚间情报 | 2026-05-16

## 1. 模型发布：Google Gemma 4 全面开源，Claude Opus 4.7 上市，OpenAI Codex 重大升级

### Gemma 4：Google DeepMind 最强开源家族
Google DeepMind 5月15日发布 **Gemma 4**，全系列基于 Gemini 3 研究：
| 型号 | 类型 | 特点 |
|------|------|------|
| Gemma 4 E2B | Dense | 2B 参数量 |
| Gemma 4 E4B | Dense | 4B 参数量 |
| Gemma 4 26B | MoE | 混合专家架构 |
| Gemma 4 31B | Dense | 最大密度版本 |

全部采用 **Apache 2.0** 商用许可，主打高级推理和 Agent 工作流。评测优于 Llama 4。

### Claude Opus 4.7：Anthropic 最强编程模型
Anthropic 4月16日发布 **Claude Opus 4.7**，主打：
- 高级软件工程显著提升，尤其最难编码任务
- 复杂长程任务处理能力大幅改善
- 可信赖度和对指令的精确遵循

已在 Google Cloud Vertex AI 上线（4月15日）。

### OpenAI Codex 重大升级
OpenAI 4月16日宣布 Codex 重大更新，**超过300万开发者**直接受益：
- 可控制用户电脑协同操作
- 记忆用户偏好，从历史行为中学习
- 支持 PR 审查、多文件查看、终端、SSH 远程连接、浏览器内操作

### Anthropic × Gates Foundation：2亿美元AI健康合作
5月14日宣布，**2亿美元/4年**结构性赠款，覆盖：
- 全球健康（疟疾、结核病）
- 生命科学突破
- AI 伦理与安全
- 面向低收入国家的 Claude 使用积分

---

## 2. 安全动态：零日2FA绕过首现，供应链攻击持续

### 首例AI研发零日漏洞（Google GTIG，5月11日披露）
网络犯罪组织使用 LLM 生成**首个已知零日 2FA 绕过漏洞**，特征：
- Python 脚本含大量教育性 docstring、幻觉 CVSS 评分（典型 LLM 训练数据特征）
- 硬编码信任逻辑缺陷（LLM 擅长发现的高层语义漏洞）
- 已修复

**APT 组织 AI 滥用现状：**
| 组织 | 国籍 | AI 滥用方式 |
|------|------|------|
| UNC2814 | 中国 | 引导 Gemini 做网络漏洞研究，触发 persona-driven jailbreak |
| APT45 | 朝鲜 | 千次重复 prompt 递归分析 CVE 和 PoC |
| PromptSpy | 不明 | 安卓恶意软件滥用 Gemini 分析屏幕+自动点击，捕获生物识别 |
| APT27 | 中国 | 用 Gemini 加速开发僵尸网络管理应用（ORB网络） |
| Shadow API | 中国 | 17个 relay 平台绕过 Claude/Gemini 限制，MedQA 精度暴跌 |

### TanStack 供应链攻击（5月15日）
**Mini Shai-Hulud** 供应链攻击击中 OpenAI 两名员工设备，迫使其发布 macOS 更新。攻击通过 npm 恶意包实施。

### Hugging Face LeRobot 未修复 RCE 漏洞
**CVE-2026-25874**：Hugging Face LeRobot（24k GitHub stars）存在未修复的未认证 RCE 漏洞，Hacker News 5月14日报道。

### LiteLLM SQL注入（4月29日）
CVE-2026-42208，LiteLLM Python 包关键 SQL 注入漏洞，**披露后36小时内即被利用**。

---

## 3. AI×加密融合：AI Agent 交易全面加速

### Polymarket AI Agent 生态持续扩张
- **Chance AI**：Polymarket 上的自主交易 Agent（4月27日上线），将市场论点转化为自动执行
- **Fere AI**：完成130万美元融资，自主 Agent 已处理超**1000万次**链上操作，覆盖 Ethereum、Solana、Polymarket
- **PolyScripts/agents**：Polymarket 官方 AI Agent 工具包（Python，MIT 许可）
- **CEREBRO**：Solana 链上 AI Agent，Born 2026年2月4日，扫描加密/预测市场寻找 alpha

### AI 正在重写预测市场交易（CoinDesk）
AI Agent（如 Valory Olas 协议）实现**7×24小时**无休眠自主交易，散户获得与机构对等的策略执行力。Polymarket 已成为 AI Agent 密度最高的预测市场。

### 主流交易所全面拥抱 AI Agent 基础设施
- **AWS Bedrock AgentCore Payments**：联合 Coinbase、Stripe，支持 USDC 购买网络内容、API访问、MCP服务器
- **Binance**：为 AI Agent 提供"交易所级大脑"
- **OKX OnchainOS**：AI 升级版，定位自主加密交易 Agent 基础设施
- **1024EX**：主网上线，AgentX 覆盖现货、永续合约和预测市场

### AI 加密项目风险提示
MEXC 报道（5月12日）：当前 AI×Crypto 项目风险点：
- 计算网络（Render/akash）已有明确应用
- AI Agent 代币高度投机，实用价值尚未验证
- 警惕"Token 发行"包装的 MLM 骗局

---

## 4. AI Agent 框架：LangGraph 生产部署领先

GitHub Trending（2026-05-16）：
| 项目 | Star | 类型 |
|------|------|------|
| OpenHands | 60,428+ | Coding Agent |
| MetaGPT | 59,594+ | AI Agent |
| opencode | 54,700+ | Coding Agent |
| AutoGen | 48,178+ | AI Agent |
| CrewAI | 37,518+ | AI Agent |

**LangGraph**（LangChain 生态）成为生产级首选：Klarna、Cisco、Vizient 等落地部署最多，原生支持 MCP，兼容 100+ LLM。

---

**数据来源**：The Hacker News / Anthropic 官网 / OpenAI 官网 / Google DeepMind / CoinDesk / CoinDesk / PRNewswire / MEXC / GlobeNewswire / EIN Presswire
