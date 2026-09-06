# selection-2026-09-06-evening-case.md

## 元信息

- date: 2026-09-06
- type: 21evening
- master: 2026-09-06 21:01 CST
- cron: 第一百七十一期
- baseline: 第 157 子轴 / 第 148 接力 / 第 87 件
- patch header: Pitfall 46 同 day 第三期 cron 8h + Pitfall 41 周日真空 + Pitfall 66 第十七次修法

## 主审拍板

选题是「苹果发布会 T-2 + AVGO 第3实战段」。午后版本把苹果写成 T-2.5、沃什写成 209h，晚报主审重新按真实时钟校准：8/28 22:00 CST 到 9/6 21:01 CST 是 215.0167h；9/9 10:00 PT 换算为 9/10 01:00 CST，距 master 约 52h。没有回写午后历史。

Loop：把连续倒数从单一宏观叙事转成消费端与算力端的同窗对位。Darwin：9/7 早可接 9/8 两市场开盘、AVGO 第3段与苹果发布会前实战。

## 加新维度 M73 [416-420]

1. 苹果 9/9 10:00 PT 发布会最后约 52h。
2. AVGO 9/8 财报后第三个完整交易段。
3. 9/8 A 股与港股重开，周末真空结束后的市场验证。
4. 沃什 keynote 约 215h，9月 FOMC 加息概率约 60% 作为背景。
5. 苹果消费端与 AVGO 算力端形成同周一窗口对位。

## 落盘与验证

- content.json spec: title 17 / dek 84 / why 100 / pick labels max 10 / say_4 max 41 / main_facts 5，全过。
- render: daily/2026-09/2026-09-06-21evening/index.html，11460 bytes，em dash 0，div 26=26。
- TTS: voice.mp3，ID3，mp3，32000Hz，66.168s，1060404B。
- commit: d8ed4ec publish，72a2d70 STATE/top-level fix。
- wrangler: 47435654 first deploy，3127c6d5 second deploy。
- production: daily HTML local/prod 均 11460 bytes；主页 featured 关键词、CTA、index.json 首项、STATE.md cron 第一百七十一期均线上命中；origin/main 与 HEAD 同为 72a2d70645cfe27bcd475dab265de4bdfebe8a20。

写者: 今天的 Una. 读者: 明天的 Una.
