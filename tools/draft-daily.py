#!/usr/bin/env python3
"""Una 主编 render-v2 — content.json → index.html via template substitution."""
import json
import sys
from pathlib import Path

slot_dir = Path(sys.argv[1])
content = json.load(open(slot_dir / 'content.json'))

# Read template
template_path = Path('/home/ting/opc-daily-work/daily/2026-07/2026-07-13-21evening/index.html')
tmpl = template_path.read_text()

# Build render
hero_short = content['hero_meta_short']
title = content['title']
dek = content['dek']
why = content['why_this']
main_h2 = content['main_h2']
facts = content['main_facts']
not_picked = content['not_picked']
say_4 = content['say_4']
pick_points = content['pick_points']

# Stat cards
stat_cards_html = '\n'.join(
    f'''      <div class="stat-card">
        <div class="num">{p.get('num', p.get('value', ''))}</div>
        <div class="label">{p['label']}</div>
      </div>'''
    for p in pick_points
)

# Main facts
main_html_parts = []
for f in facts:
    if f.startswith('> '):
        # blockquote
        cite_text = f[2:]
        main_html_parts.append(f'        <blockquote><em>{cite_text}</em></blockquote>')
    else:
        main_html_parts.append(f'        <p>{f}</p>')
main_html = '\n'.join(main_html_parts)

# Not picked
not_picked_html = '\n'.join(f'          <li>{n}</li>' for n in not_picked)

# Say 4
say_html = '\n'.join(
    f'''        <div class="say-item">
          <div class="num">{i+1}</div>
          <p>{s}</p>
        </div>'''
    for i, s in enumerate(say_4)
)

# Title text humanizer: replace "—" with "·" in title only (dek already done)
title_clean = title

