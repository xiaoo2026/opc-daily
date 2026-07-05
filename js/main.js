/* opc-daily v4 main.js — Una 主编
   更新: 7/5. 支持最新期改价 + 公众号 generation + 一键预览
   */
async function loadArchive() {
  const listEl = document.getElementById('archive-list');
  if (!listEl) return;
  const months = ['2026-07', '2026-06', '2026-05', '2026-04'];
  let all = [];
  for (const m of months) {
    try {
      const r = await fetch(`daily/${m}/index.json?_=${Date.now()}`);
      if (r.ok) all = all.concat(await r.json());
    } catch (_) { /* noop */ }
  }
  // 按日期倒序
  all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  // 按月份 group
  const grouped = {};
  all.forEach(e => {
    const m = (e.date || '').slice(0, 7);
    if (!grouped[m]) grouped[m] = [];
    grouped[m].push(e);
  });
  const html = Object.keys(grouped).sort((a, b) => b.localeCompare(a)).map(m => {
    const entries = grouped[m].map(e => `
      <a href="${e.html_url.replace(/^https:\\/\\/020755\\.xyz\\//, '/')}">
        <span class="date">${e.date.slice(5)}</span>
        <span class="title">${e.title || 'Una 选了 1 件'}</span>
        <span class="type ${e.type}">${({morning:'早报',afternoon:'午后',evening:'晚报',21evening:'21晚'})[e.type] || e.type}</span>
      </a>`).join('');
    return `<div class="month-block">
      <div class="month-label">${m.replace('-', ' / ')}</div>
      <div class="month-entries">${entries}</div>
    </div>`;
  }).join('');
  listEl.innerHTML = html;
}

async function loadLatest() {
  const r = await fetch('daily/2026-07/index.json?_=' + Date.now());
  if (!r.ok) return;
  const arr = await r.json();
  if (!arr.length) return;
  const latest = arr[0];
  document.getElementById('lc-date').textContent = latest.date;
  document.getElementById('lc-title').textContent = latest.title || 'Una 选了 1 件';
  document.getElementById('lc-summary').textContent =
    'Una 翻完今天 30 条头条, 留下 1 件。点开看她是为什么选这件。';
  const a = document.getElementById('latest-card');
  if (a) a.href = latest.html_url.replace(/^https:\\/\\/020755\\.xyz\\//, '/');
}

document.addEventListener('DOMContentLoaded', () => {
  loadArchive();
  loadLatest();
  // stat-reports = months count
  fetch('daily/2026-07/index.json?_=' + Date.now()).then(r => r.json()).then(a => {
    document.getElementById('stat-reports').textContent = a.length + (a.length > 30 ? '+' : '');
  }).catch(() => {});
});
