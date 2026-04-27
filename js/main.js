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

    const idxRes = await fetch(`daily/${y}-${m}/index.json`);
    if (!idxRes.ok) throw new Error('No index found');

    const reports = await idxRes.json();
    if (!reports || reports.length === 0) throw new Error('Empty');

    const latest = reports[0];
    const dateStr = latest.date || '';

    // Format date nicely
    if (dateEl) dateEl.textContent = dateStr;
    if (titleEl) titleEl.textContent = latest.title || `📡 ${dateStr} 日报`;
    if (summaryEl) summaryEl.textContent = latest.summary || '';

    const linkEl = document.getElementById('latest-card');
    if (linkEl) linkEl.href = latest.url || `daily/${y}-${m}/${dateStr}/index.html`;
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
    const months = ['2026-04'];
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
      const shortDate = (r.date || '').replace('2026年', '').replace('月', '/').replace('日', '');
      return `
        <a href="${r.url}" class="archive-item">
          <span class="date-badge">${shortDate}</span>
          <span class="title">${r.title}</span>
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
