# Una 视觉资产索引 (Canonical References)

最后更新: 2026-07-14 下午

## 主视觉 (C 拟人化, 大眼小眼镜签名)

`assets/una-canonical/UNA-CANONICAL-MAIN.jpeg`

图像来源: v3 batch2_3.jpeg (用户在 11 张里挑的第 7 张).
签名: 物种=豹猫 / 棒球帽 #E07856 / 小圆框眼镜 / 立姿警觉 / 暖橘单色.

用途: avatar / banner / 公众号 logo / 周边插图 / 公众号头图.

## 像素风 (A 像素, 大眼小眼镜签名)

`assets/una-canonical/UNA-CANONICAL-PIXEL.jpeg`

图像来源: v3-2 (像素 v3 batch 中挑的).
签名: 同主视觉 5 件, 适配 64-128px sprite size.

用途: favicon / 通知提醒 / 小图标 / 表情包基础 / 装饰.

## Archive 备选

`assets/una-canonical/UNA-ARCHIVE-PIXEL-VARIANT.jpeg`

图像来源: v3-4 (同款像素备选).
用途: 衍生 / 季节 / 失败回滚.

## 当前 production 上 020755.xyz 引用

- daily/*/index.html 内 `<img src="https://020755.xyz/assets/una-real/hero-v10-caught.jpeg">` 
- 暂时仍指向 7/14 前的 hero-v10-caught.jpeg (= 小熊猫/上一任 agent 遗产)

## 替换路径 (实际 production 上 canonical 的路径)

生产 URL 改用:
- 主视觉 → `https://020755.xyz/assets/una-canonical/UNA-CANONICAL-MAIN.jpeg` 
- 像素风 → `https://020755.xyz/assets/una-canonical/UNA-CANONICAL-PIXEL.jpeg`
- 备选 → `https://020755.xyz/assets/una-canonical/UNA-ARCHIVE-PIXEL-VARIANT.jpeg`

## 决策记录

`/home/ting/.opc-dry-run/totem/00-decision.md` — 物种为何选定, 形象路线为何 C, 眼镜为何保留, 像素为何 v3-2.

## Skill

`~/.hermes/skills/creative/una-visual-signature/SKILL.md` — 任何 cron / agent 引用.