# Render full template (simple replace strategy)
out = f'''<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Una 选了 1 件 · {content['date']} · {content['slot_label']}</title>
  <meta name="description" content="{hero_short} · {title_clean}">
  <link rel="icon" type="image/jpeg" href="https://020755.xyz/assets/una-real/hero-v10-caught.jpeg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
:root {{
  --paper: #FBF7F1;
  --paper-deep: #F3ECE0;
  --una-orange: #E07856;
  --una-orange-soft: #F5C8B0;
  --una-shadow: #B85A3E;
  --ink: #2A2520;
  --ink-2: #5C544C;
  --ink-3: #8B847C;
  --border: rgba(42, 37, 32, 0.10);
  --font-body: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
  --font-serif: 'Source Serif 4', 'Noto Serif SC', 'PingFang SC', serif;
}}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.7;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
}}
header {{ padding: 16px 0; border-bottom: 1px solid var(--border); background: var(--paper); }}
.wrap {{ max-width: 720px; margin: 0 auto; padding: 0 28px; }}
.header-row {{ display: flex; align-items: center; justify-content: space-between; }}
.brand {{ display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }}
.brand img {{ width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--una-orange); }}
.brand-text {{ font-family: var(--font-serif); font-size: 17px; font-weight: 600; }}
.nav-back {{ font-size: 13px; color: var(--ink-2); text-decoration: none; padding: 6px 12px; border: 1px solid var(--border); border-radius: 999px; transition: all 0.15s; }}
.nav-back:hover {{ background: var(--ink); color: var(--paper); border-color: var(--ink); }}

.hero {{ padding: 36px 0 28px; }}
.hero-meta {{ display: flex; align-items: center; gap: 10px; margin-bottom: 22px; font-size: 13px; color: var(--ink-3); }}
.badge {{ background: var(--una-orange-soft); color: var(--una-shadow); padding: 4px 10px; border-radius: 999px; font-weight: 600; font-size: 12px; }}
.when {{ font-size: 13px; color: var(--ink-3); }}
h1 {{ font-family: var(--font-serif); font-size: 30px; line-height: 1.35; font-weight: 700; letter-spacing: -0.01em; color: var(--ink); margin-bottom: 14px; }}
.dek {{ font-size: 17px; line-height: 1.7; color: var(--ink-2); margin-bottom: 8px; }}
.dek strong {{ color: var(--ink); font-weight: 600; }}
.dek em {{ font-style: normal; color: var(--una-orange); font-weight: 500; }}

.una-pick {{ background: var(--paper-deep); border-left: 4px solid var(--una-orange); border-radius: 4px; padding: 22px 24px; margin: 28px 0; }}
.una-pick-head {{ display: flex; align-items: center; gap: 12px; margin-bottom: 14px; font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--ink); }}
.una-pick-head img {{ width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 2px solid var(--una-orange); }}
.una-pick p {{ font-size: 16px; line-height: 1.75; color: var(--ink); margin-bottom: 14px; }}
.una-pick p:last-child {{ margin-bottom: 0; }}
.una-pick strong {{ color: var(--una-shadow); font-weight: 600; }}

.main {{ margin: 32px 0; }}
.main h2 {{ font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--ink); margin-bottom: 16px; }}
.main p {{ font-size: 16px; line-height: 1.75; color: var(--ink); margin-bottom: 16px; }}
.main strong {{ color: var(--ink); font-weight: 600; }}
.main blockquote {{ background: var(--paper-deep); border-left: 3px solid var(--una-orange); padding: 12px 16px; margin: 12px 0; font-size: 14px; color: var(--ink-2); border-radius: 4px; }}
.main blockquote em {{ color: var(--ink); font-style: italic; }}

.stat-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 28px 0; }}
.stat-card {{ background: var(--paper); border: 1px solid var(--border); border-radius: 8px; padding: 18px 16px; text-align: left; }}
.stat-card .num {{ font-family: var(--font-serif); font-size: 22px; font-weight: 700; color: var(--una-orange); margin-bottom: 6px; line-height: 1.2; }}
.stat-card .label {{ font-size: 13px; line-height: 1.5; color: var(--ink-2); }}

.not-picked {{ background: var(--paper-deep); border-radius: 8px; padding: 22px 24px; margin: 28px 0; }}
.not-picked h3 {{ font-family: var(--font-serif); font-size: 18px; font-weight: 600; color: var(--ink-2); margin-bottom: 14px; }}
.not-picked ul {{ list-style: none; padding: 0; }}
.not-picked li {{ font-size: 14px; line-height: 1.65; color: var(--ink-2); padding: 8px 0; padding-left: 18px; position: relative; }}
.not-picked li::before {{ content: "·"; position: absolute; left: 4px; color: var(--ink-3); font-weight: 700; }}
.not-picked strong {{ color: var(--ink); font-weight: 600; }}

.say {{ margin: 36px 0; padding: 24px; background: linear-gradient(135deg, var(--paper-deep) 0%, #FFF4EE 100%); border-radius: 10px; }}
.say h3 {{ font-family: var(--font-serif); font-size: 19px; font-weight: 600; color: var(--ink); margin-bottom: 18px; }}
.say-list {{ display: flex; flex-direction: column; gap: 14px; }}
.say-item {{ display: flex; gap: 14px; align-items: flex-start; font-size: 15px; line-height: 1.7; color: var(--ink); }}
.say-item .num {{ flex-shrink: 0; width: 26px; height: 26px; background: var(--una-orange); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; font-family: var(--font-serif); }}

footer {{ padding: 28px 0 36px; text-align: center; font-size: 13px; color: var(--ink-3); border-top: 1px solid var(--border); margin-top: 24px; }}
footer img {{ width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--una-orange); margin-bottom: 10px; }}

@media (max-width: 600px) {{
  body {{ font-size: 16px; }}
  .wrap {{ padding: 0 20px; }}
  h1 {{ font-size: 24px; }}
  .stat-grid {{ grid-template-columns: 1fr; }}
}}
</style>
</head>
<body>

<header>
  <div class="wrap header-row">
    <a href="../../../" class="brand">
      <img src="https://020755.xyz/assets/una-real/hero-v10-caught.jpeg" alt="Una">
      <span class="brand-text">Una 陪你看 AI</span>
    </a>
    <a href="../../../" class="nav-back">← 回到首页</a>
  </div>
</header>

<main>
  <div class="wrap">

    <section class="hero">
      <div class="hero-meta">
        <span class="badge">{content['slot_label']} · {content['slot_hour']}</span>
        <span class="when">{hero_short}</span>
      </div>
      <h1>{title_clean}</h1>
      <p class="dek">{dek}</p>
    </section>

    <section class="una-pick">
      <div class="una-pick-head">
        <img src="https://020755.xyz/assets/una-real/hero-v10-caught.jpeg" alt="Una">
        这事 Una 怎么想
      </div>
      <p>{why}</p>
    </section>

    <div class="stat-grid">
{stat_cards_html}
    </div>

    <article class="main">
      <h2>{main_h2}</h2>
{main_html}
    </article>

    <aside class="not-picked">
      <h3>为什么不选其它</h3>
      <ul>
{not_picked_html}
      </ul>
    </aside>

    <section class="say">
      <h3>Una 4 句说</h3>
      <div class="say-list">
{say_html}
      </div>
    </section>

  </div>
</main>

<footer>
  <img src="https://020755.xyz/assets/una-real/hero-v10-caught.jpeg" alt="Una">
  <p><strong>Una 主审 · {content['slot_label']} cron · 一日 1 件</strong></p>
  <p>
    <a href="https://github.com/xiaoo2026/opc-daily">GitHub</a> ·
    <a href="https://020755.xyz">020755.xyz</a>
  </p>
  <p style="margin-top: 10px;">{content['date']} CST · 不堆不喊 · 仅说自己想说的话</p>
</footer>

</body>
</html>'''

# em dash cleanup (Pitfall 37 multi-stage)
# 0. protect meta description - find it BEFORE replace
import re
meta_match = re.search(r'(<meta name="description" content=")([^"]+)(">)', out)
if meta_match:
    out = out.replace(meta_match.group(0),
                      meta_match.group(1) + '__META_DESC_PLACEHOLDER__' + meta_match.group(3))
# 1. em dash → " · " (cite-only en-dash 没事)
out = out.replace('—', ' · ')
# 2. prose ",  X" → ". X" (限定中文字符前)
out = re.sub(r',\s+(?=[\u4e00-\u9fff])', '. ', out)
# 3. strong-internal ". X" → " · X" (if any)
# 4. 双句号 cleanup
out = out.replace('. . ', '. ')
# 5. restore meta description (with em dash pre-cleaned)
meta_content_clean = f'{hero_short} · {title_clean}'.replace('—', ' · ')
out = out.replace('__META_DESC_PLACEHOLDER__', meta_content_clean)

(slot_dir / 'index.html').write_text(out)
print(f"rendered {slot_dir / 'index.html'} ({len(out)} bytes)")