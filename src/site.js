const menuButton = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav.dataset.open = String(!open);
  });
}

const progressKey = 'rfg-last-taxi-progress-v1';
const checks = [...document.querySelectorAll('[data-zone-check]')];
const countNodes = [...document.querySelectorAll('[data-progress-count]')];
const bars = [...document.querySelectorAll('[data-progress-bar]')];

function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(progressKey) || '[]');
    return new Set(Array.isArray(value) ? value : []);
  } catch {
    return new Set();
  }
}

function renderProgress(progress) {
  checks.forEach((check) => {
    check.checked = progress.has(check.dataset.zoneCheck);
    check.closest('[data-zone-card]')?.classList.toggle('is-complete', check.checked);
  });
  countNodes.forEach((node) => { node.textContent = `${progress.size} / 7`; });
  bars.forEach((bar) => { bar.style.width = `${(progress.size / 7) * 100}%`; });
}

if (checks.length) {
  let progress = readProgress();
  renderProgress(progress);
  checks.forEach((check) => {
    check.addEventListener('change', () => {
      progress = readProgress();
      if (check.checked) progress.add(check.dataset.zoneCheck);
      else progress.delete(check.dataset.zoneCheck);
      localStorage.setItem(progressKey, JSON.stringify([...progress]));
      renderProgress(progress);
    });
  });
  document.querySelectorAll('[data-reset-progress]').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.removeItem(progressKey);
      renderProgress(new Set());
    });
  });
}

document.querySelectorAll('[data-activity-tracker]').forEach((tracker) => {
  const key = `rfg-${tracker.dataset.activityTracker}`;
  const activityChecks = [...tracker.querySelectorAll('[data-activity-check]')];
  const count = tracker.querySelector('[data-activity-count]');
  const bar = tracker.querySelector('[data-activity-bar]');

  function readActivityProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      return new Set(Array.isArray(value) ? value : []);
    } catch {
      return new Set();
    }
  }

  function renderActivityProgress(progress) {
    activityChecks.forEach((check) => {
      check.checked = progress.has(check.dataset.activityCheck);
      check.closest('[data-activity-row]')?.classList.toggle('is-complete', check.checked);
    });
    if (count) count.textContent = `${progress.size} / ${activityChecks.length}`;
    if (bar) bar.style.width = `${activityChecks.length ? (progress.size / activityChecks.length) * 100 : 0}%`;
  }

  renderActivityProgress(readActivityProgress());
  activityChecks.forEach((check) => {
    check.addEventListener('change', () => {
      const progress = readActivityProgress();
      if (check.checked) progress.add(check.dataset.activityCheck);
      else progress.delete(check.dataset.activityCheck);
      localStorage.setItem(key, JSON.stringify([...progress]));
      renderActivityProgress(progress);
    });
  });

  tracker.querySelector('[data-activity-reset]')?.addEventListener('click', () => {
    localStorage.removeItem(key);
    renderActivityProgress(new Set());
  });
});

const solverCopy = {
  'roof-signs': {
    title: 'Test the roof signs at close range.',
    body: 'Approach each lit sign. Decoys can switch off when Dylan gets close; re-scan the row for the sign that stays active or reacts after another taxi is tested.',
    href: '/puzzles/roof-signs/'
  },
  'taxi-lights': {
    title: 'Compare front, rear, and roof lights.',
    body: 'Walk around every cab. Match the unique combination for the current round and do not choose from the headlights alone.',
    href: '/puzzles/taxi-lights/'
  },
  'streetlight-rhythm': {
    title: 'Watch one complete lamp cycle.',
    body: 'Identify the flashing, steady, or out-of-sync streetlight requested by the round. Count at least two cycles before selecting.',
    href: '/puzzles/streetlight-rhythm/'
  },
  blackout: {
    title: 'Judge the taxis only during darkness.',
    body: 'Wait for the tunnel lamps to switch off, then compare which cab stays lit, goes completely dark, or flashes its roof sign in the blackout window.',
    href: '/puzzles/blackout/'
  },
  'mold-repair': {
    title: 'Remove the mold, then rebuild the cab.',
    body: 'Trace and clear the gray-linked mold sources first. Add only parts that complete the taxi silhouette; loose decoys can remain unused.',
    href: '/puzzles/mold-repair/'
  },
  shadows: {
    title: 'Use the portable light as a measuring tool.',
    body: 'Move the light past every cab at a consistent angle and distance. The taxi casting the odd shadow is the anomaly.',
    href: '/puzzles/shadows/'
  }
};

document.querySelectorAll('[data-solver]').forEach((solver) => {
  const result = solver.querySelector('[data-solver-result]');
  const buttons = [...solver.querySelectorAll('[data-solver-choice]')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = solverCopy[button.dataset.solverChoice];
      if (!selected || !result) return;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      result.innerHTML = `<span class="result-label">MATCHED FIELD RULE</span><h3>${selected.title}</h3><p>${selected.body}</p><a href="${selected.href}">Open full solution <span aria-hidden="true">-&gt;</span></a>`;
      result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
    });
  });
});
