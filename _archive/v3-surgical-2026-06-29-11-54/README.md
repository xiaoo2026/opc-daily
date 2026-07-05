# Avatar 图片说明

本目录是网站头像 + 公众号封面图素材库。

## 现有文件

| 文件 | 用途 | 来源 |
|---|---|---|
| `una-avatar-1.jpg` | 备用头像 1 (正面照) | `~/.hermes/pets/_drafts/una-daily/d1_v10_caught.jpeg` 衍生 |
| `una-avatar-2.jpg` | 备用头像 2 (写作中) | `~/.hermes/pets/_drafts/una-daily/d2_v12_typing.jpeg` 衍生 |
| `una-avatar-3.jpg` | **主头像** (logo / og:image / favicon) | 廷哥 6/8 设计 |
| `una-morning.jpg` | 早报封面 | 6/8 简版 |

## 主头像 una-avatar-3.jpg

- 路径：`/assets/avatars/una-avatar-3.jpg`
- 在 index.html 中同时被三处引用：
  - `<link rel="icon">` favicon
  - Header logo `<img class="header-logo">`
  - og:image / itemprop:image / twitter:image (OG meta)
- 尺寸要求：≥ 1200×630 px（微信分享卡片 / OG 卡片标准）
- 文件大小：263 KB

## 公众号二维码位

WECHAT_APP_ID 注册后：
1. 上传公众号二维码到 `assets/qrcode/qrcode.jpg`
2. 替换 `index.html` sidebar 里 `qrcode-placeholder` 占位 div

## 同步关系

- `~/.hermes/pets/_drafts/una-daily/` 是 una 主图库（v3-v15 小熊猫）
- `opc-daily-work/assets/avatars/` 是网站静态素材（已选定版本）
- 两者**不自动同步**——**主图更新需要手动复制**
- v3 主图（半闭眼 + 爪子搭键盘）是 hero 候选 —— **6/28 决定暂不替换主头像**

## 维护

- 主图变更 → **要改 3 个引用点**
- 公众号二维码 → 单独 `assets/qrcode/` 目录
