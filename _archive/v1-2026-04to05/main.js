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

// ---- Archive List ----
async function loadArchive() {
  const listEl = document.getElementById('archive-list');
  if (!listEl) return;

  try {
    const months = ['2026-04', '2026-05', '2026-06'];
    let allReports = [];

    for (const month of months) {
      try {
        const res = await fetch(`daily/${month}/index.json`);
        if (res.ok) {
          const reports = await res.json();
          allReports = allReports.concat(reports);
        }
      } catch {}
    }

    // Sort newest first, skip first (that's the latest shown in hero)
    allReports.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    if (allReports.length === 0) {
      listEl.innerHTML = '<p class="empty-state">暂无历史日报</p>';
      return;
    }

    listEl.innerHTML = allReports.map(r => {
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
  } catch (e) {
    listEl.innerHTML = '<p class="loading">加载失败</p>';
  }
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  loadLatestReport();
  loadArchive();
});
