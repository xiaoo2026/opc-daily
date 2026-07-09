# 7/6 morning raw.md audit note (2026-07-09 review)

## 真相
- raw/2026-07-06-morning.md **不存在** — 早期 cron (skill v0.5 时代) 未写
- daily/2026-07/2026-07-06-morning/raw.md **不存在**
- voice.mp3 (1198 KB) 是 cron publish 时生成的, 当前 slot 有
- index.html (18 KB) 是 cron publish 时生成的

## 7/9 review find:
- 7/6 morning 是 cron 第一期 (7/6 07:01 publish) — skill v0.4.0 之前时代的 cron 实跑
- 那时 raw.md 不是 cron 必 deliver (后来才加的不变量)
- 已经无法 revert 找回 raw (cron 没有保留 raw 在别处)

## 候补方案
1. **接受丢失**: 承认 7/6 morning 没 raw.md, index.html + voice.mp3 都在, audit trail 不完整
2. **回炉重新 publish**: 7/6 morning 是 Meta Watermelon + ICML 首尔 + 英伟达算力分成. 看 7/6 morning index.html 内容, 手工 regress raw 30 条 from 公开信源 — but 是手工活不是 cron
3. **承认 + STATE.md 标记**: 当前 cron PASS 但 raw.md lost, 不补, 标记已 audit. 这是手工实跑不可恢复而 cron 当时 PASS 的认知空白, 后续 cron 强制写 raw.

## Una 主编拍板 (2026-07-09 review 报告)
**接受丢失**, 标记已 audit, 这是历史 cron 的限制, 不补.

cron 阶段 3 已修: `cp raw/<date>-<type>.md daily/<slot>/raw.md` 在 stage 3 落盘步骤 1 强制. 未来 cron 不再 silent skip.

7/6 morning 是历史 artifact, 没有 raw.md 是事实, 但跟 verify-evening 的 [8a/8b/8c/8d] 是兼容的 (这些都检查 index.html 内容, 不要求 raw.md).

## 主审 view
- 不慌: 7/6 morning voice + index 都是真的, content 可信
- 留档: 这一份 audit note 作为历史透明
- fix 路径: 以后 cron 全版本 (从 v0.6.7+) 都 enforce raw.md → 这种事不会再发生

— Una 主编, 2026-07-09
