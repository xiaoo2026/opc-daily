# Una 视觉资产索引 (Canonical References)

最后更新: 2026-07-14 (下午, 眼镜版 + 像素版本拍板)

## 主视觉 (C 拟人化, 大眼小眼镜签名)

`/home/ting/opc-daily-work/assets/una-totem/leopard-2026-07-14/UNA-CANONICAL-MAIN.jpeg`

图像来源: v3 batch2_3.jpeg (用户在 11 张里挑的第 7 张).
签名全在:
- 物种 = 豹猫 (Prionailurus bengalensis) ✓
- 棒球帽 (暖橘 #E07856, 微歪) ✓
- 小圆框眼镜 (相对大眼比例感) ✓
- 立姿警觉 + content ✓
- 主色暖橘 ✓

用途: avatar / banner / 公众号 logo / 周边插图 / 公众号头图

## 像素风 (A 像素, 大眼小眼镜签名)

`/home/ting/opc-daily-work/assets/una-totem/leopard-2026-07-14/UNA-CANONICAL-PIXEL.jpeg`

图像来源: pixel v3-2 (用户在 4 张像素备选里挑的 2).
签名: 同主视觉的 5 件不可改 (物种 + 棒球帽 + 圆框眼镜 + 暖橘 + 立姿警觉), 适配 64-128px sprite.

用途: favicon / 通知提醒 / 小图标 / 表情包基础 / 装饰

## Archive 备选 (4 张中的 1 张备选)

`/home/ting/opc-daily-work/assets/una-totem/leopard-2026-07-14/UNA-ARCHIVE-PIXEL-VARIANT.jpeg`

图像来源: pixel v3-4.
备用 = 季节 / 衍生 / 失败回滚. 跟 canonical 同时存在, 但默认不发布.

## V3 batch 完整存档 (11 张原始 + 4 张像素)

主视觉候选 (v3 batch): `opc-daily-work/assets/una-totem/leopard-2026-07-14-v3/` (11 张)
像素备选 (v3 pixel final): `opc-daily-work/assets/una-totem/leopard-2026-07-14-pixel-final/` (4 张)

这两套是 canonical + 1 archive 之外的全集, 留作未来重启用.

## V1 旧资产 (荒漠猫, 已废)

第一轮调研的荒漠猫 3 张已不存在 (替换为豹猫后删了). 不留.

## 决策记录

`/home/ting/.opc-dry-run/totem/00-decision.md` — 物种为何选定, 形象路线为何 C, 眼镜为何保留, 像素为何 v3-2.

## Skill

`~/.hermes/skills/creative/una-visual-signature/SKILL.md` — 任何 cron / agent 引用.

## 当前执行状态 (2026-07-14 12:xx)

✅ **主视觉 canonical = UNA-CANONICAL-MAIN.jpeg (第 7 张)** — 已永久归档
✅ **像素 canonical = UNA-CANONICAL-PIXEL.jpeg (v3-2)** — 已永久归档
✅ **像素备选 = UNA-ARCHIVE-PIXEL-VARIANT.jpeg (v3-4)** — 已永久归档
⏸ **替换 020755 现有小熊猫资产** — 等廷哥拍. 这是 destructive, 我不擅自动.

替换方案 (廷哥拍 = 我立刻执行):
1. opc-daily 现有引用: hero-v10-caught.jpeg (小熊猫, 7/14 前存在) → 用 UNA-CANONICAL-MAIN.jpeg 替换
2. opc-daily-work/assets/una-totem/ → 在 assets 设新 path, 让 production 引用新图
3. draft-daily.py prompt 加 signature instruction, 让未来 cron 自然出图都按签名
4. wrangler deploy 把新图推 production (推 main + wrangler deploy 这两步是 destructive boundary, 等廷哥拍)
