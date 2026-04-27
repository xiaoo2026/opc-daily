// ============================
// OPC 情报日报 — 前端逻辑
// ============================

// 从 daily/ 目录读取日报索引
async function loadLatestReport() {
  const titleEl = document.getElementById('report-title');
  const metaEl = document.getElementById('report-meta');
  const summaryEl = document.getElementById('report-summary');
  const linkEl = document.getElementById('report-link');

  try {
    // 抓取当天日报索引
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;

    // 先尝试找当天日报的摘要文件
    const idxRes = await fetch(`daily/${y}-${m}/index.json`);
    if (!idxRes.ok) throw new Error('No index found');

    const reports = await idxRes.json();
    const latest = reports[0]; // 第一条是最新的

    titleEl.textContent = latest.title || `📡 ${dateStr} 日报`;
    metaEl.textContent = latest.date || dateStr;
    summaryEl.textContent = latest.summary || '';
    linkEl.href = latest.url || `daily/${y}-${m}/${dateStr}/index.html`;
  } catch (e) {
    titleEl.textContent = '📡 今日暂无日报';
    summaryEl.textContent = '下一期将于今日 18:00 更新';
    linkEl.style.display = 'none';
  }
}

async function loadArchive() {
  const listEl = document.getElementById('archive-list');
  try {
    // 扫描所有日报目录
    const months = ['2026-04']; // 后续可扩展为动态扫描
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

    if (allReports.length === 0) {
      listEl.innerHTML = '<p class="loading">暂无历史日报</p>';
      return;
    }

    listEl.innerHTML = allReports.map(r => `
      <a href="${r.url}" class="archive-item">
        <span class="date">${r.date}</span>
        <span>${r.title}</span>
        <span class="arrow">→</span>
      </a>
    `).join('');
  } catch (e) {
    listEl.innerHTML = '<p class="loading">加载失败</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadLatestReport();
  loadArchive();
});
