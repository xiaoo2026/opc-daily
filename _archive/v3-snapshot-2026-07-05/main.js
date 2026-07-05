// ============================
// Una陪你看AI — 前端逻辑
// ============================

// ---- Latest Report Card ----
async function loadLatestReport() {
  const card = document.getElementById('latest-card');
  if (!card) return;

  const titleEl = document.getElementById('lc-title');
  const dateEl = document.getElementById('lc-date');
  const summaryEl = document.getElementById('lc-summary');

  try {
    const y = new Date().getFullYear();
    const m = String(new Date().getMonth() + 1).padStart(2, '0');

    // Try current month first, fall back to previous
    let reports = [];
    const months = [`${y}-${m}`, `${y}-${String(parseInt(m) - 1).padStart(2, '0')}`];

    for (const month of months) {
      try {
        const res = await fetch(`daily/${month}/index.json`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            reports = data;
            break;
          }
        }
      } catch {}
    }

    if (reports.length === 0) throw new Error('No reports');

    // Sort newest first (handle both ISO date and Chinese date formats)
    reports.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    const latest = reports[0];
    const dateStr = latest.date || '';
    const isOldFormat = !!latest.title; // 4月格式有title，5月格式没有

    if (dateEl) {
      if (isOldFormat) {
        dateEl.textContent = dateStr.replace('2026年', '').replace('月', '/').replace('日', '');
      } else {
        dateEl.textContent = dateStr;
      }
    }
    if (titleEl) {
      titleEl.textContent = latest.title || `📡 ${dateStr} 日报`;
    }
    if (summaryEl) {
      summaryEl.textContent = latest.summary || latest.html_url || '';
    }

    const linkEl = document.getElementById('latest-card');
    if (linkEl) {
      linkEl.href = latest.url || latest.html_url || `daily/${y}-${m}/${dateStr}/index.html`;
    }
  } catch (e) {
    if (titleEl) titleEl.textContent = '📡 今日暂无日报';
    if (summaryEl) summaryEl.textContent = '下一期将于今日 18:00 更新';
  }
}

// ---- Archive List (按月折叠 + 默认展开最近 1 个月) ----
async function loadArchive() {
  const listEl = document.getElementById('archive-list');
  if (!listEl) return;

  try {
    const months = ['2026-07', '2026-06', '2026-05', '2026-04'];  // 最新在前
    let allReports = [];

    for (const month of months) {
      try {
        const res = await fetch(`daily/${month}/index.json`);
        if (res.ok) {
          const reports = await res.json();
          allReports = allReports.concat(reports.map(r => ({ ...r, _month: month })));
        }
      } catch {}
    }

    // Sort newest first
    allReports.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    if (allReports.length === 0) {
      listEl.innerHTML = '<p class="empty-state">暂无历史日报</p>';
      return;
    }

    // 按月分组
    const grouped = {};
    for (const r of allReports) {
      const m = r._month || '其他';
      if (!grouped[m]) grouped[m] = [];
      grouped[m].push(r);
    }

    // 渲染每月组（最新月 default open）
    const html = months
      .filter(m => grouped[m] && grouped[m].length > 0)
      .map((month, idx) => {
        const items = grouped[month];
        const isLatest = idx === 0;
        const itemsHtml = items.map(r => {
          const dateStr = r.date || '';
          const isOldFormat = !!r.title;
          const shortDate = isOldFormat
            ? dateStr.replace('2026年', '').replace('月', '/').replace('日', '')
            : dateStr;
          const title = r.title || (isOldFormat ? '' : `📡 ${dateStr} ${r.type === 'morning' ? '早报' : r.type === '21evening' ? '21点晚报' : '晚报'}`);
          const href = r.url || r.html_url || '#';
          return `
            <a href="${href}" class="archive-item">
              <span class="date-badge">${shortDate}</span>
              <span class="title">${title}</span>
              <span class="arrow">→</span>
            </a>
          `;
        }).join('');
        return `
          <details class="archive-month" ${isLatest ? 'open' : ''}>
            <summary class="archive-month-header">
              <span class="month-label">${month}</span>
              <span class="month-count">${items.length} 篇</span>
            </summary>
            <div class="archive-month-list">${itemsHtml}</div>
          </details>
        `;
      }).join('');

    listEl.innerHTML = html;
  } catch (e) {
    listEl.innerHTML = '<p class="loading">加载失败</p>';
  }
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  loadLatestReport();
  loadWeekly();
  loadArchive();
});

// ---- Weekly Pick (本周精选 3 张 — 公众号切入点: 一周回顾 3 张图卡) ----
async function loadWeekly() {
  const gridEl = document.getElementById('weekly-grid');
  if (!gridEl) return;

  try {
    // 1. 拉最近 3 个月 daily/index.json
    const months = ['2026-04', '2026-05', '2026-06'];
    let allReports = [];
    for (const month of months) {
      try {
        const res = await fetch(`daily/${month}/index.json`);
        if (res.ok) {
          const data = await res.json();
          allReports = allReports.concat(data);
        }
      } catch {}
    }
    allReports.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    // 2. 取最近 7 个唯一日期 (每天最多取 morning/evening 一条, 优先 morning)
    const seen = new Set();
    const recent = [];
    for (const r of allReports) {
      if (seen.has(r.date)) continue;
      seen.add(r.date);
      recent.push(r);
      if (recent.length >= 7) break;
    }

    // 3. 取最近 3 条作"本周精选"
    const picks = recent.slice(0, 3);

    // 4. 类型标签
    const typeLabel = (type) => {
      if (type === 'morning') return '早报';
      if (type === 'afternoon') return '午报';
      if (type === 'evening') return '晚报';
      if (type === '21evening') return '21点晚报';
      return '日报';
    };

    // 5. 渲染
    gridEl.innerHTML = picks.map((r, i) => {
      const tags = ['GitHub', '行业', '工具'];
      const tag = tags[i] || '日报';
      const dateStr = r.date || '';
      const title = r.title || `📡 ${dateStr} ${typeLabel(r.type)}`;
      const href = r.url || r.html_url || '#';
      return `
        <a href="${href}" class="weekly-card">
          <div class="weekly-card-tag">${tag}</div>
          <div class="weekly-card-image"></div>
          <div class="weekly-card-body">
            <h3>${dateStr} ${typeLabel(r.type)}</h3>
            <p>${title}</p>
          </div>
        </a>
      `;
    }).join('');
  } catch (e) {
    gridEl.innerHTML = '<p class="loading">本周精选加载失败</p>';
  }
}
